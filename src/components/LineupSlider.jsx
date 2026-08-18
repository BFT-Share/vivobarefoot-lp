import React, { useState } from 'react';
import '../App.css';

const LineupGrid = () => {
  // We keep the component name as LineupSlider if it's imported that way in App.jsx,
  // but internally we can name it LineupGrid. 
  // Wait, I should make sure the export matches what App.jsx imports.
  // App.jsx imports `LineupSlider` so I must export default LineupSlider.

  const lineup = [
    {
      id: 'gobi_iii',
      name: 'Gobi III Sneaker Leather Mens',
      price: 'THB 9,200.00',
      category: 'EVERYDAY',
      image: '/products/gobi_iii.png',
      badge: '',
      swatches: ['/products/gobi_iii.png', '/products/primus_trail_fg.png', '/products/geo_court_iv.png']
    },
    {
      id: 'primus_trail_fg',
      name: 'Primus Trail Knit FG Grounding Mens',
      price: 'THB 7,950.00',
      category: 'ROAD RUNNING / TRAIL RUNNING',
      image: '/products/primus_trail_fg.png',
      badge: 'NEW STYLE',
      swatches: ['/products/primus_trail_fg.png']
    },
    {
      id: 'primus_lite_knit',
      name: 'Primus Lite Knit Natural Mens',
      price: 'THB 7,950.00',
      category: 'ROAD RUNNING / FUNCTIONAL FITNESS / WEIGHT + STRENGTH TRAINING / PRIMAL MOVEMENT / CALISTHENICS / TRAINING',
      image: '/products/primus_lite_knit.png',
      badge: 'NEW COLOUR',
      swatches: ['/products/primus_lite_knit.png', '/products/ra_iv.png', '/products/gobi_iii.png', '/products/motus_strength_ii.png', '/products/primus_lite_iv.png']
    },
    {
      id: 'tracker_leather',
      name: 'Tracker Leather AT Low II Mens',
      price: 'THB 9,800.00',
      category: 'HIKING / OUTDOOR LIFESTYLE',
      image: '/products/ra_iv.png', // Using ra_iv as a placeholder for the brown shoe
      badge: '',
      swatches: ['/products/ra_iv.png', '/products/primus_trail_fg.png']
    }
  ];

  // State to handle which swatch is active (for demonstration)
  // In a real app, this would change the main image.
  const [activeSwatches, setActiveSwatches] = useState({});

  const handleSwatchClick = (productId, swatchIndex) => {
    setActiveSwatches(prev => ({
      ...prev,
      [productId]: swatchIndex
    }));
  };

  return (
    <section id="catalog" className="section lineup-grid-section">
      <div className="product-grid">
        {lineup.map((product) => {
          const activeIndex = activeSwatches[product.id] || 0;
          return (
            <div key={product.id} className="product-card">
              <div className="product-image-container">
                {product.badge && <span className="product-badge">{product.badge}</span>}
                <img src={product.swatches[activeIndex]} alt={product.name} className="product-main-image" />
              </div>
              
              <div className="product-swatches">
                {product.swatches.map((swatch, index) => (
                  <button 
                    key={index} 
                    className={`swatch-btn ${index === activeIndex ? 'active' : ''}`}
                    onClick={() => handleSwatchClick(product.id, index)}
                    aria-label={`Select color option ${index + 1}`}
                  >
                    <img src={swatch} alt={`Color option ${index + 1}`} />
                  </button>
                ))}
              </div>

              <div className="product-info">
                <div className="product-header-row">
                  <h3 className="product-name">{product.name}</h3>
                  <span className="product-price">{product.price}</span>
                </div>
                <p className="product-category">{product.category}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default LineupGrid;
