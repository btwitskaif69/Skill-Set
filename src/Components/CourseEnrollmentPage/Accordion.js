import React from 'react';

export default function Accordion({ courses = [] }) {
  return (
    <div className="container mb-5">
      <div>
        <div className="accordion" id="accordionPanelsStayOpenExample">
          {courses.map((course, index) => (
            <div className="accordion-item" key={index}>
              <h2 className="accordion-header">
                <button
                  className={`accordion-button custom-color fw-semibold ${index === 0 ? '' : 'collapsed'}`}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#panelsStayOpen-collapse${index + 1}`}
                  aria-expanded={index === 0 ? 'true' : 'false'}
                  aria-controls={`panelsStayOpen-collapse${index + 1}`}
                >
                  {course.title}
                </button>
              </h2>
              <div
                id={`panelsStayOpen-collapse${index + 1}`}
                className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
              >
                <div className="accordion-body" style={{ paddingLeft: "20px" }}>
                  <ul style={{ listStyleType: "none", paddingLeft: "0" }}>
                    {(course.lessons || []).map((lesson, lessonIndex) => (
                      <li className="mb-1" key={lessonIndex}>
                        <i className="bi bi-check-circle-fill text-success"></i>&nbsp;{lesson}
                      </li>
                    ))}
                  </ul>
                  <h6>Knowledge You'll Gain</h6>
                  <div className="skills-tags">
                    {(course.knowledgeGained || []).map((knowledge, knowledgeIndex) => (
                      <span
                        className="badge me-1 mb-1"
                        style={{ backgroundColor: "#210BE3" }}
                        key={knowledgeIndex}
                      >
                        {knowledge}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
