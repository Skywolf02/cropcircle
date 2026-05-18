import React, { useState } from "react";

function PaymentModal({ crop, onClose }) {
  const [method, setMethod] = useState("");
  const [success, setSuccess] = useState(false);
  const [buyQuantity, setBuyQuantity] = useState(1);

  const availableQuantity = Number(crop.quantity) || 1;
  const pricePerKg = Number(crop.price) / availableQuantity;
  const totalAmount = Math.round(pricePerKg * Number(buyQuantity));

  const handleQuantityChange = (e) => {
    const value = Number(e.target.value);

    if (value < 1) {
      setBuyQuantity(1);
    } else if (value > availableQuantity) {
      setBuyQuantity(availableQuantity);
    } else {
      setBuyQuantity(value);
    }
  };

  const handleConfirm = () => {
    if (!buyQuantity || buyQuantity <= 0) {
      alert("Please enter quantity to buy");
      return;
    }

    if (!method) {
      alert("Please select a payment method");
      return;
    }

    setSuccess(true);
  };

  return (
    <div className="payment-overlay" onClick={onClose}>
      <div className="payment-modal" onClick={(e) => e.stopPropagation()}>
        <button className="payment-close" onClick={onClose}>
          ×
        </button>

        {!success ? (
          <>
            <h2>Buy {crop.title}</h2>

            <p className="crop-price">
              Total Crop Price: ₹{crop.price}
            </p>

            <p>
              Available Quantity: <strong>{availableQuantity} kg</strong>
            </p>

            <div className="form-group full-width">
              <label>Quantity to Buy (kg)</label>

              <input
                type="number"
                min="1"
                max={availableQuantity}
                value={buyQuantity}
                onChange={handleQuantityChange}
              />
            </div>

            <p>
              Price per kg: <strong>₹{pricePerKg.toFixed(2)}</strong>
            </p>

            <h3>
              Payable Amount: ₹{totalAmount}
            </h3>

            <div className="payment-options">
              <button
                className={method === "UPI" ? "selected-payment" : ""}
                onClick={() => setMethod("UPI")}
              >
                📱 UPI
              </button>

              <button
                className={method === "Card" ? "selected-payment" : ""}
                onClick={() => setMethod("Card")}
              >
                💳 Card
              </button>

              <button
                className={method === "Net Banking" ? "selected-payment" : ""}
                onClick={() => setMethod("Net Banking")}
              >
                🏦 Net Banking
              </button>

              <button
                className={method === "COD" ? "selected-payment" : ""}
                onClick={() => setMethod("COD")}
              >
                📦 COD
              </button>
            </div>

            {method === "UPI" && (
              <div className="upi-box">
                <p>
                  <strong>Scan QR to Pay</strong>
                </p>

                <div className="fake-qr">
                  <div></div><div></div><div></div><div></div>
                  <div></div><div></div><div></div><div></div>
                  <div></div><div></div><div></div><div></div>
                  <div></div><div></div><div></div><div></div>
                </div>

                <p>
                  UPI ID: <strong>cropcircle@upi</strong>
                </p>

                <p>
                  Amount: <strong>₹{totalAmount}</strong>
                </p>
              </div>
            )}

            <p>
              Selected: <strong>{method || "None"}</strong>
            </p>

            <button className="primary-btn" onClick={handleConfirm}>
              Confirm Order
            </button>
          </>
        ) : (
          <div className="payment-success">
            <h2>✅ Order Placed</h2>

            <p>
              Your order for <strong>{crop.title}</strong> has been placed
              successfully.
            </p>

            <p>
              Quantity Bought: <strong>{buyQuantity} kg</strong>
            </p>

            <p>
              Payment Method: <strong>{method}</strong>
            </p>

            <p>
              Paid Amount: <strong>₹{totalAmount}</strong>
            </p>

            <button className="primary-btn" onClick={onClose}>
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default PaymentModal;