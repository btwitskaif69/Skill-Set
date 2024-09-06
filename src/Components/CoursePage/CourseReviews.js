import React from 'react';

export default function CourseReviews() {
  const reviews = [
    {
      name: "Alice Johnson",
      rating: 5,
      comment: "This course was amazing! I learned so much about web development. The instructors were great."
    },
    {
      name: "Bob Williams",
      rating: 4,
      comment: "A very comprehensive course, though I think the pace was a bit fast in some parts. Overall, highly recommended."
    },
    {
      name: "Carol Davis",
      rating: 5,
      comment: "This course exceeded my expectations. The projects were really hands-on and I felt very engaged throughout."
    }
  ];

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Student Reviews</h2>
      <div className="list-group">
        {reviews.map((review, index) => (
          <div className="list-group-item" key={index}>
            <h5 className="mb-1">{review.name}</h5>
            <p className="mb-1">Rating: {review.rating} / 5</p>
            <p>{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
