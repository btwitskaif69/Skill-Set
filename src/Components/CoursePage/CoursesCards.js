import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { courses } from './CourseData';

export default function CoursesCards({ selectedFilters }) {
    const [currentPage, setCurrentPage] = useState(1);
    const coursesPerPage = 30;

    // Filter courses based on selected filters
    const filteredCourses = courses.filter(course => {
        const subjectMatch = selectedFilters.subjects.length === 0 || selectedFilters.subjects.includes(course.subject);
        const languageMatch = selectedFilters.languages.length === 0 || selectedFilters.languages.includes(course.language);
        const productMatch = selectedFilters.learningProducts.length === 0 || selectedFilters.learningProducts.includes(course.product);
        const skillsMatch = selectedFilters.skills.length === 0 || selectedFilters.skills.some(skill => course.skills.includes(skill));
        const universitiesMatch = selectedFilters.universities.length === 0 || selectedFilters.universities.includes(course.universities);
        const durationsMatch = selectedFilters.durations.length === 0 || selectedFilters.durations.includes(course.duration);
        const ratingsMatch = selectedFilters.ratings.length === 0 || selectedFilters.ratings.includes(course.rating);

        return subjectMatch && languageMatch && productMatch && skillsMatch && universitiesMatch && durationsMatch && ratingsMatch;
    });

    // Get current courses to display
    const indexOfLastCourse = currentPage * coursesPerPage;
    const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
    const currentCourses = filteredCourses.slice(indexOfFirstCourse, indexOfLastCourse);

    // Handle page change
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    // Rendering the course cards
    return (
        <div className="container">
            <p className="mb-4 fs-5 fw-semibold" style={{ color: 'Black' }}>
                Explore our most popular programs, get job-ready for an in-demand career.
            </p>
            <div className="row g-4">
                {currentCourses.length > 0 ? (
                    currentCourses.map(course => (
                        <div key={course.id} className="col-lg-4 col-md-6 col-sm-12">
                            <Link to={`/courses/${course.id}`} className="text-decoration-none">
                                <div className="card h-100 fade-in"
                                    style={{
                                        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                        padding: '7px',
                                        borderRadius: '7px',
                                        height: '100%'
                                    }}>
                                    <img 
                                        src={course.imgSrc} 
                                        className="card-img-top" 
                                        alt={course.title || 'Course Image'} 
                                        style={{
                                            height: '200px',
                                            width: '100%',
                                            objectFit: 'cover',
                                            borderRadius: '7px'
                                        }}/>
                                    <div className="card-body d-flex flex-column">
                                        <div className="course-logos mb-3" style={{ display: 'flex', marginBottom: '8px', justifyContent: 'left' }}>
                                            {course.logo && (
                                                <img 
                                                    src={course.logo} 
                                                    alt={`${course.title} Logo`} 
                                                />
                                            )}
                                        </div>
                                        <h5 className="card-title mb-0"
                                            style={{ color: 'Black', minHeight: '30px', fontSize: '16px', fontWeight: '600' }}>{course.title}</h5>
                                        <p className="card-text-skills" style={{ color: '#636363', fontSize: '0.8rem' }}>
                                            <b style={{ color: 'black', fontWeight: '600' }}>Skills you'll gain:</b> {course.skills}
                                        </p>
                                        <div className="mt-auto">
                                            <p className="review-rating mb-0 bi bi-award" style={{ color: '#210BE3', fontSize: '0.7rem' }}>
                                                &nbsp;Advance your degree journey
                                            </p>
                                            <p className="card-text mb-0" style={{ fontSize: '0.7rem' }}>
                                                <i className="bi bi-star-fill" style={{ color: '#f59e0b'}}></i>&nbsp;
                                                <b>{course.rating}</b> {course.reviews}
                                            </p>
                                            <p className="card-text mb-0" style={{ color: '#636363', fontSize: '0.7rem' }}>
                                                Beginner · Career Certificate · {course.duration}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))
                ) : (
                    <p>No courses found matching your filters.</p>
                )}
            </div>

            {/* Pagination */}
            <nav aria-label="Page navigation example" className="mt-4">
    <ul className="pagination">
        <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
            <button 
              className="page-link" 
              onClick={() => {
                  if (currentPage > 1) handlePageChange(currentPage - 1);
              }}>
              Previous
            </button>
        </li>
        {[...Array(Math.ceil(filteredCourses.length / coursesPerPage)).keys()].map(number => (
            <li key={number + 1} className={`page-item ${currentPage === number + 1 ? 'active' : ''}`}>
                <button 
                  className="page-link" 
                  onClick={() => {
                      handlePageChange(number + 1);
                  }}>
                  {number + 1}
                </button>
            </li>
        ))}
        <li className={`page-item ${currentPage === Math.ceil(filteredCourses.length / coursesPerPage) ? 'disabled' : ''}`}>
            <button 
              className="page-link" 
              onClick={() => {
                  if (currentPage < Math.ceil(filteredCourses.length / coursesPerPage)) {
                      handlePageChange(currentPage + 1);
                  }
              }}>
              Next
            </button>
        </li>
    </ul>
</nav>

            {/* Inline styling for card effects */}
            <style>{`
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                .card:hover {
                    transform: scale(1.05);
                    box-shadow: 0 7px 14px rgba(0, 0, 0, 0.2);
                }
                .course-logos img {
                    height: 24px; /* Slightly increased logo height */
                    width: auto;
                    margin-right: 8px;
                }
                .fade-in {
                    animation: fadeIn 0.5s ease-out;
                }
                @media (max-width: 576px) {
                    .course-logos img {
                        height: 20px; /* Smaller logos for small screens */
                    }
                }
            `}</style>
        </div>
    );
}
