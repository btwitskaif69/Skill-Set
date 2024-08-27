import React, { useState} from 'react';
import { Link } from 'react-router-dom';

export default function Cards() {
    const [showAdditionalCourses, setShowAdditionalCourses] = useState(false);

    const University_Logos = {
        Aws: '/Assets/University_Logos/Aws.svg',
        Duke_University: '/Assets/University_Logos/Duke_University.svg',
        Google: '/Assets/University_Logos/Google.svg',
        IBM: '/Assets/University_Logos/IBM.svg',
        Meta: '/Assets/University_Logos/Meta.svg',
        Stanford_University: '/Assets/University_Logos/Stanford_University.svg',
        University_of_Cambridge: '/Assets/University_Logos/University_of_Cambridge.svg',
        University_of_Michigan: '/Assets/University_Logos/University_of_Michigan.svg',
        University_of_Oxford: '/Assets/University_Logos/University_of_Oxford.svg',
        University_of_Pennsylvania: '/Assets/University_Logos/University_of_Pennsylvania.svg',
    };

    const courses = [
        {
            id: 1,
            title: "Google Data Analytics",
            imgSrc: "/Assets/Course/course1.jpg",
            logo: University_Logos.Google,
            skills: "Data Analysis, Google Analytics, Data Visualization"
        },
        {
            id: 2,
            title: "IBM Data Science",
            imgSrc: "/Assets/Course/course2.jpg",
            logo: University_Logos.IBM,
            skills: "Python, Machine Learning, Data Visualization"
        },
        {
            id: 3,
            title: "AWS Solutions Architect",
            imgSrc: "/Assets/Course/course3.jpg",
            logo: University_Logos.Aws,
            skills: "Cloud Computing, AWS, Architecture Design"
        },
        {
            id: 4,
            title: "Meta Front-End Development",
            imgSrc: "/Assets/Course/course4.jpg",
            logo: University_Logos.Meta,
            skills: "HTML, CSS, JavaScript, React"
        },
        {
            id: 5,
            title: "AI Fundamentals",
            imgSrc: "/Assets/Course/course5.jpg",
            logo: University_Logos.Duke_University,
            skills: "Artificial Intelligence, Python, Machine Learning"
        },
        {
            id: 6,
            title: "Stanford Machine Learning",
            imgSrc: "/Assets/Course/course6.jpg",
            logo: University_Logos.Stanford_University,
            skills: "Machine Learning, Python, Data Analysis"
        },
        {
            id: 7,
            title: "Cambridge Data Science",
            imgSrc: "/Assets/Course/course7.jpg",
            logo: University_Logos.University_of_Cambridge,
            skills: "Data Science, Statistics, R Programming"
        },
        {
            id: 8,
            title: "Oxford Cyber Security",
            imgSrc: "/Assets/Course/course8.jpg",
            logo: University_Logos.University_of_Oxford,
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
             <div className="container my-5 ">
             <p className="mb-1 fs-5 fw-semibold" style={{color: '#210BE3'}}>Professional Specializations and Certification Courses</p>
                <h1 className="mb-1 display-4 fw-normal" style={{color: 'Black'}}>Most Popular Certificates</h1>
                <p className="mb-4 fs-5" style={{color: 'Black'}}>Explore our most popular programs, get job-ready for an in-demand career.</p>
                <div className="row">
                    {mainCourses.map(course => (
                        <div key={course.id} className="col-md-3 col-sm-6">
                            <Link to={`/courses/${course.id}`} className="text-decoration-none">
                                <div className="card">
                                    <img src={course.imgSrc} className="card-img-top" alt={course.title} />
                                    <div className="card-body d-flex flex-column">
                                        <div className="course-logos">
                                            {course.logo && <img src={course.logo} alt="Course Logo" />}
                                        </div>
                                        <h5 className="card-title" style={{color: 'Black'}}>{course.title}</h5>
                                        <div className="mt-auto">
                                            <p className="card-text mb-0" style={{color: '#210BE3'}}>Advance in Your Degree Program</p>
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
                        <div key={course.id} className="col-md-3 col-sm-6">
                            <Link to={`/courses/${course.id}`} className="text-decoration-none">
                                <div className="card">
                                    <img src={course.imgSrc} className="card-img-top" alt={course.title} />
                                    <div className="card-body d-flex flex-column">
                                        <div className="course-logos">
                                            {course.logo && <img src={course.logo} alt="Course Logo" />}
                                        </div>
                                        <h5 className="card-title" style={{color: 'Black'}}>{course.title}</h5>
                                        <div className="mt-auto">
                                            <p className="card-text mb-0" style={{color: '#210BE3'}}>Advance in Your Degree Program</p>
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
                    <button type="button" className="btn btn-primary me-2" onClick={toggleAdditionalCourses} style={{ backgroundColor: '#210BE3', color: '#FFFFFF'}}>
                        {showAdditionalCourses ? 'Show Less' : 'Show More'}
                    </button>
                    <Link to="/courses"><button type="button" className="btn btn-outline-primary custom-button"
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
                    display: flex;University_Logos;
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
