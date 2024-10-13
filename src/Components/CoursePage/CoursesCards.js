import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { courses } from './CourseData';
import Filter from './Filter'; // Import Filter component

export default function CoursesCards({ selectedFilters }) {
    const [currentPage, setCurrentPage] = useState(1);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [showFilter, setShowFilter] = useState(false); // State to toggle Filter component
    const coursesPerPage = 30;

    // Filter courses based on selected filters
    const filteredCourses = courses.filter(course => {
        const subjectMatch = selectedFilters.subjects.length === 0 || selectedFilters.subjects.includes(course.subject);
        const languageMatch = selectedFilters.languages.length === 0 || selectedFilters.languages.includes(course.language);
        const productMatch = selectedFilters.learningProducts.length === 0 || selectedFilters.learningProducts.includes(course.product);
        const skillsMatch = selectedFilters.skills.length === 0 || selectedFilters.skills.some(skill => course.skills.includes(skill));
        const EducatorMatch = selectedFilters.Educator.length === 0 || selectedFilters.Educator.includes(course.Educator);
        const durationsMatch = selectedFilters.durations.length === 0 || selectedFilters.durations.includes(course.duration);
        const ratingsMatch = selectedFilters.ratings.length === 0 || selectedFilters.ratings.includes(course.rating);

        return subjectMatch && languageMatch && productMatch && skillsMatch && EducatorMatch && durationsMatch && ratingsMatch;
    });

    // Handle page change
    const handlePageChange = (page) => {
        setCurrentPage(page);
        window.scrollTo(0, 0);
    };

    // Detect screen width changes
    useEffect(() => {
        const handleResize = () => setScreenWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Toggle Filter component display
    const handleFilterClick = () => {
        setShowFilter(prevState => !prevState);
    };

    // Get current courses to display
    const indexOfLastCourse = currentPage * coursesPerPage;
    const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
    const currentCourses = filteredCourses.slice(indexOfFirstCourse, indexOfLastCourse);

    return (
        <div className="container">
          <p className="fs-5 fw-semibold mb-2" style={{ color: "Black" }}>
                        Explore our most popular programs, get job-ready for an in-demand career.
                    </p>
            {/* Conditionally render the Filter button on screens <= 1023px */}
            {screenWidth <= 1023 && (
                <div className="">
                    <button className="btn custom-button-default-white btn-lg" onClick={handleFilterClick}><i class="bi bi-sliders"></i>
                    &nbsp;Filter
                    </button>
                </div>
            )}

            {/* Conditionally render Filter component */}
            {showFilter && <Filter />}
            

            <div className="row g-4">
                {currentCourses.length > 0 ? (
                    currentCourses.map((course) => (
                        <div key={course.id} className="col-lg-4 col-md-6 col-sm-12">
                            <Link to={`/enroll/${course.id}`} className="text-decoration-none">
                                <div className="card h-100 fade-in" style={{ transition: "transform 0.3s ease, box-shadow 0.3s ease", padding: "7px", borderRadius: "7px", height: "100%"}}>
                                    <img loading="lazy" src={course.imgSrc} className="card-img-top" alt={course.title || "Course Image"}
                                        style={{ height: "200px", width: "100%", objectFit: "cover", borderRadius: "7px", }}/>
                                    <div className="card-body d-flex flex-column">
                                        <div className="course-logos mb-3" style={{ display: "flex", marginBottom: "8px", justifyContent: "left" }}>
                                            {course.logo && (<img src={course.logo} alt={`${course.title} Logo`} />)}
                                        </div>
                                        <h5 className="card-title mb-0" style={{ color: "Black", minHeight: "30px", fontSize: "16px", fontWeight: "600" }}>
                                            {course.title}
                                        </h5>
                                        <p className="card-text-skills" style={{ color: "#636363", fontSize: "0.8rem" }}>
                                            <b style={{ color: "black", fontWeight: "600" }}>Skills you'll gain:</b> {course.skills}
                                        </p>
                                        <div className="mt-auto">
                                            <p className="review-rating mb-0 bi bi-award" style={{ color: "#210BE3", fontSize: "0.7rem" }}>
                                                &nbsp;Advance your degree journey
                                            </p>
                                            <p className="card-text mb-0" style={{ fontSize: "0.7rem" }}>
                                                <i className="bi bi-star-fill" style={{ color: "#f59e0b" }}></i>&nbsp;<b>{course.rating}</b> {course.reviews}
                                            </p>
                                            <p className="card-text mb-0" style={{ color: "#636363", fontSize: "0.7rem" }}>
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
                <div className="d-flex justify-content-center">
                    <ul className="pagination">
                        <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
                            <button className="page-link" onClick={() => handlePageChange(currentPage - 1)}>Previous</button>
                        </li>
                        {[...Array(Math.ceil(filteredCourses.length / coursesPerPage)).keys()].map((number) => (
                            <li key={number + 1} className={`page-item ${currentPage === number + 1 ? "active" : ""}`}>
                                <button className="page-link" onClick={() => handlePageChange(number + 1)}>{number + 1}</button>
                            </li>
                        ))}
                        <li className={`page-item ${currentPage === Math.ceil(filteredCourses.length / coursesPerPage) ? "disabled" : ""}`}>
                            <button className="page-link" onClick={() => handlePageChange(currentPage + 1)}>Next</button>
                        </li>
                    </ul>
                </div>
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
                    height: 24px;
                    width: auto;
                    margin-right: 8px;
                }
                .fade-in {
                    animation: fadeIn 0.5s ease-out;
                }
                .pagination {
                    border-radius: 0.5rem;
                    background-color: #f8f9fa;
                    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
                }
                .page-item .page-link {
                    color: #210BE3;
                    padding: 10px 15px;
                }
                .page-item.active .page-link {
                    background-color: #210BE3;
                    color: white;
                }
                .page-item.disabled .page-link {
                    color: #210BE3;
                }
                .page-item .page-link:hover {
                    background-color: #e2e6ea;
                    color: #210BE3;
                }
            `}</style>
        </div>
    );
}
