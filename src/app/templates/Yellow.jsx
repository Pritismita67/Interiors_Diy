'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import './Yellow.css';

const Yellow = () => {
  const [activeFilter, setActiveFilter] = useState('All Templates');

  // Template data
  const templates = [
    {
      id: 1,
      category: 'Bedrooms',
      title: 'Modern Minimalist Retreat',
      style: 'Modern',
      size: '10x12 ft',
      description: 'Sleek design with clean lines and sophisticated storage solutions.',
      price: '₹3,999',
      image: 'https://images.woodenstreet.de/image/data%2FLooks%2F3.jpg',
      isPopular: true
    },
    {
      id: 2,
      category: 'Bedrooms',
      title: 'Cozy Bohemian Haven',
      style: 'Bohemian',
      size: '10x12 ft',
      description: 'Warm textures and layered comfort for a relaxed bedroom vibe.',
      price: '₹3,499',
      image: 'https://i.pinimg.com/736x/e5/d5/4a/e5d54afbd5f91a27ca26bc5583903bbc.jpg',
      isPopular: true
    },
    {
      id: 3,
      category: 'Bedrooms',
      title: 'Contemporary Master Suite',
      style: 'Contemporary',
      size: '12x14 ft',
      description: 'Luxurious bedroom design with elegant finishes and smart storage.',
      price: '₹4,499',
      image: 'https://media.designcafe.com/wp-content/uploads/2022/08/11142840/coastal-bedroom-ideas.jpg',
      isPopular: false
    },
    {
      id: 4,
      category: 'Kitchens',
      title: 'Modular Indian Kitchen',
      style: 'Modern Indian',
      size: '8x10 ft',
      description: 'Efficient L-shaped layout designed for Indian cooking with ample storage.',
      price: '₹4,999',
      image: 'https://www.thespruce.com/thmb/8w7j4pMRe5sqJ8oap8rDXtv8wrY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/DesignbyNatalieKraiemPhotobyKirstenFrancis-c8c60d48cd3541a9bdb756a933aa3780.jpg',
      isPopular: true
    },
    {
      id: 5,
      category: 'Kitchens',
      title: 'Parallel Kitchen Layout',
      style: 'Contemporary',
      size: '7x12 ft',
      description: 'Galley-style kitchen maximizing workflow efficiency for narrow spaces.',
      price: '₹5,499',
      image: 'https://bonito.in/wp-content/uploads/2021/10/Blog-Detail-01-1.jpg',
      isPopular: false
    },
    {
      id: 6,
      category: 'Living Rooms',
      title: 'Minimalist Living Space',
      style: 'Minimalist',
      size: '12x15 ft',
      description: 'Clean, functional living room with smart furniture placement.',
      price: '₹3,799',
      image: 'https://www.marthastewart.com/thmb/lxfu2-95SWCS0jwciHs1mkbsGUM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/modern-living-rooms-wb-1-bc45b0dc70e541f0ba40364ae6bd8421.jpg',
      isPopular: false
    },
    {
      id: 7,
      category: 'Living Rooms',
      title: 'Contemporary Living Hub',
      style: 'Contemporary',
      size: '14x16 ft',
      description: 'Modern living room design with entertainment and seating zones.',
      price: '₹4,299',
      image: 'https://utahstyle-webaholics.s3.us-west-2.amazonaws.com/wp-content/uploads/2023/09/27111537/LCA_7314-3-2.jpg',
      isPopular: false
    },
    {
      id: 8,
      category: 'Living Rooms',
      title: 'Cozy Family Room',
      style: 'Transitional',
      size: '13x15 ft',
      description: 'Warm and inviting living space perfect for family gatherings.',
      price: '₹3,999',
      image: 'https://st.hzcdn.com/simgs/4ec185730f6c8fe2_14-2379/_.jpg',
      isPopular: false
    },
    {
      id: 9,
      category: 'Dining',
      title: 'Modern Dining Setup',
      style: 'Modern',
      size: '10x12 ft',
      description: 'Sleek dining area with optimal seating and storage solutions.',
      price: '₹3,299',
      image: 'https://www.spotblue.com/app/uploads/2023/06/modern-dining-room-2022-11-10-09-38-55-utc1.jpg',
      isPopular: false
    },
    {
      id: 10,
      category: 'Dining',
      title: 'Classic Dining Space',
      style: 'Classic',
      size: '11x13 ft',
      description: 'Elegant dining room with timeless appeal and functionality.',
      price: '₹3,599',
      image: 'https://www.bhg.com/thmb/rvOm4fbrqM3Kv-tT2tqIn0VKljY=/3958x0/filters:no_upscale():strip_icc()/Midcentury-modern-dining-room-HGQ36597-E78HH53cq_eA6d2sgX1v8t-b8a6ea0f544f43d59feabcc6aba6a546.jpg',
      isPopular: false
    },
    {
      id: 11,
      category: 'Home Office',
      title: 'Productive Home Office',
      style: 'Modern',
      size: '8x10 ft',
      description: 'Efficient workspace with ergonomic layout and storage.',
      price: '₹2,999',
      image: 'https://www.nobroker.in/blog/wp-content/uploads/2023/12/Accent-Wall-In-The-Attic-for-home-office-design-1200x673.webp',
      isPopular: false
    },
    {
      id: 12,
      category: 'Home Office',
      title: 'Executive Home Office',
      style: 'Contemporary',
      size: '10x12 ft',
      description: 'Professional home office with premium finishes and design.',
      price: '₹3,499',
      image: 'https://rnb.scene7.com/is/image/roomandboard/parsons_699588_25e1?size=2400,2400&scl=1',
      isPopular: false
    }
  ];

  // Filter templates based on active category
  const filteredTemplates = activeFilter === 'All Templates' 
    ? templates 
    : templates.filter(template => template.category === activeFilter);

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

        {/* Template Cards Grid */}
        <div className="yellow-grid">
          {filteredTemplates.map((template) => (
            <div key={template.id} className="yellow-card">
              {template.isPopular && (
                <div className="yellow-popular-tag">
                  <span className="yellow-popular-icon">🔥</span>
                  <span className="yellow-popular-text">Popular</span>
                </div>
              )}
              <div className="yellow-img-wrapper">
                <img 
                  src={template.image} 
                  alt={template.title} 
                  className="yellow-img"
                />
              </div>
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
          ))}
        </div>

        {/* No Results Message */}
        {filteredTemplates.length === 0 && (
          <div className="yellow-no-results">
            <p>No templates found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Yellow;