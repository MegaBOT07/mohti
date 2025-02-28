import React, { useEffect, useState } from 'react';
import './FeatureHighlight.css'; // Link to the CSS file
import Footer1 from './Footer1';
import TestimonialsSection from './TestimonialsSection';
import PartnersSection from './PartnersSection';

const FeatureHighlight = () => {
  const [isInView, setIsInView] = useState(false); // State to track visibility

  // Using IntersectionObserver to trigger animation when the section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true); // Trigger animation when the section is in view
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

  return (
    <section className="feature-highlight" id="footer">
      <div className="feature-container">
        
        {/* Stats Section */}
        <div className="stats">
          <div className="stat">
            <span className="stat-number">100</span>+ Projects
          </div>
          <div className="stat">
            <span className="stat-number">500</span>+ Students
          </div>
          <div className="stat">
            <span className="stat-number">10</span>+ Kits
          </div>
          <div className="stat">
            <span className="stat-number">20</span>+ Clients
          </div>
        </div>
        <TestimonialsSection />
        <PartnersSection />
      </div>
    </section>
  );
};

export default FeatureHighlight;
