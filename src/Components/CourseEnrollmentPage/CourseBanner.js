import React from 'react'

export default function CourseBanner() {

    
    const University_Logos = {
        Aws: '/Assets/University_Logos/Aws.svg',
        Duke_University: '/Assets/University_Logos/Duke_University.svg',
        Google: '/Assets/University_Logos/Google.svg',
        IBM: '/Assets/University_Logos/IBM.svg',
        Meta: '/Assets/University_Logos/Meta.svg',
        Stanford_University: '/Assets/University_Logos/Stanford_University.svg',
        University_of_Cambridge: '/Assets/University_Logos/University_of_Cambridge.svg',
        University_of_Michigan: '/Assets/University_Logos/University_of_Michigan.svg',
        University_of_Oxford: '/Assets/University_Logos/University_of_Oxford.svg',
        University_of_Pennsylvania: '/Assets/University_Logos/University_of_Pennsylvania.svg',
    };

  return (
    <div className=' container'>
        <div className="container my-5">
        <div className="row" style={{}}>
          {/* Left Column: Meta Logo and Course Information */}
          <div className="col-md-9">
            <img
              src={University_Logos.Meta}
              alt="Meta Logo"
              style={{ width: "150px" }}
              className="mb-3"
            />
            <h1 className="mb-1 display-4 fw-semibold">
              Meta Front-End Developer Professional Certificate
            </h1>
            <p className="mb-2 fs-6">
              Launch your career as a front-end developer. Build job-ready
              skills for an in-demand career and earn a credential from Meta. No
              degree or prior experience required to get started.
            </p>
            <p className="text-muted">
              Instructor: <a href="/">Taught by Meta Staff</a>
            </p>
            <button className="btn btn-primary btn-lg btn-xxlg mt-3">
              Enroll for Free
            </button>
            <p className="mt-3">
              <strong>304,498</strong> already enrolled
            </p>
          </div>
        </div>

       {/* Course Features & Degree Credit Section */}
<div className="row mt-5 shadow rounded-3 p-3 mb-5 course-features">
  {/* Course Series */}
  <div className="col-lg-2 col-md-4 col-sm-12 d-flex flex-column justify-content-center border-end text-center">
    <h5 className="fw-bold fs-6">9 Course Series</h5>
    <p className="text-muted" style={{ fontSize: "12px" }}>
      Earn a career credential that demonstrates your expertise
    </p>
  </div>

  {/* Rating Section */}
  <div className="col-lg-2 col-md-4 col-sm-12 d-flex flex-column justify-content-center border-end text-center">
    <h5 className="fw-bold d-flex justify-content-center align-items-center">
      <i className="bi bi-star-fill fs-5 me-1" style={{ color: "#0056b3" }}></i> 4.7
    </h5>
    <p className="text-muted" style={{ fontSize: "12px" }}>
      16,680 reviews
    </p>
  </div>

  {/* Beginner Level Section */}
  <div className="col-lg-2 col-md-4 col-sm-12 d-flex flex-column justify-content-center border-end text-center">
    <h5 className="fw-bold fs-6">Beginner Level</h5>
    <p className="text-muted" style={{ fontSize: "12px" }}>
      No prior experience required
    </p>
  </div>

  {/* Flexible Schedule */}
  <div className="col-lg-3 col-md-4 col-sm-12 d-flex flex-column justify-content-center border-end text-center">
    <h5 className="fw-bold fs-6">Flexible Schedule</h5>
    <p className="text-muted" style={{ fontSize: "12px" }}>
      7 months, 6 hours per week. Learn at your own pace
    </p>
  </div>

  {/* Degree Credit */}
  <div className="col-lg-3 col-md-4 col-sm-12 d-flex flex-column justify-content-center text-center">
    <h5 className="fw-bold fs-6">Earn Degree Credit</h5>
    <a href="/" className="text-muted" style={{ fontSize: "12px" }}>
      Learn more
    </a>
  </div>
</div>



        
      </div>
    </div>
  )
}
