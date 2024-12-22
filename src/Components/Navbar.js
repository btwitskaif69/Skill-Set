import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const Logo = {
    SKILL_SET: "/Assets/Logo/Skill_Set.svg",
  };

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const [isToggled, setIsToggled] = useState(false);

  // Toggle the icon between dash and X
  const toggleIcon = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg shadow-none" style={{backgroundColor: "white"}}>
        <div className="container-fluid">
          <Link to="/home" className="navbar-brand">
            <img
              src={Logo.SKILL_SET}
              alt="SKILL SET"
              style={{ height: "1.5rem" }}
            />
          </Link>

          {/* Offcanvas toggle button */}
          <a
            className="custom-button-close navbar-toggler border-0 p-0"
            href="#offcanvasRight"
            role="button"
            aria-controls="offcanvasRight"
            data-bs-toggle="offcanvas"
            aria-expanded={isToggled ? "true" : "false"}
            aria-label="Toggle navigation"
            onClick={toggleIcon}
          >
            <div className={`icon-container ${isToggled ? "toggled" : ""}`}>
              <div className="bar"></div>
              <div className="bar"></div>
            </div>
          </a>

          {/* Navbar Collapse */}
          <div
            className="collapse navbar-collapse mr-"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-0 mb-lg-0">
              <li className="nav-item me-2">
                <Link
                  to="/home"
                  className="nav-link fs-6 text-dark text-nowrap"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item me-2">
                <Link
                  to="/courses"
                  className="nav-link fs-6 text-dark text-nowrap"
                >
                  Courses
                </Link>
              </li>
              <li className="nav-item me-2">
                <Link
                  to="/about-us"
                  className="nav-link fs-6 text-dark text-nowrap"
                >
                  About Us
                </Link>
              </li>
              <li className="nav-item me-2">
                <Link
                  to="/contact-us"
                  className="nav-link fs-6 text-dark text-nowrap"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <div className="search-bar">
                  <form
                    className={
                      screenWidth > 991
                        ? "d-flex mb-0 me-2"
                        : "d-flex mb-2 me-2"
                    }
                    role="search"
                  >
                    <input
                      className="form-control me-2"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    />
                    <button
                      className="btn custom-button-default-white"
                      type="submit"
                    >
                      Search
                    </button>
                  </form>
                </div>
              </li>
            </ul>

            <div className="d-flex gap-2">
              <Link to="/api/login">
                <button
                  type="button"
                  className="btn custom-button-default-white text-nowrap"
                >
                  Log In
                </button>
              </Link>
              <Link to="/api/signup">
                <button
                  type="button"
                  className="btn custom-button-default text-nowrap"
                >
                  Sign Up
                </button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Offcanvas Menu */}
      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-body p-0">
          <ul className="navbar-nav me-auto mb-0 mb-lg-0">
            <li
              className="nav-item p-3 border-top border-bottom" data-bs-dismiss="offcanvas">
              <Link
                to="/home"
                className="nav-link fs-5 text-dark text-nowrap p-0 "
                aria-current="page"
              >
                <i className="bi bi-house-door"></i> Home
              </Link>
            </li>
            <li className="nav-item p-3  border-bottom" data-bs-dismiss="offcanvas">
              <Link
                to="/courses"
                className="nav-link fs-5 text-dark text-nowrap p-0"
              >
                <i className="bi bi-layers"></i> Courses
              </Link>
            </li>
            <li className="nav-item p-3  border-bottom" data-bs-dismiss="offcanvas">
              <Link
                to="/about-us"
                className="nav-link fs-5 text-dark text-nowrap p-0"
              >
                <i className="bi bi-info-square"></i> About Us
              </Link>
            </li>
            <li className="nav-item p-3  border-bottom" data-bs-dismiss="offcanvas">
              <Link
                to="/contact-us"
                className="nav-link fs-5 text-dark text-nowrap p-0"
              >
                <i className="bi bi-envelope"></i> Contact Us
              </Link>
            </li>
            <li>
              <div className="search-bar">
                <form
                  className={
                    screenWidth > 991 ? "d-flex mb-0 p-3 border-bottom" : "d-flex mb-2 p-3 border-bottom"
                  }
                  role="search"
                >
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button
                    className="btn custom-button-default-white"
                    type="submit"
                  >
                    Search
                  </button>
                </form>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <style>
        {`
          .nav-link.fs-6.text-dark.text-nowrap {
            color: #343a40;
            text-decoration: none;
            position: relative;
            transition: color 0.3s ease, transform 0.3s ease;
          }

          .nav-link.fs-6.text-dark.text-nowrap::after {
            content: '';
            position: absolute;
            left: 0;
            bottom: -2px;
            width: 0;
            height: 2px;
            background-color: #210BE3;
            border-radius: 1px;
            transition: width 0.3s ease;
          }

          @media (min-width: 992px) {
            .nav-link.fs-6.text-dark.text-nowrap:hover {
              color: #210BE3;
              transform: translateY(-1px);
            }

            .nav-link.fs-6.text-dark.text-nowrap:hover::after {
              width: 100%;
            }
          }
          .offcanvas {
            z-index: 1040; /* Ensure the offcanvas is above the backdrop */
            margin-top: 56px; /* Adjust the margin to push it below the Navbar */
          }

          .offcanvas-backdrop {
            z-index: 1030; /* Ensure the backdrop stays below the offcanvas */
          }

          .navbar {
            z-index: 1050; /* Ensure the Navbar stays on top of both */
          }
            .navbar-toggler{
            border-none;
            }
          .transform-button {
          width: 40px;
          height: 40px;
          position: relative;
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 0;
        }

        .transform-button::before,
        .transform-button::after {
          content: '';
          position: absolute;
          width: 24px;
          height: 2px;
          background-color: #343a40;
          left: 50%;
          transition: all 0.3s ease;
          transform-origin: center;
        }

        .transform-button::before {
          top: calc(50% - 6px);
          transform: translateX(-50%);
        }

        .transform-button::after {
          top: calc(50% + 6px);
          transform: translateX(-50%);
        }

        .transform-button.active::before {
          top: 50%;
          transform: translate(-50%, -50%) rotate(45deg);
        }

        .transform-button.active::after {
          top: 50%;
          transform: translate(-50%, -50%) rotate(-45deg);
        }
          .icon-container {
          width: 24px;
          height: 24px;
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 6px;
        }

        .bar {
          width: 100%;
          height: 2px;
          background-color:#210BE3;
          transition: all 0.3s ease;
        }

        .icon-container.toggled .bar:first-child {
          transform: translateY(4px) rotate(45deg);
        }

        .icon-container.toggled .bar:last-child {
          transform: translateY(-4px) rotate(-45deg);
        }
          .transform-button {
          width: 40px;
          height: 40px;
          position: relative;
          background: transparent;
          border: none;
          cursor: pointer;
        }

        .transform-button::before,
        .transform-button::after {
          content: '';
          position: absolute;
          width: 24px;
          height: 2px;
          background-color: #646cff;
          left: 50%;
          transition: all 0.3s;
          transform-origin: center;
        }

        .transform-button::before {
          top: calc(50% - 6px);
          transform: translateX(-50%);
        }

        .transform-button::after {
          top: calc(50% + 6px);
          transform: translateX(-50%);
        }

        .transform-button.active::before {
          top: 50%;
          transform: translate(-50%, -50%) rotate(45deg);
        }

        .transform-button.active::after {
          top: 50%;
          transform: translate(-50%, -50%) rotate(-45deg);
        }
          /* Offcanvas full-screen */
.offcanvas {
  position: fixed !important;  /* Ensure the offcanvas is fixed to the screen */
  top: 0;                      /* Align to the top of the screen */
  left: 0;                     /* Align to the left of the screen */
  right: 0;                    /* Stretch to the right of the screen */
  bottom: 0;                   /* Stretch to the bottom of the screen */
  width: 100vw !important;     /* Set the width to 100% of the viewport */
  height: 100vh !important;    /* Set the height to 100% of the viewport */
  z-index: 1040;               /* Ensure the offcanvas is above other elements */
  background-color: #ffffff;   /* Optional: Set the background color */
  box-shadow: none;            /* Optional: Remove box shadow */
}

/* Offcanvas backdrop should also cover the entire screen */
.offcanvas-backdrop {
  z-index: 1030;               /* Ensure the backdrop stays below the offcanvas */
  background-color: rgba(0, 0, 0, 0.5);  /* Optional: Adjust backdrop color */
}

/* Adjust the content in the offcanvas to fit properly */
.offcanvas-body {
  padding: 0 !important;  /* Remove padding to make the content fit */
  overflow-y: auto;       /* Enable scrolling if content overflows */
}

        `}
      </style>
    </div>
  );
}
