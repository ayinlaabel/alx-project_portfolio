import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SingleProdocut from "./pages/SingleProduct";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products/:id" element={<SingleProdocut />} />
        <Route path="login" element={<SingleProdocut />} />
        <Route path="register" element={<SingleProdocut />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
