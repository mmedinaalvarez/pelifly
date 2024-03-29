import { AppBar, Container, Toolbar } from "@mui/material";

import React from "react";

import "./NavBar.css";
import CardWidget from "../CardWidget/CardWidget.jsx";

import MenuGenres from "../MenuGenre/MenuGenres";

import { Link } from "react-router-dom";

const styles = {
  linkButton: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    padding: "0",
  },
  purchaseButton: {
    color: "grey",
    fontSize: 18,
    fontWeight: "bold",
  },
};

const NavBar = (props) => {
  return (
    <AppBar
      position="static"
      className="ResponsiveNavigation"
      style={{ background: "#0c52c4", width: "100%", flexDirection: "row" }}
    >
      <div className="BrandContainer">
        <Link to="/">
          <h1>{props.title}</h1>
        </Link>
      </div>

      <Container maxWidth="xl" sx={{ zIndex: 1100 }}>
        <Toolbar disableGutters className="ResponsiveNavigationContainer">
          <Link to="/" style={styles.linkButton}>
            Cartelera
          </Link>
          <MenuGenres />

          <Link to="/shop" style={styles.linkButton}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <CardWidget />
            </div>
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;
