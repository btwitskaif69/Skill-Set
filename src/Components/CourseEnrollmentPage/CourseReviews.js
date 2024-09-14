import React from 'react';

export default function CourseReviews() {
  const reviews = [
    {
      name: "Alex Johnson",
      rating: 5,
      comment: "This course transformed my career. I went from a junior developer to landing a senior role at a top tech company.",
      image: '/Assets/Profile/image1.jpg' // Make sure the image path is correct
    },
    {
      name: "Samantha Lee",
      rating: 5,
      comment: "The hands-on projects and personalized feedback made all the difference. I now feel confident tackling complex web applications.",
      image: '/Assets/Profile/image2.jpg'
    }
  ];

  // Helper function to render star rating
  const renderStars = (rating) => {
    return (
      <>
        {[...Array(rating)].map((_, i) => (
          <i key={i} className="bi bi-star-fill text-warning"></i>
        ))}
      </>
    );
  };

  return (
    <div className="container my-5">
      <h3 className="text-center mb-4">Student Testimonials</h3>
      <div>
        {reviews.map((review, index) => (
          <div className="d-flex mb-4" key={index}>
            {/* Profile image */}
            <div className="me-4">
              <img
                src={review.image}
                alt={review.name}
                className="rounded-circle"
                style={{ width: '50px', height: '50px', objectFit: 'cover' }}
              />
            </div>
            
            {/* Review content */}
            <div>
              <h5 className="fw-bold mb-1">{review.name}</h5>
              <div className="mb-2">{renderStars(review.rating)}</div>
              <p className="text-muted" style={{ fontSize: '14px' }}>
                "{review.comment}"
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
