import React from "react";

export default function CourseBanner({ logo, title, description, enrollmentCount }) {
  return (
    <div className="container mb-4">
      <div className="container mt-4">
        <div className="row">
          {/* Left Column: Meta Logo and Course Information */}
          <div className="col-md-9">
            <img src={logo} alt="Course Logo" style={{height:'40px'}} className="mb-2" />
            <h1 className="mb-1 display-4 fw-semibold">{title}</h1>
            <p className="mb-4 fs-6">{description}</p>
            <button className="btn custom-button-default btn-lg">Enroll for Free</button>
            <p className="mt-3"><strong>{enrollmentCount}</strong> already enrolled</p>
          </div>
        </div>
      </div>
      {/* Course Information Grid (remains unchanged) */}
      <div className="container mt-4">
        <div className="row g-4">
          {/* Course Information Item 1 */}
          <div className="col-6 col-md-3 d-flex align-items-center">
            <div className="p-3 rounded-circle d-flex align-items-center justify-content-center border border-2 custom-border" 
                 style={{ fontSize: '1.75rem', width: '3.75rem', height: '3.75rem', color:'#210BE3' }}>
              <i className="bi bi-journals"></i>
            </div>
            <div className="ms-3">
              <p className="fw-semibold mb-0" style={{color:'#210BE3', fontSize:'0.95rem'}}>9 Courses</p>
              <p className="text-muted mb-0" style={{fontSize:'0.85rem'}}>Detailed Series</p>
            </div>
          </div>

          {/* Course Information Item 2 */}
          <div className="col-6 col-md-3 d-flex align-items-center">
            <div className="p-3 rounded-circle d-flex align-items-center justify-content-center border border-2 custom-border" 
                 style={{ fontSize: '1.75rem', width: '3.75rem', height: ' 3.75rem', color:'#210BE3'}}>
              <i className="bi bi-mortarboard"></i>
            </div>
            <div className="ms-3">
              <p className="fw-semibold mb-0" style={{color:'#210BE3', fontSize:'0.95rem'}}>Beginner</p>
              <p className="text-muted mb-0" style={{fontSize:'0.85rem'}}>No experience needed</p>
            </div>
          </div>

          {/* Course Information Item 3 */}
          <div className="col-6 col-md-3 d-flex align-items-center">
            <div className="p-3 rounded-circle d-flex align-items-center justify-content-center border border-2 custom-border" 
                 style={{ fontSize: '1.75rem', width: '3.75rem', height: '3.75rem', color:'#210BE3' }}>
              <i className="bi bi-alarm"></i>
            </div>
            <div className="ms-3">
              <p className="fw-semibold mb-0" style={{color:'#210BE3', fontSize:'0.95rem'}}>7 Months</p>
              <p className="text-muted mb-0" style={{fontSize:'0.85rem'}}>6 hours/week</p>
            </div>
          </div>

          {/* Course Information Item 4 */}
          <div className="col-6 col-md-3 d-flex align-items-center">
            <div className="p-3 rounded-circle d-flex align-items-center justify-content-center border border-2 custom-border" 
                 style={{ fontSize: '1.75rem', width: '3.75rem', height: '3.75rem', color:'#210BE3'}}>
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
