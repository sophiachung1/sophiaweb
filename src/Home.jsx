import React from 'react'
import './style.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {Link} from 'react-router-dom';

const Home = () => {
    const toggleMenu = () => {
        const menu = document.querySelector('.menu-links');
        menu.classList.toggle('show');
    };

    return (
        <div>
          {/* Desktop Navigation */}
          {/* <Router>
          <nav id="desktop-nav">
            <div className="logo">Sophia Chung</div>
            <div>
              <ul className="nav-links">
                <li><Link to="/work">Work</Link></li>
                <li><a href="projects.html">Play</a></li>
                <li><a href="#about"> About</a></li>
              </ul>
            </div>
          </nav>
          <Routes>
            <Route path="/work" element={<Work/>}/>
          </Routes>
        </Router> */}
          {/* Hamburger Navigation */}
          <nav id="hamburger-nav">
            <div className="logo">Sophia Chung</div>
            <div className="hamburger-menu" onClick={toggleMenu}>
              <span></span>
              <span></span>
              <span></span>
            </div>
    
            <div className="menu-links">
              <li><a href="#about" onClick={toggleMenu}>About</a></li>
              <li><a href="projects.html" onClick={toggleMenu}>Projects</a></li>
              <li><a href="#resume" onClick={toggleMenu}>Resume</a></li>
              <li><a href="#contact" onClick={toggleMenu}> Contact</a></li>
            </div>
          </nav>
    
          {/* Profile Section */}
          <section id="profile">
            <div className="text-container">
              <div className="hello">
                <p className="welcome_text">👋 Howdy!</p>
              </div>
              <div className="section__text">
                <p className="section_text_p2">I'm Sophia,</p>
                <p className="section_text_p3">A Product Designer,</p>
                <p className="section_text_p4">and Problem Solver</p>
              </div>
    
              <div className="button-container">
                <button className="button1">View My Work</button>
                <button className="button2">Contact Me</button>
              </div>
            </div>
    
            <div className="section__pic-container">
              <img className="profile" src="profile.png" alt="profile picture" />
            </div>
          </section>
        </div>
      );
    };
    
    export default Home; 