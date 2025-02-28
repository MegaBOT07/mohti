import React from 'react';
import './Footer1.css';

const Footer1 = () => {
  return (
    <footer className="footer1">
      <div className='content'>
        <div className="footer1-section contact" id='contact'>
          <h2>Contact Us</h2>
          <p><strong>Email:</strong> info@yourcompany.com</p>
          <p><strong>Phone:</strong> +91-123-456-7890</p>
          <p><strong>Address:</strong> 123 Your Street, Your City, Your State, 12345</p>
        </div>
        <div className="footer1-section social" id='social'>
          <h2>Follow Us</h2>
          <a href="https://www.facebook.com/people/MechaCraft-Technologies/61559910946002/" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://www.threads.net/@mechacraftofficial" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://in.linkedin.com/company/mechacraft-technologies" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://www.instagram.com/mechacraftofficial/p/DFrTnHuymlM/" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
        </div>
        <div className="footer1-bottom">
          &copy; 2025 Your Company. All rights reserved.
        </div>
    </footer>
    

  );
};

export default Footer1;
