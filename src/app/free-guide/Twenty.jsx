import React from 'react';
import './Twenty.css';

const Twenty = () => {
  return (
    <div className="twenty-container">
      <div className="twenty-content">

        <h2 className="twenty-title">
          Ready to Start Your Interior Journey Right?
        </h2>

        <p className="twenty-description">
          Get instant access to the Start-Right Interior Decision Kit and avoid costly mistakes.
        </p>

        <a
          href="https://api.whatsapp.com/send?phone=917710051499"
          target="_blank"
          rel="noopener noreferrer"
          className="twenty-button"
        >
          Get Your Free Kit Now
        </a>

        <div className="twenty-badges">
          <div className="twenty-badge">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="#C17A5C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>Instant Access</span>
          </div>
          <div className="twenty-badge">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14" stroke="#C17A5C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M22 4L12 14.01l-3-3" stroke="#C17A5C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>100% Free</span>
          </div>
          <div className="twenty-badge">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14" stroke="#C17A5C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M22 4L12 14.01l-3-3" stroke="#C17A5C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>No Spam Ever</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Twenty;