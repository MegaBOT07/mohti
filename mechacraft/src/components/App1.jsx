import React, { useEffect } from 'react';
import HeroSection from './HeroSection';
import CardsSection from './CardsSection';
import Footer from './Footer';
import FeatureHighlight from './FeatureHighlight';

import './App1.css'; // Import your styles

function App1() {
  useEffect(() => {
    const sections = document.querySelectorAll('.section');
    let currentSection = 0;
    
    const scrollToSection = (index) => {
      sections[index].scrollIntoView({ behavior: 'smooth' });
    };
    
    const handleScroll = (event) => {
      const scrollDirection = event.deltaY > 0 ? 1 : -1;
      currentSection = Math.min(Math.max(currentSection + scrollDirection, 0), sections.length - 1);
      scrollToSection(currentSection);
      event.preventDefault();
    };
    
    window.addEventListener('wheel', handleScroll, { passive: false });
    
    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, []);
  
  return (
    <div id="fullpage">
      <div className="section">
        <HeroSection />
      </div>
      <div className="section">
        <CardsSection />
      </div>

      <div className="section">
        <FeatureHighlight />
      </div>
    </div>
  );
}

export default App1;
