import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <section className="hero-section">
        <div className="hero-overlay" />
        <div className="container hero-content">
          <div className="hero-left">
            <p className="eyebrow">Smart crop marketplace</p>
            <h1>Buy and sell crops with clarity and trust</h1>
            <p className="hero-text">
  Explore crop listings with clear pricing, location details, and
  image-based previews designed for faster buying and selling.
</p>

            <div className="hero-actions">
              <Link to="/marketplace" className="primary-btn">
                Explore Marketplace
              </Link>
              <Link to="/sell-crop" className="secondary-btn">
                Sell Your Crop
              </Link>
            </div>

            <div className="hero-stats">
              <div>
                <h3>Easy</h3>
                <p>Simple listing flow</p>
              </div>
              <div>
                <h3>Clear</h3>
                <p>Crop details that matter</p>
              </div>
              <div>
                <h3>Fast</h3>
                <p>Quick buyer discovery</p>
              </div>
            </div>
          </div>

          <div className="hero-right">
            <div className="hero-card">
              <img
                src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1000&q=80"
                alt="Farmers in field"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="home-feature-strip">
        <div className="container feature-strip-grid">
          <div className="strip-card">
            <h3>Verified crop details</h3>
            <p>Listings include price, crop name, and location in one clean view.</p>
          </div>
          <div className="strip-card">
            <h3>Image-first browsing</h3>
            <p>See crop photos before making decisions or contacting sellers.</p>
          </div>
          <div className="strip-card">
            <h3>Farmer-friendly design</h3>
            <p>Simple pages built for easy navigation and quick listing access.</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;