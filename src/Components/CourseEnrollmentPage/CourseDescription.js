import React, { useState, useRef, useEffect, forwardRef } from "react";

const CourseDescription = forwardRef((props, ref) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const contentRef = useRef(null); // Reference to the expandable content

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  // Dynamically setting maxHeight based on the actual height of the content for smooth animations
  useEffect(() => {
    if (isExpanded) {
      contentRef.current.style.maxHeight = `${contentRef.current.scrollHeight}px`; // Set maxHeight to the content's full height
      contentRef.current.style.opacity = '1';
    } else {
      contentRef.current.style.maxHeight = '0px'; // Collapse the content
      contentRef.current.style.opacity = '0';
    }
  }, [isExpanded]);

  const {
    courseseries,
    coursedesc,
    coursedetails,
    Summary,
    practicallearning,
    learningexperience,
    conclusion,
  } = props; // Destructure props to get the necessary data

  return (
    <div ref={ref} id="course-description-section" className="container">
      <div className="display-6 fw-medium" id="scrollspyHeading3">
        Professional Certificate - {courseseries}
      </div>
      <p>{coursedesc}</p>
      <p>In this program, you will master:</p>
      <ul>
        {coursedetails.map((detail, index) => (
          <li key={index}>{detail}</li>
        ))}
      </ul>

      {/* Content that expands/collapses */}
      <div
        ref={contentRef}
        style={{
          maxHeight: '0',
          overflow: 'hidden',
          transition: 'max-height 1s ease-in-out, opacity 1s ease',
          opacity: '0',
        }}
      >
        <p>{Summary}</p>

        <h5>Practical Learning Experience</h5>
        <p>{practicallearning}</p>
        <ul>
          {learningexperience.map((experience, index) => (
            experience && <li key={index}>{experience}</li> // Avoid empty strings
          ))}
        </ul>
        <p>{conclusion}</p>
      </div>

      <button
        className="btn btn-primary mb-4"
        onClick={toggleReadMore}
        style={{ backgroundColor: "#210BE3" }}
      >
        {isExpanded ? "Read Less" : "Read More"}
      </button>
    </div>
  );
});

export default CourseDescription;
