import React from "react";
import "./Header.css";

import { Link } from "react-router-dom";

const header = (props) => {
  return (
    <div className="Brand">
      <Link to="/">
        <h1>{props.title}</h1>
      </Link>
      {/* <NavBar /> */}
    </div>
  );
};

export default header;
