import React, { useEffect, useState } from 'react';
import './TestPart.css'; // Link to the combined CSS file - styles for this section are defined in TestPart.css

const testimonials = [
  {
    id: 1,
    image: "https://mechacraft.in/wp-content/uploads/2024/08/Ellipse-20.png",
    message: "The Embedded and IoT training was insightful, with practical exercises that were highly beneficial. It was a superb session with a few areas for enhancement.",
    authorName: "Ajay Dhanopia",
    authorTitle: "Head of Srijan Incubation cell"
  },
  {
    id: 2,
    image: "https://mechacraft.in/wp-content/uploads/2024/08/Ellipse-21.png",
    message: "The robotics workshop was dynamic and well-structured. The practical exercises were effective, and the instructor was expert and friendly. I’ll definitely recommend to others!",
    authorName: "Dr. Dheeraj Joshi",
    authorTitle: "H.O.D, ME"
  },
  {
    id: 3,
    image: "https://mechacraft.in/wp-content/uploads/2024/08/Ellipse-22.png",
    message: "The Embedded and IoT training was insightful, with practical exercises that were highly beneficial. It was a superb session with a few areas for enhancement.",
    authorName: "Amit Patel",
    authorTitle: "IoT Engineer"
  },
  {
    id: 4,
    image: "https://mechacraft.in/wp-content/uploads/2024/08/Ellipse-22.png",
    message: "The robotics workshop was dynamic and well-structured. The practical exercises were effective, and the instructor was expert and friendly. I’ll definitely recommend to others!",
    authorName: "Sneha Verma",
    authorTitle: "Workshop Participant"
  },
  {
    id: 5,
    image: "https://mechacraft.in/wp-content/uploads/2024/08/Ellipse-22.png",
    message: "The Embedded and IoT training was insightful, with practical exercises that were highly beneficial. It was a superb session with a few areas for enhancement.",
    authorName: "Rajesh Kumar",
    authorTitle: "Embedded Systems Developer"
  },
];

const TestimonialsSection1 = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="testimonial-card">
      <img
        src={testimonials[current].image}
        alt={`Testimonial ${current + 1}`}
        className="testimonial-image"
      />
      <p className='testimonial-message'>
        <strong>{testimonials[current].authorName}</strong>
        <br />
        {testimonials[current].authorTitle}
      </p>
      <p className="testimonial-message">
        {testimonials[current].message}
      </p>
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
  'https://mechacraft.in/wp-content/uploads/2024/07/sarthak-iti-1-768x768.png'
];

const PartnersSection = () => {
  return (
    <>
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
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          startCountingAnimation();
        }
      },
      { threshold: 0.5 }
    );

    const featureSection = document.querySelector('.feature-highlight');
    observer.observe(featureSection);

    return () => {
      if (featureSection) observer.unobserve(featureSection);
    };
  }, []);

  const startCountingAnimation = () => {
    const counters = document.querySelectorAll('.stat-number');
    counters.forEach(counter => {
      counter.innerText = '0';
      const updateCounter = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const increment = target / 400;

        if (count < target) {
          counter.innerText = `${Math.ceil(count + increment)}`;
          setTimeout(updateCounter, 10);
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
      <h1>Partners</h1>
      <div className="partners-section">
        <PartnersSection />
      </div>
    </section>
  );
};

export default TestPart;