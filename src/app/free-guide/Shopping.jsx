'use client';

import React from 'react';
import './Shopping.css';

const Shopping = () => {
  return (
    <div className="shopping-container">
      <div className="shopping-content">

        {/* Free Download Badge — design only */}
        <div className="free-download-badge">
          <span className="download-icon">⬇</span>
          Free Download
        </div>

        {/* Main Heading */}
        <h1 className="shopping-heading">
          Free 3D Moodboard + Shopping List
        </h1>

        {/* Subtitle */}
        <p className="shopping-subtitle">
          Get a professional guide to visualizing and shopping for your interior design project
        </p>

        {/* Why This Guide Helps Section */}
        <h2 className="section-heading">Why This Guide Helps</h2>

        {/* Benefits Cards */}
        <div className="benefits-container">
          <div className="benefit-card">
            <h3 className="benefit-title">Visual Clarity</h3>
            <p className="benefit-description">
              See how colors, textures, and furniture come together before you buy anything
            </p>
          </div>

          <div className="benefit-card">
            <h3 className="benefit-title">Better Buying Decisions</h3>
            <p className="benefit-description">
              Avoid costly mistakes by planning your purchases with a structured shopping list
            </p>
          </div>

          <div className="benefit-card">
            <h3 className="benefit-title">Less Confusion</h3>
            <p className="benefit-description">
              Follow a clear process instead of feeling overwhelmed by endless options
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Shopping;