// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// export default function Cards() {
//     const [showAdditionalCourses, setShowAdditionalCourses] = useState(false);
//     const [showNewAdditionalCourses, setShowNewAdditionalCourses] = useState(false);

//     const logos = {
//         Aws: '/Assets/Logos/Aws.svg',
//         Duke_University: '/Assets/Logos/Duke_University.svg',
//         Google: '/Assets/Logos/Google.svg',
//         IBM: '/Assets/Logos/IBM.svg',
//         Meta: '/Assets/Logos/Meta.svg',
//         Stanford_University: '/Assets/Logos/Stanford_University.svg',
//         University_of_Cambridge: '/Assets/Logos/University_of_Cambridge.svg',
//         University_of_Michigan: '/Assets/Logos/University_of_Michigan.svg',
//         University_of_Oxford: '/Assets/Logos/University_of_Oxford.svg',
//         University_of_Pennsylvania: '/Assets/Logos/University_of_Pennsylvania.svg',
//     };

//     const courses = [
//         { id: 1, title: "Google Data Analytics", imgSrc: "/Assets/Course/course1.jpg", logo: logos.Google },
//         { id: 2, title: "IBM Data Science", imgSrc: "/Assets/Course/course2.jpg", logo: logos.IBM },
//         { id: 3, title: "AWS Solutions Architect", imgSrc: "/Assets/Course/course3.jpg", logo: logos.Aws },
//         { id: 4, title: "Meta Front-End Dev", imgSrc: "/Assets/Course/course4.jpg", logo: logos.Meta },
//         { id: 5, title: "Duke University AI Fundamentals", imgSrc: "/Assets/Course/course5.jpg", logo: logos.Duke_University },
//         { id: 6, title: "Stanford Machine Learning", imgSrc: "/Assets/Course/course6.jpg", logo: logos.Stanford_University },
//         { id: 7, title: "Cambridge Data Science", imgSrc: "/Assets/Course/course7.jpg", logo: logos.University_of_Cambridge },
//         { id: 8, title: "Oxford Cyber Security", imgSrc: "/Assets/Course/course8.jpg", logo: logos.University_of_Oxford },
//     ];

//     const mainCourses = courses.slice(0, 4);
//     const additionalCourses = courses.slice(4);

//     const toggleAdditionalCourses = () => {
//         setShowAdditionalCourses(!showAdditionalCourses);
//     };

//     const toggleNewAdditionalCourses = () => {
//         setShowNewAdditionalCourses(!showNewAdditionalCourses);
//     };

//     const renderCourses = (courseList) => {
//         return (
//             <div className="row">
//                 {courseList.map(course => (
//                     <div key={course.id} className="col-md-3 col-sm-6 mb-4">
//                         <Link to={`/courses/${course.id}`} className="text-decoration-none">
//                             <div className="card h-100 d-flex flex-column justify-content-between">
//                                 <img src={course.imgSrc} className="card-img-top" alt={course.title} />
//                                 <div className="card-body d-flex flex-column">
//                                     <div className="course-logos">
//                                         {course.logo && <img src={course.logo} alt="Course Logo" />}
//                                     </div>
//                                     <h5 className="card-title">{course.title}</h5>
//                                     <div className="mt-auto">
//                                         <p className="card-text text-primary">Advance in Your Degree Program</p>
//                                         <p className="card-text text-muted">Professional Certificate</p>
//                                     </div>
//                                 </div>
//                             </div>
//                         </Link>
//                     </div>
//                 ))}
//             </div>
//         );
//     };

//     return (
//         <div>
//             {/* Main Courses Section */}
//             <div className="container my-5">
//                 <h5 className="mb-1" style={{ fontWeight: '600', color: '#382d8b' }}>Professional Specializations and Certification Courses</h5>
//                 <h3 className="mb-1">Most Popular Certificates</h3>
//                 <h5 className="mb-4">Explore our most popular programs, get job-ready for an in-demand career.</h5>
//                 {renderCourses(mainCourses)}

//                 {/* Additional Courses */}
//                 <div className={`row mt-4 ${showAdditionalCourses ? 'fade-in' : 'd-none'}`}>
//                     {renderCourses(additionalCourses)}
//                 </div>

