import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const quickLinks = [
  { label: 'Find a Pet',        to: '/adopt' },
  { label: 'Success Stories',   to: '/success-stories' },
  { label: 'Shelter Partner',   to: '/shelters' },
  { label: 'Pet Care Tips',     to: '/tips' },
];

const supportLinks = [
  { label: 'Donate',            to: '/donate' },
  { label: 'Volunteer',         to: '/volunteer' },
  { label: 'Fostering',         to: '/foster' },
  { label: 'FAQ',               to: '/contact' },
];

const legalLinks = [
  { label: 'Privacy Policy',    to: '/privacy' },
  { label: 'Terms of Service',  to: '/terms' },
  { label: 'Adoption Policy',   to: '/adoption-policy' },
  { label: 'Cookie Settings',   to: '/cookies' },
];

export default function Footer({ variant = 'light' }) {
  const [email, setEmail] = useState('');
  const isDark = variant === 'dark';

  return (
    <footer className={"site-footer " + (isDark ? 'footer-dark' : 'footer-light')}>
      <div className="footer-inner">
        <div className="footer-brand">
          <div className="footer-logo">
            <span className="footer-logo-icon">🐾</span>
            <strong>Pawsitive Connections</strong>
          </div>
          <p className="footer-tagline">
            {isDark
              ? 'Connecting loving hearts with paws in need. We are a registered 501(c)(3) non-profit organization dedicated to animal welfare.'
              : "The world's leading pet adoption platform, dedicated to finding every animal a loving, permanent home."}
          </p>
          <div className="footer-socials">
            <a href="#" className="footer-social-btn" aria-label="Website">🌐</a>
            <a href="#" className="footer-social-btn" aria-label="Instagram">📸</a>
            <a href="#" className="footer-social-btn" aria-label="Share">🔗</a>
          </div>
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            {quickLinks.map(l => (
              <li key={l.label}><Link to={l.to}>{l.label}</Link></li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4>{isDark ? 'Support' : 'Legal'}</h4>
          <ul>
            {(isDark ? supportLinks : legalLinks).map(l => (
              <li key={l.label}><Link to={l.to}>{l.label}</Link></li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4>Newsletter</h4>
          <p className="footer-newsletter-desc">
            {isDark
              ? 'Stay updated with rescue stories and adoption events.'
              : 'Get cute pet photos and updates in your inbox.'}
          </p>
          <div className="footer-newsletter-form">
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <button aria-label="Subscribe">→</button>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2024 Pawsitive Connections. All rights reserved. Made with love for animals.</p>
        {isDark ? (
          <div className="footer-bottom-socials">
            <a href="#">Instagram</a>
            <a href="#">Facebook</a>
            <a href="#">Twitter</a>
          </div>
        ) : (
          <div className="footer-bottom-links">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
            <Link to="/cookies">Cookie Policy</Link>
          </div>
        )}
      </div>
    </footer>
  );
}