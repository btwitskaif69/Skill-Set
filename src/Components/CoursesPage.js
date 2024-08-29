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
            <div className="row">
                {/* Left Column: Meta Logo and Course Information */}
                <div className="col-md-8">
                    <img
                        src={University_Logos.Meta}
                        alt="Meta Logo"
                        style={{ width: "80px" }}
                        className="mb-3"
                    />
                    <h1 className="mt-4">Meta Front-End Developer Professional Certificate</h1>
                    <p className="lead mt-3">
                        Launch your career as a front-end developer. Build job-ready skills for an in-demand career and earn a credential from Meta. No degree or prior experience required to get started.
                    </p>
                    <p className="text-muted">
                        Instructor: <a href="/">Taught by Meta Staff</a>
                    </p>
                    <button className="btn btn-primary btn-lg mt-3">Enroll for Free</button>
                    <p className="mt-3">
                        <strong>304,498</strong> already enrolled
                    </p>
                    <p className="text-muted">
                        Included with <a href="/">Coursera Plus</a> • <a href="/">Learn more</a>
                    </p>
                </div>
            </div>

            {/* Course Features & Degree Credit Section */}
<div className="row mt-5 d-flex align-items-center shadow-lg rounded-3">
    <div className="col-lg-2 col-md-4 col-sm-12 mb-3">
        <h5 className="fw-bold">9 course series</h5>
        <p className="text-muted fs-7">Earn a career credential that demonstrates your expertise</p>
    </div>
    <div className="col-lg-2 col-md-4 col-sm-12 mb-3">
        <h5 className="fw-bold">
            <i className="bi bi-star-fill text-warning"></i> 4.7
        </h5>
        <p className="text-muted">(16,680 reviews)</p>
    </div>
    <div className="col-lg-2 col-md-4 col-sm-12 mb-3">
        <h5 className="fw-bold">Beginner level</h5>
        <p className="text-muted">No prior experience required</p>
    </div>
    <div className="col-lg-3 col-md-4 col-sm-12 mb-3">
        <h5 className="fw-bold">Flexible schedule</h5>
        <p className="text-muted">7 months, 6 hours a week. Learn at your own pace</p>
    </div>
    <div className="col-lg-3 col-md-4 col-sm-12 mb-3">
        <h5 className="fw-bold">Earn degree credit</h5>
        <a href="/" className="text-muted">Learn more</a>
    </div>
</div>

        </div>
    );
}

