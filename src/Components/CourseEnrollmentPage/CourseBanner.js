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
    <div className=" container">
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
    </div>
  );
}
