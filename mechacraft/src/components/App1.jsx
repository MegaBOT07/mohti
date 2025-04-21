import React, { useEffect, useRef } from 'react';
import HeroSection from './HeroSection';
import CardsSection from './CardsSection';
import TestPart from './TestPart';
import FeatureHighlight from './FeatureHighlight';
import Card from './card';

import './App1.css'; // Import your styles

function App1() {
  const sectionsRef = useRef([]);
  const currentSectionIndexRef = useRef(0);
  const isScrollingRef = useRef(false);

  useEffect(() => {
    const sections = document.querySelectorAll('.section');
    sectionsRef.current = Array.from(sections);
    const sectionCount = sections.length;

    const scrollToSection = (index) => {
      if (index >= 0 && index < sectionCount && sectionsRef.current[index]) {
        isScrollingRef.current = true;
        sectionsRef.current[index].scrollIntoView({ behavior: 'smooth' });

        setTimeout(() => {
          isScrollingRef.current = false;
        }, 700); // Adjust timeout as needed
      }
    };

    const handleScroll = (scrollDirection) => {
      if (isScrollingRef.current) {
        return;
      }

      const nextSectionIndex = currentSectionIndexRef.current + scrollDirection;

      if (nextSectionIndex >= 0 && nextSectionIndex < sectionCount) {
        currentSectionIndexRef.current = nextSectionIndex;
        scrollToSection(nextSectionIndex);
      }
    };

    const handleWheel = (event) => {
      const scrollDirection = event.deltaY > 0 ? 1 : -1;
      handleScroll(scrollDirection);
      event.preventDefault();
    };

    window.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWheel);
      clearTimeout();
    };
  }, []);

  return (
    <div id="fullpage">
      <div className="section">
        <HeroSection />
      </div>
      {/* <div className="section">
        <Agriculture />
      </div> */}
      <div className="section">
        <CardsSection />
      </div>
      <div className="section">
        <TestPart />
      </div>
      <div className='section'>
        <Card />
      </div>
      <div className="section">
        <FeatureHighlight />
      </div>
    </div>
  );
}

export default App1;