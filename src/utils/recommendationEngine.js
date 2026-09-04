/**
 * Calculates a match score (0-100%) and reasons for each study spot based on user preferences.
 */
export function getSpotRecommendations(spots, preferences) {
  const {
    vibe = 'quiet', // 'quiet' | 'social'
    outletsNeeded = true,
    wifiSpeedPreference = 'fast', // 'fast' | 'basic'
    seatingType = 'all',
    amenities = [], // Array of amenity ids (e.g. ['coffee_near', 'open_24_7'])
    maxDistance = 10,
  } = preferences;

  const scoredSpots = spots.map((spot) => {
    let score = 0;
    let maxPossible = 0;
    const matchReasons = [];
    const missingFeatures = [];

    // 1. Vibe Match (Weight: 35 points)
    maxPossible += 35;
    if (spot.vibe === vibe) {
      score += 35;
      matchReasons.push(
        vibe === 'quiet'
          ? 'Perfect quiet focus environment'
          : 'Great lively social atmosphere'
      );
    } else {
      score += 10; // Partial score
      missingFeatures.push(
        vibe === 'quiet' ? 'Slightly noisier than preferred' : 'Quieter vibe than requested'
      );
    }

    // 2. Power Outlets Match (Weight: 20 points)
    maxPossible += 20;
    if (outletsNeeded) {
      if (spot.outletCoverage >= 80) {
        score += 20;
        matchReasons.push(`Excellent outlet availability (${spot.outletCoverage}%)`);
      } else if (spot.outletCoverage >= 50) {
        score += 14;
        matchReasons.push('Good outlet coverage');
      } else {
        score += 5;
        missingFeatures.push('Limited power outlets nearby');
      }
    } else {
      score += 20; // User doesn't care
    }

    // 3. WiFi Speed Match (Weight: 15 points)
    maxPossible += 15;
    if (wifiSpeedPreference === 'fast') {
      if (spot.wifiSpeed >= 150) {
        score += 15;
        matchReasons.push(`Blazing fast WiFi (${spot.wifiSpeed} Mbps)`);
      } else if (spot.wifiSpeed >= 80) {
        score += 10;
        matchReasons.push(`Reliable WiFi speed (${spot.wifiSpeed} Mbps)`);
      } else {
        score += 5;
      }
    } else {
      score += 15;
    }

    // 4. Seating Type Match (Weight: 15 points)
    maxPossible += 15;
    if (seatingType === 'all' || spot.seatingType === seatingType) {
      score += 15;
      if (seatingType !== 'all') {
        matchReasons.push(`Matches requested seating (${spot.seatingLabel})`);
      }
    } else {
      score += 5;
    }

    // 5. Amenities Match (Weight: 15 points)
    maxPossible += 15;
    if (amenities.length > 0) {
      let matchedAmenitiesCount = 0;
      amenities.forEach((amenityId) => {
        if (amenityId === 'fast_wifi' && spot.wifiSpeed >= 150) matchedAmenitiesCount++;
        else if (amenityId === 'outlets_needed' && spot.outletCoverage >= 70) matchedAmenitiesCount++;
        else if (amenityId === 'coffee_near' && spot.perks.includes('coffee')) matchedAmenitiesCount++;
        else if (amenityId === 'open_24_7' && spot.perks.includes('24_7')) matchedAmenitiesCount++;
        else if (amenityId === 'natural_light' && spot.perks.includes('natural_light')) matchedAmenitiesCount++;
        else if (amenityId === 'outdoor' && spot.perks.includes('outdoor')) matchedAmenitiesCount++;
      });

      const amenityRatio = matchedAmenitiesCount / amenities.length;
      score += Math.round(amenityRatio * 15);
      if (matchedAmenitiesCount > 0) {
        matchReasons.push(`Has ${matchedAmenitiesCount} of your selected bonus perks`);
      }
    } else {
      score += 15;
    }

    // Calculate final percentage score (clamped between 60% and 99% for visual presentation)
    const rawPercentage = Math.round((score / maxPossible) * 100);
    const finalScore = Math.min(99, Math.max(62, rawPercentage));

    return {
      ...spot,
      matchScore: finalScore,
      matchReasons,
      missingFeatures,
    };
  });

  // Sort descending by matchScore, then by crowdLevel (lower crowd is better)
  scoredSpots.sort((a, b) => b.matchScore - a.matchScore || a.crowdLevel - b.crowdLevel);

  return {
    bestMatch: scoredSpots[0],
    otherMatches: scoredSpots.slice(1),
    allSpots: scoredSpots,
  };
}
