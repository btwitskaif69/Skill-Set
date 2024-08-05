import React from 'react';
import { Link } from 'react-router-dom'; // For internal linking
// import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported

export default function Home() {
  // Define a height for the carousel and images
  const carouselHeight = '600px';

  // List of logos
  const logos = {
    Aws: '/Assets/Logos/Aws.svg',
    Duke_University: '/Assets/Logos/Duke_University.svg',
    Google: '/Assets/Logos/Google.svg',
    IBM: '/Assets/Logos/IBM.svg',
    Meta: '/Assets/Logos/Meta.svg',
    Stanford_University: '/Assets/Logos/Stanford_University.svg',
    University_of_Cambridge: '/Assets/Logos/University_of_Cambridge.svg',
    University_of_Michigan: '/Assets/Logos/University_of_Michigan.svg',
    University_of_Oxford: '/Assets/Logos/University_of_Oxford.svg',
    University_of_Pennsylvania: '/Assets/Logos/University_of_Pennsylvania.svg',
  };

  // List of course images and details with logos
  const courses = [
    { id: 1, title: "Google Data Analytics", imgSrc: "/Assets/Course/course1.jpg", logo: logos.Aws },
    { id: 2, title: "IBM Data Science", imgSrc: "/Assets/Course/course2.jpg", logo: logos.Google },
    { id: 3, title: "AWS Solutions Architect", imgSrc: "/Assets/Course/course3.jpg", logo: logos.IBM },
    { id: 4, title: "Meta Front-End Dev", imgSrc: "/Assets/Course/course4.jpg", logo: logos.Meta },
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
            <img src="/Assets/Slides/FirstSlide.jpg" className="d-block w-100" alt="First slide" style={{ height: carouselHeight, objectFit: 'cover' }} />
            <div className="carousel-caption d-none d-md-block text-start">
              <h5 className="display-4">Transform Your Career with Cutting-Edge AI Skills</h5>
              <p className="lead">Dive into the world of artificial intelligence and gain skills that are revolutionizing industries. From machine learning to data science, enhance your expertise and open doors to exciting new career opportunities.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="/Assets/Slides/SecondSlide.jpg" className="d-block w-100" alt="Second slide" style={{ height: carouselHeight, objectFit: 'cover' }} />
            <div className="carousel-caption d-none d-md-block text-start">
              <h5 className="display-4">Unlock New Opportunities in the AI-Driven Job Market</h5>
              <p className="lead">Stay ahead in the rapidly evolving job market by mastering AI technologies. Learn how AI is reshaping various fields and position yourself as a valuable asset to employers seeking innovative solutions.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="/Assets/Slides/ThirdSlide.jpg" className="d-block w-100" alt="Third slide" style={{ height: carouselHeight, objectFit: 'cover' }} />
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
        <h2 className="marquee-heading" style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '20px', color: 'blue', fontWeight: '600', textTransform: 'titlecase' }}>Partnering with 10+ Top Universities and Companies</h2>
        <div className="marquee-content" style={{ display: 'flex', flexWrap: 'nowrap', width: '200%', animation: 'marquee 30s linear infinite' }}>
          {Object.values(logos).map((logo, index) => (
            <img key={index} src={logo} alt={`Logo ${index}`} className="marquee-logo" style={{ height: '120px', margin: '0 30px' }} />
          ))}
          {Object.values(logos).map((logo, index) => (
            <img key={index + Object.values(logos).length} src={logo} alt={`Logo ${index}`} className="marquee-logo" style={{ height: '120px', margin: '0 30px' }} />
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
        .card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          padding: 8px; /* Decreased padding */
          border-radius: 8px; /* Increased border radius */
        }
        .card:hover {
          transform: scale(1.05);
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
        }
        .card-img-top {
          border-radius: 8px; /* Increased border radius for images */
        }
        .course-logos {
          display: flex;
          align-items: center; /* Vertically center the logo */
          margin-bottom: 10px; /* Space below logo */
        }
        .course-logos img {
          height: 50px; /* Adjust size of logo */
          width: auto;
        }
    `}</style>


      {/* Course Cards */}
      <div className="container my-5">
        <h5 className="mb-1" style={{ fontSize: '17.5px', fontWeight: '600', color: '#382d8b'}}>Professional Specializations and Certification Courses</h5>
        <h3 className="mb-1" style={{ fontSize: '50px', fontWeight: '400'}}>Most Popular Certificates</h3>
        <h5 className="mb-4" style={{ fontSize: '25px', fontWeight: '400'}}>Explore our most popular programs, get job-ready for an in-demand career.</h5>
        <div className="row">
          {courses.map(course => (
            <div key={course.id} className="col-md-3 mb-4">
              <Link to={`/courses/${course.id}`} className="text-decoration-none">
                <div className="card" style={{ height: '22rem' }}>
                  <img src={course.imgSrc} className="card-img-top" alt={course.title} style={{ height: '50%', objectFit: 'cover', borderRadius: '12px' }} />
                  <div className="card-body d-flex flex-column">
                    <div className="course-logos">
                      {course.logo && <img src={course.logo} alt="Course Logo" />}
                    </div>
                    <h5 className="card-title" style={{fontSize: '17.5px', fontWeight: '600'}}>{course.title}</h5>
                    <div className="mt-auto">
                    <p className="card-text mb-0 text-primary" style={{ fontSize: '0.9rem' }}>Advance in Your Degree Program</p>
                      <p className="card-text mb-0 text-muted" style={{ fontSize: '0.8rem' }}>Professional Certificate</p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
