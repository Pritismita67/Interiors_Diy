import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <p className="hero-subtitle">WELCOME TO DIY INTERIORS</p>
          <h1 className="hero-title">
            Your Home tells a Story. Let's Write it Together.
          </h1>
          <p className="hero-description">
            Professional design. Your execution. Your budget
          </p>
          <a 
            href="https://api.whatsapp.com/send?phone=917710051499" 
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button"
          >
            Start Your Journey
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;