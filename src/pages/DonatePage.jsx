import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './DonatePage.css';

const AMOUNTS = [25, 50, 100, 250];

const donationImpact = [
  {
    icon: '🍽️',
    title: '$25 provides essential food',
    desc: 'Feeds one shelter cat or dog with high-quality nutritious meals for an entire week.',
  },
  {
    icon: '💉',
    title: '$100 covers a medical checkup',
    desc: 'Includes vaccinations, deworming, and a full health assessment for a new arrival.',
  },
  {
    icon: '✈️',
    title: '$250 sponsors a rescue flight',
    desc: 'Helps transport animals from overcrowded high-kill shelters to our safe haven.',
  },
];

const testimonials = [
  {
    quote: "Knowing that my monthly donation helps one more dog find their forever home is the best feeling. Pawsitive Connections makes it so easy to see the impact.",
    name: 'Sarah Jenkins',
    role: 'Monthly Donor',
    img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80',
  },
  {
    quote: "As a shelter vet, I see first-hand what these funds do. From emergency surgeries to specialized diets, your generosity saves lives every single day.",
    name: 'Dr. Michael Chen',
    role: 'Shelter Veterinarian',
    img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80',
  },
  {
    quote: "We found our best friend Luna through this platform. Donating back is our way of saying thank you and helping the next family find their match.",
    name: 'David Thompson',
    role: 'Adopter & Donor',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
  },
];

export default function DonatePage() {
  const [frequency, setFrequency] = useState('monthly'); // 'one-time' | 'monthly'
  const [selected, setSelected] = useState(50);
  const [custom, setCustom] = useState('');
  const [form, setForm] = useState({ name: '', card: '', expiry: '', cvc: '' });
  const [submitted, setSubmitted] = useState(false);

  const amount = custom ? parseFloat(custom) || 0 : selected;

  const handleCustom = (e) => {
    setCustom(e.target.value);
    setSelected(null);
  };

  const handleAmount = (a) => {
    setSelected(a);
    setCustom('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div className="donate-page">
      <Navbar />

      {/* ── HERO BANNER ── */}
      <section className="dp-hero">
        <div className="dp-hero-overlay" />
        <img
          className="dp-hero-bg"
          src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=1400&q=80"
          alt="Dog"
        />
        <div className="dp-hero-content">
          <h1>Every Pet Deserves a Family</h1>
          <p>Your donation provides medical care, food, and shelter for thousands of animals waiting for their forever homes.</p>
          <a href="#donate-form" className="btn-donate-hero">Make an Impact</a>
        </div>
      </section>

      {/* ── MAIN SECTION ── */}
      <section className="dp-main" id="donate-form">
        <div className="dp-main-inner">

          {/* ── LEFT: FORM ── */}
          <div className="dp-form-card">
            <h2 className="dp-form-title">Support Our Mission</h2>

            {/* Frequency toggle */}
            <div className="dp-freq-toggle">
              <button
                className={"dp-freq-btn " + (frequency === 'one-time' ? 'active' : '')}
                onClick={() => setFrequency('one-time')}
              >One-time</button>
              <button
                className={"dp-freq-btn " + (frequency === 'monthly' ? 'active' : '')}
                onClick={() => setFrequency('monthly')}
              >Monthly</button>
            </div>

            {/* Amount pills */}
            <div className="dp-amounts">
              {AMOUNTS.map(a => (
                <button
                  key={a}
                  className={"dp-amount-btn " + (selected === a && !custom ? 'active' : '')}
                  onClick={() => handleAmount(a)}
                >
                  ${a}
                </button>
              ))}
            </div>

            {/* Custom amount */}
            <label className="dp-custom-label">Or enter custom amount</label>
            <div className="dp-custom-input-wrap">
              <span>$</span>
              <input
                type="number"
                placeholder="0.00"
                value={custom}
                onChange={handleCustom}
                min="1"
              />
            </div>

            {/* Payment details */}
            <h3 className="dp-payment-title">Payment Details</h3>

            {submitted && (
              <div className="dp-success">
                🎉 Thank you! Your ${amount.toFixed(2)} donation is on its way!
              </div>
            )}

            <form className="dp-payment-form" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Cardholder Name"
                value={form.name}
                onChange={e => setForm({ ...form, name: e.target.value })}
                required
              />
              <div className="dp-card-row">
                <input
                  type="text"
                  placeholder="Card Number"
                  value={form.card}
                  onChange={e => setForm({ ...form, card: e.target.value })}
                  maxLength={19}
                  required
                />
                <span className="dp-card-icon">💳</span>
              </div>
              <div className="dp-two-col">
                <input
                  type="text"
                  placeholder="MM/YY"
                  value={form.expiry}
                  onChange={e => setForm({ ...form, expiry: e.target.value })}
                  maxLength={5}
                  required
                />
                <input
                  type="text"
                  placeholder="CVC"
                  value={form.cvc}
                  onChange={e => setForm({ ...form, cvc: e.target.value })}
                  maxLength={4}
                  required
                />
              </div>

              <div className="dp-form-actions">
                <button type="submit" className="dp-donate-btn">
                  Donate ${amount > 0 ? amount.toFixed(2) : '0.00'}
                </button>
                <button type="button" className="dp-paypal-btn" aria-label="PayPal">
                  <span style={{ fontWeight: 800, color: '#003087' }}>Pay</span>
                  <span style={{ fontWeight: 800, color: '#009cde' }}>Pal</span>
                </button>
              </div>

              <p className="dp-secure-note">🔒 Secure 256-bit SSL encrypted payment</p>
            </form>
          </div>

          {/* ── RIGHT: IMPACT ── */}
          <div className="dp-impact">
            <h2 className="dp-impact-title">How Your Donation Helps</h2>
            <div className="dp-impact-items">
              {donationImpact.map(item => (
                <div className="dp-impact-item" key={item.title}>
                  <div className="dp-impact-icon">{item.icon}</div>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="dp-impact-stats">
              <div className="dp-impact-stat-header">
                <span className="dp-impact-stat-icon">🎯</span>
                <strong>Our Impact This Year</strong>
              </div>
              <div className="dp-impact-stat-row">
                <div className="dp-impact-stat">
                  <span className="dp-stat-val cyan">4,200+</span>
                  <span className="dp-stat-lbl">PETS ADOPTED</span>
                </div>
                <div className="dp-impact-stat">
                  <span className="dp-stat-val cyan">$1.2M</span>
                  <span className="dp-stat-lbl">TOTAL RAISED</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="dp-testimonials">
        <div className="dp-testimonials-inner">
          <h2>Voices of Compassion</h2>
          <p className="dp-t-sub">Hear from those who make our mission possible</p>
          <div className="dp-testimonials-grid">
            {testimonials.map(t => (
              <div className="dp-t-card" key={t.name}>
                <span className="dp-t-quote">❝</span>
                <p className="dp-t-text">{t.quote}</p>
                <div className="dp-t-author">
                  <img src={t.img} alt={t.name} className="dp-t-avatar" />
                  <div>
                    <p className="dp-t-name">{t.name}</p>
                    <p className="dp-t-role">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer variant="dark" />
    </div>
  );
}