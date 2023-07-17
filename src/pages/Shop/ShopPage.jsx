import React, { useState, useContext, useEffect } from "react";
import { CartContext } from "../../Context/CartContext";
import TextField from "@mui/material/TextField";
import "./ShopPage.css";

import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

//Firebase
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import DetailBuys from "../../components/DetailBuys/DetailBuys";

//Modal Mui

import Button from "@mui/material/Button";

import Modal from "@mui/material/Modal";
import SendIcon from "@mui/icons-material/Send";

const initialState = {
  name: "",
  lastName: "",
  phone: "",
  email: "",
  remail: "",
};

const styles = {
  containerShop: {
    textAlign: "center",
    paddingTop: 20,
  },
};

const ShopPage = () => {
  const [values, setValues] = useState(initialState);
  const [purchaseID, setPurchaseID] = useState(null);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { cartItems, clearCart } = useContext(CartContext);

  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setValues({ ...values, [name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (values.email !== values.remail) {
      alert("Los correos ingresados no coinciden");
    } else {
      const docRef = await addDoc(collection(db, "purchases"), {
        values,
        cartItems,
      });
      setPurchaseID(docRef.id);
      setValues(initialState);
      clearCart();
      toast.success(`Compra realizada con éxito. ID de compra: ${docRef.id}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      handleClose();
    }
  };

  return (
    <div>
      <div>
        <DetailBuys />
      </div>
      <div style={styles.containerShop}>
        <div>
          <Button
            variant="contained"
            endIcon={<SendIcon />}
            onClick={handleOpen}
          >
            Comprar
          </Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <form
              className="FormContainer"
              style={{ marginLeft: "auto", marginRight: "auto", width: 450 }}
              onSubmit={onSubmit}
            >
              <h2>Ingrese sus datos para finalizar la compra</h2>
              <TextField
                placeholder="Nombre"
                style={{ margin: 10, width: 400 }}
                name="name"
                value={values.name}
                onChange={handleOnChange}
              />
              <TextField
                placeholder="Apellido"
                style={{ margin: 10, width: 400 }}
                name="lastName"
                value={values.lastName}
                onChange={handleOnChange}
              />
              <TextField
                placeholder="Telefono"
                style={{ margin: 10, width: 400 }}
                name="phone"
                value={values.phone}
                onChange={handleOnChange}
              />
              <TextField
                placeholder="Email"
                style={{ margin: 10, width: 400 }}
                name="email"
                value={values.email}
                onChange={handleOnChange}
              />
              <TextField
                placeholder="Reingrese su Email"
                style={{ margin: 10, width: 400 }}
                name="remail"
                value={values.remail}
                onChange={handleOnChange}
              />
              <button className="btnASendAction">Finalizar compra</button>
            </form>
          </Modal>
        </div>

        <ToastContainer />
      </div>
    </div>
  );
};

export default ShopPage;
