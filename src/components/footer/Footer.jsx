import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h3>About Us</h3>
        <p>ClothesIn is your go-to destination for the latest trends and timeless fashion.</p>
      </div>
      <div className="footer-section">
        <h3>Quick Links</h3>
        <ul className="footer-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">Shop</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">About</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Contact Us</h3>
        <p>Email: support@clothesin.com</p>
        <p>Phone: +1 (555) 123-4567</p>
      </div>
      <div className="footer-section">
        <h3>Follow Us</h3>
        <div className="social-icons">
          <a href="#" className="icon">FB</a>
          <a href="#" className="icon">TW</a>
          <a href="#" className="icon">IG</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
