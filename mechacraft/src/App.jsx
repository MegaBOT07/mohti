import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import NavBar from './components/Navbar';
import About from './components/About';
import App1 from './components/App1'; // For single-page layout sections like Hero, Cards, etc.

function App() {
  return (
    <Router>
      <div>
        <NavBar /> {/* Navbar appears on all pages */}
        <Routes>
          {/* Home page, which displays all sections */}
          <Route path="/" element={<App1 />} /> 

          {/* About page (this can be a new page) */}
          <Route path="/about" element={<About />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
