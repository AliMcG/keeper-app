import React from "react";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import AuthenticationButton from "../Auth/AuthenticationButton.js";
import Profile from "../Auth/Profile";

export default function Header() {
  return (
    <header>
      <h1>
        <EmojiObjectsIcon />
        Keeper App
      </h1>
      <Profile />
      <AuthenticationButton />
    </header>
  );
}
