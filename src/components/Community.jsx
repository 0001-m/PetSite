import React, { useState } from 'react';
import './Community.css';

const stats = [
  { value: '15k', label: 'HAPPY PETS' },
  { value: '12k', label: 'ADOPTERS' },
  { value: '500+', label: 'SHELTERS' },
  { value: '98%', label: 'SUCCESS RATE' },
];

export default function Community() {
  const [email, setEmail] = useState('');

  return (
    <section className="community">
      <div className="community-inner">
        {/* Left */}
        <div className="community-left">
          <h2 className="community-title">Join Our Community of Pet Lovers</h2>
          <p className="community-desc">
            Get weekly tips on pet care, heartwarming adoption stories, and
            alerts when new pets arrive in your area.
          </p>
          <div className="community-form">
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="community-input"
            />
            <button className="community-btn">Subscribe</button>
          </div>
        </div>

        {/* Right - stats */}
        <div className="community-stats">
          {stats.map((s) => (
            <div className="stat-card" key={s.label}>
              <span className="stat-value">{s.value}</span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}