import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';


export default function Carousel() {
    const carouselHeight = '600px';

    useEffect(() => {
        const carouselElement = document.getElementById('carouselExampleCaptions');
        if (carouselElement) {
            new window.bootstrap.Carousel(carouselElement, {
                interval: 4000, // 4 seconds
                ride: 'carousel'
            });
        }
    }, []);

    return (
        <div id="carouselExampleCaptions" className="carousel slide" style={{ height: carouselHeight }}>
            <div className="carousel-inner">
                {/* First Slide */}
                <div className="carousel-item active">
                    <img src="/Assets/Slides/FirstSlide.jpg" className="d-block w-100" alt="First slide" style={{ height: carouselHeight, objectFit: 'cover' }} />
                    <div className="carousel-caption d-flex flex-column justify-content-center align-items-start" style={{ top: '50%', transform: 'translateY(-50%)', left: '10%', textAlign: 'left', maxWidth: '500px' }}>
                        <h1 className="display-4 text-dark" style={{ fontWeight: '500' }}>Get job ready with new AI skills</h1>
                        <p className="lead text-dark" style={{ fontWeight: '400' }}>Stand out to employers with an industry-leading Professional Certificate and must-have AI skills from top companies.</p>
                        <div>
                            <button className="btn custom-button-normal btn-lg me-3"><Link Courses to='/Courses' className="nav-link">Explore certificates</Link></button>
                            <button className="btn btn-outline-primary btn-lg custom-join-btn">Join for free</button>

                        </div>
                    </div>
                </div>
                
                {/* Second Slide */}
                <div className="carousel-item">
                    <img src="/Assets/Slides/SecondSlide.jpg" className="d-block w-100" alt="Second slide" style={{ height: carouselHeight, objectFit: 'cover' }} />
                    <div className="carousel-caption d-flex flex-column justify-content-center align-items-start" style={{ top: '50%', transform: 'translateY(-50%)', left: '10%', textAlign: 'left', maxWidth: '500px' }}>
                        <h1 className="display-4 text-dark" style={{ fontWeight: '500' }}>Master AI and data science</h1>
                        <p className="lead text-dark" style={{ fontWeight: '400' }}>Earn credentials that showcase your expertise in AI and data science, opening doors to new career opportunities.</p>
                        <div>
                            <button className="btn btn-primary btn-lg custom-button-normal me-3">Start learning</button>
                            <button className="btn btn-outline-light btn-lg custom-join-btn">Discover more</button>
                        </div>
                    </div>
                </div>
                
                {/* Third Slide */}
                <div className="carousel-item">
                    <img src="/Assets/Slides/ThirdSlide.jpg" className="d-block w-100" alt="Third slide" style={{ height: carouselHeight, objectFit: 'cover' }} />
                    <div className="carousel-caption d-flex flex-column justify-content-center align-items-start" style={{ top: '50%', transform: 'translateY(-50%)', left: '10%', textAlign: 'left', maxWidth: '500px' }}>
                        <h1 className="display-4 text-dark" style={{ fontWeight: '500' }}>Advance your career with AI</h1>
                        <p className="lead text-dark" style={{ fontWeight: '400' }}>Leverage AI skills to lead in your field, with training from world-renowned experts.</p>
                        <div>
                            <button className="btn btn-primary btn-lg custom-button-normal me-3">Enroll Now</button>
                        </div>
                    </div>
                </div>
            </div>

            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>

            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>

            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>

            <style>{`
                .carousel-item {
                    transition: transform 0.75s ease-in-out;
                }
                .carousel-control-prev, .carousel-control-next {
                    width: 5%;
                }
                .carousel-indicators {
                    bottom: 10px;
                }
            `}</style>
        </div>
    );
}
