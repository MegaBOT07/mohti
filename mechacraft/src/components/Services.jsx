// Services.js
import React from "react";
import { Link } from "react-router-dom";
import "./Services.css";
const iotAgricultureImage = "https://media.istockphoto.com/id/1155183548/photo/lawn-mower-and-jerry-can-with-gasoline-on-the-background-of-green-grass.jpg?b=1&s=612x612&w=0&k=20&c=5NZnGGf7x0N7xXSn8T_7FeWWZmsKfUh0ekFKDxQu-Fo="; // Import your images
const customSolutionsImage = "https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=800";
const iotIntegrationImage = "https://images.pexels.com/photos/20226911/pexels-photo-20226911/free-photo-of-smart-home-devices-smartphone-blank-screen.jpeg?auto=compress&cs=tinysrgb&w=800";
const iotMaintenanceImage = "https://images.pexels.com/photos/9242887/pexels-photo-9242887.jpeg";
const iotConsultingImage = "https://images.pexels.com/photos/9242836/pexels-photo-9242836.jpeg?auto=compress&cs=tinysrgb&w=800";
const healthcareIoTImage = "https://images.pexels.com/photos/7580249/pexels-photo-7580249.jpeg?auto=compress&cs=tinysrgb&w=800";
const fleetTrackingImage = "https://images.pexels.com/photos/2800121/pexels-photo-2800121.jpeg?auto=compress&cs=tinysrgb&w=800";
const roboticsLabsImage = "https://images.pexels.com/photos/3862632/pexels-photo-3862632.jpeg?auto=compress&cs=tinysrgb&w=800";
const commercialDataImage = "https://media.istockphoto.com/id/1809660081/photo/modern-data-technology-center-server-racks-working-in-dark-facility-concept-of-internet-of.jpg?b=1&s=612x612&w=0&k=20&c=u1_CcoZe8CrbzWizkB0qxctCzlJSFkUDuQdHobSuv-s=";
const industry40Image = "https://images.pexels.com/photos/9577249/pexels-photo-9577249.jpeg?auto=compress&cs=tinysrgb&w=800";
const arVrImage = "https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg?auto=compress&cs=tinysrgb&w=800";
const droneTechImage = "https://images.pexels.com/photos/18660495/pexels-photo-18660495/free-photo-of-view-of-dji-air-3-drone-flying-in-the-forest-in-south-of-france.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";
const homeAutomationImage = "https://media.istockphoto.com/id/1014664366/photo/smart-home-automation-remote-control-internet-technology.jpg?b=1&s=612x612&w=0&k=20&c=kb_aNkbmD9qqL43IjaIkGACHkLtYqqkMAEuo-Uc0uxU=";
const automotiveElectronicsImage = "https://images.pexels.com/photos/3862610/pexels-photo-3862610.jpeg?auto=compress&cs=tinysrgb&w=800";
const personalTerminalsImage = "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800";

