import React from 'react';
import './Templates.css';

const Templates = () => {
  const allTemplates = [
    {
      id: 1,
      image: 'https://images.woodenstreet.de/image/data/Looks/LR-01+(3).jpg',
      title: 'Modern Minimalist Retreat',
      style: 'Minimalist',
      size: '10x12 ft',
      description: 'Clean lines, neutral palette, and smart storage solutions for a peaceful bedroom sanctuary.',
      price: '₹1,999',
      category: 'Bedroom',
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
      category: 'Bedroom',
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
      category: 'Living Room',
      popular: true
    }
  ];

  const whatsappLink = 'https://api.whatsapp.com/send?phone=917710051499';

  return (
    <div className="templates-page">
      <div className="templates-container">
        <div className="templates-header">
          <h1 className="templates-title">All Templates</h1>
          <p className="templates-description">
            Browse our complete collection of professionally designed room layouts. 
            Each template includes complete design pack with 2D layouts, 3D visuals, and shopping lists.
          </p>
        </div>

        <div className="templates-grid">
          {allTemplates.map((template) => (
            <div key={template.id} className="template-card">
              {template.popular && (
                <div className="template-badge">
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
              
              <div className="template-image">
                <img src={template.image} alt={template.title} />
              </div>

              <div className="template-content">
                <div className="template-category">{template.category}</div>
                <h3 className="template-card-title">{template.title}</h3>
                <div className="template-meta">
                  <span>{template.style}</span>
                  <span>•</span>
                  <span>{template.size}</span>
                </div>
                <p className="template-card-description">{template.description}</p>
                
                <div className="template-footer">
                  <div className="template-price-section">
                    <span className="template-price">{template.price}</span>
                    <span className="template-price-label">Complete design pack</span>
                  </div>
                  
                  <a 
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="template-button"
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
      </div>
    </div>
  );
};

export default Templates;