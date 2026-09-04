export const STUDY_SPOTS = [
  {
    id: 'spot-1',
    name: 'Library 3rd Floor Silent Sanctuary',
    location: 'Main University Library • 3rd Floor East Wing',
    vibe: 'quiet', // quiet | social
    noiseLevel: 15, // dB (lower = quieter)
    noiseTag: 'Pin-Drop Silence',
    wifiSpeed: 250, // Mbps
    wifiQuality: 'fast', // fast | basic | none
    outletCoverage: 100, // percentage
    outletsTag: 'Every Single Seat',
    seatingType: 'privacy_pods', // privacy_pods | ergonomic_desks | group_tables | couches | outdoor
    seatingLabel: 'Individual Privacy Pods & Soft Lighting Desks',
    crowdLevel: 42, // percentage full
    crowdStatus: 'Plenty of Seats',
    distanceMinutes: 2,
    openHours: '24/7 Access',
    perks: ['24_7', 'natural_light', 'air_con', 'power'],
    perkLabels: ['Open 24/7', 'Natural Skylight', 'Climate Controlled', 'Dual Outlets'],
    image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=800&q=80',
    description: 'The ultimate deep focus area on campus. Strict silence rule enforced by staff. High-back dividers for privacy and individual floor-to-ceiling windows.',
    floorMapNote: 'Enter Main Entrance, take Elevator B to 3rd Floor, turn left towards East Sanctuary.',
    studentTip: 'Pods near window #4 have the best mountain views and warmest afternoon sun!'
  },
  {
    id: 'spot-2',
    name: 'Student Union Tech Lounge',
    location: 'Student Activity Center • 2nd Floor Central',
    vibe: 'social',
    noiseLevel: 55,
    noiseTag: 'Lively Buzz & Music',
    wifiSpeed: 350,
    wifiQuality: 'fast',
    outletCoverage: 85,
    outletsTag: 'Plentiful Outlets',
    seatingType: 'group_tables',
    seatingLabel: 'Large Modular Group Tables & Plush Couches',
    crowdLevel: 68,
    crowdStatus: 'Moderate Buzz',
    distanceMinutes: 1,
    openHours: '7:00 AM - 11:00 PM',
    perks: ['coffee', 'whiteboards', 'snacks', 'power'],
    perkLabels: ['Espresso Bar', 'Mobile Whiteboards', 'Snack Vending', 'Fast Charging'],
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
    description: 'Vibrant collaborative space designed for group projects, study sessions, and casual coding marathons. Features an espresso bar and rolling whiteboards.',
    floorMapNote: 'Above the campus bookstore, adjacent to the Blue Roast Cafe.',
    studentTip: 'Whiteboards fill up after 2 PM! Grab one early or ask to share with friendly groups.'
  },
  {
    id: 'spot-3',
    name: 'Engineering Skybridge Glass Lounge',
    location: 'Engineering Complex • Building B Skybridge',
    vibe: 'quiet',
    noiseLevel: 28,
    noiseTag: 'Quiet Whispers',
    wifiSpeed: 210,
    wifiQuality: 'fast',
    outletCoverage: 75,
    outletsTag: 'Most Desks Equipped',
    seatingType: 'ergonomic_desks',
    seatingLabel: 'High-Top Standing & Ergonomic Mesh Desks',
    crowdLevel: 25,
    crowdStatus: 'Super Empty',
    distanceMinutes: 4,
    openHours: '6:00 AM - Midnight',
    perks: ['natural_light', 'view', 'water_refill', 'power'],
    perkLabels: ['Panoramic View', 'Floor-to-Ceiling Windows', 'Hydration Station', 'Power Outlets'],
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
    description: 'Elevated glass bridge connecting Engineering Hall A & B. Ultra bright with natural light, quiet acoustic paneling, and standing desks.',
    floorMapNote: 'Take Bridge Elevator to Level 4. Cross glass connector corridor.',
    studentTip: 'Hidden gem! Most non-engineering majors don\'t know this place exists.'
  },
  {
    id: 'spot-4',
    name: 'Campus Botanical Courtyard Cafe',
    location: 'South Campus • Science & Life Gardens',
    vibe: 'social',
    noiseLevel: 45,
    noiseTag: 'Ambient Cafe Vibes',
    wifiSpeed: 95,
    wifiQuality: 'basic',
    outletCoverage: 45,
    outletsTag: 'Selected Outdoor Outlets',
    seatingType: 'outdoor',
    seatingLabel: 'Patio Umbrellas & Teak Wooden Benches',
    crowdLevel: 75,
    crowdStatus: 'Popular Spot',
    distanceMinutes: 5,
    openHours: '8:00 AM - 7:00 PM',
    perks: ['coffee', 'outdoor', 'natural_light', 'snacks'],
    perkLabels: ['Fresh Artisanal Brews', 'Garden Patio', 'Fresh Air', 'Organic Pastries'],
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80',
    description: 'Relaxed outdoor courtyard surrounded by lush greenery and fountain streams. Great for reading, discussion, and enjoying sunny days.',
    floorMapNote: 'Directly behind the BioScience Auditorium main courtyard.',
    studentTip: 'Outlets are located along the brick wall near table numbers 1 to 6.'
  },
  {
    id: 'spot-5',
    name: 'Underground Innovation Pods',
    location: 'Science Library • Sub-Basement B2',
    vibe: 'quiet',
    noiseLevel: 10,
    noiseTag: 'Soundproof Sanctuary',
    wifiSpeed: 500,
    wifiQuality: 'fast',
    outletCoverage: 100,
    outletsTag: 'Dedicated Outlets & USB-C',
    seatingType: 'privacy_pods',
    seatingLabel: 'Private Soundproof Tech Booths with Dual Monitors',
    crowdLevel: 32,
    crowdStatus: 'Pods Available',
    distanceMinutes: 3,
    openHours: '24/7 Access',
    perks: ['24_7', 'power', 'monitors', 'air_con'],
    perkLabels: ['Open 24 Hours', 'Gigabit Internet', 'Dual 4K Monitors', 'Acoustic Soundproofing'],
    image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80',
    description: 'High-tech subterranean study pods with gigabit ethernet, USB-C fast charging, and dual external monitor hookups for intensive work sessions.',
    floorMapNote: 'Basement level of Science Library. Scan Student ID at Pod Kiosk.',
    studentTip: 'Bring your HDMI/USB-C dongle to plug straight into the 27" monitors!'
  },
  {
    id: 'spot-6',
    name: 'Arts Quad Oak Terrace',
    location: 'Fine Arts Lawn • East Quad',
    vibe: 'social',
    noiseLevel: 40,
    noiseTag: 'Breezy Lawn Atmosphere',
    wifiSpeed: 130,
    wifiQuality: 'fast',
    outletCoverage: 50,
    outletsTag: 'Solar Smart Tables',
    seatingType: 'outdoor',
    seatingLabel: 'Solar Picnic Benches & Hammock Posts',
    crowdLevel: 50,
    crowdStatus: 'Comfortable',
    distanceMinutes: 6,
    openHours: 'Open All Day',
    perks: ['outdoor', 'natural_light', 'pet_friendly', 'power'],
    perkLabels: ['Solar Power Charging', 'Shaded Canopy', 'Pet Friendly', 'Hammock Friendly'],
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80',
    description: 'Lush grassy area under century-old oak trees with solar-powered charging picnic benches and hammock posts.',
    floorMapNote: 'Grass quad directly in front of the Fine Arts Museum steps.',
    studentTip: 'Check out hammocks from the Rec Center desk right around the corner!'
  }
];

