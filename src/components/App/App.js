import React, { useState, useEffect } from "react";
import Header from "../Header/Header.js";
import Footer from "../Footer/Footer.js";
import Note from "../Note/Note";
import CreateArea from "../CreateArea/CreateArea.js";
import useFetch from "../../hooks/useFetch.js";
import axios from "axios";
import "./App.css";

function App() {
  const [notesList, setNotesList] = useState([]);
  const { data, loading, error } = useFetch(process.env.REACT_APP_BACKEND_URL);

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
    </div>
  );
}

export default App;
