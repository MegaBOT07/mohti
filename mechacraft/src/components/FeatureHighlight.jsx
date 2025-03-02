import React from 'react';
import './FeatureHighlight.css'; // Link to the CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import Font Awesome
import { faLinkedin, faFacebook, faThreads } from '@fortawesome/free-brands-svg-icons'; // Import brand icons

const FeatureHighlight = () => {
  return (
    <div className="feature-highlight">
      {/* Join Us Section */}
      <section className="join-us-section">
        <div className="feature-container">
          {/* Left Section - Image */}
          <div className="feature-image">
            <img src="https://images.pexels.com/photos/9242844/pexels-photo-9242844.jpeg" alt="MechaCraft Team" />
          </div>

          {/* Right Section - Content */}
          <div className="feature-content">
            <h1>Transform your vision with <span>MechaCraft</span>'s expertise.</h1>
            <p>Join forces with MechaCraft to revolutionize your business through the power of innovation and cutting-edge IoT solutions.</p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer-section">
        <div className="footer-container">
          <div className="footer-item">
            <h2>Address</h2>
            <p>25, Ganesh Nagar Vistar Sodala, Jaipur Rajasthan 302019</p>
            <p>+91 9983878999</p>
          </div>
          <div className="footer-item">
            <h2>Join Us</h2>
            <p>Become a part of the MechaCraft community and stay updated with our latest innovations.</p>
          </div>
          <div className="footer-item">
            <h2>Useful Links</h2>
            <ul className="useful-links-list"> {/* Added className for styling */}
              <li>
                  <a  target='_blank' href="https://in.linkedin.com/company/mechacraft-technologies">
                    <FontAwesomeIcon icon={faLinkedin} className="social-icon" /> {/* LinkedIn Icon */}
                    <span>LinkedIn</span> {/* Text for accessibility */}
                  </a>
                </li>
              <li>
                  <a target='_blank' href="https://www.facebook.com/people/MechaCraft-Technologies/61559910946002/">
                    <FontAwesomeIcon icon={faFacebook} className="social-icon" /> {/* Facebook Icon */}
                    <span>Facebook</span> {/* Text for accessibility */}
                  </a>
                </li>
              <li>
                  <a target='_blank' href="https://www.threads.net/@mechacraftofficial">
                    <FontAwesomeIcon icon={faThreads} className="social-icon" /> {/* Threads Icon */}
                    <span>Threads</span> {/* Text for accessibility */}
                  </a>
                </li>
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