import React, { useState } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";
import axios from "axios";

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
  async function handleClick(event) {
    axios
      .post(process.env.REACT_APP_BACKEND_URL, {
        ...note,
      })
      .then(function (response) {
        console.log(response);
        // takes the setState from App.js and adds the new value to it
        props.addNote((prevValue) => [...prevValue, response.data]);
        // resets the textarea to two empty strings
        setNote(initialValue);
      })
      .catch(function (error) {
        console.log(error);
      });
    // This prevents the default clear setting on the HTML form element
    event.preventDefault();
  }

  return (
    <div>
      <form className="create-note">
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
        <Zoom in={true}>
          <Fab onClick={handleClick}>
            <AddCircleIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
