import React from 'react';
import "./Header.css";


//Importar imagen
import img from "../../assets/logo.png"


const header = (props) => {
  return (
    <div className="Header">
      <h1>{props.title}</h1>
      <h2>{props.subtitle}</h2>
      <img src={img} alt="logo-coder" />
      </div>
  )
}

export default header