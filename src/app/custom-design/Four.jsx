import React from 'react';
import './Four.css';

const Four = () => {
  return (
    <div className="four-container">
      <div className="four-content">
        <div className="four-header">
          <p className="four-label">Complete Package</p>
          <h2 className="four-title">What's Included</h2>
          <p className="four-subtitle">Everything you need for a personalized design experience</p>
        </div>
        
        <div className="four-cards">
          {/* Design & Planning Card */}
          <div className="four-card">
            <div className="card-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" stroke="#C17A5C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            
            <h3 className="card-title">Design & Planning</h3>
            
            <ul className="card-features">
              <li>
                <svg className="checkmark" width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.6667 5L7.50004 14.1667L3.33337 10" stroke="#C17A5C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Initial consultation to understand your needs</span>
              </li>
              <li>
                <svg className="checkmark" width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.6667 5L7.50004 14.1667L3.33337 10" stroke="#C17A5C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Multiple design concepts to choose from</span>
              </li>
              <li>
                <svg className="checkmark" width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.6667 5L7.50004 14.1667L3.33337 10" stroke="#C17A5C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Detailed 2D layout plans</span>
              </li>
              <li>
                <svg className="checkmark" width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.6667 5L7.50004 14.1667L3.33337 10" stroke="#C17A5C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Realistic 3D visualizations</span>
              </li>
            </ul>
          </div>
          
          {/* Support & Guidance Card */}
          <div className="four-card">
            <div className="card-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="#C17A5C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="9" cy="7" r="4" stroke="#C17A5C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="#C17A5C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            
            <h3 className="card-title">Support & Guidance</h3>
            
            <ul className="card-features">
              <li>
                <svg className="checkmark" width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.6667 5L7.50004 14.1667L3.33337 10" stroke="#C17A5C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Comprehensive moodboards</span>
              </li>
              <li>
                <svg className="checkmark" width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.6667 5L7.50004 14.1667L3.33337 10" stroke="#C17A5C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Curated shopping list with links</span>
              </li>
              <li>
                <svg className="checkmark" width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.6667 5L7.50004 14.1667L3.33337 10" stroke="#C17A5C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Video consultation sessions</span>
              </li>
              <li>
                <svg className="checkmark" width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.6667 5L7.50004 14.1667L3.33337 10" stroke="#C17A5C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>30-day WhatsApp support</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Four;