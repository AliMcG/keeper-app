import React from "react"
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import LogoutButton from "../Auth/Logout";

export default function Header() {
  return (
    <header>
      <h1><EmojiObjectsIcon />Keeper App</h1>
      <LogoutButton />
    </header>
  )
}