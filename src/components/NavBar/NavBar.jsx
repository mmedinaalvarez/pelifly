import React from "react";
import "./NavBar.css";
import CardWidget from "../CardWidget/CardWidget.jsx";

import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <Link className="li" to="/">
          Home
        </Link>
        <Link className="li" to="/about">
          About
        </Link>
        <Link className="li" to="/contact">
          Contact
        </Link>
        {/* <li>
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
        </li> */}
      </ul>
    </nav>
  );
};

export default NavBar;
