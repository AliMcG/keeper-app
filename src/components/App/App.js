import React, { useState } from "react"
import Header from "../Header/Header.js"
import Footer from "../Footer/Footer.js"
import Note from "../Note/Note"
// import notes from "../../notes"
import CreateArea from "../CreateArea/CreateArea.js"
import './App.css';


//CHALLENGE:
//1. Implement the add note functionality.
//- Create a constant that keeps track of the title and content.
//- Pass the new note back to the App.
//- Add new note to an array.
//- Take array and render seperate Note components for each item.

//2. Implement the delete note functionality.
//- Callback from the Note component to trigger a delete function.
//- Use the filter function to filter out the item that needs deletion.
//- Pass a id over to the Note component, pass it back to the App when deleting.

//This is the end result you're aiming for:
//https://pogqj.csb.app/


function App() {
  const [notes, setNotes] = useState([])

  function addNotes(note){
    console.log("was clicked")
    setNotes((prevValue) => [...prevValue, note])
    
  }

  return (
    <div className="App">
      <Header />
      <CreateArea addNote={addNotes}/>
      {notes.map( (note, index) => (
        <Note 
          key={index}
          title={note.title} 
          content={note.content}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
