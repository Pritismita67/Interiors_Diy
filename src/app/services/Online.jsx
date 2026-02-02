import React from 'react';
import './Online.css';

const Online = () => {
  return (
    <section className="online-services-section">
      <div className="online-overlay"></div>
      <div className="online-content">
        <h1 className="online-title">
          All Services Are<br />Completely Online
        </h1>
        <div className="online-description">
          <p className="online-text">
            No site visits. No execution management. No contractor dependency.
          </p>
          <p className="online-text">
            We provide professional design guidance through WhatsApp, video calls, and digital
            deliverables. You execute it yourself at your own pace and budget.
          </p>
          <p className="online-tagline">
            Design freedom. Budget control. Your timeline.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Online;