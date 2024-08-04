import React from 'react';

export default function Home() {
  // Define a height for the carousel and images
  const carouselHeight = '600px';

  // List of logos
  const logos = [
    '/logos/Aws.svg',
    '/logos/Duke_University.svg',
    '/logos/Google.svg',
    '/logos/IBM.svg',
    '/logos/Meta.svg',
    '/logos/Stanford_University.svg',
    '/logos/University_of_Cambridge.svg',
    '/logos/University_of_Michigan.svg',
    '/logos/University_of_Oxford.svg',
    '/logos/University_of_Pennsylvania.svg',
  ];

  return (
    <div>
      {/* Carousel */}
      <div id="carouselExampleCaptions" className="carousel slide" style={{ height: carouselHeight }}>
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="/Assets/FirstSlide.jpg" className="d-block w-100" alt="First slide" style={{ height: carouselHeight, objectFit: 'cover' }} />
            <div className="carousel-caption d-none d-md-block text-start">
              <h5 className="display-4">Transform Your Career with Cutting-Edge AI Skills</h5>
              <p className="lead">Dive into the world of artificial intelligence and gain skills that are revolutionizing industries. From machine learning to data science, enhance your expertise and open doors to exciting new career opportunities.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="/Assets/SecondSlide.jpg" className="d-block w-100" alt="Second slide" style={{ height: carouselHeight, objectFit: 'cover' }} />
            <div className="carousel-caption d-none d-md-block text-start">
              <h5 className="display-4">Unlock New Opportunities in the AI-Driven Job Market</h5>
              <p className="lead">Stay ahead in the rapidly evolving job market by mastering AI technologies. Learn how AI is reshaping various fields and position yourself as a valuable asset to employers seeking innovative solutions.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="/Assets/ThirdSlide.jpg" className="d-block w-100" alt="Third slide" style={{ height: carouselHeight, objectFit: 'cover' }} />
            <div className="carousel-caption d-none d-md-block text-start">
              <h5 className="display-4">Master the Future: Essential AI Skills for Career Success</h5>
              <p className="lead">Equip yourself with the essential AI skills needed to thrive in tomorrow's workforce. Whether you’re looking to pivot your career or advance in your current role, these skills will set you apart in the competitive job landscape.</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon p-2" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon p-2" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Marquee */}
      <div className="marquee-container" style={{ overflow: 'hidden', position: 'relative', backgroundColor: '#f8f9fa', padding: '30px 0', width: '100%', height: '250px' }}>
        <h2 className="marquee-heading" style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '20px', color: '#0d6efd', fontWeight: '600', textTransform: 'titlecase' }}>Partnering with 10+ Top Universities and Companies</h2>
        <div className="marquee-content" style={{ display: 'flex', flexWrap: 'nowrap', width: '200%', animation: 'marquee 30s linear infinite' }}>
          {logos.map((logo, index) => (
            <img key={index} src={logo} alt={`Logo ${index}`} className="marquee-logo" style={{ height: '120px', margin: '0 30px' }} />
          ))}
          {logos.map((logo, index) => (
            <img key={index + logos.length} src={logo} alt={`Logo ${index}`} className="marquee-logo" style={{ height: '120px', margin: '0 30px' }} />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}
