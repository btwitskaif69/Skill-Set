import React, { useState, useEffect } from "react";

function SignUp() {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [passwordStrengthLabel, setPasswordStrengthLabel] = useState("Very Weak");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
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

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      setIsLoading(false);
      return;
    }

    if (passwordStrength < 75) {
      setError("Please choose a stronger password");
      setIsLoading(false);
      return;
    }

    async function registerUser(event) {
      event.preventDefault();
    
      // Basic input validation
      if (!firstname || !lastname || !email || !password || !confirmpassword) {
        alert("Please fill in all fields.");
        return;
      }
    
      // Check if passwords match
      if (password !== confirmpassword) {
        alert("Passwords do not match.");
        return;
      }
    
      // Check password length and complexity
      if (password.length < 8) {
        alert("Password must be at least 8 characters long.");
        return;
      }
    
      // Check if the first letter is uppercase
      if (!/^[A-Z]/.test(password)) {
        alert("Password must start with an uppercase letter.");
        return;
      }
    
      // Check for at least one numeric character and one special character
      if (!/[0-9]/.test(password)) {
        alert("Password must contain at least one numeric character.");
        return;
      }
    
      if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
        alert("Password must contain at least one special character.");
        return;
      }
    
      // Proceed with the fetch request without confirmpassword
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });
    
      const data = await response.json();
    
      if (data.status === 'ok') {
        alert("Registration successful!");
      } else if (data.status === 'error') {
        if (data.error === 'Duplicate Email') {
          alert("This email is already registered. Please use a different email.");
        } else {
          alert("An unexpected error occurred. Please try again.");
        }
      } else {
        alert("Registration failed. Please fill all fields correctly.");
      }
    }

    // Add your form submission logic here (e.g., API call)
    console.log("Form submitted:", { fullName, email, password });
    setIsLoading(false);
    alert("Sign-up successful!");
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{ backgroundColor: "#e7e3ff" }}
    >
      <div
        className="card shadow p-4"
        style={{ width: "28rem", borderRadius: "1rem" }}
      >
        <div className="text-center">
          <h5 className="fw-bold">Create an account</h5>
          <p className="text-muted">Enter your details to sign up for Skill-Set</p>
        </div>
        <form onSubmit={registerUser}>
          <div className="mb-3">
            <label htmlFor="fullName" className="form-label">
              Full Name
            </label>
            <input
              type="text"
              className="form-control"
              id="fullName"
              placeholder="John Doe"
              value={fullName}
              onChange={(e) => setfirstname(e.target.value)}
              required
            />
          </div>
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
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <div className="input-group">
              <input
                type={showPassword ? 'text' : 'password'}
                className="form-control"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <span
                      className="input-group-text position-absolute end-0 pe-2 d-flex align-items-center"
                      onClick={handleTogglePassword}
                      style={{ cursor: 'pointer', zIndex: 10 }}>
                      <i className={`bi ${showPassword ? 'bi-eye-slash' : 'bi-eye'}`} style={{ fontSize: '1.25rem' }}></i>
                    </span>
            </div>
            <small className={`text-muted`}>
              Password strength: {passwordStrengthLabel}
            </small>
          </div>
          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          {error && <div className="text-danger mb-3">{error}</div>}
          <button type="submit" className="btn btn-dark w-100" disabled={isLoading}>
            {isLoading ? "Signing up..." : "Sign up"}
          </button>
        </form>
        <div className="text-center mt-3">
          <p>
            Already have an account?{" "}
            <a href="/" className="text-primary text-decoration-none">
              Log in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
