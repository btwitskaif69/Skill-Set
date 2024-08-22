import React, { useState } from 'react';
import {Link} from 'react-router-dom';
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

  const Logo = {
    SKILL_SET: '/Assets/Logo/Skill_Set.svg',
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
        <div className="container-fluid">
          <a className="navbar-brand" href="/"><img src={Logo.SKILL_SET} alt="SKILL SET" style={{ height: '25px' }} /></a>

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
                <a className="nav-link fs-6 text-dark" aria-current="page" href="/"><Link to='/home'></Link>Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fs-6 text-dark" href="/">Link</a>
              </li>
              <li className="nav-item">
                <form className="d-flex" role="search">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button className="btn btn-outline-success custom-button" type="submit">Search</button>
                </form>
              </li>
            </ul>
            <div className="d-flex gap-2">
            <button onClick={handleOnLogIn} type="button" className="btn btn-outline-primary custom-button">Log In</button>

              <button onClick={handleOnSignUp} type="button" className="btn btn-primary" style={{ backgroundColor: '#210BE3', color: '#FFFFFF'}}>Sign Up</button>
            </div>
          </div>
        </div>
      </nav>
      {activeForm === 'signup' && <SignUp onClose={closeForm} />}
      {activeForm === 'login' && <LogIn onClose={closeForm} />}
    </div>
  );
}
