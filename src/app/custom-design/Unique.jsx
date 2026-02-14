import React from 'react';
import './Unique.css';

const Unique = () => {
  return (
    <div className="unique-container">
      <div className="unique-overlay"></div>
      
      <div className="unique-content">
        <p className="unique-label">PERSONALIZED DESIGN JOURNEY</p>
        
        <h1 className="unique-title">
          Some Homes need<br />more than Templates
        </h1>
        
        <p className="unique-subtitle">
          When your space, lifestyle or vision is unique, <br className="desktop-break" />
          you deserve a custom approach.
        </p>
        
        <a 
          href="https://api.whatsapp.com/send?phone=917710051499" 
          target="_blank" 
          rel="noopener noreferrer"
          className="unique-cta-button"
        >
          Start Your Custom Journey
        </a>
      </div>
    </div>
  );
};

export default Unique;