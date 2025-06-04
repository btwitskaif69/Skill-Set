import React from 'react';

const DEFAULT_IMAGE = "/Assets/Profile/default_profile.jpg";

export default function InstructorDetails({ instructorimage, instructorname, experience, expertise = [] }) {
  // Use the provided image or fallback to default
  const imageSrc = instructorimage
    ? `/Assets/Profile/${instructorimage}`
    : DEFAULT_IMAGE;

  return (
    <div className="container mb-4">
      <h3 className="display-6 fw-medium mb-4">Meet Your Instructor</h3>
      <div className="d-flex align-items-start">
        <div className="me-4">
          <img
            src={imageSrc}
            alt={instructorname}
            className="rounded-circle"
            style={{ width: '120px', height: '120px', objectFit: 'cover' }}
          />
        </div>
        <div>
          <h4 className="fw-semibold">{instructorname || "Instructor Name Unavailable"}</h4>
          <p className="text-muted fs-6 mb-2" style={{ fontSize: '14px' }}>
            {experience || "Experience details not available"}
          </p>
          <div className="mb-3">
            {expertise.length > 0 ? (
              expertise.map((skill, index) => (
                <span key={index} className="badge me-2 mb-2" style={{ fontSize: '12px', backgroundColor: '#210BE3' }}>
                  {skill}
                </span>
              ))
            ) : (
              <span className="text-muted">No expertise information available</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

