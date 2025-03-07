import React from 'react';

export default function CourseAbout({ badges = [], about = "", objectives = [], skillsGained = [] }) {
    // Ensure all values are proper arrays
    const safeBadges = Array.isArray(badges) ? badges : [];
    const safeObjectives = Array.isArray(objectives) ? objectives : [];
    const safeSkills = Array.isArray(skillsGained) ? skillsGained : [];

    return (
        <div className="container mt-4 mb-4">
            <h2 className="display-6 fw-medium mb-1">Course Overview</h2>
            <p className="fs-5 mb-3">{about}</p>

            {/* Badges with safety checks */}
            <div className="d-flex flex-wrap mb-2">
                {safeBadges.slice(0, 3).map((badge, index) => (
                    <span key={index} className="badge border me-2 mb-2" style={{ backgroundColor: "#210BE3" }}>
                        {index === 0 ? (
                            <>
                                <i className="bi bi-person-fill me-1"></i>
                                Instructor: {badge}
                            </>
                        ) : (
                            <>
                                <i className={`bi me-1 ${index === 1 ? 'bi-award' : 'bi-laptop'}`}></i>
                                {badge}
                            </>
                        )}
                    </span>
                ))}
                {safeBadges.slice(3).map((badge, index) => (
                    <span key={index + 3} className="badge border me-2 mb-2" style={{ backgroundColor: "#210BE3" }}>
                        {badge}
                    </span>
                ))}
            </div>

            <div className="row">
                <div className="col-md-6 mb-4">
                    <div className="card h-100 shadow-sm">
                        <div className="card-body">
                            <h5 className="card-title">What You'll Learn</h5>
                            <ul className="list-unstyled">
                                {safeObjectives.map((item, idx) => (
                                    <li key={idx} className="d-flex align-items-center mb-2">
                                        <i className="bi bi-check-circle-fill text-success me-2"></i>
                                        {item}
                                    </li>
                                ))}
                                {safeObjectives.length === 0 && (
                                    <li className="text-muted">No learning objectives listed</li>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 mb-4">
                    <div className="card h-100 shadow-sm">
                        <div className="card-body">
                            <h5 className="card-title">Skills You'll Gain</h5>
                            <div className="d-flex flex-wrap">
                                {safeSkills.map((skill, idx) => (
                                    <span key={idx} className="badge rounded-pill me-2 mb-2" 
                                        style={{ backgroundColor: "#210BE3", fontSize: "1rem" }}>
                                        {skill}
                                    </span>
                                ))}
                                {safeSkills.length === 0 && (
                                    <span className="text-muted">No skills listed</span>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}