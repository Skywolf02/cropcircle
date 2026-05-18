import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <Link to="/" className="brand" onClick={closeMenu}>
          <span className="brand-icon">🌱</span>
          <span className="brand-text">CropCircle</span>
          <span className="brand-tagline">Smart crop marketplace</span>
        </Link>

        <button className="menu-toggle" onClick={() => setOpen(!open)}>
          ☰
        </button>

        <nav className={`nav-links ${open ? "show-menu" : ""}`}>
          <NavLink to="/" onClick={closeMenu}>Home</NavLink>
          <NavLink to="/marketplace" onClick={closeMenu}>Marketplace</NavLink>
          <NavLink to="/sell-crop" onClick={closeMenu}>Sell Crop</NavLink>
          <NavLink to="/crop-info" onClick={closeMenu}>Crop Info</NavLink>
          <NavLink to="/login" onClick={closeMenu}>Login</NavLink>
          <NavLink to="/signup" onClick={closeMenu}>Signup</NavLink>
          <NavLink to="/contact" onClick={closeMenu}>Contact</NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;