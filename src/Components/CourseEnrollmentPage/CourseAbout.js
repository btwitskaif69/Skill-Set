import React from 'react';

export default function CourseAbout() {


    return (
        <div className="container mt-4">
            {/* Course Overview */}
            <h2 className="fw-medium">Course Overview</h2>
            <p className="lead text-muted">Comprehensive training in full-stack web development</p>

            {/* Badges */}
            <div className="d-flex flex-wrap mb-4">
                <span className="badge 0.95rem border me-2" style={{ backgroundColor: "#210BE3" }}><i className="bi bi-clock me-1"></i>12 weeks</span>
                <span className="badge 0.95rem border me-2" style={{ backgroundColor: "#210BE3" }}><i className="bi bi-calendar3 me-1"></i>Starts: September 1, 2023</span>
                <span className="badge 0.95rem border me-2" style={{ backgroundColor: "#210BE3" }}><i className="bi bi-mortarboard me-1"></i>Intermediate to Advanced</span>
                <span className="badge 0.95rem border" style={{ backgroundColor: "#210BE3" }}><i className="bi bi-people me-1"></i>Max 20 students</span>
            </div>

            {/* Description */}
            <p className="fs-5">
                Dive deep into modern web development technologies and practices. This intensive bootcamp will take you from intermediate skills to a professional level, ready to tackle complex web projects.
            </p>




            {/* Learning Section */}
      <div className="row">
        {/* Left Card: What You'll Learn */}
        <div className="col-md-6 mb-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">What You'll Learn</h5>
              <ul className="list-unstyled">
                <li className="d-flex align-items-center mb-2 ">
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  Create a responsive website using HTML and CSS
                </li>
                <li className="d-flex align-items-center mb-2 ">
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  Use JavaScript to make websites interactive
                </li>
                <li className="d-flex align-items-center mb-2 ">
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  Use React to create powerful single-page applications
                </li>
                <li className="d-flex align-items-center mb-2">
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  Implement version control with Git and GitHub
                </li>
                <li className="d-flex align-items-center mb-2">
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  Prepare for technical interviews for front-end developer roles
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right Card: Skills You'll Gain */}
        <div className="col-md-6 mb-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Skills You'll Gain</h5>
              <div className="d-flex flex-wrap">
                <span className="badge 0.95rem me-2 mb-2" style={{ backgroundColor: "#210BE3" }}>HTML</span>
                <span className="badge 0.95rem me-2 mb-2" style={{ backgroundColor: "#210BE3" }}>CSS</span>
                <span className="badge 0.95rem me-2 mb-2" style={{ backgroundColor: "#210BE3" }}>JavaScript</span>
                <span className="badge 0.95rem me-2 mb-2" style={{ backgroundColor: "#210BE3" }}>React</span>
                <span className="badge 0.95rem me-2 mb-2" style={{ backgroundColor: "#210BE3" }}>Git</span>
                <span className="badge 0.95rem me-2 mb-2" style={{ backgroundColor: "#210BE3" }}>Web Development</span>
                <span className="badge 0.95rem me-2 mb-2" style={{ backgroundColor: "#210BE3" }}>Front-End Development</span>
                <span className="badge 0.95rem me-2 mb-2" style={{ backgroundColor: "#210BE3" }}>UI/UX Design</span>
                <span className="badge 0.95rem me-2 mb-2" style={{ backgroundColor: "#210BE3" }}>Responsive Web Design</span>
                <span className="badge 0.95rem me-2 mb-2" style={{ backgroundColor: "#210BE3" }}>Web Application Development</span>
              </div>
            </div>
          </div>
        </div>
      </div>

        </div>
    );
}
