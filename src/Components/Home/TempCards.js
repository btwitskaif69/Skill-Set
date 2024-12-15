import React from 'react';

function Header() {
  const headerImage = "/Assets/Background/banner.jpg";

  return (
    <header className="">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Column (Text) */}
          <div className="col-lg-5"> {/* Slightly wider column for text */}
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
          <div className="col-lg-7"> {/* Adjusted width for balance */}
            <div 
              className="hero-image-container mt-4"
              style={{ 
                overflow: 'hidden',
                height: '650px', // Fixed height for consistency
              }}
            >
              <img 
                src={headerImage} 
                alt="Student learning" 
                className=""
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover', // Maintains aspect ratio while filling the container
                  objectPosition: 'center', // Centers the image
                }} 
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
