import React, { useState, useEffect } from 'react';

export default function Filter({ onFilterChange }) {
  const [isVisible, setIsVisible] = useState(true);

  const filters = {
    subjects: [
      "Data Science", "Computer Science", "Cloud Computing", "Web Development", "Artificial Intelligence",
      "Machine Learning", "Data Engineering", "Quantum Computing", "Business Analytics", "Cybersecurity",
      "UX Design", "Blockchain", "AR/VR Development", "Financial Engineering", "Deep Learning",
      "Data Analysis", "Fintech", "Mobile Development", "DevOps", "AI Ethics", "Leadership",
      "Cloud Solutions", "Information Technology", "Robotics", "Automation"
    ],
    skills: [
      "Data Analysis", "Google Analytics", "Data Visualization", "Python", "Machine Learning",
      "Cloud Computing", "AWS", "Architecture Design", "HTML", "CSS", "JavaScript", "React",
      "Artificial Intelligence", "R Programming", "Cybersecurity", "Ethical Hacking",
      "Network Security", "UX Design", "Prototyping", "User Research", "Docker", "Kubernetes",
      "Data Engineering", "Robotics", "Neural Networks", "Quantum Computing", "Business Analytics",
      "Excel", "TensorFlow", "Deep Learning", "Advanced Data Analysis", "Fintech", "Cryptocurrency",
      "Blockchain", "Android Development", "Kotlin", "Java", "Node.js", "DevOps", "CI/CD",
      "AI Ethics", "Policy", "Leadership", "Management", "Strategy", "Financial Analysis", "Data Mining"
    ],
    languages: ["English", "Hindi", "Spanish", "French", "German", "Chinese"],
    educator: ["AWS", "Google", "Harvard University", "IBM", "MIT", "Stanford University"],
    durations: ["1-3 months", "3-6 months", "6-12 months"],
    ratings: ["4.5", "4.6", "4.7", "4.8", "4.9", "5.0"]
  };

  const [visibleCount, setVisibleCount] = useState({
    subjects: 3,
    skills: 3,
    languages: 3,
    educator: 3,
    durations: 3,
    ratings: 3
  });

  const incrementVisibleCount = (filterType) => {
    setVisibleCount((prev) => ({ ...prev, [filterType]: prev[filterType] + 3 }));
  };

  const getVisibleOptions = (filterType, filterOptions) => {
    return filterOptions.slice(0, visibleCount[filterType]);
  };

  useEffect(() => {
    document.body.classList.add('no-scroll');
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="modal-overlay d-flex justify-content-center align-items-center">
      <div className="filter-modal">
        <div className="p-4 bg-light border rounded shadow-sm position-relative modal-content">
          <button
            type="button"
            className="btn-close position-absolute top-0 end-0 mt-2 me-2"
            aria-label="Close"
            onClick={() => setIsVisible(false)} // Hide modal on close
          ></button>
          <h5 className="fs-5 fw-semibold mb-4">
            <i className="bi bi-funnel"></i>&nbsp;Filter by
          </h5>

          {/* Accordion */}
          <div className="accordion overflow-auto mb-4" id="filterAccordion">
            {Object.entries(filters).map(([filterType, filterOptions], index) => (
              <div className="accordion-item" key={index}>
                <h2 className="accordion-header" id={`heading-${index}`}>
                  <button
                    className={`accordion-button custom-color fw-semibold ${index === 0 ? '' : 'collapsed'}`}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapse-${index}`}
                    aria-expanded={index === 0 ? 'true' : 'false'}
                    aria-controls={`collapse-${index}`}
                    >
                    {filterType.charAt(0).toUpperCase() + filterType.slice(1)}
                  </button>
                </h2>
                <div
                  id={`collapse-${index}`}
                  className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
                  aria-labelledby={`heading-${index}`}
                  data-bs-parent="#filterAccordion"
                >
                  <div className="accordion-body">
                    {getVisibleOptions(filterType, filterOptions).map((option, idx) => (
                      <div key={idx} className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input small-checkbox"
                          id={`${filterType}-${idx}`}
                          name={filterType}
                          value={option}
                          onChange={() => onFilterChange(filterType, option)}
                        />
                        <label
                          htmlFor={`${filterType}-${idx}`}
                          className="form-check-label small-label ms-2"
                        >
                          {option}
                        </label>
                      </div>
                    ))}
                    {visibleCount[filterType] < filterOptions.length && (
                      <button
                        type="button"
                        className="btn btn-link p-0 mt-2"
                        onClick={() => incrementVisibleCount(filterType)}
                      >
                        Show More
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="d-flex gap-5 justify-content-center">
          <button type="button" className="btn custom-button-default">Apply</button>
          <button type="button" className="btn custom-button-default-white ">Clear All</button>
          </div>
        </div>
      </div>

      <style>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
          z-index: 999;
        }
        .filter-modal {
          width: 100%;
          height: 100%;
          max-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .modal-content {
          width: 90%;
          height: 90%;
          max-height: 90vh;
          overflow-y: auto;
        }
        .accordion-body {
          max-height: none;
          overflow-y: visible;
        }
        .small-checkbox {
          width: 16px;
          height: 16px;
        }
        .small-label {
          font-size: 0.9rem;
        }
        .no-scroll {
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}
