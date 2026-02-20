'use client';

import React from 'react';
import Link from 'next/link';
import './Mars.css';

const Mars = () => {
  return (
    <div className="mars-container">
      <div className="mars-content">
        {/* Image Section */}
        <div className="mars-image-wrapper">
          <img 
            src="https://decoratly.com/landing/styles/minimalist-main.jpg"
            alt="Ready-made living room design template" 
            className="mars-image"
          />
        </div>
        
        {/* Text Section */}
        <div className="mars-text-section">
          <div className="mars-icon-box">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="3" y="3" width="7" height="7" rx="1" stroke="#C17A5C" strokeWidth="2"/>
              <rect x="3" y="14" width="7" height="7" rx="1" stroke="#C17A5C" strokeWidth="2"/>
              <rect x="14" y="3" width="7" height="7" rx="1" stroke="#C17A5C" strokeWidth="2"/>
              <rect x="14" y="14" width="7" height="7" rx="1" stroke="#C17A5C" strokeWidth="2"/>
            </svg>
          </div>
          
          <h2 className="mars-main-title">Ready-Made <br />Templates</h2>
          
          <p className="mars-main-subtitle">Instant design solutions</p>
          
          <p className="mars-description-text">
            Pre-designed room layouts crafted by professionals, ready for you to 
            implement. Perfect for those who want quick, beautiful results without the wait.
          </p>

          {/* Separate centered wrapper for features list on mobile */}
          <div className="mars-features-wrapper">
            <ul className="mars-features-list">
              <li className="mars-feature-item">
                <svg className="mars-checkmark" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.6667 5L7.50004 14.1667L3.33337 10" stroke="#C17A5C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Complete 2D layout with measurements</span>
              </li>
              <li className="mars-feature-item">
                <svg className="mars-checkmark" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.6667 5L7.50004 14.1667L3.33337 10" stroke="#C17A5C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Photorealistic 3D visualization</span>
              </li>
              <li className="mars-feature-item">
                <svg className="mars-checkmark" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.6667 5L7.50004 14.1667L3.33337 10" stroke="#C17A5C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Curated moodboard with colors & materials</span>
              </li>
              <li className="mars-feature-item">
                <svg className="mars-checkmark" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.6667 5L7.50004 14.1667L3.33337 10" stroke="#C17A5C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Shopping list with product links</span>
              </li>
              <li className="mars-feature-item">
                <svg className="mars-checkmark" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.6667 5L7.50004 14.1667L3.33337 10" stroke="#C17A5C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Step-by-step setup guidance</span>
              </li>
            </ul>
          </div>
          
          <div className="mars-pricing-section">
            <h3 className="mars-pricing-title">Starting from ₹2,499</h3>
            <p className="mars-pricing-subtitle">One-time payment, lifetime access</p>
            
            <Link href="/templates" className="mars-templates-btn">
              Browse Templates
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mars;