import React from 'react';

export default function Disclaimer() {
  return (
    <div className=" justify-content-center align-items-center" style={{ backgroundColor: '#f9f9f9' }}>
      <div className="container-lg text-center p-5">
        <h4 className="text-dark display-4 fw-medium mb-0">DISCLAIMER</h4>
        <p className="fs-4 fw-semibold mb-3">
          This is a personal project intended for educational and non-commercial purposes only.
        </p>
        <ul className="list-unstyled fw-bold" style={{fontSize: '0.9rem'}}>
          <li className= "fw-medium mb-3 text-center">
            All content used in this project, including logos, images, and text, are placeholders and not intended for distribution or commercial use.
          </li>
          <li className="fw-medium mb-3  text-center">
            Any personal information mentioned (e.g., names, enrollment numbers) is either fictional or used with consent.
          </li>
          <li className="fw-medium mb-3  text-center">
            
            This project may contain links or references to third-party materials, which are for reference purposes only.
          </li>
          <li className="fw-medium mb-3  text-center">
            
            The developer does not claim ownership of any third-party intellectual property included in this project.
          </li>
          <li className="fw-medium mb-3  text-center">
            
            If you are a rights holder and believe that any content used in this project violates your intellectual property, please contact the developer for immediate removal.
          </li>
          <li className="fw-medium mb-3  text-center">
            
            This project is solely for learning purposes, showcasing my skills in frontend and backend development, and improving my knowledge of modern web technologies.
          </li>
          <li className="fw-medium mb-3  text-center">
            
            My goal is to use this project as a portfolio piece to demonstrate my abilities to potential employers and secure a position in the tech industry.
          </li>
          <li className="fw-medium mb-3  text-center">
            
            The design, structure, and functionality of this application are built to showcase my expertise in web development and problem-solving skills.
          </li>
          <li className="fw-medium mb-3  text-center">
            
            While this project is built with real-world scenarios in mind, it is not intended for production use and exists to highlight my technical abilities.
          </li>
        </ul>
        <div className="alert alert-warning mt-4" role="alert">
          <strong>Note:</strong> This project is a work in progress, and all references or data are for demo purposes only.
        </div>
      </div>
    </div>
  );
}
