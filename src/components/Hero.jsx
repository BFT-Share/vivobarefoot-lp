import React from 'react';
import '../App.css';

const Hero = () => {
  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
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
    <section id="home" className="hero">
      <div className="hero-content animate-fade-in-up">
        <h1>We Are Nature.<br/>Nature Is Us.</h1>
        <p>
          VIVOBarefoot is now officially available in Thailand at Barefootinc. 
          Step back into evolution and experience the ultimate natural health and barefoot movement.
        </p>
        <div className="hero-buttons">
          <a 
            href="#store" 
            className="btn-accent" 
            onClick={(e) => handleScrollTo(e, 'store')}
          >
            Visit K Village Store
          </a>
          <a 
            href="#catalog" 
            className="btn-primary" 
            style={{ border: '1px solid rgba(255,255,255,0.4)', background: 'rgba(255,255,255,0.1)' }}
            onClick={(e) => handleScrollTo(e, 'catalog')}
          >
            Explore Footwear
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
