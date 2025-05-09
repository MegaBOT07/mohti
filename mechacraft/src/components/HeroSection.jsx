import React from "react";
import "./HeroSection.css"; 
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="video-container">
        <video autoPlay loop muted>
          <source autoPlay src="./video/bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Hero content with text */}
      <div className="hero-content">
        <h1>Welcome to Mechacraft</h1>
        <p>Empowering students through innovation</p>
        <button className="button1"><Link to="/about">learn More</Link></button>
      </div>
    </div>
  );
};

export default HeroSection;