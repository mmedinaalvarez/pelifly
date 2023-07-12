import React from "react";
import MovieIcon from "@mui/icons-material/LocalMovies";
import "./CardWidget.css";

const CardWidget = () => {
  return (
    <div
      className="widgetCart"
      style={{ display: "flex", color: "whitesmoke" }}
    >
      <MovieIcon />
      <p style={{ color: "whitesmoke" }}>3</p>
    </div>
  );
};

export default CardWidget;
