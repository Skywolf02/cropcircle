import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      setLoading(true);

      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Signup failed");
      }

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data));

      setMessage("Account created successfully");
      setTimeout(() => {
        navigate("/sell-crop");
      }, 800);
    } catch (error) {
      setMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="auth-page auth-bg-signup">
      <div className="container auth-wrapper">
        <div className="auth-card">
          <p className="eyebrow">Join CropCircle</p>
          <h1>Create your account</h1>
          <p className="auth-subtext">
            Start posting crop listings and connect with buyers more easily.
          </p>

          <form className="modern-form" onSubmit={handleSubmit}>
            <div className="form-group full-width">
              <label>Full Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="form-group full-width">
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="form-group full-width">
              <label>Password</label>
              <input
                type="password"
                name="password"
                placeholder="Create a password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="primary-btn">
              {loading ? "Creating..." : "Create Account"}
            </button>
          </form>

          {message && (
            <p className="form-message">{message}</p>
          )}

          <p className="auth-switch">
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Signup;