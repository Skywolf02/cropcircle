import React, { useEffect, useState } from "react";
import CropCard from "../components/CropCard";

function Marketplace() {
  const [crops, setCrops] = useState([]);
  const [filteredCrops, setFilteredCrops] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [message, setMessage] = useState("");

  const fetchCrops = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/crops");
      const data = await res.json();
      setCrops(data);
      setFilteredCrops(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCrops();
  }, []);

  useEffect(() => {
    const result = crops.filter((crop) =>
      `${crop.title} ${crop.location}`.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredCrops(result);
  }, [search, crops]);

  const handleDelete = async (id) => {
    const token = localStorage.getItem("token");

    if (!token) {
      alert("Please login first to delete your listing.");
      return;
    }

    const confirmDelete = window.confirm("Are you sure you want to delete this listing?");
    if (!confirmDelete) return;

    try {
      const res = await fetch(`http://localhost:5000/api/crops/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Failed to delete crop");
      }

      setMessage("Listing deleted successfully.");
      fetchCrops();
    } catch (error) {
      console.log(error);
      setMessage(error.message);
    }
  };

  return (
    <section className="page-section">
      <div className="container">
        <div className="page-header">
          <div>
            <p className="eyebrow">Marketplace</p>
            <h1>Browse available crop listings</h1>
            <p>
              Find crops by name or location with a simple and clean browsing experience.
            </p>
          </div>

          <div className="search-box">
            <input
              type="text"
              placeholder="Search by crop or location"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        {message && <p className="form-message">{message}</p>}

        {loading ? (
          <p className="status-message">Loading listings...</p>
        ) : filteredCrops.length === 0 ? (
          <p className="status-message">No crop listings found.</p>
        ) : (
          <div className="crop-grid">
            {filteredCrops.map((crop) => (
              <CropCard
                key={crop._id}
                crop={crop}
                showDelete={true}
                onDelete={handleDelete}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Marketplace;