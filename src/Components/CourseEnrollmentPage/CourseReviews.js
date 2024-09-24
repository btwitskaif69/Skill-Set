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
    },
    {
      name: "David Smith",
      date: "2023-07-05",
      rating: 5,
      comment: "An excellent course that covers everything you need to know. The quizzes and assignments were particularly useful for testing my knowledge. Would definitely recommend.",
      helpfulCount: 37,
      image: '/Assets/Profile/image5.jpg'
    },
    {
      name: "Sophia Lee",
      date: "2023-06-20",
      rating: 3,
      comment: "The course content is good, but I felt the pace was a bit slow. I would have liked more advanced topics to be covered.",
      helpfulCount: 21,
      image: '/Assets/Profile/image6.jpg'
    },
    {
      name: "John Doe",
      date: "2023-05-30",
      rating: 5,
      comment: "Very informative and well-structured course. The instructor was very knowledgeable and the real-world examples were invaluable. Highly recommend!",
      helpfulCount: 50,
      image: '/Assets/Profile/image7.jpg'
    },
    {
      name: "Alice Cooper",
      date: "2023-07-15",
      rating: 4,
      comment: "Good course, but some of the lessons felt repetitive. The forums were very helpful for additional learning.",
      helpfulCount: 30,
      image: '/Assets/Profile/image8.jpg'
    },
    {
      name: "Chris Martin",
      date: "2023-06-05",
      rating: 5,
      comment: "Fantastic course! The instructor explains concepts clearly and the exercises are very practical. I feel much more confident in my skills now.",
      helpfulCount: 43,
      image: '/Assets/Profile/image9.jpg'
    },
    {
      name: "Jessica Taylor",
      date: "2023-05-25",
      rating: 3,
      comment: "The course is okay, but I found the lectures a bit too long and sometimes monotonous. However, the content is solid and informative.",
      helpfulCount: 18,
      image: '/Assets/Profile/image10.jpg'
    },
    {
      name: "Oliver Scott",
      date: "2023-07-20",
      rating: 2,
      comment: "The course did not meet my expectations. The content was too basic, and the instructor seemed unprepared. I don't think it was worth the time and money.",
      helpfulCount: 15,
      image: '/Assets/Profile/image1.jpg'
    },
    {
      name: "Emma Davis",
      date: "2023-08-01",
      rating: 1,
      comment: "Very disappointed with the course. The explanations were confusing and the content was outdated. Would not recommend.",
      helpfulCount: 12,
      image: '/Assets/Profile/image2.jpg'
    },
    {
      name: "Liam Turner",
      date: "2023-07-18",
      rating: 2,
      comment: "The course has potential but lacks depth. Some sections were good, but overall it felt lacking in content and detail.",
      helpfulCount: 9,
      image: '/Assets/Profile/image3.jpg'
    },
    {
      name: "Ava Wilson",
      date: "2023-06-30",
      rating: 1,
      comment: "I did not learn anything new. The course was poorly structured, and the instructor was not engaging. I would not recommend it.",
      helpfulCount: 20,
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
      <div className="rating-summary p-3 rounded shadow-sm mb-5">
        <div className="d-flex justify-content-between align-items-center mb-0">
          <h5 className="fs-4 fw-medium">Student Feedback</h5>
          <h2 className="fs-4 fw-medium d-flex align-items-center">
            {averageRating} 
            <span className="fs-6 ms-2">{renderStars(averageRating)}</span>
          </h2>
        </div>
        <div className="d-flex align-items-center mb-4">
         
          <span className="text-muted fw-medium" style={{ fontSize: '16px' }}>
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
      <div className="most-helpful-review mb-5 p-4 rounded shadow-sm" style={{ background: 'linear-gradient(135deg, #4B0FD9 15%, #210BE3 25%, #7A00E2 40%, #A500FF 60%, #4B0FD9 80%, #1A00B5 95%)' }}>
        <h5 className="section-title" style={{color: 'white' }}>Most Helpful Review</h5>
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
            <h6 className="fw-bold mb-1" style={{color: 'white' }}>{sortedReviews[0].name}</h6>
            <span className="" style={{ fontSize: '14px', color: 'white' }}>{sortedReviews[0].date}</span>
            <div className="mb-2">{renderStars(sortedReviews[0].rating)}</div>
            <p className="" style={{ fontSize: '14px', color: 'white' }}>
              "{sortedReviews[0].comment}"
            </p>
            <div className=" helpful-count" style={{ fontSize: '12px', color: 'white' }}>
              {sortedReviews[0].helpfulCount} people found this helpful
            </div>
          </div>
        </div>
      </div>

      {/* Student Reviews */}
<div className="student-reviews mb-4">
  <div className="d-flex justify-content-between align-items-center mb-3">
    <h5 className="section-title">Student Reviews</h5>
    <div className="dropdown">
      <button 
        className="btn custom-button-default dropdown-toggle" 
        type="button" 
        id="filterDropdown" 
        data-bs-toggle="dropdown" 
        aria-expanded="false"
      >
        {filter === "all" ? "All Ratings" : `${filter} Stars`}
      </button>
      <ul className="dropdown-menu" aria-labelledby="filterDropdown">
        <li><button className="dropdown-item" onClick={() => handleFilterChange({ target: { value: 'all' } })}>All Ratings</button></li>
        <li><button className="dropdown-item" onClick={() => handleFilterChange({ target: { value: '5' } })}>5 Stars</button></li>
        <li><button className="dropdown-item" onClick={() => handleFilterChange({ target: { value: '4' } })}>4 Stars</button></li>
        <li><button className="dropdown-item" onClick={() => handleFilterChange({ target: { value: '3' } })}>3 Stars</button></li>
        <li><button className="dropdown-item" onClick={() => handleFilterChange({ target: { value: '2' } })}>2 Stars</button></li>
        <li><button className="dropdown-item" onClick={() => handleFilterChange({ target: { value: '1' } })}>1 Stars</button></li>
      </ul>
    </div>
  </div>



        {filteredReviews.slice(0, visibleReviews).map((review, index) => (
          <div className="d-flex mb-4 review-card p-4 border-bottom" key={index}>
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
              <span className="text-muted" style={{ fontSize: '15px' }}>{review.date}</span>
              <div className="mb-2">{renderStars(review.rating)}</div>
              <p className="text-muted" style={{ fontSize: '17px' }}>
                "{review.comment}"
              </p>
              <div className="text-muted helpful-count bi bi-hand-thumbs-up" style={{ fontSize: '14px' }}>&nbsp;
                {review.helpfulCount} people found this helpful
              </div>
            </div>
          </div>
        ))}

        {visibleReviews < filteredReviews.length && (
          <button className="btn custom-button-basic w-100" onClick={loadMoreReviews}>
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
        
        .custom-select {
          padding: 4px 12px;
          border-radius: 5px;
          background-color: #fff;
          border: 1px solid #ddd;
        }

        .section-title {
          font-size: 18px;
          font-weight: bold;
        }
        .helpful-count {
          color: #6c757d;
        }
        .rating-summary {
          background-color: #f5f7fa;
        }
        .rating-breakdown .progress-bar {
          transition: width 0.4s ease;
        }
      `}</style>
    </div>
  );
});

export default CourseReviews;
