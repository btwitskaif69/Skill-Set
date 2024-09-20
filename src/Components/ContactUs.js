import React, { useState } from 'react';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    alert('Your message has been submitted successfully!');
    setFormData({ name: '', email: '', message: '' }); // Reset form after submission
  };

  return (
    <div className="contact-page" style={{padding: '50px 0' }}>
      <div className="container mt-5 mb-5">
        <div className="row">
          {/* Contact Information Section */}
          <div className="col-md-6 mb-4">
            <h2 className="mb-4 fw-bold" style={{color:'#210BE3'}}>Contact Us</h2>
            <p style={{ fontSize: '18px'}}>
              We're here to help! If you have any questions or need assistance, feel free to reach out to us.
            </p>
            <ul className="list-unstyled">
              <li className="mb-3 d-flex align-items-center" style={{ fontSize: '20px'}}>
                <i className="bi bi-envelope-fill me-2" style={{color:'#210BE3'}}></i>
                mohdkaif18th@gmail.com
              </li>
              <li className="mb-3 d-flex align-items-center" style={{ fontSize: '20px'}}>
                <a href="https://www.linkedin.com/in/btwitskaif69/" target="_blank" rel="noreferrer">
                  <i className="bi bi-linkedin me-3" style={{ color: '#210BE3'}}></i>
                </a>
                <a href="https://x.com/btwitskaif69/" target="_blank" rel="noreferrer">
                  <i className="bi bi-twitter me-3" style={{ color: '#210BE3'}}></i>
                </a>
                <a href="https://github.com/btwitskaif69" target="_blank" rel="noreferrer">
                  <i className="bi bi-github" style={{ color: '#210BE3'}}></i>
                </a>
              </li>

            </ul>
          </div>

          {/* Contact Form Section */}
          <div className="col-md-6">
            <h2 className="mb-4 fw-bold" style={{color:'#210BE3'}}>Send Us a Message</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label" style={{ fontSize: '16px', color: '#555' }}>Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label" style={{ fontSize: '16px', color: '#555' }}>Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label" style={{ fontSize: '16px', color: '#555' }}>Message</label>
                <textarea className="form-control" id="message" name="message" rows="4" placeholder="Your Message" value={formData.message} onChange={handleChange} required></textarea>
              </div>
              <button type="submit" className="btn custom-button-default"> Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
