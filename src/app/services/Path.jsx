import React from 'react';
import './Path.css';

const Path = () => {
  return (
    <div className="path-container">
      <div className="path-overlay"></div>
      
      <div className="path-content">
        <p className="path-label">OUR SERVICES</p>
        
        <h1 className="path-title">
          Three Paths to Your<br />Dream Space
        </h1>
        
        <p className="path-subtitle">
          Choose the approach that fits your needs and budget
        </p>
        
        <p className="path-description">
          Everything is online. Everything is designed for you to execute yourself.<br className="desktop-break" />
          Everything is affordable.
        </p>
        
        <a 
          href="https://api.whatsapp.com/send?phone=917710051499" 
          target="_blank" 
          rel="noopener noreferrer"
          className="path-cta-button"
        >
          Chat With Us
        </a>
      </div>
    </div>
  );
};

export default Path;