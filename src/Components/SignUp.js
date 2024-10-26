import React, { useState, useEffect} from 'react';


export default function SignUp({ onClose, switchToLogin }) {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmpassword] = useState('');

  useEffect(() => {
    // Disable scroll when component mounts (modal is open)
    document.body.style.overflow = 'hidden';

    // Cleanup function to enable scroll when component unmounts (modal closes)
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  async function registerUser(event) {
		event.preventDefault()

		const response = await fetch('http://localhost:1337/api/register', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email,
				password,
			}),
		})

		const data = await response.json()

		if (data.status === 'ok') {
			history.push('/login')
		}
	}

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
              <form onSubmit={registerUser}>
                <div className="row mb-3">
                  <div className="col-12 col-md-6 mb-3 mb-md-0">
                    <label htmlFor="firstNameInput" className="form-label">First Name</label>
                    <input
                      className="form-control"
                      id="firstNameInput"
                      value={firstname}
                      onChange={(e) => setFirstname(e.target.value)}
                      type="text"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div className="col-12 col-md-6">
                    <label htmlFor="lastNameInput" className="form-label">Last Name</label>
                    <input
                      className="form-control"
                      id="lastNameInput"
                      value={lastname}
                      onChange={(e) => setLastname(e.target.value)}
                      type="text"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="emailInput" className="form-label">Email address</label>
                  <input
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    id="emailInput"
                    aria-describedby="emailHelp"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="passwordInput" className="form-label">Password</label>
                  <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
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
                      type={showPassword ? 'text' : 'password'}
                      value={confirmpassword}
                      onChange={(e) => setConfirmpassword(e.target.value)}
                      className="form-control pe-5"
                      id="confirmPasswordInput"
                      placeholder="Confirm your password"
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
                <button type="submit" value="Register" className="btn custom-button-basic w-100">Sign Up</button>
                <div className="mt-3 text-center">
                  Already on Skill Set?
                  <span className="login" style={{ cursor: 'pointer', color: '#210BE3' }} onClick={switchToLogin}> Log In</span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
