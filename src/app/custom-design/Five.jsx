import React from 'react';
import './Five.css';

const Five = () => {
  return (
    <div className="five-container">
      <div className="five-content">
        <div className="five-header">
          <p className="five-label">Transparent Pricing</p>
          <h2 className="five-title">Investment</h2>
        </div>
        
        <div className="five-pricing-card">
          <h3 className="pricing-amount">Starting from ₹4,999</h3>
          <p className="pricing-description">
            Final pricing depends on room size, complexity, and number of spaces
          </p>
          
          <div className="pricing-benefits">
            <div className="benefit-item">
              <svg className="checkmark" width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.6667 5L7.50004 14.1667L3.33337 10" stroke="#2C2C2C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>No hidden costs</span>
            </div>
            
            <div className="benefit-item">
              <svg className="checkmark" width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.6667 5L7.50004 14.1667L3.33337 10" stroke="#2C2C2C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Flexible payment</span>
            </div>
            
            <div className="benefit-item">
              <svg className="checkmark" width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.6667 5L7.50004 14.1667L3.33337 10" stroke="#2C2C2C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Money-back guarantee</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Five;