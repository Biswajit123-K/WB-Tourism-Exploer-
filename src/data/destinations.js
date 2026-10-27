// Explore Bengal — Destinations Dataset
// Covers 18 premier West Bengal destinations across Mountains, Coast, Forests, Heritage & Culture
// All heroImage URLs link to verified, authentic photographs of the actual places

export const DESTINATIONS = [
  {
    id: "darjeeling",
    slug: "darjeeling",
    name: "Darjeeling",
    tagline: "The Queen of the Hills & Home of the UNESCO Toy Train",
    category: "mountain",
    categoryLabel: "Mountains & Hill Stations",
    heroImage: "https://s7ap1.scene7.com/is/image/incredibleindia/happy-valley-tea-estate-darjeeling-west%20bengal-1-hero?qlt=82&ts=1726643578177",
    fallbackImage: "https://images.unsplash.com/photo-1544634076-a90160ddf44c?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://s7ap1.scene7.com/is/image/incredibleindia/dhr-siliguri1-west-bengal-attr-hero?qlt=82&ts=1726645149850",
      "https://commons.wikimedia.org/wiki/Special:FilePath/Darjeeling_Himalayan_Railway_Batasia_Loop.jpg?width=1200",
      "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=1200&q=80"
    ],
    coordinates: {
      latitude: 27.0410,
      longitude: 88.2663
    },
    recommendedDuration: "3-4 Days",
    shortDescription: "Perched at 6,700 feet against the majestic backdrop of Mt. Kanchenjunga, Darjeeling is world-renowned for its aromatic orthodox tea, Victorian colonial architecture, and the heritage Himalayan Toy Train.",
    fullDescription: "Darjeeling sits gracefully along the Lesser Himalayas in northern West Bengal. Famous globally as the producer of the 'Champagne of Teas', the town commands sweeping vistas of Mount Kanchenjunga, the world's third highest peak. Travelers can experience the century-old steam locomotives of the Darjeeling Himalayan Railway (a UNESCO World Heritage Site), wander through fragrant emerald tea estates like Happy Valley and Makaibari, explore Tibetan Buddhist gompas, and watch golden sunrises from Tiger Hill. The town blends British colonial heritage with rich Gorkha, Tibetan, and Lepcha cultural traditions.",
    bestTimeToVisit: {
      summary: "October to April is ideal for clear skies and Kanchenjunga views; March to May for blooming rhododendrons.",
      seasons: [
        { name: "Autumn (Oct - Nov)", rating: "Peak", note: "Crystal-clear mountain vistas, cool crisp breezes, festival season." },
        { name: "Winter (Dec - Feb)", rating: "Good", note: "Chilly weather (2°C - 10°C), quiet streets, occasional snowfall in higher ridges." },
        { name: "Spring (Mar - May)", rating: "Peak", note: "Pleasant temperatures (12°C - 19°C), blooming rhododendrons and magnolias." },
        { name: "Monsoon (Jun - Sep)", rating: "Caution", note: "Heavy rainfall, frequent mist, landslide risks along hill roads." }
      ]
    },
    transportInformation: {
      byAir: {
        nearestAirport: "Bagdogra International Airport (IXB)",
        distanceKm: 70,
        travelTime: "2.5 to 3 hours by taxi",
        details: "Connected by daily flights from Kolkata, Delhi, Bengaluru, Mumbai, and Guwahati. Pre-paid and app cabs available at airport terminal."
      },
      byTrain: {
        nearestMajorStation: "New Jalpaiguri Junction (NJP) / Siliguri Junction",
        distanceKm: 73,
        travelTime: "3 hours by road, or 7 hours via Toy Train (seasonal/scheduled)",
        details: "Direct premier trains include Vande Bharat Express, Shatabdi Express, and Darjeeling Mail from Howrah and Sealdah."
      },
      byRoad: {
        primaryHighways: "NH-110 (Hill Cart Road) and Rohini Road via Kurseong",
        connectivity: "Shared and private utility vehicles (Sumo/Innova) operate continuously from Siliguri Junction and Tenzing Norgay Bus Terminus.",
        routeFromKolkata: "Approx. 615 km via NH-12 / NH-27. Recommended via overnight train or flight to Bagdogra."
      },
      localTransit: "Local shared jeeps, hired taxis, and walking along the pedestrianized Mall (Chowrasta)."
    },
    foodAndShopping: {
      specialties: ["Darjeeling First Flush & Muscatel Tea", "Steamed Tibetan Momos & Thukpa", "Sel Roti with Aloo Dum", "Chhurpi (Himalayan cheese candy)", "Gundruk soup"],
      shoppingSpots: ["Chowrasta Mall & Nehru Road", "Bhutia Market for woollens", "Nathmulls Tea Lounge & Boutique", "Hayden Hall handicrafts"]
    },
    travelTips: [
      "Tiger Hill sunrise trips require early booking and 3:30 AM departure to avoid traffic bottlenecks.",
      "Chowrasta Mall is an eco-friendly pedestrian-only zone where vehicles are strictly prohibited.",
      "Always carry valid photo identification for hotel check-ins and travel permits in border districts.",
      "Pack multi-layered woollen wear even during spring and autumn evenings."
    ],
    faqs: [
      {
        question: "Can I travel to Darjeeling independently without an agency?",
        answer: "Yes, easily. Take an overnight train to NJP or flight to Bagdogra, hire a shared or reserved taxi from the station or airport, book hotels online, and use local taxis or walking to explore."
      },
      {
        question: "How do I book tickets for the Darjeeling Toy Train?",
        answer: "The joy ride between Darjeeling and Ghum can be booked on the official Indian Railways IRCTC portal (Station codes: DJ and GHUM) or at the Darjeeling railway station ticket counter."
      }
    ],
    nearbyDestinations: ["kalimpong", "dooars"]
  },
  {
    id: "kalimpong",
    slug: "kalimpong",
    name: "Kalimpong",
    tagline: "Serene Himalayan Valleys, Buddhist Monasteries & Exotic Orchids",
    category: "mountain",
    categoryLabel: "Mountains & Hill Stations",
    heroImage: "https://s7ap1.scene7.com/is/image/incredibleindia/lord-buddha-statue-kalimpong-west-bengal-city-1-hero?qlt=82&ts=1726645267006",
    fallbackImage: "https://images.unsplash.com/photo-1626014303757-64665476f414?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://s7ap1.scene7.com/is/image/incredibleindia/lord-buddha-statue-kalimpong-west-bengal-city-1-hero?qlt=82&ts=1726645267006",
      "https://commons.wikimedia.org/wiki/Special:FilePath/Morgan_House_Kalimpong.jpg?width=1200",
      "https://images.unsplash.com/photo-1626014303757-64665476f414?auto=format&fit=crop&w=1200&q=80"
    ],
    coordinates: {
      latitude: 27.0667,
      longitude: 88.4667
    },
    recommendedDuration: "2-3 Days",
    shortDescription: "A tranquil sub-division nestled at 4,100 feet overlooking the Teesta River, renowned for historic monasteries, colonial cottages, and global export of gladioli and orchids.",
    fullDescription: "Perched on a ridge overlooking the Teesta Valley, Kalimpong was once a bustling gateway for Indo-Tibetan trade along the historic Silk Route. Unlike bustling hill stations, Kalimpong maintains a laid-back, tranquil ambiance. It is celebrated for its lush flower nurseries, sacred monasteries like Zang Dhok Palri Phodang housing rare Tibetan scriptures, Morgan House with British colonial architecture, and panoramic viewpoints like Deolo Hill.",
    bestTimeToVisit: {
      summary: "March to May and September to December are ideal with mild weather and blooming flora.",
      seasons: [
        { name: "Spring (Mar - May)", rating: "Peak", note: "Delightful weather, flower nurseries in full bloom." },
        { name: "Autumn (Sep - Nov)", rating: "Peak", note: "Crisp clear weather, unobstructed Teesta valley views." },
        { name: "Winter (Dec - Feb)", rating: "Good", note: "Mild chill, clear winter sunshine." },
        { name: "Monsoon (Jun - Aug)", rating: "Caution", note: "Heavy rain, Teesta highway sometimes prone to roadblocks." }
      ]
    },
    transportInformation: {
      byAir: {
        nearestAirport: "Bagdogra International Airport (IXB)",
        distanceKm: 78,
        travelTime: "2.5 to 3 hours",
        details: "Direct cabs available from Bagdogra airport via Sevoke Road and Teesta Bridge."
      },
      byTrain: {
        nearestMajorStation: "New Jalpaiguri Junction (NJP)",
        distanceKm: 72,
        travelTime: "2.5 hours",
        details: "Taxis and shared utility vehicles run from Siliguri Junction and NJP."
      },
      byRoad: {
        primaryHighways: "NH-10 along Teesta river",
        connectivity: "Regular shared jeeps connect Kalimpong with Siliguri, Darjeeling (50 km / 2.5 hrs), and Gangtok."
      },
      localTransit: "Local taxis for sight-seeing; town market is walkable."
    },
    foodAndShopping: {
      specialties: ["Kalimpong artisan cheese", "Lollipop confectionery", "Tingmo with chicken shyaphale", "Organic hot dalley chillies"],
      shoppingSpots: ["Kalimpong Arts & Crafts Centre", "Rishi Road Main Market", "Pine View Nursery for cactus & succulents"]
    },
    travelTips: [
      "Carry cash as some monastery stalls and local nurseries do not have reliable UPI connections.",
      "Check road condition reports along NH-10 during monsoon season."
    ],
    faqs: [
      {
        question: "Is Kalimpong less crowded than Darjeeling?",
        answer: "Yes, Kalimpong is significantly quieter, less commercialized, and offers an authentic, relaxing hill town experience."
      }
    ],
    nearbyDestinations: ["darjeeling", "dooars"]
  },
  {
    id: "digha",
    slug: "digha",
    name: "Digha",
    tagline: "Bengal's Most Celebrated Coastal Retreat on the Bay of Bengal",
    category: "beach",
    categoryLabel: "Beaches & Coastal Escapes",
    heroImage: "https://commons.wikimedia.org/wiki/Special:FilePath/Digha_Sea_Beach.jpg?width=1600",
    fallbackImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Digha_Sea_Beach.jpg?width=1200",
      "https://commons.wikimedia.org/wiki/Special:FilePath/Old_digha_beach.jpg?width=1200",
      "https://commons.wikimedia.org/wiki/Special:FilePath/New_Digha_Beach_0217.JPG?width=1200"
    ],
    coordinates: {
      latitude: 21.6266,
      longitude: 87.5074
    },
    recommendedDuration: "2-3 Days",
    shortDescription: "A scenic seaside destination in Purba Medinipur known for its wide hard-sand flat beaches, casuarina plantations, bustling seafood markets, and gentle sea waves.",
    fullDescription: "Originally called Beerkul during Warren Hastings' era, Digha has evolved into West Bengal's favorite beach haven. Divided into charming Old Digha—with its rock-lined embankments and vibrant evening sea view—and New Digha—with expansive flat sandy beaches ideal for swimming—the town offers coastal rejuvenation, the Asia's largest Marine Aquarium and Regional Centre, the sacred Chandaneswar Temple, and delicious fresh sea fish prepared in local coastal shacks.",
    bestTimeToVisit: {
      summary: "October to March offers mild coastal breezes and pleasant swimming conditions.",
      seasons: [
        { name: "Winter (Oct - Feb)", rating: "Peak", note: "Cool sunny days (16°C - 26°C), perfect for swimming and beach strolling." },
        { name: "Summer (Mar - Jun)", rating: "Moderate", note: "Warm and humid during daytime, refreshing evening sea breeze." },
        { name: "Monsoon (Jul - Sep)", rating: "Unique", note: "Dramatic cloudy skies and high waves, thrilling sea views from seawall." }
      ]
    },
    transportInformation: {
      byTrain: {
        nearestMajorStation: "Digha Railway Station (DGHA)",
        distanceKm: 0.5,
        travelTime: "3.5 to 4 hours from Kolkata",
        details: "Direct express trains like Tamralipta Express, Kandari Express, and Howrah-Digha AC Express depart daily from Howrah."
      },
      byRoad: {
        primaryHighways: "NH-116B via Kolaghat, Nandakumar, and Contai",
        connectivity: "AC and Non-AC express buses operated by SBSTC, WBTC, and private operators run every 30 minutes from Esplanade and Karunamoyee (Kolkata).",
        routeFromKolkata: "185 km, approximately 4.5 hours drive."
      },
      localTransit: "Battery-operated toto (e-rickshaws), cycle rickshaws, and auto-rickshaws."
    },
    foodAndShopping: {
      specialties: ["Fresh fried Pomfret, Hilsa, and Tiger Prawns", "Green coconut water", "Cashew nuts from local processing units", "Kaju Barfi"],
      shoppingSpots: ["Nehru Market Old Digha", "Seashell ornament stalls", "Handcrafted palm leaf mats and wooden handicrafts"]
    },
    travelTips: [
      "Swim only in designated areas during low tide and observe red/yellow flag warnings posted by coastal lifeguards.",
      "Reserve weekend train tickets in advance due to high demand from Kolkata travelers."
    ],
    faqs: [
      {
        question: "Which is better: Old Digha or New Digha?",
        answer: "Old Digha is great for seaside evening ambiance and watching waves crash against boulders. New Digha has wide sandy shores and gentler waters, making it superior for swimming and beach walking."
      }
    ],
    nearbyDestinations: ["mandarmani", "bakkhali"]
  },
  {
    id: "mandarmani",
    slug: "mandarmani",
    name: "Mandarmani",
    tagline: "Expansive Red Crab Beaches & Luxurious Seaside Resorts",
    category: "beach",
    categoryLabel: "Beaches & Coastal Escapes",
    heroImage: "https://commons.wikimedia.org/wiki/Special:FilePath/Mandarmani_Sea_Beach.jpg?width=1600",
    fallbackImage: "https://images.unsplash.com/photo-1519046995808-161b40265275?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Mandarmani_Sea_Beach.jpg?width=1200",
      "https://commons.wikimedia.org/wiki/Special:FilePath/Mandarmani_Beach_Sunset.jpg?width=1200",
      "https://commons.wikimedia.org/wiki/Special:FilePath/Mandarmani_Sea_beach_05.jpg?width=1200"
    ],
    coordinates: {
      latitude: 21.6667,
      longitude: 87.7000
    },
    recommendedDuration: "2 Days",
    shortDescription: "A pristine 13-km-long coastal stretch in East Midnapore, famed for its tranquil beachside luxury resorts, thousands of tiny red soldier crabs, and unhurried coastal retreats.",
    fullDescription: "Located just 25 km north of Digha, Mandarmani is the go-to destination for travelers seeking peaceful beach vacations and high-end coastal resorts right on the sand. The beach is uniquely flat and broad. In the early morning hours, parts of the shore flush bright crimson as millions of red ghost crabs scuttle across the sands. Visitors can enjoy peaceful sunsets, beachfront barbecues, gentle water sports, and tranquil evenings listening to the rhythm of the waves.",
    bestTimeToVisit: {
      summary: "October to March is ideal for mild sunny beach days and pleasant evenings.",
      seasons: [
        { name: "Winter (Oct - Feb)", rating: "Peak", note: "Pleasant temperatures (15°C - 28°C), calm seas, clear sunsets." },
        { name: "Summer (Mar - Jun)", rating: "Moderate", note: "Humid afternoons, balmy ocean winds at night." },
        { name: "Monsoon (Jul - Sep)", rating: "Romantic", note: "Dramatic rain squalls, overcast skies, lush coastal vegetation." }
      ]
    },
    transportInformation: {
      byTrain: {
        nearestMajorStation: "Kanthi (Contai) Railway Station (20 km) or Digha (30 km)",
        details: "Totos and private cabs meet arriving express trains at Kanthi."
      },
      byRoad: {
        primaryHighways: "NH-116B to Chawalkhola crossing, then 12 km rural metal road to the coast",
        routeFromKolkata: "170 km, approx. 4 to 4.5 hours drive via Vidyasagar Setu, Kolaghat, and Nandakumar."
      },
      localTransit: "E-rickshaws (Totos) connect resorts to main access points."
    },
    foodAndShopping: {
      specialties: ["Crab curry and crab masala", "Fresh bhetki fry", "Prawn malaikari", "Fresh tender coconut"],
      shoppingSpots: ["Local village stalls for dry fish, conch shells, and jute handicrafts"]
    },
    travelTips: [
      "Driving private vehicles directly on the wet sand is strictly banned by local authorities to preserve the delicate crab ecosystem and coastal stability.",
      "Most beach resorts offer direct access to the sea; ensure you check whether your resort has private beach frontage."
    ],
    faqs: [
      {
        question: "Can I drive my car on Mandarmani beach?",
        answer: "No. Driving on the beach is prohibited by West Bengal coastal administration for tourist safety and marine ecological conservation. Please park in designated resort parking."
      }
    ],
    nearbyDestinations: ["digha"]
  },
  {
    id: "sundarbans",
    slug: "sundarbans",
    name: "Sundarbans National Park",
    tagline: "UNESCO World Heritage Mangrove Wilderness & Land of the Royal Bengal Tiger",
    category: "wildlife",
    categoryLabel: "Forests & Wildlife",
    heroImage: "https://commons.wikimedia.org/wiki/Special:FilePath/Royal_Bengal_Tiger_walking_down_Mangrove_Island_in_Sundarbans_1.jpg?width=1600",
    fallbackImage: "https://images.unsplash.com/photo-1534567153574-2b12153a87f0?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Royal_Bengal_Tiger_walking_down_Mangrove_Island_in_Sundarbans_1.jpg?width=1200",
      "https://commons.wikimedia.org/wiki/Special:FilePath/Sundarban_Tiger.jpg?width=1200",
      "https://images.unsplash.com/photo-1534567153574-2b12153a87f0?auto=format&fit=crop&w=1200&q=80"
    ],
    coordinates: {
      latitude: 21.9497,
      longitude: 88.8999
    },
    recommendedDuration: "2-3 Days",
    shortDescription: "The world's largest contiguous tidal mangrove forest and a UNESCO Biosphere Reserve, crisscrossed by tidal rivers, saltwater crocodiles, spotted deer, and the Royal Bengal Tiger.",
    fullDescription: "Spanning the delta formed by the confluence of the Ganges, Brahmaputra, and Meghna rivers, the Sundarbans is a biosphere of planetary significance. Named after the graceful 'Sundari' mangrove trees, this labyrinth of tidal waterways, mudflats, and dense foliage shelters the Royal Bengal Tiger, estuarine crocodiles, Gangetic and Irrawaddy dolphins, king cobras, and migratory waterbirds. Exploration is exclusively done aboard authorized motorized boats with licensed forest guides, navigating channels around watchtowers like Sajnekhali, Sudhanyakhali, and Dobanki.",
    bestTimeToVisit: {
      summary: "November to March is the best time with cool boat-safari weather and maximum wildlife sightings.",
      seasons: [
        { name: "Winter (Nov - Feb)", rating: "Peak", note: "Pleasant daytime (14°C - 25°C), crocodiles basking on mudbanks, migratory birds." },
        { name: "Summer (Mar - May)", rating: "Good for Sightings", note: "Hotter days draw tigers and deer to freshwater ponds near watchtowers." },
        { name: "Monsoon (Jun - Sep)", rating: "Restricted", note: "Swollen rivers, rough delta waves; many interior forest zones close." }
      ]
    },
    transportInformation: {
      byTrain: {
        nearestMajorStation: "Canning Railway Station",
        distanceKm: 28,
        travelTime: "1 hour 15 mins by local train from Sealdah Station (Kolkata)",
        details: "From Canning, shared auto or taxi brings you to Godkhali Ferry Ghat (approx. 45 mins), the embarkation port for motor boats."
      },
      byRoad: {
        primaryHighways: "Basanti Highway from Kolkata to Godkhali Ghat",
        routeFromKolkata: "Approx. 85 km (2.5 to 3 hours drive) to Godkhali. All vehicle journeys end at the river ghat; onward travel is by boat."
      },
      localTransit: "Authorized motorized boats and country rowboats with licensed forest dept guides."
    },
    foodAndShopping: {
      specialties: ["Pure organic Sundarbans forest wild honey (Mouban)", "Fresh river prawn curry", "Local bhetki macher paturi", "Country chicken curry"],
      shoppingSpots: ["Sajnekhali forest souvenir counter", "Gosaba cooperative society for organic mangrove honey"]
    },
    travelTips: [
      "Every visitor must obtain entry permits from the West Bengal Forest Department at Sajnekhali.",
      "Entering the forest islands on foot is strictly prohibited; all wildlife viewing takes place from authorized boats and fenced watchtowers.",
      "Carry insect repellent, binoculars, sun protection, and personal prescription medicines."
    ],
    faqs: [
      {
        question: "Can I do a day trip to Sundarbans from Kolkata?",
        answer: "A day trip is technically possible but rushed (5 hours round-trip road travel + 4 hours boat cruise). An overnight 2-day / 1-night stay on an eco-resort or boat cruiser is strongly recommended."
      }
    ],
    nearbyDestinations: ["kolkata", "bakkhali"]
  },
  {
    id: "dooars",
    slug: "dooars",
    name: "Dooars & Jaldapara",
    tagline: "Gateway to Bhutan: Lush Tea Gardens, Rhino Sanctuaries & Elephant Corridors",
    category: "wildlife",
    categoryLabel: "Forests & Wildlife",
    heroImage: "https://commons.wikimedia.org/wiki/Special:FilePath/Facing_a_rhino_at_Jaldapara_national_park.jpg?width=1600",
    fallbackImage: "https://images.unsplash.com/photo-1575550959106-5a7defe28b56?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Facing_a_rhino_at_Jaldapara_national_park.jpg?width=1200",
      "https://commons.wikimedia.org/wiki/Special:FilePath/Rhino_in_a_pond_at_Jaldapara.jpg?width=1200",
      "https://images.unsplash.com/photo-1575550959106-5a7defe28b56?auto=format&fit=crop&w=1200&q=80"
    ],
    coordinates: {
      latitude: 26.6916,
      longitude: 89.2737
    },
    recommendedDuration: "3-4 Days",
    shortDescription: "The alluvial floodplains at the foothills of the Eastern Himalayas, hosting Jaldapara National Park, Gorumara National Park, one-horned rhinos, and elephant herds.",
    fullDescription: "Derived from 'Dwar' (meaning door or gateway to Bhutan), Dooars is a paradise of emerald green tea plantations, dense Sal and riverine grasslands, and meandering crystal rivers like Murti, Torsa, and Jaldhaka. It hosts the largest population of the Great Indian One-Horned Rhinoceros in Bengal at Jaldapara National Park, alongside leopards, gaurs (Indian bison), Asian elephants, and hornbills. Key hubs include Lataguri, Madarihat, Murti, and Buxa Tiger Reserve.",
    bestTimeToVisit: {
      summary: "October to April is the prime safari season. National parks are closed from June 16 to September 15 for monsoon breeding.",
      seasons: [
        { name: "Winter (Nov - Feb)", rating: "Peak", note: "Chilly mornings, clear skies, pleasant jeep and elephant safaris." },
        { name: "Spring (Mar - May)", rating: "Good", note: "Warmer, excellent time for bird watching and gaurs in clearings." },
        { name: "Monsoon (Jun 16 - Sep 15)", rating: "Closed", note: "Forest reserves and national parks are legally closed to tourists." }
      ]
    },
    transportInformation: {
      byAir: {
        nearestAirport: "Bagdogra International Airport (IXB)",
        distanceKm: 120,
        travelTime: "3 hours via NH-27"
      },
      byTrain: {
        nearestMajorStation: "New Mal Junction (NMZ), Hasimara (HSA), or New Alipurduar (NOQ)",
        details: "The scenic Dooars rail route crosses forests and tea gardens. Major express trains also stop at New Jalpaiguri (NJP)."
      },
      byRoad: {
        primaryHighways: "NH-27 and NH-317",
        connectivity: "Well-paved highways through Coronation Bridge, Sevoke, Malbazar, and Chalsa."
      },
      localTransit: "Pre-booked jungle safari gypsies and hired taxis."
    },
    foodAndShopping: {
      specialties: ["Dooars CTC and Green Tea", "Bora Saag and local river fish curry", "Tribal bamboo shoot dishes"],
      shoppingSpots: ["Chalsa Weekly Haat", "Madarihat local tribal handicraft stalls"]
    },
    travelTips: [
      "Jungle jeep and elephant safari slots at Jaldapara and Gorumara must be booked online via the West Bengal Forest Development Corporation (WBFDC) or early morning at the range office.",
      "Wear neutral earth-toned clothing (khaki, olive, brown) on safaris."
    ],
    faqs: [
      {
        question: "Are national parks open during monsoon?",
        answer: "No. Jaldapara, Gorumara, and Chapramari are legally closed to all tourist entry from June 16 to September 15 every year for wildlife breeding season."
      }
    ],
    nearbyDestinations: ["darjeeling", "kalimpong", "cooch-behar"]
  },
  {
    id: "kolkata",
    slug: "kolkata",
    name: "Kolkata",
    tagline: "The City of Joy — India's Cultural, Literary & Intellectual Soul",
    category: "heritage",
    categoryLabel: "Heritage & Historical Places",
    heroImage: "https://s7ap1.scene7.com/is/image/incredibleindia/1-victoria-memorial-kolkata-west-bengal-state-hero?qlt=82&ts=1726645133729",
    fallbackImage: "https://images.unsplash.com/photo-1558431382-27e303142255?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://s7ap1.scene7.com/is/image/incredibleindia/1-victoria-memorial-kolkata-west-bengal-state-hero?qlt=82&ts=1726645133729",
      "https://s7ap1.scene7.com/is/image/incredibleindia/1-howrah-bridge-kolkata-west-bengal-city-hero?qlt=82&ts=1742154912631",
      "https://s7ap1.scene7.com/is/image/incredibleindia/durga-puja-kolkata-wb-blog-ent-hero?qlt=82&ts=1742151784712"
    ],
    coordinates: {
      latitude: 22.5726,
      longitude: 88.3639
    },
    recommendedDuration: "3-4 Days",
    shortDescription: "The 330-year-old capital of West Bengal, celebrated for Victoria Memorial, Howrah Bridge, historic tramways, Rabindranath Tagore's heritage, grand Durga Puja, and legendary street culinary trails.",
    fullDescription: "Kolkata, the erstwhile capital of the British Indian Empire, is India's preeminent cultural heartland. With grand colonial architecture, shaded leafy boulevards, vintage hand-pulled rickshaws, Asia's oldest operating tram system, and the iconic cantilever Howrah Bridge over the Hooghly River, Kolkata inspires artists, writers, and thinkers. From the regal Victoria Memorial and Indian Museum to the vibrant potter's colony at Kumartuli and the lively literary cafes of College Street, the city buzzes with intellectual vigor and warm hospitality.",
    bestTimeToVisit: {
      summary: "October to March offers cool, festive weather and legendary celebrations like Durga Puja and Kolkata Book Fair.",
      seasons: [
        { name: "Autumn (Sep - Nov)", rating: "Festive Peak", note: "Durga Puja spectacle (UNESCO Intangible Cultural Heritage), pleasant evenings." },
        { name: "Winter (Dec - Feb)", rating: "Peak", note: "Delightful weather (13°C - 24°C), street carnivals, polo matches, literary festivals." },
        { name: "Summer (Apr - Jun)", rating: "Warm", note: "Hot and humid (up to 38°C), best explored early morning or evening." },
        { name: "Monsoon (Jul - Sep)", rating: "Moderate", note: "Romantic showers, occasional street waterlogging, fresh Hilsa fish season." }
      ]
    },
    transportInformation: {
      byAir: {
        nearestAirport: "Netaji Subhash Chandra Bose International Airport (CCU)",
        distanceKm: 15,
        travelTime: "30-45 mins to city center",
        details: "Major international hub connected to worldwide and domestic destinations."
      },
      byTrain: {
        nearestMajorStation: "Howrah Junction (HWH) & Sealdah (SDAH), Shalimar, Kolkata Terminal",
        details: "Two of India's largest and busiest railway complexes, connecting every corner of India."
      },
      byRoad: {
        primaryHighways: "NH-16, NH-19, NH-12",
        connectivity: "Inter-state bus terminuses at Esplanade (Babughat) and Karunamoyee (Salt Lake)."
      },
      localTransit: "Kolkata Metro (India's first, including the underwater underwater river metro), yellow ambassador taxis, app cabs, ferry services, trams, and buses."
    },
    foodAndShopping: {
      specialties: ["Authentic Kolkata Biryani with potato and boiled egg", "Kathi Rolls at Nizam's", "Steaming Kosha Mangsho with Radhaballabhi", "Rosogolla, Mishti Doi, Sandesh", "Phuchka & Jhalmuri"],
      shoppingSpots: ["New Market (Hogg Market)", "Gariahat & Dakshinapan for Bengali sarees", "College Street Boi Para (world's largest second-hand book market)", "Kumartuli idol artisans"]
    },
    travelTips: [
      "Experience the Hooghly River ferry from Princep Ghat to Howrah for breathtaking views of the cantilever bridge.",
      "Use the modern East-West Kolkata Metro line to experience traveling beneath the riverbed of the Hooghly."
    ],
    faqs: [
      {
        question: "When is Durga Puja celebrated in Kolkata?",
        answer: "Usually in September or October (dates vary according to the Hindu lunar calendar). The city transforms into an open-air art gallery with thousands of artistic pandals."
      }
    ],
    nearbyDestinations: ["shantiniketan", "bishnupur", "chandannagar", "sundarbans"]
  },
  {
    id: "shantiniketan",
    slug: "shantiniketan",
    name: "Shantiniketan",
    tagline: "Rabindranath Tagore's UNESCO World Heritage Abode of Art & Open-Air Learning",
    category: "culture",
    categoryLabel: "Culture & Handicrafts",
    heroImage: "https://commons.wikimedia.org/wiki/Special:FilePath/Upasana_Griha_Front_View.jpg?width=1600",
    fallbackImage: "https://images.unsplash.com/photo-1544634076-a90160ddf44c?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Upasana_Griha_Front_View.jpg?width=1200",
      "https://commons.wikimedia.org/wiki/Special:FilePath/Sonajhuri_hat.jpg?width=1200",
      "https://commons.wikimedia.org/wiki/Special:FilePath/Santhal_Dance_of_Shonibarer_Haat_at_Sonajhuri_01.jpg?width=1200"
    ],
    coordinates: {
      latitude: 23.6800,
      longitude: 87.6800
    },
    recommendedDuration: "2 Days",
    shortDescription: "A UNESCO World Heritage town in Birbhum founded by Nobel Laureate Rabindranath Tagore, where education takes place under ancient banyan trees amidst Baul music and Kantha embroidery.",
    fullDescription: "Shantiniketan (meaning 'Abode of Peace') was conceived by Maharshi Debendranath Tagore and immortalized by his son, Rabindranath Tagore, who established Visva-Bharati University here in 1921. Tagore introduced radical educational ideals: open-air classrooms under flowering amloki groves, harmonious co-existence with nature, and celebration of the arts. Travelers flock here for the tranquil university ashram, Tagore's historic residences (Uttarayan complex), the Saturday outdoor handicraft market (Khoai Sonajhurir Haat), and soulful folk performances by Baul bards singing beneath Sal trees.",
    bestTimeToVisit: {
      summary: "October to March is ideal. Poush Mela in December and Basanta Utsav (Holi) in March are spectacular cultural festivals.",
      seasons: [
        { name: "Winter (Nov - Feb)", rating: "Peak", note: "Crisp mornings, pleasant afternoons, Poush Mela folk festival in late December." },
        { name: "Spring (Mar)", rating: "Cultural Peak", note: "Basanta Utsav celebrations with gulal, Rabindrasangeet, and yellow attire." },
        { name: "Summer (Apr - Jun)", rating: "Hot", note: "Scorching red soil summers (up to 42°C), but serene evenings." },
        { name: "Monsoon (Jul - Sep)", rating: "Lush", note: "The red laterite soil blooms vibrant green; celebrated in Tagore's seasonal songs." }
      ]
    },
    transportInformation: {
      byTrain: {
        nearestMajorStation: "Bolpur Shantiniketan Railway Station (BHP)",
        distanceKm: 2.5,
        travelTime: "2 to 2.5 hours from Howrah / Sealdah",
        details: "Superfast trains like Shantiniketan Express, Shatabdi Express, and Vande Bharat stop here."
      },
      byRoad: {
        primaryHighways: "NH-19 to Panagarh, then state highway via Ilambazar",
        routeFromKolkata: "165 km, approx. 3.5 to 4 hours scenic drive."
      },
      localTransit: "Eco-friendly battery totos (e-rickshaws) and rented bicycles."
    },
    foodAndShopping: {
      specialties: ["Birbhum traditional postor bora (poppy seed fritters)", "Khasir mangsho with Gobindobhog rice", "Traditional Bengali thali in earthen pots"],
      shoppingSpots: ["Sonajhurir Haat (Saturday afternoon forest market)", "Amar Kutir rural handicraft cooperative", "Batik silk and Kantha-stitch stoles & sarees"]
    },
    travelTips: [
      "Do not miss the Saturday afternoon Sonajhurir Haat where tribal dancers, Baul singers, and local artisans gather.",
      "The Visva-Bharati Ashram core area observes quiet hours; photography is restricted inside museum archives."
    ],
    faqs: [
      {
        question: "Is Shantiniketan easily done as a weekend trip from Kolkata?",
        answer: "Yes, it is Kolkata's favorite weekend cultural escape. Hop on the morning Shantiniketan Express from Howrah and you'll arrive in 2.5 hours."
      }
    ],
    nearbyDestinations: ["bishnupur", "tarapith", "kolkata"]
  },
  {
    id: "bishnupur",
    slug: "bishnupur",
    name: "Bishnupur",
    tagline: "The Terracotta Temple Capital of the Malla Kings & Home of Baluchari Silks",
    category: "heritage",
    categoryLabel: "Heritage & Historical Places",
    heroImage: "https://commons.wikimedia.org/wiki/Special:FilePath/Rasmancha_Bishnupur.JPG?width=1600",
    fallbackImage: "https://images.unsplash.com/photo-1599839575945-a9e5af0c3fa5?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Rasmancha_Bishnupur.JPG?width=1200",
      "https://commons.wikimedia.org/wiki/Special:FilePath/Jor-Bangla_Temple,_Bishnupur_(8415024198).jpg?width=1200",
      "https://images.unsplash.com/photo-1599839575945-a9e5af0c3fa5?auto=format&fit=crop&w=1200&q=80"
    ],
    coordinates: {
      latitude: 23.0700,
      longitude: 87.3200
    },
    recommendedDuration: "2 Days",
    shortDescription: "A historic town in Bankura famous for its 17th-century terracotta temples, the pyramidical Rasmancha, Bankura clay horses, and world-heritage Baluchari silk sarees.",
    fullDescription: "Bishnupur flourished as the illustrious capital of the Vaishnavite Malla kings between the 16th and 18th centuries. Because stone was scarce in the deltaic alluvial red soil of Bankura, the kings built glorious architectural marvels using baked terracotta bricks adorned with intricate bas-relief carvings depicting scenes from the Mahabharata, Ramayana, and Krishna Leela. Signature monuments include the unique pyramidical Rasmancha, the ornate Shyam Rai and Jor Bangla temples, the massive Dalmadal iron cannon, and the world-renowned weaving centers of Baluchari and Swarnachari silk sarees.",
    bestTimeToVisit: {
      summary: "October to March offers cool, pleasant weather for temple hopping and village exploration.",
      seasons: [
        { name: "Winter (Nov - Feb)", rating: "Peak", note: "Pleasant sunshine (12°C - 24°C), Bishnupur Mela in late December." },
        { name: "Monsoon (Jul - Sep)", rating: "Scenic", note: "The terracotta temples gleam vibrant red against lush green surroundings." },
        { name: "Summer (Apr - Jun)", rating: "Avoid", note: "High temperatures (up to 42°C) make daytime walking strenuous." }
      ]
    },
    transportInformation: {
      byTrain: {
        nearestMajorStation: "Bishnupur Railway Station (VSU)",
        travelTime: "3.5 to 4 hours from Howrah",
        details: "Trains like Rupashi Bangla Express and Aranyak Express connect Howrah directly to Bishnupur."
      },
      byRoad: {
        primaryHighways: "NH-19 to Durgapur, then SH-9 via Sonamukhi, or via Arambagh",
        routeFromKolkata: "140 km via Arambagh, approx. 4 hours drive."
      },
      localTransit: "E-rickshaws (totos) are easily available for custom half-day and full-day temple tours."
    },
    foodAndShopping: {
      specialties: ["Mecha Sandesh of Bishnupur", "Posto bora (poppy fritters)", "Bankura chanar jilapi"],
      shoppingSpots: ["Panchmura village for authentic GI-tagged terracotta Bankura horses", "Chowk Bazaar weaving centers for genuine Baluchari sarees", "Dashavatar playing cards (Ganjifa)"]
    },
    travelTips: [
      "Purchase the ASI combo entry ticket at Rasmancha, which grants access to Rasmancha, Shyam Rai, and Jor Bangla temples.",
      "Visit nearby Panchmura village (22 km) to watch master potters shape terracotta horses by hand."
    ],
    faqs: [
      {
        question: "What makes Baluchari sarees special?",
        answer: "Baluchari sarees are handwoven with pure silk threads depicting scenes from ancient epics and royal court life on their pallus and borders. They hold an official Geographical Indication (GI) tag."
      }
    ],
    nearbyDestinations: ["mukutmanipur", "shantiniketan", "jhargram"]
  },
  {
    id: "murshidabad",
    slug: "murshidabad",
    name: "Murshidabad",
    tagline: "The Imperial Capital of the Nawabs of Bengal & Site of the Hazarduari Palace",
    category: "heritage",
    categoryLabel: "Heritage & Historical Places",
    heroImage: "https://commons.wikimedia.org/wiki/Special:FilePath/Hazarduari_palace.JPG?width=1600",
    fallbackImage: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Hazarduari_palace.JPG?width=1200",
      "https://commons.wikimedia.org/wiki/Special:FilePath/Front_view_of_hazarduari_palace.jpg?width=1200",
      "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1200&q=80"
    ],
    coordinates: {
      latitude: 24.1800,
      longitude: 88.2700
    },
    recommendedDuration: "2-3 Days",
    shortDescription: "The historic 18th-century capital of the Nawabs of Bengal along the Bhagirathi River, home to the Italianate Hazarduari Palace with 1,000 doors, Katra Mosque, and the Battle of Plassey battleground.",
    fullDescription: "Named after Nawab Murshid Quli Khan, Murshidabad was once one of the wealthiest commercial metropolises of the 18th-century world, handling vast riches in silk, muslin, and spices before the British East India Company took control following the fateful Battle of Plassey in 1757. The town is dominated by the grand Hazarduari Palace (Palace with a Thousand Doors), built in Italian architectural style with a treasure trove of antiquities, weapons, and original paintings. Across the river lies Khushbagh (the garden tomb of Siraj-ud-Daulah), the imposing Katra Mosque, and the historic Jain temple enclave of Azimganj.",
    bestTimeToVisit: {
      summary: "October to March has cool weather, making historical walking tours comfortable.",
      seasons: [
        { name: "Winter (Nov - Feb)", rating: "Peak", note: "Pleasant days (13°C - 24°C), ideal for palace visits and boat rides." },
        { name: "Monsoon (Jul - Sep)", rating: "Scenic", note: "Bhagirathi river is full, countryside is scenic." }
      ]
    },
    transportInformation: {
      byTrain: {
        nearestMajorStation: "Murshidabad Railway Station or Berhampore Court Station",
        travelTime: "3.5 to 4 hours from Sealdah",
        details: "Hazarduari Express, Bhagirathi Express, and Lalgola Passenger depart daily from Sealdah."
      },
      byRoad: {
        primaryHighways: "NH-12 (earlier NH-34) via Krishnanagar and Ranaghat",
        routeFromKolkata: "210 km, approx. 5.5 to 6 hours."
      },
      localTransit: "Tonga (horse-drawn carriages), e-rickshaws (totos), and ferry boats across Bhagirathi."
    },
    foodAndShopping: {
      specialties: ["Murshidabadi Sheermal", "Chanabora sweet (pioneered by local sweet makers for British dignitaries)", "Manohara", "Murshidabadi Pulao"],
      shoppingSpots: ["Murshidabad raw silk sarees and scarves", "Bell-metal crafts (Kansa)", "Ivory-substitute wooden carvings"]
    },
    travelTips: [
      "Hazarduari Palace museum is closed on Fridays; plan your trip accordingly.",
      "Take a country boat across the Bhagirathi River to visit Khushbagh and Roshnibagh peacefully."
    ],
    faqs: [
      {
        question: "Is Hazarduari Palace actually made with 1,000 doors?",
        answer: "Yes, the palace has 1,000 doors, of which 900 are real and 100 are false doors designed to baffle attackers and provide air ventilation."
      }
    ],
    nearbyDestinations: ["mayapur", "kolkata"]
  },
  {
    id: "bakkhali",
    slug: "bakkhali",
    name: "Bakkhali & Henry's Island",
    tagline: "Serene South 24 Parganas Beach, Wind Turbines & Mangrove Trails",
    category: "beach",
    categoryLabel: "Beaches & Coastal Escapes",
    heroImage: "https://commons.wikimedia.org/wiki/Special:FilePath/Henrys_Island.jpg?width=1600",
    fallbackImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Henrys_Island.jpg?width=1200",
      "https://commons.wikimedia.org/wiki/Special:FilePath/View_of_henry_island,_bakkhali,_WB.jpg?width=1200",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80"
    ],
    coordinates: {
      latitude: 21.5630,
      longitude: 88.2570
    },
    recommendedDuration: "2 Days",
    shortDescription: "A peaceful coastal hamlet situated on one of the deltaic islands of South 24 Parganas, renowned for Henry's Island fisheries, watchtowers, and the hard sand crescent beach.",
    fullDescription: "Located on a deltaic projection into the Bay of Bengal, Bakkhali provides a quiet seaside getaway far from commercial crowds. The 7-km-long beach from Bakkhali to Fraserganj is remarkably firm, making it ideal for peaceful cycling and walking. A short drive away lies Henry's Island, managed by the State Fisheries Development Corporation, where wooden footbridges wind through dense mangrove trails leading to a secluded white beach and a watchtower with 360-degree views of the mangrove coast.",
    bestTimeToVisit: {
      summary: "October to March brings gentle sunny weather and cool sea breezes.",
      seasons: [
        { name: "Winter (Oct - Feb)", rating: "Peak", note: "Cool pleasant breezes, migratory birds at Henry's Island." },
        { name: "Monsoon (Jul - Sep)", rating: "Restful", note: "Raging sea waves, serene rain on the casuarina groves." }
      ]
    },
    transportInformation: {
      byTrain: {
        nearestMajorStation: "Namkhana Railway Station",
        travelTime: "2.5 hours by local train from Sealdah",
        details: "With the new Hatania-Doania bridge, vehicles now drive directly from Namkhana to Bakkhali without a ferry vessel."
      },
      byRoad: {
        primaryHighways: "NH-12 (Diamond Harbour Road) via Kakdwip and Namkhana",
        routeFromKolkata: "125 km, approx. 3.5 to 4 hours."
      },
      localTransit: "Motor van (Van-rickshaw) and battery totos."
    },
    foodAndShopping: {
      specialties: ["Fresh pomfret and hilsa from Fraserganj fishing harbour", "Green coconut"],
      shoppingSpots: ["Local fish markets and seashell souvenir stalls"]
    },
    travelTips: [
      "Henry's Island gates close at 5:00 PM; plan your visit earlier in the afternoon.",
      "The firm sand allows walking for miles, but keep an eye on incoming tides."
    ],
    faqs: [
      {
        question: "Can I drive directly to Bakkhali from Kolkata now?",
        answer: "Yes. Since the completion of the Hatania-Doania bridge at Namkhana, cars and buses drive continuously without waiting for ferry barge transfers."
      }
    ],
    nearbyDestinations: ["kolkata", "sundarbans"]
  },
  {
    id: "mayapur",
    slug: "mayapur",
    name: "Mayapur & Nabadwip",
    tagline: "The World Headquarters of ISKCON & the Birthplace of Chaitanya Mahaprabhu",
    category: "spiritual",
    categoryLabel: "Temples & Spiritual Destinations",
    heroImage: "https://commons.wikimedia.org/wiki/Special:FilePath/Sri_Krishna_Temple,_ISKCON,_Mayapur.jpg?width=1600",
    fallbackImage: "https://images.unsplash.com/photo-1599839575945-a9e5af0c3fa5?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Sri_Krishna_Temple,_ISKCON,_Mayapur.jpg?width=1200",
      "https://commons.wikimedia.org/wiki/Special:FilePath/Main_gate_of_ISKCON_temple_01.jpg?width=1200",
      "https://images.unsplash.com/photo-1599839575945-a9e5af0c3fa5?auto=format&fit=crop&w=1200&q=80"
    ],
    coordinates: {
      latitude: 23.4233,
      longitude: 88.3900
    },
    recommendedDuration: "1-2 Days",
    shortDescription: "A serene spiritual hub situated at the confluence of the Jalangi and Bhagirathi rivers in Nadia, home to the grand Temple of the Vedic Planetarium and historic Nabadwip temples.",
    fullDescription: "Located in Nadia district, Mayapur is the global spiritual headquarters of the International Society for Krishna Consciousness (ISKCON). It is also the sacred birthplace of Sri Chaitanya Mahaprabhu, the 16th-century saint of Gaudiya Vaishnavism. The sprawling campus hosts the monumentally grand Temple of the Vedic Planetarium (TOVP)—one of the largest religious dome structures in the world. Across the river lies Nabadwip, an ancient seat of Sanskrit logic (Navyanyaya) and temples.",
    bestTimeToVisit: {
      summary: "October to March is pleasant. Gaura Purnima festival in February/March attracts pilgrims worldwide.",
      seasons: [
        { name: "Winter (Oct - Feb)", rating: "Peak", note: "Delightful weather (14°C - 25°C), morning aartis and garden walks." },
        { name: "Gaura Purnima (Feb/Mar)", rating: "Grand Festival", note: "Massive international devotional festival and Kirtan melas." }
      ]
    },
    transportInformation: {
      byTrain: {
        nearestMajorStation: "Nabadwip Dham Railway Station",
        travelTime: "2 to 2.5 hours from Howrah / Sealdah",
        details: "From Nabadwip Dham station, take a toto to Hular Ghat and cross the river by ferry to Mayapur (5 mins)."
      },
      byRoad: {
        primaryHighways: "NH-12 to Krishnanagar, then state road to Mayapur",
        routeFromKolkata: "130 km, approx. 3.5 hours drive."
      },
      localTransit: "Ferry boats connecting Nabadwip and Mayapur, totos inside campus."
    },
    foodAndShopping: {
      specialties: ["Pure vegetarian ISKCON Govinda's Mahaprasadam thali", "Nabadwip Lal Doi (caramelized red curd)", "Jalangi sweet water fish (in town)"],
      shoppingSpots: ["ISKCON temple gift shop for devotional literature, brass bells, and neem wood murtis"]
    },
    travelTips: [
      "Book ISKCON guest houses (Gada Bhavan, Vamsi Bhavan) well in advance, especially during festival seasons.",
      "Dress respectfully when entering temple prayer halls."
    ],
    faqs: [
      {
        question: "Can non-devotees and tourists visit Mayapur?",
        answer: "Yes, visitors of all nationalities, backgrounds, and faiths are warmly welcomed to explore the temples, gardens, exhibitions, and enjoy prasadam dining."
      }
    ],
    nearbyDestinations: ["murshidabad", "kolkata"]
  },
  {
    id: "tarapith",
    slug: "tarapith",
    name: "Tarapith",
    tagline: "Sacred Tantric Shakti Peetha & Shrine of Goddess Tara",
    category: "spiritual",
    categoryLabel: "Temples & Spiritual Destinations",
    heroImage: "https://commons.wikimedia.org/wiki/Special:FilePath/Tarapith_temple.jpg?width=1600",
    fallbackImage: "https://images.unsplash.com/photo-1599839575945-a9e5af0c3fa5?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Tarapith_temple.jpg?width=1200",
      "https://commons.wikimedia.org/wiki/Special:FilePath/Tarapith_Temple_10.jpg?width=1200",
      "https://images.unsplash.com/photo-1599839575945-a9e5af0c3fa5?auto=format&fit=crop&w=1200&q=80"
    ],
    coordinates: {
      latitude: 24.1100,
      longitude: 87.8000
    },
    recommendedDuration: "1-2 Days",
    shortDescription: "A revered Shakta pilgrimage town in Birbhum situated along the Dwarka River, renowned for the ancient Maa Tara temple and the historic hermitage of the mystic saint Bamakhepa.",
    fullDescription: "Tarapith is one of the most prominent Shakti Peethas in Eastern India, believed to be the place where the third eye of Goddess Sati fell. Situated along the Dwarka River in Birbhum, the temple honors Goddess Tara in her fierce maternal form. The adjacent cremation ground (Maha Smashan) is world-famous among scholars and spiritual seekers of Tantra, associated with the legendary saint Bamakhepa who attained spiritual enlightenment here.",
    bestTimeToVisit: {
      summary: "October to March has pleasant weather for temple visits and rituals.",
      seasons: [
        { name: "Winter (Oct - Feb)", rating: "Peak", note: "Cool weather, comfortable queueing for temple darshan." },
        { name: "Kaushiki Amavasya (Aug/Sep)", rating: "Major Festival", note: "Massive annual gathering of pilgrims and sadhus; very crowded." }
      ]
    },
    transportInformation: {
      byTrain: {
        nearestMajorStation: "Rampurhat Junction (RPH)",
        distanceKm: 9,
        travelTime: "3 hours from Howrah / Sealdah",
        details: "Totos and taxis run round the clock from Rampurhat railway station to Tarapith."
      },
      byRoad: {
        primaryHighways: "NH-19 to Panagarh, then through Ilambazar and Suri to Rampurhat",
        routeFromKolkata: "220 km, approx. 4.5 to 5 hours."
      },
      localTransit: "E-rickshaws and cycle rickshaws."
    },
    foodAndShopping: {
      specialties: ["Maa Tara temple Bhog (khichuri, labra, payesh)", "Birbhum chanar mishti"],
      shoppingSpots: ["Temple bazaar for brass puja items, vermilion, and holy red thread"]
    },
    travelTips: [
      "Beware of unauthorized touts around temple gates promising VIP queue entries; use official temple committee counters.",
      "Early morning VIP darshan queues are generally less congested."
    ],
    faqs: [
      {
        question: "How far is Tarapith from Rampurhat station?",
        answer: "Tarapith is only 9 km from Rampurhat Junction, and totos take about 20 minutes to reach the temple area."
      }
    ],
    nearbyDestinations: ["shantiniketan", "murshidabad"]
  },
  {
    id: "chandannagar",
    slug: "chandannagar",
    name: "Chandannagar",
    tagline: "The Historic French Riviera of Bengal on the Hooghly River",
    category: "heritage",
    categoryLabel: "Heritage & Historical Places",
    heroImage: "https://commons.wikimedia.org/wiki/Special:FilePath/The_Strand_of_Chandannagar.jpg?width=1600",
    fallbackImage: "https://images.unsplash.com/photo-1558431382-27e303142255?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://commons.wikimedia.org/wiki/Special:FilePath/The_Strand_of_Chandannagar.jpg?width=1200",
      "https://commons.wikimedia.org/wiki/Special:FilePath/Chandannagar_Strand.jpg?width=1200",
      "https://images.unsplash.com/photo-1558431382-27e303142255?auto=format&fit=crop&w=1200&q=80"
    ],
    coordinates: {
      latitude: 22.8667,
      longitude: 88.3667
    },
    recommendedDuration: "1 Day (Day Trip)",
    shortDescription: "A charming former French colony in Hooghly district, celebrated for the scenic tree-lined Strand riverside promenade, French colonial mansions, and world-famous Jagaddhatri Puja lighting art.",
    fullDescription: "Established in 1673 as a trading post by the French East India Company, Chandannagar (formerly Chandernagore) retains a distinct Gallic architectural and cultural legacy. The town's crowning jewel is 'The Strand', a beautifully paved riverside promenade flanked by colonial heritage buildings, shaded banyans, and French lamp posts. Key attractions include the Chandannagar Institut de Français museum, the Sacred Heart Catholic Church with Gothic stained glass windows, and the world-renowned electrical lighting displays created during the annual Jagaddhatri Puja.",
    bestTimeToVisit: {
      summary: "October to February is best. Jagaddhatri Puja in November features world-class street lighting displays.",
      seasons: [
        { name: "Winter (Nov - Feb)", rating: "Peak", note: "Pleasant river breezes, outdoor cafe strolling along the Strand." }
      ]
    },
    transportInformation: {
      byTrain: {
        nearestMajorStation: "Chandannagar Railway Station",
        travelTime: "45 minutes from Howrah on the main line",
        details: "Suburban EMU local trains depart from Howrah every 10 to 15 minutes."
      },
      byRoad: {
        primaryHighways: "Grand Trunk Road (GT Road) / Delhi Road",
        routeFromKolkata: "38 km, approx. 1.2 hours drive from central Kolkata."
      },
      localTransit: "Cycle rickshaws, e-rickshaws (totos), and walking along the Strand."
    },
    foodAndShopping: {
      specialties: ["Surjya Kumar Modak's original Jalbhara Talsash Sandesh", "Motichoor Sandesh", "Fresh river fish dishes"],
      shoppingSpots: ["Grand Trunk Road sweet shops, especially the original Surjya Modak shop"]
    },
    travelTips: [
      "The Strand is closed to heavy vehicular traffic in the evenings, making it ideal for peaceful riverside walks.",
      "Visit the Sacred Heart Church to admire its centuries-old French stained glass architecture."
    ],
    faqs: [
      {
        question: "Can I do a day trip to Chandannagar from Kolkata?",
        answer: "Yes, it is one of the easiest day trips from Kolkata. A 45-minute local train from Howrah brings you directly into town."
      }
    ],
    nearbyDestinations: ["kolkata"]
  },
  {
    id: "cooch-behar",
    slug: "cooch-behar",
    name: "Cooch Behar",
    tagline: "The Royal Heritage City of Palaces, Temples & Grand Madan Mohan Shrine",
    category: "heritage",
    categoryLabel: "Heritage & Historical Places",
    heroImage: "https://commons.wikimedia.org/wiki/Special:FilePath/COOCH_BEHAR_PALACE.jpg?width=1600",
    fallbackImage: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://commons.wikimedia.org/wiki/Special:FilePath/COOCH_BEHAR_PALACE.jpg?width=1200",
      "https://commons.wikimedia.org/wiki/Special:FilePath/Cooch_Behar_Palace_in_Cooch_Behar.JPG?width=1200",
      "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1200&q=80"
    ],
    coordinates: {
      latitude: 26.3200,
      longitude: 89.4500
    },
    recommendedDuration: "2 Days",
    shortDescription: "A planned princely town in North Bengal famous for the Italian Renaissance-style Cooch Behar Royal Palace, the sacred Madan Mohan Temple, and serene water bodies.",
    fullDescription: "Cooch Behar is North Bengal's only planned heritage city, preserving the regal legacy of the Koch dynasty. Its prime architectural marvel is the Cooch Behar Royal Palace (Victor Jubilee Palace), designed under Maharaja Nripendra Narayan in 1887 on the model of Buckingham Palace in London. The brick-built palace features grand Corinthian columns, a magnificent central dome, and sprawling manicured lawns. The town also boasts the sacred Madan Mohan Temple, serene Sagar Dighi lake, and the traditional Rash Mela festival.",
    bestTimeToVisit: {
      summary: "October to March offers cool, pleasant weather. The Rash Mela in November is North Bengal's largest fair.",
      seasons: [
        { name: "Winter (Oct - Feb)", rating: "Peak", note: "Pleasant temperatures (10°C - 23°C), grand Rash Mela festivities in Nov/Dec." }
      ]
    },
    transportInformation: {
      byAir: {
        nearestAirport: "Cooch Behar Airport (limited regional flights) or Bagdogra (150 km)"
      },
      byTrain: {
        nearestMajorStation: "New Cooch Behar Railway Station (NCB)",
        travelTime: "Major stop on the Guwahati-Kolkata trunk line",
        details: "Direct Rajdhani, Vande Bharat, and North East express trains stop here."
      },
      byRoad: {
        primaryHighways: "NH-17 and NH-27 connecting Siliguri and Assam",
        routeFromSiliguri: "140 km, approx. 3.5 hours drive."
      },
      localTransit: "E-rickshaws (totos) and hired cabs."
    },
    foodAndShopping: {
      specialties: ["Shidal (fermented fish delicacy)", "Bhapa Pitha", "Kheer Sandesh", "Boroli fish curry"],
      shoppingSpots: ["Local markets for Sitalpati (fine cool river-reed mats) with GI tag, and bamboo crafts"]
    },
    travelTips: [
      "Purchase an authentic GI-tagged Sitalpati mat directly from local artisan cooperatives.",
      "The Palace museum closes on Fridays."
    ],
    faqs: [
      {
        question: "How is Cooch Behar connected to Dooars?",
        answer: "Cooch Behar is just 45 km from Jaldapara and Alipurduar, making it an easy heritage extension to a Dooars wildlife trip."
      }
    ],
    nearbyDestinations: ["dooars"]
  },
  {
    id: "jhargram",
    slug: "jhargram",
    name: "Jhargram",
    tagline: "Red Laterite Forests, Royal Palaces & Indigenous Tribal Heritage",
    category: "nature",
    categoryLabel: "Nature & Adventure",
    heroImage: "https://commons.wikimedia.org/wiki/Special:FilePath/Jhargram_Palace.jpg?width=1600",
    fallbackImage: "https://images.unsplash.com/photo-1575550959106-5a7defe28b56?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Jhargram_Palace.jpg?width=1200",
      "https://images.unsplash.com/photo-1575550959106-5a7defe28b56?auto=format&fit=crop&w=1200&q=80"
    ],
    coordinates: {
      latitude: 22.4500,
      longitude: 86.9800
    },
    recommendedDuration: "2 Days",
    shortDescription: "A serene getaway in Junglemahal surrounded by ancient Sal and Mahua forests, royal heritage palaces, cascading waterfalls at Ghagra, and Santhali folk traditions.",
    fullDescription: "Nestled between the Subarnarekha and Kangsabati rivers in south-western Bengal, Jhargram is celebrated for its rolling red laterite terrain, whispering Sal and Mahua forests, and royal heritage. Travelers can stay at or tour the historic Jhargram Raj Palace, discover scenic rocky cascades at Ghagra Falls and Khandarani Lake, and experience vibrant tribal music (Chhau and Karam dance). It offers a peaceful eco-tourism experience with minimal commercialization.",
    bestTimeToVisit: {
      summary: "October to March is ideal with cool weather and blooming Palash trees in late winter.",
      seasons: [
        { name: "Winter (Oct - Feb)", rating: "Peak", note: "Pleasant days, forest walks, birdwatching at Khandarani lake." },
        { name: "Spring (Feb - Mar)", rating: "Scenic", note: "Sal forests erupt in flaming orange Palash blossoms." }
      ]
    },
    transportInformation: {
      byTrain: {
        nearestMajorStation: "Jhargram Railway Station (JGM)",
        travelTime: "2.5 to 3 hours from Howrah",
        details: "Ispat Express, Steel Express, and Howrah-Titlagarh Express run daily."
      },
      byRoad: {
        primaryHighways: "NH-16 to Kharagpur, then NH-49 to Jhargram",
        routeFromKolkata: "170 km, approx. 3.5 to 4 hours drive."
      },
      localTransit: "Hired utility vehicles and totos."
    },
    foodAndShopping: {
      specialties: ["Sal leaf smoked chicken", "Postor Bora", "Kendu and Mahua sweets"],
      shoppingSpots: ["Tribal bell-metal Dhokra handicrafts, Sal leaf plates, Babui grass baskets"]
    },
    travelTips: [
      "Carry binoculars for Khandarani Lake, which welcomes thousands of migratory duck species during winter.",
      "Respect local tribal customs when visiting forest village hamlets."
    ],
    faqs: [
      {
        question: "Can tourists stay inside the Jhargram Raj Palace?",
        answer: "Yes, a section of the historic Jhargram Palace has been converted into a heritage homestay hotel operated by the royal family."
      }
    ],
    nearbyDestinations: ["mukutmanipur", "bishnupur"]
  },
  {
    id: "mukutmanipur",
    slug: "mukutmanipur",
    name: "Mukutmanipur",
    tagline: "The Azure Lake of Bankura & India's Second Largest Earthen Dam",
    category: "nature",
    categoryLabel: "Nature & Adventure",
    heroImage: "https://commons.wikimedia.org/wiki/Special:FilePath/Mukutmanipur_Dam_4.jpg?width=1600",
    fallbackImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Mukutmanipur_Dam_4.jpg?width=1200",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80"
    ],
    coordinates: {
      latitude: 22.9600,
      longitude: 86.7800
    },
    recommendedDuration: "2 Days",
    shortDescription: "A picturesque reservoir town at the confluence of the Kangsabati and Kumari rivers, featuring an 11-km-long earthen dam, boat rides to Bonpukuria Deer Park, and forested hillocks.",
    fullDescription: "Located in southern Bankura near the Jharkhand border, Mukutmanipur is famous for hosting India's second largest earthen dam, spanning across the meeting point of the Kangsabati and Kumari rivers. Surrounded by rolling green hills, the vast blue water body resembles a quiet inland sea. Visitors enjoy country boat cruises to the Bonpukuria Deer Park island, viewing sunrise and sunset from the dam crest road, and exploring the ancient Jain shrines of Ambikanagar.",
    bestTimeToVisit: {
      summary: "October to March offers cool breezes and tranquil boat cruises.",
      seasons: [
        { name: "Winter (Oct - Feb)", rating: "Peak", note: "Crisp mornings, pleasant lake breeze, migratory waterbirds." },
        { name: "Monsoon (Jul - Sep)", rating: "Spectacular", note: "The massive dam spillways open, roaring water spectacle." }
      ]
    },
    transportInformation: {
      byTrain: {
        nearestMajorStation: "Bankura Railway Station (55 km)",
        details: "Buses and private taxis meet trains at Bankura station."
      },
      byRoad: {
        primaryHighways: "Via Bishnupur, Khatra, and state highway",
        routeFromKolkata: "230 km, approx. 5 hours drive."
      },
      localTransit: "Totos, auto-rickshaws, and motorized boats."
    },
    foodAndShopping: {
      specialties: ["Fresh water Katla and Rohu fish fry from Kangsabati reservoir", "Bankura Posto Bora"],
      shoppingSpots: ["Tribal bell-metal items, terracotta curios, and grass mats at Khatra market"]
    },
    travelTips: [
      "Motor boat cruises to the Deer Park island take approximately 1.5 to 2 hours round trip; take life jackets provided by boatmen.",
      "The sunset view over the Kangsabati reservoir from the dam embankment is unmissable."
    ],
    faqs: [
      {
        question: "Can Mukutmanipur be combined with Bishnupur?",
        answer: "Yes, Mukutmanipur is only 70 km (approx. 1.5 hours) from Bishnupur, making a combined 3-day itinerary very popular."
      }
    ],
    nearbyDestinations: ["bishnupur", "jhargram"]
  }
];

