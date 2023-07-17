import React, { useState, useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import "./ShoppingProduct.css";

//Toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ShoppingProduct = ({ movie }) => {
  const { cartItems, addToCart, movieName, moviePrice } =
    useContext(CartContext);
  const [quantity, setQuantity] = useState(0);

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
    console.log("cart items", cartItems);
    return combinedItems;
  };

  const combinedCartItems = combineDuplicateItems(cartItems);

  const handleAddToCart = () => {
    if (quantity > 0) {
      addToCart(movieName, quantity, moviePrice);

      setQuantity(0);
      setSelectedCinema("");
      setSelectedTime("");
    } else {
      toast.error("La cantidad debe ser mayor que cero.", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    setQuantity((prevQuantity) => Math.max(0, prevQuantity - 1));
  };

  const handleChangeQuantity = (e) => {
    const value = e.target.value;
    setQuantity(Math.max(0, parseInt(value)));
  };

  return (
    <Stack direction="row" spacing={1}>
      <div>
        <div className="IconsQuantity">
          <IconButton
            color="primary"
            aria-label="remove to shopping cart"
            onClick={handleDecrement}
          >
            <RemoveCircleOutlineIcon />
          </IconButton>
          <TextField
            label="Cantidad"
            variant="outlined"
            type="number"
            value={quantity}
            onChange={handleChangeQuantity}
            inputProps={{ min: 0, readOnly: true }}
          />
          <IconButton
            color="primary"
            aria-label="add to shopping cart"
            onClick={handleIncrement}
          >
            <AddCircleOutlineIcon />
          </IconButton>
        </div>

        <div>
          <Button
            variant="contained"
            onClick={handleAddToCart}
            style={{ marginTop: 20 }}
          >
            Añadir al carrito
          </Button>
          <ToastContainer />
        </div>
      </div>
    </Stack>
  );
};
export default ShoppingProduct;
