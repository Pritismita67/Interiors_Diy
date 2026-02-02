import React from 'react';
import Link from 'next/link';
import './Analysis.css';

const Analysis = () => {
  return (
    <div className="analysis-container">
      <div className="analysis-content">
        <div className="analysis-image">
          <img 
            src="https://www.asenseinterior.com/assets/uploads/a44f725d1984987604fbad6f904e8e9e.webp" 
            alt="Modern living room with Vastu principles" 
          />
        </div>
        
        <div className="analysis-text">
          <div className="analysis-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="10" stroke="#C17A5C" strokeWidth="2"/>
              <path d="M12 6V12L16 14" stroke="#C17A5C" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
          
          <h1 className="analysis-title">Vastu Consultation</h1>
          
          <p className="analysis-subtitle">Harmony meets modern living</p>
          
          <p className="analysis-description">
            Professional Vastu guidance without superstition. Practical solutions that 
            work with your design, not against it. Optional add-on to any service.
          </p>
          
          <ul className="analysis-features">
            <li>
              <svg className="checkmark" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.6667 5L7.50004 14.1667L3.33337 10" stroke="#C17A5C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Comprehensive home Vastu analysis</span>
            </li>
            <li>
              <svg className="checkmark" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.6667 5L7.50004 14.1667L3.33337 10" stroke="#C17A5C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Detailed written report</span>
            </li>
            <li>
              <svg className="checkmark" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.6667 5L7.50004 14.1667L3.33337 10" stroke="#C17A5C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>30-minute expert consultation</span>
            </li>
            <li>
              <svg className="checkmark" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.6667 5L7.50004 14.1667L3.33337 10" stroke="#C17A5C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Practical, non-intrusive remedies</span>
            </li>
            <li>
              <svg className="checkmark" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.6667 5L7.50004 14.1667L3.33337 10" stroke="#C17A5C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Modern, rational approach</span>
            </li>
          </ul>
          
          <div className="analysis-pricing">
            <h2 className="pricing-title">Pricing varies by scope</h2>
            <p className="pricing-subtitle">Starting from ₹2,999</p>
            
            <Link href="/vastu" className="vastu-button">
              Learn About Vastu
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analysis;