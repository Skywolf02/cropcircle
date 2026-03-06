import React from 'react';

const CropCard = ({ name, price, location, unit, image }) => {
  return (
    <div className="card" style={{ textAlign: 'left', overflow: 'hidden' }}>
      <div style={{ 
        width: '100%', 
        height: '150px', 
        backgroundColor: 'rgba(0,0,0,0.2)', 
        borderRadius: '8px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '15px'
      }}>
        <span style={{ fontSize: '2rem' }}>{image || '🌾'}</span>
      </div>

      <h3 style={{ color: 'var(--light-green)', margin: '0 0 5px 0' }}>{name}</h3>
      <p style={{ fontSize: '1.1rem', fontWeight: 'bold', margin: '0' }}>₹{price} <span style={{ fontSize: '0.8rem', opacity: 0.7 }}>/ {unit}</span></p>
      <p style={{ fontSize: '0.8rem', opacity: 0.6, marginTop: '5px' }}>loc {location}</p>

      <button className="login-btn" style={{ padding: '8px', fontSize: '0.9rem', marginTop: '15px' }}>
        View Details
      </button>
    </div>
  );
};

export default CropCard;