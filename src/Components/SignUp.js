import React, { useState } from 'react';
import { Link } from 'react-router-dom';


export default function SignUp({ onClose }) {
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleToggleConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className="modal-overlay">
      <div className="container d-flex justify-content-center align-items-center min-vh-100">
        <div className="row justify-content-center w-100">
          <div className="col-md-8 col-lg-5">
            <div className="p-4 bg-light border rounded shadow-sm position-relative">
              <button
                type="button"
                className="btn-close position-absolute top-0 end-0 mt-2 me-2"
                aria-label="Close"
                onClick={onClose}
              ></button>
              <h2 className="text-center mb-4">Sign Up</h2>
              <form>
                <div className="row mb-3">
                  <div className="col-12 col-md-6 mb-3 mb-md-0">
                    <label htmlFor="firstNameInput" className="form-label">First Name</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      id="firstNameInput" 
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div className="col-12 col-md-6">
                    <label htmlFor="lastNameInput" className="form-label">Last Name</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      id="lastNameInput" 
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>
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
                <div className="mb-3">
                  <label htmlFor="passwordInput" className="form-label">Password</label>
                  <input 
                    type="password" 
                    className="form-control" 
                    id="passwordInput" 
                    placeholder="Enter your password"
                  />
                </div>
                <div className="mb-3 position-relative">
                  <label htmlFor="confirmPasswordInput" className="form-label">Confirm Password</label>
                  <div className="input-group">
                    <input 
                      type={showConfirmPassword ? 'text' : 'password'} 
                      className="form-control pe-5" 
                      id="confirmPasswordInput" 
                      placeholder="Confirm your password"
                    />
                    <span 
                      className="input-group-text position-absolute end-0 pe-2 d-flex align-items-center" 
                      onClick={handleToggleConfirmPassword} 
                      style={{ cursor: 'pointer', zIndex: 10 }}
                    >
                      <i className={`bi ${showConfirmPassword ? 'bi-eye-slash' : 'bi-eye'}`} style={{ fontSize: '1.25rem' }}></i>
                    </span>
                  </div>
                </div>
                <button type="submit" className="btn btn-primary w-100">Sign Up</button>
                <div className="mt-3 text-center">
                Already on Skill Set? 
                <Link to="/login" className="text-primary" >&nbsp;Log In</Link>
              </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
