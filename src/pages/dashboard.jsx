import React from 'react';

const Dashboard = () => {
  return (
    <div style={{ padding: '60px 20px' }}>
      <h2 style={{ color: 'var(--light-green)', marginBottom: '30px' }}>User Dashboard</h2>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '40px' }}>
        <div className="card" style={{ borderLeft: '4px solid var(--primary-green)' }}>
          <p style={{ fontSize: '0.8rem', opacity: 0.7 }}>Active Listings</p>
          <h2 style={{ margin: '5px 0' }}>12</h2>
        </div>
        <div className="card" style={{ borderLeft: '4px solid var(--accent)' }}>
          <p style={{ fontSize: '0.8rem', opacity: 0.7 }}>Pending Orders</p>
          <h2 style={{ margin: '5px 0' }}>04</h2>
        </div>
        <div className="card" style={{ borderLeft: '4px solid #2196F3' }}>
          <p style={{ fontSize: '0.8rem', opacity: 0.7 }}>Total Earnings</p>
          <h2 style={{ margin: '5px 0' }}>₹14,200</h2>
        </div>
      </div>

      <div className="card">
        <h3>Recent Activity</h3>
        <p style={{ opacity: 0.6, marginTop: '10px' }}>No recent transactions found.</p>
      </div>
    </div>
  );
};

export default Dashboard;