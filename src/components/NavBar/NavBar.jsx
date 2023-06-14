import React from "react";
import "./NavBar.css";
import CardWidget from "../CardWidget/CardWidget.jsx";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href="http://www.google.com">HOME</a>
        </li>
        <li>
          <a href="http://www.google.com">ESTRENOS</a>
        </li>
        <li>
          <a href="http://www.google.com">CARTELERA</a>
        </li>
        <li>
          <a href="http://www.google.com">PROXIMOS ESTRENOS</a>
        </li>
        <li>
          <CardWidget />
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
