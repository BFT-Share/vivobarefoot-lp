import React from 'react';
import '../App.css';

const StoreLocator = () => {
  return (
    <section id="store" className="section store-locator">
      <div className="store-content">
        <div className="store-info">
          <h2>Try Them On at K Village</h2>
          <p>We are thrilled to announce that VIVOBarefoot is now officially available at the Barefootinc Flagship Store in Bangkok. Come feel the ground with us.</p>
          
          <div className="address">
            <strong>Barefootinc Flagship Store</strong><br/>
            (Official distributor of Vibram FiveFingers)<br/>
            K Village, Bangkok<br/>
            Open Everyday
          </div>
          
          <a href="https://maps.app.goo.gl/QDGiLmfQCXt3Z2nM6" target="_blank" rel="noopener noreferrer" className="btn-primary">
            Get Directions
          </a>
        </div>
        
        <div className="store-map">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.9869622544525!2d100.5695848!3d13.7208242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29f8ec5f3541b%3A0x42529edbca4748fa!2sBarefootinc%20Flagship%20Store%20(Official%20distributor%20of%20Vibram%20FiveFingers)!5e0!3m2!1sen!2sth!4v1714459820000!5m2!1sen!2sth" 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Barefootinc Store Location"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default StoreLocator;
