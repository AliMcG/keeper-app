import React, { useState, useEffect } from "react";
import Header from "../Header/Header.js";
import Footer from "../Footer/Footer.js";
import Note from "../Note/Note";
import CreateArea from "../CreateArea/CreateArea.js";
// import useFetch from "../../hooks/useFetch.js";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import "./App.css";

function App() {
  const [notesList, setNotesList] = useState([]);
  const { user, isAuthenticated } = useAuth0();

  useEffect(() => {
    if (isAuthenticated && user) {
      // console.log(user.sub);
      const userUrl = process.env.REACT_APP_BACKEND_URL + "/" + user.sub;
      axios
        .get(userUrl)
        .then((res) => {
          // console.log(res.data);
          setNotesList(() => {
            return [...res.data];
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [isAuthenticated]);

  async function deleteNote(id) {
    // console.log(notesList);
    setNotesList((prevValues) => {
      return prevValues.filter((note) => {
        if (note._id !== id) {
          return note;
        } else {
          // console.log("deleted", id);
          axios
            .delete(process.env.REACT_APP_BACKEND_URL, {
              data: { id: id },
            })
            .then(function (response) {
              // console.log(response.data);
            })
            .catch(function (error) {
              console.log(error);
            });
        }
      });
    });
  }

  return (
    <div className="App">
      {!isAuthenticated ? (
        <div>
          <Header />
        </div>
      ) : (
        <div>
          <Header />
          <CreateArea addNote={setNotesList} />
          {isAuthenticated &&
            notesList.map((note, index) => (
              <Note
                key={index}
                id={note._id}
                title={note.title}
                content={note.content}
                delete={deleteNote}
              />
            ))}
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
