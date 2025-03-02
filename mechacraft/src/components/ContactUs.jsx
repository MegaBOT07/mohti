import React, { useState } from "react";
import "./ContactUs.css";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
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

        <form className="contactus-form" onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <label>
            Message:
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
      <footer className="contactus-footer">
        <p>&copy; 2025 MechaCraft. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ContactUs;