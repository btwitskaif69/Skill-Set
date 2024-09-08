import React from 'react';
import { Link } from 'react-router-dom';

export default function CoursesCards({ selectedFilters }) {
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
        skills: "Data Analysis, Google Analytics, Data Visualization",
        rating: "4.8",
        reviews: "(10K reviews)",
        subject: "Data Science",
        language: "English",
        product: "Courses",
      },
      {
        id: 2,
        title: "IBM Data Science",
        imgSrc: "/Assets/Course/course2.jpg",
        logo: University_Logos.IBM,
        skills: "Python, Machine Learning, Data Visualization",
        rating: "4.7",
        reviews: "(8K reviews)",
        subject: "Data Science",
        language: "English",
        product: "Courses",
      },
      {
        id: 3,
        title: "AWS Solutions Architect",
        imgSrc: "/Assets/Course/course3.jpg",
        logo: University_Logos.Aws,
        skills: "Cloud Computing, AWS, Architecture Design",
        rating: "4.9",
        reviews: "(12K reviews)",
        subject: "Cloud Computing",
        language: "English",
        product: "Courses",
      },
      {
        id: 4,
        title: "Meta Front-End Development",
        imgSrc: "/Assets/Course/course4.jpg",
        logo: University_Logos.Meta,
        skills: "HTML, CSS, JavaScript, React",
        rating: "4.6",
        reviews: "(6K reviews)",
        subject: "Web Development",
        language: "English",
        product: "Courses",
      },
      {
        id: 5,
        title: "AI Fundamentals",
        imgSrc: "/Assets/Course/course5.jpg",
        logo: University_Logos.Duke_University,
        skills: "Artificial Intelligence, Python, Machine Learning",
        rating: "4.5",
        reviews: "(9K reviews)",
        subject: "Artificial Intelligence",
        language: "English",
        product: "Courses",
      },
      {
        id: 6,
        title: "Stanford Machine Learning",
        imgSrc: "/Assets/Course/course6.jpg",
        logo: University_Logos.Stanford_University,
        skills: "Machine Learning, Python, Data Analysis",
        rating: "4.9",
        reviews: "(11K reviews)",
        subject: "Machine Learning",
        language: "English",
        product: "Courses",
      },
      {
        id: 7,
        title: "Cambridge Data Science",
        imgSrc: "/Assets/Course/course7.jpg",
        logo: University_Logos.University_of_Cambridge,
        skills: "Data Science, Statistics, R Programming",
        rating: "4.8",
        reviews: "(7K reviews)",
        subject: "Data Science",
        language: "English",
        product: "Courses",
      },
      {
        id: 8,
        title: "Oxford Cyber Security",
        imgSrc: "/Assets/Course/course8.jpg",
        logo: University_Logos.University_of_Oxford,
        skills: "Cybersecurity, Ethical Hacking, Network Security",
        rating: "4.7",
        reviews: "(5K reviews)",
        subject: "Cybersecurity",
        language: "English",
        product: "Courses",
      },
      {
        id: 9,
        title: "Google UX Design",
        imgSrc: "/Assets/Course/course9.jpg",
        logo: University_Logos.Google,
        skills: "UX Design, Prototyping, User Research",
        rating: "4.8",
        reviews: "(9K reviews)",
        subject: "UX Design",
        language: "English",
        product: "Courses",
      },
      {
        id: 10,
        title: "IBM Cloud Computing",
        imgSrc: "/Assets/Course/course10.jpg",
        logo: University_Logos.IBM,
        skills: "Cloud Computing, Docker, Kubernetes",
        rating: "4.6",
        reviews: "(6.5K reviews)",
        subject: "Cloud Computing",
        language: "English",
        product: "Courses",
      },
      {
        id: 11,
        title: "Meta Advanced React",
        imgSrc: "/Assets/Course/course11.jpg",
        logo: University_Logos.Meta,
        skills: "React, Redux, Web Development",
        rating: "4.9",
        reviews: "(10.5K reviews)",
        subject: "Web Development",
        language: "English",
        product: "Courses",
      },
      {
        id: 12,
        title: "AWS Data Engineering",
        imgSrc: "/Assets/Course/course12.jpg",
        logo: University_Logos.Aws,
        skills: "Data Engineering, AWS, Python",
        rating: "4.7",
        reviews: "(8.5K reviews)",
        subject: "Data Engineering",
        language: "English",
        product: "Courses",
      },
      {
        id: 13,
        title: "Stanford Artificial Intelligence",
        imgSrc: "/Assets/Course/course13.jpg",
        logo: University_Logos.Stanford_University,
        skills: "Artificial Intelligence, Robotics, Machine Learning",
        rating: "4.9",
        reviews: "(13K reviews)",
        subject: "Artificial Intelligence",
        language: "English",
        product: "Courses",
      },
      {
        id: 14,
        title: "Quantum Computing",
        imgSrc: "/Assets/Course/course14.jpg",
        logo: University_Logos.University_of_Cambridge,
        skills: "Quantum Computing, Python, Algorithms",
        rating: "4.8",
        reviews: "(7.5K reviews)",
        subject: "Quantum Computing",
        language: "English",
        product: "Courses",
      },
      {
        id: 15,
        title: "Oxford Business Analytics",
        imgSrc: "/Assets/Course/course15.jpg",
        logo: University_Logos.University_of_Oxford,
        skills: "Business Analytics, Data Science, Excel",
        rating: "4.6",
        reviews: "(5.5K reviews)",
        subject: "Business Analytics",
        language: "English",
        product: "Courses",
      },
      {
        id: 16,
        title: "Google Cloud ML",
        imgSrc: "/Assets/Course/course16.jpg",
        logo: University_Logos.Google,
        skills: "Machine Learning, Google Cloud, Python",
        rating: "4.7",
        reviews: "(8K reviews)",
        subject: "Machine Learning",
        language: "English",
        product: "Courses",
      },
      {
        id: 17,
        title: "IBM Blockchain Essentials",
        imgSrc: "/Assets/Course/course17.jpg",
        logo: University_Logos.IBM,
        skills: "Blockchain, Hyperledger, Smart Contracts",
        rating: "4.6",
        reviews: "(6K reviews)",
        subject: "Blockchain",
        language: "English",
        product: "Courses",
      },
      {
        id: 18,
        title: "Meta AR/VR Development",
        imgSrc: "/Assets/Course/course18.jpg",
        logo: University_Logos.Meta,
        skills: "Augmented Reality, Virtual Reality, Unity",
        rating: "4.9",
        reviews: "(9.5K reviews)",
        subject: "AR/VR Development",
        language: "English",
        product: "Courses",
      },
      {
        id: 19,
        title: "Financial Engineering",
        imgSrc: "/Assets/Course/course19.jpg",
        logo: University_Logos.Duke_University,
        skills: "Financial Engineering, Risk Management, MATLAB",
        rating: "4.8",
        reviews: "(7K reviews)",
        subject: "Financial Engineering",
        language: "English",
        product: "Courses",
      },
      {
        id: 20,
        title: "Stanford Deep Learning",
        imgSrc: "/Assets/Course/course20.jpg",
        logo: University_Logos.Stanford_University,
        skills: "Deep Learning, TensorFlow, Neural Networks",
        rating: "4.9",
        reviews: "(11.5K reviews)",
        subject: "Deep Learning",
        language: "English",
        product: "Courses",
      },
      {
        id: 21,
        title: "Advanced Data Analysis",
        imgSrc: "/Assets/Course/course21.jpg",
        logo: University_Logos.University_of_Cambridge,
        skills: "Advanced Data Analysis, R, Python",
        rating: "4.7",
        reviews: "(8.5K reviews)",
        subject: "Data Analysis",
        language: "English",
        product: "Courses",
      },
      {
        id: 22,
        title: "Oxford Fintech",
        imgSrc: "/Assets/Course/course22.jpg",
        logo: University_Logos.University_of_Oxford,
        skills: "Fintech, Cryptocurrency, Blockchain",
        rating: "4.8",
        reviews: "(7K reviews)",
        subject: "Fintech",
        language: "English",
        product: "Courses",
      },
      {
        id: 23,
        title: "Google Mobile Dev",
        imgSrc: "/Assets/Course/course23.jpg",
        logo: University_Logos.Google,
        skills: "Android Development, Kotlin, Java",
        rating: "4.6",
        reviews: "(5.5K reviews)",
        subject: "Mobile Development",
        language: "English",
        product: "Courses",
      },
      {
        id: 24,
        title: "IBM Artificial Intelligence",
        imgSrc: "/Assets/Course/course24.jpg",
        logo: University_Logos.IBM,
        skills: "Artificial Intelligence, Machine Learning, Python",
        rating: "4.9",
        reviews: "(11K reviews)",
        subject: "Artificial Intelligence",
        language: "English",
        product: "Courses",
      },
      {
        id: 25,
        title: "Meta Advanced JavaScript",
        imgSrc: "/Assets/Course/course25.jpg",
        logo: University_Logos.Meta,
        skills: "JavaScript, Node.js, Web Development",
        rating: "4.7",
        reviews: "(7.5K reviews)",
        subject: "Web Development",
        language: "English",
        product: "Courses",
      },
      {
        id: 26,
        title: "AWS DevOps Engineer",
        imgSrc: "/Assets/Course/course26.jpg",
        logo: University_Logos.Aws,
        skills: "DevOps, AWS, CI/CD",
        rating: "4.9",
        reviews: "(9.8K reviews)",
        subject: "DevOps",
        language: "English",
        product: "Courses",
      },
      {
        id: 27,
        title: "Stanford Cybersecurity",
        imgSrc: "/Assets/Course/course27.jpg",
        logo: University_Logos.Stanford_University,
        skills: "Cybersecurity, Ethical Hacking, Python",
        rating: "4.8",
        reviews: "(7K reviews)",
        subject: "Cybersecurity",
        language: "English",
        product: "Courses",
      },
      {
        id: 28,
        title: "Cambridge AI Ethics",
        imgSrc: "/Assets/Course/course28.jpg",
        logo: University_Logos.University_of_Cambridge,
        skills: "AI Ethics, Machine Learning, Policy",
        rating: "4.7",
        reviews: "(6.5K reviews)",
        subject: "AI Ethics",
        language: "English",
        product: "Courses",
      },
      {
        id: 29,
        title: "Oxford Leadership Program",
        imgSrc: "/Assets/Course/course29.jpg",
        logo: University_Logos.University_of_Oxford,
        skills: "Leadership, Management, Strategy",
        rating: "4.6",
        reviews: "(8K reviews)",
        subject: "Leadership",
        language: "English",
        product: "Courses",
      },
      {
        id: 30,
        title: "Google Cloud Solutions",
        imgSrc: "/Assets/Course/course30.jpg",
        logo: University_Logos.Google,
        skills: "Google Cloud, Cloud Solutions, DevOps",
        rating: "4.9",
        reviews: "(9K reviews)",
        subject: "Cloud Solutions",
        language: "English",
        product: "Courses",
      },
      {
        id: 31,
        title: "AWS Big Data",
        imgSrc: "/Assets/Course/course31.jpg",
        logo: University_Logos.Aws,
        skills: "Big Data, AWS, Data Analysis",
        rating: "4.8",
        reviews: "(7K reviews)",
        subject: "Data Science",
        language: "English",
        product: "Courses",
      },
      {
        id: 32,
        title: "Duke AI Fundamentals",
        imgSrc: "/Assets/Course/course32.jpg",
        logo: University_Logos.Duke_University,
        skills: "AI Basics, Python, Machine Learning",
        rating: "4.7",
        reviews: "(6K reviews)",
        subject: "Artificial Intelligence",
        language: "English",
        product: "Courses",
      },
      {
        id: 33,
        title: "Meta Web Design",
        imgSrc: "/Assets/Course/course33.jpg",
        logo: University_Logos.Meta,
        skills: "Web Design, UX/UI, HTML/CSS",
        rating: "4.6",
        reviews: "(5K reviews)",
        subject: "Web Development",
        language: "English",
        product: "Courses",
      },
      {
        id: 34,
        title: "Stanford Quantum Computing",
        imgSrc: "/Assets/Course/course34.jpg",
        logo: University_Logos.Stanford_University,
        skills: "Quantum Algorithms, Quantum Computing",
        rating: "4.8",
        reviews: "(6.5K reviews)",
        subject: "Quantum Computing",
        language: "English",
        product: "Courses",
      },
      {
        id: 35,
        title: "Oxford Data Engineering",
        imgSrc: "/Assets/Course/course35.jpg",
        logo: University_Logos.University_of_Oxford,
        skills: "Data Engineering, Big Data, Python",
        rating: "4.7",
        reviews: "(7K reviews)",
        subject: "Data Engineering",
        language: "English",
        product: "Courses",
      },
      {
        id: 36,
        title: "Google Blockchain",
        imgSrc: "/Assets/Course/course36.jpg",
        logo: University_Logos.Google,
        skills: "Blockchain, Cryptography, Smart Contracts",
        rating: "4.8",
        reviews: "(6.5K reviews)",
        subject: "Blockchain",
        language: "English",
        product: "Courses",
      },
      {
        id: 37,
        title: "IBM Mobile Development",
        imgSrc: "/Assets/Course/course37.jpg",
        logo: University_Logos.IBM,
        skills: "Mobile Apps, Java, Kotlin",
        rating: "4.6",
        reviews: "(5.5K reviews)",
        subject: "Mobile Development",
        language: "English",
        product: "Courses",
      },
      {
        id: 38,
        title: "Meta AI Ethics",
        imgSrc: "/Assets/Course/course38.jpg",
        logo: University_Logos.Meta,
        skills: "Ethical AI, Policy, Machine Learning",
        rating: "4.7",
        reviews: "(6K reviews)",
        subject: "AI Ethics",
        language: "English",
        product: "Courses",
      },
      {
        id: 39,
        title: "Stanford Leadership",
        imgSrc: "/Assets/Course/course39.jpg",
        logo: University_Logos.Stanford_University,
        skills: "Leadership Skills, Management, Strategy",
        rating: "4.8",
        reviews: "(7.5K reviews)",
        subject: "Leadership",
        language: "English",
        product: "Courses",
      },
      {
        id: 40,
        title: "Duke Data Engineering",
        imgSrc: "/Assets/Course/course40.jpg",
        logo: University_Logos.Duke_University,
        skills: "Data Engineering, SQL, Big Data",
        rating: "4.7",
        reviews: "(6K reviews)",
        subject: "Data Engineering",
        language: "English",
        product: "Courses",
      },
      {
        id: 41,
        title: "Cambridge Deep Learning",
        imgSrc: "/Assets/Course/course41.jpg",
        logo: University_Logos.University_of_Cambridge,
        skills: "Deep Learning, Neural Networks, TensorFlow",
        rating: "4.9",
        reviews: "(8K reviews)",
        subject: "Deep Learning",
        language: "English",
        product: "Courses",
      },
      {
        id: 42,
        title: "Oxford Fintech Innovations",
        imgSrc: "/Assets/Course/course42.jpg",
        logo: University_Logos.University_of_Oxford,
        skills: "Fintech Innovations, Blockchain, Cryptocurrency",
        rating: "4.8",
        reviews: "(7K reviews)",
        subject: "Fintech",
        language: "English",
        product: "Courses",
      },
      {
        id: 43,
        title: "AWS AI Solutions",
        imgSrc: "/Assets/Course/course43.jpg",
        logo: University_Logos.Aws,
        skills: "AI Solutions, AWS, Machine Learning",
        rating: "4.9",
        reviews: "(8.5K reviews)",
        subject: "Artificial Intelligence",
        language: "English",
        product: "Courses",
      },
      {
        id: 44,
        title: "Meta Data Science",
        imgSrc: "/Assets/Course/course44.jpg",
        logo: University_Logos.Meta,
        skills: "Data Science, Analytics, Data Visualization",
        rating: "4.8",
        reviews: "(9K reviews)",
        subject: "Data Science",
        language: "English",
        product: "Courses",
      },
      {
        id: 45,
        title: "Stanford Mobile Development",
        imgSrc: "/Assets/Course/course45.jpg",
        logo: University_Logos.Stanford_University,
        skills: "Mobile Development, Android, iOS",
        rating: "4.6",
        reviews: "(5.5K reviews)",
        subject: "Mobile Development",
        language: "English",
        product: "Courses",
      },
      {
        id: 46,
        title: "IBM Financial Engineering",
        imgSrc: "/Assets/Course/course46.jpg",
        logo: University_Logos.IBM,
        skills: "Financial Engineering, Risk Management, Python",
        rating: "4.7",
        reviews: "(6K reviews)",
        subject: "Financial Engineering",
        language: "English",
        product: "Courses",
      },
      {
        id: 47,
        title: "Google DevOps",
        imgSrc: "/Assets/Course/course47.jpg",
        logo: University_Logos.Google,
        skills: "DevOps, Google Cloud, CI/CD",
        rating: "4.9",
        reviews: "(9K reviews)",
        subject: "DevOps",
        language: "English",
        product: "Courses",
      },
      {
        id: 48,
        title: "Cambridge Blockchain",
        imgSrc: "/Assets/Course/course48.jpg",
        logo: University_Logos.University_of_Cambridge,
        skills: "Blockchain Technology, Hyperledger, Smart Contracts",
        rating: "4.8",
        reviews: "(7.5K reviews)",
        subject: "Blockchain",
        language: "English",
        product: "Courses",
      },
      {
        id: 49,
        title: "Oxford Data Science",
        imgSrc: "/Assets/Course/course49.jpg",
        logo: University_Logos.University_of_Oxford,
        skills: "Data Science, Analytics, Python",
        rating: "4.7",
        reviews: "(8K reviews)",
        subject: "Data Science",
        language: "English",
        product: "Courses",
      },
      {
        id: 50,
        title: "Meta UX Design",
        imgSrc: "/Assets/Course/course50.jpg",
        logo: University_Logos.Meta,
        skills: "UX Design, User Research, Prototyping",
        rating: "4.9",
        reviews: "(9K reviews)",
        subject: "UX Design",
        language: "English",
        product: "Courses",
      },
    ];
    
    
    

      // Filter courses based on selected filters
