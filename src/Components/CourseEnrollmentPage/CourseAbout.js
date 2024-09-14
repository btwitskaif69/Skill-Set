import React from 'react';

export default function CourseAbout() {

    const learnings = [
        "Create a responsive website using HTML to structure content, CSS to handle visual style, and JavaScript to develop interactive experiences.",
        "Learn Bootstrap CSS Framework to create webpages and work with GitHub repositories and version control.",
        "Learn to use React in relation to JavaScript libraries and frameworks.",
        "Prepare for a coding interview, learn best approaches to problem-solving, and build portfolio-ready projects you can share during job interviews."
    ];

    return (
        <div className="container my-5">
            {/* Course Overview */}
            <h2 className="fw-bold">Course Overview</h2>
            <p className="lead text-muted">Comprehensive training in full-stack web development</p>

            {/* Badges */}
            <div className="d-flex flex-wrap mb-4">
                <span className="badge bg-light text-dark border me-2"><i className="bi bi-clock me-1"></i>12 weeks</span>
                <span className="badge bg-light text-dark border me-2"><i className="bi bi-calendar3 me-1"></i>Starts: September 1, 2023</span>
                <span className="badge bg-light text-dark border me-2"><i className="bi bi-mortarboard me-1"></i>Intermediate to Advanced</span>
                <span className="badge bg-light text-dark border"><i className="bi bi-people me-1"></i>Max 20 students</span>
            </div>

            {/* Description */}
            <p className="fs-5">
                Dive deep into modern web development technologies and practices. This intensive bootcamp will take you from intermediate skills to a professional level, ready to tackle complex web projects.
            </p>

            {/* What You'll Learn Section */}
            <h3 className="fw-bold mt-5">What you'll learn</h3>
            <div className="row">
                {learnings.map((text, index) => (
                    <div className="col-md-6" key={index}>
                        <div className="d-flex align-items-start mb-3">
                            <i className="bi bi-check-circle-fill text-success me-2"></i>
                            <p className="mb-0">{text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
