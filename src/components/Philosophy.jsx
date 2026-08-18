import React from 'react';
import '../App.css';

const Philosophy = () => {
  return (
    <section id="philosophy" className="section philosophy">
      <div className="animate-fade-in">
        <h2 className="section-title">The Barefoot Philosophy</h2>
        <p className="section-subtitle">
          99% of human history was spent barefoot or in minimalist footwear. 
          VIVOBarefoot designs shoes around the biomechanics of evolution, letting your feet behave like feet.
        </p>
      </div>

      <div className="philosophy-grid">
        <div className="philosophy-card">
          <div className="philosophy-icon-wrap">🦶</div>
          <h3>Wide (Fit)</h3>
          <p>
            Wide for natural stability. Modern shoes cramp your toes, ruining your balance. 
            Vivos give your toes space to splay, providing a solid, natural foundation.
          </p>
        </div>
        
        <div className="philosophy-card">
          <div className="philosophy-icon-wrap">🍃</div>
          <h3>Thin (Feel)</h3>
          <p>
            Thin for sensory feedback. Your feet contain thousands of nerve endings. 
            Our ultra-thin, puncture-resistant soles keep you connected to the ground.
          </p>
        </div>
        
        <div className="philosophy-card">
          <div className="philosophy-icon-wrap">🔄</div>
          <h3>Flexible (Flex)</h3>
          <p>
            Flexible for natural movement. Stiff heels and padded insoles make feet weak. 
            Vivos let your muscles and tendons stretch and contract, restoring natural strength.
          </p>
        </div>
      </div>

      {/* Normal vs Natural Foot Comparison */}
      <div className="comparison-wrapper">
        <div className="comparison-header">
          <h3>Normal vs. Natural Footwear</h3>
          <p>The differences are in the biomechanics. Here is why standard footwear weakens your feet, and how Vivos fix it.</p>
        </div>

        <div className="comparison-grid">
          <div className="comparison-image">
            {/* Using the pre-loaded brand graphic asset */}
            <img src="/graphic.png" alt="Biomechanics: Normal vs Natural Foot" />
          </div>

          <div>
            <div className="comparison-table">
              <div className="comparison-row th">
                <div className="comparison-feature">Feature</div>
                <div className="comparison-normal">Normal Shoes</div>
                <div className="comparison-natural">Vivo Barefoot</div>
              </div>

              <div className="comparison-row">
                <div className="comparison-feature">Toe Box Shape</div>
                <div className="comparison-normal">Narrow / Pointy (Squishes toes)</div>
                <div className="comparison-natural">Wide (Allows toes to splay)</div>
              </div>

              <div className="comparison-row">
                <div className="comparison-feature">Outsole Thickness</div>
                <div className="comparison-normal">Thick Padded (Muffles sensation)</div>
                <div className="comparison-natural">Ultra-Thin (Restores ground feel)</div>
              </div>

              <div className="comparison-row">
                <div className="comparison-feature">Heel Slope (Drop)</div>
                <div className="comparison-normal">Elevated Heel (Alters posture)</div>
                <div className="comparison-natural">Zero Drop (Aligns spine naturally)</div>
              </div>

              <div className="comparison-row">
                <div className="comparison-feature">Flexibility</div>
                <div className="comparison-normal">Stiff Sole (Restricts motion)</div>
                <div className="comparison-natural">Highly Flexible (Builds foot strength)</div>
              </div>

              <div className="comparison-row">
                <div className="comparison-feature">Foot Strength</div>
                <div className="comparison-normal">Weakens muscles via support</div>
                <div className="comparison-natural">Strengthens feet by up to 60%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
