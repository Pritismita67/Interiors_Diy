import React from 'react';
import './Browse.css';

const Browse = () => {
  return (
    <section className="browse-section">
      <div className="browse-overlay"></div>
      <div className="browse-content">
        <p className="browse-subtitle">READY-MADE DESIGN SOLUTIONS</p>
        <h1 className="browse-title">
          Not every home needs a custom designer
        </h1>
        <p className="browse-description">
          Sometimes, all you need is a proven template and the confidence to execute it yourself.
        </p>
        <a 
          href="https://api.whatsapp.com/send?phone=917710051499" 
          target="_blank"
          rel="noopener noreferrer"
          className="browse-button"
        >
          Browse Templates
        </a>
      </div>
    </section>
  );
};

export default Browse;