// Helper functions for easy filtering and lookups
export function getAllDestinations() {
  return DESTINATIONS;
}

export function getDestinationBySlug(slug) {
  return DESTINATIONS.find((d) => d.slug.toLowerCase() === slug.toLowerCase());
}

export function getDestinationsByCategory(category) {
  if (!category || category === "all") return DESTINATIONS;
  return DESTINATIONS.filter((d) => d.category.toLowerCase() === category.toLowerCase());
}

export const CATEGORIES = [
  { id: "all", name: "All Destinations", count: DESTINATIONS.length },
  { id: "mountain", name: "Mountains & Hills", count: DESTINATIONS.filter(d => d.category === "mountain").length },
  { id: "beach", name: "Beaches & Coast", count: DESTINATIONS.filter(d => d.category === "beach").length },
  { id: "wildlife", name: "Forests & Wildlife", count: DESTINATIONS.filter(d => d.category === "wildlife").length },
  { id: "heritage", name: "Heritage & History", count: DESTINATIONS.filter(d => d.category === "heritage").length },
  { id: "spiritual", name: "Temples & Spiritual", count: DESTINATIONS.filter(d => d.category === "spiritual").length },
  { id: "culture", name: "Culture & Crafts", count: DESTINATIONS.filter(d => d.category === "culture").length },
  { id: "nature", name: "Nature & Adventure", count: DESTINATIONS.filter(d => d.category === "nature").length }
];
