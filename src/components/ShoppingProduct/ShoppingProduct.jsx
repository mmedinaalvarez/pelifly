import * as React from "react";
import { useState } from "react";
import { useCart } from "../../Context/CartContext";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import "./ShoppingProduct.css";

const ShoppingProduct = ({ movie }) => {
  const { cartItems, addToCart, removeFromCart } = useCart();
  const [quantity, setQuantity] = useState(0);

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

  const handleAddToCart = () => {
    if (quantity > 0) {
      addToCart(movie, quantity);
      setQuantity(0); // Reseteamos la cantidad después de añadir al carrito
    } else {
      alert("La cantidad debe ser mayor que cero.");
    }
  };
  const handleRemoveFromCart = () => {
    removeFromCart(movie);
  };

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    setQuantity((prevQuantity) => Math.max(0, prevQuantity - 1));
  };

  const handleChangeQuantity = (e) => {
    const value = e.target.value;
    setQuantity(Math.max(0, parseInt(value))); // Evitamos valores negativos
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
            Comprar
          </Button>
        </div>
      </div>
    </Stack>
  );
};
export default ShoppingProduct;
