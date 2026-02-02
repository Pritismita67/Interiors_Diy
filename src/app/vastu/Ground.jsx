import React from 'react';
import './Ground.css';

const Ground = () => {
  const principles = [
    {
      icon: '🏠',
      title: 'Architectural',
      description: 'Rooted in spatial design, natural light, ventilation, and energy flow'
    },
    {
      icon: '✓',
      title: 'Practical',
      description: 'Actionable recommendations that improve functionality and comfort'
    },
    {
      icon: '🧭',
      title: 'Professional',
      description: 'Consultants trained in both Vastu and interior design'
    },
    {
      icon: '☀',
      title: 'Non-Belief-Based',
      description: 'One lens for evaluating space — you decide what resonates'
    }
  ];

  return (
    <section className="ground-section">
      <div className="ground-container">
        <div className="ground-header">
          <span className="ground-badge">Our Philosophy</span>
          <h2 className="ground-title">Our Approach to Vastu</h2>
          <p className="ground-subtitle">
            Professional, practical, and grounded in architectural principles
          </p>
        </div>

        <div className="ground-cards">
          {principles.map((principle, index) => (
            <div key={index} className="ground-card">
              <div className="card-icon-wrapper">
                <span className="card-icon">{principle.icon}</span>
              </div>
              <h3 className="card-title">{principle.title}</h3>
              <p className="card-description">{principle.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ground;