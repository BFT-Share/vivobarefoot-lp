import React from 'react';
import '../App.css';

const Footer = () => {
  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
    if (targetId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(targetId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <h3>BAREFOOTINC<span style={{ color: 'var(--color-accent)' }}>.TH</span></h3>
          <p>
            Official distributor of Vibram FiveFingers and VIVOBarefoot in Thailand. 
            Reconnecting feet to nature.
          </p>
          <div className="footer-bcorp">
            <span className="bcorp-dot"></span>
            Certified B Corp UK 2020
          </div>
        </div>

        <div className="footer-col">
          <h4>Navigation</h4>
          <ul>
            <li><a href="#" onClick={(e) => handleScrollTo(e, 'home')}>Home</a></li>
            <li><a href="#philosophy" onClick={(e) => handleScrollTo(e, 'philosophy')}>Philosophy</a></li>
            <li><a href="#catalog" onClick={(e) => handleScrollTo(e, 'catalog')}>Collections</a></li>
            <li><a href="#store" onClick={(e) => handleScrollTo(e, 'store')}>K Village Store</a></li>
            <li><a href="#faq" onClick={(e) => handleScrollTo(e, 'faq')}>FAQ</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Official Shop</h4>
          <ul>
            <li><a href="https://barefootinc.jp" target="_blank" rel="noopener noreferrer">Shop Japan Online</a></li>
            <li><a href="https://line.me" target="_blank" rel="noopener noreferrer">Line Official Store</a></li>
            <li><a href="#store" onClick={(e) => handleScrollTo(e, 'store')}>Bangkok Showroom</a></li>
            <li><a href="#">Size Guide Helper</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Connect With Us</h4>
          <ul>
            <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://line.me" target="_blank" rel="noopener noreferrer">Line OA (@barefootinc)</a></li>
            <li><a href="tel:+6626612993">Phone: +66 2 661 2993</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-copy">
          &copy; {new Date().getFullYear()} Barefootinc Thailand. All rights reserved.<br/>
          VIVOBarefoot &reg; is a registered trademark of VIVOBarefoot Limited.
        </div>
        <div className="footer-socials">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">FB</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">IG</a>
          <a href="https://line.me" target="_blank" rel="noopener noreferrer" aria-label="Line">LN</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
