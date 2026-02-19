import React from 'react';
import './Alen.css';

const Alen = () => {
  return (
    <div className="alen-container">
      <div className="alen-content">

        <h2 className="alen-title">Inside The Start-Right Kit</h2>

        <div className="alen-grid">

          <div className="alen-card">
            <div className="alen-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="3" y="5" width="18" height="2" rx="1" fill="#C17A5C"/>
                <rect x="3" y="11" width="12" height="2" rx="1" fill="#C17A5C"/>
                <rect x="3" y="17" width="15" height="2" rx="1" fill="#C17A5C"/>
                <path d="M17 14l2 2 4-4" stroke="#C17A5C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="alen-card-text">
              <h3 className="alen-card-title">Decision Order Checklist</h3>
              <p className="alen-card-desc">Know what to finalise first, second, and last.</p>
            </div>
          </div>

          <div className="alen-card">
            <div className="alen-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" stroke="#C17A5C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <line x1="3" y1="6" x2="21" y2="6" stroke="#C17A5C" strokeWidth="2" strokeLinecap="round"/>
                <path d="M16 10a4 4 0 01-8 0" stroke="#C17A5C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="alen-card-text">
              <h3 className="alen-card-title">Structured Shopping Sheet</h3>
              <p className="alen-card-desc">Compare options logically instead of emotionally.</p>
            </div>
          </div>

          <div className="alen-card">
            <div className="alen-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" stroke="#C17A5C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <line x1="12" y1="9" x2="12" y2="13" stroke="#C17A5C" strokeWidth="2" strokeLinecap="round"/>
                <line x1="12" y1="17" x2="12.01" y2="17" stroke="#C17A5C" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <div className="alen-card-text">
              <h3 className="alen-card-title">5 Expensive Mistakes Guide</h3>
              <p className="alen-card-desc">Avoid errors homeowners realise too late.</p>
            </div>
          </div>

          <div className="alen-card">
            <div className="alen-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="3" stroke="#C17A5C" strokeWidth="2"/>
                <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" stroke="#C17A5C" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <div className="alen-card-text">
              <h3 className="alen-card-title">Mood Direction Framework</h3>
              <p className="alen-card-desc">Visualise properly without blindly copying Pinterest.</p>
            </div>
          </div>

        </div>

        <a
          href="https://api.whatsapp.com/send?phone=917710051499"
          target="_blank"
          rel="noopener noreferrer"
          className="alen-button"
        >
          Get The Kit Now
        </a>

      </div>
    </div>
  );
};

export default Alen;