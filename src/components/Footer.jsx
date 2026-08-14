import React from 'react';
import '../App.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-col">
          <h4>Barefootinc TH</h4>
          <ul>
            <li><a href="#philosophy">About Us</a></li>
            <li><a href="#store">Our Store</a></li>
            <li><a href="https://barefootinc.jp" target="_blank" rel="noopener noreferrer">Shop Japan</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Customer Care</h4>
          <ul>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Shipping & Returns</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Follow Us</h4>
          <ul>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Line Official</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Barefootinc Thailand. All rights reserved. VIVOBarefoot is a registered trademark.
      </div>
    </footer>
  );
};

export default Footer;
