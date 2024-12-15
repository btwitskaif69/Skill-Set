import React from 'react';

function Header() {
  const Header = {
    bg: "/Assets/Background/banner.jpg", // Correct property name
  };

  return (
    <div>
      <div className="container">
        <div className="row align-items-center">
          {/* Left Column (Text) */}
          <div className="col-lg-6">
            <h1 className="display-4 fw-bold mb-4">
              Develop your skills in a new & unique way
            </h1>
            <p className="lead text-muted mb-4">
              Explore a transformative approach to skill development on our online learning platform. 
              Uncover a new realm of learning experiences and elevate your expertise in unique ways.
            </p>
            <div className="d-flex gap-3">
              <button className="btn btn-primary px-4 py-2">
                Enroll Now
              </button>
              <button className="btn btn-outline-secondary px-4 py-2 d-flex align-items-center gap-2">
                What's Etech?
              </button>
            </div>
          </div>
          
          {/* Right Column (Image) */}
          <div className="col-lg-6 position-relative mt-5 mt-lg-0">
            <div className="hero-image-container mt-4" style={{ overflow: 'hidden', position: 'relative' }}>
              <img 
                src={Header.bg} 
                alt="Student learning" 
                className="img-fluid" 
                style={{ 
                  width: '100%',  // Ensure the image takes full width of the column
                  height: 'auto', // Let the height adjust based on the aspect ratio
                  maxHeight: '600px', // Increase the max height to make the image bigger
                  objectFit: 'contain', // Ensures the image fills the container while maintaining its aspect ratio

                }} 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
