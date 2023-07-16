import React from "react";
//React router dom
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import NavBar from "./components/NavBar/NavBar";

import "./App.css";

//Pages
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import MovieDetailPage from "./pages/MovieDetailPage/MovieDetailPage";
import ShopPage from "./pages/Shop/ShopPage";
import MovieGenrePage from "./pages/MovieGenrePage/MovieGenrePage";
import { CartProvider } from "./Context/CartContext";

const App = () => {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <NavBar title="Pelifly" />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/detail/:id" element={<MovieDetailPage />} />
            <Route path="/genre-movie/:genre" element={<MovieGenrePage />} />
            <Route path="/shop" element={<ShopPage />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;
