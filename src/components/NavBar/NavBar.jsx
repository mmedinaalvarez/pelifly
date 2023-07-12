import React from "react";

import "./NavBar.css";
import CardWidget from "../CardWidget/CardWidget.jsx";

import MenuGenres from "../MenuGenre/MenuGenres";

import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <Link className="li" to="/">
          Cartelera
        </Link>
        <Link className="li" to="/category/top_rated">
          Generos
        </Link>
        <Link className="li" to="/about">
          About
        </Link>
        <Link className="li" to="/contact">
          Contact
        </Link>
        <CardWidget />
      </ul>
    </nav>
  );
};

export default NavBar;
