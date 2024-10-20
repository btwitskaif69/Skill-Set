import React, { useState} from "react";
import { Link } from "react-router-dom";
import SignUp from "../SignUp";
import LogIn from "../LogIn";

export default function SmallScreenCarousel() {
  const [activeForm, setActiveForm] = useState(null); // null, 'signup', or 'login'

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
    <div className="header">
    <div className="container p-4 align-items-center"   >
      <h1 className="display-3 fw-semibold text-center">
        Get job ready with new AI skills
      </h1>
      <p className="fs-4 fw-medium text-dark text-center">
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


<style>{`
          .header{
            background: linear-gradient(to bottom, #210BE3, white);
            color:black;
            }

            `}</style>
    </div>
    </div>
  );
}
