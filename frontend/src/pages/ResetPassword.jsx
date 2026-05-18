import React, { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

const API_BASE_URL =
  import.meta.env.VITE_API_URL;

function ResetPassword() {
  const { token } = useParams();

  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(
        `${API_BASE_URL}/api/auth/reset-password/${token}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            password,
          }),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message);
      }

      setMessage(data.message);

      setTimeout(() => {
        navigate("/login");
      }, 1500);

    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <section className="auth-page auth-bg-login">
      <div className="container auth-wrapper">
        <div className="auth-card">

          <p className="eyebrow">
            ACCOUNT RECOVERY
          </p>

          <h1>Reset Password</h1>

          <p className="auth-subtext">
            Create a new secure password for your CropCircle account.
          </p>

          <form
            className="modern-form"
            onSubmit={handleSubmit}
          >

            <div className="form-group full-width">

              <label>
                New Password
              </label>

              <input
                type="password"
                placeholder="Enter new password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                required
              />

            </div>

            <button
              className="primary-btn"
              type="submit"
            >
              Update Password
            </button>

          </form>

          {message && (
            <p className="form-message">
              {message}
            </p>
          )}

          <p className="auth-switch">
            Back to{" "}
            <Link to="/login">
              Login
            </Link>
          </p>

        </div>
      </div>
    </section>
  );
}

export default ResetPassword;