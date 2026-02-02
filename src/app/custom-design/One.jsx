import React from 'react';
import './One.css';

const One = () => {
  return (
    <div className="one-container">
      <div className="one-content">
        <div className="one-image">
          <img 
            src="https://www.asenseinterior.com/assets/uploads/30b09e16d48d442f16235552d2f0ed21.webp" 
            alt="1:1 Designer Collaboration - Modern kitchen design" 
          />
        </div>
        
        <div className="one-text">
          <p className="one-label">CREATIVE PARTNERSHIP</p>
          
          <h2 className="one-title">1:1 Designer Collaboration</h2>
          
          <p className="one-description">
            This isn't a one-way transaction. It's a creative partnership.
          </p>
          
          <p className="one-description">
            You share your vision. We translate it into a design. You give feedback. We refine. Together, we create something that feels authentically yours.
          </p>
          
          <p className="one-description">
            Video calls, WhatsApp support, multiple revisions — we're with you throughout the process.
          </p>
          
          <p className="one-tagline">
            Collaboration, not dictation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default One;