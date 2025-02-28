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
      image: "https://images.pexels.com/photos/6153741/pexels-photo-6153741.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      alt: "Robotics",
      text: "Revolutionize tasks with cutting-edge robotics solutions.",
    },
    {
      image: "https://adsgrill.com/wp-content/uploads/2024/12/Untitled-design-3.png",
      alt: "AR/VR",
      text: "Experience next-gen AR/VR technology for innovation.",
    },
    {
      image: "https://images.pexels.com/photos/4402618/pexels-photo-4402618.jpeg?cs=srgb&dl=pexels-quirva-4402618.jpg&fm=jpg",
      alt: "Drones",
      text: "Innovate with advanced drone technology for various applications.",
    },
    {
      image: "https://images.pexels.com/photos/1337247/pexels-photo-1337247.jpeg?cs=srgb&dl=pexels-garrettmorrow-1337247.jpg&fm=jpg",
      alt: "Gaming",
      text: "Immerse in the future of gaming with our tech solutions.",
    },
    {
      image: "https://images.pexels.com/photos/8386364/pexels-photo-8386364.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
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
