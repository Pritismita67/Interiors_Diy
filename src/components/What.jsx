import React from 'react';
import './What.css';

const What = () => {
  return (
    <section className="what-section">
      <div className="what-container">
        <div className="what-content">
          <div className="what-text">
            <p className="what-chapter">CHAPTER 1</p>
            <h1 className="what-title">What is DIY Interiors?</h1>
            <p className="what-description">
              It's the freedom to have a beautifully designed home without the hefty 
              price tag. We give you the professional design plan, you bring it to life at 
              your own pace, in your own way.
            </p>
            <p className="what-description">
              No expensive full-service designers. No overwhelming DIY guesswork. Just 
              expert guidance that empowers you to create spaces that truly feel like 
              home.
            </p>
            <p className="what-tagline">
              Design meets empowerment. That's the DIY way.
            </p>
          </div>
          
          <div className="what-image">
            <img 
              src="https://images.woodenstreet.de/image/data/Looks/1.jpg" 
              alt="Modern living room with neutral tones and natural decor" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default What;