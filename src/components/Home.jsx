'use client';

import './Home.css';

const Home = () => {
  const handleStartClick = () => {
    const whatSection = document.getElementById('what-section');
    if (whatSection) {
      whatSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="home">
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <p className="hero-subtitle">WELCOME TO DIY INTERIORS</p>
          <h1 className="hero-title">
            Your home tells a{' '}
            <br />story. Let's write it{' '}
            <br />together.
          </h1>
          <p className="hero-description">
            Professional design. Your execution.{' '}
            <br />Your budget.
          </p>
          <button
            className="cta-button"
            onClick={handleStartClick}
          >
            Start Your Journey
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;