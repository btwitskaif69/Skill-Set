import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Footer() {
  const Logo = {
    SKILL_SET: '/Assets/Logo/Skill_Set.svg',
  };

  const navigate = useNavigate();

  const handleClick = () => {
    window.scrollTo(0, 0); // Scroll to the top of the page
    navigate('/Home'); 
  };

  return (
    <footer className="text-center text-lg-start text-white" style={styles.footer}>
      <section className="container text-center text-md-start mt-5">
        <div className="row mt-3">
          {/* Logo and Buttons Section */}
          <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            <h4 className="text-uppercase fw-bold">
              <img src={Logo.SKILL_SET} alt="SKILL SET" style={{ height: '25px' }} />
            </h4>
            <p style={{ color: 'black' }}>Start your journey now.</p>
            <button className="btn custom-button-default me-2 mb-2">
              <Link to='/Courses' className='nav-link' style={{ color: 'inherit', textDecoration: 'none' }}>Explore Courses</Link>
            </button>
            <button  className="btn custom-button-default-white mb-2">Join Us Now</button>
          </div>

          {/* Company Links Section */}
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold" style={{ color: '#210BE3' }}>Company</h6>
            <p><Link to='/home' onClick={handleClick} className='nav-link' style={{ color: 'Black', textDecoration: 'none' }}>Home</Link></p>
            <p><Link to='/Courses' onClick={handleClick} className='nav-link'  style={{ color: 'Black', textDecoration: 'none' }}>Courses</Link></p>
            <p><Link style={{ color: 'Black', textDecoration: 'none' }}>Blog</Link></p>
            <p><Link style={{ color: 'Black', textDecoration: 'none' }}>Terms of Service</Link></p>
            <p><Link style={{ color: 'Black', textDecoration: 'none' }}>Privacy Policy</Link></p>
          </div>

          {/* Follow Us Section */}
          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold" style={{ color: '#210BE3', marginBottom: '10px' }}>Follow Us</h6>
            <div className="d-grid gap-2">
              <a href="https://www.linkedin.com/in/btwitskaif69/" target="_blank" rel="noreferrer" className="btn custom-button-default btn-lg mb-2 bi bi-linkedin custom-button">&nbsp;</a>
              <a href="https://x.com/btwitskaif69/" target="_blank" rel="noreferrer" className="btn custom-button-default btn-lg mb-2 bi bi-twitter-x custom-button">&nbsp;</a>
              <a href="https://github.com/btwitskaif69" target="_blank" rel="noreferrer" className="btn custom-button-default btn-lg mb-2 bi bi-github custom-button">&nbsp;</a>
            </div>
          </div>
        </div>
      </section>

      <div className="text-center p-3" style={styles.bottomBar}>
        <p className="mb-0">© 2024 Skill Set All rights reserved.</p>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: '#f5f7fa',
    color: 'blue',
    paddingTop: '20px',
    marginTop: 'auto',
    position: 'relative',
    bottom: 0,
    width: '100%',
  },
  bottomBar: {
    backgroundColor: '#210BE3',
    paddingBottom: '0px',
  },
};
