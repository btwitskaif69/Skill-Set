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
  const Texture = {
    txt1: "/Assets/Texture/axiom-pattern.png",
  };
  const Logo = {
    lgw: "/Assets/logo/skill-set-white-Logo.png",
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
      className="d-flex justify-content-center align-items-center min-vh-100 p-4 shadow-lg"
      style={{
        backgroundImage: `url(${Texture.txt1})`, // Reference the texture correctly
        backgroundRepeat: "repeat",    // Ensures the texture repeats
        backgroundSize: "80px 80px",   // Use fixed dimensions for consistent texture size
        height: "100vh",               // Full viewport height
        width: "100%",                 // Full viewport width
        position: "absolute",          // Positions the element across the whole screen
        top: 0,                        // Aligns the div to the top of the screen
        left: 0,                       // Aligns the div to the left of the screen
      }}
    >
      <div
        className="container shadow-lg rounded-3 overflow-hidden"
        style={{ maxWidth: "1200px", height: "675px" }}
      >
        <div className="row h-100">
          {/* Left Side */}
          <div
            className="col-lg-6 d-none d-lg-flex flex-column p-4"
            style={{
              backgroundImage: `url(${Cover.bg})`, // Use the imported image correctly
              backgroundSize: "cover", // Ensure the background covers the whole area
              backgroundPosition: "center", // Position it in the center
              height: "100%",  /* Ensure this takes up full height */
            }}
          >
<div
  className="logo"
  style={{
    backgroundImage: `url(${Logo.lgw})`,
    backgroundPosition: "top left",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain", // Ensures the image retains its aspect ratio
    width: "100%",
    height: "50px", // Adjust height based on your container
  }}
></div>

          </div>

          {/* Right Side */}
          <div className="col-lg-6 col-12 p-5 bg-white d-flex flex-column justify-content-center" style={{ height: "100%" }}>
            <h2 className="text-start fw-bold fs-1 mb-4" style={{color: "#210BE3"}}>Login</h2>
            <p>
            <b className="fw-semibold mb-4">Welcome Back! </b>Please log in to your account to continue. 
            </p>
            <form onSubmit={loginUser}>
              <div className="mb-4">
                <label htmlFor="email" className="form-label">
                  User Name
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
              <div className="mb-4">
                <label htmlFor="passwordInput" className="form-label">
                  Password
                </label>
                <div className="input-group">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="form-control form-control-lg rounded"
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
                  className={`bi ${showPassword ? "bi-eye-slash text-muted" : "bi-eye text-muted"}`}
                  style={{ fontSize: "1.5rem" }}
                ></i>
              </span>
                </div>
              </div>
              <div className="text-start mb-4">
                <Link to="/api/forgot-password" className="text-decoration-none" style={{color: "#210BE3"}}>Forgot Password?</Link>
              </div>
              <button
                type="submit"
                className="btn custom-button-basic btn-lg w-100"
                disabled={isLoading}
              >
                {isLoading ? "Logging in..." : "Login"}
              </button>
            </form>
            <div className="text-center mt-4">
          <p>
            Already have an account?{" "}
            <Link to='/api/signup' className="text-decoration-none" style={{color: '#210BE3'}}>Log in</Link>
          </p>
        </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
