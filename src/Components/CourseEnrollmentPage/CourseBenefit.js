import React from 'react';

const Image = {
  Image: `/Assets/Course/course1.jpg`
};

export default function CourseBenefit() {
  return (
    <div className="container my-5">
      <div className="row d-flex align-items-center">
        {/* Text Section */}
        <div className="col-lg-8 col-md-12">
          <h1 className="mb-4 fs-2 fw-medium" style={{color: 'Black'}}>Prepare for a career in Front-end Development</h1>
          <ul className="list-unstyled">
            <li className="mb-2">
              <i className="bi bi-check-circle-fill text-success me-2"></i>
              Receive professional-level training from Meta
            </li>
            <li className="mb-2">
              <i className="bi bi-check-circle-fill text-success me-2"></i>
              Demonstrate your proficiency in portfolio-ready projects
            </li>
            <li className="mb-2">
              <i className="bi bi-check-circle-fill text-success me-2"></i>
              Earn an employer-recognized certificate from Meta
            </li>
            <li className="mb-2">
              <i className="bi bi-check-circle-fill text-success me-2"></i>
              Qualify for in-demand job titles: Front-End Developer, Website Developer, Software Engineer
            </li>
          </ul>
        </div>

        {/* Image Section */}
        <div className="col-lg-4 col-md-12 d-flex justify-content-center ">
            <img src={Image.Image} className="card-img-top rounded-4" alt="Career" style={{ width: '30rem', height: '15rem', objectFit: 'cover',}} />
          </div>
        </div> 
      </div>
  );
}
