import React from 'react';
import './Simple.css';

const Simple = () => {
  return (
    <section className="simple-section">
      <div className="simple-overlay"></div>
      <div className="simple-container">
        <div className="simple-content">
          <h2 className="simple-title">
            How DIY Works: Simple, Guided, Empowering
          </h2>
          
          <div className="simple-steps">
            <div className="simple-step">
              <h3 className="step-title">1. Share Your Vision</h3>
              <p className="step-description">
                Tell us about your space, style preferences, and budget through WhatsApp. No forms, 
                no hassle.
              </p>
            </div>

            <div className="simple-step">
              <h3 className="step-title">2. Receive Your Design</h3>
              <p className="step-description">
                Get complete 2D layouts, 3D visuals, moodboards, shopping lists, and step-by-step 
                guidance.
              </p>
            </div>

            <div className="simple-step">
              <h3 className="step-title">3. Execute at Your Pace</h3>
              <p className="step-description">
                Follow our clear instructions to bring your design to life. We're here to support you 
                every step.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Simple;