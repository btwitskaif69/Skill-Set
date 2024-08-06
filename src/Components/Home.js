import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  const carouselHeight = '600px';
  const [showAdditionalCourses, setShowAdditionalCourses] = useState(false);

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

  const courses = [
    { id: 1, title: "Google Data Analytics", imgSrc: "/Assets/Course/course1.jpg", logo: logos.Aws },
    { id: 2, title: "IBM Data Science", imgSrc: "/Assets/Course/course2.jpg", logo: logos.Google },
    { id: 3, title: "AWS Solutions Architect", imgSrc: "/Assets/Course/course3.jpg", logo: logos.IBM },
    { id: 4, title: "Meta Front-End Dev", imgSrc: "/Assets/Course/course4.jpg", logo: logos.Meta },
    { id: 5, title: "Duke University AI Fundamentals", imgSrc: "/Assets/Course/course5.jpg", logo: logos.Duke_University },
    { id: 6, title: "Stanford Machine Learning", imgSrc: "/Assets/Course/course6.jpg", logo: logos.Stanford_University },
    { id: 7, title: "Cambridge Data Science", imgSrc: "/Assets/Course/course7.jpg", logo: logos.University_of_Cambridge },
    { id: 8, title: "Oxford Cyber Security", imgSrc: "/Assets/Course/course8.jpg", logo: logos.University_of_Oxford },
  ];

  const mainCourses = courses.slice(0, 4);
  const additionalCourses = courses.slice(4);

  const toggleAdditionalCourses = () => {
    setShowAdditionalCourses(!showAdditionalCourses);
  };

  return (
    <div>
{/* Carousel */}
<div id="carouselExampleCaptions" className="carousel slide" style={{ height: carouselHeight }}>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="/Assets/Slides/FirstSlide.jpg" className="d-block w-100" alt="First slide" style={{ height: carouselHeight, objectFit: 'cover' }} />
          <div className="carousel-caption d-flex justify-content-center align-items-center" style={{ top: '50%', transform: 'translateY(-50%)', textAlign: 'center' }}>
            <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', padding: '20px', borderRadius: '10px', width: '60%', maxWidth: '800px' }}>
              <h5 className="display-4 text-white">First Slide Title</h5>
              <p className="lead text-white">This is the description for the first slide. It is centered in the middle of the slide.</p>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img src="/Assets/Slides/SecondSlide.jpg" className="d-block w-100" alt="Second slide" style={{ height: carouselHeight, objectFit: 'cover' }} />
          <div className="carousel-caption d-flex justify-content-center align-items-center" style={{ top: '50%', transform: 'translateY(-50%)', textAlign: 'center' }}>
            <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', padding: '20px', borderRadius: '10px', width: '60%', maxWidth: '800px' }}>
              <h5 className="display-4 text-white">Second Slide Title</h5>
              <p className="lead text-white">This is the description for the second slide. It is also centered in the middle of the slide.</p>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img src="/Assets/Slides/ThirdSlide.jpg" className="d-block w-100" alt="Third slide" style={{ height: carouselHeight, objectFit: 'cover' }} />
          <div className="carousel-caption d-flex justify-content-center align-items-center" style={{ top: '50%', transform: 'translateY(-50%)', textAlign: 'center' }}>
            <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', padding: '20px', borderRadius: '10px', width: '60%', maxWidth: '800px' }}>
              <h5 className="display-4 text-white">Third Slide Title</h5>
              <p className="lead text-white">This is the description for the third slide. It is centered in the middle of the slide as well.</p>
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

      {/* Marquee */}
      <div className="marquee-container" style={{ overflow: 'hidden', position: 'relative', backgroundColor: '#f8f9fa', padding: '30px 0', width: '100%', height: '250px' }}>
  <h2 className="marquee-heading" style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '20px', color: 'blue', fontWeight: '600', textTransform: 'titlecase' }}>Partnering with 10+ Top Universities and Companies</h2>
  <div className="marquee-content">
    <div className="marquee-inner">
      {Object.values(logos).slice(0, 10).map((logo, index) => (
        <img key={index} src={logo} alt={`Logo ${index}`} className="marquee-logo" />
      ))}
    </div>
    <div className="marquee-inner">
      {Object.values(logos).slice(0, 10).map((logo, index) => (
        <img key={index + 10} src={logo} alt={`Logo ${index}`} className="marquee-logo" />
      ))}
    </div>
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
  .marquee-container {
    overflow: hidden;
    position: relative;
    width: 100%;
    height: 250px;
  }
  .marquee-content {
    display: flex;
    width: 200%; /* Covers twice the width of the container */
    animation: marquee 30s linear infinite;
  }
  .marquee-inner {
    display: flex;
    flex-shrink: 0;
    width: 50%; /* Each inner container takes up half the marquee width */
  }
  .marquee-logo {
    height: 120px;
    margin: 0 6px; /* Adjust margin for spacing */
  }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          padding: 8px;
          border-radius: 8px;
        }
        .card:hover {
          transform: scale(1.05);
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
        }
        .card-img-top {
          border-radius: 8px;
        }
        .course-logos {
          display: flex;
          align-items: center;
          margin-bottom: 10px;
        }
        .course-logos img {
          height: 50px;
          width: auto;
        }
        .button-container {
          display: flex;
          justify-content: flex-start;
          margin-top: 20px;
        }
        .fade-in {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>

      {/* Course Cards */}
      <div className="container my-5">
        <h5 className="mb-1" style={{ fontSize: '17.5px', fontWeight: '600', color: '#382d8b'}}>Professional Specializations and Certification Courses</h5>
        <h3 className="mb-1" style={{ fontSize: '50px', fontWeight: '400'}}>Most Popular Certificates</h3>
        <h5 className="mb-4" style={{ fontSize: '25px', fontWeight: '400'}}>Explore our most popular programs, get job-ready for an in-demand career.</h5>
        <div className="row">
          {mainCourses.map(course => (
            <div key={course.id} className="col-md-3 mb-0">
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

        {/* Additional Courses */}
        <div className={`row mt-4 ${showAdditionalCourses ? 'fade-in' : 'd-none'}`}>
          {additionalCourses.map(course => (
            <div key={course.id} className="col-md-3 mb-0">
              <Link to={`/courses/${course.id}`} className="text-decoration-none">
                <div className="card" style={{ height: '22rem' }}>
                  <img src={course.imgSrc} className="card-img-top" alt={course.title} style={{ height: '50%', objectFit: 'cover', borderRadius: '12px' }} />
                  <div className="card-body d-flex flex-column">
                    <div className="course-logos">
                      {course.logo && <img src={course.logo} alt="Course Logo" />}
                    </div>
                    <h5 className="card-title" style={{fontSize: '17.5px', fontWeight: '600'}}>{course.title}</h5>
                    <div className="mt-auto">
                      <p className="card-text mb-0 text-primary" style={{ fontSize: '0.8rem' }}>Advance in Your Degree Program</p>
                      <p className="card-text mb-0 text-muted" style={{ fontSize: '0.8rem' }}>Professional Certificate</p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Button Container */}
        <div className="button-container">
          <button type="button" className="btn btn-primary me-2" onClick={toggleAdditionalCourses}>
            {showAdditionalCourses ? 'Show Less' : 'Show More'}
          </button>
          <button type="button" className="btn btn-outline-primary">Primary</button>
        </div>
      </div>
    </div>
  );
}
