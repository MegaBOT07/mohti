import React, { useEffect, useRef, useState } from 'react';
import HeroSection from './HeroSection';
import CardsSection from './CardsSection';
import TestPart from './TestPart';
import FeatureHighlight from './FeatureHighlight';
import Card from './card';

import './App1.css';

function App1() {
  const sectionsRef = useRef([]);
  const currentSectionIndexRef = useRef(0);
  const isScrollingRef = useRef(false);
  const [scrollEnabled, setScrollEnabled] = useState(false); // Add this line to control scrolling

  useEffect(() => {
    const sections = document.querySelectorAll('.section');
    sectionsRef.current = Array.from(sections);
    const sectionCount = sections.length;

    const scrollToSection = (index) => {
      if (index >= 0 && index < sectionCount && sectionsRef.current[index]) {
        isScrollingRef.current = true;
        sectionsRef.current[index].scrollIntoView({ 
          behavior: 'smooth',
          block: 'start',
          duration: 2000 // This makes the scroll take longer
        });

        setTimeout(() => {
          isScrollingRef.current = false;
        }, 2000); // Increased from 700 to 2000ms to match slower scroll
      }
    };

    const handleScroll = (scrollDirection) => {
      if (isScrollingRef.current || !scrollEnabled) { // Add scrollEnabled check
        return;
      }

      const nextSectionIndex = currentSectionIndexRef.current + scrollDirection;

      if (nextSectionIndex >= 0 && nextSectionIndex < sectionCount) {
        currentSectionIndexRef.current = nextSectionIndex;
        scrollToSection(nextSectionIndex);
      }
    };

    const handleWheel = (event) => {
      if (!scrollEnabled) { // Add this check to allow normal scrolling when disabled
        return;
      }
      const scrollDirection = event.deltaY > 0 ? 1 : -1;
      handleScroll(scrollDirection);
      event.preventDefault();
    };

    window.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWheel);
      clearTimeout();
    };
  }, [scrollEnabled]); // Add scrollEnabled to dependency array

  return (
    <div id="fullpage">
      <div className="section">
        <HeroSection />
      </div>
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