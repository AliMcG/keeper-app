import React from "react"

export default function Note() {
  const title = "This is a title"
  const content = "This is the content"

  return (
    <div className="note">
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  )
}