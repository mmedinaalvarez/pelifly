import React from "react";
import "./Header.css";
import NavBar from "../NavBar/NavBar";

const header = (props) => {
  return (
    <div className="Header">
      <h1>{props.title}</h1>
    </div>
  );
};

export default header;
