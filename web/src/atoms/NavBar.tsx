import React from "react";

const HomeUrl = () => (window.location.href = "/");
const EditorUrl = () => (window.location.href = "/editor/");

export const NavBar = () => {
  return (
    <nav>
      <li>
        <ul onClick={HomeUrl}>Home</ul>
        <ul onClick={EditorUrl}>Editor</ul>
      </li>
    </nav>
  );
};