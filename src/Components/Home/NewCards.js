import React, { useState } from 'react';
import { Link} from 'react-router-dom';

export default function NewCards() {
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
        { id: 1, title: "Oxford Cyber Security", imgSrc: "/Assets/Course/course16.jpg", logo: University_Logos.University_of_Oxford },
        { id: 2, title: "Cambridge Data Science", imgSrc: "/Assets/Course/course15.jpg", logo: University_Logos.University_of_Cambridge },
        { id: 3, title: "Stanford Machine Learning", imgSrc: "/Assets/Course/course14.jpg", logo: University_Logos.Stanford_University },
        { id: 4, title: "AI Fundamentals", imgSrc: "/Assets/Course/course13.jpg", logo: University_Logos.Duke_University },
        { id: 5, title: "Meta Front-End Development", imgSrc: "/Assets/Course/course12.jpg", logo: University_Logos.Meta },
        { id: 6, title: "IBM Data Science", imgSrc: "/Assets/Course/course11.jpg", logo: University_Logos.IBM },
        { id: 7, title: "Google Data Analytics", imgSrc: "/Assets/Course/course10.jpg", logo: University_Logos.Google },
        { id: 8, title: "AWS Solutions Architect", imgSrc: "/Assets/Course/course9.jpg", logo: University_Logos.Aws },
    ];

    const newmainCourses = courses.slice(0, 4);
    const additionalCourses = courses.slice(4);

    const toggleAdditionalCourses = () => {
        setShowAdditionalCourses(!showAdditionalCourses);
    };

    return (
        <div className="main-container">
            {/* Course Cards */}
            <div className="container my-5">
             <p className="mb-1 fs-5 fw-semibold"style={{color: 'blue'}}>Courses and Professional Certificates</p>
                <h1 className="mb-1 display-4 fw-normal" >New Courses for Critical Skills</h1>
                <p className="mb-4 fs-5">Discover our latest courses, designed to build critical skills.</p>
                <div className="row">
                    {newmainCourses.map(course => (
                        <div key={course.id} className="col-md-3 col-sm-6">
                            <Link to={`/courses/${course.id}`} className="text-decoration-none">
                                <div className="card">
                                    <img src={course.imgSrc} className="card-img-top" alt={course.title} />
                                    <div className="card-body d-flex flex-column">
                                        <div className="course-logos">
                                            {course.logo && <img src={course.logo} alt="Course Logo" />}
                                        </div>
                                        <h5 className="card-title">{course.title}</h5>
                                        <div className="mt-auto">
                                            <p className="card-text mb-0" style={{color: '#210BE3'}}>Advance in Your Degree Program</p>
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
                        <div key={course.id} className="col-md-3 col-sm-6">
                            <Link to={`/courses/${course.id}`} className="text-decoration-none">
                                <div className="card">
                                    <img src={course.imgSrc} className="card-img-top" alt={course.title} />
                                    <div className="card-body d-flex flex-column">
                                        <div className="course-logos">
                                            {course.logo && <img src={course.logo} alt="Course Logo" />}
                                        </div>
                                        <h5 className="card-title">{course.title}</h5>
                                        <div className="mt-auto">
                                            <p className="card-text mb-0" style={{color: '#210BE3'}}>Advance in Your Degree Program</p>
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
                    <button type="button" className="btn custom-button-default-transparent me-2" onClick={toggleAdditionalCourses} >
                        {showAdditionalCourses ? 'Show Less' : 'Show More'}
                    </button>
                    <Link to="/courses"><button type="button" className="btn"
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
