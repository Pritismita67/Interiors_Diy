import React from 'react';
import './Twelve.css';

const stars = (
  <div className="twelve-stars">
    {[...Array(5)].map((_, i) => (
      <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="#d4695b" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ))}
  </div>
);

const testimonials = [
  {
    quote: "The design guide completely transformed how I approached my living room renovation. Clear, practical advice that actually works!",
    name: "Sarah M.",
    role: "Homeowner",
  },
  {
    quote: "Finally, interior design advice that doesn't require hiring an expensive designer. This guide paid for itself ten times over.",
    name: "James K.",
    role: "First-time Renovator",
  },
  {
    quote: "I was overwhelmed with choices until I found this guide. It gave me the confidence to make decisions I love.",
    name: "Priya R.",
    role: "DIY Enthusiast",
  },
];

const Twelve = () => {
  return (
    <div className="twelve-container">
      <div className="twelve-content">

        <div className="twelve-header">
          <h2 className="twelve-title">Loved by Homeowners Like You</h2>
          <p className="twelve-subtitle">
            Join thousands who've transformed their spaces with confidence
          </p>
        </div>

        <div className="twelve-grid">
          {testimonials.map((t, i) => (
            <div className="twelve-card" key={i}>
              {stars}
              <p className="twelve-quote">"{t.quote}"</p>
              <div className="twelve-author">
                <span className="twelve-name">{t.name}</span>
                <span className="twelve-role">{t.role}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Twelve;