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

        {/* Course Features & Degree Credit Section */}
        <div className="row shadow rounded-3 p-4 mb-5 bg-white course-features">
          {/* Course Series */}
          <div className="col-lg-2 col-md-4 col-sm-12 d-flex flex-column justify-content-center border-end text-center">
            <h5 className="fw-bold fs-6 mb-1">9 Course Series</h5>
            <p className="text-muted mb-0" style={{ fontSize: "0.7rem" }}>
              Earn a career credential that demonstrates your expertise
            </p>
          </div>

          {/* Rating Section */}
          <div className="col-lg-2 col-md-4 col-sm-12 d-flex flex-column justify-content-center border-end text-center">
            <h5 className="fw-bold fs-6 d-flex justify-content-center align-items-center mb-1">
              <i
                className="bi bi-star-fill me-1"
                style={{ color: "#f59e0b", fontSize: "15px" }}
              ></i>{" "}
              4.7
            </h5>
            <p className="text-muted mb-0" style={{ fontSize: "0.7rem" }}>
              16,680 reviews
            </p>
          </div>

          {/* Beginner Level Section */}
          <div className="col-lg-2 col-md-4 col-sm-12 d-flex flex-column justify-content-center border-end text-center">
            <h5 className="fw-bold fs-6 mb-1">Beginner Level</h5>
            <p className="text-muted mb-0" style={{ fontSize: "0.7rem" }}>
              No prior experience required
            </p>
          </div>

          {/* Flexible Schedule */}
          <div className="col-lg-3 col-md-4 col-sm-12 d-flex flex-column justify-content-center border-end text-center">
            <h5 className="fw-bold fs-6 mb-1">Flexible Schedule</h5>
            <p className="text-muted mb-0" style={{ fontSize: "0.7rem" }}>
              7 months, 6 hours per week. Learn at your own pace
            </p>
          </div>

          {/* Degree Credit */}
          <div className="col-lg-3 col-md-4 col-sm-12 d-flex flex-column justify-content-center text-center">
            <h5 className="fw-bold fs-6 mb-1">Earn Degree Credit</h5>
            <a
              href="/"
              className="text"
              style={{ fontSize: "0.7rem", color: "#210BE3" }}
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
