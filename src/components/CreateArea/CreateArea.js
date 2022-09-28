import React, { useState } from "react";

function CreateArea(props) {
  const initialValue = {
    title: "",
    content: "",
  };
  // creates a state object that can be tapped into using Dot.Notation
  const [note, setNote] = useState(initialValue);

  function handleChange(event) {
    // destructs the event.target
    const { name, value } = event.target;
    // using prevValue of the state object, the spread operator to spread then add the new value.
    // [name] reads the name from the input tag
    setNote((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  }
  function handleClick(event) {
    // takes the setState from App.js and adds the new value to it
    props.addNote((prevValue) => [...prevValue, note]);
    // resets the textarea to two empty strings
    setNote(initialValue);
    // This prevents the default clear setting on the form HTML element
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={note.title}
        />
        <textarea
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={note.content}
        />
        <button onClick={handleClick}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
