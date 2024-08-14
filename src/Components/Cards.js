import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Cards() {
    const [showAdditionalCourses, setShowAdditionalCourses] = useState(false);

    const logos = {
        Aws: '/Assets/Logos/Aws.svg',
        Duke_University: '/Assets/Logos/Duke_University.svg',
        Google: '/Assets/Logos/Google.svg',
        IBM: '/Assets/Logos/IBM.svg',
        Meta: '/Assets/Logos/Meta.svg',
        Stanford_University: '/Assets/Logos/Stanford_University.svg',
        University_of_Cambridge: '/Assets/Logos/University_of_Cambridge.svg',
        University_of_Michigan: '/Assets/Logos/University_of_Michigan.svg',
        University_of_Oxford: '/Assets/Logos/University_of_Oxford.svg',
        University_of_Pennsylvania: '/Assets/Logos/University_of_Pennsylvania.svg',
    };

    const courses = [
        { id: 1, title: "Google Data Analytics", imgSrc: "/Assets/Course/course1.jpg", logo: logos.Aws },
        { id: 2, title: "IBM Data Science", imgSrc: "/Assets/Course/course2.jpg", logo: logos.Google },
        { id: 3, title: "AWS Solutions Architect", imgSrc: "/Assets/Course/course3.jpg", logo: logos.IBM },
        { id: 4, title: "Meta Front-End Dev", imgSrc: "/Assets/Course/course4.jpg", logo: logos.Meta },
        { id: 5, title: "Duke University AI Fundamentals", imgSrc: "/Assets/Course/course5.jpg", logo: logos.Duke_University },
        { id: 6, title: "Stanford Machine Learning", imgSrc: "/Assets/Course/course6.jpg", logo: logos.Stanford_University },
        { id: 7, title: "Cambridge Data Science", imgSrc: "/Assets/Course/course7.jpg", logo: logos.University_of_Cambridge },
        { id: 8, title: "Oxford Cyber Security", imgSrc: "/Assets/Course/course8.jpg", logo: logos.University_of_Oxford },
    ];

    const mainCourses = courses.slice(0, 4);
    const additionalCourses = courses.slice(4);

    const toggleAdditionalCourses = () => {
        setShowAdditionalCourses(!showAdditionalCourses);
    };

    return (
        <div>
             {/* Course Cards */}
             <div className="container my-5">
                <h5 className="mb-1">Degree Courses and Professional Certifications</h5>
                <h3 className="mb-1">Newest Programs</h3>
                <h5 className="mb-4">Discover our newest programs, designed to deliver key, in-demand skills.</h5>
                <div className="row">
                    {mainCourses.map(course => (
                        <div key={course.id} className="col-md-3 col-sm-6 mb-4">
                            <Link to={`/courses/${course.id}`} className="text-decoration-none">
                                <div className="card">
                                    <img src={course.imgSrc} className="card-img-top" alt={course.title} />
                                    <div className="card-body d-flex flex-column">
                                        <div className="course-logos">
                                            {course.logo && <img src={course.logo} alt="Course Logo" />}
                                        </div>
                                        <h5 className="card-title">{course.title}</h5>
                                        <div className="mt-auto">
                                            <p className="card-text mb-0 text-primary">Advance in Your Degree Program</p>
                                            <p className="card-text mb-0 text-muted">Professional Certificate</p>
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
                        <div key={course.id} className="col-md-3 col-sm-6 mb-4">
                            <Link to={`/courses/${course.id}`} className="text-decoration-none">
                                <div className="card">
                                    <img src={course.imgSrc} className="card-img-top" alt={course.title} />
                                    <div className="card-body d-flex flex-column">
                                        <div className="course-logos">
                                            {course.logo && <img src={course.logo} alt="Course Logo" />}
                                        </div>
                                        <h5 className="card-title">{course.title}</h5>
                                        <div className="mt-auto">
                                            <p className="card-text mb-0 text-primary">Advance in Your Degree Program</p>
                                            <p className="card-text mb-0 text-muted">Professional Certificate</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>

                {/* Button Container */}
                <div className="button-container">
                    <button type="button" className="btn btn-primary me-2" onClick={toggleAdditionalCourses}>
                        {showAdditionalCourses ? 'Show Less' : 'Show More'}
                    </button>
                    <button type="button" className="btn btn-outline-primary">View all</button>
                </div>
            </div>

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
                }
                .course-logos {
                    display: flex;
                    align-items: center;
                    margin-bottom: 8px;
                    justify-content: left;
                }
                .course-logos img {
                    height: 24px; /* Slightly increased logo height */
                    width: auto;
                    margin-right: 8px;
                }
                .card-title {
                    font-size: 16px; /* Adjusted to be consistent with image */
                    font-weight: 600;
                }
                .card-text {
                    font-size: 0.8rem; /* Slightly larger for readability */
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
                        height: 20px; /* Smaller logos for small screens */
                    }
                    .container h3 {
                        font-size: 30px; /* Decrease font size */
                    }
                    .card {
                        margin-bottom: 15px;
                    }
                }
            `}</style>
        </div>
    );
}
