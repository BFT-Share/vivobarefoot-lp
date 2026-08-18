import React from 'react';
import '../App.css';

const StoreLocator = () => {
  return (
    <section id="store" className="section store-locator">
      <div className="store-grid">
        <div className="store-card animate-fade-in">
          <h2>Try Them On in Bangkok</h2>
          <p>
            VIVOBarefoot shoes are now officially available for trying and fitting at the Barefootinc Flagship Store in Bangkok. 
            Come experience the ground feel first-hand, verify your barefoot size, and receive personalized advice from our movement specialists.
          </p>

          <div className="store-detail-list">
            <div className="store-detail-item">
              <div className="store-detail-icon">📍</div>
              <div className="store-detail-text">
                <h4>Flagship Store Location</h4>
                <p>Barefootinc Flagship Store (G Floor, Room B109), K Village Shopping Mall, Sukhumvit 26, Khlong Toei, Bangkok 10110</p>
              </div>
            </div>

            <div className="store-detail-item">
              <div className="store-detail-icon">⏰</div>
              <div className="store-detail-text">
                <h4>Opening Hours</h4>
                <p>Open Everyday: 10:00 AM – 8:00 PM</p>
              </div>
            </div>

            <div className="store-detail-item">
              <div className="store-detail-icon">💬</div>
              <div className="store-detail-text">
                <h4>Contact & Inquiries</h4>
                <p>Line Official: @barefootinc | Phone: +66 2 661 2993</p>
              </div>
            </div>
          </div>

          <div className="store-actions">
            <a 
              href="https://maps.app.goo.gl/QDGiLmfQCXt3Z2nM6" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-primary"
            >
              Get Directions
            </a>
            <a 
              href="https://line.me" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-secondary"
            >
              Chat on Line OA
            </a>
          </div>
        </div>

        <div className="store-map-container animate-fade-in">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.9869622544525!2d100.5695848!3d13.7208242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29f8ec5f3541b%3A0x42529edbca4748fa!2sBarefootinc%20Flagship%20Store%20(Official%20distributor%20of%20Vibram%20FiveFingers)!5e0!3m2!1sen!2sth!4v1714459820000!5m2!1sen!2sth" 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Barefootinc K Village Location"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default StoreLocator;
