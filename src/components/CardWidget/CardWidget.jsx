import React from "react";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import "./CardWidget.css";

const CardWidget = () => {
  return (
    <div
      className="widgetCart"
      style={{ display: "flex", alignItems: "center", color: "whitesmoke" }}
    >
      <ShoppingBasketIcon />
      <p>3</p>
    </div>
  );
};

export default CardWidget;
