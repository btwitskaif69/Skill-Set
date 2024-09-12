import React from 'react';
import Navbar from './Navbar';

export default function ContactUs() {
  return (
    <div>
      <Navbar />
      <div className="container mt-5 mb-5">
        <div className="row">
          {/* Contact Information Section */}
          <div className="col-md-6 mb-4">
            <h2 className="mb-4" style={{ fontWeight: 'bold', color: '#333' }}>Contact Us</h2>
            <p style={{ fontSize: '18px', color: '#555' }}>
              We're here to help! If you have any questions or need assistance, feel free to reach out to us.
            </p>
            <ul className="list-unstyled">
              <li className="mb-3" style={{ fontSize: '18px', color: '#555' }}>
                <i className="bi bi-telephone" style={{ marginRight: '10px', color: '#210BE3' }}></i>
                +1 (234) 567-890
              </li>
              <li className="mb-3" style={{ fontSize: '18px', color: '#555' }}>
                <i className="bi bi-envelope" style={{ marginRight: '10px', color: '#210BE3' }}></i>
                contact@skillset.com
              </li>
              <li className="mb-3" style={{ fontSize: '18px', color: '#555' }}>
                <i className="bi bi-geo-alt" style={{ marginRight: '10px', color: '#210BE3' }}></i>
                123 Skill Set Ave, Suite 100, City, Country
              </li>
            </ul>
          </div>

          {/* Contact Form Section */}
          <div className="col-md-6">
            <h2 className="mb-4" style={{ fontWeight: 'bold', color: '#333' }}>Send Us a Message</h2>
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label" style={{ fontSize: '16px', color: '#555' }}>Name</label>
                <input type="text" className="form-control" id="name" placeholder="Your Name" />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label" style={{ fontSize: '16px', color: '#555' }}>Email</label>
                <input type="email" className="form-control" id="email" placeholder="Your Email" />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label" style={{ fontSize: '16px', color: '#555' }}>Message</label>
                <textarea className="form-control" id="message" rows="4" placeholder="Your Message"></textarea>
              </div>
              <button type="submit" className="btn btn-primary" style={{ backgroundColor: '#210BE3', borderColor: '#210BE3' }}>Send Message</button>
            </form>
          </div>
        </div>
      </div>

      {/* Google Maps Embed Section */}
      <div className="container mb-5">
        <h3 className="text-center mb-4" style={{ color: '#333' }}>Find Us Here</h3>
        <div className="embed-responsive embed-responsive-16by9">
          <iframe
            className="embed-responsive-item"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.052098044433!2d-122.08385198468103!3d37.386051979825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb6d1c8e39a0d%3A0x59d8d7f7f7f6f2a!2sGoogleplex!5e0!3m2!1sen!2sus!4v1631821326334!5m2!1sen!2sus"
            allowFullScreen
            style={{ border: 0, width: '100%', height: '400px' }}
            title="Google Maps Location"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
