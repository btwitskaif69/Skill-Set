import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Cards() {
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
                    setCourses(result.data.slice(0, 8)); // Limit to 8 courses in total
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

    if (loading) {
        return <p className='text-center mt-4'>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }
    const CourseImage = {
        img1: "/Assets/Course/course1.jpg",
        img2: "/Assets/Course/course2.jpg",
        img3: "/Assets/Course/course3.jpg",
        img4: "/Assets/Course/course4.jpg",
        img5: "/Assets/Course/course5.jpg",
        img6: "/Assets/Course/course6.jpg",
        img7: "/Assets/Course/course7.jpg",
        img8: "/Assets/Course/course8.jpg",
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
        
    // Show only the first 4 courses initially and the next 4 on "Show More"
    const mainCourses = courses.slice(0, 4);
    const additionalCourses = courses.slice(4, 8);

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
                {mainCourses.map((course, index) => (
                        <div key={course.id} className="col-md-3 col-sm-6 mb-4">
                             <Link to={`/enroll/${course._id}`} className="text-decoration-none">
                                <div className="card h-100 fade-in" style={{ transition: "transform 0.3s ease, box-shadow 0.3s ease", padding: "7px", borderRadius: "7px", height: "100%"}}>
                                    <img src={getCourseImage(index)} className="card-img-top" alt={course.title} style={{ height: "200px", width: "100%", objectFit: "cover", borderRadius: "7px", }} />
                                    <div className="card-body d-flex flex-column">
                                    <div className="course-logos mb-3" style={{ display: "flex", marginBottom: "8px", justifyContent: "left" }}>
                                            <img src={getEducatorLogo(course.educator)} alt="Educator Logo"/>
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

                {/* Additional Courses */}
                {showAdditionalCourses && (
                    <div className="row mt-4 fade-in">
                        {additionalCourses.map((course, index) => (
                        <div key={course.id} className="col-md-3 col-sm-6 mb-4">
                             <Link to={`/enroll/${course._id}`} className="text-decoration-none">
                            <div className="card h-100 fade-in" style={{ transition: "transform 0.3s ease, box-shadow 0.3s ease", padding: "7px", borderRadius: "7px", height: "100%"}}>
                                    <img src={getCourseImage(index + 4 )} className="card-img-top" alt={course.title} style={{ height: "200px", width: "100%", objectFit: "cover", borderRadius: "7px", }} />
                                    <div className="card-body d-flex flex-column">
                                    <div className="course-logos mb-3" style={{ display: "flex", marginBottom: "8px", justifyContent: "left" }}>
                                            <img src={getEducatorLogo(course.educator)} alt="Educator Logo"/>
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
                    <button type="button" className="btn custom-button-default me-2" onClick={toggleAdditionalCourses}>
                        {showAdditionalCourses ? 'Show Less' : 'Show More'}
                    </button>
                    <Link to="/courses"><button type="button" className="btn custom-button-default-white"
                        onClick={() => window.scrollTo(0, 0)}>View all</button></Link>
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
