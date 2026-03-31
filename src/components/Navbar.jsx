import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <Link to="/" className="navbar-logo">
          <span className="logo-icon">🐾</span>
          <span className="logo-text">Pawsitive Connections</span>
        </Link>

        <ul className={`navbar-links ${open ? 'open' : ''}`}>
          <li><NavLink to="/" end>Home</NavLink></li>
          <li><NavLink to="/browse-pets">Browse Pets</NavLink></li>
          <li><NavLink to="/about">About Us</NavLink></li>
          <li><NavLink to="/success-stories">Success Stories</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
          <li>
            <NavLink to="/donate" className="nav-donate-btn">Donate</NavLink>
          </li>
          <li><div className="nav-avatar">YY</div></li>
        </ul>

        <button
          className="navbar-hamburger"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  );
}