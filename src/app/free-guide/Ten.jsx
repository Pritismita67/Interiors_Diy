import React from 'react';
import './Ten.css';

const Ten = () => {
  return (
    <div className="ten-container">
      <div className="ten-content">

        <h2 className="ten-title">
          Most Interior Regret Happens Before Execution.
        </h2>

        <p className="ten-description">
          Homeowners don't regret interiors because of bad workers.<br className="ten-break" />
          They regret decisions taken in the wrong order.
        </p>

        <ul className="ten-list">
          <li className="ten-item">
            <span className="ten-check">✓</span>
            Too many opinions
          </li>
          <li className="ten-item">
            <span className="ten-check">✓</span>
            Confusion after meeting vendors
          </li>
          <li className="ten-item">
            <span className="ten-check">✓</span>
            Budget stress
          </li>
          <li className="ten-item">
            <span className="ten-check">✓</span>
            Fear of making expensive mistakes
          </li>
          <li className="ten-item">
            <span className="ten-check">✓</span>
            Not knowing what to finalise first
          </li>
        </ul>

        <a
          href="https://api.whatsapp.com/send?phone=917710051499"
          target="_blank"
          rel="noopener noreferrer"
          className="ten-button"
        >
          Get The Kit Now
        </a>

      </div>
    </div>
  );
};

export default Ten;