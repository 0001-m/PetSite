import React from 'react';
import './Footer.css';

const links = {
  'Quick Links': ['Browse All Pets', 'Success Stories', 'Partner Shelters', 'Pet Care Tips'],
  Support: ['Help Center', 'Contact Us', 'Donation Program', 'Volunteer'],
  Company: ['About Us', 'Careers', 'Privacy Policy', 'Terms of Service'],
};

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <div className="footer-logo">
            <span className="logo-icon">🐾</span>
            <span>Pawsitive Connections</span>
          </div>
          <p className="footer-tagline">
            The world's largest pet adoption platform, dedicated to finding the
            perfect match for every animal in need.
          </p>
          <div className="footer-socials">
            <a href="#" className="social-btn" aria-label="Facebook">🌐</a>
            <a href="#" className="social-btn" aria-label="Twitter">🔗</a>
          </div>
        </div>

        {Object.entries(links).map(([title, items]) => (
          <div className="footer-col" key={title}>
            <h4 className="footer-col-title">{title}</h4>
            <ul className="footer-col-links">
              {items.map((item) => (
                <li key={item}>
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="footer-bottom">
        <p>© 2024 Pawsitive Connections. All rights reserved. Made with love for animals everywhere.</p>
      </div>
    </footer>
  );
}