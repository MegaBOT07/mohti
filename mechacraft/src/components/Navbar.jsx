import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close the menu when clicking outside
  const handleClickOutside = (event) => {
    if (!event.target.closest('.navbar')) {
      setIsMenuOpen(false);
    }
  };

  React.useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener('click', handleClickOutside);
    } else {
      document.removeEventListener('click', handleClickOutside);
    }

    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);

  return (
    <nav className="navbar">
      <img
        src="https://mechacraft.in/wp-content/uploads/2024/07/cropped-1Artboard-1-e1721458606712-1.png"
        alt="Logo"
        className="logo"
      />
      <button className="menu-toggle" onClick={toggleMenu}>
        {isMenuOpen ? '✖' : '☰'} {/* Hamburger or Cross icon */}
      </button>
      <ul className={`menu ${isMenuOpen ? 'open' : ''}`}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/Services">Services</Link></li>
        <li><Link to="/ContactUs">ContactUs</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;
