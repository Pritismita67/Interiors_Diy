'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import './Made.css';

const Made = () => {
  const [fullscreenImage, setFullscreenImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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
    }
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
      const container = document.getElementById(`made-gallery-${templateTitle}`);
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
      <div className="made-image-wrapper">
        <div 
          className="made-image-gallery" 
          id={`made-gallery-${templateTitle}`}
          onScroll={handleScroll}
        >
          {images.map((image, index) => (
            <div key={index} className="made-image">
              <img
                src={image}
                alt={`${templateTitle} - View ${index + 1}`}
                onClick={() => openFullscreen(images, index)}
              />
            </div>
          ))}
        </div>
        
        {/* Image indicators */}
        <div className="made-img-indicators">
          {images.map((_, index) => (
            <button
              key={index}
              className={`made-indicator ${currentIndex === index ? 'made-indicator-active' : ''}`}
              onClick={() => scrollToImage(index)}
              aria-label={`View image ${index + 1}`}
            />
          ))}
        </div>

        {/* Fullscreen button */}
        <button 
          className="made-fullscreen-btn"
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
              className="made-nav-btn made-nav-prev"
              onClick={() => scrollToImage(currentIndex === 0 ? images.length - 1 : currentIndex - 1)}
              aria-label="Previous image"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"/>
              </svg>
            </button>
            <button 
              className="made-nav-btn made-nav-next"
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
              
              <ImageGallery images={template.images} templateTitle={template.title} />

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

      {/* Fullscreen Modal */}
      {fullscreenImage && (
        <div className="made-fullscreen-modal" onClick={closeFullscreen}>
          <button className="made-modal-close" onClick={closeFullscreen}>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>

          <div className="made-modal-content" onClick={(e) => e.stopPropagation()}>
            <img 
              src={fullscreenImage[currentImageIndex]} 
              alt={`Fullscreen view ${currentImageIndex + 1}`}
              className="made-modal-img"
            />

            {fullscreenImage.length > 1 && (
              <>
                <button className="made-modal-prev" onClick={prevImage}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="15 18 9 12 15 6"/>
                  </svg>
                </button>
                <button className="made-modal-next" onClick={nextImage}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6"/>
                  </svg>
                </button>
              </>
            )}

            {/* Image counter */}
            <div className="made-modal-counter">
              {currentImageIndex + 1} / {fullscreenImage.length}
            </div>

            {/* Thumbnail navigation */}
            <div className="made-modal-thumbnails">
              {fullscreenImage.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
                  className={`made-modal-thumbnail ${index === currentImageIndex ? 'made-thumbnail-active' : ''}`}
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

export default Made;