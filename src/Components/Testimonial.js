import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = [
  {
    id: 1,
    text: `I started at stage zero. With Geeks I was able to start learning online and eventually build up enough knowledge and skills to transition into a well-paying career.`,
    name: 'Barry Watson',
    role: 'Web Developer, UK',
    image: '/Assets/Users/user1.jpg' // Replace with the correct path to the image
  },
  {
    id: 2,
    text: `Sed pretium risus magna, ac efficitur nunc rutrum imperdiet. Vivamus sed ante sed mi fermentum tempus. Nullam finibus augue eget felis efficitur semper.`,
    name: 'Jean Watson',
    role: 'Engineering Architect',
    image: '/Assets/Users/user2.jpg'
  },
  {
    id: 3,
    text: `Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vulputate euismod justo in consequat.`,
    name: 'Linda Shenoy',
    role: 'Developer and Bootcamp Instructor',
    image: '/Assets/Users/user3.jpg'
  },
  // Add more testimonials here
];

const Testimonial = () => {
  // Slider settings
  const settings = {
    dots: false, // Disable dots
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false, // Disable default arrows
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
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

  let sliderRef = React.createRef();

  return (
    <div className="testimonial-container">
      <div className="row mb-8 justify-content-center">
        <div className="col-lg-8 col-md-12 col-12 text-center">
          <span className="testimonial-heading text-primary mb-3 d-block text-uppercase fw-semibold ls-xl">Testimonials</span>
          <h2 className="testimonial-title mb-2 display-4 fw-bold">Don’t just take our word for it.</h2>
          <p className="testimonial-subtitle lead">12+ million people are already learning on Geeks</p>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12">
          <Slider ref={slider => (sliderRef = slider)} {...settings}>
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
          <div className="testimonial-controls d-flex justify-content-center mt-4">
            <button className="slick-prev custom-prev" onClick={() => sliderRef.slickPrev()}>
              &#8592; Prev
            </button>
            <button className="slick-next custom-next ms-3" onClick={() => sliderRef.slickNext()}>
              Next &#8594;
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .testimonial-container {
          background-color: #f5f7fa;
          padding-top: 4rem;
          padding-bottom: 4rem;
          padding-left: 5rem;
          padding-right: 5rem;
          margin: 5rem;
        }

        .testimonial-card {
          background-color: #ffffff;
          border-radius: 12px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          padding: 2rem;
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

        .testimonial-controls button {
          background-color: #ffffff;
          border-radius: 50%;
          border: none;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          width: 50px;
          height: 50px;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
        }

        .testimonial-controls button:hover {
          background-color: #e9ecef;
        }

        .testimonial-controls button:focus {
          outline: none;
        }

        .custom-prev::before, 
        .custom-next::before {
          color: #333333;
          font-size: 20px;
          content: '';
        }
      `}</style>
    </div>
  );
};

export default Testimonial;
