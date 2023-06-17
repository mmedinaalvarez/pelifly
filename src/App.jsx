import React, { Component } from "react";
import "./App.css";

//React router dom
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";

//Pages

import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import ItemPage from "./pages/ItemPage/ItemPage";
import CategoryPage from "./pages/CategoryPage/Category";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header title="Pelifly" />
          <NavBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/item/:id" element={<ItemPage />} />
            <Route path="/category/:categoryId" element={<CategoryPage />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
