import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
// import Navbar from './Components/Navbar'; 
import SignUp from './Components/SignUp'; 
import LogIn from './Components/LogIn'; 
import Home from './Components/Home'; 
import Courses from './Components/CoursePage/Courses';
import CoursesPage from './Components/CoursesPage';
import ContactUs from './Components/ContactUs';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import AboutUs from './Components/AboutUs';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} /> {/* Default redirect to Home */}
          <Route path="/home" element={<Home />} /> {/* Ensure Home component is valid */}
          <Route path="/courses" element={<Courses />} />
          <Route path="/about-us" element={<AboutUs/>} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/signup" element={<SignUp />} /> {/* Ensure SignUp component is valid */}
          <Route path="/login" element={<LogIn />} /> {/* Ensure LogIn component is valid */}
          <Route path="/courses-page" element={<CoursesPage />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
