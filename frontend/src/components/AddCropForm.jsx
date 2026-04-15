import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddCropForm() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    price: "",
    location: "",
    image: null,
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "image") {
      setFormData((prev) => ({
        ...prev,
        image: files[0],
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    const token = localStorage.getItem("token");

    if (!token) {
      setMessage("Please login first to publish a crop listing.");
      setTimeout(() => {
        navigate("/login");
      }, 1000);
      return;
    }

    if (!formData.title || !formData.price || !formData.location || !formData.image) {
      setMessage("Please fill all fields and choose an image.");
      return;
    }

    try {
      setLoading(true);

      const cropData = new FormData();
      cropData.append("title", formData.title);
      cropData.append("price", formData.price);
      cropData.append("location", formData.location);
      cropData.append("image", formData.image);

      const res = await fetch("http://localhost:5000/api/crops", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: cropData,
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Failed to publish crop");
      }

      setMessage("Crop published successfully");

      setFormData({
        title: "",
        price: "",
        location: "",
        image: null,
      });

      const fileInput = document.getElementById("crop-image-input");
      if (fileInput) {
        fileInput.value = "";
      }

      setTimeout(() => {
        navigate("/marketplace");
      }, 900);
    } catch (error) {
      setMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="modern-form" onSubmit={handleSubmit}>
      <div className="form-grid">
        <div className="form-group">
          <label>Crop Name</label>
          <input
            type="text"
            name="title"
            placeholder="Enter crop name"
            value={formData.title}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Price</label>
          <input
            type="number"
            name="price"
            placeholder="Enter expected price"
            value={formData.price}
            onChange={handleChange}
          />
        </div>

        <div className="form-group full-width">
          <label>Location</label>
          <input
            type="text"
            name="location"
            placeholder="Enter city or village"
            value={formData.location}
            onChange={handleChange}
          />
        </div>

        <div className="form-group full-width">
          <label>Crop Image</label>
          <input
            id="crop-image-input"
            type="file"
            name="image"
            accept="image/*"
            onChange={handleChange}
          />
        </div>
      </div>

      <button type="submit" className="primary-btn">
        {loading ? "Publishing..." : "Publish Listing"}
      </button>

      {message && <p className="form-message">{message}</p>}
    </form>
  );
}

export default AddCropForm;