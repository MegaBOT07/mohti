import React from 'react';
import './ContactUs.css';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const ContactUs = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    
    try {
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service_id: 'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
          template_id: 'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
          user_id: 'YOUR_USER_ID', // Replace with your EmailJS user ID
          template_params: {
            name: data.name,
            email: data.email,
            subject: data.subject,
            message: data.message,
          }
        }),
      });

      if (response.ok) {
        alert('Your message has been sent successfully!');
        e.target.reset();
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('There was an error sending your message. Please try again later.');
    }
  };

  return (
    <div className="contactus-container">
      <div className="contactus-content">
        <header className="contactus-header">
          <h1>Contact Us</h1>
          <p>Get in touch with us for any questions or inquiries</p>
        </header>

        <div className="contactus-wrapper">
          <div className="contact-info">
            <div className="info-item">
              <h3><FaPhone /> Phone</h3>
              <p>+91 9376388157</p>
            </div>
            <div className="info-item">
              <h3><FaEnvelope /> Email</h3>
              <p>Mechacrafttechnologies@gmail.com</p>
            </div>
            <div className="info-item">
              <h3><FaMapMarkerAlt /> Address</h3>
              <p>25, Ganesh Nagar Vistar Sodala,<br />Jaipur Rajasthan 302019</p>
            </div>
            <div className="social-icons">
              <a href="#"><FaFacebook /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaLinkedin /></a>
              <a href="#"><FaInstagram /></a>
            </div>
          </div>

          <form className="contactus-form" onSubmit={handleSubmit}>
            <div className="name-email-row">
              <label>
                Name
                <input type="text" name="name" required placeholder="Your Name" />
              </label>
              <label>
                Email
                <input type="email" name="email" required placeholder="Your Email" />
              </label>
            </div>
            <label>
              Subject
              <input type="text" name="subject" required placeholder="Subject" />
            </label>
            <label>
              Message
              <textarea name="message" required placeholder="Your Message"></textarea>
            </label>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>

      <footer className="contactus-footer">
        <p>&copy; 2025 Mechacraft. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ContactUs;