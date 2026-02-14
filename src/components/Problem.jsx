import React from 'react';
import './Problem.css';

const Problem = () => {
  return (
    <section className="problem-section">
      <div className="problem-container">
        <div className="problem-content">
          <div className="problem-image">
            <img 
              src="https://www.bhg.com/thmb/RZyEMDRcdOeIaTxA3HRWM22Rul0=/5118x0/filters:no_upscale():strip_icc()/103318785-f97f64f57d5a4e7db5eec8d649200092.jpg" 
              alt="Modern living space with contemporary design" 
            />
          </div>
          
          <div className="problem-text">
            <p className="problem-chapter">CHAPTER 2</p>
            <h2 className="problem-title">The Problem We Solve</h2>
            <p className="problem-description">
              Hiring a full-service interior designer in India costs lakhs. The process is 
              lengthy, often impersonal, and leaves you dependent on contractors.
            </p>
            <p className="problem-description">
              Going completely DIY? Overwhelming. Where do you start? What colors 
              work? How do you arrange furniture? You end up with Pinterest boards 
              and confusion.
            </p>
            <p className="problem-solution">
              We bridge the gap, giving you expert design without the execution 
              cost.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;