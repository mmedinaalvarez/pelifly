import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import "./ShopPage.css";
import MessageSuccess from "../../components/MessageSuccess/MessageSuccess";

//Firebase
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

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

  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setValues({ ...values, [name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const docRef = await addDoc(collection(db, "purchasesCollection"), {
      values,
    });
    // console.log("Document written with ID: ", docRef.id);
    setPurchaseID(docRef.id);
    setValues(initialState);
  };

  return (
    <div style={styles.containerShop}>
      <h1 style={{ color: "blue" }}>Shop</h1>
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
        <button className="btnASendAction">Enviar</button>
      </form>

      {purchaseID ? <MessageSuccess purchaseID={purchaseID} /> : null}
    </div>
  );
};

export default ShopPage;
