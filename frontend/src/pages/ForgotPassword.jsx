import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const API_BASE_URL =
  import.meta.env.VITE_API_URL;

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const res = await fetch(`${API_BASE_URL}/api/auth/forgot-password`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      setMessage("Account verified. Redirecting to reset password...");

      setTimeout(() => {
        navigate(`/reset-password/${data.resetToken}`);
      }, 1000);
    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <section className="auth-page auth-bg-login">
      <div className="container auth-wrapper">
        <div className="auth-card">
          <p className="eyebrow">Account Recovery</p>

          <h1>Forgot Password?</h1>

          <p className="auth-subtext">
            Enter your registered email address to verify your account and reset
            your password.
          </p>

          <form className="modern-form" onSubmit={handleSubmit}>
            <div className="form-group full-width">
              <label>Email Address</label>

              <input
                type="email"
                placeholder="Enter your registered email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <button className="primary-btn" type="submit">
              Continue
            </button>
          </form>

          {message && <p className="form-message">{message}</p>}

          <p className="auth-switch">
            Remembered your password? <Link to="/login">Back to Login</Link>
          </p>
        </div>
      </div>
    </section>
  );
}

export default ForgotPassword;