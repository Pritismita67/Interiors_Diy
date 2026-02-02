import React from 'react';
import './Budget.css';

const Budget = () => {
  return (
    <section className="budget-section">
      <div className="budget-container">
        <div className="budget-content">
          <p className="budget-label">BEDROOM DESIGNS</p>
          <h2 className="budget-title">The Bedroom That Works</h2>
          <p className="budget-description">
            A 10x12 bedroom. Standard layout. Limited budget. Sound familiar?
          </p>
          <p className="budget-text">
            This is the most common room we design. Instead of reinventing the wheel, we've perfected templates that maximize space, storage, and style — ready for you to implement.
          </p>
          <p className="budget-tagline">
            Proven designs. Real results. Your budget.
          </p>
        </div>
        <div className="budget-image-wrapper">
          <img 
            src="https://img.staticmb.com/mbimages/interiorDesignerCMS/decorPartner/174/projectImage/Master-bedroom-Camera001.jpg.webp" 
            alt="Modern bedroom design with dark walls and elegant furniture" 
            className="budget-image"
          />
        </div>
      </div>
    </section>
  );
};

export default Budget;