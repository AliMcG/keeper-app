import React, { useState, useEffect } from "react";
import Header from "../Header/Header.js";
import Footer from "../Footer/Footer.js";
import Note from "../Note/Note";
import CreateArea from "../CreateArea/CreateArea.js";
import useFetch from "../../hooks/useFetch.js";
import axios from "axios";
import LoginButton from "../Auth/Login.js";
import { useAuth0 } from "@auth0/auth0-react";
import "./App.css";

function App() {
  const [notesList, setNotesList] = useState([]);
  const { data, loading, error } = useFetch(process.env.REACT_APP_BACKEND_URL);
  const { user, isAuthenticated, isLoading } = useAuth0();
  console.log(isAuthenticated)
  useEffect(() => {
    if (!loading && data) {
      setNotesList(() => {
        return [...data];
      });
    }
  }, [data]);

  async function deleteNote(id) {
    console.log(notesList);
    setNotesList((prevValues) => {
      return prevValues.filter((note) => {
        if (note._id !== id) {
          return note;
        } else {
          console.log("deleted", id);
          axios
            .delete(process.env.REACT_APP_BACKEND_URL, {
              data: { id: id },
            })
            .then(function (response) {
              console.log(response.data);
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
    {!isAuthenticated ? <div>
      <LoginButton />
    </div> :
    <div>
      <Header />
      <CreateArea addNote={setNotesList} />
      {!loading &&
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
    </div>}
    </div>
  );
}

export default App;
