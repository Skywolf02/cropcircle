import React from 'react';

const GovSchemes = () => {
  const schemes = [
    {
      title: "PM-KISAN",
      desc: "Financial benefit of ₹6000 per year in three equal installments to small and marginal farmer families.",
      link: "https://pmkisan.gov.in/"
    },
    {
      title: "Fasal Bima Yojana",
      desc: "Crop insurance scheme to provide financial support to farmers suffering from crop loss/damage.",
      link: "https://pmfby.gov.in/"
    },
    {
      title: "Soil Health Card",
      desc: "Helps farmers to improve soil health and increase yields by knowing the nutrient status of their land.",
      link: "https://soilhealth.dac.gov.in/"
    }
  ];

  return (
    <div style={{ padding: '60px 20px', textAlign: 'center' }}>
      <h2 style={{ color: 'var(--light-green)', fontSize: '2.5rem', marginBottom: '10px' }}>Government Schemes</h2>
      <p style={{ color: 'var(--text-light)', opacity: 0.8, marginBottom: '40px' }}>Explore official policies supporting Indian Agriculture.</p>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '25px', padding: '0 5%' }}>
        {schemes.map((scheme, index) => (
          <div key={index} className="card" style={{ textAlign: 'left' }}>
            <h3 style={{ color: 'var(--accent)' }}>{scheme.title}</h3>
            <p style={{ fontSize: '0.9rem', lineHeight: '1.5', margin: '15px 0' }}>{scheme.desc}</p>
            <a href={scheme.link} target="_blank" rel="noreferrer" style={{ color: 'var(--light-green)', fontWeight: 'bold', fontSize: '0.8rem' }}>
              LEARN MORE ↗
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GovSchemes;