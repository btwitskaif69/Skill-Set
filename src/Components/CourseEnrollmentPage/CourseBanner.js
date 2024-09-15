import React from "react";

export default function CourseBanner() {
  const University_Logos = {
    Aws: "/Assets/University_Logos/Aws.svg",
    Duke_University: "/Assets/University_Logos/Duke_University.svg",
    Google: "/Assets/University_Logos/Google.svg",
    IBM: "/Assets/University_Logos/IBM.svg",
    Meta: "/Assets/University_Logos/Meta.svg",
    Stanford_University: "/Assets/University_Logos/Stanford_University.svg",
    University_of_Cambridge:
      "/Assets/University_Logos/University_of_Cambridge.svg",
    University_of_Michigan:
      "/Assets/University_Logos/University_of_Michigan.svg",
    University_of_Oxford: "/Assets/University_Logos/University_of_Oxford.svg",
    University_of_Pennsylvania:
      "/Assets/University_Logos/University_of_Pennsylvania.svg",
  };

  return (
    <div className="container mb-5">
      <div className="container mt-5">
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
            <p className="mb-4 fs-6">
              Launch your career as a front-end developer. Build job-ready
              skills for an in-demand career and earn a credential from Meta. No
              degree or prior experience required to get started.
            </p>
            <button className="btn custom-button-default btn-lg">
              Enroll for Free
            </button>
            <p className="mt-3">
              <strong>304,498</strong> already enrolled
            </p>
          </div>
        </div>
      </div>




      <div className="container mt-4">
      {/* Course Information Grid */}
      <div className="row g-4">
        {/* Course Information Item 1 */}
        <div className="col-6 col-md-3 d-flex align-items-center">
          <div className="p-3 rounded-circle d-flex align-items-center justify-content-center border border-2 border-black" 
               style={{  fontSize: '1.75rem',  width: '3.75rem',  height: '3.75rem', }}><i className="bi bi-journals"></i>
          </div>

          <div className="ms-3">
            <p className="fw-semibold mb-0" style={{color:'#210BE3', fontSize:'0.95rem'}}>9 Courses</p>
            <p className="text-muted mb-0" style={{fontSize:'0.85rem'}}>Detailed Series</p>
          </div>
        </div>


        {/* Course Information Item 2 */}
        <div className="col-6 col-md-3 d-flex align-items-center">
          <div className="p-3 rounded-circle d-flex align-items-center justify-content-center border border-2 border-black" 
               style={{ fontSize: '1.75rem', width: '3.75rem', height: ' 3.75rem'}}><i className="bi bi-mortarboard"></i>

          </div>
          <div className="ms-3">
            <p className="fw-semibold mb-0" style={{color:'#210BE3', fontSize:'0.95rem'}}>Beginner</p>
            <p className="text-muted mb-0" style={{fontSize:'0.85rem'}}>No experience needed</p>
          </div>
        </div>


        {/* Course Information Item 3 */}
        <div className="col-6 col-md-3 d-flex align-items-center">
          <div className="p-3 rounded-circle d-flex align-items-center justify-content-center border border-2 border-black" 
               style={{ fontSize: '1.75rem', width: '3.75rem', height: '3.75rem', }}><i className="bi bi-alarm"></i>
          </div>
          
          <div className="ms-3">
            <p className="fw-semibold mb-0" style={{color:'#210BE3', fontSize:'0.95rem'}}>7 Months</p>
            <p className="text-muted mb-0" style={{fontSize:'0.85rem'}}>6 hours/week</p>
          </div>
        </div>
        

        {/* Course Information Item 4 */}
        <div className="col-6 col-md-3 d-flex align-items-center">
          <div className="p-3 rounded-circle d-flex align-items-center justify-content-center border border-2 border-black" 
               style={{ fontSize: '1.75rem', width: '3.75rem', height: '3.75rem', }}><i className="bi bi-people"></i>
          </div>
          
          <div className="ms-3">
            <p className="fw-semibold mb-0" style={{color:'#210BE3', fontSize:'0.95rem'}}>304,498</p>
            <p className="text-muted mb-0" style={{fontSize:'0.85rem'}}>Enrolled students</p>
          </div>
        </div>
      </div>
    </div>





    </div>
  );
}
