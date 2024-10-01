import React from "react";

export default function CourseBanner({ logo, title, description, enrollmentCount, coursesCount, difficulty, duration, hoursPerWeek}) {
  return (
    <div className="container mb-4">
      <div className="container mt-4">
        <div className="row">
          {/* Left Column: Course Logo and Information */}
          <div className="col-md-9">
            <img src={logo} alt="Course Logo" style={{height:'40px'}} className="mb-2" />
            <h1 className="mb-4 display-4 fw-semibold">{title}</h1>
            <p className="mb-4 fs-6">{description}</p>
            <button className="btn custom-button-default btn-lg">Enroll for Free</button>
            <p className="mt-3"><strong>{enrollmentCount}</strong> already enrolled</p>
          </div>
        </div>
      </div>

      {/* Course Information Grid */}
      <div className="container mt-4">
        <div className="row g-4">
          {/* Course Count */}
          <div className="col-6 col-md-3 d-flex align-items-center">
            <div className="p-3 rounded-circle d-flex align-items-center justify-content-center border border-2 custom-border" 
                 style={{ fontSize: '1.75rem', width: '3.75rem', height: '3.75rem', color:'#210BE3' }}>
              <i className="bi bi-journals"></i>
            </div>
            <div className="ms-3">
              <p className="fw-semibold mb-0" style={{color:'#210BE3', fontSize:'0.95rem'}}>{coursesCount} Courses</p>
              <p className="text-muted mb-0" style={{fontSize:'0.85rem'}}>Detailed Series</p>
            </div>
          </div>

          {/* Difficulty Level */}
          <div className="col-6 col-md-3 d-flex align-items-center">
            <div className="p-3 rounded-circle d-flex align-items-center justify-content-center border border-2 custom-border" 
                 style={{ fontSize: '1.75rem', width: '3.75rem', height: '3.75rem', color:'#210BE3' }}>
              <i className="bi bi-mortarboard"></i>
            </div>
            <div className="ms-3">
              <p className="fw-semibold mb-0" style={{color:'#210BE3', fontSize:'0.95rem'}}>{difficulty}</p>
              <p className="text-muted mb-0" style={{fontSize:'0.85rem'}}>Difficulty Level</p>
            </div>
          </div>

          {/* Course Duration */}
          <div className="col-6 col-md-3 d-flex align-items-center">
            <div className="p-3 rounded-circle d-flex align-items-center justify-content-center border border-2 custom-border" 
                 style={{ fontSize: '1.75rem', width: '3.75rem', height: '3.75rem', color:'#210BE3' }}>
              <i className="bi bi-alarm"></i>
            </div>
            <div className="ms-3">
              <p className="fw-semibold mb-0" style={{color:'#210BE3', fontSize:'0.95rem'}}>{duration}</p>
              <p className="text-muted mb-0" style={{fontSize:'0.85rem'}}>{hoursPerWeek}</p>
            </div>
          </div>

          {/* Enrollment Count */}
          <div className="col-6 col-md-3 d-flex align-items-center">
            <div className="p-3 rounded-circle d-flex align-items-center justify-content-center border border-2 custom-border" 
                 style={{ fontSize: '1.75rem', width: '3.75rem', height: '3.75rem', color:'#210BE3' }}>
              <i className="bi bi-people"></i>
            </div>
            <div className="ms-3">
              <p className="fw-semibold mb-0" style={{color:'#210BE3', fontSize:'0.95rem'}}>{enrollmentCount}</p>
              <p className="text-muted mb-0" style={{fontSize:'0.85rem'}}>Enrolled students</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
