import React from 'react';
import Link from 'next/link';
import './Made.css';

const Made = () => {
  const templates = [
    {
      id: 1,
      image: 'https://images.woodenstreet.de/image/data/Looks/LR-01+(3).jpg',
      title: 'Modern Minimalist Retreat',
      style: 'Minimalist',
      size: '10x12 ft',
      description: 'Clean lines, neutral palette, and smart storage solutions for a peaceful bedroom sanctuary.',
      price: '₹1,999',
      popular: true
    },
    {
      id: 2,
      image: 'https://images.woodenstreet.de/image/data/Looks/berlin1.jpg',
      title: 'Cozy Bohemian Haven',
      style: 'Bohemian',
      size: '10x12 ft',
      description: 'Warm textures, layered textiles, and eclectic decor for a cozy artistic bedroom.',
      price: '₹2,499',
      popular: true
    },
    {
      id: 3,
      image: 'https://i.pinimg.com/originals/92/fd/c3/92fdc3d1f1b360bf4c470ca3be8b33a1.jpg',
      title: 'Scandinavian Simplicity',
      style: 'Scandinavian',
      size: '12x15 ft',
      description: 'Light, airy, and functional living space with Nordic-inspired design elements.',
      price: '₹2,999',
      popular: true
    }
  ];

  const whatsappLink = 'https://api.whatsapp.com/send?phone=917710051499';

  return (
    <section className="made-section">
      <div className="made-container">
        <div className="made-header">
          <p className="made-subtitle">QUICK START</p>
          <h2 className="made-title">Ready-Made Templates</h2>
          <p className="made-description">
            Pre-designed room layouts crafted by professionals. Download instantly and start 
            implementing today.
          </p>
        </div>

        <div className="made-grid">
          {templates.map((template) => (
            <div key={template.id} className="made-card">
              {template.popular && (
                <div className="made-badge">
                  <svg 
                    className="badge-icon" 
                    width="14" 
                    height="14" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2"
                  >
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                  </svg>
                  Popular
                </div>
              )}
              
              <div className="made-image">
                <img src={template.image} alt={template.title} />
              </div>

              <div className="made-content">
                <h3 className="made-card-title">{template.title}</h3>
                <div className="made-meta">
                  <span>{template.style}</span>
                  <span>•</span>
                  <span>{template.size}</span>
                </div>
                <p className="made-card-description">{template.description}</p>
                
                <div className="made-footer">
                  <div className="made-price-section">
                    <span className="made-price">{template.price}</span>
                    <span className="made-price-label">Complete design pack</span>
                  </div>
                  
                  <a 
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="made-button"
                  >
                    <svg 
                      className="button-icon" 
                      width="18" 
                      height="18" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2"
                    >
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    </svg>
                    Get a Quote
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="made-cta">
          <Link href="/templates" className="made-explore-button">
            Explore All Templates
            <svg 
              className="explore-arrow" 
              width="18" 
              height="18" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Made;