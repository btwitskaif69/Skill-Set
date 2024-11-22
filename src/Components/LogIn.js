import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const Cover = {
    bg: "/Assets/Background/image2.jpg",
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  async function loginUser(event) {
    event.preventDefault();
    setIsLoading(true);

    const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (data.user) {
      localStorage.setItem("token", data.user);
      alert("Login successful");
      window.location.href = "/home";
    } else {
      alert("Please check your username and password");
    }
  }

  return (
    <div
      className="d-flex justify-content-center align-items-center min-vh-100 p-4"
      style={{ backgroundColor: "#F4F4F4" }}
    >
      <div
        className="container shadow-lg rounded-3 overflow-hidden"
        style={{ maxWidth: "1200px", height: "675px" }}
      >
        <div className="row h-100">
          {/* Left Side */}
          <div
            className="col-lg-6 d-none d-lg-flex flex-column justify-content-center align-items-center text-white"
            style={{
              backgroundImage: `url(${Cover.bg})`, // Use the imported image correctly
              backgroundSize: "cover", // Ensure the background covers the whole area
              backgroundPosition: "center", // Position it in the center
              height: "100%",  /* Ensure this takes up full height */
            }}
          >
            <h1 className="mb-4 text-center" style={{ fontWeight: "bold", fontSize: "2.5rem" }}>
              Welcome Back!
            </h1>
            <p style={{ fontSize: "1.2rem", textAlign: "center" }}>
              Please login to your account.
            </p>
          </div>

          {/* Right Side */}
          <div className="col-lg-6 col-12 p-5 bg-white d-flex flex-column justify-content-center" style={{ height: "100%" }}>
            <h2
              className="text-center mb-4"
              style={{ fontWeight: "bold", color: "#210BE3" }}
            >
              Login
            </h2>
            <form onSubmit={loginUser}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  User Name
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="username@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="passwordInput" className="form-label">
                  Password
                </label>
                <div className="input-group">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="form-control"
                    id="passwordInput"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <span
                    className="input-group-text"
                    onClick={handleTogglePassword}
                    style={{ cursor: "pointer" }}
                  >
                    <i className={`bi ${showPassword ? "bi-eye-slash" : "bi-eye"}`}></i>
                  </span>
                </div>
              </div>
              <div className="d-flex justify-content-between align-items-center mb-4">
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="rememberMe"
                  />
                  <label className="form-check-label" htmlFor="rememberMe">
                    Remember Me
                  </label>
                </div>
                <a href="/" className="text-decoration-none text-primary">
                  Forgot Password?
                </a>
              </div>
              <button
                type="submit"
                className="btn btn-primary w-100"
                disabled={isLoading}
                style={{
                  backgroundColor: "#7D3CE9",
                  borderColor: "#7D3CE9",
                  fontWeight: "bold",
                }}
              >
                {isLoading ? "Logging in..." : "Login"}
              </button>
            </form>
            <div className="text-center mt-3">
              <p className="mb-0">
                New User?{" "}
                <Link
                  to="/api/signup"
                  className="text-decoration-none"
                  style={{ color: "#7D3CE9", fontWeight: "bold" }}
                >
                  Signup
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
