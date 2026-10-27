// Explore Bengal — Tourist Attractions Directory
// Contains verified top attractions across West Bengal destinations

export const ATTRACTIONS = [
  // Darjeeling
  {
    id: "tiger-hill",
    destinationSlug: "darjeeling",
    name: "Tiger Hill Sunrise Point",
    image: "https://images.unsplash.com/photo-1544634076-a90160ddf44c?auto=format&fit=crop&w=800&q=80",
    description: "Located at 8,482 feet, Tiger Hill is globally famous for its panoramic view of sunrise over Mount Kanchenjunga and Mount Everest, as the dawn light bathes the snow-clad Himalayan peaks in dazzling gold and pink.",
    location: "Tiger Hill Road, Senchal Forest, Darjeeling",
    suggestedDuration: "2 hours",
    openingHours: "03:30 AM - 07:00 AM daily",
    entryFee: "₹50 - ₹100 for observatory tower",
    accessNotes: "Vehicles depart Darjeeling town by 3:30 - 4:00 AM. Advance vehicle parking token required.",
    coordinates: { latitude: 26.9950, longitude: 88.2860 },
    featured: true
  },
  {
    id: "batasia-loop",
    destinationSlug: "darjeeling",
    name: "Batasia Loop & War Memorial",
    image: "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=800&q=80",
    description: "A remarkable engineering feat where the heritage Toy Train negotiates a 360-degree loop to lower its gradient. Features a manicured spiral garden and a solemn Gorkha War Memorial honoring Indian soldiers.",
    location: "Hill Cart Road, Ghum, Darjeeling",
    suggestedDuration: "1 hour",
    openingHours: "05:00 AM - 06:30 PM",
    entryFee: "₹30 per person",
    accessNotes: "Located 5 km before Darjeeling town along the highway; easily accessible by shared taxi or Toy Train joy ride.",
    coordinates: { latitude: 27.0168, longitude: 88.2468 },
    featured: true
  },
  {
    id: "hmi-zoo",
    destinationSlug: "darjeeling",
    name: "Padmaja Naidu Himalayan Zoo & HMI",
    image: "https://images.unsplash.com/photo-1575550959106-5a7defe28b56?auto=format&fit=crop&w=800&q=80",
    description: "India's highest altitude zoo famous for its successful captive breeding programs of endangered Red Pandas and Snow Leopards, alongside the Himalayan Mountaineering Institute (founded by Tenzing Norgay).",
    location: "Jawahar Parbat, Birch Hill, Darjeeling",
    suggestedDuration: "2-3 hours",
    openingHours: "08:30 AM - 04:30 PM (Closed Thursdays)",
    entryFee: "₹110 (Combo ticket for Zoo & HMI Museum)",
    accessNotes: "Approx. 2 km from Chowrasta Mall. Walking or short taxi ride.",
    coordinates: { latitude: 27.0587, longitude: 88.2547 },
    featured: true
  },
  {
    id: "happy-valley-tea",
    destinationSlug: "darjeeling",
    name: "Happy Valley Tea Estate",
    image: "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=800&q=80",
    description: "Established in 1854, one of Darjeeling's oldest organic tea estates situated just below the town. Offers guided factory tours explaining orthodox tea plucking, rolling, fermenting, drying, and tasting.",
    location: "Lebong Cart Road, Darjeeling",
    suggestedDuration: "1.5 hours",
    openingHours: "08:00 AM - 04:00 PM (Closed Sundays & Mondays)",
    entryFee: "₹100 for guided factory walking tour",
    accessNotes: "Scenic 20-minute downhill walk from Darjeeling Club or 10-minute taxi ride.",
    coordinates: { latitude: 27.0531, longitude: 88.2612 },
    featured: true
  },

  // Kalimpong
  {
    id: "deolo-hill",
    destinationSlug: "kalimpong",
    name: "Deolo Hill & Tourist Park",
    image: "https://images.unsplash.com/photo-1626014303757-64665476f414?auto=format&fit=crop&w=800&q=80",
    description: "The highest point of Kalimpong town at 5,590 feet, offering 360-degree views of the Teesta River valley, surrounding terraced hills, and the snow-clad peaks of West Sikkim. Also popular for tandem paragliding.",
    location: "Deolo, Kalimpong",
    suggestedDuration: "2 hours",
    openingHours: "06:00 AM - 06:00 PM daily",
    entryFee: "₹20 per person",
    accessNotes: "Approx. 8 km from Kalimpong town center by taxi.",
    coordinates: { latitude: 27.0910, longitude: 88.4900 },
    featured: true
  },
  {
    id: "zang-dhok-palri",
    destinationSlug: "kalimpong",
    name: "Zang Dhok Palri Phodang Monastery",
    image: "https://images.unsplash.com/photo-1544634076-a90160ddf44c?auto=format&fit=crop&w=800&q=80",
    description: "Consecrated by the Dalai Lama in 1976, this impressive monastery perched atop Durpin Hill houses 108 volumes of rare Tibetan Kangyur scriptures brought out of Tibet during political unrest.",
    location: "Durpin Dara Hill, Kalimpong",
    suggestedDuration: "1 hour",
    openingHours: "08:00 AM - 05:00 PM",
    entryFee: "Free entry (Donations welcome)",
    accessNotes: "5 km from town. Accessible by taxi up Durpin Hill.",
    coordinates: { latitude: 27.0450, longitude: 88.4600 },
    featured: false
  },

  // Digha
  {
    id: "marine-aquarium-digha",
    destinationSlug: "digha",
    name: "Marine Aquarium and Regional Centre (ZSI)",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    description: "Equipped with India's largest marine research and display tanks managed by the Zoological Survey of India, housing sea anemones, horseshoe crabs, rays, sharks, lobsters, and diverse Bay of Bengal marine life.",
    location: "Old Digha Main Road, Near Sea Beach, Digha",
    suggestedDuration: "1.5 hours",
    openingHours: "09:30 AM - 06:00 PM (Closed Tuesdays)",
    entryFee: "Free entry",
    accessNotes: "Walking distance from Old Digha sea front promenade.",
    coordinates: { latitude: 21.6250, longitude: 87.5120 },
    featured: true
  },
  {
    id: "new-digha-beach",
    destinationSlug: "digha",
    name: "New Digha Flat Beach & Casuarina Forest",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    description: "A wide, gentle sloping sandy beach lined with green casuarina trees, perfect for safe sea bathing during low tide, gentle evening promenades, and sampling fried seafood from beach shacks.",
    location: "New Digha Sea Beach, Purba Medinipur",
    suggestedDuration: "Half Day",
    openingHours: "Open 24 hours (Bathing permitted sunrise to sunset)",
    entryFee: "Free entry",
    accessNotes: "10 minutes by toto from Digha railway station.",
    coordinates: { latitude: 21.6180, longitude: 87.4950 },
    featured: true
  },

  // Mandarmani
  {
    id: "mandarmani-beach-coast",
    destinationSlug: "mandarmani",
    name: "Mandarmani Red Crab Seashore & Sunset Point",
    image: "https://images.unsplash.com/photo-1519046995808-161b40265275?auto=format&fit=crop&w=800&q=80",
    description: "A 13-km-long uninterrupted flat shoreline where gentle waves roll in. Early mornings reveal thousands of bright red ghost crabs emerging on the untouched sand bars near the delta mouth.",
    location: "Mandarmani Seacoast, Purba Medinipur",
    suggestedDuration: "Full day / Evening",
    openingHours: "Open 24 hours",
    entryFee: "Free",
    accessNotes: "Directly in front of coastal resorts. Beach vehicular traffic is strictly prohibited.",
    coordinates: { latitude: 21.6667, longitude: 87.7000 },
    featured: true
  },

  // Sundarbans
  {
    id: "sajnekhali-watchtower",
    destinationSlug: "sundarbans",
    name: "Sajnekhali Bird Sanctuary & Mangrove Centre",
    image: "https://images.unsplash.com/photo-1534567153574-2b12153a87f0?auto=format&fit=crop&w=800&q=80",
    description: "The primary entry and permit checkpoint for the Sundarbans National Park. Houses a 3-tier fenced watchtower overlooking freshwater drinking ponds, a mangrove interpretation museum, and a crocodile pond.",
    location: "Sajnekhali Island, Sundarbans Tiger Reserve",
    suggestedDuration: "2 hours",
    openingHours: "07:00 AM - 05:00 PM",
    entryFee: "₹60 (Indian Nationals) / ₹200 (Foreign Nationals) + Camera fee",
    accessNotes: "Accessible solely by authorized motor boat. Forest guide mandatory.",
    coordinates: { latitude: 22.1283, longitude: 88.8350 },
    featured: true
  },
  {
    id: "dobanki-canopy-walk",
    destinationSlug: "sundarbans",
    name: "Dobanki Watchtower & Elevated Canopy Walk",
    image: "https://images.unsplash.com/photo-1534567153574-2b12153a87f0?auto=format&fit=crop&w=800&q=80",
    description: "A thrilling half-kilometer-long elevated netted canopy walkway rising 20 feet above the ground, allowing visitors to safely walk above the mangrove floor and spot spotted deer, wild boars, and tigers.",
    location: "Dobanki Camp, Sundarbans Tiger Reserve",
    suggestedDuration: "1.5 hours",
    openingHours: "07:30 AM - 04:30 PM",
    entryFee: "Included in National Park permit",
    accessNotes: "Reached via boat cruise along Matla and Bidyadhari river channels.",
    coordinates: { latitude: 21.9800, longitude: 88.7500 },
    featured: true
  },

  // Dooars
  {
    id: "jaldapara-rhino-safari",
    destinationSlug: "dooars",
    name: "Jaldapara National Park & Hollong Safari",
    image: "https://images.unsplash.com/photo-1575550959106-5a7defe28b56?auto=format&fit=crop&w=800&q=80",
    description: "Sprawling across 216 sq km along the Torsa River, Jaldapara holds the largest population of the One-Horned Rhinoceros in West Bengal. Elephant and open gypsy safaris depart through tall elephant grass.",
    location: "Madarihat, Alipurduar District, Dooars",
    suggestedDuration: "3-4 hours (Safari duration 1.5 hrs)",
    openingHours: "Safari timings: Morning 06:00 AM - 08:30 AM; Afternoon 03:00 PM - 04:30 PM (Closed Jun 16 - Sep 15)",
    entryFee: "₹150 entry + Gypsy safari fee (~₹1,800-2,500 per vehicle)",
    accessNotes: "Book online on WBFDC portal or at the Madarihat forest range ticket counter.",
    coordinates: { latitude: 26.6916, longitude: 89.2737 },
    featured: true
  },

  // Kolkata
  {
    id: "victoria-memorial",
    destinationSlug: "kolkata",
    name: "Victoria Memorial Hall & Gardens",
    image: "https://images.unsplash.com/photo-1558431382-27e303142255?auto=format&fit=crop&w=800&q=80",
    description: "A colossal white Makrana marble monument commissioned in 1906, blending British and Mughal revivalist architecture. Surrounded by 64 acres of landscaped gardens with a premier museum of royal portraits and artifacts.",
    location: "1, Queens Way, Maidan, Kolkata",
    suggestedDuration: "2-3 hours",
    openingHours: "Gardens: 05:30 AM - 06:00 PM; Museum: 10:00 AM - 06:00 PM (Closed Mondays)",
    entryFee: "₹50 (Museum & Gardens) for Indians, ₹500 for Foreigners",
    accessNotes: "Opposite Rabindra Sadan / Maidan Metro stations.",
    coordinates: { latitude: 22.5448, longitude: 88.3426 },
    featured: true
  },
  {
    id: "howrah-bridge",
    destinationSlug: "kolkata",
    name: "Howrah Bridge (Rabindra Setu)",
    image: "https://images.unsplash.com/photo-1558431382-27e303142255?auto=format&fit=crop&w=800&q=80",
    description: "An iconic cantilever steel bridge suspended without nuts or bolts over the Hooghly River since 1943. Carries hundreds of thousands of commuters, iconic yellow taxis, and provides unforgettable evening river views.",
    location: "Connecting Howrah and Central Kolkata over Hooghly River",
    suggestedDuration: "1 hour",
    openingHours: "Open 24 hours",
    entryFee: "Free",
    accessNotes: "Pedestrian walkways on both flanks. Photography is restricted from on the bridge itself.",
    coordinates: { latitude: 22.5851, longitude: 88.3468 },
    featured: true
  },
  {
    id: "kumartuli",
    destinationSlug: "kolkata",
    name: "Kumartuli Potter's Colony",
    image: "https://images.unsplash.com/photo-1599839575945-a9e5af0c3fa5?auto=format&fit=crop&w=800&q=80",
    description: "A centuries-old artisan neighborhood where master potters handcraft magnificent clay idols of Goddess Durga and other deities using straw, bamboo, and alluvial clay from the sacred Ganges.",
    location: "Kumartuli, North Kolkata, Near Shobhabazar",
    suggestedDuration: "2 hours",
    openingHours: "08:00 AM - 08:00 PM daily (Best in Aug - Oct before Durga Puja)",
    entryFee: "Free (Respect working artisans)",
    accessNotes: "Walkable from Sovabazar Sutanuti Metro Station.",
    coordinates: { latitude: 22.6000, longitude: 88.3650 },
    featured: false
  },

  // Shantiniketan
  {
    id: "sonajhurir-haat",
    destinationSlug: "shantiniketan",
    name: "Khoai Sonajhurir Shanibarer Haat",
    image: "https://images.unsplash.com/photo-1544634076-a90160ddf44c?auto=format&fit=crop&w=800&q=80",
    description: "A vibrant open-air weekend forest market set beneath tall Sonajhuri and Sal trees on the canyon-like Khoai red earth. Local tribal women dance to the beat of Dhamsa-Madol while Bauls sing with Ektara.",
    location: "Sonajhuri Forest, Bolpur, Shantiniketan",
    suggestedDuration: "2-3 hours",
    openingHours: "Saturdays only, from 01:00 PM until sunset",
    entryFee: "Free",
    accessNotes: "15 minutes by toto from Bolpur town center or Visva-Bharati.",
    coordinates: { latitude: 23.6870, longitude: 87.6650 },
    featured: true
  },
  {
    id: "uttarayan-complex",
    destinationSlug: "shantiniketan",
    name: "Uttarayan Complex & Rabindra Bhavana",
    image: "https://images.unsplash.com/photo-1544634076-a90160ddf44c?auto=format&fit=crop&w=800&q=80",
    description: "The historical estate preserving the five residences designed and lived in by Rabindranath Tagore (Udayan, Konarka, Shyamali, Punashcha, and Udichi), alongside a museum housing Tagore's manuscripts and paintings.",
    location: "Visva-Bharati University Campus, Shantiniketan",
    suggestedDuration: "2 hours",
    openingHours: "10:30 AM - 04:30 PM (Closed Wednesdays)",
    entryFee: "₹50 for Indian Nationals, ₹300 for Foreigners",
    accessNotes: "Located at the heart of the University enclave.",
    coordinates: { latitude: 23.6820, longitude: 87.6840 },
    featured: true
  },

  // Bishnupur
  {
    id: "rasmancha-bishnupur",
    destinationSlug: "bishnupur",
    name: "Rasmancha Historical Terracotta Pavilion",
    image: "https://images.unsplash.com/photo-1599839575945-a9e5af0c3fa5?auto=format&fit=crop&w=800&q=80",
    description: "Built in 1600 AD by Malla King Bir Hambir, Rasmancha is an architectural wonder with a stepped pyramidal superstructure surrounded by arched galleries where Radha-Krishna idols from all local temples were displayed during the Ras festival.",
    location: "Rasmancha Road, Bishnupur, Bankura",
    suggestedDuration: "1 hour",
    openingHours: "06:00 AM - 06:00 PM daily",
    entryFee: "₹25 (ASI combo ticket covers Rasmancha, Shyam Rai, Jor Bangla)",
    accessNotes: "5 minutes by toto from Bishnupur bus stand.",
    coordinates: { latitude: 23.0725, longitude: 87.3195 },
    featured: true
  },
  {
    id: "shyam-rai-temple",
    destinationSlug: "bishnupur",
    name: "Shyam Rai Pancha Ratna Temple",
    image: "https://images.unsplash.com/photo-1599839575945-a9e5af0c3fa5?auto=format&fit=crop&w=800&q=80",
    description: "Erected in 1643 AD, this magnificent 'Pancha Ratna' (five-pinnacled) temple showcases the finest terracotta relief carvings in Bengal, depicting intricate Rasmanch mandalas, Mahabharata battles, and court dancers.",
    location: "Near Bishnupur Rajbari, Bishnupur",
    suggestedDuration: "1 hour",
    openingHours: "06:00 AM - 06:00 PM",
    entryFee: "Included in ASI combo ticket",
    accessNotes: "Within walking distance or short toto ride from Rasmancha.",
    coordinates: { latitude: 23.0740, longitude: 87.3210 },
    featured: true
  },

  // Murshidabad
  {
    id: "hazarduari-palace",
    destinationSlug: "murshidabad",
    name: "Hazarduari Palace & Museum",
    image: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=800&q=80",
    description: "The monumental 19th-century palace built for Nawab Nazim Humayun Jah by Duncan McLeod. Contains 1,000 doors (900 real, 100 false), grand Italian chandeliers, the silver throne of the Nawabs, and weapons including Siraj-ud-Daulah's sword.",
    location: "Hazarduari Complex, Murshidabad",
    suggestedDuration: "2.5 hours",
    openingHours: "09:00 AM - 05:00 PM (Closed Fridays)",
    entryFee: "₹25 for Indian Nationals, ₹300 for Foreigners",
    accessNotes: "Situated right along the Bhagirathi River; accessible by tonga or toto.",
    coordinates: { latitude: 24.1850, longitude: 88.2705 },
    featured: true
  },
  {
    id: "katra-mosque",
    destinationSlug: "murshidabad",
    name: "Katra Mosque & Tomb of Murshid Quli Khan",
    image: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=800&q=80",
    description: "Built in 1723 AD by Nawab Murshid Quli Khan as both a grand congregational mosque and his final resting place beneath the entrance steps. Flanked by massive octagonal minarets with holes once used for defensive musketry.",
    location: "Katra, Murshidabad",
    suggestedDuration: "1 hour",
    openingHours: "06:00 AM - 06:00 PM daily",
    entryFee: "₹25 per person (ASI)",
    accessNotes: "3 km from Hazarduari Palace via toto.",
    coordinates: { latitude: 24.1880, longitude: 88.2910 },
    featured: false
  }
];

export function getAttractionsByDestination(destinationSlug) {
  if (!destinationSlug) return ATTRACTIONS;
  return ATTRACTIONS.filter((a) => a.destinationSlug.toLowerCase() === destinationSlug.toLowerCase());
}

export function getFeaturedAttractions() {
  return ATTRACTIONS.filter((a) => a.featured);
}
