import React from "react";

const HomeUrl = () => (window.location.href = "/");

export const NavBar = () => {
  return (
    <nav>
      <li>
        <ul onClick={HomeUrl}>Home</ul>
      </li>
    </nav>
  );
};