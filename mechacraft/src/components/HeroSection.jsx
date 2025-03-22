import React from "react";
import "./HeroSection.css"; 
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="video-container">
        <video autoPlay loop muted>
          <source autoPlay src="https://videos.pexels.com/video-files/8979417/8979417-uhd_2560_1440_30fps.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Hero content with text */}
      <div className="hero-content">
        <h1>Welcome to Mechacraft</h1>
        <p>Innovative IoT solutions in <strong>Agriculture Technology</strong></p>
        <button className="button1"><Link to="/about">learn More</Link></button>
      </div>
    </div>
  );
};

export default HeroSection;