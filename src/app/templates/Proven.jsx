import React from 'react';
import './Proven.css';

const Proven = () => {
  return (
    <section className="proven-section">
      <div className="proven-overlay"></div>
      <div className="proven-content">
        <h2 className="proven-title">
          Why Templates Work:<br />Affordable, Fast, Proven
        </h2>
        
        <div className="proven-features">
          {/* Feature 1 */}
          <div className="proven-feature">
            <h3 className="feature-title">Starting from ₹1,999</h3>
            <p className="feature-description">
              A fraction of custom design costs. Professional results without the premium price tag.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="proven-feature">
            <h3 className="feature-title">Instant Access</h3>
            <p className="feature-description">
              Download your complete design pack immediately. Start implementing today.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="proven-feature">
            <h3 className="feature-title">Tested & Proven</h3>
            <p className="feature-description">
              Layouts that work for Indian homes, lifestyles, and budgets. Real results from real homeowners.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Proven;