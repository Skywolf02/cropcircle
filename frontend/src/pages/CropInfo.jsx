import React, { useState } from "react";

const crops = [
  {
    name: "Wheat",
    category: "Cereal Crop",
    icon: "🌾",
    season: "Rabi / Winter",
    climate: "Cool weather during growth and dry weather during harvesting.",
    soil: "Well-drained loamy or clay-loam soil with good fertility.",
    water: "Moderate irrigation, especially at crown root and flowering stage.",
    fertilizer: "Nitrogen, phosphorus and potassium based on soil test.",
    diseases: "Rust, smut and powdery mildew.",
    harvesting: "Harvest when crop turns golden yellow and grains become hard.",
    uses: "Flour, bread, biscuits, chapati and animal feed.",
    wiki: "https://en.wikipedia.org/wiki/Wheat",
    learn: "https://www.britannica.com/plant/wheat",
  },
  {
    name: "Rice",
    category: "Cereal Crop",
    icon: "🍚",
    season: "Kharif / Monsoon",
    climate: "Warm and humid climate with high rainfall.",
    soil: "Clayey or clay-loam soil with good water holding capacity.",
    water: "High water requirement, especially during transplanting and tillering.",
    fertilizer: "Nitrogen, phosphorus, potassium and zinc if deficient.",
    diseases: "Blast, bacterial leaf blight and sheath blight.",
    harvesting: "Harvest when grains become mature and panicles turn yellow.",
    uses: "Staple food, rice flour, flakes, bran oil and animal feed.",
    wiki: "https://en.wikipedia.org/wiki/Rice",
    learn: "https://www.britannica.com/plant/rice",
  },
  {
    name: "Mung Bean",
    category: "Pulse Crop",
    icon: "🫘",
    season: "Summer / Kharif",
    climate: "Warm climate with moderate humidity.",
    soil: "Well-drained sandy loam or loamy soil.",
    water: "Low to moderate water requirement.",
    fertilizer: "Phosphorus and potassium; excess nitrogen is usually avoided.",
    diseases: "Yellow mosaic virus, powdery mildew and root rot.",
    harvesting: "Harvest when most pods turn black or brown.",
    uses: "Dal, sprouts, protein-rich food and soil fertility improvement.",
    wiki: "https://en.wikipedia.org/wiki/Mung_bean",
    learn: "https://vikaspedia.in/agriculture",
  },
  {
    name: "Cotton",
    category: "Fiber Crop",
    icon: "☁️",
    season: "Kharif",
    climate: "Warm climate with long frost-free period.",
    soil: "Black cotton soil or deep well-drained loamy soil.",
    water: "Moderate; avoid waterlogging.",
    fertilizer: "Requires balanced NPK and micronutrients.",
    diseases: "Bollworm, wilt and leaf curl virus.",
    harvesting: "Pick cotton when bolls fully open.",
    uses: "Textile fiber, cottonseed oil and cattle feed.",
    wiki: "https://en.wikipedia.org/wiki/Cotton",
    learn: "https://www.britannica.com/topic/cotton-fibre-and-plant",
  },
  {
    name: "Sugarcane",
    category: "Cash Crop",
    icon: "🎋",
    season: "Annual crop",
    climate: "Hot and humid climate with long growing season.",
    soil: "Deep fertile loamy soil with good drainage.",
    water: "High water requirement.",
    fertilizer: "Requires nitrogen, phosphorus, potassium and organic manure.",
    diseases: "Red rot, smut and wilt.",
    harvesting: "Harvest mature canes when sugar content is high.",
    uses: "Sugar, jaggery, ethanol, molasses and bagasse.",
    wiki: "https://en.wikipedia.org/wiki/Sugarcane",
    learn: "https://www.britannica.com/plant/sugarcane",
  },
  {
    name: "Maize",
    category: "Cereal Crop",
    icon: "🌽",
    season: "Kharif / Rabi / Spring",
    climate: "Warm climate with good sunlight.",
    soil: "Fertile well-drained loamy soil.",
    water: "Moderate; critical stages are knee-high, tasseling and grain filling.",
    fertilizer: "Requires nitrogen-rich fertilization with balanced NPK.",
    diseases: "Leaf blight, stalk rot and downy mildew.",
    harvesting: "Harvest when husk dries and grains become hard.",
    uses: "Food, fodder, starch, oil and industrial products.",
    wiki: "https://en.wikipedia.org/wiki/Maize",
    learn: "https://www.britannica.com/plant/corn-plant",
  },
];

function CropInfo() {
  const [selectedCrop, setSelectedCrop] = useState(null);

  return (
    <section className="container crop-info-page">
      <div className="section-header">
        <span className="eyebrow">Crop Knowledge</span>
        <h1>Crop Information Center 🌾</h1>
        <p>
          Explore crop season, soil, climate, irrigation, disease care,
          harvesting and useful reference links.
        </p>
      </div>

      <div className="crop-info-grid compact">
        {crops.map((crop) => (
          <article className="crop-info-card compact-card" key={crop.name}>
            <div className="crop-card-mini-header">
              <span className="crop-icon">{crop.icon}</span>
              <span className="crop-category">{crop.category}</span>
            </div>

            <h2>{crop.name}</h2>

            <div className="crop-mini-info">
              <p><strong>Season:</strong> {crop.season}</p>
              <p><strong>Soil:</strong> {crop.soil}</p>
              <p><strong>Water:</strong> {crop.water}</p>
            </div>

            <button
              className="primary-btn crop-explore-btn"
              onClick={() => setSelectedCrop(crop)}
            >
              Explore Details
            </button>
          </article>
        ))}
      </div>

      {selectedCrop && (
        <div className="crop-modal-overlay" onClick={() => setSelectedCrop(null)}>
          <div className="crop-modal" onClick={(e) => e.stopPropagation()}>
            <button
              className="crop-modal-close"
              onClick={() => setSelectedCrop(null)}
            >
              ×
            </button>

            <div className="crop-modal-header">
              <span className="crop-modal-icon">{selectedCrop.icon}</span>
              <div>
                <span className="crop-category">{selectedCrop.category}</span>
                <h2>{selectedCrop.name}</h2>
              </div>
            </div>

            <div className="crop-modal-details">
              <p><strong>Season:</strong> {selectedCrop.season}</p>
              <p><strong>Climate:</strong> {selectedCrop.climate}</p>
              <p><strong>Soil:</strong> {selectedCrop.soil}</p>
              <p><strong>Water Need:</strong> {selectedCrop.water}</p>
              <p><strong>Fertilizer:</strong> {selectedCrop.fertilizer}</p>
              <p><strong>Common Diseases:</strong> {selectedCrop.diseases}</p>
              <p><strong>Harvesting:</strong> {selectedCrop.harvesting}</p>
              <p><strong>Uses:</strong> {selectedCrop.uses}</p>
            </div>

            <div className="crop-links">
              <a href={selectedCrop.wiki} target="_blank" rel="noreferrer">
                Wikipedia
              </a>
              <a href={selectedCrop.learn} target="_blank" rel="noreferrer">
                Learn More
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default CropInfo;