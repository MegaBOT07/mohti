import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function NavBar() {
  return (
    <nav className="navbar">
      <img src="https://mechacraft.in/wp-content/uploads/2024/07/cropped-1Artboard-1-e1721458606712-1.png" alt="Logo" className="logo" />
      <ul>
        <li><Link to="/">Home</Link></li>  {/* Home page which shows all sections */}
        <li><Link to="/about">About</Link></li>
        <li><Link to="/Services">Sercvices</Link></li>
        <li><Link to="/ContactUs">ContactUs</Link></li> {/* About page */}
      </ul>
    </nav>
  );
}

export default NavBar;