import React, { memo, useState } from "react";
import "./CardsSection.css"; // Import your CSS file for this section

const CardsSection = memo(() => {
  // List of card items
  const cardItems = [
    {
      image: "https://images.pexels.com/photos/4709362/pexels-photo-4709362.jpeg",
      alt: "Microcontroller",
      text: "Empower your IoT projects with versatile microcontrollers.",
    },
    {
      image: "https://images.pexels.com/photos/30721139/pexels-photo-30721139/free-photo-of-elegant-black-dress-fashion-portrait-in-studio.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
      alt: "Robotics",
      text: "Revolutionize tasks with cutting-edge robotics solutions.",
    },
    {
      image: "./public/assets/3.jpeg",
      alt: "AR/VR",
      text: "Experience next-gen AR/VR technology for innovation.",
    },
    {
      image: "https://images.pexels.com/photos/4402618/pexels-photo-4402618.jpeg?cs=srgb&dl=pexels-quirva-4402618.jpg&fm=jpg",
      alt: "Drones",
      text: "Innovate with advanced drone technology for various applications.",
    },
    {
      image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRwHKWHFwPiGRjwqAXzI3DeAiCXB0PspjZ1WD5C5oQPkuRqhDUy",
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
