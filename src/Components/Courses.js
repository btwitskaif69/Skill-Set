import React from 'react';

export default function Course() {
  return (
    <div className="container mt-5">
      <div className="row">
        {/* Filter Section */}
        <div className="col-md-3">
          <h6 className="mb-3">Filter by</h6>
          <div className="filter-section">
            <div className="filter-category mb-4">
              <h6 className="text-muted">Subject</h6>
              <ul className="list-unstyled">
                <li className="form-check">
                  <input type="checkbox" className="form-check-input" id="data-science" />
                  <label className="form-check-label" htmlFor="data-science">Data Science (895)</label>
                </li>
                <li className="form-check">
                  <input type="checkbox" className="form-check-input" id="computer-science" />
                  <label className="form-check-label" htmlFor="computer-science">Computer Science (258)</label>
                </li>
                <li className="form-check">
                  <input type="checkbox" className="form-check-input" id="it" />
                  <label className="form-check-label" htmlFor="it">Information Technology (248)</label>
                </li>
                <li className="form-check">
                  <input type="checkbox" className="form-check-input" id="business" />
                  <label className="form-check-label" htmlFor="business">Business (206)</label>
                </li>
              </ul>
              <button className="btn btn-link p-0">Show 7 more</button>
            </div>

            <div className="filter-category mb-4">
              <h6 className="text-muted">Language</h6>
              <ul className="list-unstyled">
                <li className="form-check">
                  <input type="checkbox" className="form-check-input" id="english" />
                  <label className="form-check-label" htmlFor="english">English (1,584)</label>
                </li>
                <li className="form-check">
                  <input type="checkbox" className="form-check-input" id="spanish" />
                  <label className="form-check-label" htmlFor="spanish">Spanish (1,044)</label>
                </li>
                <li className="form-check">
                  <input type="checkbox" className="form-check-input" id="french" />
                  <label className="form-check-label" htmlFor="french">French (1,003)</label>
                </li>
                <li className="form-check">
                  <input type="checkbox" className="form-check-input" id="portuguese" />
                  <label className="form-check-label" htmlFor="portuguese">Portuguese (999)</label>
                </li>
              </ul>
              <button className="btn btn-link p-0">Show 20 more</button>
            </div>

            <div className="filter-category mb-4">
              <h6 className="text-muted">Learning Product</h6>
              <ul className="list-unstyled">
                <li className="form-check">
                  <input type="checkbox" className="form-check-input" id="guided-projects" />
                  <label className="form-check-label" htmlFor="guided-projects">Guided Projects (272)</label>
                </li>
                <li className="form-check">
                  <input type="checkbox" className="form-check-input" id="courses" />
                  <label className="form-check-label" htmlFor="courses">Courses (1,219)</label>
                </li>
                <li className="form-check">
                  <input type="checkbox" className="form-check-input" id="projects" />
                  <label className="form-check-label" htmlFor="projects">Projects (43)</label>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Course Cards Section */}
        <div className="col-md-9">
          <h6 className="mb-4">Over 500 results for "machine learning"</h6>
          <div className="row">
            {/* Single Course Card */}
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card h-100">
                <img src="path-to-image" className="card-img-top" alt="course" />
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
            {/* Add more cards as needed */}
          </div>
        </div>
      </div>
    </div>
  );
}
