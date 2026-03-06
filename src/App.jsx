import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/home';
import Marketplace from './pages/marketplace';
import GovSchemes from './pages/govschemes';
import Dashboard from './pages/dashboard';
import AuthModal from './components/authmodal';
import Footer from './components/footer';

function App() {
  const [showAuth, setShowAuth] = useState(false);

  return (
    <Router>
      <div className="app-container">
        <Navbar onLoginClick={() => setShowAuth(true)} />
        
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/marketplace" element={<Marketplace />} />
            <Route path="/gov-schemes" element={<GovSchemes />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </main>

        <Footer />

        {showAuth && <AuthModal onClose={() => setShowAuth(false)} />}
      </div>
    </Router>
  );
}

export default App;