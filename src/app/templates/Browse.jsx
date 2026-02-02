import React from 'react';
import Link from 'next/link';
import './Browse.css';

const Browse = () => {
  return (
    <section className="browse-section">
      <div className="browse-overlay"></div>
      <div className="browse-content">
        <p className="browse-subtitle">READY-MADE DESIGN SOLUTIONS</p>
        <h1 className="browse-title">
          Not every home needs a custom designer
        </h1>
        <p className="browse-description">
          Sometimes, all you need is a proven template and the confidence to execute it yourself.
        </p>
        <Link href="/templates" className="browse-button">
          Browse Templates
        </Link>
      </div>
    </section>
  );
};

export default Browse;