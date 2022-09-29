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
  const [deletedNote, setDeletedNote] = useState({})
  const { data, loading, error } = useFetch(process.env.REACT_APP_BACKEND_URL)
  useEffect(()=>{
    if (!loading && data) {
      setNotesList(()=> {
      return [ ...data]
    })
  console.log(notesList)}
  }, [data])
  
  // console.log(data)
  

  async function deleteNote(id) {
    console.log(notesList)
    setNotesList((prevValues) => {
      return prevValues.filter((note, index) => {
        // return note._id !== id;
        if (note._id !== id) {
          return note
        } else {
          setDeletedNote(note._id)
          console.log("deleted", note)
        }
      });
    });
    console.log(deletedNote._id)
    console.log(typeof deletedNote)
    // this is the bug. Only need the _id to send to the server to delete the whole object
    axios
      .delete(process.env.REACT_APP_BACKEND_URL, {
        deletedNote._id,
      })
      .then(function (response) {
        console.log(response);
        console.log(response.data);
        // setNewNote(response.data);
        // console.log(newNote);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <div className="App">
      <Header />
      <CreateArea addNote={setNotesList} />
      {!loading && notesList.map((note, index) => (
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
