import React from 'react'
import CardWidget from '../CardWidget/CardWidget';

import "./NavBar.css";



const NavBar = () => {
  return (
    <nav>
        <ul>
            <li> <a href="https://www.google.com">Home</a></li>
            <li> <a href="https://www.google.com">Estrenos</a></li>
            <li> <a href="https://www.google.com">Cartelera</a></li>
            <li> <a href="https://www.google.com">Proximos estrenos</a></li>
            <li><CardWidget /></li>
        </ul>
    </nav>
  )
}

export default NavBar;