//                 {/* Button Container */}
//                 <div className="button-container">
//                     <button type="button" className="btn btn-primary me-2" onClick={toggleAdditionalCourses}>
//                         {showAdditionalCourses ? 'Show Less' : 'Show More'}
//                     </button>
//                     <button type="button" className="btn btn-outline-primary">View all</button>
//                 </div>
//             </div>

//             {/* New Courses Section */}
//             <div className="container my-5" style={{
//                 backgroundImage: 'url(/Assets/Background/Image2.jpg)',
//                 backgroundSize: 'cover',
//                 backgroundPosition: 'center',
//                 backgroundRepeat: 'no-repeat',
//                 padding: '30px',
//                 width: '100%'
//             }}>
//                 <h5 className="mb-1" style={{ fontWeight: '600', color: '#382d8b' }}>Professional Specializations and Certification Courses</h5>
//                 <h3 className="mb-1">Most Popular Certificates</h3>
//                 <h5 className="mb-4">Explore our most popular programs, get job-ready for an in-demand career.</h5>
//                 {renderCourses(mainCourses)}

//                 {/* Additional New Courses */}
//                 <div className={`row mt-4 ${showNewAdditionalCourses ? 'fade-in' : 'd-none'}`}>
//                     {renderCourses(additionalCourses)}
//                 </div>

//                 {/* Button Container */}
//                 <div className="button-container">
//                     <button type="button" className="btn btn-primary me-2" onClick={toggleNewAdditionalCourses}>
//                         {showNewAdditionalCourses ? 'Show Less' : 'Show More'}
//                     </button>
//                     <button type="button" className="btn btn-outline-light">View all</button>
//                 </div>
//             </div>

