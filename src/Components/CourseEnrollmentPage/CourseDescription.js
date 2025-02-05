import React, { useState, useRef, useEffect, forwardRef } from "react";

const CourseDescription = forwardRef((props, ref) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const contentRef = useRef(null);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    if (contentRef.current) {
      if (isExpanded) {
        contentRef.current.style.maxHeight = `${contentRef.current.scrollHeight}px`;
        contentRef.current.style.opacity = "1";
      } else {
        contentRef.current.style.maxHeight = "0px";
        contentRef.current.style.opacity = "0";
      }
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
  } = props;

  return (
    <div ref={ref} id="course-description-section" className="container">
      <div className="display-6 fw-medium" id="scrollspyHeading3">
        Professional Certificate - {courseseries}
      </div>
      <p>{coursedesc}</p>
      <p>In this program, you will master:</p>
      <ul>
        {Array.isArray(coursedetails) ? (
          coursedetails.map((detail, index) => (
            <li key={index}>{detail}</li>
          ))
        ) : (
          <li>No course details provided.</li>
        )}
      </ul>

      {/* Expandable Content */}
      <div
        ref={contentRef}
        style={{
          maxHeight: "0",
          overflow: "hidden",
          transition: "max-height 1s ease-in-out, opacity 1s ease",
          opacity: "0",
        }}
      >
        <p>{Summary}</p>

        <h5>Practical Learning Experience</h5>
        <p>{practicallearning}</p>
        <ul>
          {Array.isArray(learningexperience) ? (
            learningexperience.map((experience, index) =>
              experience ? <li key={index}>{experience}</li> : null
            )
          ) : (
            <li>No learning experience details provided.</li>
          )}
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
