'use client';

import React from 'react';
import Link from 'next/link';
import './Dress.css';

const Dress = () => {
  return (
    <div className="dress-container">
      <div className="dress-content">
        {/* Image Section */}
        <div className="dress-image-wrapper">
          <img 
            src="https://hips.hearstapps.com/hmg-prod/images/screen-shot-2024-01-25-at-12-07-59-pm-65b29574d11c6.png?crop=0.5755102040816327xw:1xh;center,top"
            alt="Ready-made living room design template" 
            className="dress-image"
          />
        </div>
        
        {/* Text Section */}
        <div className="dress-text-section">
          <div className="dress-icon-box">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="3" y="3" width="7" height="7" rx="1" stroke="#C17A5C" strokeWidth="2"/>
              <rect x="3" y="14" width="7" height="7" rx="1" stroke="#C17A5C" strokeWidth="2"/>
              <rect x="14" y="3" width="7" height="7" rx="1" stroke="#C17A5C" strokeWidth="2"/>
              <rect x="14" y="14" width="7" height="7" rx="1" stroke="#C17A5C" strokeWidth="2"/>
            </svg>
          </div>
          
          <h2 className="dress-main-title">Ready-Made Templates</h2>
          
          <p className="dress-main-subtitle">Instant design solutions</p>
          
          <p className="dress-description-text">
            Pre-designed room layouts crafted by professionals, ready for you to 
            implement. Perfect for those who want quick, beautiful results without the wait.
          </p>
          
          <ul className="dress-features-list">
            <li className="dress-feature-item">
              <svg className="dress-checkmark" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.6667 5L7.50004 14.1667L3.33337 10" stroke="#C17A5C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Complete 2D layout with measurements</span>
            </li>
            <li className="dress-feature-item">
              <svg className="dress-checkmark" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.6667 5L7.50004 14.1667L3.33337 10" stroke="#C17A5C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Photorealistic 3D visualization</span>
            </li>
            <li className="dress-feature-item">
              <svg className="dress-checkmark" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.6667 5L7.50004 14.1667L3.33337 10" stroke="#C17A5C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Curated moodboard with colors & materials</span>
            </li>
            <li className="dress-feature-item">
              <svg className="dress-checkmark" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.6667 5L7.50004 14.1667L3.33337 10" stroke="#C17A5C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Shopping list with product links</span>
            </li>
            <li className="dress-feature-item">
              <svg className="dress-checkmark" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.6667 5L7.50004 14.1667L3.33337 10" stroke="#C17A5C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Step-by-step setup guidance</span>
            </li>
          </ul>
          
          <div className="dress-pricing-section">
            <h3 className="dress-pricing-title">Starting from ₹1,999</h3>
            <p className="dress-pricing-subtitle">One-time payment, lifetime access</p>
            
            <Link href="/templates" className="dress-templates-btn">
              Browse Templates
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dress;