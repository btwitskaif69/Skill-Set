import React, { forwardRef, useState } from 'react';

const CourseReviews = forwardRef((props, ref) => {
  const [visibleReviews, setVisibleReviews] = useState(3);
  const [filter, setFilter] = useState('all'); // Filter state
  const [newReview, setNewReview] = useState({
    name: '',
    date: '',
    rating: 5,
    comment: '',
    helpfulCount: 0,
    image: '/Assets/Profile/default.jpg', // Default image
  });

  const [reviews, setReviews] = useState([
    {
      name: "Emily Johnson",
      date: "2023-05-05",
      rating: 5,
      comment: "Absolutely loved this course! The instructor's teaching style made complex topics easy to understand. The community support in the forums was also incredibly helpful. Highly recommend!",
      helpfulCount: 56,
      image: '/Assets/Profile/image1.jpg'
    },
    {
      name: "Jane Doe",
      date: "2023-05-15",
      rating: 5,
      comment: "This course exceeded my expectations. The content was well-structured and the instructor's explanations were clear and concise. I particularly enjoyed the hands-on projects which really helped reinforce the concepts.",
      helpfulCount: 45,
      image: '/Assets/Profile/image2.jpg'
    },
    {
      name: "Sarah Wilson",
      date: "2023-04-25",
      rating: 4,
      comment: "Great course, very comprehensive. I learned a lot, although there were some technical issues with the platform at times.",
      helpfulCount: 33,
      image: '/Assets/Profile/image3.jpg'
    },
    {
      name: "Michael Brown",
      date: "2023-06-10",
      rating: 4,
      comment: "The content is good, but I wish there were more practical examples. Overall, I learned a lot.",
      helpfulCount: 28,
      image: '/Assets/Profile/image4.jpg'
    }
  ]);

  // Sort reviews by rating (descending)
  const sortedReviews = [...reviews].sort((a, b) => b.rating - a.rating);

  // Apply filter
  const filteredReviews = filter === 'all'
    ? sortedReviews
    : sortedReviews.filter(review => review.rating === parseInt(filter));

  const totalReviews = filteredReviews.length;
  const averageRating = (filteredReviews.reduce((acc, review) => acc + review.rating, 0) / totalReviews).toFixed(1);

  const ratingSummary = {
    5: 60,
    4: 40,
    3: 0,
    2: 0,
    1: 0,
  };

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <>
        {[...Array(fullStars)].map((_, i) => (
          <i key={i} className="bi bi-star-fill text-warning"></i>
        ))}
        {halfStar && <i className="bi bi-star-half text-warning"></i>}
        {[...Array(emptyStars)].map((_, i) => (
          <i key={i} className="bi bi-star text-muted"></i>
        ))}
      </>
    );
  };

  const loadMoreReviews = () => {
    setVisibleReviews((prev) => prev + 3);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value); // Update filter based on dropdown selection
    setVisibleReviews(3); // Reset visible reviews when filter changes
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewReview(prev => ({
      ...prev,
      [name]: name === 'rating' ? parseInt(value) : value // Parse rating to integer
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const date = new Date().toISOString().split('T')[0]; // Get today's date
    const submittedReview = { ...newReview, date };
    setReviews(prev => [...prev, submittedReview]);
    setNewReview({ name: '', date: '', rating: 5, comment: '', helpfulCount: 0, image: '/Assets/Profile/default.jpg' }); // Reset form
  };

  return (
    <div ref={ref} id="course-reviews-section" className="container my-5">
      {/* Rating Summary */}
      <div className="rating-summary p-4 rounded shadow-sm mb-5 bg-light">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h5 className="section-title">Student Feedback</h5>
          <h2 className="text-primary d-flex align-items-center">
            {averageRating} 
            <span className="ms-2">{renderStars(averageRating)}</span>
          </h2>
        </div>
        <div className="d-flex align-items-center mb-4">
          {renderStars(Math.round(averageRating))}
          <span className="ms-2 text-muted" style={{ fontSize: '16px' }}>
            Based on {totalReviews} reviews
          </span>
        </div>

        {/* Rating Breakdown */}
        <div className="rating-breakdown">
          {Object.keys(ratingSummary).map((star) => (
            <div key={star} className="d-flex align-items-center mb-2">
              <span className="me-2" style={{ width: '40px' }}>{star} stars</span>
              <div className="progress w-100 me-2" style={{ height: '10px' }}>
                <div
                  className="progress-bar bg-dark"
                  role="progressbar"
                  style={{ width: `${ratingSummary[star]}%` }}
                  aria-valuenow={ratingSummary[star]}
                  aria-valuemin="0"
                  aria-valuemax="100"
                />
              </div>
              <span>{ratingSummary[star]}%</span>
            </div>
          ))}
        </div>
      </div>

      {/* Most Helpful Review */}
      <div className="most-helpful-review mb-5 p-4 rounded shadow-sm bg-light">
        <h5 className="section-title">Most Helpful Review</h5>
        <div className="d-flex mt-4">
          <div className="me-3">
            <img
              src={sortedReviews[0].image}
              alt={sortedReviews[0].name}
              className="rounded-circle"
              style={{ width: '50px', height: '50px', objectFit: 'cover' }}
            />
          </div>
          <div>
            <h6 className="fw-bold mb-1">{sortedReviews[0].name}</h6>
            <span className="text-muted" style={{ fontSize: '14px' }}>{sortedReviews[0].date}</span>
            <div className="mb-2">{renderStars(sortedReviews[0].rating)}</div>
            <p className="text-muted" style={{ fontSize: '14px' }}>
              "{sortedReviews[0].comment}"
            </p>
            <div className="text-muted helpful-count" style={{ fontSize: '12px' }}>
              {sortedReviews[0].helpfulCount} people found this helpful
            </div>
          </div>
        </div>
      </div>

      {/* Student Reviews */}
      <div className="student-reviews mb-4">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h5 className="section-title">Student Reviews</h5>
          <select className="form-select w-auto custom-select" value={filter} onChange={handleFilterChange}>
            <option value="all">All Ratings</option>
            <option value="5">5 Stars</option>
            <option value="4">4 Stars</option>
            <option value="3">3 Stars</option>
          </select>
        </div>

        {filteredReviews.slice(0, visibleReviews).map((review, index) => (
          <div className="d-flex mb-4 review-card p-3 bg-light rounded shadow-sm" key={index}>
            <div className="me-3">
              <img
                src={review.image}
                alt={review.name}
                className="rounded-circle"
                style={{ width: '50px', height: '50px', objectFit: 'cover' }}
              />
            </div>
            <div>
              <h6 className="fw-bold mb-1">{review.name}</h6>
              <span className="text-muted" style={{ fontSize: '14px' }}>{review.date}</span>
              <div className="mb-2">{renderStars(review.rating)}</div>
              <p className="text-muted" style={{ fontSize: '14px' }}>
                "{review.comment}"
              </p>
              <div className="text-muted helpful-count" style={{ fontSize: '12px' }}>
                {review.helpfulCount} people found this helpful
              </div>
            </div>
          </div>
        ))}

        {visibleReviews < filteredReviews.length && (
          <button className="btn btn-dark w-100 load-more-btn" onClick={loadMoreReviews}>
            Load More Reviews
          </button>
        )}
      </div>

      {/* Add Review Form */}
      <div className="add-review mb-4">
        <h5 className="section-title">Add Your Review</h5>
        <form onSubmit={handleSubmit} className="p-3 bg-light rounded shadow-sm">
          <div className="mb-3">
            <label className="form-label">Your Name</label>
            <input type="text" name="name" value={newReview.name} onChange={handleInputChange} className="form-control" required />
          </div>
          <div className="mb-3">
            <label className="form-label">Rating</label>
            <select name="rating" value={newReview.rating} onChange={handleInputChange} className="form-select" required>
              <option value={5}>5 Stars</option>
              <option value={4}>4 Stars</option>
              <option value={3}>3 Stars</option>
              <option value={2}>2 Stars</option>
              <option value={1}>1 Star</option>
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label">Comment</label>
            <textarea name="comment" value={newReview.comment} onChange={handleInputChange} className="form-control" rows="3" required />
          </div>
          <button type="submit" className="btn btn-primary">Submit Review</button>
        </form>
      </div>

      {/* Additional Styles */}
      <style>{`
        .bi-star-fill {
          margin-right: 2px;
        }
        .bi-star {
          margin-right: 2px;
        }
        .form-select {
          font-size: 14px;
          padding: 4px 12px;
        }
        .most-helpful-review, .review-card {
          transition: box-shadow 0.3s ease;
        }
        .most-helpful-review:hover, .review-card:hover {
          box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
        }
        .custom-select {
          padding: 4px 12px;
          border-radius: 5px;
          background-color: #fff;
          border: 1px solid #ddd;
        }
        .load-more-btn {
          background-color: #000;
          color: #fff;
          font-weight: bold;
        }
        .load-more-btn:hover {
          background-color: #333;
        }
        .section-title {
          font-size: 18px;
          font-weight: bold;
        }
        .helpful-count {
          color: #6c757d;
        }
        .rating-summary {
          background-color: #f0f8ff;
        }
        .rating-breakdown .progress-bar {
          transition: width 0.4s ease;
        }
      `}</style>
    </div>
  );
});

export default CourseReviews;
