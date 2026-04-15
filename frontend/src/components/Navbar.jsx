import React from "react";
import { NavLink, Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <Link to="/" className="brand">
          <span className="brand-icon">🌱</span>
          <span className="brand-text">CropCircle</span>
          <span style={{ fontSize: "0.8rem", color: "#5c6b5d" }}>
  Smart crop marketplace
</span>
        </Link>

        <nav className="nav-links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/marketplace">Marketplace</NavLink>
          <NavLink to="/sell-crop">Sell Crop</NavLink>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/signup">Signup</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;