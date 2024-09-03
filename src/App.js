import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar'; 
import SignUp from './Components/SignUp'; 
import LogIn from './Components/LogIn'; 
import Home from './Components/Home'; 
import Courses from './Components/Courses';
import CoursesPage from './Components/CoursesPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
        <Route path="/" element={<Home />} /> {/* Ensure Home component is valid */}
          <Route path="/signup" element={<SignUp />} /> {/* Ensure SignUp component is valid */}
          <Route path="/login" element={<LogIn />} /> {/* Ensure LogIn component is valid */}
          <Route path="/courses" element={<Courses />} />
          <Route path="/CoursesPage" element={<CoursesPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
