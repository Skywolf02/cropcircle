import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
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

      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Login failed");
      }

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data));

      setMessage("Login successful");
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
    <section className="auth-page auth-bg-login">
      <div className="container auth-wrapper">
        <div className="auth-card">
          <p className="eyebrow">Welcome back</p>
          <h1>Login to your account</h1>
          <p className="auth-subtext">
            Access your crop listings and continue managing your posts.
          </p>

          <form className="modern-form" onSubmit={handleSubmit}>
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
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="primary-btn">
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>

          {message && (
            <p className="form-message">{message}</p>
          )}

          <p className="auth-switch">
            New here? <Link to="/signup">Create an account</Link>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Login;