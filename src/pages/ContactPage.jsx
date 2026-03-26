import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ContactPage.css';

const faqs = [
  {
    q: 'How long does the adoption process take?',
    a: 'Typically, it takes between 3 to 7 business days from the initial application to meeting your potential new pet.',
  },
  {
    q: 'What are the adoption fees used for?',
    a: 'Fees cover vaccinations, spaying/neutering, microchipping, and initial health exams for all animals in our care.',
  },
  {
    q: 'Can I foster a pet before adopting?',
    a: "Yes! We have a 'Foster-to-Adopt' program that allows you to spend time with a pet before making a final decision.",
  },
  {
    q: 'Are my donations tax-deductible?',
    a: 'Pawsitive Connections is a registered 501(c)(3) nonprofit, and all donations are tax-deductible to the extent allowed by law.',
  },
];

const footerLinks = {
  Platform: ['Adopt a Pet', 'Success Stories', 'Our Shelters', 'Pet Care Tips'],
  Support:  ['Donate', 'Volunteer', 'Fostering', 'FAQ'],
};

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: 'General Inquiry', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [newsEmail, setNewsEmail] = useState('');

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3500);
    setForm({ name: '', email: '', subject: 'General Inquiry', message: '' });
  };

  return (
    <div className="contact-page">

      {/* ── NAVBAR ── */}
      <nav className="cp-nav">
        <div className="cp-nav-inner">
          <Link to="/" className="cp-logo">
            <span className="cp-logo-icon">🐾</span>
            <span>Pawsitive Connections</span>
          </Link>
          <ul className="cp-nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/adopt">Adopt</Link></li>
            <li><Link to="/donate">Donate</Link></li>
            <li><Link to="/contact" className="cp-nav-active">Contact</Link></li>
          </ul>
          <div className="cp-nav-avatar">P</div>
        </div>
      </nav>

      {/* ── HERO HEADER ── */}
      <header className="cp-header">
        <div className="cp-header-inner">
          <h1 className="cp-page-title">Contact Us</h1>
          <p className="cp-page-sub">
            We're here to help you find your new best friend. Reach out to our team
            with any questions about adoption, volunteering, or donations.
          </p>
        </div>
      </header>

      {/* ── MAIN CONTENT ── */}
      <div className="cp-main">
        <div className="cp-main-inner">

          {/* Left — Form */}
          <div className="cp-form-card">
            <h2 className="cp-card-title">Send us a message</h2>

            {submitted && (
              <div className="cp-success-banner">
                ✅ Message sent! We'll get back to you within 24 hours.
              </div>
            )}

            <form className="cp-form" onSubmit={handleSubmit}>
              <div className="cp-form-row">
                <div className="cp-field">
                  <label>Name</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                <div className="cp-field">
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="yourname@example.com"
                    required
                  />
                </div>
              </div>

              <div className="cp-field">
                <label>Subject</label>
                <div className="cp-select-wrap">
                  <select name="subject" value={form.subject} onChange={handleChange}>
                    <option>General Inquiry</option>
                    <option>Adoption Question</option>
                    <option>Volunteering</option>
                    <option>Donation</option>
                    <option>Foster Program</option>
                    <option>Other</option>
                  </select>
                  <span className="cp-select-arrow">⌄</span>
                </div>
              </div>

              <div className="cp-field">
                <label>Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="How can we help you?"
                  rows={5}
                  required
                />
              </div>

              <button type="submit" className="cp-submit-btn">Send Message</button>
            </form>
          </div>

          {/* Right — Info */}
          <div className="cp-sidebar">
            <h2 className="cp-card-title">Get in touch</h2>

            <div className="cp-contact-items">
              <div className="cp-contact-item">
                <div className="cp-contact-icon">✉️</div>
                <div>
                  <p className="cp-contact-label">Email Support</p>
                  <a href="mailto:hello@pawsitive.org" className="cp-contact-value">hello@pawsitive.org</a>
                </div>
              </div>
              <div className="cp-contact-item">
                <div className="cp-contact-icon">📞</div>
                <div>
                  <p className="cp-contact-label">Phone</p>
                  <a href="tel:+910000000123" className="cp-contact-value">(+91) 0000000123</a>
                </div>
              </div>
              <div className="cp-contact-item">
                <div className="cp-contact-icon">📍</div>
                <div>
                  <p className="cp-contact-label">Visit Our Shelter</p>
                  <p className="cp-contact-value">Pune, Maharashtra</p>
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="cp-map">
              <div className="cp-map-bg">
                <div className="cp-map-grid" />
                <div className="cp-map-pin">
                  <div className="cp-pin-dot" />
                  <div className="cp-pin-pulse" />
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="cp-social-section">
              <p className="cp-social-label">Follow us</p>
              <div className="cp-social-icons">
                <a href="#" className="cp-social-btn" aria-label="Share">🔗</a>
                <a href="#" className="cp-social-btn" aria-label="Facebook">👍</a>
                <a href="#" className="cp-social-btn" aria-label="Instagram">📷</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── FAQ ── */}
      <section className="cp-faq">
        <div className="cp-faq-inner">
          <h2 className="cp-faq-title">Frequently Asked Questions</h2>
          <div className="cp-faq-grid">
            {faqs.map((faq) => (
              <div className="cp-faq-card" key={faq.q}>
                <h3 className="cp-faq-q">{faq.q}</h3>
                <p className="cp-faq-a">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="cp-footer">
        <div className="cp-footer-inner">
          <div className="cp-footer-brand">
            <div className="cp-footer-logo">
              <span className="cp-logo-icon">🐾</span>
              <strong>Pawsitive Connections</strong>
            </div>
            <p className="cp-footer-tag">
              Connecting loving homes with pets in need since 2015. Every life deserves a second chance.
            </p>
          </div>

          {Object.entries(footerLinks).map(([title, items]) => (
            <div className="cp-footer-col" key={title}>
              <h4>{title}</h4>
              <ul>
                {items.map((item) => (
                  <li key={item}><a href="#">{item}</a></li>
                ))}
              </ul>
            </div>
          ))}

          <div className="cp-footer-col">
            <h4>Newsletter</h4>
            <p className="cp-footer-newsletter-desc">Get cute pet photos and updates in your inbox.</p>
            <div className="cp-newsletter-form">
              <input
                type="email"
                placeholder="Email"
                value={newsEmail}
                onChange={(e) => setNewsEmail(e.target.value)}
              />
              <button>→</button>
            </div>
          </div>
        </div>

        <div className="cp-footer-bottom">
          <p>© 2024 Pawsitive Connections. All rights reserved.</p>
          <div className="cp-footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </footer>

    </div>
  );
}