import React, { useState} from 'react';
import { Link } from 'react-router-dom';

export default function Cards() {
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

    const courses = [
        {
            id: 1,
            title: "Google Data Analytics",
            imgSrc: "/Assets/Course/course1.jpg",
            logo: Educator.Google,
            skills: "Data Analysis, Google Analytics, Data Visualization"
        },
        {
            id: 2,
            title: "IBM Data Science",
            imgSrc: "/Assets/Course/course2.jpg",
            logo: Educator.IBM,
            skills: "Python, Machine Learning, Data Visualization"
        },
        {
            id: 3,
            title: "AWS Solutions Architect",
            imgSrc: "/Assets/Course/course3.jpg",
            logo: Educator.Aws,
            skills: "Cloud Computing, AWS, Architecture Design"
        },
        {
            id: 4,
            title: "Meta Front-End Development",
            imgSrc: "/Assets/Course/course4.jpg",
            logo: Educator.Meta,
            skills: "HTML, CSS, JavaScript, React"
        },
        {
            id: 5,
            title: "AI Fundamentals",
            imgSrc: "/Assets/Course/course5.jpg",
            logo: Educator.Duke_University,
            skills: "Artificial Intelligence, Python, Machine Learning"
        },
        {
            id: 6,
            title: "Stanford Machine Learning",
            imgSrc: "/Assets/Course/course6.jpg",
            logo: Educator.Stanford_University,
            skills: "Machine Learning, Python, Data Analysis"
        },
        {
            id: 7,
            title: "Cambridge Data Science",
            imgSrc: "/Assets/Course/course7.jpg",
            logo: Educator.University_of_Cambridge,
            skills: "Data Science, Statistics, R Programming"
        },
        {
            id: 8,
            title: "Oxford Cyber Security",
            imgSrc: "/Assets/Course/course8.jpg",
            logo: Educator.University_of_Oxford,
            skills: "Cybersecurity, Ethical Hacking, Network Security"
        },
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
             <p className="mb-1 fs-5 fw-semibold" style={{color: '#210BE3'}}>Professional Specializations and Certification Courses</p>
                <h1 className="mb-1 display-4 fw-normal" style={{color: 'Black'}}>Most Popular Certificates</h1>
                <p className="mb-4 fs-5" style={{color: 'Black'}}>Explore our most popular programs, get job-ready for an in-demand career.</p>
                <div className="row">
                    {mainCourses.map(course => (
                        <div key={course.id} className="col-md-3 col-sm-6 mb-3">
                            <Link to={`/courses/${course.id}`} className="text-decoration-none">
                                <div className="card">
                                    <img src={course.imgSrc} className="card-img-top" alt={course.title} />
                                    <div className="card-body d-flex flex-column">
                                        <div className="course-logos">
                                            {course.logo && <img src={course.logo} alt="Course Logo" />}
                                        </div>
                                        <h5 className="card-title" style={{color: 'Black'}}>{course.title}</h5>
                                        <div className="mt-auto">
                                            <p className="card-text mb-0 bi bi-award" style={{color: '#210BE3'}}>&nbsp;Advance in Your Degree Program</p>
                                            <p className="card-text mb-0" style={{color: '#636363'}}>Professional Certificate</p>
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
                                            {course.logo && <img src={course.logo} alt="Course Logo" />}
                                        </div>
                                        <h5 className="card-title" style={{color: 'Black'}}>{course.title}</h5>
                                        <div className="mt-auto">
                                            <p className="card-text mb-0 bi bi-award" style={{color: '#210BE3'}}>&nbsp;Advance in Your Degree Program</p>
                                            <p className="card-text mb-0" style={{color: '#636363'}}>Professional Certificate</p>
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
                    display: flex;Educator;
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