const Services = () => {
  const services = [
    {
      title: "IoT Solutions for Agriculture",
      description:
        "Revolutionize your farming practices with our IoT solutions for agriculture. Real-time monitoring of soil, weather, and crop health using IoT sensors. Automated irrigation and fertilization systems. AI-based data analytics for predictive farming. Integration with drones for crop spraying and monitoring.",
      image: iotAgricultureImage,
      alt: "IoT Solutions for Agriculture",
    },
    {
      title: "Drone Technology",
      description:
        "Leverage the power of drone technology with our IoT-enabled solutions. IoT-enabled drones for surveillance, delivery, and inspection. AI-based flight path optimization. Real-time video and data streaming. Autonomous navigation capabilities.",
      image: droneTechImage,
      alt: "Drone Technology",
    },
    {
      title: "IoT Integration",
      description:
        "Seamlessly integrate IoT devices and systems into your existing infrastructure. Our integration services ensure smooth connectivity and data flow, enabling you to leverage the full power of IoT without disrupting your operations.",
      image: iotIntegrationImage,
      alt: "IoT Integration",
    },
    {
      title: "Healthcare IoT Solutions",
      description:
        "Transform healthcare delivery with our advanced IoT solutions. Patient monitoring systems with real-time data collection. Remote diagnostics and telemedicine integration. Smart wearables for health tracking. Secure medical data storage and analysis on the cloud.",
      image: healthcareIoTImage,
      alt: "Healthcare IoT Solutions",
    },
    {
      title: "Fleet Tracking Solutions",
      description:
        "Optimize your fleet operations with our GPS-enabled tracking solutions. Real-time alerts for vehicle status and route optimization. Integration with fuel consumption and maintenance logs. Driver behavior analysis.",
      image: fleetTrackingImage,
      alt: "Fleet Tracking Solutions",
    },
    {

      title: "IoT Maintenance",
      description:
        "Ensure the continuous performance and reliability of your IoT deployments with our comprehensive maintenance services. We provide proactive monitoring, troubleshooting, and support to keep your systems running smoothly.",
      image: iotMaintenanceImage,
      alt: "IoT Maintenance",
    },
    {
      title: "Industry 4.0 Solutions",
      description:
        "Embrace the future of manufacturing with our Industry 4.0 solutions. Predictive maintenance systems for industrial equipment. IoT-enabled monitoring and control of production lines. Integration of robotics and automated guided vehicles (AGVs). Real-time data analytics and reporting dashboards.",
      image: industry40Image,
      alt: "Industry 4.0 Solutions",

    },
    {
      title: "Home Automation",
      description:
        "Experience the convenience and comfort of a smart home with our automation solutions. Smart lighting, HVAC, and security systems. Voice-controlled and mobile app integration. Energy monitoring and optimization. AI-based personalized automation.",
      image: homeAutomationImage,
      alt: "Home Automation",

    },
    {
      title: "IoT Consulting",
      description:
        "Unlock the potential of IoT with our expert consulting services. We provide strategic guidance to help you implement IoT solutions that align with your business goals. From initial assessment to deployment and beyond, we'll guide you through every step.",
      image: iotConsultingImage,
      alt: "IoT Consulting",
    },
    {
      title: "Robotics and IoT Research Labs",
      description:
        "Foster innovation and learning with our robotics and IoT research labs. Hands-on kits for robotics and IoT experiments. Simulators for robotics and IoT systems. Cloud-based LMS and CMS integration. Collaborative tools for research and project management.",
      image: roboticsLabsImage,
      alt: "Robotics and IoT Research Labs",

    },
    {
      title: "Commercial Equipment and Data Centers",
      description:
        "Ensure the reliability and efficiency of your commercial equipment and data centers with our IoT solutions. IoT-enabled commercial appliances. Secure data storage and retrieval systems. High-availability and fault-tolerant architecture. Scalable cloud-based solutions.",
      image: commercialDataImage,
      alt: "Commercial Equipment and Data Centers",

    },
    {
      title: "AR and VR Solutions",
      description:
        "Enhance training and operations with our AR and VR solutions. Immersive training modules for industries and education. AR-based equipment maintenance guides. VR simulations for healthcare and automotive applications. Integration with IoT for real-time data overlay.",
      image: arVrImage,
      alt: "AR and VR Solutions",

    },
    {
      title: "Custom IoT Solutions",
      description:
        "We specialize in developing tailored IoT solutions designed to meet your unique requirements. Our team of experienced engineers and developers will create innovative solutions that address your specific challenges and drive your business forward.",
      image: customSolutionsImage,
      alt: "Custom IoT Solutions",
    },
    {
      title: "Automotive Electronics",
      description:
        "Advance your automotive solutions with our IoT-enabled electronics. IoT-enabled vehicle health monitoring systems. Integration with smart fleet management. Advanced driver-assistance systems (ADAS). Infotainment systems.",
      image: automotiveElectronicsImage,
      alt: "Automotive Electronics",

    },
    {
      title: "Personal Terminals and Smart Equipment",
      description:
        "Enhance productivity and health with our personal terminals and smart equipment. Wearable devices for productivity and health monitoring. Integration with cloud services for data synchronization. AI-based recommendations and alerts. IoT-enabled smart equipment for various domains.",
      image: personalTerminalsImage,
      alt: "Personal Terminals and Smart Equipment",

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