import React from 'react';
import './Led.css';

const Led = () => {
  return (
    <div className="led-container">
      <div className="led-content">
        <div className="led-text">
          <p className="led-label">YOUR LIFE, YOUR DESIGN</p>
          
          <h2 className="led-title">Lifestyle-Led Design</h2>
          
          <p className="led-description">
            Your home should reflect how you actually live, not just how it looks in photos.
          </p>
          
          <p className="led-description">
            Do you work from home? Have young kids? Love hosting friends? Collect books? Practice yoga?
          </p>
          
          <p className="led-description">
            We design around your daily routines, habits, and aspirations, creating spaces that truly work for you.
          </p>
          
          <p className="led-tagline">
            Your lifestyle. Your design. Your home.
          </p>
        </div>
        
        <div className="led-image">
          <img 
            src="https://www.decorpot.com/images/blogimage1860911308luxurious-flooring-for-beautiful-and-luxurious-bedroom-interior-design.jpg" 
            alt="Lifestyle-led design living room with natural light" 
          />
        </div>
      </div>
    </div>
  );
};

export default Led;