import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

export default function LogIn({ onClose }) {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="modal-overlay">
      <div className="container mt-4 position-absolute top-50 start-50 translate-middle">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-5">
            <div className="p-4 bg-light border rounded shadow-sm position-relative">
              <button
                type="button"
                className="btn-close position-absolute top-0 end-0 mt-2 me-2"
                aria-label="Close"
                onClick={onClose}
              ></button>
              <h2 className="text-center mb-4">Log In</h2>
              <form>
                <div className="mb-3">
                  <label htmlFor="emailInput" className="form-label">Email address</label>
                  <input 
                    type="email" 
                    className="form-control" 
                    id="emailInput" 
                    aria-describedby="emailHelp" 
                    placeholder="Enter your email"
                  />
                  <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3 position-relative">
                  <label htmlFor="passwordInput" className="form-label">Password</label>
                  <div className="input-group">
                    <input 
                      type={showPassword ? 'text' : 'password'} 
                      className="form-control pe-5" 
                      id="passwordInput" 
                      placeholder="Enter your password"
                    />
                    <span 
                      className="input-group-text position-absolute end-0 pe-2 d-flex align-items-center" 
                      onClick={handleTogglePassword} 
                      style={{ cursor: 'pointer', zIndex: 10 }}
                    >
                      <i className={`bi ${showPassword ? 'bi-eye-slash' : 'bi-eye'}`} style={{ fontSize: '1.25rem' }}></i>
                    </span>
                  </div>
                </div>
                <button type="submit" className="btn btn-primary w-100">Log In</button>
                {/* <div className="mt-3 text-center">
                Already have an account? 
                <Link to="/login" className="text-primary" >Log In</Link>
              </div> */}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
