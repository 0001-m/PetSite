import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './AboutPage.css';

const team = [
  {
    name: 'Sarah Jenkins',
    role: 'Founder & CEO',
    roleColor: '#00B8CC',
    bio: '15 years in animal welfare. Former shelter director with a passion for senior pets.',
    img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
  },
  {
    name: 'Dr. Aris Varma',
    role: 'Head of Rescue Operations',
    roleColor: '#00B8CC',
    bio: 'Specialist in shelter medicine. Ensuring every animal gets the best medical care possible.',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
  },
  {
    name: 'Mark Thompson',
    role: 'Volunteer Coordinator',
    roleColor: '#00B8CC',
    bio: 'Community outreach expert. Mark helps our network of 500+ volunteers find their purpose.',
    img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
  },
];

const stats = [
  { value: '12k',  label: 'PETS RESCUED' },
  { value: '9.5k+', label: 'FAMILIES UNITED' },
  { value: '150',  label: 'PARTNER SHELTERS' },
  { value: '$2M+', label: 'MEDICAL GRANTS' },
];

const partners = [
  { icon: '🏥', name: 'City Vet Care' },
  { icon: '🏠', name: 'Safe Haven' },
  { icon: '🐾', name: 'Paws Foundation' },
  { icon: '🌍', name: 'Global Animal Aid' },
  { icon: '🏪', name: 'PetSupply Co.' },
];

export default function AboutPage() {
  return (
    <div className="about-page">
      <Navbar />

      {/* ── HERO ── */}
      <section className="ab-hero">
        <div className="ab-hero-inner">
          <div className="ab-hero-content">
            <h1 className="ab-hero-title">
              Every Paw Deserves a{' '}
              <span className="ab-hero-accent">Forever<br />Home</span>
            </h1>
            <p className="ab-hero-desc">
              We believe the bond between humans and animals is transformative. Our dedicated team works tirelessly to bridge the gap between shelters and forever homes using technology, compassion, and a shared vision of a world where no healthy pet is left behind.
            </p>
            <div className="ab-hero-actions">
              <Link to="/adopt" className="btn-primary">View Adoptable Pets</Link>
              <button className="btn-outline">Our Story</button>
            </div>
          </div>

          <div className="ab-hero-images">
            <div className="ab-img-main-wrap">
              <img
                className="ab-img-main"
                src="https://images.unsplash.com/photo-1561037404-61cd46aa615b?w=600&q=80"
                alt="Golden retriever"
              />
            </div>
            <div className="ab-img-secondary-wrap">
              <img
                className="ab-img-secondary"
                src="https://images.unsplash.com/photo-1574158622682-e40e69881006?w=300&q=80"
                alt="Kitten"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── MISSION & VISION ── */}
      <section className="ab-mission">
        <div className="ab-mission-inner">
          <div className="ab-mission-card">
            <div className="ab-mission-icon">💙</div>
            <h2>Our Mission</h2>
            <p>
              To streamline the adoption process through innovative technology and heartfelt advocacy, ensuring every pet finds their perfect match. We aim to make the journey of bringing a new family member home as seamless and joyful as possible.
            </p>
          </div>
          <div className="ab-mission-card">
            <div className="ab-mission-icon">👁️</div>
            <h2>Our Vision</h2>
            <p>
              A future where every shelter is empty, every pet is cherished, and the human-animal bond is celebrated in every community. We envision a world powered by empathy where animal welfare is a global priority.
            </p>
          </div>
        </div>
      </section>

      {/* ── STATS BANNER ── */}
      <section className="ab-stats">
        <div className="ab-stats-inner">
          {stats.map(s => (
            <div className="ab-stat" key={s.label}>
              <span className="ab-stat-val">{s.value}</span>
              <span className="ab-stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── TEAM ── */}
      <section className="ab-team">
        <div className="ab-team-inner">
          <div className="ab-section-header">
            <h2>Meet the Hearts Behind the Paws</h2>
            <p>Our diverse team of animal lovers, veterinarians, and tech enthusiasts work around the clock to save lives.</p>
          </div>
          <div className="ab-team-grid">
            {team.map(m => (
              <div className="ab-team-card" key={m.name}>
                <div className="ab-team-img-wrap">
                  <img src={m.img} alt={m.name} className="ab-team-img" />
                </div>
                <div className="ab-team-info">
                  <h3 className="ab-team-name">{m.name}</h3>
                  <p className="ab-team-role" style={{ color: m.roleColor }}>{m.role}</p>
                  <p className="ab-team-bio">{m.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PARTNERS ── */}
      <section className="ab-partners">
        <div className="ab-partners-inner">
          <p className="ab-partners-eyebrow">OUR SHELTER NETWORK</p>
          <h2 className="ab-partners-title">Trusted by leading organizations nationwide</h2>
          <div className="ab-partners-logos">
            {partners.map(p => (
              <div className="ab-partner-item" key={p.name}>
                <span className="ab-partner-icon">{p.icon}</span>
                <span>{p.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="ab-cta-section">
        <div className="ab-cta-inner">
          <div className="ab-cta-card">
            <h2>Ready to find your new best friend?</h2>
            <p>Join thousands of happy families who found their perfect companion through Pawsitive Connections. Start your adoption journey today.</p>
            <div className="ab-cta-actions">
              <Link to="/adopt" className="btn-primary">Browse Pets</Link>
              <Link to="/contact" className="btn-outline btn-outline-white">Contact Support</Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}