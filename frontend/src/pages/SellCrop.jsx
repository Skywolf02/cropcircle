import React from "react";
import AddCropForm from "../components/AddCropForm";

function SellCrop() {
  return (
    <section className="sell-page">
      <div className="container sell-layout">
        <div className="sell-info">
          <p className="eyebrow">Create listing</p>
          <h1>Post your crop with clear details</h1>
          <p>
            Add crop name, expected price, location, and image to create a clean
            listing that buyers can easily browse.
          </p>

          <div className="sell-points">
            <div className="sell-point">
              <span>01</span>
              <p>Add crop details clearly</p>
            </div>
            <div className="sell-point">
              <span>02</span>
              <p>Upload a crop image</p>
            </div>
            <div className="sell-point">
              <span>03</span>
              <p>Publish for buyers to discover</p>
            </div>
          </div>
        </div>

        <div className="sell-form-card">
          <AddCropForm />
        </div>
      </div>
    </section>
  );
}

export default SellCrop;