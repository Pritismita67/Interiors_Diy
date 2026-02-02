'use client';

import React from 'react';
import './Shopping.css';

const Shopping = () => {
  const handleDownload = () => {
    // Create a link element
    const link = document.createElement('a');
    // Set the href to your PDF file in the public folder
    link.href = '/your-moodboard-guide.pdf'; // Replace with your actual PDF filename
    // Set the download attribute with desired filename
    link.download = '3D-Moodboard-Shopping-List.pdf';
    // Append to body, click, and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="shopping-container">
      <div className="shopping-content">
        {/* Free Download Badge */}
        <button className="free-download-badge" onClick={handleDownload}>
          <span className="download-icon">⬇</span>
          Free Download
        </button>

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