const filteredCourses = courses.filter(course => {
    // Check if the course subject matches any of the selected subjects or if no subjects are selected
    const subjectMatch = selectedFilters.subjects.length === 0 || selectedFilters.subjects.includes(course.subject);
    
    // Check if the course language matches any of the selected languages or if no languages are selected
    const languageMatch = selectedFilters.languages.length === 0 || selectedFilters.languages.includes(course.language);
    
    // Check if the course product matches any of the selected learning products or if no learning products are selected
    const productMatch = selectedFilters.learningProducts.length === 0 || selectedFilters.learningProducts.includes(course.product);
    
    // Check if the course skills match any of the selected skills or if no skills are selected
    const skillsMatch = selectedFilters.skills.length === 0 || selectedFilters.skills.some(skill => course.skills.includes(skill));

    // Check if the course university matches any of the selected universities or if no universities are selected
    const logoMatch = selectedFilters.logo.length === 0 || selectedFilters.logo.includes(course.logo);

    return subjectMatch && languageMatch && productMatch && skillsMatch &logoMatch;
});

    

    // Rendering the course cards
    return (
        <div className="container">
            <p className="mb-4 fs-5 fw-semibold" style={{ color: 'Black' }}>
                Explore our most popular programs, get job-ready for an in-demand career.
            </p>
            <div className="row g-4">
                {filteredCourses.length > 0 ? (
                    filteredCourses.map(course => (
                        <div key={course.id} className="col-lg-4 col-md-6 col-sm-12">
                            <Link to={`/courses/${course.id}`} className="text-decoration-none">
                                <div className="card h-100 fade-in">
                                    <img 
                                        src={course.imgSrc} 
                                        className="card-img-top" 
                                        alt={course.title || 'Course Image'} 
                                    />
                                    <div className="card-body d-flex flex-column">
                                        <div className="course-logos mb-3">
                                            {course.logo && (
                                                <img 
                                                    src={course.logo} 
                                                    alt={`${course.title} Logo`} 
                                                />
                                            )}
                                        </div>
                                        <h5 className="card-title mb-0" style={{ color: 'Black' }}>{course.title}</h5>
                                        <p className="card-text" style={{ color: '#636363' }}>
                                            <b style={{ color: 'black', fontWeight: '600' }}>Skills you'll gain:</b> {course.skills}
                                        </p>
                                        <div className="mt-auto">
                                            <p className="card-text mb-0 bi bi-award" style={{ color: '#210BE3' }}>
                                                &nbsp;Advance your degree journey
                                            </p>
                                            <p className="card-text mb-0">
                                                <i className="bi bi-star-fill" style={{ color: '#f59e0b' }}></i>&nbsp;
                                                <b>{course.rating}</b> {course.reviews}
                                            </p>
                                            <p className="card-text mb-0" style={{ color: '#636363' }}>
                                                Beginner · Career Certificate · 3-6 Months
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
                    border-radius: 7px;
                }
                .course-logos {
                    display: flex;
                    margin-bottom: 8px;
                    justify-content: left;
                }
                .course-logos img {
                    height: 24px; /* Slightly increased logo height */
                    width: auto;
                    margin-right: 8px;
                }
                .card-title {
                    min-height: 30px; /* Set a minimum height for the title */
                    font-size: 16px;
                    font-weight: 600;
                }
                .card-text {
                    font-size: 0.75rem; /* Slightly larger for readability */
                }
                .fade-in {
                    animation: fadeIn 0.5s ease-out;
                }
                @media (max-width: 576px) {
                    .course-logos img {
                        height: 20px; /* Smaller logos for small screens */
                    }
                }
            `}</style>
        </div>
    );
}