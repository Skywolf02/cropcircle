import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ onLoginClick }) => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/" style={{ color: 'inherit' }}>
          Crop<span>Circle</span> 
        </Link>
      </div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/marketplace">Marketplace</Link></li>
        <li><Link to="/gov-schemes">Gov Schemes</Link></li>
        <li onClick={onLoginClick} style={{ color: 'var(--accent)', cursor: 'pointer', fontWeight: 'bold' }}>Login</li>
      </ul>
    </nav>
  );
};

export default Navbar;