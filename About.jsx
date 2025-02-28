import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation (if using React Router)
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <header className="about-header">
        <h1>About Us</h1>
        <p>Your trusted partner in IoT solutions</p>
      </header>

      <section className="about-intro">
        <h2>What We Do</h2>
        <p>
          At <strong>Your Company Name</strong>, we specialize in delivering cutting-edge IoT solutions that empower businesses to streamline operations, enhance productivity, and create smarter environments.
        </p>
        <p>
          Our team of experts builds innovative systems using smart devices and cloud technologies, making your operations more efficient and connected than ever before.
        </p>
      </section>

      <section className="about-values">
        <h2>Our Values</h2>
        <ul>
          <li><strong>Innovation:</strong> We lead with the latest technologies to create scalable and adaptive solutions.</li>
          <li><strong>Quality:</strong> We are committed to providing high-performance and reliable products for our clients.</li>
          <li><strong>Collaboration:</strong> We work closely with our clients to ensure that their needs are met at every step of the way.</li>
          <li><strong>Security:</strong> We prioritize the security and privacy of your data and systems, ensuring peace of mind for all our clients.</li>
        </ul>
      </section>

      <section className="about-vision">
        <h2>Our Vision</h2>
        <p>
          We envision a future where IoT enables seamless connections, smarter decisions, and greater convenience in every aspect of life. Our goal is to make your world more connected, automated, and intelligent.
        </p>
      </section>

      <section className="about-contact">
        <h2>Get in Touch</h2>
        <p>Want to know more about how we can help your business with IoT solutions? <Link to="/contact">Contact us</Link> today!</p>
      </section>

      <footer className="about-footer">
        <p>&copy; 2025 Your Company Name. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default About;
