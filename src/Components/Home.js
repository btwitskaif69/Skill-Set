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


{/* Marquee */}
<div className="marquee-container" style={{ overflow: 'hidden', position: 'relative', backgroundColor: '#f8f9fa', padding: '30px 0', width: '100%', height: '250px' }}>
  <h2 className="marquee-heading mb-5" style={{ textAlign: 'center', fontSize: '2.5rem', color: 'blue', fontWeight: '600', textTransform: 'titlecase' }}>Partnering with 10+ Top Universities and Companies</h2>
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
    width: 200%;
    animation: marquee 30s linear infinite;
  }
  .marquee-inner {
    display: flex;
    flex-shrink: 0;
    width: 50%;
    justify-content: space-around; /* Evenly space logos */
  }
  .marquee-logo {
    height: 40px;
    margin: 0 15px; /* Adjusted margin for spacing */
    flex-shrink: 0;
  }

  @media (max-width: 768px) {
    .marquee-logo {
      height: 35px;
      margin: 0 10px; /* Reduce spacing for small screens */
    }
  }
  @media (max-width: 480px) {
    .marquee-logo {
      height: 25px;
      margin: 0 5px; /* Further reduce spacing for very small screens */
    }
  }
`}</style>

<style>{`
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
        <h5 className="mb-1" style={{ fontSize: '17.5px', fontWeight: '600', color: '/382d8b'}}>Professional Specializations and Certification Courses</h5>
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
          <button type="button" className="btn btn-outline-primary">View all</button>
        </div>
      </div>
    </div>
  );
}
