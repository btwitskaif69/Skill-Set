import React from 'react';

export default function Course() {
  return (
    <div className="container mt-5">
      <div className="row">
        {/* Filter Section */}
        <div className="col-md-3">
          <h5>Filter by</h5>
          <div className="filter-section">
            <div className="filter-category mb-4">
              <h6>Subject</h6>
              <ul className="list-group">
                <li className="list-group-item">
                  <input type="checkbox" className="form-check-input" /> Data Science (895)
                </li>
                <li className="list-group-item">
                  <input type="checkbox" className="form-check-input" /> Computer Science (258)
                </li>
                <li className="list-group-item">
                  <input type="checkbox" className="form-check-input" /> Information Technology (248)
                </li>
                <li className="list-group-item">
                  <input type="checkbox" className="form-check-input" /> Business (206)
                </li>
                {/* Add more filter options as needed */}
              </ul>
            </div>
            <div className="filter-category mb-4">
              <h6>Language</h6>
              <ul className="list-group">
                <li className="list-group-item">
                  <input type="checkbox" className="form-check-input" /> English (1,584)
                </li>
                <li className="list-group-item">
                  <input type="checkbox" className="form-check-input" /> Spanish (1,044)
                </li>
                <li className="list-group-item">
                  <input type="checkbox" className="form-check-input" /> French (1,003)
                </li>
                <li className="list-group-item">
                  <input type="checkbox" className="form-check-input" /> Portuguese (999)
                </li>
                {/* Add more filter options as needed */}
              </ul>
            </div>
            {/* Add more filter categories as needed */}
          </div>
        </div>

        {/* Course Cards Section */}
        <div className="col-md-9">
          <h5>Over 500 results for "machine learning"</h5>
          <div className="row">
            {/* Single Course Card */}
            <div className="col-md-4 mb-4">
              <div className="card">
                <img src="path-to-image" className="card-img-top" alt="course-image" />
                <div className="card-body">
                  <h6 className="card-title">Machine Learning</h6>
                  <p className="card-text">
                    Skills you'll gain: Machine Learning, Machine Learning Algorithms, Applied Machine Learning, Algorithms, etc.
                  </p>
                  <span className="text-muted">4.9 (26K reviews)</span>
                </div>
              </div>
            </div>
            {/* Repeat the course card for more courses */}
          </div>
        </div>
      </div>
    </div>
  );
}
