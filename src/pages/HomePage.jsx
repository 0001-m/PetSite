import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../components/Navbar.css';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import FeaturedPets from '../components/FeaturedPets';
import Community from '../components/Community';
import Footer from '../components/Footer';

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Navbar with React Router Links */}
      <nav className="navbar">
        <div className="navbar-inner">
          <Link to="/" className="navbar-logo">
            <span className="logo-icon">🐾</span>
            <span className="logo-text">Pawsitive Connections</span>
          </Link>

          <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
            <li><Link to="/">Browse Pets</Link></li>
            <li><Link to="/">About</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/donate" className="nav-donate-btn">Donate</Link></li>
            <li><div className="nav-avatar">YY</div></li>
          </ul>

          <button
            className="navbar-hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      <main>
        <Hero />
        <HowItWorks />
        <FeaturedPets />
        <Community />
      </main>
      <Footer />
    </>
  );
}