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
            title: "Duke University AI Fundamentals",
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
        {
            id: 9,
            title: "Google UX Design",
            imgSrc: "/Assets/Course/course9.jpg",
            logo: University_Logos.Google,
            skills: "UX Design, Prototyping, User Research"
        },
        {
            id: 10,
            title: "IBM Cloud Computing",
            imgSrc: "/Assets/Course/course10.jpg",
            logo: University_Logos.IBM,
            skills: "Cloud Computing, Docker, Kubernetes"
        },
        {
            id: 11,
            title: "Meta Advanced React",
            imgSrc: "/Assets/Course/course11.jpg",
            logo: University_Logos.Meta,
            skills: "React, Redux, Web Development"
        },
        {
            id: 12,
            title: "AWS Data Engineering",
            imgSrc: "/Assets/Course/course12.jpg",
            logo: University_Logos.Aws,
            skills: "Data Engineering, AWS, Python"
        },
        {
            id: 13,
            title: "Stanford Artificial Intelligence",
            imgSrc: "/Assets/Course/course13.jpg",
            logo: University_Logos.Stanford_University,
            skills: "Artificial Intelligence, Robotics, Machine Learning"
        },
        {
            id: 14,
            title: "Cambridge Quantum Computing",
            imgSrc: "/Assets/Course/course14.jpg",
            logo: University_Logos.University_of_Cambridge,
            skills: "Quantum Computing, Python, Algorithms"
        },
        {
            id: 15,
            title: "Oxford Business Analytics",
            imgSrc: "/Assets/Course/course15.jpg",
            logo: University_Logos.University_of_Oxford,
            skills: "Business Analytics, Data Science, Excel"
        },
        {
            id: 16,
            title: "Google Cloud Machine Learning",
            imgSrc: "/Assets/Course/course16.jpg",
            logo: University_Logos.Google,
            skills: "Machine Learning, Google Cloud, Python"
        },
        {
            id: 17,
            title: "IBM Blockchain Essentials",
            imgSrc: "/Assets/Course/course17.jpg",
            logo: University_Logos.IBM,
            skills: "Blockchain, Hyperledger, Smart Contracts"
        },
        {
            id: 18,
            title: "Meta AR/VR Development",
            imgSrc: "/Assets/Course/course18.jpg",
            logo: University_Logos.Meta,
            skills: "Augmented Reality, Virtual Reality, Unity"
        },
        {
            id: 19,
            title: "Duke University Financial Engineering",
            imgSrc: "/Assets/Course/course19.jpg",
            logo: University_Logos.Duke_University,
            skills: "Financial Engineering, Risk Management, MATLAB"
        },
        {
            id: 20,
            title: "Stanford Deep Learning",
            imgSrc: "/Assets/Course/course20.jpg",
            logo: University_Logos.Stanford_University,
            skills: "Deep Learning, TensorFlow, Neural Networks"
        },
        {
            id: 21,
            title: "Cambridge Advanced Data Analysis",
            imgSrc: "/Assets/Course/course21.jpg",
            logo: University_Logos.University_of_Cambridge,
            skills: "Advanced Data Analysis, R, Python"
        },
        {
            id: 22,
            title: "Oxford Fintech",
            imgSrc: "/Assets/Course/course22.jpg",
            logo: University_Logos.University_of_Oxford,
            skills: "Fintech, Cryptocurrency, Blockchain"
        },
        {
            id: 23,
            title: "Google Mobile App Development",
            imgSrc: "/Assets/Course/course23.jpg",
            logo: University_Logos.Google,
            skills: "Android Development, Kotlin, Java"
        },
        {
            id: 24,
            title: "IBM Artificial Intelligence",
            imgSrc: "/Assets/Course/course24.jpg",
            logo: University_Logos.IBM,
            skills: "Artificial Intelligence, Machine Learning, Python"
        },
        {
            id: 25,
            title: "Meta Advanced JavaScript",
            imgSrc: "/Assets/Course/course25.jpg",
            logo: University_Logos.Meta,
            skills: "JavaScript, Node.js, Web Development"
        },
        {
            id: 26,
            title: "AWS DevOps Engineer",
            imgSrc: "/Assets/Course/course26.jpg",
            logo: University_Logos.Aws,
            skills: "DevOps, AWS, CI/CD"
        },
        {
            id: 27,
            title: "Stanford Data Structures & Algorithms",
            imgSrc: "/Assets/Course/course27.jpg",
            logo: University_Logos.Stanford_University,
            skills: "Data Structures, Algorithms, Problem Solving"
        },
        {
            id: 28,
            title: "Cambridge Natural Language Processing",
            imgSrc: "/Assets/Course/course28.jpg",
            logo: University_Logos.University_of_Cambridge,
            skills: "Natural Language Processing, Machine Learning, Python"
        },
        {
            id: 29,
            title: "Oxford Business Management",
            imgSrc: "/Assets/Course/course29.jpg",
            logo: University_Logos.University_of_Oxford,
            skills: "Business Management, Leadership, Strategic Planning"
        },
        {
            id: 30,
            title: "Google Cloud DevOps Engineer",
            imgSrc: "/Assets/Course/course30.jpg",
            logo: University_Logos.Google,
            skills: "DevOps, Google Cloud, Kubernetes"
        }
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
                                    <h5 className="card-title mb-0" style={{ color: 'Black' }}>{course.title}</h5>
                                     {/* New content addition */}
                                     <p className="card-text" style={{ color: '#636363' }}>
                                        <b style={{ color: 'black', fontWeight: '600' }}>Skills you'll gain:</b> {course.skills}
                                    </p>
                                    <div className="mt-auto">
                                        <p className="card-text mb-0" style={{ color: '#210BE3' }}>
                                            Make progress toward a degree
                                        </p>
                                        <p className="card-text mb-0" style={{ color: '#636363' }}><b>4.8 </b>(10K reviews)</p>
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
                   height: 200px; /* Set a fixed height for the image */
                    width: 100%; /* Make sure the image takes up the full width */
                    object-fit: cover; /* Ensures the image covers the area without stretching */
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
                    min-height: 60px; /* Set a minimum height for the title */
                    font-size: 16px;
                    font-weight: 600;
                }
                .card-text {
                    font-size: 0.65rem; /* Slightly larger for readability */
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
            `}</style>
        </div>
    );
}
