import React from 'react';
import './PartnersSection.css';

const logos = [
  './src/assets/partner1.jpeg',
  './src/assets/partner2.jpeg',
  './src/assets/partner3.jpeg',
  './src/assets/partner4.jpeg',
  './src/assets/partner5.jpeg'
];

const PartnersSection = () => {
  return (
    <div className="partners-section">
      <div className="logos">
        {[...logos, ...logos].map((logo, index) => (
          <div className="logo-container" key={index}>
            <img src={logo} alt={`Logo ${index + 1}`} className="logo" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnersSection;
