import React from 'react';
import Home from './Home'; // Import Home component
import Work from './Work';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {Link} from 'react-router-dom';
import './style.css';


function App() {
  return (
    <Router basename="/sophiaweb">
    <nav id="desktop-nav">
      <div className="logo">Sophia Chung</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/work">Work</Link></li>
        <li><a href="projects.html">Play</a></li>
        <li><a href="#about">About</a></li>
      </ul>
    </nav>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/work" element={<Work />} />
    </Routes>
  </Router>
  );
}

export default App;