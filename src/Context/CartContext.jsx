import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (movie, quantity) => {
    setCartItems((prevItems) => [
      ...prevItems,
      {
        movie: movie,
        quantity: quantity,
      },
    ]);
  };

  const removeFromCart = (movie) => {
    setCartItems((prevItems) => {
      return prevItems.filter((item) => item.movie !== movie);
    });
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
