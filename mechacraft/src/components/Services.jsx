// Services.js
import React from "react";
import { Link } from "react-router-dom";
import "./Services.css";
const iotAgricultureImage = "https://media.istockphoto.com/id/1155183548/photo/lawn-mower-and-jerry-can-with-gasoline-on-the-background-of-green-grass.jpg?b=1&s=612x612&w=0&k=20&c=5NZnGGf7x0N7xXSn8T_7FeWWZmsKfUh0ekFKDxQu-Fo="; // Import your images
const customSolutionsImage = "https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=800";
const iotConsultingImage = "https://images.pexels.com/photos/9242836/pexels-photo-9242836.jpeg?auto=compress&cs=tinysrgb&w=800";
const roboticsLabsImage = "https://images.pexels.com/photos/3862632/pexels-photo-3862632.jpeg?auto=compress&cs=tinysrgb&w=800";
const arVrImage = "https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg?auto=compress&cs=tinysrgb&w=800";
const droneTechImage = "https://images.pexels.com/photos/18660495/pexels-photo-18660495/free-photo-of-view-of-dji-air-3-drone-flying-in-the-forest-in-south-of-france.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";
const homeAutomationImage = "https://media.istockphoto.com/id/1014664366/photo/smart-home-automation-remote-control-internet-technology.jpg?b=1&s=612x612&w=0&k=20&c=kb_aNkbmD9qqL43IjaIkGACHkLtYqqkMAEuo-Uc0uxU=";
const Services = () => {
  const services = [
    {
      title: "Driving Agricultural and Healthcare Advancements with IoT",
      description:
        "Revolutionizing agriculture and healthcare through Internet of Things (IoT) solutions that enable smarter operations and better outcomes.",
      image: iotAgricultureImage,
      alt: "IoT Solutions for Agriculture",
    },
    {
      title: "Custom Web & App Development: Expert Consultancy and Tailored Solutions",
      description:
        "Delivering secure, scalable, and user-friendly web and mobile applications, with expert consultancy guiding you through every stage—from concept and design to deployment and continuous optimization.",
      image: customSolutionsImage,
      alt: "Custom Web & App Development",
    },
    {
      title: "Drone Technology: Aerial Solutions for Modern Industries",
      description:
        "Providing precise aerial data collection, mapping, and analysis to optimize operations across industries like agriculture, construction, and inspection.",
      image: droneTechImage,
      alt: "Drone Technology",
    },
    {
      title: "PCB Circuit Design Lab: Precision and Innovation in Electronics",
      description:
        "Designing high-quality, reliable, and scalable PCBs for various electronic products, from prototypes to large-scale production.",
      image: iotConsultingImage,
      alt: "PCB Circuit Design Lab",
    },
    {
      title: "AI & Machine Learning: Smart Solutions for the Future",
      description:
        "Leveraging AI and Machine Learning to create intelligent systems that automate processes, enhance decision-making, and drive innovation across industries like healthcare, finance, and manufacturing.",
      image: arVrImage,
      alt: "AI & Machine Learning",
    },
    {
      title: "Robotics: Automation for Enhanced Efficiency",
      description:
        "Designing and developing advanced robotics solutions to automate complex tasks, improving efficiency, accuracy, and safety in industries such as manufacturing, logistics, and healthcare.",
      image: roboticsLabsImage,
      alt: "Robotics",
    },
    {
      title: "Technology Consulting and Integration",
      description:
        "Helping businesses seamlessly integrate cutting-edge technologies to boost efficiency, reduce costs, and foster innovation.",
      image: homeAutomationImage,
      alt: "Technology Consulting and Integration",
    },
  ];

  return (
    <div className="services-container">
      <header className="services-header">
        <h1>Our Services</h1>
        <p>Empowering Your Business with IoT Solutions</p>
      </header>

      <section className="services-list">
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

      <footer className="services-footer">
        <p>&copy; 2025 MechaCraft. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Services;