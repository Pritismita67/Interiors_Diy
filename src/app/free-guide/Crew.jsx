import React from 'react';
import './Crew.css';

const Crew = () => {
  return (
    <div className="crew-container">
      <div className="crew-content">

        <div className="crew-header">
          <h2 className="crew-title">Design Your Dream Space</h2>
          <p className="crew-description">
            Transform your home with professional design principles that create beautiful,
            functional spaces you'll love for years to come
          </p>
        </div>

        <div className="crew-grid">
          <div className="crew-card">
            <img
              src="/b2.jpg"
              alt="Living room interior design"
              className="crew-image"
            />
          </div>
          <div className="crew-card">
            <img
              src="/b1.jpg"
              alt="Modern living room design"
              className="crew-image"
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Crew;