import React, { memo, useState } from "react";
import "./CardsSection.css"; // Import your CSS file for this section

const CardsSection = memo(() => {
  // List of card items
  const cardItems = [
    {
      image: "./src/assets/1.jpeg",
      alt: "Microcontroller",
      text: "Empower your IoT projects with versatile microcontrollers.",
    },
    {
      image: "./src/assets/2.jpeg",
      alt: "Robotics",
      text: "Revolutionize tasks with cutting-edge robotics solutions.",
    },
    {
      image: "./src/assets/3.jpeg",
      alt: "AR/VR",
      text: "Experience next-gen AR/VR technology for innovation.",
    },
    {
      image: "./src/assets/4.jpeg",
      alt: "Drones",
      text: "Innovate with advanced drone technology for various applications.",
    },
    {
      image: "./src/assets/5.jpeg",
      alt: "Gaming",
      text: "Immerse in the future of gaming with our tech solutions.",
    },
    {
      image: "./src/assets/6.jpeg",
      alt: "AI Automation",
      text: "Transform industries with AI-driven automation solutions.",
    },
  ];

  return (
    <section id="services">
      <div className="cards-section">
        <div className="card-container">
          {cardItems.map((item, index) => (
            <div className="card-item" key={index}>
              <div className="card">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="card-image"
                  loading="lazy" // Lazy load image
                />
                <div className="card-description">{item.text}</div>
                <div className="preview-button">Learn More</div>
              </div>
              <div className="card-text">{item.alt}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default CardsSection;
