import React from 'react'

export default function CourseAbout() {

    const learnings = [
        "Create a responsive website using HTML to structure content, CSS to handle visual style, and JavaScript to develop interactive experiences.",
        "Learn Bootstrap CSS Framework to create webpages and work with GitHub repositories and version control.",
        "Learn to use React in relation to JavaScript libraries and frameworks.",
        "Prepare for a coding interview, learn best approaches to problem-solving, and build portfolio-ready projects you can share during job interviews."
      ];

  return (
    <div className="container my-5">
      <h3>What you'll learn</h3>
      <div className="row">
        {learnings.map((text, index) => (
          <div className="col-md-6" key={index}>
            <div className="d-flex align-items-start mb-3">
              <i className="bi bi-check2-circle text-success me-2"></i>
              <p className="mb-0">{text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
