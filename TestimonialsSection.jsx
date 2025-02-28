import React, { useState, useEffect } from "react";
import "./TestimonialsSection.css";

const testimonials = [
  { id: 1, image: "./src/assets/test1.png" },
  { id: 2, image: "./src/assets/test2.png" },
  { id: 3, image: "./src/assets/test1.png" },
  { id: 4, image: "./src/assets/test2.png" },
  { id: 5, image: "./src/assets/test1.png" },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Change every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="testimonials-section">
      <div className="testimonial-card">
        <img
          src={testimonials[current].image}
          alt={`Testimonial ${current + 1}`}
          className="testimonial-image"
        />
      </div>
      <div className="carousel-indicators">
        {testimonials.map((_, index) => (
          <span
            key={index}
            className={`indicator ${index === current ? "active" : ""}`}
            onClick={() => setCurrent(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsSection;
