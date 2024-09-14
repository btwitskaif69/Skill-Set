import React from 'react';

export default function InstructorDetails() {
  const instructor = {
    name: "Dr. Jane Smith, Ph.D.",
    title: "15+ years of experience in web development and software engineering. Former lead developer at Tech Giant Inc. and author of 'Mastering Modern Web Development'.",
    skills: ["JavaScript Expert", "React Guru", "Node.js Specialist"],
    image: '/Assets/Profile/image2.jpg' // Make sure the image path is correct
  };

  return (
    <div className="container my-5">
      <h3 className="text-center mb-4">Meet Your Instructor</h3>
      <div className="d-flex justify-content-center align-items-start">
        <div className="me-4">
          <img
            src={instructor.image}
            alt={instructor.name}
            className="rounded-circle"
            style={{ width: '120px', height: '120px', objectFit: 'cover' }}
          />
        </div>
        <div>
          <h4 className="fw-bold">{instructor.name}</h4>
          <p className="text-muted mb-2" style={{ fontSize: '14px' }}>{instructor.title}</p>
          <div className="mb-3">
            {instructor.skills.map((skill, index) => (
              <span key={index} className="badge bg-dark me-2" style={{ fontSize: '12px' }}>
                {skill}
              </span>
            ))}
          </div>
          <button className="btn btn-outline-secondary d-flex align-items-center">
            <i className="bi bi-telephone-fill me-2"></i>
            Schedule a call with Dr. Smith
          </button>
        </div>
      </div>
    </div>
  );
}
