import React from "react"

export default function Note(props) {
  // const title = "This is a title"
  // const content = "This is the content"

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
    </div>
  )
}