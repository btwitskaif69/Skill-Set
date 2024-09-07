import React from 'react';

export default function InstructorDetails() {
  const instructors = [
    {
      name: "John Doe",
      title: "Lead Instructor",
      bio: "John has over 10 years of experience in software development and is passionate about teaching and mentoring.",
      image: '/Assets/Profile/image1.jpg'
    },
    {
      name: "Jane Smith",
      title: "Co-Instructor",
      bio: "Jane is a front-end expert with a deep understanding of React and modern web technologies.",
      image: '/Assets/Profile/image2.jpg'
    }
  ];

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Meet the Instructors</h2>
      <div className="row">
        {instructors.map((instructor, index) => (
          <div className="col-md-6 mb-4" key={index}>
            <div className="card h-100">
              <img src={instructor.image} className="card-img-top" alt={instructor.name} />
              <div className="card-body">
                <h5 className="card-title">{instructor.name}</h5>
                <p className="card-text">{instructor.title}</p>
                <p className="card-text">{instructor.bio}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
