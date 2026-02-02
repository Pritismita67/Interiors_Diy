import React from 'react';
import Link from 'next/link';
import './Ready.css';

const Ready = () => {
  const features = [
    'Complete 2D layout with measurements',
    'Photorealistic 3D visualization',
    'Curated moodboard with colors & materials',
    'Shopping list with product links',
    'Step-by-step setup guidance'
  ];

  return (
    <section className="ready-section">
      <div className="ready-container">
        <div className="ready-image-wrapper">
          <img 
            src="http://cdn.home-designing.com/wp-content/uploads/2018/09/Beautiful-Country-Living-Rooms-With-Mid-Century-Modern-Furniture-High-Ceilings-Large-Windows.jpg" 
            alt="Ready-Made Templates" 
            className="ready-image"
          />
        </div>

        <div className="ready-content">
          <div className="ready-icon">
            <svg 
              width="32" 
              height="32" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="1.5"
            >
              <rect x="3" y="3" width="7" height="7" />
              <rect x="14" y="3" width="7" height="7" />
              <rect x="14" y="14" width="7" height="7" />
              <rect x="3" y="14" width="7" height="7" />
            </svg>
          </div>

          <h2 className="ready-title">Ready-Made Templates</h2>
          <p className="ready-subtitle">Instant design solutions</p>
          
          <p className="ready-description">
            Pre-designed room layouts crafted by professionals, ready for you to implement. 
            Perfect for those who want quick, beautiful results without the wait.
          </p>

          <ul className="ready-features">
            {features.map((feature, index) => (
              <li key={index} className="ready-feature-item">
                <svg 
                  className="feature-check" 
                  width="18" 
                  height="18" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2.5"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <div className="ready-pricing">
            <p className="ready-price">Starting from ₹1,999</p>
            <p className="ready-price-note">One-time payment, lifetime access</p>
          </div>

          <Link href="/templates" className="ready-browse-button">
            Browse Templates
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Ready;