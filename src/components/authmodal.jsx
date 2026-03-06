import React, { useState } from 'react';

const AuthModal = ({ onClose }) => {
  // Logic
  const [isRegister, setIsRegister] = useState(false);

  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
      backgroundColor: 'rgba(0, 0, 0, 0.85)', display: 'flex',
      justifyContent: 'center', alignItems: 'center', zIndex: 1000, backdropFilter: 'blur(5px)'
    }}>
      <div className="auth-modal" style={{ position: 'relative', width: '90%', maxWidth: '450px' }}>
        <button onClick={onClose} style={{ position: 'absolute', top: '15px', right: '15px', background: 'none', border: 'none', color: 'white', fontSize: '24px', cursor: 'pointer' }}>✕</button>
        
        <h2 style={{ textAlign: 'center', color: 'var(--light-green)' }}>
          {isRegister ? "Create Account" : "Farmer Login"}
        </h2>

        <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {/* Registration */}
          {isRegister && (
            <>
              <input type="text" placeholder="Full Name" />
              <div style={{ display: 'flex', gap: '10px' }}>
                <input type="number" placeholder="Age" style={{ width: '30%' }} />
                <select style={{ width: '70%', padding: '12px', borderRadius: '8px', background: 'rgba(255,255,255,0.05)', color: 'white', border: '1px solid rgba(255,255,255,0.1)' }}>
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">donald trump</option>
                </select>
              </div>
              <input type="text" placeholder="Contact Details" />
              <input type="text" placeholder="Profession (Farmer/Buyer)" />
            </>
          )}

          {/* Common things */}
          <input type="email" placeholder="Email Address" />
          <input type="password" placeholder="Password" />
          
          <button className="login-btn">
            {isRegister ? "Sign Up" : "Login"}
          </button>
        </div>

        <p style={{ textAlign: 'center', fontSize: '0.85rem', marginTop: '20px', color: '#ccc' }}>
          {isRegister ? "Already have an account?" : "New User?"} 
          <span 
            onClick={() => setIsRegister(!isRegister)} 
            style={{ color: 'var(--accent)', cursor: 'pointer', marginLeft: '5px', fontWeight: 'bold' }}
          >
            {isRegister ? "Login here" : "Register Here"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default AuthModal;