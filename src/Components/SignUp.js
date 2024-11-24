import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [passwordStrengthLabel, setPasswordStrengthLabel] =
    useState("Very Weak");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();


  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };



  const Cover = {
    bg: "/Assets/Background/image2.jpg",
  };
  const Texture = {
    txt1: "/Assets/Texture/axiom-pattern.png",
  };
  const Logo = {
    lgw: "/Assets/logo/skill-set-white-Logo.png",
  };


  useEffect(() => {
    const strength = calculatePasswordStrength(password);
    setPasswordStrength(strength);
    setPasswordStrengthLabel(getPasswordStrengthLabel(strength));
  }, [password]);

  const calculatePasswordStrength = (password) => {
    let strength = 0;
    if (password.length > 7) strength += 25;
    if (/[a-z]/.test(password) && /[A-Z]/.test(password)) strength += 25;
    if (/\d/.test(password)) strength += 25;
    if (/[^a-zA-Z\d]/.test(password)) strength += 25;
    return strength;
  };

  const getPasswordStrengthLabel = (strength) => {
    if (strength === 0) return "Very Weak";
    if (strength <= 25) return "Weak";
    if (strength <= 50) return "Fair";
    if (strength <= 75) return "Good";
    return "Strong";
  };

  const registerUser = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    if (!name || !email || !password || !confirmpassword) {
      alert("Please fill in all fields.");
      setIsLoading(false);
      return;
    }

    if (password !== confirmpassword) {
      setError("Passwords do not match");
      setIsLoading(false);
      return;
    }

    if (passwordStrength < 75) {
      setError("Please choose a stronger password");
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/api/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            password,
          }),
        }
      );

      const data = await response.json();

      if (data.status === "ok") {
        alert("Registration successful!");
        navigate("/api/login"); // Navigate to the LogIn component on success
      } else if (data.status === "error") {
        if (data.error === "Duplicate Email") {
          alert(
            "This email is already registered. Please use a different email."
          );
        } else {
          alert("An unexpected error occurred. Please try again.");
        }
      } else {
        alert("Registration failed. Please fill all fields correctly.");
      }
    } catch (error) {
      alert("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

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
            <h2 className="text-start fw-bold fs-1 mb-4" style={{color: "#210BE3"}}>Sign Up</h2>
            <p className="text-muted">
            <b className="fw-semibold mb-4">Join us today! </b>Create your account to get started. 
            </p>
            <form onSubmit={registerUser}>
            <div className="mb-2">
            <label htmlFor="name" className="form-label mb-1">
              Name
            </label>
            <input
                className="form-control"
                id="fullnameInput"
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="John Doe"
                required
              />
          </div>
          <div className="mb-2">
            <label htmlFor="email" className="form-label mb-1">
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
          <div className="mb-2">
            <label htmlFor="password" className="form-label mb-1">
              Password
            </label>
            <div className="input-group">
              <input
                type={showPassword ? "text" : "password"}
                className="form-control"
                id="password"
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
                  style={{ fontSize: "1.15rem" }}
                ></i>
              </span>
            </div>
            <small className={`text-muted`}>
              Password strength: {passwordStrengthLabel}
            </small>
          </div>
          <div className="mb-4">
            <label htmlFor="confirmPassword" className="form-label mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
              value={confirmpassword}
              onChange={(e) => setConfirmpassword(e.target.value)}
              required
            />
          </div>
          {error && <div className="text-danger mb-3">{error}</div>}
          <button
            type="submit"
            value="Register"
            className="btn custom-button-basic btn-lg w-100"
            disabled={isLoading}
          >
            {isLoading ? "Signing up..." : "Sign up"}
          </button>
        </form>
            <div className="text-center mt-4">
          <p>
          Don’t have an account?{" "}
            <Link to='/api/login' className="text-decoration-none" style={{color: '#210BE3'}}>Log In</Link>
          </p>
        </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
