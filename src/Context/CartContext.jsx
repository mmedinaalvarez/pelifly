import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [movieName, setMovieName] = useState("");
  const [moviePrice, setMoviePrice] = useState(0);

  const addToCart = (movie, quantity, price) => {
    setCartItems((prevItems) => [
      ...prevItems,
      {
        movie: movie,
        quantity: quantity,
        price: price,
      },
    ]);
  };

  useEffect(() => {
    console.log("Updated cartItems:", cartItems);
  }, [cartItems]);

  const removeFromCart = (movie) => {
    setCartItems((prevItems) => {
      return prevItems.filter((item) => item.movie !== movie);
    });
  };

  const setMovieInfo = (name, price) => {
    setMovieName(name);
    setMoviePrice(price);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        movieName,
        moviePrice,
        setMovieInfo,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
