import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const Texture = {
    txt1: "/Assets/Texture/axiom-pattern.png",
  };

  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
      className="d-flex justify-content-center align-items-center vh-100 p-4"
      style={{
        backgroundColor: "#210BE3",
        backgroundImage: `url(${Texture.txt1})`,
        backgroundRepeat: "repeat",
        backgroundSize: "80px 80px",
        height: "100vh",
        width: "100%",
        position: "absolute",
        top: 0,
        left: 0,
      }}
    >
      <div className="card shadow p-4" style={{ width: "28rem", minHeight: "34rem" }}>
        <h2 className="text-center mb-4" style={{ color: "#210BE3" }}>
          Login
        </h2>
        <form onSubmit={loginUser}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="m@example.com"
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
                className="input-group-text position-absolute end-0 pe-2 d-flex align-items-center"
                onClick={handleTogglePassword}
                style={{ cursor: "pointer", zIndex: 10 }}
              >
                <i
                  className={`bi ${showPassword ? "bi-eye-slash" : "bi-eye"}`}
                  style={{ fontSize: "1.25rem" }}
                ></i>
              </span>
            </div>
          </div>
          <button
            type="submit"
            className="btn custom-button-basic w-100"
            disabled={isLoading}
          >
            {isLoading ? "Logging in..." : "Login"}
          </button>
        </form>
        <div className="text-center mt-3">
          <a href="/" className="text-decoration-none text-primary">
            Forgot your password?
          </a>
        </div>
        <div className="text-center mt-3">
          <p className="mb-0">
            Don't have an account?{" "}
            <Link
              to="/api/signup"
              className="text-decoration-none"
              style={{ color: "#210BE3" }}
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
