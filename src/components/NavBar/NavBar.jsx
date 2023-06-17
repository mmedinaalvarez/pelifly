import React from "react";

import "./NavBar.css";
import CardWidget from "../CardWidget/CardWidget.jsx";

import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <Link className="li" to="/">
          Estrenos
        </Link>

        <Link className="li" to="/category/top_rated">
          Mas populares
        </Link>
        <Link className="li" to="/category/upcoming">
          Proximamente
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
