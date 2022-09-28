import React, { useState, useEffect } from "react";
import Header from "../Header/Header.js";
import Footer from "../Footer/Footer.js";
import Note from "../Note/Note";
import CreateArea from "../CreateArea/CreateArea.js";
import useFetch from "../../hooks/useFetch.js";
import "./App.css";


function App() {
  const [notesList, setNotesList] = useState([]);
  const { data, loading, error } = useFetch(process.env.REACT_APP_BACKEND_URL)
  useEffect(()=>{
    if (!loading && data) {
      setNotesList(()=> {
      return [ ...data]
    })
  console.log(notesList)}
  }, [data])
  
  // console.log(data)
  

  function deleteNote(id) {
    console.log(notesList)
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
      {!loading && notesList.map((note, index) => (
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
