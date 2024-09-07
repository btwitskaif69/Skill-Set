import React from 'react';

export default function ScrollSpy({ courseDescriptionRef, testimonialsRef }) {
  const aboutRef = React.useRef(null);
  const outcomeRef = React.useRef(null);

  const ScrollToAbout = () => aboutRef.current.scrollIntoView({ behavior: 'smooth' });
  const ScrollToOutcome = () => outcomeRef.current.scrollIntoView({ behavior: 'smooth' });
  const ScrollToCourses = () => courseDescriptionRef.current.scrollIntoView({ behavior: 'smooth' });
  const ScrollToTestimonials = () => testimonialsRef.current.scrollIntoView({ behavior: 'smooth' });

  return (
    <div className='container'>
      <nav id="navbar-example2" className="navbar mb-3 border-bottom">
        <ul className="nav nav-pills">
          <li className="nav-item">
            <button className="nav-link" onClick={ScrollToAbout}>About</button>
          </li>
          <li className="nav-item">
            <button className="nav-link" onClick={ScrollToOutcome}>Outcome</button>
          </li>
          <li className="nav-item">
            <button className="nav-link" onClick={ScrollToCourses}>Courses</button> {/* Scroll to CourseDescription */}
          </li>
          <li className="nav-item">
            <button className="nav-link" onClick={ScrollToTestimonials}>Testimonials</button> {/* Scroll to Testimonial */}
          </li>
        </ul>
      </nav>

      {/* Sections to scroll to */}
      <div ref={aboutRef} id="about-section">
        {/* Content for About section */}
      </div>
      <div ref={outcomeRef} id="outcome-section">
        {/* Content for Outcome section */}
      </div>
    </div>
  );
}
