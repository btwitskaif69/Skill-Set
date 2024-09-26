import React, { useRef } from "react";

export default function ScrollSpy({ courseDescriptionRef, coursereviewsRef, courseOutcomeRef }) {
  const aboutRef = useRef(null);

  const ScrollToAbout = () => aboutRef.current.scrollIntoView({ behavior: 'smooth' });
  const ScrollToOutcome = () => courseOutcomeRef.current.scrollIntoView({ behavior: 'smooth' });
  const ScrollToCourses = () => courseDescriptionRef.current.scrollIntoView({ behavior: 'smooth' });
  const ScrollToCourseReviews = () => coursereviewsRef.current.scrollIntoView({ behavior: 'smooth' });

  return (
    <div className='container'>
      <nav id="navbar-example2" className="navbar mb-3 border-bottom">
        <ul className="nav nav-pills">
          <li className="nav-item">
            <button className="nav-link text-custom fs-5 fw-medium" onClick={ScrollToAbout}>About</button>
          </li>
          <li className="nav-item">
            <button className="nav-link text-custom fs-5 fw-medium" onClick={ScrollToOutcome}>Outcome</button>
          </li>
          <li className="nav-item">
            <button className="nav-link text-custom fs-5 fw-medium" onClick={ScrollToCourses}>Courses</button>
          </li>
          <li className="nav-item">
            <button className="nav-link text-custom fs-5 fw-medium" onClick={ScrollToCourseReviews}>Student Reviews</button>
          </li>
        </ul>
      </nav>

      {/* Sections to scroll to */}
      <div ref={aboutRef} id="about-section">
        {/* Content for About section */}
      </div>
    </div>
  );
}
