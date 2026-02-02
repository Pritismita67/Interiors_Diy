import React from 'react';
import './Transform.css';

const Transform = () => {
  return (
    <div className="transform-container">
      <div className="transform-overlay"></div>
      
      <div className="transform-content">
        <h1 className="transform-title">
          Ready to Transform<br />Your Space?
        </h1>
        
        <p className="transform-subtitle">
          Start your DIY interior design journey today.
        </p>
        
        <p className="transform-description">
          Chat with us on WhatsApp to begin. No commitments, just a conversation about<br className="desktop-break" />
          your dream home.
        </p>
        
        <a 
          href="https://api.whatsapp.com/send?phone=917710051499" 
          target="_blank" 
          rel="noopener noreferrer"
          className="whatsapp-button"
        >
          Chat on WhatsApp
        </a>
      </div>
    </div>
  );
};

export default Transform;