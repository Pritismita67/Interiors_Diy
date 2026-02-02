import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* DIY Section */}
        <div className="footer-column footer-brand">
          <div className="footer-logo">
            <Image 
              src="/image.png" 
              alt="DIY Logo" 
              width={40} 
              height={40}
            />
          </div>
          <p className="footer-tagline">
            Affordable DIY Interior Design — Completely Online
          </p>
        </div>

        {/* Services Section */}
        <div className="footer-column">
          <h3 className="footer-heading">Services</h3>
          <ul className="footer-links">
            <li>
              <Link href="/services/ready-made-templates">
                Ready-Made Templates
              </Link>
            </li>
            <li>
              <Link href="/services/custom-design-consult">
                Custom Design Consult
              </Link>
            </li>
            <li>
              <Link href="/vastu">
                Vastu Consultation
              </Link>
            </li>
          </ul>
        </div>

        {/* Quick Links Section */}
        <div className="footer-column">
          <h3 className="footer-heading">Quick Links</h3>
          <ul className="footer-links">
            <li>
              <Link href="/services">
                All Services
              </Link>
            </li>
            <li>
              <Link href="/moodboard">
                Free 3D Moodboard
              </Link>
            </li>
          </ul>
        </div>

        {/* Get Started Section */}
        <div className="footer-column footer-cta">
          <h3 className="footer-heading">Get Started</h3>
          <p className="footer-cta-text">Ready to design your home?</p>
          <a 
            href="https://api.whatsapp.com/send?phone=917710051499" 
            target="_blank" 
            rel="noopener noreferrer"
            className="whatsapp-footer-button"
          >
            <svg 
              className="whatsapp-icon" 
              width="18" 
              height="18" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" 
                fill="currentColor"
              />
              <path 
                d="M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.334.101 11.893c0 2.096.549 4.14 1.595 5.945L0 24l6.335-1.652c1.746.943 3.71 1.444 5.71 1.447h.006c6.585 0 11.946-5.336 11.949-11.896 0-3.176-1.24-6.165-3.48-8.45zm-8.475 18.297c-1.778 0-3.52-.477-5.042-1.378l-.362-.214-3.751.98.999-3.648-.236-.374a9.861 9.861 0 01-1.511-5.26c.002-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.993c-.002 5.45-4.436 9.887-9.866 9.887z" 
                fill="currentColor"
              />
            </svg>
            Chat on WhatsApp
          </a>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p className="footer-copyright">
          © 2024 Do Interiors Yourself. All rights reserved.
        </p>
        <p className="footer-website">
          doitinteriorsyourself.com
        </p>
      </div>
    </footer>
  );
};

export default Footer;