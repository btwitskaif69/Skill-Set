import React, {useState} from "react";

export default function CoursesPage() {
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

    const [isExpanded, setIsExpanded] = useState(false);

    const toggleReadMore = () => {
        setIsExpanded(!isExpanded);
    };

    return (
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
            <button className="btn btn-primary btn-xxlg mt-3">
              Enroll for Free
            </button>
            <p className="mt-3">
              <strong>304,498</strong> already enrolled
            </p>
            <p className="text-muted">
              Included with <a href="/">Skill Set</a> •{" "}
              <a href="/">Learn more</a>
            </p>
          </div>
        </div>

        {/* Course Features & Degree Credit Section */}
        <div className="row mt-5 shadow rounded-3 p-3 mb-5">
          <div className="col-lg-2 col-md-4 col-sm-12 d-flex flex-column justify-content-center border-end">
            <h5 className="fw-bold fs-6">9 course series</h5>
            <p className="text-muted" style={{ fontSize: "10px" }}>
              Earn a career credential that demonstrates your expertise
            </p>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-12 d-flex flex-column justify-content-center border-end">
            <h5 className="fw-bold">
              <i
                className="bi bi-star-fill fs-6"
                style={{ color: "#0056b3" }}
              ></i>{" "}
              4.7
            </h5>
            <p className="text-muted" style={{ fontSize: "10px" }}>
              (16,680 reviews)
            </p>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-12 d-flex flex-column justify-content-center border-end">
            <h5 className="fw-bold fs-6">Beginner level</h5>
            <p className="text-muted" style={{ fontSize: "10px" }}>
              No prior experience required
            </p>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-12 d-flex flex-column justify-content-center border-end">
            <h5 className="fw-bold fs-6">Flexible schedule</h5>
            <p className="text-muted" style={{ fontSize: "10px" }}>
              7 months, 6 hours a week. Learn at your own pace
            </p>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-12 d-flex flex-column justify-content-center">
            <h5 className="fw-bold fs-6 ">Earn degree credit</h5>
            <a href="/" className="text-muted" style={{ fontSize: "10px" }}>
              Learn more
            </a>
          </div>
        </div>

        <nav id="navbar-example2" className="navbar bg-body-tertiary px-3 mb-3">
          <ul className="nav nav-pills">
            <li className="nav-item">
              <a className="nav-link active" href="#scrollspyHeading1">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#scrollspyHeading2">
                Outcomes
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#scrollspyHeading3">
                Courses
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#scrollspyHeading4">
                Testimonials
              </a>
            </li>
          </ul>
        </nav>
        <div
          data-bs-spy="scroll"
          data-bs-target="#navbar-example2"
          data-bs-root-margin="0px 0px -40%"
          data-bs-smooth-scroll="true"
          className="scrollspy-example bg-body-tertiary p-3 rounded-2"
          tabIndex="0"
        >
          <h4 id="scrollspyHeading1">First heading</h4>
          <div className="row shadow-sm rounded-3 p-4 border">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <ul className="list-unstyled">
                <li>
                  <i className="bi bi-check-circle-fill text-success"></i>{" "}
                  Create a responsive website using HTML, CSS, and JavaScript.
                </li>
                <li>
                  <i className="bi bi-check-circle-fill text-success"></i> Learn
                  Bootstrap CSS Framework and work with GitHub.
                </li>
              </ul>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <ul className="list-unstyled">
                <li>
                  <i className="bi bi-check-circle-fill text-success"></i> Learn
                  to use React with JavaScript libraries.
                </li>
                <li>
                  <i className="bi bi-check-circle-fill text-success"></i>{" "}
                  Prepare for coding interviews and build portfolio-ready
                  projects.
                </li>
              </ul>
            </div>
          </div>

          <section id="companies" className="my-4">
            <div className="p-4 border rounded-3 text-center bg-light">
              <h4>
                Find out how experts at major firms are acquiring sought-after
                skills
              </h4>
              <div className="d-flex justify-content-center flex-wrap mt-3">
                {/* Add company logos here */}
                <img
                  src={University_Logos.Aws}
                  style={{ height: "30px" }}
                  alt="Company 1"
                  className="m-2  mx-3"
                />
                <img
                  src={University_Logos.Duke_University}
                  style={{ height: "30px" }}
                  alt="Company 1"
                  className="m-2   mx-3"
                />
                <img
                  src={University_Logos.Google}
                  style={{ height: "30px" }}
                  alt="Company 1"
                  className="m-2   mx-3"
                />
                <img
                  src={University_Logos.IBM}
                  style={{ height: "30px" }}
                  alt="Company 1"
                  className="m-2   mx-3"
                />
                <img
                  src={University_Logos.Meta}
                  style={{ height: "30px" }}
                  alt="Company 1"
                  className="m-2   mx-3"
                />
                <img
                  src={University_Logos.Stanford_University}
                  style={{ height: "30px" }}
                  alt="Company 1"
                  className="m-2   mx-3"
                />
                <img
                  src={University_Logos.University_of_Cambridge}
                  style={{ height: "30px" }}
                  alt="Company 1"
                  className="m-2   mx-3"
                />
                <img
                  src={University_Logos.University_of_Michigan}
                  style={{ height: "30px" }}
                  alt="Company 1"
                  className="m-2   mx-3"
                />
                <img
                  src={University_Logos.University_of_Oxford}
                  style={{ height: "30px" }}
                  alt="Company 1"
                  className="m-2   mx-3"
                />
                <img
                  src={University_Logos.University_of_Pennsylvania}
                  style={{ height: "30px" }}
                  alt="Company 1"
                  className="m-2   mx-3"
                />
                {/* Add more logos as needed */}
              </div>
            </div>
          </section>

          <section id="skills" className="my-4">
            <h4>Knowledge You'll Gain</h4>
            <div className="d-flex flex-wrap">
              <span
                className="badge m-1"
                style={{ backgroundColor: "#210BE3" }}
              >
                HTML
              </span>
              <span
                className="badge m-1"
                style={{ backgroundColor: "#210BE3" }}
              >
                UX design
              </span>
              <span
                className="badge m-1"
                style={{ backgroundColor: "#210BE3" }}
              >
                JavaScript
              </span>
              <span
                className="badge m-1"
                style={{ backgroundColor: "#210BE3" }}
              >
                CSS
              </span>
              <span
                className="badge m-1"
                style={{ backgroundColor: "#210BE3" }}
              >
                React
              </span>
            </div>
          </section>

          <h4 id="scrollspyHeading2">Second heading</h4>
          <p>
            <section id="career" className="my-4">
              <h4>Prepare for a career in Front-end Development</h4>
              <div className="row">
                <div className="col-lg-8 col-md-12">
                  <ul className="list-unstyled">
                    <li>
                      <i className="bi bi-check-circle-fill text-success"></i>{" "}
                      Receive professional-level training from Meta
                    </li>
                    <li>
                      <i className="bi bi-check-circle-fill text-success"></i>{" "}
                      Demonstrate your proficiency in portfolio-ready projects
                    </li>
                    <li>
                      <i className="bi bi-check-circle-fill text-success"></i>{" "}
                      Earn an employee-recognized certificate from Meta
                    </li>
                    <li>
                      <i className="bi bi-check-circle-fill text-success"></i>{" "}
                      Qualify for in-demand job titles
                    </li>
                  </ul>
                </div>
                <div className="col-lg-4 col-md-12">
                  <div className="card">
                    <img
                      src="/path/to/image.jpg"
                      className="card-img-top"
                      alt="Career"
                    />
                    <div className="card-body">
                      <p className="card-text">
                        $130,000+ median U.S. salary for Front-end Development
                      </p>
                      <p className="card-text">
                        29,000+ U.S. job openings in Front-end Development
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </p>

          <div className="display-6 fw-medium" id="scrollspyHeading3">
            Professional Certificate - 9 course series
          </div>
          <p>
            Looking to kickstart a career in coding and web development? This
            certificate, created by software engineering experts at Meta—the
            minds behind Facebook and Instagram—will set you on the path to
            becoming a front-end developer.
          </p>
          <p>In this program, you will master:</p>
          <ul>
            <li>
              The basics of coding and crafting interactive web pages with
              HTML5, CSS, and JavaScript.
            </li>
            <li>
              Essential design techniques to build professional-grade layouts
              using popular tools like Bootstrap, React, and Figma.
            </li>
            <li>
              How to manage code with GitHub, work with content management
              systems (CMS), and enhance images using Figma.
            </li>
            <li>
              Tips and strategies to excel in technical interviews for front-end
              developer positions.
            </li>
          </ul>

          {isExpanded && (
            <>
              <p>
                By the program’s conclusion, you’ll apply your skills in a
                real-world project, where you’ll develop a front-end web
                application from scratch. Please note, third-party trademarks,
                logos, and intellectual property referenced remain the property
                of their respective owners, and Coursera’s mention of them does
                not imply any affiliation or endorsement.
              </p>

              <h5>Practical Learning Experience</h5>
              <p>
                This program offers hands-on learning, allowing you to directly
                apply the skills you acquire. Each course concludes with a
                project to ensure you have fully grasped the concepts before
                moving forward. Across 9 projects, you’ll work on tasks such as:
              </p>
              <ul>
                <li>
                  Updating your personal Bio page, utilizing your knowledge of
                  HTML5, CSS, and UI frameworks.
                </li>
                <li>
                  Managing a project on GitHub, employing version control
                  through Git repositories and the Linux Terminal.
                </li>
                <li>
                  Building a static version of an application, applying concepts
                  of React, frameworks, hooks, routing, and bundlers.
                </li>
              </ul>
              <p>
                Finally, you’ll complete a Capstone project, bringing all of
                your newfound skills together to create a fully functioning
                front-end web application.
              </p>
            </>
          )}

          <button
            className="btn btn-primary mb-4"
            onClick={toggleReadMore}
            style={{ backgroundColor: "#210BE3" }}
          >
            {isExpanded ? "Read Less" : "Read More"}
          </button>

          {/* Accordion Item #1 */}
          <div>
            <div className="accordion" id="accordionPanelsStayOpenExample">
              <div className="accordion-item border-bottom">
                <h2 className="accordion-header">
                  <button className="accordion-button fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne" style={{ backgroundColor: "transparent", boxShadow: "none",}}>
                    Introduction to Front-End Development
                    </button></h2>
                <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show">
                  <div className="accordion-body" style={{ paddingLeft: "20px" }}>
                    <ul style={{ listStyleType: "none", paddingLeft: "0" }}>
                      <li className="bi bi-check-lg">&nbsp;Distinguish between front-end, back-end, and full-stack developers.</li>
                      <li className="bi bi-check-lg">&nbsp;Create and style a webpage with HTML and CSS.</li>
                      <li className="bi bi-check-lg">&nbsp;The benefits of working with UI frameworks.</li>
                    </ul>
                    <h6>Knowledge You'll Gain</h6>
                    <div className="skills-tags">
                      <span className="badge me-1" style={{ backgroundColor: "#210BE3" }}>Version Control</span>
                      <span className="badge mx-1" style={{ backgroundColor: "#210BE3" }}>GitHub</span>
                      <span className="badge mx-1" style={{ backgroundColor: "#210BE3" }}>Bash (Unix Shell)</span>
                      <span className="badge mx-1" style={{ backgroundColor: "#210BE3" }}>Web Development</span>
                      <span className="badge mx-1" style={{ backgroundColor: "#210BE3" }}>Linux</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Accordion Item #2 */}
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo" style={{ backgroundColor: "transparent", boxShadow: "none",}}>
                    Programming with JavaScript
                  </button>
                </h2>
                <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse"
                >
                  <div className="accordion-body" style={{ paddingLeft: "20px" }}
                  >
                    <ul style={{ listStyleType: "none", paddingLeft: "0" }}>
                      <li className="bi bi-check-lg">&nbsp;Distinguish between front-end, back-end, andfull-stack developers.</li>
                      <li className="bi bi-check-lg">&nbsp;Create and style a webpage with HTML and CSS.</li>
                      <li className="bi bi-check-lg">&nbsp;The benefits of working with UI frameworks.</li>
                    </ul>
                    <h6>Knowledge You'll Gain</h6>
                    <div className="skills-tags">
                      <span className="badge me-1" style={{ backgroundColor: "#210BE3" }}>Version Control</span>
                      <span className="badge mx-1" style={{ backgroundColor: "#210BE3" }}>GitHub</span>
                      <span className="badge mx-1" style={{ backgroundColor: "#210BE3" }}>Bash (Unix Shell)</span>
                      <span className="badge mx-1" style={{ backgroundColor: "#210BE3" }}>Web Development</span>
                      <span className="badge mx-1" style={{ backgroundColor: "#210BE3" }}>Linux</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Accordion Item #3 */}
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree" style={{ backgroundColor: "transparent", boxShadow: "none",}}>
                    Programming with JavaScript
                  </button>
                </h2>
                <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse"
                >
                  <div className="accordion-body" style={{ paddingLeft: "20px" }}
                  >
                    <ul style={{ listStyleType: "none", paddingLeft: "0" }}>
                      <li className="bi bi-check-lg">&nbsp;Distinguish between front-end, back-end, andfull-stack developers.</li>
                      <li className="bi bi-check-lg">&nbsp;Create and style a webpage with HTML and CSS.</li>
                      <li className="bi bi-check-lg">&nbsp;The benefits of working with UI frameworks.</li>
                    </ul>
                    <h6>Knowledge You'll Gain</h6>
                    <div className="skills-tags">
                      <span className="badge me-1" style={{ backgroundColor: "#210BE3" }}>Version Control</span>
                      <span className="badge mx-1" style={{ backgroundColor: "#210BE3" }}>GitHub</span>
                      <span className="badge mx-1" style={{ backgroundColor: "#210BE3" }}>Bash (Unix Shell)</span>
                      <span className="badge mx-1" style={{ backgroundColor: "#210BE3" }}>Web Development</span>
                      <span className="badge mx-1" style={{ backgroundColor: "#210BE3" }}>Linux</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Accordion Item #4 */}
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false" aria-controls="panelsStayOpen-collapseFour" style={{ backgroundColor: "transparent", boxShadow: "none",}}>
                    Programming with JavaScript
                  </button>
                </h2>
                <div id="panelsStayOpen-collapseFour" className="accordion-collapse collapse"
                >
                  <div className="accordion-body" style={{ paddingLeft: "20px" }}
                  >
                    <ul style={{ listStyleType: "none", paddingLeft: "0" }}>
                      <li className="bi bi-check-lg">&nbsp;Distinguish between front-end, back-end, andfull-stack developers.</li>
                      <li className="bi bi-check-lg">&nbsp;Create and style a webpage with HTML and CSS.</li>
                      <li className="bi bi-check-lg">&nbsp;The benefits of working with UI frameworks.</li>
                    </ul>
                    <h6>Knowledge You'll Gain</h6>
                    <div className="skills-tags">
                      <span className="badge me-1" style={{ backgroundColor: "#210BE3" }}>Version Control</span>
                      <span className="badge mx-1" style={{ backgroundColor: "#210BE3" }}>GitHub</span>
                      <span className="badge mx-1" style={{ backgroundColor: "#210BE3" }}>Bash (Unix Shell)</span>
                      <span className="badge mx-1" style={{ backgroundColor: "#210BE3" }}>Web Development</span>
                      <span className="badge mx-1" style={{ backgroundColor: "#210BE3" }}>Linux</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

