import React from 'react';
import './Refresh.css';

const Refresh = () => {
  return (
    <section className="refresh-section">
      <div className="refresh-container">
        <div className="refresh-image-wrapper">
          <img 
            src="https://s3-blog.homelane.com/design-ideas/wp-content/uploads/2025/08/18052420/luxury-small-bedroom-interior-design-modern-simple-style-ideas.png" 
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
            Our living room templates give you layout options, furniture placement, color schemes, and shopping lists — everything you need to transform your space without the guesswork.
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