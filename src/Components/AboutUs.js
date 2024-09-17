import React from 'react';

export default function AboutUs() {
  return (
    <div className="container mt-5 mb-5">
      <div className="row justify-content-center">
        {/* Introduction Section */}
        <div className="col-md-10 text-center mb-5">
          <h1 className="fw-bold mb-4" style={{ color: '#210BE3', fontSize: '2.5rem' }}>About Skill Set</h1>
          <p className="lead" style={{ fontSize: '20px', color: '#555', lineHeight: '1.7' }}>
            Welcome to <strong>Skill Set</strong>! A platform committed to equipping learners with cutting-edge skills in the tech industry. With our diverse course catalog, created in partnership with leading universities and top-tier companies, we aim to bridge the gap between education and industry needs.
          </p>
        </div>

        {/* Vision and Mission Section */}
<div className="row justify-content-center">
  <div className="col-md-5 d-flex mb-4">
    <div className="vision-mission-box p-4 flex-grow-1" style={{ border: '2px solid #210BE3', borderRadius: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <h3 className="fw-bold" style={{ color: '#000000' }}>Our Vision</h3>
      <p style={{ fontSize: '18px', color: '#555', lineHeight: '1.7' }}>
        Our vision is a future where high-quality education is available to anyone, anywhere. We strive to create an inclusive platform where learners can gain the skills they need to thrive in the digital economy, regardless of their background or experience level.
      </p>
    </div>
  </div>

  <div className="col-md-5 d-flex mb-4">
    <div className="vision-mission-box p-4 flex-grow-1" style={{ border: '2px solid #210BE3', borderRadius: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <h3 className="fw-bold" style={{ color: '#000000' }}>Our Mission</h3>
      <p style={{ fontSize: '18px', color: '#555', lineHeight: '1.7' }}>
        Our mission is to empower students and professionals by providing courses developed with the latest industry standards. Through strategic partnerships with renowned institutions and industry leaders, we offer tailored programs that help individuals unlock their full potential.
      </p>
    </div>
  </div>
</div>


        {/* Core Values Section */}
        <div className="col-md-10 mt-5 text-center">
          <h3 className="fw-bold mb-4" style={{ color: '#000000' }}>Our Core Values</h3>
          <div className="row d-flex justify-content-center">
            <div className="col-md-4 d-flex">
              <div className="value-box p-3 flex-grow-1 d-flex flex-column mb-4" style={{ border: '1px solid #ddd', borderRadius: '8px' }}>
                <h5 className="fw-semibold" style={{ color: '#210BE3' }}>Innovation</h5>
                <p style={{ fontSize: '16px', color: '#555', flexGrow: '1' }}>
                  We are committed to staying at the forefront of technology, continuously updating our courses to reflect the latest trends and innovations in the tech industry.
                </p>
              </div>
            </div>
            <div className="col-md-4 d-flex">
              <div className="value-box p-3 flex-grow-1 d-flex flex-column mb-4" style={{ border: '1px solid #ddd', borderRadius: '8px' }}>
                <h5 className="fw-semibold" style={{ color: '#210BE3' }}>Accessibility</h5>
                <p style={{ fontSize: '16px', color: '#555', flexGrow: '1' }}>
                  Our platform is designed for learners from all walks of life, offering flexible, affordable, and accessible courses for everyone.
                </p>
              </div>
            </div>
            <div className="col-md-4 d-flex">
              <div className="value-box p-3 flex-grow-1 d-flex flex-column mb-4" style={{ border: '1px solid #ddd', borderRadius: '8px' }}>
                <h5 className="fw-semibold" style={{ color: '#210BE3' }}>Excellence</h5>
                <p style={{ fontSize: '16px', color: '#555', flexGrow: '1' }}>
                  We aim for excellence in every course we deliver, ensuring that our learners receive the highest quality of education and practical skills.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Meet the Developer Section */}
        <div className="col-md-10 mt-5 text-center">
          <h3 className="fw-bold mb-4" style={{ color: '#000000' }}>Meet the Developer</h3>
          <p className="lead" style={{ fontSize: '18px', color: '#555', lineHeight: '1.7' }}>
  <strong>Mohd Kaif</strong>, the creator of Skill Set, is a passionate and driven web developer with a deep interest in frontend and backend technologies. His goal is to build projects that not only solve real-world problems but also provide meaningful learning experiences. Mohd is currently pursuing a Bachelor of Computer Applications (BCA) from Indira Gandhi National Open University (IGNOU) and constantly seeks to improve his skills in modern web technologies.
</p>

          <div className="text-center mt-4">
            <a href="https://www.linkedin.com/in/btwitskaif69/" target="_blank" rel="noreferrer" className="btn custom-button-default me-2">
              <i className="bi bi-linkedin"></i> LinkedIn
            </a>
            <a href="https://github.com/btwitskaif69" target="_blank" rel="noreferrer" className="btn custom-button-default me-2">
              <i className="bi bi-github"></i> GitHub
            </a>
            <a href="https://x.com/btwitskaif69/" target="_blank" rel="noreferrer" className="btn custom-button-default">
              <i className="bi bi-twitter"></i> Twitter
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
