import React from 'react';
import './Imp.css';

const Imp = () => {
  return (
    <section className="imp-section">
      <div className="imp-container">
        <div className="imp-card">
          <div className="imp-icon-wrapper">
            <span className="imp-icon">📋</span>
          </div>
          
          <div className="imp-content">
            <h3 className="imp-title">Important to Know</h3>
            
            <p className="imp-text">
              Vastu is optional and works best when combined with good design.
            </p>
            
            <p className="imp-text">
              We never recommend structural changes that compromise functionality, aesthetics, or budget. Our goal is to find practical solutions that align with both Vastu principles and modern living.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Imp;