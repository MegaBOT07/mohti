import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function NavBar() {
  return (
    <nav className="navbar">
      <img src="./src/assets/logo.png" alt="Logo" className="logo" />
      <ul>
        <li><Link to="/">Home</Link></li>  {/* Home page which shows all sections */}
        <li><Link to="/about">About</Link></li>
        <li><Link to="/Contact">Contact Us</Link></li>
        <li><Link to="/services">Services</Link></li> {/* About page */}
      </ul>
    </nav>
  );
}

export default NavBar;