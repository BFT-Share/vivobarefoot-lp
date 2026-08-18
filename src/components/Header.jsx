import React, { useEffect, useState } from 'react';
import '../App.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      // Background shift on scroll
      setScrolled(window.scrollY > 50);

      // Simple active link tracker
      const sections = ['home', 'philosophy', 'catalog', 'store', 'faq'];
      const scrollPos = window.scrollY + 120; // offset

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e, sectionId) => {
    e.preventDefault();
    setMobileOpen(false);
    
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setActiveSection('home');
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80; // offset for sticky header
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
    }
  };

  return (
    <>
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="header-content">
          <div className="logo-container" style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }} onClick={(e) => handleLinkClick(e, 'home')}>
            <img src="/logo.png" alt="Barefootinc Logo" className="header-logo" style={{ height: '35px', width: 'auto' }} />
          </div>

          {/* Desktop Nav */}
          <nav className="nav-links">
            <a 
              href="#" 
              className={activeSection === 'home' ? 'active' : ''} 
              onClick={(e) => handleLinkClick(e, 'home')}
            >
              Home
            </a>
            <a 
              href="#philosophy" 
              className={activeSection === 'philosophy' ? 'active' : ''} 
              onClick={(e) => handleLinkClick(e, 'philosophy')}
            >
              Philosophy
            </a>
            <a 
              href="#catalog" 
              className={activeSection === 'catalog' ? 'active' : ''} 
              onClick={(e) => handleLinkClick(e, 'catalog')}
            >
              Collections
            </a>
            <a 
              href="#store" 
              className={activeSection === 'store' ? 'active' : ''} 
              onClick={(e) => handleLinkClick(e, 'store')}
            >
              K Village Store
            </a>
            <a 
              href="#faq" 
              className={activeSection === 'faq' ? 'active' : ''} 
              onClick={(e) => handleLinkClick(e, 'faq')}
            >
              FAQ
            </a>
            <a 
              href="https://barefootinc.jp" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-primary btn-shop"
            >
              Shop Online
            </a>
          </nav>

          {/* Hamburger toggle */}
          <button 
            className={`mobile-menu-btn ${mobileOpen ? 'open' : ''}`} 
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <div className={`mobile-nav ${mobileOpen ? 'open' : ''}`}>
        <a href="#" onClick={(e) => handleLinkClick(e, 'home')}>Home</a>
        <a href="#philosophy" onClick={(e) => handleLinkClick(e, 'philosophy')}>Philosophy</a>
        <a href="#catalog" onClick={(e) => handleLinkClick(e, 'catalog')}>Collections</a>
        <a href="#store" onClick={(e) => handleLinkClick(e, 'store')}>K Village Store</a>
        <a href="#faq" onClick={(e) => handleLinkClick(e, 'faq')}>FAQ</a>
        <a 
          href="https://barefootinc.jp" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn-accent btn-shop"
        >
          Shop Online
        </a>
      </div>
    </>
  );
};

export default Header;
