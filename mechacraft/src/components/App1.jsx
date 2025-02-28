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
    
    const handleTouchStart = (event) => {
      startY = event.touches[0].clientY;
    };

    const handleTouchMove = (event) => {
      const touchY = event.touches[0].clientY;
      const scrollDirection = touchY < startY ? 1 : -1;
      currentSection = Math.min(Math.max(currentSection + scrollDirection, 0), sections.length - 1);
      scrollToSection(currentSection);
      startY = touchY;
    };
    
    window.addEventListener('wheel', handleScroll, { passive: false });
    window.addEventListener('touchstart', handleTouchStart, { passive: false });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    
    return () => {
      window.removeEventListener('wheel', handleScroll);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
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
