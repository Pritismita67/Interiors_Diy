import React from 'react';
import './Depth.css';

const Depth = () => {
  const services = [
    {
      image: '/v3.jpg',
      icon: '🏠',
      title: 'Home Vastu Check',
      description: 'A comprehensive analysis of your existing space',
      features: [
        'Detailed Vastu report for your home',
        '30-minute consultation call',
        'Key corrections and recommendations',
        'Room-by-room analysis',
        'Practical, non-disruptive solutions'
      ],
      badge: 'Ideal for existing homes or before making major changes'
    },
    {
      image: '/v4.jpg',
      icon: '🧭',
      title: 'Vastu Remedies Consultation',
      description: 'Deeper guidance for specific concerns or new construction',
      features: [
        'In-depth Vastu analysis',
        'Space-based remedies and corrections',
        'Layout optimization suggestions',
        'Extended consultation support',
        'Integration with design plans'
      ],
      badge: 'Best for new homes, renovations, or specific Vastu concerns'
    }
  ];

  return (
    <section className="depth-section">
      <div className="depth-container">
        <div className="depth-header">
          <span className="depth-badge">Our Services</span>
          <h2 className="depth-title">Vastu Services</h2>
          <p className="depth-subtitle">
            Professional guidance for harmonious living spaces
          </p>
        </div>

        <div className="depth-cards">
          {services.map((service, index) => (
            <div key={index} className="depth-card">
              <div className="depth-card-image">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="service-image"
                />
              </div>
              
              <div className="depth-card-content">
                <div className="service-icon-wrapper">
                  <span className="service-icon">{service.icon}</span>
                </div>
                
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                
                <ul className="service-features">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="feature-item">
                      <span className="feature-check">✓</span>
                      <span className="feature-text">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="service-badge">{service.badge}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Depth;