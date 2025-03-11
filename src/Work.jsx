import React from "react";
import './style.css';

const Work = () => {
    return (
        <div className="work-container">
        <h1>View My Work</h1>
        <div className="work-gallery">
        <a href="https://www.notion.so/Bookworm-19157e020dfb80b2a1fedf56d020a78a?pvs=4">
        <img src="/src/home.png" className="work-img"/>
        Bookworm
        <p>ABout</p>
        </a>
        </div>
        </div>
        );
};

export default Work;