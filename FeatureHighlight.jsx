import React from 'react';
import './FeatureHighlight.css'; // Link to the CSS file

const FeatureHighlight = () => {
  return (
    <div className="feature-highlight">
      {/* Join Us Section */}
      <section className="join-us-section">
        <div className="feature-container">
          
          {/* Left Section - Image */}
          <div className="feature-image">
            <img src="./src/assets/team.jpeg" alt="MechaCraft Team" />
          </div>

          {/* Right Section - Content */}
          <div className="feature-content">
            <h1>Transform your vision with <span>MechaCraft</span>'s expertise.</h1>
            <p>Join forces with MechaCraft to revolutionize your business through the power of innovation and cutting-edge IoT solutions.</p>
            <button className="cta-button">Connect with Us</button>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer-section">
        <div className="footer-container">
          <div className="footer-item">
            <h2>Address</h2>
            <p>123 MechaCraft Avenue, Tech City, TC 12345</p>
          </div>
          <div className="footer-item">
            <h2>Join Us</h2>
            <p>Become a part of the MechaCraft community and stay updated with our latest innovations.</p>
            <button className="join-button">Join Now</button>
          </div>
          <div className="footer-item">
            <h2>Useful Links</h2>
            <ul>
              <li><a  target='_blank' href="https://in.linkedin.com/company/mechacraft-technologies">Linkedin</a></li>
              <li><a target='_blank' href="https://www.facebook.com/people/MechaCraft-Technologies/61559910946002/">Facebook</a></li>
              <li><a target='_blank' href="https://www.threads.net/@mechacraftofficial">Threads</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 MechaCraft. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default FeatureHighlight;
