import React from 'react';
import { MapPin, Wifi, Zap, Users, ArrowUpRight } from 'lucide-react';

export default function SpotCard({ spot, onSelect }) {
  // Determine crowd dot color
  const crowdColorClass =
    spot.crowdLevel < 40 ? 'low' : spot.crowdLevel < 70 ? 'medium' : 'high';

  return (
    <div className="spot-card" onClick={() => onSelect(spot)}>
      <div className="card-img-wrapper">
        <img src={spot.image} alt={spot.name} className="card-img" />
        <span className={`card-vibe-tag ${spot.vibe}`}>
          {spot.vibe === 'quiet' ? '🤫 Quiet Focus' : '🗣️ Social Hub'}
        </span>
        <span className="card-match-badge">{spot.matchScore}% Match</span>
      </div>

      <div className="card-body">
        <h3 className="card-title">{spot.name}</h3>
        <p className="card-location">
          <MapPin size={13} />
          {spot.location}
        </p>

        <div className="card-specs-row">
          <div className="spec-item">
            <Wifi size={13} />
            <span>{spot.wifiSpeed} Mbps</span>
          </div>
          <div className="spec-item">
            <Zap size={13} />
            <span>Outlets: {spot.outletCoverage}%</span>
          </div>
        </div>

        <div className="card-footer">
          <div className="crowd-indicator">
            <div className={`crowd-dot ${crowdColorClass}`} />
            <span>
              {spot.crowdLevel}% Full ({spot.distanceMinutes} min walk)
            </span>
          </div>

          <span className="view-details-link">
            Details <ArrowUpRight size={14} />
          </span>
        </div>
      </div>
    </div>
  );
}
