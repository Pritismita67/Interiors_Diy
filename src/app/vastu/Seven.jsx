'use client';

import React from 'react';
import './Seven.css';

const Seven = () => {
  const handleTalkToExpert = () => {
    window.open('https://api.whatsapp.com/send?phone=917710051499', '_blank');
  };

  return (
    <section className="seven-section">
      <div className="seven-overlay"></div>
      <div className="seven-container">
        <div className="seven-content">
          <h1 className="seven-title">
            Have Questions<br />About Vastu?
          </h1>
          
          <p className="seven-subtitle">
            Let's discuss how Vastu can complement your interior design
          </p>
          
          <p className="seven-description">
            No pressure. Just a conversation about harmonious living spaces and practical solutions.
          </p>
          
          <button 
            className="seven-button"
            onClick={handleTalkToExpert}
            aria-label="Talk to a Vastu Expert on WhatsApp"
          >
            Talk to a Vastu Expert
          </button>
        </div>
      </div>
    </section>
  );
};

export default Seven;