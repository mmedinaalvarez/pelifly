import React from "react";
import { useCart } from "../../Context/CartContext";
import "./CardWidget.css";
import MovieIcon from "@mui/icons-material/LocalMovies";

const CardWidget = () => {
  const { cartItems } = useCart();

  const getTotalItemsInCart = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  // Función para combinar las cantidades de productos duplicados en el array
  const combineDuplicateItems = (cartItems) => {
    const combinedItems = [];
    cartItems.forEach((item) => {
      const existingItem = combinedItems.find((i) => i.movie === item.movie);
      if (existingItem) {
        existingItem.quantity += item.quantity;
      } else {
        combinedItems.push({ ...item });
      }
    });
    return combinedItems;
  };

  const combinedCartItems = combineDuplicateItems(cartItems);

  // Función para guardar los elementos del carrito en el localStorage
  const saveCartToLocalStorage = (cartItems) => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  };

  return (
    <div style={{ color: "whitesmoke" }} className="CartWidget">
      <MovieIcon />
      {combinedCartItems.map((item) => (
        <div className="widgetCartItem" key={item.movie}>
          <p>{item.movie}</p>
          <p>{item.quantity}</p>
        </div>
      ))}
      {/* <p>Total de productos en el carrito: {getTotalItemsInCart()}</p> */}
    </div>
  );
};

export default CardWidget;
