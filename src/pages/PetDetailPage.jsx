import { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { PETS } from '../data/pets';
import './PetDetailPage.css';

export default function PetDetailPage() {
  const { id }       = useParams();
  const navigate     = useNavigate();
  const pet          = PETS.find(p => p.id === parseInt(id));
  const similar      = PETS.filter(p => p.id !== pet?.id && p.type === pet?.type).slice(0, 4);

  const [activeImg, setActiveImg]   = useState(0);
  const [liked, setLiked]           = useState(false);
  const [similarLiked, setSimilarLiked] = useState([]);

  if (!pet) {
    return (
      <div className="pd-not-found">
        <Navbar />
        <div className="pd-not-found-body">
          <span>🐾</span>
          <h2>Pet not found</h2>
          <button onClick={() => navigate('/browse-pets')}>Back to Browse</button>
        </div>
      </div>
    );
  }

  const allImages = [pet.img, ...pet.gallery];
  const extraCount = allImages.length > 4 ? allImages.length - 3 : 0;
  const visibleThumbs = allImages.slice(0, extraCount > 0 ? 3 : 4);

  const toggleSimilarLike = (sid, e) => {
    e.stopPropagation();
    setSimilarLiked(p => p.includes(sid) ? p.filter(i => i !== sid) : [...p, sid]);
  };

  return (
    <div className="pd-page">
      <Navbar />

      <div className="pd-inner">
        {/* ── LEFT COLUMN ── */}
        <div className="pd-left">
          {/* Main photo */}
          <div className="pd-main-photo">
            <img src={allImages[activeImg]} alt={pet.name} className="pd-main-img" />
          </div>

          {/* Thumbnails */}
          <div className="pd-thumbs">
            {visibleThumbs.map((img, i) => (
              <button
                key={i}
                className={"pd-thumb " + (activeImg === i ? 'active' : '')}
                onClick={() => setActiveImg(i)}
              >
                <img src={img} alt={`${pet.name} ${i + 1}`} />
              </button>
            ))}
            {extraCount > 0 && (
              <div className="pd-thumb pd-thumb-more">+{extraCount}</div>
            )}
          </div>

          {/* About Me */}
          <div className="pd-section-card">
            <h3 className="pd-section-title">About Me</h3>
            {pet.about.split('\n\n').map((para, i) => (
              <p key={i} className="pd-about-para">{para}</p>
            ))}
          </div>

          {/* Compatibility */}
          <div className="pd-section-card">
            <h3 className="pd-section-title">Compatibility</h3>
            <div className="pd-compat-grid">
              {pet.compatibility.map(c => (
                <div className="pd-compat-item" key={c.label} style={{ '--compat-color': c.color }}>
                  <span className="pd-compat-icon">{c.icon}</span>
                  <span>{c.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── RIGHT COLUMN ── */}
        <div className="pd-right">
          <div className="pd-info-card">
            {/* Name + status */}
            <div className="pd-info-top">
              <h1 className="pd-pet-name">{pet.name}</h1>
              <span className="pd-status-badge">{pet.status}</span>
            </div>

            <p className="pd-location">
              <span className="pd-location-icon">📍</span>
              <span>{pet.location}</span>
            </p>

            {/* Stats grid */}
            <div className="pd-stats-grid">
              <div className="pd-stat-item">
                <span className="pd-stat-label">BREED</span>
                <span className="pd-stat-value">{pet.breed}</span>
              </div>
              <div className="pd-stat-item">
                <span className="pd-stat-label">AGE</span>
                <span className="pd-stat-value">{pet.ageLabel}</span>
              </div>
              <div className="pd-stat-item">
                <span className="pd-stat-label">SIZE</span>
                <span className="pd-stat-value">{pet.sizeLabel}</span>
              </div>
              <div className="pd-stat-item">
                <span className="pd-stat-label">GENDER</span>
                <span className="pd-stat-value">{pet.gender}</span>
              </div>
            </div>

            {/* CTA buttons */}
            <button className="pd-adopt-btn">
              ♥ Adopt {pet.name}
            </button>
            <button
              className={"pd-fav-btn " + (liked ? 'liked' : '')}
              onClick={() => setLiked(!liked)}
            >
              🔖 {liked ? 'Saved to Favorites' : 'Add to Favorites'}
            </button>

            {/* Health */}
            <div className="pd-health-section">
              <p className="pd-health-label">HEALTH & MEDICAL</p>
              <div className="pd-health-tags">
                {pet.health.map(h => (
                  <span className="pd-health-tag" key={h}>✓ {h}</span>
                ))}
              </div>
            </div>

            {/* Shelter */}
            <div className="pd-shelter-card">
              <div className="pd-shelter-icon">🏠</div>
              <div className="pd-shelter-info">
                <p className="pd-shelter-name">{pet.shelter}</p>
                <p className="pd-shelter-loc">{pet.shelterLocation}</p>
              </div>
              <a href="#" className="pd-shelter-profile">Profile</a>
            </div>

            <div className="pd-shelter-actions">
              <button className="pd-shelter-btn">📞 Call Shelter</button>
              <button className="pd-shelter-btn">💬 Message</button>
            </div>
          </div>
        </div>
      </div>

      {/* ── SIMILAR PETS ── */}
      {similar.length > 0 && (
        <section className="pd-similar">
          <div className="pd-similar-inner">
            <div className="pd-similar-header">
              <h2 className="pd-similar-title">Similar Furry Friends</h2>
              <div className="pd-similar-arrows">
                <button className="pd-arrow-btn">‹</button>
                <button className="pd-arrow-btn">›</button>
              </div>
            </div>
            <div className="pd-similar-grid">
              {similar.map(sp => (
                <div
                  className="pd-sim-card"
                  key={sp.id}
                  onClick={() => { navigate(`/pet/${sp.id}`); window.scrollTo(0, 0); }}
                >
                  <div className="pd-sim-img-wrap">
                    <img src={sp.img} alt={sp.name} className="pd-sim-img" />
                    <button
                      className={"pd-sim-like " + (similarLiked.includes(sp.id) ? 'liked' : '')}
                      onClick={e => toggleSimilarLike(sp.id, e)}
                    >♥</button>
                  </div>
                  <div className="pd-sim-info">
                    <h3 className="pd-sim-name">{sp.name}</h3>
                    <p className="pd-sim-meta">{sp.breed} · {sp.ageLabel}</p>
                    <p className="pd-sim-loc">📍 {sp.location}</p>
                    <span className="pd-sim-dist">{sp.distance}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── FOOTER ── */}
      <footer className="pd-footer">
        <div className="pd-footer-inner">
          <div className="pd-footer-brand">
            <span>🐾</span>
            <div>
              <p className="pd-footer-name">Pawsitive Connections</p>
              <p className="pd-footer-tag">Connecting loving families with their perfect companions. Making the world a better place, one paw at a time.</p>
            </div>
          </div>
          <div className="pd-footer-col">
            <h4>Platform</h4>
            <Link to="/browse-pets">Search Pets</Link>
            <a href="#">Shelter Login</a>
            <Link to="/success-stories">Success Stories</Link>
          </div>
          <div className="pd-footer-col">
            <h4>Support</h4>
            <a href="#">Adoption Guide</a>
            <a href="#">Safety Tips</a>
            <Link to="/contact">Contact Us</Link>
          </div>
        </div>
        <div className="pd-footer-bottom">
          <p>© 2024 Pawsitive Connections Adoption Platform. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}