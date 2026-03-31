import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { PETS } from '../data/pets';
import './FeaturedPets.css';

export default function FeaturedPets() {
  const navigate = useNavigate();
  const [liked, setLiked] = useState([]);
  const featured = PETS.slice(0, 4);

  const toggleLike = (id) =>
    setLiked(p => p.includes(id) ? p.filter(i => i !== id) : [...p, id]);

  return (
    <section className="featured-pets">
      <div className="fp-inner">
        <div className="fp-header">
          <div>
            <h2 className="section-title">Featured Furry Friends</h2>
            <p className="section-sub" style={{ textAlign: 'left', margin: 0, maxWidth: '380px' }}>
              These adorable companions are waiting for their forever homes. Could you be the one?
            </p>
          </div>
          <Link to="/browse-pets" className="fp-see-all">See All Pets →</Link>
        </div>

        <div className="fp-grid">
          {featured.map((pet) => (
            <div className="pet-card" key={pet.id} onClick={() => navigate(`/pet/${pet.id}`)}>
              <div className="pet-img-wrap">
                <img src={pet.img} alt={pet.name} className="pet-img" />
                <span className={`pet-type-badge type-${pet.type.toLowerCase()}`}>{pet.type}</span>
                <button
                  className={`pet-like-btn ${liked.includes(pet.id) ? 'liked' : ''}`}
                  onClick={(e) => { e.stopPropagation(); toggleLike(pet.id); }}
                  aria-label="Like"
                >♥</button>
              </div>
              <div className="pet-info">
                <div className="pet-info-top">
                  <span className="pet-name">{pet.name}</span>
                  <span className="pet-age">{pet.ageLabel}</span>
                </div>
                <p className="pet-location">📍 {pet.location}</p>
                <button className="btn-outline pet-profile-btn" onClick={() => navigate(`/pet/${pet.id}`)}>
                  View Profile
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}