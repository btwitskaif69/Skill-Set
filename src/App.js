import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar'; // Ensure default export
import SignUp from './Components/SignUp'; // Ensure default export
import LogIn from './Components/LogIn'; // Ensure default export
import Home from './Components/Home'; // Ensure default export
import Courses from './Components/Courses';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Courses/>
        <Home/>
        <Routes>
          <Route path="/Home" element={<Home />} /> {/* Ensure Home component is valid */}
          <Route path="/signup" element={<SignUp />} /> {/* Ensure SignUp component is valid */}
          <Route path="/login" element={<LogIn />} /> {/* Ensure LogIn component is valid */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
