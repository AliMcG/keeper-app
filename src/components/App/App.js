import React, { useState } from "react";
import Header from "../Header/Header.js";
import Footer from "../Footer/Footer.js";
import Note from "../Note/Note";
import CreateArea from "../CreateArea/CreateArea.js";
import "./App.css";


function App() {
  const [notesList, setNotesList] = useState([]);

  function deleteNote(id) {
    setNotesList((prevValues) => {
      return prevValues.filter((note, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="App">
      <Header />
      <CreateArea addNote={setNotesList} />
      {notesList.map((note, index) => (
        <Note
          key={index}
          id={index}
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
