import React, { useRef } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = [
  {
    id: 1,
    text: `Skillset has been a game-changer for me. The courses are comprehensive, and I could immediately apply the skills I learned to my job.`,
    name: 'David Miller',
    role: 'Software Engineer, USA',
    image: '/Assets/Profile/image1.jpg'
  },
  {
    id: 2,
    text: `I never thought learning online could be this effective. Thanks to Skillset, I was able to secure a promotion at my company.`,
    name: 'John Carter',
    role: 'Project Manager, Canada',
    image: '/Assets/Profile/image2.jpg'
  },
  {
    id: 3,
    text: `Skillset helped me bridge the gap between academic knowledge and industry-relevant skills. It’s been invaluable to my career development.`,
    name: 'Michael Rodriguez',
    role: 'Data Analyst, Australia',
    image: '/Assets/Profile/image3.jpg'
  },
  {
    id: 4,
    text: `As a working mom, finding time to upskill was challenging. Skillset made it possible to learn at my own pace and advance my career.`,
    name: 'Emily Johnson',
    role: 'UX Designer, UK',
    image: '/Assets/Profile/image4.jpg'
  },
  {
    id: 5,
    text: `The flexibility that Skillset offers has allowed me to pursue my passion for coding while balancing my full-time job.`,
    name: 'Ryan Smith',
    role: 'Full Stack Developer, Germany',
    image: '/Assets/Profile/image5.jpg'
  },
  {
    id: 6,
    text: `With Skillset, I was able to dive deep into AI and machine learning, which helped me land my dream job at a top tech company.`,
    name: 'James Brown',
    role: 'AI Engineer, India',
    image: '/Assets/Profile/image6.jpg'
  },
  {
    id: 7,
    text: `The practical approach of Skillset's courses allowed me to apply new skills immediately in my current role.`,
    name: 'Chris Wilson',
    role: 'Cybersecurity Specialist, Singapore',
    image: '/Assets/Profile/image7.jpg'
  },
  {
    id: 8,
    text: `Skillset’s community and mentorship made my learning journey engaging and supported my growth into a leadership role.`,
    name: 'Mark Thompson',
    role: 'Technical Lead, South Africa',
    image: '/Assets/Profile/image8.jpg'
  },
  {
    id: 9,
    text: `Skillset's hands-on approach and real-world projects have been key to my success as a self-taught programmer.`,
    name: 'Jason Lee',
    role: 'Software Developer, South Korea',
    image: '/Assets/Profile/image9.jpg'
  },
  {
    id: 10,
    text: `The quality of the courses at Skillset is top-notch, and it allowed me to transition into a new industry seamlessly.`,
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
    <div className="testimonial-container">
      <div className="row mb-8 justify-content-center">
        <div className="col-lg-8 col-md-12 col-12 text-center">
          <span className="testimonial-heading text-primary mb-3 d-block text-uppercase fw-semibold ls-xl">Testimonials</span>
          <h2 className="testimonial-title mb-2 display-4 fw-bold">What our learners are saying</h2>
          <p className="testimonial-subtitle lead">1+ million people are already learning on Skill Set</p>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12">
          <Slider ref={sliderRef} {...settings}>
            {Testimonials.map((testimonial) => (
              <div className="testimonial-item px-3" key={testimonial.id}>
                <div className="testimonial-card border shadow-none p-4 rounded">
                  <div className="testimonial-card-body">
                    <div className="mb-2">
                      <span className="testimonial-stars fs-4">
                        <i className="mdi mdi-star text-warning me-n1"></i>
                        <i className="mdi mdi-star text-warning me-n1"></i>
                        <i className="mdi mdi-star text-warning me-n1"></i>
                        <i className="mdi mdi-star text-warning me-n1"></i>
                        <i className="mdi mdi-star text-warning"></i>
                      </span>
                    </div>
                    <p className="testimonial-text lead text-dark font-italic fw-medium mb-4">"{testimonial.text}"</p>
                  </div>
                  <div className="testimonial-card-footer d-flex align-items-center pt-4 border-0">
                    <img src={testimonial.image} alt={testimonial.name} className="testimonial-image rounded-circle me-3" width="60" height="60" />
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
            <button onClick={previous} className="btn btn-light bi bi-chevron-left rounded-circle my-4"></button>
            <button onClick={next} className="btn btn-light bi bi-chevron-right rounded-circle my-4"></button>
          </div>
        </div>
      </div>

      <style>{`
          .testimonial-container {
          background-color: #f5f7fa;
          padding: 4rem 5rem;
          margin: 5rem;
        }

        .testimonial-card {
          background-color: #ffffff;
          border-radius: 12px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          padding: 2rem;
          transition: transform 0.4s ease, box-shadow 0.4s ease;
        }

        .testimonial-card:hover {
          transform: scale(1.05);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
        }

        .testimonial-item {
          margin-right: 1.5rem;
        }

        .testimonial-card-footer {
          display: flex;
          align-items: center;
          padding-top: 1.5rem;
          border-top: none;
        }

        .testimonial-card-body {
          padding-bottom: 0;
        }

        .testimonial-image {
          border-radius: 50%;
          object-fit: cover;
        }

        .testimonial-stars i {
          font-size: 1.25rem;
        }

        .testimonial-heading {
          color: #6f42c1;
        }

        .testimonial-title {
          font-weight: 700;
        }


      `}</style>
    </div>
  );
};

export default Testimonial;
