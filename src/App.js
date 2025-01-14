import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom';
import './App.css';
import SignUp from './Components/SignUp'; 
import LogIn from './Components/LogIn'; 
import ForgotPassword from './Components/ForgotPassword';
import Home from './Components/Home'; 
import Courses from './Components/CoursePage/Courses';
import EnrollPage from './Components/EnrollPage';
import ContactUs from './Components/ContactUs';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import AboutUs from './Components/AboutUs';
import CourseForm from './Components/CourseForm';
function Layout() {
  const location = useLocation();

  // Define routes where Navbar and Footer should be hidden
  const hideNavbarFooter = ['/api/signup', '/api/login', '/api/forgot-password'];

  return (
    <>
      {/* Conditionally render Navbar */}
      {!hideNavbarFooter.includes(location.pathname) && <Navbar />}
      
      <Routes>
        <Route path="/" exact element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/api/signup" element={<SignUp />} />
        <Route path="/api/login" element={<LogIn />} />
        <Route path="/api/forgot-password" element={<ForgotPassword />} />
        <Route path="/enroll/:id" element={<EnrollPage />} />
        <Route path="/form" element={<CourseForm />} />
      </Routes>

      {/* Conditionally render Footer */}
      {!hideNavbarFooter.includes(location.pathname) && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
