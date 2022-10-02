import React from "react";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import LogoutButton from "../Auth/Logout";
import LoginButton from "../Auth/Login";
import { useAuth0 } from "@auth0/auth0-react";

export default function Header() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  return (
    <header>
      <h1>
        <EmojiObjectsIcon />
        Keeper App
      </h1>
      {!isAuthenticated ? (
        <div>
          <LoginButton />
          <LogoutButton />
        </div>
      ) : (
        <LogoutButton />
      )}
    </header>
  );
}
