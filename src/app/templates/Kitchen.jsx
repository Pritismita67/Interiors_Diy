import React from 'react';
import './Kitchen.css';

const Kitchen = () => {
  return (
    <section className="kitchen-section">
      <div className="kitchen-container">
        <div className="kitchen-content">
          <p className="kitchen-label">KITCHEN DESIGNS</p>
          <h2 className="kitchen-title">The Functional Kitchen</h2>
          <p className="kitchen-description">
            Efficiency meets aesthetics in Indian kitchens.
          </p>
          <p className="kitchen-text">
            Our kitchen templates are designed for real cooking, real storage needs, and real budgets. Get the layout right, and everything else falls into place.
          </p>
          <p className="kitchen-tagline">
            Form follows function. Beauty follows both.
          </p>
        </div>
        <div className="kitchen-image-wrapper">
          <img 
            src="https://www.beautifulhomes.asianpaints.com/content/dam/asianpaintsbeautifulhomes/gallery/modular-kitchen/contemporary-modular-kitchen-with-white-cabinets-and-glass-storage/contemporary-kitchen-with-sleek-finishes.jpg.transform/bh-gallery-listing/image.webp" 
            alt="Modern functional kitchen with white cabinets and marble countertop" 
            className="kitchen-image"
          />
        </div>
      </div>
    </section>
  );
};

export default Kitchen;