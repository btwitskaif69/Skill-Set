import React from 'react';
import { Link } from 'react-router-dom';

export default function CoursesCards() {

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
        { id: 1, title: "Google Data Analytics", imgSrc: "/Assets/Course/course1.jpg", logo: University_Logos.Aws },
        { id: 2, title: "IBM Data Science", imgSrc: "/Assets/Course/course2.jpg", logo: University_Logos.Google },
        { id: 3, title: "AWS Solutions Architect", imgSrc: "/Assets/Course/course3.jpg", logo: University_Logos.IBM },
        { id: 4, title: "Meta Front-End Dev", imgSrc: "/Assets/Course/course4.jpg", logo: University_Logos.Meta },
        { id: 5, title: "AI Fundamentals", imgSrc: "/Assets/Course/course5.jpg", logo: University_Logos.Duke_University },
        { id: 6, title: "Stanford Machine Learning", imgSrc: "/Assets/Course/course6.jpg", logo: University_Logos.Stanford_University },
        { id: 7, title: "Cambridge Data Science", imgSrc: "/Assets/Course/course7.jpg", logo: University_Logos.University_of_Cambridge },
        { id: 8, title: "Oxford Cyber Security", imgSrc: "/Assets/Course/course8.jpg", logo: University_Logos.University_of_Oxford },
        { id: 9, title: "Oxford Cyber Security", imgSrc: "/Assets/Course/course9.jpg", logo: University_Logos.University_of_Oxford },
        { id: 10, title: "Oxford Cyber Security", imgSrc: "/Assets/Course/course10.jpg", logo: University_Logos.University_of_Oxford },
        { id: 11, title: "Oxford Cyber Security", imgSrc: "/Assets/Course/course11.jpg", logo: University_Logos.University_of_Oxford },
        { id: 12, title: "Oxford Cyber Security", imgSrc: "/Assets/Course/course12.jpg", logo: University_Logos.University_of_Oxford },
        { id: 13, title: "Oxford Cyber Security", imgSrc: "/Assets/Course/course13.jpg", logo: University_Logos.University_of_Oxford },
        { id: 14, title: "Oxford Cyber Security", imgSrc: "/Assets/Course/course14.jpg", logo: University_Logos.University_of_Oxford },
        { id: 15, title: "Oxford Cyber Security", imgSrc: "/Assets/Course/course15.jpg", logo: University_Logos.University_of_Oxford },
        { id: 16, title: "Oxford Cyber Security", imgSrc: "/Assets/Course/course16.jpg", logo: University_Logos.University_of_Oxford },
        { id: 17, title: "Oxford Cyber Security", imgSrc: "/Assets/Course/course17.jpg", logo: University_Logos.University_of_Oxford },
        { id: 18, title: "Oxford Cyber Security", imgSrc: "/Assets/Course/course18.jpg", logo: University_Logos.University_of_Oxford },
        { id: 19, title: "Oxford Cyber Security", imgSrc: "/Assets/Course/course19.jpg", logo: University_Logos.University_of_Oxford },
        { id: 20, title: "Oxford Cyber Security", imgSrc: "/Assets/Course/course20.jpg", logo: University_Logos.University_of_Oxford },
        { id: 21, title: "Oxford Cyber Security", imgSrc: "/Assets/Course/course21.jpg", logo: University_Logos.University_of_Oxford },
        { id: 22, title: "Oxford Cyber Security", imgSrc: "/Assets/Course/course22.jpg", logo: University_Logos.University_of_Oxford },
        { id: 23, title: "Oxford Cyber Security", imgSrc: "/Assets/Course/course23.jpg", logo: University_Logos.University_of_Oxford },
        { id: 24, title: "Oxford Cyber Security", imgSrc: "/Assets/Course/course24.jpg", logo: University_Logos.University_of_Oxford },
    ];

    return (
        <div className="container">
            <p className="mb-4 display-6 fs-2 fw-semibold" style={{ color: 'Black' }}>
                Explore our most popular programs, get job-ready for an in-demand career.
            </p>
            <div className="row g-4">
                {courses.map(course => (
                    <div key={course.id} className="col-lg-4 col-md-6 col-sm-12">
                        <Link to={`/courses/${course.id}`} className="text-decoration-none">
                            <div className="card h-100">
                                <img src={course.imgSrc} className="card-img-top" alt={course.title} />
                                <div className="card-body d-flex flex-column">
                                    <div className="course-logos mb-3">
                                        {course.logo && (
                                            <img src={course.logo} alt="Course Logo"/>
                                        )}
                                    </div>
                                    <h5 className="card-title" style={{ color: 'Black' }}>{course.title}</h5>
                                     {/* New content addition */}
                                    <p className="card-text" style={{ color: '#636363' }}>
                                        <b>Skills you'll gain:</b> Network Security, Python Programming, Linux, Cloud Computing, Audit, Computer Programming, Computer Security...
                                    </p>
                                    <div className="mt-auto">
                                        <p className="card-text mb-0" style={{ color: '#210BE3' }}>
                                            Make progress toward a degree
                                        </p>
                                        <p className="card-text mb-0" style={{ color: '#636363' }}>
                                        Beginner · Professional Certificate · 3 - 6 Months
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
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
