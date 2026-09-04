import React, { useState } from 'react';
import SpotCard from './SpotCard';
import { SlidersHorizontal } from 'lucide-react';

export default function SpotGrid({ spots, onSelectSpot }) {
  const [filterVibe, setFilterVibe] = useState('all');

  const filteredSpots = spots.filter((spot) => {
    if (filterVibe === 'all') return true;
    return spot.vibe === filterVibe;
  });

  return (
    <section>
      <div className="grid-header">
        <h2 className="grid-title">Explore All Campus Spots ({filteredSpots.length})</h2>

        <div style={{ display: 'flex', gap: '0.4rem' }}>
          <button
            className={`filter-pill ${filterVibe === 'all' ? 'active' : ''}`}
            onClick={() => setFilterVibe('all')}
          >
            All
          </button>
          <button
            className={`filter-pill ${filterVibe === 'quiet' ? 'active' : ''}`}
            onClick={() => setFilterVibe('quiet')}
          >
            Quiet
          </button>
          <button
            className={`filter-pill ${filterVibe === 'social' ? 'active' : ''}`}
            onClick={() => setFilterVibe('social')}
          >
            Social
          </button>
        </div>
      </div>

      <div className="spots-grid">
        {filteredSpots.map((spot) => (
          <SpotCard key={spot.id} spot={spot} onSelect={onSelectSpot} />
        ))}
      </div>
    </section>
  );
}
