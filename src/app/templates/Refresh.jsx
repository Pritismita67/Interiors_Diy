import React from 'react';
import './Refresh.css';

const Refresh = () => {
  return (
    <section className="refresh-section">
      <div className="refresh-container">
        <div className="refresh-image-wrapper">
          <img 
            src="https://cdn.sanity.io/images/k55su7ch/production2/d9e35a73891d43ccb0bc665bf2e0d5d9d6f1ea2b-4200x2363.jpg?w=1920&q=75&auto=format" 
            alt="Modern living room with yellow accent chair and minimalist decor" 
            className="refresh-image"
          />
        </div>
        <div className="refresh-content">
          <p className="refresh-label">LIVING ROOM DESIGNS</p>
          <h2 className="refresh-title">The Living Room Refresh</h2>
          <p className="refresh-description">
            You don't need to start from scratch. You need a clear plan.
          </p>
          <p className="refresh-text">
            Our living room templates give you layout options, furniture placement, color schemes, and shopping lists, everything you need to transform your space without the guesswork.
          </p>
          <p className="refresh-tagline">
            No more Pinterest overwhelm. Just clear direction.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Refresh;