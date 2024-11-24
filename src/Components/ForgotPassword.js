import React, { useState } from "react";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  async function handleForgotPassword(event) {
    event.preventDefault();
    setIsSubmitting(true);

    const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/forgot-password`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    const data = await response.json();
    setIsSubmitting(false);

    if (data.status === "ok") {
      setMessage("Password reset link sent! Check your email.");
    } else {
      setMessage("Failed to send reset link. Please try again.");
    }
  }

  return (
    <div
      className="d-flex justify-content-center align-items-center min-vh-100"
      style={{ backgroundColor: "#f9f9f9" }}
    >
      <div
        className="card p-5 shadow-lg rounded"
        style={{ maxWidth: "500px", width: "100%" }}
      >
        <h2 className="text-center mb-4">Forgot Password</h2>
        {message && (
          <div className={`alert ${message.includes("sent") ? "alert-success" : "alert-danger"}`} role="alert">
            {message}
          </div>
        )}
        <form onSubmit={handleForgotPassword}>
          <div className="mb-4">
            <label htmlFor="email" className="form-label">
              Enter your email
            </label>
            <input
              type="email"
              className="form-control form-control-lg"
              id="email"
              placeholder="username@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary btn-lg w-100"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send Reset Link"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;
