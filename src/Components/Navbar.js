import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const Logo = {
    SKILL_SET: '/Assets/Logo/Skill_Set.svg',
  };

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
      const handleResize = () => {
          setScreenWidth(window.innerWidth);
      };

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
        <div className="container-fluid">
          <Link to='/home' className="navbar-brand">
            <img src={Logo.SKILL_SET} alt="SKILL SET" style={{ height: '30px' }} />
          </Link>

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
          <div className="collapse navbar-collapse mr-" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-0 mb-lg-0">
              <li className="nav-item me-2">
                <Link to='/home' className="nav-link fs-6 text-dark  text-nowrap" aria-current="page">Home</Link>
              </li>
              <li className="nav-item me-2"> {/* Added mx-2 here for consistent spacing */}
                <Link to='/courses' className="nav-link fs-6 text-dark  text-nowrap">Courses</Link>
              </li>
              <li className="nav-item me-2"> {/* Added mx-2 here for consistent spacing */}
                <Link to='/about-us' className="nav-link fs-6 text-dark  text-nowrap">About Us</Link>
              </li>
              <li className="nav-item me-2"> {/* Added mx-2 here for consistent spacing */}
                <Link to='/contact-us' className="nav-link fs-6 text-dark  text-nowrap">Contact Us</Link>
              </li>
              <li>
              <div className="search-bar">
            <form className={screenWidth > 991 ? "d-flex mb-0 me-2" : "d-flex mb-2 me-2"} role="search"> 
                  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                  <button className="btn custom-button-default-white" type="submit">Search</button>
                </form>
            </div>
              </li>
            </ul>
            
            
            <div className="d-flex gap-2">
              <Link to='/api/login'><button type="button" className="btn custom-button-default-white  text-nowrap">Log In</button></Link>
              <Link to='/api/signup'><button type="button" className="btn custom-button-default  text-nowrap">Sign Up</button></Link>
              
            </div>
          </div>
        </div>
      </nav>

      <style>
{`
  .nav-link.fs-6.text-dark.text-nowrap {
    color: #343a40;
    text-decoration: none;
    position: relative;
    transition: color 0.3s ease, transform 0.3s ease;
  }

  .nav-link.fs-6.text-dark.text-nowrap::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -2px;
    width: 0;
    height: 2px;
    background-color: #210BE3;
    border-radius: 1px;
    transition: width 0.3s ease;
  }

  /* Apply hover effects only for screens greater than 991px */
  @media (min-width: 992px) {
    .nav-link.fs-6.text-dark.text-nowrap:hover {
      color: #210BE3;
      transform: translateY(-1px); /* Slight upward movement */
    }

    .nav-link.fs-6.text-dark.text-nowrap:hover::after {
      width: 100%; /* Expands underline to full width */
    }
  }
`}
</style>


    </div>
  );
}

