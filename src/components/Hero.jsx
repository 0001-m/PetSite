import React from 'react';
import './Hero.css';

// Using a placeholder dog image from Unsplash
const DOG_IMG = 'https://images.unsplash.com/photo-1552053831-71594a27632d?w=600&q=80';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-inner">
        {/* Left */}
        <div className="hero-content">
          <span className="hero-badge">
            <span className="badge-icon">🐾</span> START YOUR JOURNEY TODAY
          </span>
          <h1 className="hero-title">
            Find Your New{' '}
            <span className="hero-title-accent">Best<br />Friend</span> Today.
          </h1>
          <p className="hero-desc">
            Connecting loving families with pets in need. We believe every
            animal deserves a warm home and every home deserves a loyal
            companion.
          </p>
          <div className="hero-actions">
            <button className="btn-primary">Adopt a Pet →</button>
            <button className="btn-outline">How It Works</button>
          </div>
          <div className="hero-social-proof">
            <div className="avatar-stack">
              <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="user" />
              <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="user" />
              <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="user" />
            </div>
            <p>Joined by <strong>1,200+</strong> happy families this month</p>
          </div>
        </div>

        {/* Right */}
        <div className="hero-image-wrap">
          <div className="hero-image-card">
            <img src={DOG_IMG} alt="Golden retriever being hugged" className="hero-img" />
            <div className="hero-badge-card">
              <span className="badge-check">✓</span>
              <div>
                <p className="badge-label">LATEST ADOPTION</p>
                <p className="badge-name">Buddy found a home!</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Search bar */}
      <div className="hero-search">
        <div className="search-inner">
          <div className="search-field">
            <label>PET TYPE</label>
            <div className="select-wrap">
              <span>🐾</span>
              <select>
                <option>All Species</option>
                <option>Dogs</option>
                <option>Cats</option>
                <option>Birds</option>
              </select>
            </div>
          </div>
          <div className="search-divider" />
          <div className="search-field">
            <label>AGE RANGE</label>
            <div className="select-wrap">
              <span>🕐</span>
              <select>
                <option>Any Age</option>
                <option>Puppy / Kitten</option>
                <option>Young</option>
                <option>Adult</option>
                <option>Senior</option>
              </select>
            </div>
          </div>
          <div className="search-divider" />
          <div className="search-field">
            <label>LOCATION</label>
            <div className="select-wrap">
              <span>📍</span>
              <input type="text" placeholder="Zip code or city" />
            </div>
          </div>
          <button className="btn-primary search-btn">🔍 Search Pets</button>
        </div>
      </div>
    </section>
  );
}