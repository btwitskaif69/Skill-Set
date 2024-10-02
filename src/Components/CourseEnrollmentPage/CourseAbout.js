import React from 'react';

export default function CourseAbout({badges, about, objectives, skillsGained }) {
    return (
        <div className="container mt-4 mb-4">
            {/* Course Overview */}
            <h2 className="display-6 fw-medium mb-1">Course Overview</h2>
                        {/* Description */}
                        <p className="fs-5 mb-3">{about}</p>

{/* Badges */}
<div className="d-flex flex-wrap mb-2">
    {/* Render the first badge as "Instructor:" with an icon */}
    <span className="badge border me-2 mb-2" style={{ backgroundColor: "#210BE3" }}>
        <i className="bi bi-person-fill me-1"></i>Instructor: {badges[0]}
    </span>

    {/* Render two additional badges */}
    <span className="badge border me-2 mb-2" style={{ backgroundColor: "#210BE3" }}>
        <i className="bi bi-award me-1"></i>{badges[1]} {/* You can replace badges[1] with the actual text for the badge */}
    </span>
    <span className="badge border me-2 mb-2" style={{ backgroundColor: "#210BE3" }}>
        <i className="bi bi-laptop me-1"></i>{badges[2]} {/* You can replace badges[2] with the actual text for the badge */}
    </span>

    {/* Render the rest of the badges */}
    {badges.slice(3).map((badge, index) => (
        <span key={index} className="badge border me-2 mb-2" style={{ backgroundColor: "#210BE3" }}>
            {badge}
        </span>
    ))}
</div>

            {/* Learning Section */}
            <div className="row">
                {/* Left Card: What You'll Learn */}
                <div className="col-md-6 mb-4">
                    <div className="card h-100 shadow-sm">
                        <div className="card-body">
                            <h5 className="card-title">What You'll Learn</h5>
                            <ul className="list-unstyled">
                                {objectives.map((item, idx) => (
                                    <li key={idx} className="d-flex align-items-center mb-2">
                                        <i className="bi bi-check-circle-fill text-success me-2"></i>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Right Card: Skills You'll Gain */}
                <div className="col-md-6 mb-4">
                    <div className="card h-100 shadow-sm">
                        <div className="card-body">
                            <h5 className="card-title">Skills You'll Gain</h5>
                            <div className="d-flex flex-wrap">
                                {skillsGained.map((skill, idx) => (
                                    <span key={idx} className="badge rounded-pill me-2 mb-2" style={{ backgroundColor: "#210BE3", fontSize: "1rem" }}>
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
