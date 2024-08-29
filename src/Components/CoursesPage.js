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
                    <img src={University_Logos.Meta} alt="Meta Logo" style={{ width: "200px" }} className="mb-4"/>
                    <h1 className="mb-1 display-4 fw-medium">Meta Front-End Developer Professional Certificate</h1>
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
            <div className="row mt-5 shadow-lg rounded-3 p-3 mb-5">
                <div className="col-lg-2 col-md-4 col-sm-12 d-flex flex-column justify-content-center border-end">
                    <h5 className="fw-bold fs-6">9 course series</h5>
                    <p className="text-muted" style={{ fontSize: '12.5px' }}>Earn a career credential that demonstrates your expertise</p>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-12 d-flex flex-column justify-content-center border-end">
                    <h5 className="fw-bold">
                        <i className="bi bi-star-fill fs-6" style={{color: '#0056b3'}}></i> 4.7
                    </h5>
                    <p className="text-muted" style={{ fontSize: '12.5px' }}>(16,680 reviews)</p>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-12 d-flex flex-column justify-content-center border-end">
                    <h5 className="fw-bold fs-6">Beginner level</h5>
                    <p className="text-muted" style={{ fontSize: '12.5px' }}>No prior experience required</p>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-12 d-flex flex-column justify-content-center border-end">
                    <h5 className="fw-bold fs-6">Flexible schedule</h5>
                    <p className="text-muted" style={{ fontSize: '12.5px' }}>7 months, 6 hours a week. Learn at your own pace</p>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-12 d-flex flex-column justify-content-center">
                    <h5 className="fw-bold fs-6 ">Earn degree credit</h5>
                    <a href="/" className="text-muted" style={{ fontSize: '12.5px' }}>Learn more</a>
                </div>
            </div>


            {/* Accordion */}
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
        </div>
    );
}

