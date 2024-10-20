import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
// import Navbar from './Components/Navbar'; 
import SignUp from './Components/SignUp'; 
import LogIn from './Components/LogIn'; 
import Home from './Components/Home'; 
import Courses from './Components/CoursePage/Courses';
import EnrollPage from './Components/EnrollPage';
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
          <Route path="/" exact element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/courses-page" element={<Courses />} />
          <Route path="/enroll/:id" exact element={<EnrollPage />} />  {/* Updated route */}
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
