import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Marketplace from "./pages/Marketplace";
import SellCrop from "./pages/SellCrop";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <main className="page-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/sell-crop" element={<SellCrop />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;