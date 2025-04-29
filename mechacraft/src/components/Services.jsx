// Services.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Services.css";

const iotAgricultureImage = "./assets/service1.jpeg";
const customSolutionsImage = "./assets/service2.jpeg";
const iotConsultingImage = "./assets/service3.jpeg";
const roboticsLabsImage = "./assets/service4.jpeg";
const arVrImage = "./assets/service5.jpeg";
const droneTechImage = "./assets/service6.jpeg";
const homeAutomationImage = "./assets/service7.jpeg";
const workshopImage = "./assets/service8.jpeg";

const Services = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const services = [
    {
      title: "Driving Agricultural and Healthcare Advancements with IoT",
      description:
        "Harness the power of IoT to transform agriculture and healthcare. We deliver smart farming solutions—like automated irrigation, crop monitoring, and livestock tracking—boosting yields and sustainability. In healthcare, our IoT systems enable real-time patient monitoring, asset tracking, and predictive maintenance for medical equipment, ensuring better outcomes and operational efficiency.",
      image: iotAgricultureImage,
      alt: "IoT in Agriculture and Healthcare",
    },
    {
      title: "Custom Web & App Development: Expert Consultancy and Tailored Solutions",
      description:
        "From idea to launch, we build secure, scalable, and intuitive web and mobile applications. Our team provides end-to-end consultancy, UI/UX design, robust backend development, and ongoing optimization. Whether you need an e-commerce platform, enterprise dashboard, or mobile app, we deliver solutions that drive business growth and user engagement.",
      image: customSolutionsImage,
      alt: "Web and App Development",
    },
    {
      title: "Drone Technology: Aerial Solutions for Modern Industries",
      description:
        "Unlock new perspectives with our advanced drone services. We offer aerial mapping, precision agriculture, infrastructure inspection, and 3D modeling. Our drones collect high-resolution data safely and efficiently, supporting industries like agriculture, construction, mining, and utilities with actionable insights and reduced operational risks.",
      image: droneTechImage,
      alt: "Drone Technology",
    },
    {
      title: "PCB Circuit Design Lab: Precision and Innovation in Electronics",
      description:
        "Accelerate your product development with our PCB design expertise. We create reliable, high-performance printed circuit boards for prototypes and mass production. Our services include schematic capture, layout, simulation, and manufacturing support—ensuring your electronics are robust, efficient, and ready for market.",
      image: iotConsultingImage,
      alt: "PCB Circuit Design Lab",
    },
    {
      title: "AI & Machine Learning: Smart Solutions for the Future",
      description:
        "Empower your business with AI-driven automation, predictive analytics, and intelligent decision-making. We develop custom machine learning models for healthcare diagnostics, financial forecasting, industrial automation, and more. Our solutions help you uncover patterns, optimize processes, and stay ahead in a data-driven world.",
      image: arVrImage,
      alt: "AI & Machine Learning",
    },
    {
      title: "Robotics: Automation for Enhanced Efficiency",
      description:
        "Reimagine productivity with our robotics solutions. We design and build robots for manufacturing, logistics, agriculture, and healthcare—automating repetitive or hazardous tasks. Our systems improve accuracy, safety, and throughput, enabling your workforce to focus on higher-value activities.",
      image: roboticsLabsImage,
      alt: "Robotics Automation",
    },
    {
      title: "Technology Consulting and Integration",
      description:
        "Navigate digital transformation with confidence. Our consultants help you select, implement, and integrate the right technologies—IoT, AI, cloud, automation, and more. We streamline your operations, reduce costs, and foster innovation, ensuring your business remains competitive in a rapidly evolving landscape.",
      image: homeAutomationImage,
      alt: "Technology Consulting and Integration",
    },
    {
      title: "STEM Workshops for School Students",
      description:
        "Empowering young minds through interactive, hands-on learning in robotics, AI, IoT, and coding. By encouraging exploration and creativity, we help students build real-world skills, spark curiosity, and grow their confidence in today’s rapidly evolving tech landscape",
      image: workshopImage,
      alt: "Home Automation",
    },
  ];

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
          service_id: 'YOUR_SERVICE_ID',
          template_id: 'YOUR_TEMPLATE_ID',
          user_id: 'YOUR_USER_ID',
          template_params: {
            name: data.name,
            email: data.email,
            subject: data.subject,
            message: data.message,
          }
        }),
      });
      
      if (response.ok) {
        alert('Message sent successfully!');
        e.target.reset();
        setIsModalOpen(false);
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to send message. Please try again later.');
    }
  };

  return (
    <div className="mechacraft-services-container">
      <header className="mechacraft-services-header">
        <h1>Our Services</h1>
        <p>Empowering Your Business with IoT Solutions</p>
      </header>

      <section className="mechacraft-services-list">
        {services.map((service, index) => (
          <div
            key={index}
            className={`service-item ${index % 2 === 0 ? "content-first" : "image-first"}`}
          >
            {index % 2 === 0 ? (
              <>
                <div className="service-content">
                  <h3>
                    <Link to={service.link}>{service.title}</Link>
                  </h3>
                  <p>{service.description}</p>
                </div>
                <div className="service-image">
                  <img src={service.image} alt={service.alt} />
                </div>
              </>
            ) : (
              <>
                <div className="service-image">
                  <img src={service.image} alt={service.alt} />
                </div>
                <div className="service-content">
                  <h3>
                    <Link to={service.link}>{service.title}</Link>
                  </h3>
                  <p>{service.description}</p>
                </div>
              </>
            )}
          </div>
        ))}
      </section>

      <section className="mechacraft-workshop-section">
        <h2 className="mechacraft-workshop-title">Want to Book a Workshop?</h2>
        <button 
          className="mechacraft-workshop-button"
          onClick={() => setIsModalOpen(true)}
        >
          Request Custom Workshop
        </button>

        {isModalOpen && (
          <div className="mechacraft-modal-overlay" onClick={() => setIsModalOpen(false)}>
            <div className="mechacraft-modal-content" onClick={e => e.stopPropagation()}>
              <button 
                className="mechacraft-modal-close"
                onClick={() => setIsModalOpen(false)}
              >
                ×
              </button>
              <h2>Request a Custom Workshop</h2>
              <p>Fill out the form and our team will get back to you with a customized proposal.</p>
              
              <form className="mechacraft-workshop-form" onSubmit={handleSubmit}>
                <div className="mechacraft-form-group">
                  <label>Your Name</label>
                  <input type="text" name="name" placeholder="Full Name" required />
                </div>
                
                <div className="mechacraft-form-group">
                  <label>Your Email</label>
                  <input type="email" name="email" placeholder="Enter valid Email" required />
                </div>
                
                <div className="mechacraft-form-group">
                  <label>Phone Number</label>
                  <input type="tel" name="phone" placeholder="Your Phone Number" required />
                </div>
                
                <div className="mechacraft-form-group">
                  <label>Organization</label>
                  <input type="text" name="organization" placeholder="School/College/Company" required />
                </div>
                
                <div className="mechacraft-form-group">
                  <label>Additional Details</label>
                  <textarea
                    name="details"
                    rows="5"
                    placeholder="Number of participants, preferred dates, specific requirements, etc."
                    required
                  ></textarea>
                </div>
                
                <button type="submit" className="mechacraft-submit-button">
                  Submit Request
                </button>
              </form>
            </div>
          </div>
        )}
      </section>

      <footer className="mechacraft-services-footer">
        <p>&copy; 2025 MechaCraft. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Services;