import React, { useRef } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = [
  {
    id: 1,
    text: `Skillset's courses transformed the way I approach learning. With a strong focus on real-world applications, the platform enabled me to balance my professional life while developing new skills. I could implement what I learned immediately, which has been crucial in driving my career forward and achieving continuous growth.`,
    name: 'David Miller',
    role: 'Software Engineer, USA',
    image: '/Assets/Profile/image1.jpg'
  },
  {
    id: 2,
    text: `Skillset made online learning both effective and highly practical. The courses’ emphasis on real-world scenarios allowed me to improve my skills in no time. I could apply the knowledge directly in my current role, which led to a promotion. This practical approach has been a game-changer for my career progression.`,
    name: 'John Carter',
    role: 'Project Manager, Canada',
    image: '/Assets/Profile/image2.jpg'
  },
  {
    id: 3,
    text: `Skillset helped bridge the gap between academic learning and industry-relevant skills. The platform's hands-on experience meant that I could apply everything I learned in real time, directly impacting my performance at work. This practical focus has been crucial in advancing my career and making the learning experience truly meaningful.`,
    name: 'Michael Rodriguez',
    role: 'Data Analyst, Australia',
    image: '/Assets/Profile/image3.jpg'
  },
  {
    id: 4,
    text: `As a working mom, it was tough to find the time to upskill, but Skillset’s flexibility made it possible. The courses are tailored for real-world applications, and I could balance my job and family life while progressing in my career. Skillset has been a vital part of my personal and professional growth.`,
    name: 'Emily Johnson',
    role: 'UX Designer, UK',
    image: '/Assets/Profile/image4.jpg'
  },
  {
    id: 5,
    text: `Skillset’s flexible courses allowed me to pursue coding while working full-time. The focus on real-world applications made the learning process engaging and practical. I could apply my new skills right away, which had a significant impact on my career, making Skillset an essential part of my professional journey.`,
    name: 'Ryan Smith',
    role: 'Full Stack Developer, Germany',
    image: '/Assets/Profile/image5.jpg'
  },
  {
    id: 6,
    text: `Skillset gave me the tools to explore AI and machine learning in-depth. The platform’s real-world focus ensured that I could apply the skills right away, leading to my dream job. This practical approach to learning has been a critical factor in my rapid career progression in the tech industry.`,
    name: 'James Brown',
    role: 'AI Engineer, India',
    image: '/Assets/Profile/image6.jpg'
  },
  {
    id: 7,
    text: `Skillset’s practical courses in cybersecurity were exactly what I needed to enhance my performance at work. The focus on real-world applications made learning incredibly impactful, and I could implement what I learned right away, leading to both personal confidence and significant career growth.`,
    name: 'Chris Wilson',
    role: 'Cybersecurity Specialist, Singapore',
    image: '/Assets/Profile/image7.jpg'
  },
  {
    id: 8,
    text: `Skillset’s community and mentorship helped make my learning experience engaging and productive. The focus on real-world applications allowed me to apply new skills immediately, helping me transition into a leadership role. The combination of practical learning and guidance has been key to my growth and success.`,
    name: 'Mark Thompson',
    role: 'Technical Lead, South Africa',
    image: '/Assets/Profile/image8.jpg'
  },
  {
    id: 9,
    text: `Skillset’s hands-on learning approach and focus on real-world projects made all the difference in my journey as a self-taught programmer. The platform enabled me to apply new skills immediately in my role, providing a seamless and practical way to advance in my career.`,
    name: 'Jason Lee',
    role: 'Software Developer, South Korea',
    image: '/Assets/Profile/image9.jpg'
  },
  {
    id: 10,
    text: `Skillset’s top-notch courses emphasize real-world applications, which helped me seamlessly transition into a new industry. The practical, hands-on approach enabled me to apply new skills in my role effectively, and the platform has been instrumental in driving my professional growth and success.`,
    name: 'Paul Martin',
    role: 'Cloud Architect, Brazil',
    image: '/Assets/Profile/image10.jpg'
  },
];











const Testimonial = () => {
  const sliderRef = useRef(null); // Create a ref for the slider

  // Slider settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false, // Disable default arrows since we'll use custom buttons
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "ease-in-out",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const next = () => {
    sliderRef.current.slickNext(); // Call the next slide
  };

  const previous = () => {
    sliderRef.current.slickPrev(); // Call the previous slide
  };

  return (
    <div className="testimonial-container" style={{ backgroundColor: '#f5f7fa', padding: '2rem 3rem', margin: '4rem 0rem' }}>
      <div className="row mb-8 justify-content-center">
        <div className="col-lg-8 col-md-12 col-12 text-center">
          <span className="testimonial-heading mb-1 d-block text-uppercase fw-semibold fs-4" style={{ color: '#210BE3' }}>Testimonials</span>
          <h2 className="testimonial-title mb-1 display-4 fw-semibold" style={{ color: 'black' }}>What our learners are saying</h2>
          <p className="testimonial-subtitle fs-5 mb-1">1+ million people are already learning on Skill Set</p>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12">
          <Slider ref={sliderRef} {...settings}>
            {Testimonials.map((testimonial) => (
              <div className="testimonial-item px-0" key={testimonial.id} style={{ marginRight: '1.5rem' }}>
                <div className="testimonial-card border p-4 rounded my-4 mx-4 rounded-3 mx-1">
                  <div className='testimonial-stars mb-2' style={{ color: '#f59e0b', fontSize: '20px' }}>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                  </div>
                  <div className="testimonial-card-body" style={{ flexGrow: '1' }}>
                    <p className="testimonial-text lead text-dark fs-6 fw-medium" style={{ maxHeight: '150px', overflow: 'hidden', textOverflow: 'ellipsis', textAlign: 'justify' }}>"{testimonial.text}"</p>
                  </div>

                  <div className="testimonial-card-footer d-flex align-items-center pt-2 border-0">
                    <img src={testimonial.image} alt={testimonial.name} className="testimonial-image rounded-circle me-3" style={{ objectFit: 'cover' }} width="60" height="60" />
                    <div>
                      <h5 className="testimonial-name mb-0 fw-bold">{testimonial.name}</h5>
                      <p className="testimonial-role mb-0 small text-muted">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
          <div className="d-flex justify-content-center">
            <button onClick={previous} className="btn btn-light rounded-circle mt-1 mx-2"><i className="bi bi-chevron-left"></i></button>
            <button onClick={next} className="btn btn-light rounded-circle mt-1 mx-2"><i className="bi bi-chevron-right"></i></button>
          </div>
        </div>
      </div>

      <style>{`
        .testimonial-card {
          background-color: #ffffff;
          padding: 2rem;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          height: 325px; /* Set a fixed height for the card */
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .testimonial-card:hover {
          transform: scale(1.05);
          /* Smoother and more subtle shadow on hover */
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
        }
      `}</style>

    </div>
  );
};

export default Testimonial;