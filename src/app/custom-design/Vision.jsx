import React from 'react';
import './Vision.css';

const Vision = () => {
  return (
    <div className="vision-container">
      <div className="vision-overlay"></div>
      
      <div className="vision-content">
        <h1 className="vision-title">
          Let's Discuss<br className="mobile-break" /> Your Home
        </h1>
        
        <p className="vision-subtitle">
          Share your vision, and we'll help bring it to life
        </p>
        
        <p className="vision-description">
          No commitments. Just a conversation about your dream space and how we can<br className="desktop-break" />
          help create it.
        </p>
        
        <a 
          href="https://api.whatsapp.com/send?phone=917710051499" 
          target="_blank" 
          rel="noopener noreferrer"
          className="vision-cta-button"
        >
          Start Your Custom Journey
        </a>
      </div>
    </div>
  );
};

export default Vision;