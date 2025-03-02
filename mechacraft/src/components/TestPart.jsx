import React, { useEffect, useState } from 'react';
import './TestPart.css'; // Link to the combined CSS file

const testimonials = [
  { id: 1, image: "https://mechacraft.in/wp-content/uploads/2024/08/Ellipse-20.png", message: "We are proud to have collaborated with such a dedicated team!"},
  { id: 2, image: "https://mechacraft.in/wp-content/uploads/2024/08/Ellipse-21.png", message: "Their expertise and commitment were truly remarkable." },
  { id: 3, image: "https://mechacraft.in/wp-content/uploads/2024/08/Ellipse-22.png", message: "A fantastic partnership that delivered outstanding results." },
  { id: 4, image: "https://mechacraft.in/wp-content/uploads/2024/08/Ellipse-20.png", message: "Highly professional and a pleasure to work with." },
  { id: 5, image: "https://mechacraft.in/wp-content/uploads/2024/08/Ellipse-21.png", message: "Exceptional service and great results every time." },
];

const TestimonialsSection1 = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Change every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="testimonial-card">
      <img
        src={testimonials[current].image}
        alt={`Testimonial ${current + 1}`}
        className="testimonial-image"
      />
      <p className="testimonial-message">{testimonials[current].message}</p>
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

const logos = [
  'https://mechacraft.in/wp-content/uploads/2024/07/imgbin_jaipur-national-university-jecrc-university-rajasthan-technical-university-skit-college-swami-keshvanand-institute-of-pharmacy-png-4-768x788.png',
  'https://mechacraft.in/wp-content/uploads/2024/07/srijan-1-768x849.png',
  'https://mechacraft.in/wp-content/uploads/2024/07/robotics-club-1-1-768x768.png',
  'https://mechacraft.in/wp-content/uploads/2024/07/mc-global-school.jpeg-768x768.png',
  'https://mechacraft.in/wp-content/uploads/2024/07/mc-global-school.jpeg-768x768.png'
];


const PartnersSection = () => {
  return (
    <>
      <p className="partners-heading">Partners</p>
      <div className="partners-section">
        <div className="logos">
          {[...logos, ...logos].map((logo, index) => (
            <div className="logo-container" key={index}>
              <img src={logo} alt={`Logo ${index + 1}`} className="logo" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

const TestPart = () => {
  const [isInView, setIsInView] = useState(false); // State to track visibility

  // Using IntersectionObserver to trigger animation when the section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true); // Trigger animation when the section is in view
          startCountingAnimation(); // Start the counting animation when the section is in view
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    const featureSection = document.querySelector('.feature-highlight');
    observer.observe(featureSection);

    return () => {
      if (featureSection) observer.unobserve(featureSection); // Clean up observer
    };
  }, []);

  const startCountingAnimation = () => {
    const counters = document.querySelectorAll('.stat-number');
    counters.forEach(counter => {
      counter.innerText = '0';
      const updateCounter = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const increment = target / 400; // Slowed down the increment

        if (count < target) {
          counter.innerText = `${Math.ceil(count + increment)}`;
          setTimeout(updateCounter, 10); // Slowed down the update interval
        } else {
          counter.innerText = target;
        }
      };
      updateCounter();
    });
  };

  return (
    <section className="feature-highlight" id="footer">
      <div className="feature-container1">
        
        {/* Stats Section */}
        <div className={`stats ${isInView ? 'animate' : ''}`}>
          <div className="stat">
            <span className="stat-number" data-target="100">100</span>+ Projects
          </div>
          <div className="stat">
            <span className="stat-number" data-target="500">500</span>+ Students
          </div>
          <div className="stat">
            <span className="stat-number" data-target="10">10</span>+ Kits
          </div>
          <div className="stat">
            <span className="stat-number" data-target="20">20</span>+ Clients
          </div>
        </div>
        <div className="testimonials-section">
          <TestimonialsSection1 />
        </div>
      </div>
      <div className="partners-section">
        <PartnersSection />
      </div>
    </section>
  );
};

export default TestPart;
