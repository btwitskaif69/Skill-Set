import React from "react";

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

    return (
        <div className="container my-5">
            <div className="row" style={{}} >
                {/* Left Column: Meta Logo and Course Information */}
                <div className="col-md-9">
                    <img src={University_Logos.Meta} alt="Meta Logo" style={{ width: "150px" }} className="mb-3"/>
                    <h1 className="mb-1 display-4 fw-semibold">Meta Front-End Developer Professional Certificate</h1>
                    <p className="mb-2 fs-6">
                        Launch your career as a front-end developer. Build job-ready skills for an in-demand career and earn a credential from Meta. No degree or prior experience required to get started.
                    </p>
                    <p className="text-muted">
                        Instructor: <a href="/">Taught by Meta Staff</a>
                    </p>
                    <button className="btn btn-primary btn-xxlg mt-3">Enroll for Free</button>
                    <p className="mt-3">
                        <strong>304,498</strong> already enrolled
                    </p>
                    <p className="text-muted">
                        Included with <a href="/">Skill Set</a> • <a href="/">Learn more</a>
                    </p>
                </div>
            </div>

           {/* Course Features & Degree Credit Section */}
            <div className="row mt-5 shadow rounded-3 p-3 mb-5">
                <div className="col-lg-2 col-md-4 col-sm-12 d-flex flex-column justify-content-center border-end">
                    <h5 className="fw-bold fs-6">9 course series</h5>
                    <p className="text-muted" style={{ fontSize: '10px' }}>Earn a career credential that demonstrates your expertise</p>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-12 d-flex flex-column justify-content-center border-end">
                    <h5 className="fw-bold">
                        <i className="bi bi-star-fill fs-6" style={{color: '#0056b3'}}></i> 4.7
                    </h5>
                    <p className="text-muted" style={{ fontSize: '10px' }}>(16,680 reviews)</p>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-12 d-flex flex-column justify-content-center border-end">
                    <h5 className="fw-bold fs-6">Beginner level</h5>
                    <p className="text-muted" style={{ fontSize: '10px' }}>No prior experience required</p>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-12 d-flex flex-column justify-content-center border-end">
                    <h5 className="fw-bold fs-6">Flexible schedule</h5>
                    <p className="text-muted" style={{ fontSize: '10px' }}>7 months, 6 hours a week. Learn at your own pace</p>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-12 d-flex flex-column justify-content-center">
                    <h5 className="fw-bold fs-6 ">Earn degree credit</h5>
                    <a href="/" className="text-muted" style={{ fontSize: '10px' }}>Learn more</a>
                </div>
            </div>

{/* Scrollspy Navigation
<nav id="navbar-example2" className="navbar bg-body-tertiary px-3 mb-3">
    <ul className="nav nav-pills">
        <li className="nav-item">
            <a className="nav-link active" href="#scrollspyHeading1">About</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="#scrollspyHeading2">Outcomes</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="#scrollspyHeading3">Courses</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="#scrollspyHeading4">Testimonials</a>
        </li>
    </ul>
</nav> */}

{/* Scrollspy Content
<div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" className="scrollspy-example bg-body-tertiary p-3 rounded-2" tabIndex="0">
    <h4 id="scrollspyHeading1">What you'll learn</h4>
    <div className="row shadow-sm rounded-3 p-4 border">
        <h5 className="fw-bold mb-4">What you'll learn</h5>
        <div className="col-lg-6 col-md-6 col-sm-12">
          <ul className="list-unstyled">
            <li><i className="bi bi-check-circle-fill text-success"></i> Create a responsive website using HTML, CSS, and JavaScript.</li>
            <li><i className="bi bi-check-circle-fill text-success"></i> Learn Bootstrap CSS Framework and work with GitHub.</li>
          </ul>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12">
          <ul className="list-unstyled">
            <li><i className="bi bi-check-circle-fill text-success"></i> Learn to use React with JavaScript libraries.</li>
            <li><i className="bi bi-check-circle-fill text-success"></i> Prepare for coding interviews and build portfolio-ready projects.</li>
          </ul>
        </div>
    </div>
</div> */}



            Accordion
            <div className="accordion" id="accordionPanelsStayOpenExample">
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                    Accordion Item #1
                </button>
                </h2>
                <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show">
                <div className="accordion-body">
                    <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                    Accordion Item #2
                </button>
                </h2>
                <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse">
                <div className="accordion-body">
                    <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                    Accordion Item #3
                </button>
                </h2>
                <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse">
                <div className="accordion-body">
                    <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
                </div>
            </div>
            </div>



    <section id="certificate" className="my-4">
      <div className="p-4 border rounded-3 bg-light">
        <h4>Earn a career certificate</h4>
        <p>Add this credential to your LinkedIn profile, resume, or CV. Share on social media and in your performance review.</p>
        <div className="d-flex justify-content-center">
          <img src="/path/to/certificate-image.jpg" alt="Certificate" />
        </div>
      </div>
    </section>


    <section id="career" className="my-4">
      <h4>Prepare for a career in Front-end Development</h4>
      <div className="row">
        <div className="col-lg-8 col-md-12">
          <ul className="list-unstyled">
            <li><i className="bi bi-check-circle-fill text-success"></i> Receive professional-level training from Meta</li>
            <li><i className="bi bi-check-circle-fill text-success"></i> Demonstrate your proficiency in portfolio-ready projects</li>
            <li><i className="bi bi-check-circle-fill text-success"></i> Earn an employee-recognized certificate from Meta</li>
            <li><i className="bi bi-check-circle-fill text-success"></i> Qualify for in-demand job titles</li>
          </ul>
        </div>
        <div className="col-lg-4 col-md-12">
          <div className="card">
            <img src="/path/to/image.jpg" className="card-img-top" alt="Career" />
            <div className="card-body">
              <p className="card-text">$130,000+ median U.S. salary for Front-end Development</p>
              <p className="card-text">29,000+ U.S. job openings in Front-end Development</p>
            </div>
          </div>
        </div>
      </div>
    </section>



    <section id="companies" className="my-4">
      <div className="p-4 border rounded-3 text-center bg-light">
        <h4>See how employees at top companies are mastering in-demand skills</h4>
        <div className="d-flex justify-content-center flex-wrap mt-3">
          {/* Add company logos here */}
          <img src={University_Logos.Aws} style={{height: '20px'}}  alt="Company 1" className="m-2" />
          <img src={University_Logos.Duke} style={{height: '20px'}}  alt="Company 1" className="m-2" />
          <img src={University_Logos.Google} style={{height: '20px'}}  alt="Company 1" className="m-2" />
          <img src={University_Logos.IBM} style={{height: '20px'}}  alt="Company 1" className="m-2" />
          <img src={University_Logos.Meta} style={{height: '20px'}}  alt="Company 1" className="m-2" />
          <img src={University_Logos.Stanford_University} style={{height: '20px'}}  alt="Company 1" className="m-2" />
          <img src={University_Logos.University_of_Cambridge} style={{height: '20px'}}  alt="Company 1" className="m-2" />
          <img src={University_Logos.University_of_Michigan} style={{height: '20px'}}  alt="Company 1" className="m-2" />
          <img src={University_Logos.University_of_Oxford} style={{height: '20px'}}  alt="Company 1" className="m-2" />
          <img src={University_Logos.University_of_Pennsylvania} style={{height: '20px'}}  alt="Company 1" className="m-2" />
          {/* Add more logos as needed */}
        </div>
      </div>
    </section>





    <section id="details" className="my-4">
      <h4>Details to know</h4>
      <div className="d-flex flex-column">
        <span><i className="bi bi-linkedin"></i> Shareable certificate</span>
        <span><i className="bi bi-globe"></i> Taught in English</span>
        <span><i className="bi bi-chat-left-text"></i> 21 languages available</span>
      </div>
    </section>



    <section id="about" className="my-4">
      <h4>What you'll learn</h4>
      <div className="row border rounded-3 p-4">
        <div className="col-lg-6 col-md-6 col-sm-12">
          <ul className="list-unstyled">
            <li><i className="bi bi-check-circle-fill text-success"></i> Create a responsive website using HTML, CSS, and JavaScript.</li>
            <li><i className="bi bi-check-circle-fill text-success"></i> Learn Bootstrap CSS Framework and work with GitHub.</li>
          </ul>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12">
          <ul className="list-unstyled">
            <li><i className="bi bi-check-circle-fill text-success"></i> Learn to use React with JavaScript libraries.</li>
            <li><i className="bi bi-check-circle-fill text-success"></i> Prepare for coding interviews and build portfolio-ready projects.</li>
          </ul>
        </div>
      </div>
    </section>






{/* Scrollspy */}
<nav id="navbar-example2" className="navbar bg-body-tertiary px-3 mb-3">
                <ul className="nav nav-pills">
                    <li className="nav-item">
                    <a className="nav-link" href="#scrollspyHeading1">About</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#scrollspyHeading2">Top Companies partners</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#scrollspyHeading1">Course Content</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#scrollspyHeading2">Second</a>
                    </li>
                </ul>
                </nav>
                <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" className="scrollspy-example bg-body-tertiary p-3 rounded-2" tabindex="0">
                <div id="scrollspyHeading1">

                <div className="col-lg-6 col-md-6 col-sm-12">
                <ul className="list-unstyled">
                    <li><i className="bi bi-check-circle-fill text-success"></i> Create a responsive website using HTML, CSS, and JavaScript.</li>
                    <li><i className="bi bi-check-circle-fill text-success"></i> Learn Bootstrap CSS Framework and work with GitHub.</li>
                </ul>
                </div>

                <div className="col-lg-6 col-md-6 col-sm-12">
                <ul className="list-unstyled">
                    <li><i className="bi bi-check-circle-fill text-success"></i> Learn to use React with JavaScript libraries.</li>
                    <li><i className="bi bi-check-circle-fill text-success"></i> Prepare for coding interviews and build portfolio-ready projects.</li>
                </ul>
                </div>

                </div>
                <div id="scrollspyHeading2">

                <section id="companies" className="my-4">
      <div className="p-4 border rounded-3 text-center bg-light">
        <h4>See how employees at top companies are mastering in-demand skills</h4>
        <div className="d-flex justify-content-center flex-wrap mt-3">
          {/* Add company logos here */}
          <img src={University_Logos.Meta} style={{height: '20px'}}  alt="Company 1" className="m-2" />
          <img src={University_Logos.Aws} style={{height: '20px'}}  alt="Company 1" className="m-2" />
          <img src={University_Logos.Duke_University} style={{height: '20px'}}  alt="Company 1" className="m-2" />
          <img src={University_Logos.Meta} style={{height: '20px'}}  alt="Company 1" className="m-2" />
          <img src={University_Logos.Meta} style={{height: '20px'}}  alt="Company 1" className="m-2" />
          <img src={University_Logos.Meta} style={{height: '20px'}}  alt="Company 1" className="m-2" />
          <img src={University_Logos.Meta} style={{height: '20px'}}  alt="Company 1" className="m-2" />
          <img src={University_Logos.Meta} style={{height: '20px'}}  alt="Company 1" className="m-2" />
          <img src={University_Logos.Meta} style={{height: '20px'}}  alt="Company 1" className="m-2" />
          <img src={University_Logos.Meta} style={{height: '20px'}}  alt="Company 1" className="m-2" />
          <img src={University_Logos.Meta} style={{height: '20px'}}  alt="Company 1" className="m-2" />
          <img src={University_Logos.Meta} style={{height: '20px'}}  alt="Company 1" className="m-2" />
          <img src={University_Logos.Meta} style={{height: '20px'}}  alt="Company 1" className="m-2" />
          {/* Add more logos as needed */}
        </div>
      </div>
    </section>
                </div>
                <p>...</p>
                <div id="scrollspyHeading3">
                </div>
                <h4 id="scrollspyHeading4">Fourth heading</h4>
                <h4 id="scrollspyHeading5">Fifth heading</h4>

                </div>







                




        </div>
    );
}

