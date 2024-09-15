import React, { forwardRef } from 'react';

const CourseReviews = forwardRef((props, ref) => {
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
    },
    {
      name: "Jordan Smith",
      rating: 4,
      comment: "The course provided a solid foundation in front-end development. The modules are well-structured, and the assignments are relevant.",
      image: '/Assets/Profile/image3.jpg'
    },
    {
      name: "Emily Davis",
      rating: 5,
      comment: "I appreciated the depth of knowledge shared in this course. The real-world projects and support from instructors were excellent.",
      image: '/Assets/Profile/image4.jpg'
    },
    {
      name: "Michael Brown",
      rating: 4,
      comment: "A comprehensive course with practical exercises that help reinforce learning. The only downside was the occasional technical issue with the course platform.",
      image: '/Assets/Profile/image5.jpg'
    },
    {
      name: "Olivia Wilson",
      rating: 5,
      comment: "The Meta Front-End Developer course exceeded my expectations. I gained valuable skills and the certification helped me land my dream job.",
      image: '/Assets/Profile/image6.jpg'
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
    <div ref={ref} id="course-reviews-section" className="container my-5">
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
});

export default CourseReviews;
