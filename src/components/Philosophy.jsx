import React from 'react';
import '../App.css';

const Philosophy = () => {
  return (
    <section id="philosophy" className="section philosophy">
      <h2 className="section-title">The Barefoot Experience</h2>
      <div className="philosophy-grid">
        <div className="philosophy-item">
          <div className="philosophy-icon">〰️</div>
          <h3>Wide</h3>
          <p>Wide for natural stability. Give your toes the room they need to spread out and provide a solid foundation.</p>
        </div>
        <div className="philosophy-item">
          <div className="philosophy-icon">⬇️</div>
          <h3>Thin</h3>
          <p>Thin for natural sensory feedback. Feel the ground and awaken the nerves in your feet.</p>
        </div>
        <div className="philosophy-item">
          <div className="philosophy-icon">🔄</div>
          <h3>Flexible</h3>
          <p>Flexible for natural movement. Our shoes let your feet move naturally, just as nature intended.</p>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
