import React, { useState } from "react";
import "./ContactUs.css";
import { FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your message!");
    // You can add logic here to send the form data
  };

  return (
    <div className="contactus-container">
      <div className="contactus-content">
        <header className="contactus-header">
          <h1>Contact Us</h1>
          <p>We'd love to hear from you!</p>
        </header>

        <div className="contactus-wrapper">
          <div className="contact-info">
            <div className="info-item">
              <h3>Address</h3>
              <p>25, Ganesh Nagar Vistar Sodala,<br /> Jaipur Rajasthan 302019</p>
            </div>
            <div className="info-item">
              <h3>Phone</h3>
              <p>+91 9983878999</p>
            </div>
            <div className="info-item">
              <h3>Email</h3>
              <p>mechacrafttechnology@gmail.com</p>
            </div>
            <div className="info-item">
              <h3>Working Hours</h3>
              <p>Monday: Friday: 9:00 AM - 6:00 PM<br />
                 Saturday: 10:00 AM - 2:00 PM<br />
                 Sunday: Closed</p>
            </div>
            <div className="social-icons">
              <a href="https://in.linkedin.com/company/mechacraft-technologies" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href="https://www.facebook.com/people/MechaCraft-Technologies/61559910946002/" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
              <a href="https://www.instagram.com/mechacraftofficial" target="_blank" rel="noopener noreferrer">
                <FaFacebook />
              </a>
            </div>
          </div>

          <form className="contactus-form" onSubmit={handleSubmit}>
            <div className="name-email-row">
              <label>
                Name:
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  placeholder="Enter your full name"
                />
              </label>
              <label>
                Email:
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Enter your email address"
                />
              </label>
            </div>
            <label>
              Subject:
              <input
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
                placeholder="What is your message about?"
              />
            </label>
            <label>
              Message:
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                placeholder="Write your message here..."
              ></textarea>
            </label>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
      <footer className="contactus-footer">
        <p>&copy; 2025 MechaCraft. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ContactUs;