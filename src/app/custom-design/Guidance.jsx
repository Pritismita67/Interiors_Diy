import React from 'react';
import './Guidance.css';

const Guidance = () => {
  return (
    <div className="guidance-container">
      <div className="guidance-content">
        <div className="guidance-text">
          <p className="guidance-label">YOUR VISION, OUR EXPERTISE</p>
          
          <h2 className="guidance-title">Creativity + Guidance</h2>
          
          <p className="guidance-description">
            We give you options, not dictates.
          </p>
          
          <p className="guidance-description">
            Every custom consult includes multiple design directions. You choose what resonates. We provide the roadmap to execute it.
          </p>
          
          <p className="guidance-description">
            It's your home. You should have the final say, with professional guidance every step of the way.
          </p>
          
          <p className="guidance-tagline">
            Your choice. Our expertise. Perfect harmony.
          </p>
        </div>
        
        <div className="guidance-image">
          <img 
            src="https://i.etsystatic.com/22485202/r/il/8f8df9/5268243375/il_570xN.5268243375_kfxa.jpg" 
            alt="Creativity and guidance - Modern living room design" 
          />
        </div>
      </div>
    </div>
  );
};

export default Guidance;