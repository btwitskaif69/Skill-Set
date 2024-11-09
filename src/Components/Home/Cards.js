import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Cards() {
    const [courses, setCourses] = useState([]);
    const [showAdditionalCourses, setShowAdditionalCourses] = useState(false);

    const Educator = {
        Aws: '/Assets/Educator/Aws.svg',
        Duke_University: '/Assets/Educator/Duke_University.svg',
        Google: '/Assets/Educator/Google.svg',
        IBM: '/Assets/Educator/IBM.svg',
        Meta: '/Assets/Educator/Meta.svg',
        Stanford_University: '/Assets/Educator/Stanford_University.svg',
        University_of_Cambridge: '/Assets/Educator/University_of_Cambridge.svg',
        University_of_Michigan: '/Assets/Educator/University_of_Michigan.svg',
        University_of_Oxford: '/Assets/Educator/University_of_Oxford.svg',
        University_of_Pennsylvania: '/Assets/Educator/University_of_Pennsylvania.svg',
    };

    useEffect(() => {
        // Fetch data from the API
        fetch(`${process.env.REACT_APP_BACKEND_URL}/api/courses`)
            .then(response => response.json())
            .then(data => setCourses(data))
            .catch(error => console.error('Error fetching courses:', error));
    }, []);

    const mainCourses = courses.slice(0, 4);
    const additionalCourses = courses.slice(4);

    const toggleAdditionalCourses = () => {
        setShowAdditionalCourses(!showAdditionalCourses);
    };

    return (
        <div>
            {/* Course Cards */}
            <div className="container my-5 p-3">
                <p className="mb-1 fs-5 fw-semibold" style={{ color: '#210BE3' }}>Professional Specializations and Certification Courses</p>
                <h1 className="mb-1 display-4 fw-normal" style={{ color: 'Black' }}>Most Popular Certificates</h1>
                <p className="mb-4 fs-5" style={{ color: 'Black' }}>Explore our most popular programs, get job-ready for an in-demand career.</p>
                <div className="row">
                    {mainCourses.map(course => (
                        <div key={course.id} className="col-md-3 col-sm-6 mb-4">
                            <Link to={`/courses/${course.id}`} className="text-decoration-none">
                                <div className="card">
                                    <img src={course.imgSrc} className="card-img-top" alt={course.title} />
                                    <div className="card-body d-flex flex-column">
                                        <div className="course-logos">
                                            {course.logo && <img src={Educator[course.logo]} alt="Course Logo" />}
                                        </div>
                                        <h5 className="card-title" style={{ color: 'Black' }}>{course.title}</h5>
                                        <div className="mt-auto">
                                            <p className="card-text mb-0 bi bi-award" style={{ color: '#210BE3' }}>&nbsp;Advance in Your Degree Program</p>
                                            <p className="card-text mb-0" style={{ color: '#636363' }}>Professional Certificate</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>

                {/* Additional Courses */}
                <div className={`row mt-4 ${showAdditionalCourses ? 'fade-in' : 'd-none'}`}>
                    {additionalCourses.map(course => (
                        <div key={course.id} className="col-md-3 col-sm-6 mb-3">
                            <Link to={`/courses/${course.id}`} className="text-decoration-none">
                                <div className="card">
                                    <img src={course.imgSrc} className="card-img-top" alt={course.title} />
                                    <div className="card-body d-flex flex-column">
                                        <div className="course-logos">
                                            {course.logo && <img src={Educator[course.logo]} alt="Course Logo" />}
                                        </div>
                                        <h5 className="card-title" style={{ color: 'Black' }}>{course.title}</h5>
                                        <div className="mt-auto">
                                            <p className="card-text mb-0 bi bi-award" style={{ color: '#210BE3' }}>&nbsp;Advance in Your Degree Program</p>
                                            <p className="card-text mb-0" style={{ color: '#636363' }}>Professional Certificate</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>

                {/* Button Container */}
                <div className="button-container">
                    <button type="button" className="btn custom-button-default me-2" onClick={toggleAdditionalCourses}>
                        {showAdditionalCourses ? 'Show Less' : 'Show More'}
                    </button>
                    <Link to="/courses">
                        <button type="button" className="btn custom-button-default-white" onClick={() => window.scrollTo(0, 0)}>View all</button>
                    </Link>
                </div>
            </div>

            {/* Styling */}
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
                .card {
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                    padding: 7px;
                    border-radius: 7px;
                    height: 100%; /* Ensure cards take full height */
                }
                .card:hover {
                    transform: scale(1.05);
                    box-shadow: 0 7px 14px rgba(0, 0, 0, 0.2);
                }
                .card-img-top {
                    height: 60%; /* Adjust height */
                    border-radius: 10px;
                    object-fit: cover;
                }
                .course-logos {
                    display: flex;
                    margin-bottom: 8px;
                    justify-content: left;
                }
                .course-logos img {
                    height: 24px;
                    width: auto;
                    margin-right: 8px;
                }
                .card-title {
                    font-size: 16px;
                    font-weight: 600;
                }
                .card-text {
                    font-size: 0.8rem;
                }
                .button-container {
                    display: flex;
                    justify-content: flex-start;
                    margin-top: 20px;
                }
                .fade-in {
                    animation: fadeIn 0.5s ease-out;
                }
                @media (max-width: 576px) {
                    .course-logos img {
                        height: 20px;
                    }
                    .container h3 {
                        font-size: 30px;
                    }
                    .card {
                        margin-bottom: 15px;
                    }
                }
            `}</style>
        </div>
    );
}
