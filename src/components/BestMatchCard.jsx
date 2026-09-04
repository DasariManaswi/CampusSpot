import React from 'react';
import { Award, MapPin, CheckCircle2, Zap, Wifi, Users, ArrowRight, Sparkles, Clock } from 'lucide-react';

export default function BestMatchCard({ spot, onSelectSpot }) {
  if (!spot) return null;

  return (
    <section className="best-match-container">
      <div className="best-match-inner">
        <div>
          <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
            <span className="best-match-badge-header">
              <Sparkles size={14} /> Best Recommended for You
            </span>
            <span className="score-tag">
              {spot.matchScore}% Match
            </span>
          </div>

          <h2 className="best-spot-title">{spot.name}</h2>
          <p className="best-spot-location">
            <MapPin size={15} style={{ color: 'var(--accent-primary)' }} />
            {spot.location} • {spot.distanceMinutes} min walk
          </p>

          <div className="match-reasons-list">
            {spot.matchReasons.map((reason, idx) => (
              <div key={idx} className="reason-item">
                <CheckCircle2 size={16} className="reason-bullet" />
                <span>{reason}</span>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
            <span className="badge-pill">
              <Wifi size={12} style={{ color: '#38bdf8' }} /> {spot.wifiSpeed} Mbps
            </span>
            <span className="badge-pill">
              <Zap size={12} style={{ color: '#fbbf24' }} /> Outlets: {spot.outletCoverage}%
            </span>
            <span className="badge-pill">
              <Users size={12} style={{ color: '#34d399' }} /> {spot.crowdStatus} ({spot.crowdLevel}%)
            </span>
            <span className="badge-pill">
              <Clock size={12} style={{ color: '#a78bfa' }} /> {spot.openHours}
            </span>
          </div>

          <button className="action-btn-primary" onClick={() => onSelectSpot(spot)}>
            View Floor Directions & Details <ArrowRight size={16} />
          </button>
        </div>

        <div className="best-match-img-wrapper" onClick={() => onSelectSpot(spot)} style={{ cursor: 'pointer' }}>
          <img src={spot.image} alt={spot.name} className="best-match-img" />
          <div className="img-overlay-badge">
            <span style={{ textTransform: 'capitalize', color: spot.vibe === 'quiet' ? '#a5b4fc' : '#fde68a' }}>
              ✦ {spot.noiseTag}
            </span>
            <span style={{ color: '#10b981' }}>{spot.seatingLabel.split('&')[0]}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
