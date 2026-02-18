import React from 'react';
import './Wisdom.css';

const Wisdom = () => {
  return (
    <div className="wisdom-container">
      <div className="wisdom-overlay"></div>
      
      <div className="wisdom-content">
        <p className="wisdom-label">ANCIENT WISDOM, MODERN APPLICATION</p>
        
        <h1 className="wisdom-title">
          Vastu is about space,<br />
          flow, and balance, <br />
         not fear or superstition
        </h1>
        
        <p className="wisdom-subtitle">
          A professional, architectural approach to harmonizing <br className="desktop-break" />
          your living environment.
        </p>
        
        <a 
          href="https://api.whatsapp.com/send?phone=917710051499" 
          target="_blank" 
          rel="noopener noreferrer"
          className="wisdom-cta-button"
        >
          Talk to a Vastu Expert
        </a>
      </div>
    </div>
  );
};

export default Wisdom;