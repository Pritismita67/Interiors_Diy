import React from 'react';
import './Help.css';

const Help = () => {
  const whatsappLink = 'https://api.whatsapp.com/send?phone=917710051499';

  return (
    <section className="help-section">
      <div className="help-container">
        <p className="help-label">NEED HELP CHOOSING?</p>
        <h2 className="help-title">Let's Find Your Perfect Template</h2>
        <p className="help-description">
          Chat with us on WhatsApp. We'll help you choose the right design for your space.
        </p>
        <a 
          href={whatsappLink} 
          target="_blank" 
          rel="noopener noreferrer"
          className="help-button"
        >
          <span className="help-button-icon">💬</span>
          <span className="help-button-text">Help Me Choose a Template</span>
        </a>
      </div>
    </section>
  );
};

export default Help;