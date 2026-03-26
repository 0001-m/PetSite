import React, { useState } from 'react';
import './FeaturedPets.css';

const pets = [
  {
    id: 1,
    name: 'Charlie',
    type: 'DOG',
    age: '2 Years',
    location: 'Austin, TX',
    img: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&q=80',
  },
  {
    id: 2,
    name: 'Luna',
    type: 'CAT',
    age: '6 Months',
    location: 'Seattle, WA',
    img: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400&q=80',
  },
  {
    id: 3,
    name: 'Bear',
    type: 'DOG',
    age: '1 Year',
    location: 'Denver, CO',
    img: 'https://images.unsplash.com/photo-1568572933382-74d440642117?w=400&q=80',
  },
  {
    id: 4,
    name: 'Daisy',
    type: 'DOG',
    age: '4 Years',
    location: 'Miami, FL',
    img: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=400&q=80',
  },
];

export default function FeaturedPets() {
  const [liked, setLiked] = useState([]);

  const toggleLike = (id) => {
    setLiked((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  return (
    <section className="featured-pets">
      <div className="fp-inner">
        <div className="fp-header">
          <div>
            <h2 className="section-title">Featured Furry Friends</h2>
            <p className="section-sub" style={{ textAlign: 'left', margin: 0, maxWidth: '380px' }}>
              These adorable companions are waiting for their forever homes. Could
              you be the one?
            </p>
          </div>
          <a href="#" className="fp-see-all">See All Pets →</a>
        </div>

        <div className="fp-grid">
          {pets.map((pet) => (
            <div className="pet-card" key={pet.id}>
              <div className="pet-img-wrap">
                <img src={pet.img} alt={pet.name} className="pet-img" />
                <span className={`pet-type-badge type-${pet.type.toLowerCase()}`}>
                  {pet.type}
                </span>
                <button
                  className={`pet-like-btn ${liked.includes(pet.id) ? 'liked' : ''}`}
                  onClick={() => toggleLike(pet.id)}
                  aria-label="Like"
                >
                  ♥
                </button>
              </div>
              <div className="pet-info">
                <div className="pet-info-top">
                  <span className="pet-name">{pet.name}</span>
                  <span className="pet-age">{pet.age}</span>
                </div>
                <p className="pet-location">📍 {pet.location}</p>
                <button className="btn-outline pet-profile-btn">View Profile</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}