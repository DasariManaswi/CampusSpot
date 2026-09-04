import React from 'react';
import { X, MapPin, Volume2, Wifi, Zap, Users, Clock, Compass, Lightbulb, CheckCircle, ShieldCheck } from 'lucide-react';

export default function SpotDetailModal({ spot, onClose }) {
  if (!spot) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header-img">
          <img src={spot.image} alt={spot.name} />
          <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
            <X size={20} />
          </button>
        </div>

        <div className="modal-body">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
            <span className={`card-vibe-tag ${spot.vibe}`} style={{ position: 'static' }}>
              {spot.vibe === 'quiet' ? '🤫 Quiet Focus' : '🗣️ Social Hub'}
            </span>
            <span className="card-match-badge" style={{ position: 'static' }}>
              {spot.matchScore}% Match
            </span>
          </div>

          <h2 className="modal-title">{spot.name}</h2>
          <p className="modal-location">
            <MapPin size={14} style={{ display: 'inline', marginRight: '4px', verticalAlign: '-2px' }} />
            {spot.location} • {spot.distanceMinutes} min walk from Quad
          </p>

          <p style={{ fontSize: '0.9rem', color: '#cbd5e1', marginBottom: '1.25rem', lineHeight: '1.5' }}>
            {spot.description}
          </p>

          {/* Key Metrics 2x2 Grid */}
          <div className="modal-metrics-grid">
            <div className="metric-box">
              <div className="metric-box-title">WiFi Speed</div>
              <div className="metric-box-val" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Wifi size={16} style={{ color: '#38bdf8' }} /> {spot.wifiSpeed} Mbps
              </div>
            </div>

            <div className="metric-box">
              <div className="metric-box-title">Power Outlets</div>
              <div className="metric-box-val" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Zap size={16} style={{ color: '#fbbf24' }} /> {spot.outletCoverage}% Desks
              </div>
            </div>

            <div className="metric-box">
              <div className="metric-box-title">Noise Level</div>
              <div className="metric-box-val" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Volume2 size={16} style={{ color: spot.noiseLevel < 30 ? '#818cf8' : '#f59e0b' }} /> {spot.noiseTag}
              </div>
            </div>

            <div className="metric-box">
              <div className="metric-box-title">Live Crowd Capacity</div>
              <div className="metric-box-val" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Users size={16} style={{ color: '#34d399' }} /> {spot.crowdLevel}% Full
              </div>
            </div>
          </div>

          {/* Student Pro-Tip Box */}
          {spot.studentTip && (
            <div className="student-tip-box">
              <div className="tip-title">
                <Lightbulb size={16} /> Student Pro-Tip
              </div>
              <p className="tip-text">{spot.studentTip}</p>
            </div>
          )}

          {/* Floor & Directions Note */}
          <div style={{ marginBottom: '1.25rem', background: 'rgba(255,255,255,0.03)', padding: '0.85rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-glass)' }}>
            <div style={{ fontSize: '0.8rem', fontWeight: '700', color: 'var(--accent-primary)', marginBottom: '0.25rem', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <Compass size={14} /> How to Find It / Floor Directions
            </div>
            <div style={{ fontSize: '0.85rem', color: '#cbd5e1' }}>{spot.floorMapNote}</div>
          </div>

          {/* Perks & Features Badges */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.5rem' }}>
            {spot.perkLabels.map((perk, idx) => (
              <span key={idx} className="badge-pill">
                <ShieldCheck size={12} style={{ color: '#10b981' }} /> {perk}
              </span>
            ))}
          </div>

          <button
            className="action-btn-primary"
            onClick={onClose}
            style={{ width: '100%' }}
          >
            Got it, take me here!
          </button>
        </div>
      </div>
    </div>
  );
}
