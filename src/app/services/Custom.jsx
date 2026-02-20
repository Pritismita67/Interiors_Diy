import React from 'react';
import Link from 'next/link';
import './Custom.css';

const Custom = () => {
  return (
    <div className="custom-container">
      <div className="custom-content">
        {/* Image Section */}
        <div className="custom-image-wrapper">
          <div className="popular-badge">Most Popular</div>
          <img 
            src="/custom.jpg" 
            alt="Custom design consultation living room" 
            className="custom-image"
          />
        </div>
        
        {/* Text Section */}
        <div className="custom-text-section">
          <div className="custom-icon-box">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="9" stroke="#C17A5C" strokeWidth="2"/>
              <path d="M12 8C10.9 8 10 8.9 10 10C10 11.1 10.9 12 12 12C13.1 12 14 11.1 14 10C14 8.9 13.1 8 12 8Z" fill="#C17A5C"/>
              <path d="M12 14C9.79 14 8 15.34 8 17V18H16V17C16 15.34 14.21 14 12 14Z" fill="#C17A5C"/>
            </svg>
          </div>
          
          <h2 className="custom-main-title">Custom Design <br />Consult</h2>
          
          <p className="custom-main-subtitle">Personalized to your lifestyle</p>
          
          <p className="custom-description-text">
            Work one-on-one with our designers to create a space that's uniquely 
            yours. From concept to completion guide, we're with you every step.
          </p>
          
          <ul className="custom-features-list">
            <li className="custom-feature-item">
              <svg className="custom-checkmark" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.6667 5L7.50004 14.1667L3.33337 10" stroke="#C17A5C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>1:1 collaboration with expert designer</span>
            </li>
            <li className="custom-feature-item">
              <svg className="custom-checkmark" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.6667 5L7.50004 14.1667L3.33337 10" stroke="#C17A5C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Multiple design concepts to choose from</span>
            </li>
            <li className="custom-feature-item">
              <svg className="custom-checkmark" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.6667 5L7.50004 14.1667L3.33337 10" stroke="#C17A5C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Video consultation sessions</span>
            </li>
            <li className="custom-feature-item">
              <svg className="custom-checkmark" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.6667 5L7.50004 14.1667L3.33337 10" stroke="#C17A5C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>30-day WhatsApp support</span>
            </li>
            <li className="custom-feature-item">
              <svg className="custom-checkmark" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.6667 5L7.50004 14.1667L3.33337 10" stroke="#C17A5C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Complete design package with all deliverables</span>
            </li>
          </ul>
          
          <div className="custom-pricing-section">
            <h3 className="custom-pricing-title">Starting from ₹2,999</h3>
            <p className="custom-pricing-subtitle">Per room, includes revisions</p>
            
            <Link href="/custom-design" className="custom-design-btn">
              Start Custom Design
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Custom;