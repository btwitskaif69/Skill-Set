import React from 'react';
import { Link } from 'react-router-dom';

export default function CoursesCards({ selectedFilters }) {
    const University_Logos = {
        Aws: '/Assets/University_Logos/Aws.svg',
        Duke_University: '/Assets/University_Logos/Duke_University.svg',
        Google: '/Assets/University_Logos/Google.svg',
        Harvard_University: '/Assets/University_Logos/Harvard_University.svg',
        IBM: '/Assets/University_Logos/IBM.svg',
        Meta: '/Assets/University_Logos/Meta.svg',
        MIT: '/Assets/University_Logos/Mit.svg',
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
        rating: "5.0",
        reviews: "(10K reviews)",
        subject: "Data Science",
        language: "English",
        product: "Courses",
        duration: "6-12 months",
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
        duration: "3-6 months",
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
        duration: "3-6 months",
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
        duration: "1-3 months",
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
        duration: "6-12 months",
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
        duration: "6-12 months",
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
        duration: "3-6 months",
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
        duration: "3-6 months",
      },
      {
        id: 9,
        title: "Harvard Business Analytics",
        imgSrc: "/Assets/Course/course9.jpg",
        logo: University_Logos.Harvard_University,
        skills: "Business Analytics, Data Visualization, Excel",
        rating: "4.8",
        reviews: "(9K reviews)",
        subject: "Business Analytics",
        language: "English",
        product: "Courses",
        duration: "6-12 months",
      },
      {
        id: 10,
        title: "MIT Blockchain Technology",
        imgSrc: "/Assets/Course/course10.jpg",
        logo: University_Logos.MIT,
        skills: "Blockchain, Cryptography, Decentralization",
        rating: "4.9",
        reviews: "(7K reviews)",
        subject: "Blockchain",
        language: "English",
        product: "Courses",
        duration: "1-3 months",
      },
      {
        id: 11,
        title: "AR/VR Development",
        imgSrc: "/Assets/Course/course11.jpg",
        logo: University_Logos.Meta,
        skills: "Augmented Reality, Virtual Reality, Unity",
        rating: "4.6",
        reviews: "(4K reviews)",
        subject: "AR/VR Development",
        language: "English",
        product: "Courses",
        duration: "3-6 months",
      },
      {
        id: 12,
        title: "Quantum Computing",
        imgSrc: "/Assets/Course/course12.jpg",
        logo: University_Logos.IBM,
        skills: "Quantum Computing, Qiskit, Python",
        rating: "4.7",
        reviews: "(5K reviews)",
        subject: "Quantum Computing",
        language: "English",
        product: "Courses",
        duration: "6-12 months",
      },
      {
        id: 13,
        title: "Leadership and Management",
        imgSrc: "/Assets/Course/course13.jpg",
        logo: University_Logos.Harvard_University,
        skills: "Leadership, Decision-Making, Communication",
        rating: "4.8",
        reviews: "(6K reviews)",
        subject: "Leadership",
        language: "English",
        product: "Courses",
        duration: "3-6 months",
      },
      {
        id: 14,
        title: "Mobile App Development",
        imgSrc: "/Assets/Course/course14.jpg",
        logo: University_Logos.Google,
        skills: "Android Development, Kotlin, Java",
        rating: "4.7",
        reviews: "(8K reviews)",
        subject: "Mobile Development",
        language: "English",
        product: "Courses",
        duration: "6-12 months",
      },
      {
        id: 15,
        title: "AI Ethics",
        imgSrc: "/Assets/Course/course15.jpg",
        logo: University_Logos.Stanford_University,
        skills: "Ethics, Artificial Intelligence, Policy",
        rating: "4.9",
        reviews: "(7K reviews)",
        subject: "AI Ethics",
        language: "English",
        product: "Courses",
        duration: "1-3 months",
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
        duration: "6-12 months",
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
        duration: "3-6 months",
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
        duration: "6-12 months",
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
        duration: "1-3 months",
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
        duration: "6-12 months",
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
        duration: "6-12 months",
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
        duration: "3-6 months",
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
        duration: "6-12 months",
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
        duration: "3-6 months",
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
        duration: "1-3 months",
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
        duration: "6-12 months",
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
        duration: "3-6 months",
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
        duration: "6-12 months",
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
        duration: "1-3 months",
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
        duration: "3-6 months",
      }
    ];
    
    
    

      // Filter courses based on selected filters
const filteredCourses = courses.filter(course => {
    const subjectMatch = selectedFilters.subjects.length === 0 || selectedFilters.subjects.includes(course.subject);
    const languageMatch = selectedFilters.languages.length === 0 || selectedFilters.languages.includes(course.language);
    const productMatch = selectedFilters.learningProducts.length === 0 || selectedFilters.learningProducts.includes(course.product);
    const skillsMatch = selectedFilters.skills.length === 0 || selectedFilters.skills.some(skill => course.skills.includes(skill));
    const universitiesMatch = selectedFilters.universities.length === 0 || selectedFilters.universities.includes(course.logo);
    const durationsMatch = selectedFilters.durations.length === 0 || selectedFilters.durations.includes(course.duration);
    const ratingsMatch = selectedFilters.ratings.length === 0 || selectedFilters.ratings.includes(course.rating);


    return subjectMatch && languageMatch && productMatch && skillsMatch && universitiesMatch && durationsMatch & ratingsMatch;
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
                                <div className="card h-100 fade-in"
                                style={{
                                  transition:'transform 0.3s ease, box-shadow 0.3s ease',
                                  padding: '7px',
                                  borderRadius:'7px',
                                  height: '100%'
                                  }}>
                                    <img 
                                        src={course.imgSrc} 
                                        className="card-img-top" 
                                        alt={course.title || 'Course Image'} 
                                    style={{
                                      height:'200px',
                                      width:'100%',
                                      objectFit:'cover',
                                      borderRadius: '7px'
                                    }}/>
                                    <div className="card-body d-flex flex-column">
                                        <div className="course-logos mb-3" style={{display:'flex', marginBottom:'8px', justifyContent:'left'}}>
                                            {course.logo && (
                                                <img 
                                                    src={course.logo} 
                                                    alt={`${course.title} Logo`} 
                                                />
                                            )}
                                        </div>
                                        <h5 className="card-title mb-0"
                                        style={{ color: 'Black', minHeight:'30px', fontSize:'16px', fontWeight:'600' }}>{course.title}</h5>
                                        <p className="card-text-skills" style={{ color: '#636363', fontSize: '0.8rem' }}>
                                            <b style={{ color: 'black', fontWeight: '600' }}>Skills you'll gain:</b> {course.skills}
                                        </p>
                                        <div className="mt-auto">
                                            <p className="review-rating mb-0 bi bi-award" style={{ color: '#210BE3', fontSize: '0.7rem' }}>
                                                &nbsp;Advance your degree journey
                                            </p>
                                            <p className="card-text mb-0" style={{fontSize: '0.7rem'}}>
                                                <i className="bi bi-star-fill" style={{ color: '#f59e0b'}}></i>&nbsp;
                                                <b>{course.rating}</b> {course.reviews}
                                            </p>
                                            <p className="card-text mb-0" style={{ color: '#636363', fontSize: '0.7rem' }}>
                                                Beginner · Career Certificate · {course.duration}
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
                .card:hover {
                    transform: scale(1.05);
                    box-shadow: 0 7px 14px rgba(0, 0, 0, 0.2);
                }
                .course-logos img {
                    height: 24px; /* Slightly increased logo height */
                    width: auto;
                    margin-right: 8px;
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