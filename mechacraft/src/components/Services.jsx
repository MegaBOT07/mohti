// Services.js
import React from "react";
import { Link } from "react-router-dom";
import "./Services.css";
const iotConsultingImage = "./src/assets/1.jpeg"; // Import your images
const customSolutionsImage = "./src/assets/1.jpeg";
const iotIntegrationImage = "./src/assets/1.jpeg";
const iotMaintenanceImage = "./src/assets/1.jpeg";
const iotAgricultureImage = "./src/assets/1.jpeg";
const healthcareIoTImage = "./src/assets/1.jpeg";
const fleetTrackingImage = "./src/assets/1.jpeg";
const roboticsLabsImage = "./src/assets/1.jpeg";
const commercialDataImage = "./src/assets/1.jpeg";
const industry40Image = "./src/assets/1.jpeg";
const arVrImage = "./src/assets/1.jpeg";
const droneTechImage = "./src/assets/1.jpeg";
const homeAutomationImage = "./src/assets/1.jpeg";
const automotiveElectronicsImage = "./src/assets/1.jpeg";
const personalTerminalsImage = "./src/assets/1.jpeg";

const Services = () => {
  const services = [
    {
      title: "IoT Consulting",
      description:
        "Unlock the potential of IoT with our expert consulting services. We provide strategic guidance to help you implement IoT solutions that align with your business goals. From initial assessment to deployment and beyond, we'll guide you through every step.",
      image: iotConsultingImage,
      alt: "IoT Consulting",
      link: "/iot-consulting",
    },
    {
      title: "Custom IoT Solutions",
      description:
        "We specialize in developing tailored IoT solutions designed to meet your unique requirements. Our team of experienced engineers and developers will create innovative solutions that address your specific challenges and drive your business forward.",
      image: customSolutionsImage,
      alt: "Custom IoT Solutions",
      link: "/custom-iot-solutions",
    },
    {
      title: "IoT Integration",
      description:
        "Seamlessly integrate IoT devices and systems into your existing infrastructure. Our integration services ensure smooth connectivity and data flow, enabling you to leverage the full power of IoT without disrupting your operations.",
      image: iotIntegrationImage,
      alt: "IoT Integration",
      link: "/iot-integration",
    },
    {
      title: "IoT Maintenance",
      description:
        "Ensure the continuous performance and reliability of your IoT deployments with our comprehensive maintenance services. We provide proactive monitoring, troubleshooting, and support to keep your systems running smoothly.",
      image: iotMaintenanceImage,
      alt: "IoT Maintenance",
      link: "/iot-maintenance",
    },
    {
      title: "IoT Solutions for Agriculture",
      description:
        "Revolutionize your farming practices with our IoT solutions for agriculture. Real-time monitoring of soil, weather, and crop health using IoT sensors. Automated irrigation and fertilization systems. AI-based data analytics for predictive farming. Integration with drones for crop spraying and monitoring.",
      image: iotAgricultureImage,
      alt: "IoT Solutions for Agriculture",
      link: "/iot-solutions-agriculture",
    },
    {
      title: "Healthcare IoT Solutions",
      description:
        "Transform healthcare delivery with our advanced IoT solutions. Patient monitoring systems with real-time data collection. Remote diagnostics and telemedicine integration. Smart wearables for health tracking. Secure medical data storage and analysis on the cloud.",
      image: healthcareIoTImage,
      alt: "Healthcare IoT Solutions",
      link: "/healthcare-iot-solutions",
    },
    {
      title: "Industry 4.0 Solutions",
      description:
        "Embrace the future of manufacturing with our Industry 4.0 solutions. Predictive maintenance systems for industrial equipment. IoT-enabled monitoring and control of production lines. Integration of robotics and automated guided vehicles (AGVs). Real-time data analytics and reporting dashboards.",
      image: industry40Image,
      alt: "Industry 4.0 Solutions",
      link: "/industry-40-solutions",
    },
    {
      title: "Home Automation",
      description:
        "Experience the convenience and comfort of a smart home with our automation solutions. Smart lighting, HVAC, and security systems. Voice-controlled and mobile app integration. Energy monitoring and optimization. AI-based personalized automation.",
      image: homeAutomationImage,
      alt: "Home Automation",
      link: "/home-automation",
    },
    {
      title: "Fleet Tracking Solutions",
      description:
        "Optimize your fleet operations with our GPS-enabled tracking solutions. Real-time alerts for vehicle status and route optimization. Integration with fuel consumption and maintenance logs. Driver behavior analysis.",
      image: fleetTrackingImage,
      alt: "Fleet Tracking Solutions",
      link: "/fleet-tracking-solutions",
    },
    {
      title: "Robotics and IoT Research Labs",
      description:
        "Foster innovation and learning with our robotics and IoT research labs. Hands-on kits for robotics and IoT experiments. Simulators for robotics and IoT systems. Cloud-based LMS and CMS integration. Collaborative tools for research and project management.",
      image: roboticsLabsImage,
      alt: "Robotics and IoT Research Labs",
      link: "/robotics-iot-research-labs",
    },
    {
      title: "Commercial Equipment and Data Centers",
      description:
        "Ensure the reliability and efficiency of your commercial equipment and data centers with our IoT solutions. IoT-enabled commercial appliances. Secure data storage and retrieval systems. High-availability and fault-tolerant architecture. Scalable cloud-based solutions.",
      image: commercialDataImage,
      alt: "Commercial Equipment and Data Centers",
      link: "/commercial-equipment-data-centers",
    },
    {
      title: "AR and VR Solutions",
      description:
        "Enhance training and operations with our AR and VR solutions. Immersive training modules for industries and education. AR-based equipment maintenance guides. VR simulations for healthcare and automotive applications. Integration with IoT for real-time data overlay.",
      image: arVrImage,
      alt: "AR and VR Solutions",
      link: "/ar-vr-solutions",
    },
    {
      title: "Drone Technology",
      description:
        "Leverage the power of drone technology with our IoT-enabled solutions. IoT-enabled drones for surveillance, delivery, and inspection. AI-based flight path optimization. Real-time video and data streaming. Autonomous navigation capabilities.",
      image: droneTechImage,
      alt: "Drone Technology",
      link: "/drone-technology",
    },
    {
      title: "Automotive Electronics",
      description:
        "Advance your automotive solutions with our IoT-enabled electronics. IoT-enabled vehicle health monitoring systems. Integration with smart fleet management. Advanced driver-assistance systems (ADAS). Infotainment systems.",
      image: automotiveElectronicsImage,
      alt: "Automotive Electronics",
      link: "/automotive-electronics",
    },
    {
      title: "Personal Terminals and Smart Equipment",
      description:
        "Enhance productivity and health with our personal terminals and smart equipment. Wearable devices for productivity and health monitoring. Integration with cloud services for data synchronization. AI-based recommendations and alerts. IoT-enabled smart equipment for various domains.",
      image: personalTerminalsImage,
      alt: "Personal Terminals and Smart Equipment",
      link: "/personal-terminals-smart-equipment",
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