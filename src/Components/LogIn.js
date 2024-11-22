import React from "react";


function Login() {

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow p-4" style={{ width: "24rem" }}>
        <div className="text-center">
          <h5 className="mb-3">Welcome back</h5>
          <p className="text-muted">Enter your credentials to access your account</p>
        </div>
        <form>
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
            <input
              type="password"
              className="form-control"
              id="password"
              required
            />
          </div>
          <button type="submit" className="btn btn-dark w-100">
            Sign in
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

              Sign up

          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
