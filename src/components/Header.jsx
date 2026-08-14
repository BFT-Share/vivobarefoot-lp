import React, { useEffect, useState } from 'react';
import '../App.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="header" style={{ boxShadow: scrolled ? '0 2px 10px rgba(0,0,0,0.1)' : 'none' }}>
      <div className="header-content">
        <div className="logo">
          Barefootinc
        </div>
        <nav className="nav-links">
          <a href="#philosophy">Philosophy</a>
          <a href="#store">K Village Store</a>
          <a href="https://barefootinc.jp" target="_blank" rel="noopener noreferrer">Shop Now</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
