import React, { useState, useContext, useEffect } from "react";
import { CartContext } from "../../Context/CartContext";
import TextField from "@mui/material/TextField";
import "./ShopPage.css";
import MessageSuccess from "../../components/MessageSuccess/MessageSuccess";

//Firebase
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import DetailBuys from "../../components/DetailBuys/DetailBuys";

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
    }
  };

  return (
    <div>
      <div>
        <DetailBuys />
      </div>
      <div style={styles.containerShop}>
        <h2 style={{ color: "blue" }}>
          Ingrese sus datos para finalizar la compra
        </h2>
        <form
          className="FormContainer"
          style={{ marginLeft: "auto", marginRight: "auto", width: 450 }}
          onSubmit={onSubmit}
        >
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
          <button className="btnASendAction">Comprar</button>
        </form>

        {purchaseID ? <MessageSuccess purchaseID={purchaseID} /> : null}
      </div>
    </div>
  );
};

export default ShopPage;
