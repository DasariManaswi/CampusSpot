import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import PreferenceWizard from './components/PreferenceWizard';
import BestMatchCard from './components/BestMatchCard';
import SpotGrid from './components/SpotGrid';
import SpotDetailModal from './components/SpotDetailModal';
import { STUDY_SPOTS } from './data/spotsData';
import { getSpotRecommendations } from './utils/recommendationEngine';

export default function App() {
  const [preferences, setPreferences] = useState({
    vibe: 'quiet', // 'quiet' | 'social'
    outletsNeeded: true,
    wifiSpeedPreference: 'fast',
    seatingType: 'all',
    amenities: ['fast_wifi', 'open_24_7'],
  });

  const [selectedSpot, setSelectedSpot] = useState(null);

  // Compute live recommendations using memoization
  const { bestMatch, allSpots } = useMemo(() => {
    return getSpotRecommendations(STUDY_SPOTS, preferences);
  }, [preferences]);

  return (
    <div className="app-container">
      <Header />

      <main>
        <PreferenceWizard
          preferences={preferences}
          onPreferenceChange={setPreferences}
        />

        {bestMatch && (
          <BestMatchCard
            spot={bestMatch}
            onSelectSpot={setSelectedSpot}
          />
        )}

        <SpotGrid
          spots={allSpots}
          onSelectSpot={setSelectedSpot}
        />
      </main>

      {/* Spot Detail Modal */}
      {selectedSpot && (
        <SpotDetailModal
          spot={selectedSpot}
          onClose={() => setSelectedSpot(null)}
        />
      )}
    </div>
  );
}
