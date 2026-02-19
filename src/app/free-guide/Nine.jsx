import React from 'react';
import './Nine.css';

const Nine = () => {
  return (
    <div className="nine-container">
      <div className="nine-content">

        <div className="nine-stat">
          <h2 className="nine-number">2,500+</h2>
          <p className="nine-label">Happy Homeowners</p>
        </div>

        <div className="nine-divider" />

        <div className="nine-stat">
          <h2 className="nine-number">4.9/5</h2>
          <p className="nine-label">Average Rating</p>
        </div>

        <div className="nine-divider" />

        <div className="nine-stat">
          <h2 className="nine-number">15+</h2>
          <p className="nine-label">Years Experience</p>
        </div>

      </div>
    </div>
  );
};

export default Nine;