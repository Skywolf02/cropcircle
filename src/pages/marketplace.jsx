import React from 'react';
import CropCard from '../components/cropcard';

const Marketplace = () => {
  // examples 
  const cropData = [
    { name: "Organic Wheat", price: "2200", unit: "Quintal", location: "Punjab", image: "🌾" },
    { name: "Basmati Rice", price: "4500", unit: "Quintal", location: "Haryana", image: "🍚" },
    { name: "Cotton (Kapas)", price: "7500", unit: "Quintal", location: "Gujarat", image: "☁️" },
    { name: "Yellow Mustard", price: "5400", unit: "Quintal", location: "Rajasthan", image: "🌼" }
  ];

  return (
    <div style={{ padding: '40px 20px' }}>
      <h2 style={{ color: 'var(--light-green)', textAlign: 'center', fontSize: '2.2rem' }}>Live Marketplace</h2>
      <p style={{ textAlign: 'center', marginBottom: '40px', opacity: 0.8 }}>Direct from the farm to your doorstep.</p>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
        gap: '20px', 
        padding: '0 5%' 
      }}>
        {cropData.map((crop, index) => (
          <CropCard 
            key={index}
            name={crop.name}
            price={crop.price}
            unit={crop.unit}
            location={crop.location}
            image={crop.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Marketplace;