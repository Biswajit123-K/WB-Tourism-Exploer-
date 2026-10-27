// Explore Bengal — Tour Packages Dataset
// Transparent tour packages with explicit inclusions, exclusions, and pricing rules

export const PACKAGES = [
  {
    id: "darjeeling-explorer",
    slug: "darjeeling-explorer",
    name: "Darjeeling Himalayan Explorer",
    tagline: "3 Days of Mist, Mountain Sunrise & Heritage Toy Train",
    duration: "3 Days / 2 Nights",
    durationDays: 3,
    durationNights: 2,
    destinations: ["Darjeeling"],
    destinationSlugs: ["darjeeling"],
    category: "mountain",
    heroImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT429rwnVFlkb7jvcJgaO7TUwpZQcL55raXO5fDAela8F6I-SuLs5NRJzo&s=10",
    accommodationCategory: "3-Star Heritage / Premium Boutique Hotel",
    transportation: "Private dedicated vehicle (Innova/Xylo) for NJP/Bagdogra transfers & sightseeing",
    mealsIncluded: "Breakfast included at hotel (CP Plan); lunch and dinner at leisure",
    activitiesIncluded: [
      "Early morning Tiger Hill sunrise excursion with tea",
      "Batasia Loop & Gorkha War Memorial visit",
      "Padmaja Naidu Himalayan Zoo & HMI entry tickets",
      "Happy Valley Tea Estate factory walking tour & tea tasting",
      "Chowrasta Mall sunset walk"
    ],
    exclusions: [
      "Darjeeling Toy Train joy-ride ticket (subject to IRCTC slot availability)",
      "Lunch, dinner, and personal alcoholic beverages",
      "Room heater charges (if requested at hotel: ₹300/night)",
      "Airfare or train fare to NJP/Bagdogra"
    ],
    pricing: {
      amount: 8950,
      currency: "INR",
      basis: "per person (twin-sharing, min 2 persons)",
      status: "indicative-estimate",
      statusLabel: "Indicative Estimate",
      breakdown: {
        transportation: 3800,
        accommodation: 3500,
        entryFees: 450,
        guideAndActivities: 700,
        taxes: 500
      },
      lastVerified: "2026-03-15"
    },
    flexibility: "Customizable date & vehicle upgrades",
    bookingSource: {
      type: "editorial-sample",
      providerName: "Explore Bengal Recommended Local Network",
      note: "Editorial sample package based on authentic local taxi union & boutique hotel tariff standards."
    },
    cancellationPolicy: "Full refund up to 7 days before departure; 50% retention within 48-72 hours.",
    itinerary: [
      {
        day: 1,
        title: "Ascent from Siliguri / NJP to the Queen of Hills",
        description: "Pick-up from NJP Railway Station or Bagdogra Airport. Drive 3 hours through lush tea estates and winding hill roads via Rohini. Check into your heritage hotel in Darjeeling. Evening stroll along Chowrasta Mall and Glenary's Bakery."
      },
      {
        day: 2,
        title: "Tiger Hill Dawn & Darjeeling Sightseeing",
        description: "Early morning 3:45 AM departure for Tiger Hill to witness the sunrise over Mt. Kanchenjunga. Return via Batasia Loop and Ghum Monastery. Post breakfast, visit Himalayan Mountaineering Institute (HMI), Padmaja Naidu Zoo, and Happy Valley Tea Estate."
      },
      {
        day: 3,
        title: "Tibetan Refugee Center & Departure to Plains",
        description: "Morning visit to Tibetan Refugee Self-Help Centre and Japanese Peace Pagoda. Souvenir tea shopping at Chowrasta. Afternoon scenic descent back to NJP Railway Station or Bagdogra Airport."
      }
    ]
  },
  {
    id: "hills-tea-gardens",
    slug: "hills-tea-gardens",
    name: "Hills & Tea Gardens of North Bengal",
    tagline: "5 Days across Darjeeling, Lamahatta & Kalimpong Valleys",
    duration: "5 Days / 4 Nights",
    durationDays: 5,
    durationNights: 4,
    destinations: ["Darjeeling", "Kalimpong"],
    destinationSlugs: ["darjeeling", "kalimpong"],
    category: "mountain",
    heroImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbOCRkrRTVRAKehMEvXiQ4rI0qX9HjUYzrehIvN3ZCwhxQI6_lJ26JJl4&s=10",
    accommodationCategory: "Boutique Eco-Lodges & Heritage Colonial Stays (Morgan House/Pine View)",
    transportation: "Dedicated private cab for the entire 5-day circuit from/to Bagdogra or NJP",
    mealsIncluded: "Daily breakfast and dinner (MAP Plan)",
    activitiesIncluded: [
      "Kanchenjunga sunrise viewing at Tiger Hill",
      "Lamahatta Eco Park pine forest trail",
      "Kalimpong Deolo Hill panoramic viewpoint",
      "Zang Dhok Palri Phodang Tibetan Monastery tour",
      "Artisan cheese tasting & Pine View cactus nursery"
    ],
    exclusions: [
      "Lunches and roadside tea stops",
      "Tandem paragliding fees at Deolo Hill (₹3,000 optional)",
      "Toy Train tickets and train/flight tickets to Bengal"
    ],
    pricing: {
      amount: 15400,
      currency: "INR",
      basis: "per person (twin-sharing, min 2 persons)",
      status: "indicative-estimate",
      statusLabel: "Indicative Estimate",
      breakdown: {
        transportation: 6200,
        accommodation: 6400,
        entryFees: 600,
        guideAndActivities: 1100,
        taxes: 1100
      },
      lastVerified: "2026-03-10"
    },
    flexibility: "Flexible pacing; add Kurseong or Mirik on request",
    bookingSource: {
      type: "editorial-sample",
      providerName: "North Bengal Tourism Guild Partners",
      note: "Standard transparent circuit pricing verified against local travel consortium averages."
    },
    cancellationPolicy: "Free cancellation up to 10 days before journey; 75% refund within 5 days.",
    itinerary: [
      {
        day: 1,
        title: "Arrival Bagdogra/NJP - Transfer to Darjeeling",
        description: "Welcome at NJP/Bagdogra. Drive through Rohini highway. Evening check-in at Darjeeling and twilight tea at Chowrasta."
      },
      {
        day: 2,
        title: "Kanchenjunga Sunrise & Tea Heritage",
        description: "Dawn trip to Tiger Hill, followed by Batasia Loop, Zoo, HMI, and an afternoon tea plucking experience at a local estate."
      },
      {
        day: 3,
        title: "Darjeeling to Kalimpong via Lamahatta Conifers",
        description: "Scenic drive through Peshok Tea Gardens and the majestic Lovers Meet Viewpoint (Teesta-Rangeet confluence). Stop at Lamahatta Eco Park. Check into Kalimpong colonial property."
      },
      {
        day: 4,
        title: "Kalimpong Nurseries, Monasteries & Deolo View",
        description: "Explore Deolo Hill viewpoint, Zang Dhok Palri Phodang monastery, Graham's Homes, and sample Kalimpong Gouda cheese at local dairies."
      },
      {
        day: 5,
        title: "Coronation Bridge & Drop-off at Plains",
        description: "Morning visit to Pine View Cactus Nursery. Drive along Teesta River and Coronation Bridge at Sevoke. Drop-off at NJP or Bagdogra."
      }
    ]
  },
  {
    id: "coastal-bengal-escape",
    slug: "coastal-bengal-escape",
    name: "Coastal Bengal Beach Escape",
    tagline: "3 Days of Golden Sands, Seafood & Red Crab Shores",
    duration: "3 Days / 2 Nights",
    durationDays: 3,
    durationNights: 2,
    destinations: ["Digha", "Mandarmani"],
    destinationSlugs: ["digha", "mandarmani"],
    category: "beach",
    heroImage: "https://travellinktrip.com/admin/webroot/img/uploads/holiday-package/1781015193_467863-digha.jpeg",
    accommodationCategory: "Beachfront Resort with Swimming Pool & Sea View",
    transportation: "AC private sedan pick-up & drop from Kolkata, or local station transfers from Digha",
    mealsIncluded: "Daily breakfast and choice of 1 authentic coastal seafood dinner",
    activitiesIncluded: [
      "Marine Aquarium and Regional Centre guided visit",
      "New Digha beach promenade and sunset watch",
      "Mandarmani red crab beach discovery walk",
      "Talsari beach and Subarnarekha river mouth excursion"
    ],
    exclusions: [
      "Watersports and beach ATV rides",
      "Alcoholic drinks and additional room service",
      "Kolkata pick-up tolls and parking fees (if opting for self-drive)"
    ],
    pricing: {
      amount: 6800,
      currency: "INR",
      basis: "per person (twin-sharing, min 2 persons)",
      status: "indicative-estimate",
      statusLabel: "Indicative Estimate",
      breakdown: {
        transportation: 2600,
        accommodation: 3100,
        entryFees: 100,
        guideAndActivities: 400,
        taxes: 600
      },
      lastVerified: "2026-03-01"
    },
    flexibility: "Can start from Kolkata or directly at Digha Railway Station",
    bookingSource: {
      type: "editorial-sample",
      providerName: "Coastal Bengal Independent Partner Network",
      note: "Editorial comparison baseline using verified Purba Medinipur hoteliers tariffs."
    },
    cancellationPolicy: "Full refund 72 hours prior; 50% refund 24 hours prior.",
    itinerary: [
      {
        day: 1,
        title: "Kolkata to Digha - Marine Aquarium & Sunset Sea Wall",
        description: "Early morning drive or express train from Kolkata. Check into beachfront resort. Afternoon visit to the Marine Aquarium. Evening at Old Digha seawall watching crashing waves."
      },
      {
        day: 2,
        title: "Talsari Mangroves & Mandarmani Red Crabs",
        description: "Morning excursion to quiet Talsari and Udaipur beaches. Afternoon transfer to Mandarmani beachfront resort. Sunset beach stroll witnessing thousands of red soldier crabs."
      },
      {
        day: 3,
        title: "Sunrise Beach Dip & Return to Kolkata",
        description: "Early morning swim in gentle waves. Fresh tender coconut water and coastal breakfast. Late morning checkout and comfortable drive back to Kolkata."
      }
    ]
  },
  {
    id: "sundarbans-nature-expedition",
    slug: "sundarbans-nature-expedition",
    name: "Sundarbans Mangrove & Wildlife Cruise",
    tagline: "2 Days Inside the World's Largest Tidal Delta Biosphere",
    duration: "2 Days / 1 Night",
    durationDays: 2,
    durationNights: 1,
    destinations: ["Sundarbans"],
    destinationSlugs: ["sundarbans"],
    category: "wildlife",
    heroImage: "https://upload.wikimedia.org/wikipedia/commons/2/23/Sundarban_Tiger.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original",
    accommodationCategory: "Riverside Eco-Cottage / Jungle Resort at Dayapur / Pakhiralay",
    transportation: "AC coach transfer from Kolkata to Godkhali Ghat + Authorized motorized safari boat",
    mealsIncluded: "All meals included (Breakfast, Bengali lunch, evening tea & snacks, dinner)",
    activitiesIncluded: [
      "Full boat safari through mangrove creek channels (Pirkhali, Gazikhali)",
      "Sajnekhali Watchtower, Mangrove Museum & Crocodile Pond entry",
      "Sudhanyakhali Watchtower tiger observation point",
      "Dobanki elevated canopy walkway excursion",
      "Evening tribal Jhumur dance performance by local villagers"
    ],
    exclusions: [
      "Still & video camera forest department permit fees",
      "Personal tips for boat crew and forest naturalist",
      "Packaged mineral water and personal beverages"
    ],
    pricing: {
      amount: 5400,
      currency: "INR",
      basis: "per person (all-inclusive Kolkata to Kolkata)",
      status: "verified-current",
      statusLabel: "Verified Current Price",
      breakdown: {
        transportation: 1900,
        accommodation: 1600,
        meals: 900,
        forestPermitsAndGuide: 650,
        taxes: 350
      },
      lastVerified: "2026-03-20"
    },
    flexibility: "Fixed weekend and weekday departures",
    bookingSource: {
      type: "verified-agency",
      providerName: "Sundarbans Authorized Eco-Tour Operators Collective",
      note: "Regulated eco-tourism tariff compliant with West Bengal Forest Department norms."
    },
    cancellationPolicy: "Free rescheduling up to 5 days prior; 50% refund within 48 hours.",
    itinerary: [
      {
        day: 1,
        title: "Kolkata to Godkhali - Cruise into Mangrove Heart",
        description: "07:30 AM departure from Kolkata (Science City pick-up). Arrive at Godkhali jetty by 10:30 AM. Board motorized safari boat with welcome tea. Cruise past river dolphins to Sajnekhali Watchtower. Evening check-in at eco-resort with folk tribal music."
      },
      {
        day: 2,
        title: "Creek Safaris, Canopy Walk & Return to City",
        description: "06:30 AM early morning boat cruise through misty creek channels. Visit Sudhanyakhali and Dobanki Canopy Walk. Hot Bengali fish curry lunch prepared fresh on boat. Return to Godkhali jetty by 4:00 PM and coach transfer to Kolkata by 7:30 PM."
      }
    ]
  },
  {
    id: "dooars-wildlife-circuit",
    slug: "dooars-wildlife-circuit",
    name: "Dooars Wildlife & Tea Safari Circuit",
    tagline: "4 Days of Rhinos, Elephant Herds & Murti River Trails",
    duration: "4 Days / 3 Nights",
    durationDays: 4,
    durationNights: 3,
    destinations: ["Dooars"],
    destinationSlugs: ["dooars"],
    category: "wildlife",
    heroImage: "https://dooars.info/wp-content/uploads/2019/01/Rhinos-in-Jaldapara.jpg",
    accommodationCategory: "Jungle Eco-Lodge in Lataguri / Murti Riverside Cottages",
    transportation: "Private safari vehicle (Bolero/Innova) for all transfers from NJP/Hasimara",
    mealsIncluded: "Daily breakfast and dinner at resort",
    activitiesIncluded: [
      "1 Jaldapara National Park Rhino Jeep Safari",
      "1 Gorumara National Park Watchtower Safari (Jatraprasad / Medla)",
      "Murti River pebble beach excursion and picnic",
      "Samsing, Suntalekhola & Rocky Island foothill river tour"
    ],
    exclusions: [
      "Elephant ride permit (subject to WBFDC lottery/availability on spot)",
      "Camera fees inside forest reserves",
      "Lunches and national park seasonal conservation surcharges"
    ],
    pricing: {
      amount: 11800,
      currency: "INR",
      basis: "per person (twin-sharing, min 2 persons)",
      status: "indicative-estimate",
      statusLabel: "Indicative Estimate",
      breakdown: {
        transportation: 4500,
        accommodation: 4800,
        entryFees: 1200,
        guideAndActivities: 700,
        taxes: 600
      },
      lastVerified: "2026-03-05"
    },
    flexibility: "Available October 16 to June 15 (Closed during monsoon breeding season)",
    bookingSource: {
      type: "editorial-sample",
      providerName: "Dooars Eco-Tourism Consortium",
      note: "Calculated based on standard WBFDC approved guide & gypsy hire rates."
    },
    cancellationPolicy: "Full refund 7 days before check-in.",
    itinerary: [
      {
        day: 1,
        title: "NJP to Lataguri / Gorumara Foothills",
        description: "Arrive at NJP Railway Station or Bagdogra. Drive 2 hours past Sevoke bridge and tea gardens. Check into jungle resort. Evening Gorumara watchtower safari to spot Indian bison and rhinos."
      },
      {
        day: 2,
        title: "Samsing, Suntalekhola & Murti River",
        description: "Day excursion to the foothills of Neora Valley at Samsing and Suntalekhola hanging bridge. Dip your feet into the clear waters of Rocky Island and spend a quiet twilight at Murti riverbank."
      },
      {
        day: 3,
        title: "Jaldapara Rhino Safari & Tea Gardens",
        description: "Morning drive to Jaldapara National Park at Madarihat. Afternoon open gypsy safari through elephant grass to photograph the Great One-Horned Rhino. Evening tribal cultural performance."
      },
      {
        day: 4,
        title: "South Khayerbari Leopard Centre & Return",
        description: "Morning visit to South Khayerbari rehabilitation center. Drive back through scenic tea estates to NJP Railway Station or Hasimara."
      }
    ]
  },
  {
    id: "heritage-bengal-terracotta",
    slug: "heritage-bengal-terracotta",
    name: "Heritage Bengal: Terracotta & Tagore",
    tagline: "3 Days Celebrating Bishnupur Temples & Shantiniketan Art",
    duration: "3 Days / 2 Nights",
    durationDays: 3,
    durationNights: 2,
    destinations: ["Bishnupur", "Shantiniketan"],
    destinationSlugs: ["bishnupur", "shantiniketan"],
    category: "heritage",
    heroImage: "https://curlytales.com/wp-content/uploads/2023/05/Bishnupur.jpg",
    accommodationCategory: "Heritage Guest House / Resort (WBTDC Tourist Lodge standard)",
    transportation: "AC private vehicle for the entire circuit from Kolkata",
    mealsIncluded: "Daily authentic Bengali breakfast and 1 traditional thali lunch in Shantiniketan",
    activitiesIncluded: [
      "ASI archaeological combo tour of Rasmancha, Shyam Rai & Jor Bangla",
      "Panchmura village terracotta horse artisan workshop visit",
      "Visva-Bharati Ashram & Uttarayan Museum entry in Shantiniketan",
      "Sonajhurir Haat open-air forest market exploration"
    ],
    exclusions: [
      "Personal purchases of Baluchari sarees or handicrafts",
      "Dinners and additional museum photography permits"
    ],
    pricing: {
      amount: 7600,
      currency: "INR",
      basis: "per person (twin-sharing, min 2 persons)",
      status: "indicative-estimate",
      statusLabel: "Indicative Estimate",
      breakdown: {
        transportation: 3200,
        accommodation: 2900,
        entryFees: 350,
        guideAndActivities: 650,
        taxes: 500
      },
      lastVerified: "2026-03-12"
    },
    flexibility: "Best over weekends to coincide with the Saturday Sonajhurir Haat",
    bookingSource: {
      type: "editorial-sample",
      providerName: "Bengal Heritage Guild & Craft Trails",
      note: "Transparent estimate honoring fair compensation for local craft guides."
    },
    cancellationPolicy: "Free cancellation up to 48 hours before departure.",
    itinerary: [
      {
        day: 1,
        title: "Kolkata to Bishnupur - Malla Terracotta Wonders",
        description: "Depart Kolkata at 7:00 AM via Arambagh. Check into Bishnupur tourist lodge. Afternoon guided exploration of Rasmancha, Shyam Rai, and Jor Bangla temples. Evening Baluchari saree weaving demonstration."
      },
      {
        day: 2,
        title: "Panchmura Potters to Shantiniketan",
        description: "Morning visit to Panchmura artisan village to see Bankura terracotta horses molded by hand. Drive 2.5 hours to Shantiniketan. Afternoon visit to Sonajhurir Haat (if Saturday) or Amar Kutir craft center. Baul music under Sal trees."
      },
      {
        day: 3,
        title: "Visva-Bharati Tagore Ashram & Return",
        description: "Morning tour of Visva-Bharati university heritage campus, prayer hall, and Rabindra Bhavana museum. Traditional Bengali lunch and comfortable afternoon drive back to Kolkata."
      }
    ]
  },
  {
    id: "imperial-murshidabad",
    slug: "imperial-murshidabad",
    name: "Imperial Murshidabad & Nawab Heritage",
    tagline: "3 Days on the Trail of Siraj-ud-Daulah, Palaces & Silk",
    duration: "3 Days / 2 Nights",
    durationDays: 3,
    durationNights: 2,
    destinations: ["Murshidabad"],
    destinationSlugs: ["murshidabad"],
    category: "heritage",
    heroImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQapzjYpdgZO_2z4Oz4bsum0HnSFXH986VryIOms6Lo0Bdi_HQZcwkiXVvA&s=10",
    accommodationCategory: "Heritage Riverside Hotel / Boutique Stay in Berhampore / Murshidabad",
    transportation: "AC vehicle for station pick-up, palace circuits & boat crossing",
    mealsIncluded: "Breakfast daily + 1 Nawabi lunch with Sheermal & Chanabora sweet",
    activitiesIncluded: [
      "Hazarduari Palace Museum guided exploration",
      "Katra Mosque & Jahan Kosha historic cannon",
      "Bhagirathi River boat ferry to Khushbagh (Siraj-ud-Daulah's garden tomb)",
      "Kathgola Gardens & Adinath Jain temple"
    ],
    exclusions: [
      "Hazarduari Friday closure considerations",
      "Kolkata to Murshidabad train tickets (Hazarduari Express recommended)"
    ],
    pricing: {
      amount: 6400,
      currency: "INR",
      basis: "per person (twin-sharing, min 2 persons)",
      status: "indicative-estimate",
      statusLabel: "Indicative Estimate",
      breakdown: {
        transportation: 2400,
        accommodation: 2600,
        entryFees: 300,
        guideAndActivities: 600,
        taxes: 500
      },
      lastVerified: "2026-03-08"
    },
    flexibility: "Can be done independently with train to Berhampore Court / Murshidabad",
    bookingSource: {
      type: "editorial-sample",
      providerName: "Historic Murshidabad Guides Forum",
      note: "Editorial sample based on registered ASI guides and approved riverside lodging."
    },
    cancellationPolicy: "Full refund 72 hours prior.",
    itinerary: [
      {
        day: 1,
        title: "Arrival by Hazarduari Express - The Grand Palace",
        description: "Arrive at Murshidabad station. Check into hotel. Afternoon in-depth tour of the monumental Hazarduari Palace (1,000 doors) and the adjoining Imambara along the river."
      },
      {
        day: 2,
        title: "Katra Mosque, Kathgola & Royal Tombs",
        description: "Morning visit to Katra Mosque, Jahan Kosha cannon, and the ornate Kathgola Palace with underground secret chambers. Afternoon country boat cruise across the Bhagirathi River to Khushbagh."
      },
      {
        day: 3,
        title: "Murshidabad Silk & Return Journey",
        description: "Morning visit to Cossimbazar Rajbari and silk weaving looms. Taste authentic Chanabora sweets. Afternoon express train return to Kolkata."
      }
    ]
  },
  {
    id: "kolkata-cultural-walk",
    slug: "kolkata-cultural-walk",
    name: "Kolkata Cultural & Colonial Odyssey",
    tagline: "2 Days of Victorian Monuments, Hooghly Ferries & Gastronomy",
    duration: "2 Days / 1 Night",
    durationDays: 2,
    durationNights: 1,
    destinations: ["Kolkata"],
    destinationSlugs: ["kolkata"],
    category: "heritage",
    heroImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoJ-YzkafsTNmFIMThrOPzcNA45sfL8KpH0gfDKjQv6w&s=10",
    accommodationCategory: "Heritage 4-Star Hotel (The Lalit Great Eastern / Elgin Fairlawn style)",
    transportation: "AC sedan cab + Vintage Tram ride + Hooghly River public ferry experience",
    mealsIncluded: "Breakfast at hotel + guided street food tasting tour (Kathi roll, Phuchka, Sandesh)",
    activitiesIncluded: [
      "Victoria Memorial Hall & Princep Ghat memorial walk",
      "Kumartuli clay idol sculptor workshop walk",
      "College Street Boi Para & Indian Coffee House table reservation",
      "Hooghly river sunset boat cruise passing beneath Howrah Bridge"
    ],
    exclusions: [
      "International / domestic flights to Kolkata",
      "Kolkata Biryani dinners at leisure"
    ],
    pricing: {
      amount: 4950,
      currency: "INR",
      basis: "per person (twin-sharing, min 2 persons)",
      status: "indicative-estimate",
      statusLabel: "Indicative Estimate",
      breakdown: {
        transportation: 1500,
        accommodation: 2200,
        entryFees: 250,
        guideAndActivities: 600,
        taxes: 400
      },
      lastVerified: "2026-03-18"
    },
    flexibility: "Available daily all year around",
    bookingSource: {
      type: "editorial-sample",
      providerName: "Kolkata City Explorers Collaborative",
      note: "Curated walking circuit matching authentic heritage hotel and licensed guide charges."
    },
    cancellationPolicy: "Full refund up to 24 hours prior to tour start.",
    itinerary: [
      {
        day: 1,
        title: "Colonial Grandeur & The Sacred Clay of Kumartuli",
        description: "Morning tour of Victoria Memorial and St. Paul's Cathedral. Vintage tram ride across the Maidan. Afternoon heritage walk through Kumartuli to watch potters sculpt clay deities. Sunset tea at Princep Ghat on the river."
      },
      {
        day: 2,
        title: "College Street Literature, Coffee & Grand Howrah Bridge",
        description: "Explore the bustling bookstalls of College Street. Sip black coffee at the historic Indian Coffee House. Cross the Hooghly river by ferry with breathtaking views of Howrah Bridge. Culinary trail tasting legendary Kathi rolls."
      }
    ]
  }
];

export function getAllPackages() {
  return PACKAGES;
}

export function getPackageBySlug(slug) {
  return PACKAGES.find((p) => p.slug.toLowerCase() === slug.toLowerCase());
}

export function getPackagesByDestination(destSlug) {
  if (!destSlug) return PACKAGES;
  return PACKAGES.filter((p) =>
    p.destinationSlugs.some((d) => d.toLowerCase() === destSlug.toLowerCase())
  );
}