export const VIBE_OPTIONS = [
  { id: 'quiet', label: 'Quiet Zone', description: 'Deep focus, silence & zero distractions', icon: 'VolumeX' },
  { id: 'social', label: 'Social & Collaborative', description: 'Group talk, coffee buzz & vibrant vibe', icon: 'Volume2' }
];

export const AMENITY_FILTERS = [
  { id: 'fast_wifi', label: 'Ultra-Fast WiFi (100+ Mbps)', icon: 'Wifi' },
  { id: 'outlets_needed', label: 'Plentiful Power Outlets', icon: 'Zap' },
  { id: 'coffee_near', label: 'Coffee / Tea Nearby', icon: 'Coffee' },
  { id: 'open_24_7', label: 'Open 24/7', icon: 'Clock' },
  { id: 'natural_light', label: 'Natural Light / View', icon: 'Sun' },
  { id: 'outdoor', label: 'Outdoor / Patio', icon: 'Trees' }
];

export const SEATING_OPTIONS = [
  { id: 'all', label: 'Any Seating' },
  { id: 'privacy_pods', label: 'Privacy Pods' },
  { id: 'ergonomic_desks', label: 'Ergonomic Desks' },
  { id: 'group_tables', label: 'Group Tables' },
  { id: 'couches', label: 'Soft Couches' },
  { id: 'outdoor', label: 'Outdoor Patio' }
];
