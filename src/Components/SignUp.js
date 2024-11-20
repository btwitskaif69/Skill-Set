import React from "react";

function SignUp() {
  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{ backgroundColor: "/e7ecff" }}
    >
      <div className="card shadow p-4" style={{ width: "28rem", borderRadius: "1rem" }}>
        <div className="text-center">
          <h2 className="fw-bold text-primary mb-4">
            <i className="bi bi-gem" style={{ fontSize: "2rem" }}></i> Skill-Set
          </h2>
          <h5 className="fw-bold">Create an account</h5>
          <p className="text-muted">
            Enter your details to sign up for Skill-Set
          </p>
        </div>
        <form>
          <div className="mb-3">
            <label htmlFor="fullName" className="form-label">
              Full Name
            </label>
            <input
              type="text"
              className="form-control"
              id="fullName"
              placeholder="John Doe"
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
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <div className="input-group">
              <input
                type="password"
                className="form-control"
                id="password"
                required
              />
              <span className="input-group-text">
                <i className="bi bi-eye-slash"></i>
              </span>
            </div>
            <small className="text-muted">Password strength: Very Weak</small>
          </div>
          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
              required
            />
          </div>
          <div className="form-check mb-3">
            <input
              className="form-check-input"
              type="checkbox"
              id="terms"
              required
            />
            <label className="form-check-label" htmlFor="terms">
              I agree to the{" "}
              <a href="/" className="text-primary text-decoration-none">
                Terms of Service
              </a>
            </label>
          </div>
          <button type="submit" className="btn btn-dark w-100">
            Sign up
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
