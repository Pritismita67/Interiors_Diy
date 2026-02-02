'use client';

import React from 'react';
import './List.css';

const List = () => {
  const guideItems = [
    {
      title: 'How to Create a 3D Moodboard',
      description: 'Step-by-step process for visualizing your design ideas'
    },
    {
      title: 'Shopping List Template',
      description: 'Organize your purchases by category and priority'
    },
    {
      title: 'Budget Planning Tips',
      description: 'How to allocate your budget effectively'
    },
    {
      title: 'Where to Shop',
      description: 'Curated list of reliable online and offline stores'
    },
    {
      title: 'Real Examples',
      description: 'See how others have used this process successfully'
    }
  ];

  return (
    <div className="list-container">
      <div className="list-content">
        {/* Main Heading */}
        <h2 className="list-heading">What's Inside the Guide</h2>

        {/* List Items */}
        <div className="list-items">
          {guideItems.map((item, index) => (
            <div key={index} className="list-item">
              <div className="checkmark-icon">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.6667 5L7.50004 14.1667L3.33337 10"
                    stroke="#8B4513"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="list-item-content">
                <h3 className="list-item-title">{item.title}</h3>
                <p className="list-item-description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default List;