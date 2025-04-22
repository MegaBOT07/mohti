import React, { memo, useState, useEffect } from "react";
import "./CardsSection.css"; // Import your CSS file for this section
import { Link } from "react-router-dom";

const CardsSection = memo(() => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [expandedCard, setExpandedCard] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleCardClick = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  // List of card items
  const cardItems = [
    {
      image: "./assets/1.jpeg",
      alt: "Microcontroller",
      text: "Empower your IoT projects with versatile microcontrollers.",
    },
    {
      image: "./assets/2.jpeg",
      alt: "Robotics",
      text: "Revolutionize tasks with cutting-edge robotics solutions.",
    },
    {
      image: "https://images.pexels.com/photos/1382102/pexels-photo-1382102.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Agriculture",
      text: "Improves efficiency and productivity in farming practices.",
    },
    {
      image: "./assets/4.jpeg",
      alt: "Drones",
      text: "Innovate with advanced drone technology for various applications.",
    },
    {
      image: "./assets/5.jpeg",
      alt: "Gaming",
      text: "Immerse in the future of gaming with our tech solutions.",
    },
    {
      image: "./assets/6.jpeg",
      alt: "AI Automation",
      text: "Transform industries with AI-driven automation solutions.",
    },
  ];

  return (
    <section id="services">
      <div className={`cards-section ${isMobile ? "mobile" : ""}`}>
        <div className="card-container">
          {cardItems.map((item, index) => (
            <div
              className={`card-item ${expandedCard === index ? "expanded" : expandedCard !== null ? "collapsed" : ""}`}
              key={index}
              onClick={() => handleCardClick(index)}
            >
              <div className="card">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="card-image"
                  loading="lazy" // Lazy load image
                />
                <div className="card-text">{item.alt}</div>
                {isMobile && expandedCard === index && (
                  <div className="preview-button"><Link to="/services">Learn More</Link></div>
                )}
                <div className="card-description">{item.text}</div>
                {!isMobile && (
                  <div className="preview-button"><Link to="/services">Learn More</Link></div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default CardsSection;
