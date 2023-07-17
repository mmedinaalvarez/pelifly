import React, { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import "./CardWidget.css";
import MovieIcon from "@mui/icons-material/LocalMovies";

const CardWidget = () => {
  const { cartItems } = useContext(CartContext);

  const combineDuplicateItems = (cartItems) => {
    const combinedItems = {};
    cartItems.forEach((item) => {
      const { id, quantity } = item;
      if (combinedItems[id]) {
        combinedItems[id].quantity += quantity;
      } else {
        combinedItems[id] = { ...item };
      }
    });
    return Object.values(combinedItems);
  };

  const combinedCartItems = combineDuplicateItems(cartItems);

  return (
    <div style={{ color: "whitesmoke" }} className="CartWidget">
      <MovieIcon />
      {combinedCartItems.map((item) => (
        <div className="widgetCartItem" key={item.movie}>
          <p>{item.quantity}</p>
        </div>
      ))}
    </div>
  );
};

export default CardWidget;
