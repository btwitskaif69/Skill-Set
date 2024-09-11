import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SignUp from './SignUp';
import LogIn from './LogIn';

export default function Navbar() {
  const [activeForm, setActiveForm] = useState(null); // null, 'signup', or 'login'

  const handleOnSignUp = () => {
    setActiveForm('signup');
  };

  const handleOnLogIn = () => {
    setActiveForm('login');
  };

  const closeForm = () => {
    setActiveForm(null);
  };

  const switchToSignUp = () => {
    setActiveForm('signup');
  };

  const switchToLogin = () => {
    setActiveForm('login');
  };

  const Logo = {
    SKILL_SET: '/Assets/Logo/Skill_Set.svg',
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
        <div className="container-fluid">
          <Link Home to='/Home' className="navbar-brand"><img src={Logo.SKILL_SET} alt="SKILL SET" style={{ height: '30px' }} /></Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link Home to='/Home' className="nav-link fs-6 text-dark" aria-current="page">Home</Link>
              </li>
              <li className="nav-item">
                <Link Courses to='/Courses' className="nav-link fs-6 text-dark">Courses</Link>
              </li>
              <li className="nav-item">
                <form className="d-flex" role="search">
                  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                  <button className="btn btn-outline-success custom-button" type="submit">Search</button>
                </form>
              </li>
            </ul>
            <div className="d-flex gap-2">
              <button onClick={handleOnLogIn} type="button" className="btn btn-outline-custom-button">Log In</button>
              <button onClick={handleOnSignUp} type="button" className="btn custom-button-default">Sign Up</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Render the forms conditionally and pass the switch handlers */}
      {activeForm === 'signup' && <SignUp onClose={closeForm} switchToLogin={switchToLogin} />}
      {activeForm === 'login' && <LogIn onClose={closeForm} switchToSignUp={switchToSignUp} />}
    </div>
  );
}
