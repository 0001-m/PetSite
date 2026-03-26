import React from 'react';
import './HowItWorks.css';

const steps = [
  {
    icon: '👥',
    number: '1. Browse',
    desc: 'Search our database of thousands of lovable pets across the country.',
  },
  {
    icon: '📋',
    number: '2. Apply',
    desc: 'Submit an application for the pet you\'ve fallen in love with in just minutes.',
  },
  {
    icon: '🤝',
    number: '3. Meet',
    desc: 'Schedule a visit with our team to ensure a perfect match for everyone.',
  },
  {
    icon: '🏠',
    number: '4. Adopt',
    desc: 'Complete the final paperwork and start your incredible life together.',
  },
];

export default function HowItWorks() {
  return (
    <section className="how-it-works" id="how-it-works">
      <div className="hiw-inner">
        <div className="section-header">
          <h2 className="section-title">How It Works</h2>
          <p className="section-sub">
            Our streamlined process helps you find and bring home your new family member
            with ease and support.
          </p>
        </div>

        <div className="hiw-grid">
          {steps.map((step) => (
            <div className="hiw-card" key={step.number}>
              <div className="hiw-icon">{step.icon}</div>
              <h3 className="hiw-step-title">{step.number}</h3>
              <p className="hiw-step-desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}