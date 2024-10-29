import React, { useState, useEffect } from 'react';

export default function LogIn({ onClose, switchToSignUp }) {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    // Disable scroll when component mounts (modal is open)
    document.body.style.overflow = 'hidden';

    // Cleanup function to enable scroll when component unmounts (modal closes)
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	async function loginUser(event) {
		event.preventDefault()

    const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    

		const data = await response.json()

		if (data.user) {
			localStorage.setItem('token', data.user)
			alert('Login successful')
			window.location.href = '/home'
		} else {
			alert('Please check your username and password')
		}
	}

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
              <form onSubmit={loginUser}>
                <div className="mb-3">
                  <label htmlFor="emailInput" className="form-label">Email address</label>
                  <input 
                    className="form-control" 
                    id="emailInput" 
                    aria-describedby="emailHelp" 
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
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
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
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
                <button type="submit" value="Login" className="btn custom-button-basic w-100">Log In</button>
                <div className="mt-3 text-center">
                  Don’t have an account?
                  {/* Use the form-switching handler instead of Link */}
                  <span className="Signup" style={{ cursor: 'pointer', color: '#210BE3'}} onClick={switchToSignUp} >&nbsp;Sign Up</span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
