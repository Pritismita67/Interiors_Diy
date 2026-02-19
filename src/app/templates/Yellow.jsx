'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import './Yellow.css';

const Yellow = () => {
  const [activeFilter, setActiveFilter] = useState('All Templates');
  const [fullscreenImage, setFullscreenImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Template data with multiple images
  const templates = [
    {
      id: 1,
      category: 'Living Rooms',
      images: [
        '/t2.png',
        '/t1.png',
        '/t3.png',
        '/t4.png'
       
      ],
      title: 'Urban Grove',
      style: 'Contemporary Minimal',
      size: '14*10 ft',
      description: 'Earthy tones balanced with sleek black elements',
      price: '₹2,499',
      isPopular: true
    },
    {
      id: 2,
      category: 'Living Rooms',
      images: [
        '/o3.png',
        '/o1.png',
        '/o2.png',
        
      ],
      title: 'Arcadia Calm',
      style: 'Modern Comfort',
      size: '14*10 ft',
      description: 'Elegant curves with cozy neutral palette',
      price: '₹2,799',
      isPopular: true
    },
    {
      id: 3,
      category: 'Living Rooms',
      images: [
        '/h7.png',
        '/h8.png',
        '/h9.png',
    
      ],
      title: 'The Neutral Nook',
      style: 'Scandinavian Modern',
      size: '14*10 ft',
      description: 'Light woods paired with soft beige tones',
      price: '₹2,999',
      isPopular: true
    },
    {
      id: 4,
      category: 'Bedrooms',
      title: 'Boho Chique',
      style: 'Boho Chic',
      size: '11*13 ft',
      description: 'Natural boho-chic interiors with cane and wood accents',
      price: '₹3,299',
      images: [
        '/h12.png',
        '/h11.png',
        '/h13.png',
        '/h10.png'
      ],
      isPopular: false
    },
    {
      id: 5,
      category: 'Bedrooms',
      title: 'Serene Regal Nest',
      style: 'Modern Luxe',
      size: '12*12 ft',
      description: 'Soft botanical backdrop with refined furnishings',
      price: '₹2,799',
      images: [
        '/2.png',
        '/4.png',
        '/3.png',
        '/1.png'
        
      ],
      isPopular: true
    },
    {
      id: 6,
      category: 'Bedrooms',
      title: 'Royal Canvas',
      style: ' Modern Luxe',
      size: '12*12 ft',
      description: 'Gallery-style backdrop with refined lighting',
      price: '₹3,499',
      images: [
        '/n1.png',
        '/n3.png',
        '/n2.png'
      ],
      isPopular: false
    }
  ];

  // Filter templates based on active category
  const filteredTemplates = activeFilter === 'All Templates' 
    ? templates 
    : templates.filter(template => template.category === activeFilter);

  // Split templates for display - first 3 and remaining
  const firstRowTemplates = filteredTemplates.slice(0, 3);
  const secondRowTemplates = filteredTemplates.slice(3);

  // Get count for each category
  const getCategoryCount = (category) => {
    if (category === 'All Templates') return templates.length;
    return templates.filter(t => t.category === category).length;
  };

  const filters = [
    { name: 'All Templates', count: getCategoryCount('All Templates') },
    { name: 'Bedrooms', count: getCategoryCount('Bedrooms') },
    { name: 'Living Rooms', count: getCategoryCount('Living Rooms') },
    { name: 'Kitchens', count: getCategoryCount('Kitchens') },
    { name: 'Dining', count: getCategoryCount('Dining') },
    { name: 'Home Office', count: getCategoryCount('Home Office') }
  ];

  const whatsappLink = 'https://api.whatsapp.com/send?phone=917710051499';

  // Fullscreen image handlers
  const openFullscreen = (images, index) => {
    setFullscreenImage(images);
    setCurrentImageIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeFullscreen = () => {
    setFullscreenImage(null);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'auto';
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === fullscreenImage.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? fullscreenImage.length - 1 : prev - 1
    );
  };

  // Image Gallery Component
  const ImageGallery = ({ images, templateTitle }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const scrollToImage = (index) => {
      setCurrentIndex(index);
      const container = document.getElementById(`gallery-${templateTitle}`);
      if (container) {
        const imageWidth = container.offsetWidth;
        container.scrollTo({
          left: imageWidth * index,
          behavior: 'smooth'
        });
      }
    };

    const handleScroll = (e) => {
      const container = e.target;
      const imageWidth = container.offsetWidth;
      const index = Math.round(container.scrollLeft / imageWidth);
      setCurrentIndex(index);
    };

    return (
      <div className="yellow-img-wrapper">
        <div 
          className="yellow-img-gallery" 
          id={`gallery-${templateTitle}`}
          onScroll={handleScroll}
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`${templateTitle} - View ${index + 1}`}
              className="yellow-img"
              onClick={() => openFullscreen(images, index)}
            />
          ))}
        </div>
        
        {/* Image indicators */}
        <div className="yellow-img-indicators">
          {images.map((_, index) => (
            <button
              key={index}
              className={`yellow-indicator ${currentIndex === index ? 'yellow-indicator-active' : ''}`}
              onClick={() => scrollToImage(index)}
              aria-label={`View image ${index + 1}`}
            />
          ))}
        </div>

        {/* Fullscreen button */}
        <button 
          className="yellow-fullscreen-btn"
          onClick={() => openFullscreen(images, currentIndex)}
          aria-label="View fullscreen"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/>
          </svg>
        </button>

        {/* Navigation arrows for desktop */}
        {images.length > 1 && (
          <>
            <button 
              className="yellow-nav-btn yellow-nav-prev"
              onClick={() => scrollToImage(currentIndex === 0 ? images.length - 1 : currentIndex - 1)}
              aria-label="Previous image"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"/>
              </svg>
            </button>
            <button 
              className="yellow-nav-btn yellow-nav-next"
              onClick={() => scrollToImage(currentIndex === images.length - 1 ? 0 : currentIndex + 1)}
              aria-label="Next image"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"/>
              </svg>
            </button>
          </>
        )}
      </div>
    );
  };

  // Template Card Component
  const TemplateCard = ({ template }) => (
    <div className="yellow-card">
      {template.isPopular && (
        <div className="yellow-popular-tag">
          <span className="yellow-popular-icon">🔥</span>
          <span className="yellow-popular-text">Popular</span>
        </div>
      )}
      
      <ImageGallery images={template.images} templateTitle={template.title} />
      
      <div className="yellow-card-body">
        <h3 className="yellow-card-title">{template.title}</h3>
        <div className="yellow-card-meta">
          <span className="yellow-meta-style">{template.style}</span>
          <span className="yellow-meta-sep">•</span>
          <span className="yellow-meta-size">{template.size}</span>
        </div>
        <p className="yellow-card-desc">{template.description}</p>
        <div className="yellow-card-footer">
          <div className="yellow-pricing">
            <span className="yellow-price">{template.price}</span>
            <span className="yellow-price-label">Complete design pack</span>
          </div>
          <a 
            href={whatsappLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="yellow-btn"
          >
            <span className="yellow-btn-icon">💬</span>
            <span className="yellow-btn-text">Get a Quote</span>
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <section className="yellow-section">
      <div className="yellow-wrapper">
        {/* Header */}
        <div className="yellow-header">
          <div className="yellow-badge">
            <span className="yellow-badge-icon">✨</span>
            <span className="yellow-badge-text">
              {filteredTemplates.length} {filteredTemplates.length === 1 ? 'Design' : 'Designs'} Available
            </span>
          </div>
          <h2 className="yellow-title">Choose Your Perfect Template</h2>
          <p className="yellow-subtitle">
            Browse our collection of professionally designed templates for every room
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="yellow-filters">
          {filters.map((filter) => (
            <button
              key={filter.name}
              className={`yellow-filter-tab ${activeFilter === filter.name ? 'yellow-active' : ''}`}
              onClick={() => setActiveFilter(filter.name)}
            >
              {filter.name}
              <span className="yellow-filter-count">{filter.count}</span>
            </button>
          ))}
        </div>

        {/* Template Cards - First Row (3 cards) */}
        {firstRowTemplates.length > 0 && (
          <div className="yellow-grid yellow-grid-first">
            {firstRowTemplates.map((template) => (
              <TemplateCard key={template.id} template={template} />
            ))}
          </div>
        )}

        {/* Template Cards - Second Row (remaining cards - centered if 2, full width if more) */}
        {secondRowTemplates.length > 0 && (
          <div className={`yellow-grid ${secondRowTemplates.length === 2 ? 'yellow-grid-second' : 'yellow-grid-first'}`}>
            {secondRowTemplates.map((template) => (
              <TemplateCard key={template.id} template={template} />
            ))}
          </div>
        )}

        {/* No Results Message */}
        {filteredTemplates.length === 0 && (
          <div className="yellow-no-results">
            <p>No templates found in this category.</p>
          </div>
        )}
      </div>

      {/* Fullscreen Modal */}
      {fullscreenImage && (
        <div className="yellow-fullscreen-modal" onClick={closeFullscreen}>
          <button className="yellow-modal-close" onClick={closeFullscreen}>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>

          <div className="yellow-modal-content" onClick={(e) => e.stopPropagation()}>
            <img 
              src={fullscreenImage[currentImageIndex]} 
              alt={`Fullscreen view ${currentImageIndex + 1}`}
              className="yellow-modal-img"
            />

            {fullscreenImage.length > 1 && (
              <>
                <button className="yellow-modal-prev" onClick={prevImage}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="15 18 9 12 15 6"/>
                  </svg>
                </button>
                <button className="yellow-modal-next" onClick={nextImage}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6"/>
                  </svg>
                </button>
              </>
            )}

            {/* Image counter */}
            <div className="yellow-modal-counter">
              {currentImageIndex + 1} / {fullscreenImage.length}
            </div>

            {/* Thumbnail navigation */}
            <div className="yellow-modal-thumbnails">
              {fullscreenImage.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
                  className={`yellow-modal-thumbnail ${index === currentImageIndex ? 'yellow-thumbnail-active' : ''}`}
                  onClick={() => setCurrentImageIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Yellow;