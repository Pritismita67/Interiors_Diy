'use client';

import React from 'react';
import './Browse.css';

const Browse = () => {
  const handleBrowseClick = () => {
    const yellowSection = document.getElementById('templates-section');
    if (yellowSection) {
      yellowSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

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
        <button
          className="browse-button"
          onClick={handleBrowseClick}
        >
          Browse Templates
        </button>
      </div>
    </section>
  );
};

export default Browse;