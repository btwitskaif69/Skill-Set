import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SignUp from "../SignUp";
import LogIn from "../LogIn";

export default function SmallScreenCarousel() {
  const [activeForm, setActiveForm] = useState(null); // null, 'signup', or 'login'

  useEffect(() => {
    const carouselElement = document.getElementById("carouselExampleCaptions");
    if (carouselElement) {
      new window.bootstrap.Carousel(carouselElement, {
        interval: 4000, // 4 seconds
        ride: "carousel",
      });
    }
  }, []);

  const handleOnSignUp = () => {
    setActiveForm("signup");
  };

  const closeForm = () => {
    setActiveForm(null);
  };

  const switchToSignUp = () => {
    setActiveForm("signup");
  };

  const switchToLogin = () => {
    setActiveForm("login");
  };

  return (
    <div className="container p-4 align-items-center my-4" >
      <h1 className="display-3 fw-bold text-center" style={{ color:"#210BE3"}}>
        Get job ready with new AI skills
      </h1>
      <p className="fs-4 text-dark text-center">
        Stand out to employers with an industry-leading Professional Certificate
        and must-have AI skills from top companies.
      </p>
      <button className="btn custom-button-default-transparent mb-2 w-100">
        <Link to="/Courses" className="nav-link ">
          Explore certificates
        </Link>
      </button>
      <button
        className="btn custom-button-default-transparent mb-2 w-100"
        onClick={handleOnSignUp}
      >
        Join for free
      </button>

      {activeForm === "signup" && (
        <SignUp onClose={closeForm} switchToLogin={switchToLogin} />
      )}
      {activeForm === "login" && (
        <LogIn onClose={closeForm} switchToSignUp={switchToSignUp} />
      )}
    </div>
  );
}
