import React from 'react';

export default function Carousel() {

    const carouselHeight = '600px';
    
  return (
    <div>
        {/* Carousel */}
<div id="carouselExampleCaptions" className="carousel slide" style={{ height: carouselHeight }}>
  <div className="carousel-inner">
    
    {/* First Slide */}
    <div className="carousel-item active">
      <img src="/Assets/Slides/FirstSlide.jpg" className="d-block w-100" alt="First slide" style={{ height: carouselHeight, objectFit: 'cover' }} />
      <div className="carousel-caption d-flex flex-column justify-content-center align-items-start" style={{ top: '50%', transform: 'translateY(-50%)', left: '10%', textAlign: 'left', maxWidth: '500px' }}>
        <h1 className="display-4 text-dark" style={{ fontWeight: 'bold' }}>Get job ready with new AI skills</h1>
        <p className="lead text-dark">Stand out to employers with an industry-leading Professional Certificate and must-have AI skills from top companies.</p>
        <div>
          <button className="btn btn-primary btn-lg me-3">Explore certificates</button>
          <button className="btn btn-outline-primary btn-lg">Join for free</button>
        </div>
      </div>
    </div>
    
    {/* Second Slide */}
    <div className="carousel-item">
      <img src="/Assets/Slides/SecondSlide.jpg" className="d-block w-100" alt="Second slide" style={{ height: carouselHeight, objectFit: 'cover' }} />
      <div className="carousel-caption d-flex flex-column justify-content-center align-items-start" style={{ top: '50%', transform: 'translateY(-50%)', left: '10%', textAlign: 'left', maxWidth: '500px' }}>
        <h1 className="display-4 text-dark" style={{ fontWeight: 'bold' }}>Master AI and data science</h1>
        <p className="lead text-dark">Earn credentials that showcase your expertise in AI and data science, opening doors to new career opportunities.</p>
        <div>
          <button className="btn btn-primary btn-lg me-3">Start learning</button>
          <button className="btn btn-outline-primary btn-lg">Discover more</button>
        </div>
      </div>
    </div>
    
    {/* Third Slide */}
    <div className="carousel-item">
      <img src="/Assets/Slides/ThirdSlide.jpg" className="d-block w-100" alt="Third slide" style={{ height: carouselHeight, objectFit: 'cover' }} />
      <div className="carousel-caption d-flex flex-column justify-content-center align-items-start" style={{ top: '50%', transform: 'translateY(-50%)', left: '10%', textAlign: 'left', maxWidth: '500px' }}>
        <h1 className="display-4 text-dark" style={{ fontWeight: 'bold' }}>Advance your career with AI</h1>
        <p className="lead text-dark">Leverage AI skills to lead in your field, with training from world-renowned experts.</p>
        <div>
          <button className="btn btn-primary btn-lg me-3">Find out more</button>
          <button className="btn btn-outline-primary btn-lg">Get started</button>
        </div>
      </div>
    </div>

  </div>

  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>

  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>

  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
</div>
    </div>
  )
}
