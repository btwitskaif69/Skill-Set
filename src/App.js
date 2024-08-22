import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar'; 
import SignUp from './Components/SignUp'; 
import LogIn from './Components/LogIn'; 
import Home from './Components/Home'; 
import Courses from './Components/Courses';
import Footer from './Components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Courses/>
        <Home/>
        <Footer/>
        <Routes>
          <Route path="/home" element={<home />} /> {/* Ensure Home component is valid */}
          <Route path="/signup" element={<SignUp />} /> {/* Ensure SignUp component is valid */}
          <Route path="/login" element={<LogIn />} /> {/* Ensure LogIn component is valid */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
