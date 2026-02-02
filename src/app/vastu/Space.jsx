import React from 'react';
import './Space.css';

const Space = () => {
  return (
    <section className="vastu-section">
      <div className="vastu-container">
        <div className="vastu-content">
          <div className="text-content">
            <h3 className="section-subtitle">UNDERSTANDING VASTU</h3>
            <h1 className="section-title">Space, Light, and Energy</h1>
            
            <p className="description-text">
              Vastu Shastra is an ancient Indian science of architecture and spatial
              design. At its core, it's about optimizing natural elements — light, air, and
              space — to create harmonious living environments.
            </p>
            
            <p className="description-text">
              Modern architecture has rediscovered many Vastu principles: natural
              ventilation, optimal sunlight, functional zoning, and energy-efficient
              layouts. These aren't mystical concepts — they're practical design
              strategies.
            </p>
            
            <p className="description-text">
              We approach Vastu as architects, not astrologers. Our recommendations
              are grounded in spatial logic, comfort, and functionality.
            </p>
            
            <p className="tagline">
              Architecture, not astrology. Science, not superstition.
            </p>
          </div>
          
          <div className="image-content">
            <img 
              src="/v2.jpg" 
              alt="Modern interior design with natural light and open space" 
              className="vastu-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Space;