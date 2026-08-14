import React from 'react';
import '../App.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content animate-fade-in">
        <h1>Reconnect With Nature</h1>
        <p>VIVOBarefoot is now officially available at Barefootinc. Experience the ultimate natural movement.</p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <a href="#store" className="btn-primary">Find Our Store</a>
          <a href="#philosophy" className="btn-secondary" style={{ borderColor: '#fff', color: '#fff' }}>Discover More</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
