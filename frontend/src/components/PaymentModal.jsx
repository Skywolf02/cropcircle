import React, { useState } from "react";

function PaymentModal({ crop, onClose }) {
  const [method, setMethod] = useState("");

  const handlePayment = () => {
    if (!method) {
      alert("Select payment method");
      return;
    }

    alert(
      `Order placed successfully for ${crop.title} using ${method}`
    );

    onClose();
  };

  return (
    <div className="payment-overlay" onClick={onClose}>
      <div
        className="payment-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="payment-close" onClick={onClose}>
          ×
        </button>

        <h2>Buy {crop.title}</h2>
        <p className="crop-price">₹{crop.price}</p>

        <div className="payment-options">
          <button onClick={() => setMethod("UPI")}>
            📱 UPI
          </button>

          <button onClick={() => setMethod("Credit/Debit Card")}>
            💳 Card
          </button>

          <button onClick={() => setMethod("Net Banking")}>
            🏦 Net Banking
          </button>

          <button onClick={() => setMethod("Cash on Delivery")}>
            📦 COD
          </button>
        </div>

        <p>
          Selected:
          {" "}
          <strong>{method || "None"}</strong>
        </p>

        <button
          className="primary-btn"
          onClick={handlePayment}
        >
          Confirm Order
        </button>
      </div>
    </div>
  );
}

export default PaymentModal;