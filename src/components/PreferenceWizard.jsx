import React from 'react';
import { VolumeX, Volume2, Wifi, Zap, Coffee, Clock, Sun, Sparkles, Armchair, Check } from 'lucide-react';
import { AMENITY_FILTERS, SEATING_OPTIONS } from '../data/spotsData';

export default function PreferenceWizard({ preferences, onPreferenceChange }) {
  const { vibe, outletsNeeded, wifiSpeedPreference, seatingType, amenities } = preferences;

  const handleVibeSelect = (selectedVibe) => {
    onPreferenceChange({ ...preferences, vibe: selectedVibe });
  };

  const toggleOutlet = () => {
    onPreferenceChange({ ...preferences, outletsNeeded: !outletsNeeded });
  };

  const toggleAmenity = (amenityId) => {
    const updated = amenities.includes(amenityId)
      ? amenities.filter((a) => a !== amenityId)
      : [...amenities, amenityId];
    onPreferenceChange({ ...preferences, amenities: updated });
  };

  const handleSeatingSelect = (e) => {
    onPreferenceChange({ ...preferences, seatingType: e.target.value });
  };

  return (
    <section className="glass-panel wizard-section">
      <div className="section-label">
        <Sparkles size={14} /> Quick Preference Finder
      </div>
      <h2 className="wizard-title">What vibe are you looking for right now?</h2>

      {/* Vibe Selection Grid */}
      <div className="vibe-grid">
        <div
          className={`vibe-card ${vibe === 'quiet' ? 'active-quiet' : ''}`}
          onClick={() => handleVibeSelect('quiet')}
        >
          <div className="vibe-icon-wrapper">
            <VolumeX size={24} />
          </div>
          <div>
            <h3 className="vibe-text-title">Quiet Zone (Focus)</h3>
            <p className="vibe-text-desc">Pin-drop silence, individual desks, zero distractions</p>
          </div>
        </div>

        <div
          className={`vibe-card ${vibe === 'social' ? 'active-social' : ''}`}
          onClick={() => handleVibeSelect('social')}
        >
          <div className="vibe-icon-wrapper">
            <Volume2 size={24} />
          </div>
          <div>
            <h3 className="vibe-text-title">Social & Collaborative</h3>
            <p className="vibe-text-desc">Group project tables, coffee shop chatter & lively buzz</p>
          </div>
        </div>
      </div>

      {/* Requirements & Perks Filters */}
      <div className="filters-wrap">
        <div
          className={`filter-pill ${outletsNeeded ? 'active' : ''}`}
          onClick={toggleOutlet}
        >
          <Zap size={14} />
          <span>Must Have Power Outlets</span>
          {outletsNeeded && <Check size={12} />}
        </div>

        {AMENITY_FILTERS.map((item) => {
          const isActive = amenities.includes(item.id);
          return (
            <div
              key={item.id}
              className={`filter-pill ${isActive ? 'active' : ''}`}
              onClick={() => toggleAmenity(item.id)}
            >
              <span>{item.label}</span>
              {isActive && <Check size={12} />}
            </div>
          );
        })}

        {/* Seating type dropdown */}
        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
          <Armchair size={15} style={{ color: 'var(--text-secondary)' }} />
          <select
            value={seatingType}
            onChange={handleSeatingSelect}
            style={{
              background: 'rgba(17, 24, 39, 0.9)',
              color: 'var(--text-primary)',
              border: '1px solid var(--border-glass)',
              borderRadius: 'var(--radius-sm)',
              padding: '0.4rem 0.75rem',
              fontSize: '0.8rem',
              cursor: 'pointer',
              outline: 'none',
            }}
          >
            {SEATING_OPTIONS.map((opt) => (
              <option key={opt.id} value={opt.id}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </section>
  );
}
