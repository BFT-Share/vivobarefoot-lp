import React, { useState } from 'react';
import '../App.css';

const ProductCatalog = () => {
  const [activeTab, setActiveTab] = useState('active');

  const products = {
    active: [
      {
        id: 'primus',
        name: 'Primus Lite III',
        tagline: 'Run like nature depends on it',
        description: 'Our hero trainer for road running, workouts, and functional fitness. Extremely lightweight and made from recycled plastics to keep your feet feeling free.',
        image: '/feature-1.jpg',
        badge: 'Best Seller',
        specs: {
          weight: '160g (Single Shoe)',
          outsole: '3mm Primus Outsole',
          materials: 'Recycled Polyester & Vegan'
        },
        link: 'https://barefootinc.jp'
      },
      {
        id: 'motus',
        name: 'Motus Strength',
        tagline: 'Reclaim your super-natural potential',
        description: 'Engineered specifically for high-impact training, gym sessions, and crossfit. Features added lateral stability wraps while maintaining natural zero-drop alignment.',
        image: '/feature-2.jpg',
        badge: 'Training Spec',
        specs: {
          weight: '240g (Single Shoe)',
          outsole: '4mm High-Traction Rubber',
          materials: 'Breathable Mesh & Bio-based TPU'
        },
        link: 'https://barefootinc.jp'
      }
    ],
    outdoor: [
      {
        id: 'tracker',
        name: 'Tracker Forest ESC',
        tagline: 'When the wilderness calls',
        description: 'Designed for extreme terrains and off-trail hiking. Features a high-performance Michelin rubber outsole to handle mud, rock, and forest trails.',
        image: '/feature-1.jpg',
        badge: 'Michelin Outsole',
        specs: {
          weight: '490g (Single Shoe)',
          outsole: 'Michelin Off-Road (5.5mm Lugs)',
          materials: 'Wild Hide Leather & Wool Lining'
        },
        link: 'https://barefootinc.jp'
      },
      {
        id: 'magna',
        name: 'Magna Lite WR',
        tagline: 'Thrive in the unexpected',
        description: 'A multi-terrain hiking boot with a unique knitted ankle collar for maximum ankle mobility and entry ease. Water-resistant and ultra lightweight.',
        image: '/feature-2.jpg',
        badge: 'Water Resistant',
        specs: {
          weight: '320g (Single Shoe)',
          outsole: 'Firm Ground Outsole (3mm)',
          materials: 'Recycled Knit & Water-Resistant Mesh'
        },
        link: 'https://barefootinc.jp'
      }
    ],
    everyday: [
      {
        id: 'gobi',
        name: 'Gobi III',
        tagline: 'Live barefoot everyday',
        description: 'Re-imagined classic desert boot built from a foot\'s perspective. Made from premium, sustainably sourced wild hide leather that gets better with every step.',
        image: '/feature-2.jpg',
        badge: 'Premium Leather',
        specs: {
          weight: '210g (Single Shoe)',
          outsole: 'Lifestyle Outsole (4mm)',
          materials: 'Wild Hide Leather & Cork Insole'
        },
        link: 'https://barefootinc.jp'
      },
      {
        id: 'geo',
        name: 'Geo Court III',
        tagline: 'Minimalist work-ready essentials',
        description: 'Our retro court-inspired sneaker designed to bring foot freedom into your work and urban everyday life. Clean design with premium materials.',
        image: '/feature-1.jpg',
        badge: 'Urban Essential',
        specs: {
          weight: '230g (Single Shoe)',
          outsole: 'Classic Outsole (4mm)',
          materials: 'Sustainably Sourced Leather'
        },
        link: 'https://barefootinc.jp'
      }
    ]
  };

  return (
    <section id="catalog" className="section catalog">
      <div className="animate-fade-in">
        <h2 className="section-title">Explore VIVOBarefoot</h2>
        <p className="section-subtitle">
          From performance trainers to off-trail hiking boots and everyday essentials. 
          Choose the collection that matches your movement.
        </p>
      </div>

      <div className="catalog-tabs">
        <button 
          className={`catalog-tab-btn ${activeTab === 'active' ? 'active' : ''}`}
          onClick={() => setActiveTab('active')}
        >
          Active (Gym & Road)
        </button>
        <button 
          className={`catalog-tab-btn ${activeTab === 'outdoor' ? 'active' : ''}`}
          onClick={() => setActiveTab('outdoor')}
        >
          Outdoor (Trail & Hike)
        </button>
        <button 
          className={`catalog-tab-btn ${activeTab === 'everyday' ? 'active' : ''}`}
          onClick={() => setActiveTab('everyday')}
        >
          Everyday (Lifestyle)
        </button>
      </div>

      <div className="catalog-grid">
        {products[activeTab].map((product) => (
          <div key={product.id} className="catalog-card animate-fade-in">
            <div className="catalog-img-container">
              <span className="catalog-badge">{product.badge}</span>
              <img src={product.image} alt={product.name} />
            </div>
            
            <div className="catalog-info">
              <h3>{product.name}</h3>
              <p className="catalog-tagline">“{product.tagline}”</p>
              <p className="catalog-desc">{product.description}</p>
              
              <div className="catalog-spec">
                <div className="catalog-spec-item">
                  <span className="catalog-spec-label">Weight:</span>
                  <span className="catalog-spec-val">{product.specs.weight}</span>
                </div>
                <div className="catalog-spec-item">
                  <span className="catalog-spec-label">Outsole:</span>
                  <span className="catalog-spec-val">{product.specs.outsole}</span>
                </div>
                <div className="catalog-spec-item">
                  <span className="catalog-spec-label">Materials:</span>
                  <span className="catalog-spec-val">{product.specs.materials}</span>
                </div>
              </div>

              <a 
                href={product.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-secondary catalog-cta"
              >
                Shop on Barefootinc
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductCatalog;
