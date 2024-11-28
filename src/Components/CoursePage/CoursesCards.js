import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Filter from './Filter'; // Import Filter component

export default function CoursesCards({ selectedFilters }) {
    const [currentPage, setCurrentPage] = useState(1);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [showFilter, setShowFilter] = useState(false); // State to toggle Filter component
    const [courses, setCourses] = useState([]); // State for courses
    const [loading, setLoading] = useState(true); // State for loading status
    const [error, setError] = useState(null); // State for errors

    const coursesPerPage = 30;

    // Fetch courses from API
    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/courses`);
                const data = await response.json();
        
                // Check if 'data' contains an array of courses
                if (Array.isArray(data.data)) {
                    setCourses(data.data); // Use data.data to access the courses array
                } else {
                    setCourses([]);
                    setError('Invalid response format');
                }
                setLoading(false);
            } catch (error) {
                setError('Failed to fetch courses');
                setLoading(false);
            }
        };
        
        fetchCourses();
    }, []);

    const filteredCourses = courses.filter(course => {
    
        const subjectMatch = selectedFilters.subjects.length === 0 || selectedFilters.subjects.includes(course.subject);
        const languageMatch = selectedFilters.languages.length === 0 || selectedFilters.languages.includes(course.language);
        const productMatch = selectedFilters.learningProducts.length === 0 || selectedFilters.learningProducts.includes(course.product);
        const skillsMatch = selectedFilters.skills.length === 0 || selectedFilters.skills.some(skill => course.skills.includes(skill));
        const educatorMatch = selectedFilters.Educator.length === 0 || selectedFilters.Educator.includes(course.Educator);
        const durationsMatch = selectedFilters.durations.length === 0 || selectedFilters.durations.includes(course.duration);
        const ratingsMatch = selectedFilters.ratings.length === 0 || selectedFilters.ratings.includes(course.rating);

        return subjectMatch && languageMatch && productMatch && skillsMatch && educatorMatch && durationsMatch && ratingsMatch;
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

    const CourseImage = {
        img1: "/Assets/Course/course1.jpg",
        img2: "/Assets/Course/course2.jpg",
        img3: "/Assets/Course/course3.jpg",
        img4: "/Assets/Course/course4.jpg",
        img5: "/Assets/Course/course5.jpg",
        img6: "/Assets/Course/course6.jpg",
        img7: "/Assets/Course/course7.jpg",
        img8: "/Assets/Course/course8.jpg",
        img9: "/Assets/Course/course9.jpg",
        img10: "/Assets/Course/course10.jpg",
        img11: "/Assets/Course/course11.jpg",
        img12: "/Assets/Course/course12.jpg",
        img13: "/Assets/Course/course13.jpg",
        img14: "/Assets/Course/course14.jpg",
        img15: "/Assets/Course/course15.jpg",
        img16: "/Assets/Course/course16.jpg",
        img17: "/Assets/Course/course17.jpg",
        img18: "/Assets/Course/course18.jpg",
        img19: "/Assets/Course/course19.jpg",
        img20: "/Assets/Course/course20.jpg",
        img21: "/Assets/Course/course21.jpg",
        img22: "/Assets/Course/course22.jpg",
        img23: "/Assets/Course/course23.jpg",
        img24: "/Assets/Course/course24.jpg",
        img25: "/Assets/Course/course25.jpg",
        img26: "/Assets/Course/course26.jpg",
        img27: "/Assets/Course/course27.jpg",
        img28: "/Assets/Course/course28.jpg",
        img29: "/Assets/Course/course29.jpg",
        img30: "/Assets/Course/course30.jpg",
    }
    
    const getCourseImage = (index) => {
        const imageKeys = Object.keys(CourseImage);
        return CourseImage[imageKeys[index % imageKeys.length]] || '/Assets/Course/default.jpg';
    };
    const Educator = {
        Aws: '/Assets/Educator/Aws.svg',
        Duke_University: '/Assets/Educator/Duke_University.svg',
        Google: '/Assets/Educator/Google.svg',
        Harvard_University: '/Assets/Educator/Harvard_University.svg',
        IBM: '/Assets/Educator/IBM.svg',
        Meta: '/Assets/Educator/Meta.svg',
        MIT: '/Assets/Educator/Mit.svg',
        Stanford_University: '/Assets/Educator/Stanford_University.svg',
        University_of_Cambridge: '/Assets/Educator/University_of_Cambridge.svg',
        University_of_Michigan: '/Assets/Educator/University_of_Michigan.svg',
        University_of_Oxford: '/Assets/Educator/University_of_Oxford.svg',
        University_of_Pennsylvania: '/Assets/Educator/University_of_Pennsylvania.svg',
      };

        // Helper function to get the educator logo
        const getEducatorLogo = (educator) => {
            return Educator[educator] || '/Assets/Educator/Default.svg'; // Fallback to a default logo if not found
        };

    return (
        <div className="container">
            <p className="fs-5 fw-semibold mb-2" style={{ color: "Black" }}>
                Explore our most popular programs, get job-ready for an in-demand career.
            </p>
            {/* Conditionally render the Filter button on screens <= 1023px */}
            {screenWidth <= 1023 && (
                <div className="">
                    <button className="btn custom-button-default-white btn-lg mb-4" onClick={handleFilterClick}><i className="bi bi-sliders"></i>
                    &nbsp;Filters
                    </button>
                </div>
            )}

            {/* Conditionally render Filter component */}
            {showFilter && <Filter />}

            {loading && <p>Loading courses...</p>}
            {error && <p>{error}</p>}

            <div className="row g-4">
                {currentCourses.length > 0 ? (
                    currentCourses.map((course, index) => (
                        <div key={course.id} className="col-lg-4 col-md-6 col-sm-12">
                            <Link to={`/enroll/${course.id}`} className="text-decoration-none">
                                <div className="card h-100 fade-in" style={{ transition: "transform 0.3s ease, box-shadow 0.3s ease", padding: "7px", borderRadius: "7px", height: "100%" }}>
                                <img src={getCourseImage(index)} className="card-img-top" alt={course.title} style={{ height: "200px", width: "100%", objectFit: "cover", borderRadius: "7px", }} />
                                    <div className="card-body d-flex flex-column">
                                        <div className="course-logos mb-3" style={{ display: "flex", marginBottom: "8px", justifyContent: "left" }}>
                                        <img src={getEducatorLogo(course.educator)} alt="Educator Logo"/>
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
                                            {course.difficulty} · Career Certificate · {course.duration}
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
                        <button className="page-link" aria-label="Previous page" onClick={() => handlePageChange(currentPage - 1)}>Previous</button>

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
                    color: #fff;
                    background-color: #210BE3;
                }
            `}</style>
        </div>
    );
}
