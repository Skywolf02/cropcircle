import React from "react";

const API_BASE_URL =
  import.meta.env.VITE_API_URL || "http://localhost:5000";

function CropCard({ crop, showDelete = false, onDelete, onBuy }) {

  const handleDelete = () => {
    if (onDelete) {
      onDelete(crop._id);
    }
  };

  return (
    <article className="crop-card">
      <div className="crop-card-image-wrap">

        <img
          src={`${API_BASE_URL}/uploads/${crop.image}`}
          alt={crop.title}
          className="crop-card-image"
          onError={(e) => {
            e.target.src =
              "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=900&q=80";
          }}
        />

      </div>

      <div className="crop-card-content">

        <div className="crop-card-top">
          <h3>{crop.title}</h3>

          <span className="crop-badge">
            Available
          </span>
        </div>

        <p className="crop-price">
          ₹{crop.price}
        </p>

        <p className="crop-location">
          {crop.location}
        </p>

        <div className="crop-card-actions">

          <button
            className="secondary-btn crop-action-btn"
            onClick={() => onBuy(crop)}
          >
            Buy Now
          </button>

          {showDelete && (
            <button
              className="delete-btn crop-action-btn"
              onClick={handleDelete}
            >
              Delete Listing
            </button>
          )}

        </div>

      </div>
    </article>
  );
}

export default CropCard;