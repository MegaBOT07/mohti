import React from 'react';
import './FeatureHighlight.css'; // Link to the CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import Font Awesome
import { faLinkedin, faFacebook, faThreads, faInstagram } from '@fortawesome/free-brands-svg-icons'; // Import brand icons

const FeatureHighlight = () => {
  return (
    <div className="feature-highlight">
      {/* Join Us Section */}
      <section className="join-us-section">
        <div className="feature-container">
          {/* Left Section - Image */}
          <div className="feature-image">
            <img src="./assets/feat.jpeg" alt="MechaCraft Team" />
          </div>

          {/* Right Section - Content */}
          <div className="feature-content">
            <h1>Let’s Partner to Build the Future</h1>
            <p>
We invite schools and colleges to join hands with Mechacraft Technologies to empower students with the skills they need for tomorrow’s world. Our team is ready to conduct workshops, set up innovation labs, and inspire your students to dream big and build real.</p>
<h6>Trusted by Students & Educators</h6>
<p>We’ve successfully trained 500+ students across multiple colleges and schools in Rajasthan through internships, training camps, and hands-on sessions.</p>
          </div>
        </div>
      </section>

      <div style={{ width: '100%', height: '1px'}}></div> {/* Separation between feature highlight and footer */}

      {/* Footer Section */}
      <footer className="footer-section">
        <div className="footer-container">
          <div className="footer-item">
            <h2>Address</h2>
            <p>25, Ganesh Nagar Vistar Sodala, Jaipur Rajasthan 302019</p>
            <p>+91 9376388157</p>
          </div>
          <div className="footer-item">
            <h2>Join Us</h2>
            <p>Become a part of the MechaCraft community and<br /> stay updated with our latest innovations.</p>
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
                  <a target='_blank' href="https://www.instagram.com/mechacraftofficial">
                    <FontAwesomeIcon icon={faInstagram} className="social-icon" /> {/* Threads Icon */}
                    <span>Instagram</span> {/* Text for accessibility */}
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