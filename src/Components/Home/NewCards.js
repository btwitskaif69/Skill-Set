import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function NewCards() {
    const [showAdditionalCourses, setShowAdditionalCourses] = useState(false);
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/courses`);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const result = await response.json();
                if (result.status === 'ok') {
                    setCourses(result.data.slice(8, 16)); // Limit to 8 courses in total
                } else {
                    throw new Error(result.error || 'Failed to fetch courses');
                }
            } catch (error) {
                console.error('Error fetching courses:', error);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchCourses();
    }, []);

    const CourseImage = {
        img1: "/Assets/Course/course9.jpg",
        img2: "/Assets/Course/course10.jpg",
        img3: "/Assets/Course/course11.jpg",
        img4: "/Assets/Course/course12.jpg",
        img5: "/Assets/Course/course13.jpg",
        img6: "/Assets/Course/course14.jpg",
        img7: "/Assets/Course/course15.jpg",
        img8: "/Assets/Course/course16.jpg",
    };

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

    const getEducatorLogo = (educator) => {
        return Educator[educator] || '/Assets/Educator/Default.svg'; // Fallback to a default logo if not found
    };

    const newmainCourses = courses.slice(0, 4);
    const additionalCourses = courses.slice(4);

    const toggleAdditionalCourses = () => {
        setShowAdditionalCourses(!showAdditionalCourses);
    };

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div className="main-container">
            {/* Course Cards */}
            <div className="container my-5">
                <p className="mb-1 fs-5 fw-semibold" style={{ color: 'blue' }}>Courses and Professional Certificates</p>
                <h1 className="mb-1 display-4 fw-normal">New Courses for Critical Skills</h1>
                <p className="mb-4 fs-5">Discover our latest courses, designed to build critical skills.</p>
                <div className="row">
                    {loading ? (
                        // Skeleton Loading Placeholder
                        Array.from({ length: 4 }).map((_, index) => (
                            <div key={index} className="col-md-3 col-sm-6 mb-4">
                                <div className="card h-100" aria-hidden="true">
                                    <div className="card-img-top placeholder" style={{ height: "200px", width: "100%", borderRadius: "7px", backgroundColor: "#e9ecef" }}></div>
                                    <div className="card-body d-flex flex-column">
                                        <div className="course-logos mb-3" style={{ display: "flex", marginBottom: "8px", justifyContent: "left" }}>
                                            <div className="placeholder" style={{ height: "24px", width: "24px", backgroundColor: "#e9ecef" }}></div>
                                        </div>
                                        <h5 className="card-title placeholder-glow">
                                            <span className="placeholder col-6"></span>
                                        </h5>
                                        <p className="card-text-skills placeholder-glow">
                                            <span className="placeholder col-7"></span>
                                            <span className="placeholder col-4"></span>
                                            <span className="placeholder col-4"></span>
                                            <span className="placeholder col-6"></span>
                                            <span className="placeholder col-8"></span>
                                        </p>
                                        <div className="mt-auto">
                                            <p className="card-text mb-0 placeholder-glow">
                                                <span className="placeholder col-4"></span>
                                            </p>
                                            <p className="card-text mb-0 placeholder-glow">
                                                <span className="placeholder col-5"></span>
                                            </p>
                                            <p className="card-text mb-0 placeholder-glow">
                                                <span className="placeholder col-6"></span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        // Actual Course Cards
                        newmainCourses.map((course, index) => (
                            <div key={course.id} className="col-md-3 col-sm-6 mb-4">
                                <Link to={`/courses/enroll/${course._id}`} className="text-decoration-none">
                                    <div className="card h-100 fade-in" style={{ transition: "transform 0.3s ease, box-shadow 0.3s ease", padding: "7px", borderRadius: "7px", height: "100%" }}>
                                        <img src={getCourseImage(index)} className="card-img-top" alt={course.title} style={{ height: "200px", width: "100%", objectFit: "cover", borderRadius: "7px", }} />
                                        <div className="card-body d-flex flex-column">
                                            <div className="course-logos mb-3" style={{ display: "flex", marginBottom: "8px", justifyContent: "left" }}>
                                                <img src={getEducatorLogo(course.educator)} alt="Educator Logo" />
                                            </div>
                                            <h5 className="card-title" style={{ color: 'Black' }}>{course.title}</h5>
                                            <p className="card-text-skills" style={{ color: "#636363", fontSize: "0.8rem" }}>
                                                <b style={{ color: "black", fontWeight: "600" }}>Skills you'll gain:</b> {course.skills}
                                            </p>
                                            <div className="mt-auto">
                                                <p className="card-text mb-0" style={{ fontSize: "0.7rem" }}>
                                                    <i className="bi bi-star-fill" style={{ color: "#f59e0b" }}></i>&nbsp;<b>{course.rating}</b> {course.reviews}
                                                </p>
                                                <p className="card-text mb-0 bi bi-award" style={{ color: '#210BE3' }}>&nbsp;{course.advancement}</p>
                                                <p className="card-text mb-0" style={{ color: '#636363' }}>{course.proCert}</p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))
                    )}
                </div>

                {/* Additional Courses */}
                {showAdditionalCourses && (
                    <div className="row mt-4 fade-in">
                        {additionalCourses.map((course, index) => (
                            <div key={course.id} className="col-md-3 col-sm-6 mb-4">
                                <Link to={`/courses/enroll/${course._id}`} className="text-decoration-none">
                                    <div className="card h-100 fade-in" style={{ transition: "transform 0.3s ease, box-shadow 0.3s ease", padding: "7px", borderRadius: "7px", height: "100%" }}>
                                        <img src={getCourseImage(index + 4)} className="card-img-top" alt={course.title} style={{ height: "200px", width: "100%", objectFit: "cover", borderRadius: "7px", }} />
                                        <div className="card-body d-flex flex-column">
                                            <div className="course-logos mb-3" style={{ display: "flex", marginBottom: "8px", justifyContent: "left" }}>
                                                <img src={getEducatorLogo(course.educator)} alt="Educator Logo" />
                                            </div>
                                            <h5 className="card-title" style={{ color: 'Black' }}>{course.title}</h5>
                                            <p className="card-text-skills" style={{ color: "#636363", fontSize: "0.8rem" }}>
                                                <b style={{ color: "black", fontWeight: "600" }}>Skills you'll gain:</b> {course.skills}
                                            </p>
                                            <div className="mt-auto">
                                                <p className="card-text mb-0" style={{ fontSize: "0.7rem" }}>
                                                    <i className="bi bi-star-fill" style={{ color: "#f59e0b" }}></i>&nbsp;<b>{course.rating}</b> {course.reviews}
                                                </p>
                                                <p className="card-text mb-0 bi bi-award" style={{ color: '#210BE3' }}>&nbsp;{course.advancement}</p>
                                                <p className="card-text mb-0" style={{ color: '#636363' }}>{course.proCert}</p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                )}

                {/* Button Container */}
                <div className="button-container">
                    <button type="button" className="btn custom-button-default-transparent me-2" onClick={toggleAdditionalCourses}>
                        {showAdditionalCourses ? 'Show Less' : 'Show More'}
                    </button>
                    <Link to="/courses"><button type="button" className="btn custom-button-default-white-transparent"
                        onClick={() => window.scrollTo(0, 0)}>View all</button></Link>
                </div>
            </div>

            <style>{`
                .main-container {
                    background-image: linear-gradient(120deg, #89f7fe 0%, #66a6ff 100%);
                    padding: 30px;
                    width: 100%;
                }
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
                    height: 100%;
                }
                .card:hover {
                    transform: scale(1.05);
                    box-shadow: 0 7px 14px rgba(0, 0, 0, 0.2);
                }
                .card-img-top {
                    height: 60%;
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