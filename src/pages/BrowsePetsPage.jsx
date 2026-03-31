import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { PETS } from '../data/pets';
import './BrowsePetsPage.css';

const SORT_OPTIONS = ['Newest Arrivals', 'Closest First', 'Youngest First', 'Oldest First'];
const AGE_STAGES   = ['Puppy', 'Young', 'Adult', 'Senior'];
const SIZES        = ['Small (0-25 lbs)', 'Medium (26-60 lbs)', 'Large (61+ lbs)'];

export default function BrowsePetsPage() {
  const navigate = useNavigate();

  // Filters
  const [species, setSpecies]   = useState({ Dogs: true, Cats: false, 'Other Animals': false });
  const [ages, setAges]         = useState({});
  const [sizeFilter, setSize]   = useState('');
  const [location, setLocation] = useState('');
  const [sort, setSort]         = useState('Newest Arrivals');
  const [search, setSearch]     = useState('');
  const [liked, setLiked]       = useState([]);
  const [page, setPage]         = useState(1);

  const PER_PAGE = 6;

  const toggleSpecies = (s) => setSpecies(p => ({ ...p, [s]: !p[s] }));
  const toggleAge     = (a) => setAges(p => ({ ...p, [a]: !p[a] }));
  const toggleLike    = (id, e) => { e.stopPropagation(); setLiked(p => p.includes(id) ? p.filter(i => i !== id) : [...p, id]); };

  const clearFilters = () => {
    setSpecies({ Dogs: false, Cats: false, 'Other Animals': false });
    setAges({});
    setSize('');
    setLocation('');
    setSearch('');
    setPage(1);
  };

  const filtered = useMemo(() => {
    const activeSpecies = Object.entries(species).filter(([,v]) => v).map(([k]) => k);
    const activeAges    = Object.entries(ages).filter(([,v]) => v).map(([k]) => k);

    return PETS.filter(p => {
      if (activeSpecies.length && !activeSpecies.includes(p.type)) return false;
      if (activeAges.length    && !activeAges.includes(p.age))     return false;
      if (sizeFilter) {
        const map = { 'Small (0-25 lbs)': 'Small', 'Medium (26-60 lbs)': 'Medium', 'Large (61+ lbs)': 'Large' };
        if (p.size !== map[sizeFilter]) return false;
      }
      if (search && !p.name.toLowerCase().includes(search.toLowerCase()) &&
          !p.breed.toLowerCase().includes(search.toLowerCase())) return false;
      return true;
    });
  }, [species, ages, sizeFilter, search]);

  const totalPages = Math.ceil(filtered.length / PER_PAGE);
  const paginated  = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  return (
    <div className="bp-page">
      <Navbar />

      {/* ── TOP BAR ── */}
      <div className="bp-topbar">
        <div className="bp-topbar-inner">
          <div className="bp-search-wrap">
            <span className="bp-search-icon">🔍</span>
            <input
              className="bp-search"
              type="text"
              placeholder="Search by name, breed, or personality..."
              value={search}
              onChange={e => { setSearch(e.target.value); setPage(1); }}
            />
          </div>
        </div>
      </div>

      <div className="bp-layout">
        {/* ── SIDEBAR ── */}
        <aside className="bp-sidebar">
          {/* Species */}
          <div className="bp-filter-group">
            <h4 className="bp-filter-label">SPECIES</h4>
            {Object.keys(species).map(s => (
              <label className="bp-checkbox" key={s}>
                <input
                  type="checkbox"
                  checked={species[s]}
                  onChange={() => { toggleSpecies(s); setPage(1); }}
                />
                <span className="bp-check-box" />
                {s}
              </label>
            ))}
          </div>

          {/* Age */}
          <div className="bp-filter-group">
            <h4 className="bp-filter-label">AGE RANGE</h4>
            <div className="bp-age-grid">
              {AGE_STAGES.map(a => (
                <button
                  key={a}
                  className={"bp-age-btn " + (ages[a] ? 'active' : '')}
                  onClick={() => { toggleAge(a); setPage(1); }}
                >
                  {a}
                </button>
              ))}
            </div>
          </div>

          {/* Size */}
          <div className="bp-filter-group">
            <h4 className="bp-filter-label">SIZE</h4>
            {SIZES.map(s => (
              <label className="bp-radio" key={s}>
                <input
                  type="radio"
                  name="size"
                  checked={sizeFilter === s}
                  onChange={() => { setSize(s); setPage(1); }}
                />
                <span className="bp-radio-dot" />
                {s}
              </label>
            ))}
          </div>

          {/* Location */}
          <div className="bp-filter-group">
            <h4 className="bp-filter-label">LOCATION</h4>
            <div className="bp-location-input">
              <span>📍</span>
              <input
                type="text"
                placeholder="Zip or City"
                value={location}
                onChange={e => setLocation(e.target.value)}
              />
            </div>
            {/* Mini map placeholder */}
            <div className="bp-mini-map">
              <div className="bp-map-grid" />
              <div className="bp-map-pin">
                <div className="bp-pin-dot" />
                <div className="bp-pin-pulse" />
              </div>
            </div>
          </div>

          <button className="bp-clear-btn" onClick={clearFilters}>Clear All Filters</button>
        </aside>

        {/* ── MAIN ── */}
        <main className="bp-main">
          <div className="bp-main-header">
            <div>
              <h1 className="bp-title">Find Your New Best Friend</h1>
              <p className="bp-subtitle">Showing {filtered.length} pets near San Francisco, CA</p>
            </div>
            <div className="bp-sort">
              <span>Sort by:</span>
              <div className="bp-sort-select-wrap">
                <select value={sort} onChange={e => setSort(e.target.value)}>
                  {SORT_OPTIONS.map(o => <option key={o}>{o}</option>)}
                </select>
                <span className="bp-sort-arrow">⌄</span>
              </div>
            </div>
          </div>

          {paginated.length === 0 ? (
            <div className="bp-empty">
              <span>🐾</span>
              <p>No pets match your filters. Try clearing some!</p>
              <button className="bp-clear-btn" onClick={clearFilters}>Clear Filters</button>
            </div>
          ) : (
            <div className="bp-grid">
              {paginated.map(pet => (
                <div className="bp-card" key={pet.id} onClick={() => navigate(`/pet/${pet.id}`)}>
                  <div className="bp-card-img-wrap">
                    <img src={pet.img} alt={pet.name} className="bp-card-img" />
                    {pet.isNew && <span className="bp-new-badge">NEW ARRIVAL</span>}
                    <button
                      className={"bp-like-btn " + (liked.includes(pet.id) ? 'liked' : '')}
                      onClick={e => toggleLike(pet.id, e)}
                      aria-label="Like"
                    >♥</button>
                  </div>

                  <div className="bp-card-body">
                    <div className="bp-card-top">
                      <h2 className="bp-card-name">{pet.name}</h2>
                      <span className="bp-card-dist">{pet.distance}</span>
                    </div>
                    <p className="bp-card-meta">{pet.breed} · {pet.age} · {pet.gender}</p>
                    <div className="bp-card-tags">
                      {pet.tags.map(t => (
                        <span className="bp-tag" key={t}>{t}</span>
                      ))}
                    </div>
                    <button className="bp-view-btn" onClick={() => navigate(`/pet/${pet.id}`)}>
                      View Profile →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="bp-pagination">
              <button
                className="bp-page-arrow"
                onClick={() => setPage(p => Math.max(1, p - 1))}
                disabled={page === 1}
              >‹</button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(n => (
                <button
                  key={n}
                  className={"bp-page-num " + (n === page ? 'active' : '')}
                  onClick={() => setPage(n)}
                >{n}</button>
              ))}
              <button
                className="bp-page-arrow"
                onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
              >›</button>
            </div>
          )}
        </main>
      </div>

      {/* ── FOOTER ── */}
      <footer className="bp-footer">
        <div className="bp-footer-inner">
          <div className="bp-footer-brand">
            <span className="bp-footer-icon">🐾</span>
            <span>PetAdoption © 2024</span>
          </div>
          <div className="bp-footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Settings</a>
            <a href="#">Contact Support</a>
          </div>
          <div className="bp-footer-socials">
            <a href="#" aria-label="Share">🔗</a>
            <a href="#" aria-label="Email">✉️</a>
          </div>
        </div>
      </footer>
    </div>
  );
}