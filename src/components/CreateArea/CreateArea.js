import React, { useState } from "react";

function CreateArea(props) {
  // creates a state object that can be tapped into using Dot.Notation 
  const [note, setNote] = useState({
    title: "",
    content: ""
  })

  // using prevValue of the state object, the spread operator to spread then add the new value.
  // [name] reads the name from the input tag
  function handleChange(event){
    const {name, value} = event.target;
    
    setNote ((prevValue) => {
      return {...prevValue, [name]: value}
    })
    
  }
  // function handleClick(){
  //   console.log("this was clicked")

  // }

  return (
    <div>
      <form>
        <input onChange={handleChange} name="title" placeholder="Title" value={note.title}/>
        <textarea onChange={handleChange} name="content" placeholder="Take a note..." rows="3" value={note.content}/>
        <button onClick={() => {props.addNote(note)} }>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;