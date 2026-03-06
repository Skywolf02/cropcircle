import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="hero">
      <h1>Empowering Indian Farmers Digitally.</h1>
      <p>Direct trade, smart suggestions, and fair prices for every crop.</p>
      
      <div style={{ display: 'flex', gap: '20px', marginTop: '30px', flexWrap: 'wrap', justifyContent: 'center' }}>
        <div className="card">
          <h3>500+</h3>
          <p>Verified Farmers</p>
        </div>
        <div className="card">
          <h3>99%</h3>
          <p>Direct Sales</p>
        </div>
        <div className="card">
          <h3>Secure</h3>
          <p>Payments</p>
        </div>
      </div>
      <Link to="/marketplace">
        <button style={{ marginTop: '40px' }}>Explore Marketplace</button>
      </Link>
    </div>
  );
};

export default Home;