//             <style>{`
//                 .card {
//                     transition: transform 0.3s ease, box-shadow 0.3s ease;
//                     padding: 8px;
//                     border-radius: 8px;
//                     display: flex;
//                     flex-direction: column;
//                     justify-content: space-between;
//                     height: 100%;
//                 }
//                 .card-body {
//                     flex-grow: 1;
//                     display: flex;
//                     flex-direction: column;
//                 }
//                 .card-title {
//                     font-size: 17.5px;
//                     font-weight: 600;
//                 }
//                 .card-text {
//                     font-size: 0.9rem;
//                 }
//                 .course-logos {
//                     display: flex;
//                     align-items: center;
//                     margin-bottom: 10px;
//                     justify-content: left;
//                 }
//                 .course-logos img {
//                     height: 15px;
//                     width: auto;
//                     margin-right: 10px;
//                 }
//                 .button-container {
//                     display: flex;
//                     justify-content: flex-start;
//                     margin-top: 20px;
//                 }
//                 .fade-in {
//                     animation: fadeIn 0.5s ease-out;
//                 }
//                 @media (max-width: 576px) {
//                     .course-logos img {
//                         height: 30px;
//                     }
//                     .container h3 {
//                         font-size: 36px;
//                     }
//                 }
//                 .row .col-md-3, .row .col-sm-6 {
//                     display: flex;
//                     flex-direction: column;
//                     align-items: stretch;
//                 }
//             `}</style>
//         </div>
//     );
// }
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
                <h5 className="mb-1" style={{ fontSize: '17.5px', fontWeight: '600', color: '#382d8b' }}>Professional Specializations and Certification Courses</h5>
                <h3 className="mb-1" style={{ fontSize: '50px', fontWeight: '400' }}>Most Popular Certificates</h3>
                <h5 className="mb-4" style={{ fontSize: '25px', fontWeight: '400' }}>Explore our most popular programs, get job-ready for an in-demand career.</h5>
                <div className="row">
                    {mainCourses.map(course => (
                        <div key={course.id} className="col-md-3 col-sm-6 mb-4">
                            <Link to={`/courses/${course.id}`} className="text-decoration-none">
                                <div className="card" style={{ height: '22rem' }}>
                                    <img src={course.imgSrc} className="card-img-top" alt={course.title} style={{ height: '50%', objectFit: 'cover', borderRadius: '12px' }} />
                                    <div className="card-body d-flex flex-column">
                                        <div className="course-logos">
                                            {course.logo && <img src={course.logo} alt="Course Logo" />}
                                        </div>
                                        <h5 className="card-title" style={{ fontSize: '17.5px', fontWeight: '600' }}>{course.title}</h5>
                                        <div className="mt-auto">
                                            <p className="card-text mb-0 text-primary" style={{ fontSize: '0.9rem' }}>Advance in Your Degree Program</p>
                                            <p className="card-text mb-0 text-muted" style={{ fontSize: '0.8rem' }}>Professional Certificate</p>
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
                                <div className="card" style={{ height: '22rem' }}>
                                    <img src={course.imgSrc} className="card-img-top" alt={course.title} style={{ height: '50%', objectFit: 'cover', borderRadius: '12px' }} />
                                    <div className="card-body d-flex flex-column">
                                        <div className="course-logos">
                                            {course.logo && <img src={course.logo} alt="Course Logo" />}
                                        </div>
                                        <h5 className="card-title" style={{ fontSize: '17.5px', fontWeight: '600' }}>{course.title}</h5>
                                        <div className="mt-auto">
                                            <p className="card-text mb-0 text-primary" style={{ fontSize: '0.8rem' }}>Advance in Your Degree Program</p>
                                            <p className="card-text mb-0 text-muted" style={{ fontSize: '0.8rem' }}>Professional Certificate</p>
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

            <div className="container my-5">
                <h5 className="mb-1" style={{ fontSize: '17.5px', fontWeight: '600', color: '#382d8b' }}>Professional Specializations and Certification Courses</h5>
                <h3 className="mb-1" style={{ fontSize: '50px', fontWeight: '400' }}>Most Popular Certificates</h3>
                <h5 className="mb-4" style={{ fontSize: '25px', fontWeight: '400' }}>Explore our most popular programs, get job-ready for an in-demand career.</h5>
                <div className="row">
                    {mainCourses.map(course => (
                        <div key={course.id} className="col-md-3 col-sm-6 mb-4">
                            <Link to={`/courses/${course.id}`} className="text-decoration-none">
                                <div className="card" style={{ height: '22rem' }}>
                                    <img src={course.imgSrc} className="card-img-top" alt={course.title} style={{ height: '50%', objectFit: 'cover', borderRadius: '12px' }} />
                                    <div className="card-body d-flex flex-column">
                                        <div className="course-logos">
                                            {course.logo && <img src={course.logo} alt="Course Logo" />}
                                        </div>
                                        <h5 className="card-title" style={{ fontSize: '17.5px', fontWeight: '600' }}>{course.title}</h5>
                                        <div className="mt-auto">
                                            <p className="card-text mb-0 text-primary" style={{ fontSize: '0.9rem' }}>Advance in Your Degree Program</p>
                                            <p className="card-text mb-0 text-muted" style={{ fontSize: '0.8rem' }}>Professional Certificate</p>
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
                                <div className="card" style={{ height: '22rem' }}>
                                    <img src={course.imgSrc} className="card-img-top" alt={course.title} style={{ height: '50%', objectFit: 'cover', borderRadius: '12px' }} />
                                    <div className="card-body d-flex flex-column">
                                        <div className="course-logos">
                                            {course.logo && <img src={course.logo} alt="Course Logo" />}
                                        </div>
                                        <h5 className="card-title" style={{ fontSize: '17.5px', fontWeight: '600' }}>{course.title}</h5>
                                        <div className="mt-auto">
                                            <p className="card-text mb-0 text-primary" style={{ fontSize: '0.8rem' }}>Advance in Your Degree Program</p>
                                            <p className="card-text mb-0 text-muted" style={{ fontSize: '0.8rem' }}>Professional Certificate</p>
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
                    padding: 8px;
                    border-radius: 8px;
                }
                .card:hover {
                    transform: scale(1.05);
                    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
                }
                .card-img-top {
                    border-radius: 8px;
                }
                .course-logos {
                    display: flex;
                    align-items: center;
                    margin-bottom: 10px;
                    justify-content: left; /* Align logos to the left */
                }
                .course-logos img {
                    height: 15px; /* Adjust logo height */
                    width: auto;
                    margin-right: 10px;
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
                        height: 30px; /* Smaller logos for small screens */
                    }
                    .container h3 {
                        font-size: 36px; /* Smaller heading for small screens */
                    }
                }
            `}</style>
        </div>
    )
}