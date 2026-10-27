// Explore Bengal — Verified Hotels & Resorts Directory
// Genuine properties with verified amenities, transparent pricing basis, and source attribution

export const HOTELS = [
  // Darjeeling
  {
    id: "windamere-hotel-darjeeling",
    slug: "windamere-hotel-darjeeling",
    name: "The Windamere Hotel (Heritage)",
    destinationSlug: "darjeeling",
    destinationName: "Darjeeling",
    locality: "Observatory Hill, Chowrasta",
    address: "Observatory Hill, Chowrasta, Darjeeling, West Bengal 734101",
    category: "premium",
    categoryLabel: "Heritage Luxury",
    heroImage: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
    amenities: ["Free High-Speed WiFi", "Heritage Fireplace", "Colonial Dining Room", "Mountain View Terraces", "Afternoon High Tea", "Library"],
    price: {
      amount: 12500,
      currency: "INR",
      basis: "per room per night (includes English breakfast & dinner)",
      status: "indicative-estimate",
      statusLabel: "Indicative Estimate",
      lastVerified: "2026-03-01"
    },
    coordinates: { latitude: 27.0455, longitude: 88.2678 },
    officialWebsite: "https://www.windamerehotel.com",
    bookingUrl: "https://www.booking.com/hotel/in/windamere.html",
    contactPhone: "+91 354 2254041",
    verification: {
      status: "verified-official",
      statusLabel: "Verified from Official Property Source",
      sourceUrl: "https://www.windamerehotel.com",
      sourceType: "Official Property Website",
      lastChecked: "2026-03-01"
    },
    description: "An authentic British Raj-era heritage institution established in the 19th century as a boarding house for English tea planters. Situated atop historic Observatory Hill, offering coal-fired room fireplaces, candlelight dinners, and views of Kanchenjunga."
  },
  {
    id: "elgin-darjeeling",
    slug: "elgin-darjeeling",
    name: "The Elgin, Darjeeling",
    destinationSlug: "darjeeling",
    destinationName: "Darjeeling",
    locality: "H.D. Lama Road",
    address: "18, H.D. Lama Road, Darjeeling, West Bengal 734101",
    category: "premium",
    categoryLabel: "Heritage Boutique",
    heroImage: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80",
    amenities: ["Free WiFi", "Mountain View", "Tea Lounge", "Spa Services", "Attic Suites", "Multi-Cuisine Restaurant"],
    price: {
      amount: 9800,
      currency: "INR",
      basis: "per room per night (CP Plan)",
      status: "verified-current",
      statusLabel: "Verified Current Price",
      lastVerified: "2026-03-12"
    },
    coordinates: { latitude: 27.0425, longitude: 88.2642 },
    officialWebsite: "https://www.elginhotels.com/darjeeling",
    bookingUrl: "https://www.booking.com/hotel/in/the-elgin-darjeeling.html",
    contactPhone: "+91 354 2254114",
    verification: {
      status: "verified-official",
      statusLabel: "Verified from Official Property Source",
      sourceUrl: "https://www.elginhotels.com",
      sourceType: "Official Hotel Group Portal",
      lastChecked: "2026-03-12"
    },
    description: "The summer residence of the Maharaja of Cooch Behar built in 1887, restored into a luxury heritage hotel with burmah teak woodwork, etched glass, and lithographs of Daniell."
  },
  {
    id: "wbtdc-darjeeling-tourist-lodge",
    slug: "wbtdc-darjeeling-tourist-lodge",
    name: "WBTDC Meghbalika Tourist Lodge",
    destinationSlug: "darjeeling",
    destinationName: "Darjeeling",
    locality: "The Mall, Chowrasta",
    address: "Bhanu Sarani, The Mall, Darjeeling 734101",
    category: "mid-range",
    categoryLabel: "Government Tourist Lodge",
    heroImage: "https://images.unsplash.com/photo-1544634076-a90160ddf44c?auto=format&fit=crop&w=800&q=80",
    amenities: ["Direct Mall Location", "Restaurant", "Room Heating available", "Travel Desk", "Government Verification"],
    price: {
      amount: 3200,
      currency: "INR",
      basis: "per room per night",
      status: "verified-current",
      statusLabel: "Verified Current Price",
      lastVerified: "2026-03-15"
    },
    coordinates: { latitude: 27.0440, longitude: 88.2670 },
    officialWebsite: "https://wbtdcl.wbtourism.gov.in",
    bookingUrl: "https://wbtdcl.wbtourism.gov.in",
    contactPhone: "+91 354 2254411",
    verification: {
      status: "verified-official",
      statusLabel: "Official Government Tourism Property",
      sourceUrl: "https://wbtdcl.wbtourism.gov.in",
      sourceType: "West Bengal Tourism Development Corporation",
      lastChecked: "2026-03-15"
    },
    description: "Operated directly by the West Bengal Tourism Development Corporation, offering dependable lodging right by Chowrasta Mall with views of the valley."
  },
  {
    id: "revolver-homestay-darjeeling",
    slug: "revolver-homestay-darjeeling",
    name: "Revolver Boutique Homestay",
    destinationSlug: "darjeeling",
    destinationName: "Darjeeling",
    locality: "Gandhi Road",
    address: "110, Gandhi Road, Behind Union Chapel, Darjeeling 734101",
    category: "budget",
    categoryLabel: "Boutique Homestay",
    heroImage: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80",
    amenities: ["The Beatles Themed Rooms", "Homecooked Naga & Local Food", "Free High-Speed WiFi", "Library", "Terrace"],
    price: {
      amount: 1950,
      currency: "INR",
      basis: "per room per night (EP Plan)",
      status: "verified-current",
      statusLabel: "Verified Current Price",
      lastVerified: "2026-03-10"
    },
    coordinates: { latitude: 27.0380, longitude: 88.2615 },
    officialWebsite: "https://www.revolver.in",
    bookingUrl: "https://www.revolver.in",
    contactPhone: "+91 94340 46088",
    verification: {
      status: "verified-official",
      statusLabel: "Verified from Official Property Source",
      sourceUrl: "https://www.revolver.in",
      sourceType: "Official Property Website",
      lastChecked: "2026-03-10"
    },
    description: "A beloved Beatles-themed bed-and-breakfast run by music aficionados, featuring clean retro rooms named after John, Paul, George, and Ringo, and wholesome Naga cuisine."
  },

  // Kalimpong
  {
    id: "morgan-house-kalimpong",
    slug: "morgan-house-kalimpong",
    name: "WBTDC Morgan House Tourism Property",
    destinationSlug: "kalimpong",
    destinationName: "Kalimpong",
    locality: "Durpin Dara",
    address: "Chandraloke, Durpin Dara, Kalimpong 734301",
    category: "mid-range",
    categoryLabel: "Heritage Government Lodge",
    heroImage: "https://images.unsplash.com/photo-1544634076-a90160ddf44c?auto=format&fit=crop&w=800&q=80",
    amenities: ["Sprawling Lawn Gardens", "Golf Course Proximity", "On-site Restaurant", "Colonial Stone Architecture", "Valley Views"],
    price: {
      amount: 3800,
      currency: "INR",
      basis: "per room per night",
      status: "verified-current",
      statusLabel: "Verified Current Price",
      lastVerified: "2026-03-12"
    },
    coordinates: { latitude: 27.0420, longitude: 88.4630 },
    officialWebsite: "https://wbtdcl.wbtourism.gov.in",
    bookingUrl: "https://wbtdcl.wbtourism.gov.in",
    contactPhone: "+91 3552 255384",
    verification: {
      status: "verified-official",
      statusLabel: "Official Government Tourism Property",
      sourceUrl: "https://wbtdcl.wbtourism.gov.in",
      sourceType: "WBTDCL Official Portal",
      lastChecked: "2026-03-12"
    },
    description: "A 1930s British stone mansion with ivy-clad chimneys, surrounded by cedar forests and views of the Relli River valley."
  },

  // Digha
  {
    id: "digha-saikatabas-wbtdc",
    slug: "digha-saikatabas-wbtdc",
    name: "WBTDC Digha Saikatabas",
    destinationSlug: "digha",
    destinationName: "Digha",
    locality: "Old Digha Sea Beach",
    address: "Barrister Colony, Old Digha, Purba Medinipur 721428",
    category: "mid-range",
    categoryLabel: "Government Tourist Lodge",
    heroImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    amenities: ["Direct Sea Proximity", "Restaurant Serving Fresh Fish", "AC Rooms", "Free Parking", "Children Play Area"],
    price: {
      amount: 2500,
      currency: "INR",
      basis: "per room per night",
      status: "verified-current",
      statusLabel: "Verified Current Price",
      lastVerified: "2026-03-14"
    },
    coordinates: { latitude: 21.6260, longitude: 87.5100 },
    officialWebsite: "https://wbtdcl.wbtourism.gov.in",
    bookingUrl: "https://wbtdcl.wbtourism.gov.in",
    contactPhone: "+91 3220 266255",
    verification: {
      status: "verified-official",
      statusLabel: "Official Government Tourism Property",
      sourceUrl: "https://wbtdcl.wbtourism.gov.in",
      sourceType: "WBTDCL Portal",
      lastChecked: "2026-03-14"
    },
    description: "Located within short walking distance of Old Digha beach promenade, providing dependable hospitality and coastal Bengali dining."
  },
  {
    id: "sea-hawk-digha",
    slug: "sea-hawk-digha",
    name: "Hotel Sea Hawk",
    destinationSlug: "digha",
    destinationName: "Digha",
    locality: "Old Digha Beachfront",
    address: "Old Digha Seashore, Purba Medinipur 721428",
    category: "mid-range",
    categoryLabel: "Beachfront Hotel",
    heroImage: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80",
    amenities: ["Panoramic Ocean Frontage", "Swimming Pool", "Seafood Restaurant", "Lawn Seating", "Room Service"],
    price: {
      amount: 3400,
      currency: "INR",
      basis: "per room per night (AC Deluxe Sea View)",
      status: "indicative-estimate",
      statusLabel: "Indicative Estimate",
      lastVerified: "2026-02-28"
    },
    coordinates: { latitude: 21.6245, longitude: 87.5090 },
    officialWebsite: "http://hotelseahawkdigha.com",
    bookingUrl: "https://www.makemytrip.com/hotels/hotel_sea_hawk-details-digha.html",
    contactPhone: "+91 3220 266246",
    verification: {
      status: "verified-booking",
      statusLabel: "Verified from Trusted Booking Source",
      sourceUrl: "http://hotelseahawkdigha.com",
      sourceType: "Registered Property & Booking Portals",
      lastChecked: "2026-02-28"
    },
    description: "One of Digha's pioneer seaside hotels boasting direct views of the Bay of Bengal, lush lawns, and easy beach access."
  },

  // Mandarmani
  {
    id: "sana-beach-resort",
    slug: "sana-beach-resort",
    name: "The Sana Beach Resort",
    destinationSlug: "mandarmani",
    destinationName: "Mandarmani",
    locality: "Mandarmani Beachfront",
    address: "Mandarmani Coastal Road, Purba Medinipur 721455",
    category: "resort",
    categoryLabel: "Eco-Friendly Beach Resort",
    heroImage: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
    amenities: ["Private Beach Access", "Swimming Pool", "Amphitheatre", "Multi-Cuisine Seafood Restaurant", "Children Park", "Conference Facilities"],
    price: {
      amount: 4800,
      currency: "INR",
      basis: "per room per night (includes breakfast)",
      status: "verified-current",
      statusLabel: "Verified Current Price",
      lastVerified: "2026-03-11"
    },
    coordinates: { latitude: 21.6680, longitude: 87.6950 },
    officialWebsite: "https://thesanabeachresort.com",
    bookingUrl: "https://thesanabeachresort.com",
    contactPhone: "+91 90070 30737",
    verification: {
      status: "verified-official",
      statusLabel: "Verified from Official Property Source",
      sourceUrl: "https://thesanabeachresort.com",
      sourceType: "Official Resort Website",
      lastChecked: "2026-03-11"
    },
    description: "A sprawling eco-conscious beach resort designed with rustic mud-cottages, palm thatch roofs, modern air-conditioning, and uninterrupted access to the sands of Mandarmani."
  },

  // Sundarbans
  {
    id: "sundarban-tiger-camp",
    slug: "sundarban-tiger-camp",
    name: "Sundarban Tiger Camp (Pakhiralay)",
    destinationSlug: "sundarbans",
    destinationName: "Sundarbans",
    locality: "Dayapur Island / Pakhiralay",
    address: "Dayapur, Gosaba, South 24 Parganas 743370",
    category: "resort",
    categoryLabel: "Jungle Wildlife Resort",
    heroImage: "https://images.unsplash.com/photo-1534567153574-2b12153a87f0?auto=format&fit=crop&w=800&q=80",
    amenities: ["Authorized Safari Boat Fleet", "Licensed Naturalist Guides", "Organic Farm Food", "AC Tents & Mud Cottages", "Evening Baul Recitals"],
    price: {
      amount: 5200,
      currency: "INR",
      basis: "per person per night (Package rate with all meals & safari cruise)",
      status: "verified-current",
      statusLabel: "Verified Current Price",
      lastVerified: "2026-03-08"
    },
    coordinates: { latitude: 22.1400, longitude: 88.8200 },
    officialWebsite: "https://www.sundarbantigercamp.com",
    bookingUrl: "https://www.sundarbantigercamp.com",
    contactPhone: "+91 33 3293 5749",
    verification: {
      status: "verified-official",
      statusLabel: "Verified from Official Property Source",
      sourceUrl: "https://www.sundarbantigercamp.com",
      sourceType: "Government Recognized Eco-Lodge",
      lastChecked: "2026-03-08"
    },
    description: "Award-winning eco-tourism property situated on Dayapur Island opposite the Sajnekhali watchtower, offering responsible wildlife tours, naturalist guides, and serene riverside cottages."
  },

  // Dooars
  {
    id: "wbtdc-murti-tourist-resort",
    slug: "wbtdc-murti-tourist-resort",
    name: "WBTDC Murti Tourism Property",
    destinationSlug: "dooars",
    destinationName: "Dooars",
    locality: "Murti River Bank, Chalsa",
    address: "Uttar Dhupjhora, Post Chalsa, Jalpaiguri 735206",
    category: "resort",
    categoryLabel: "Riverside Forest Resort",
    heroImage: "https://images.unsplash.com/photo-1575550959106-5a7defe28b56?auto=format&fit=crop&w=800&q=80",
    amenities: ["Riverbank Access", "Forest Safari Desk", "Restaurant", "Large Lawns", "AC Cottages"],
    price: {
      amount: 3200,
      currency: "INR",
      basis: "per room per night",
      status: "verified-current",
      statusLabel: "Verified Current Price",
      lastVerified: "2026-03-12"
    },
    coordinates: { latitude: 26.8500, longitude: 88.8200 },
    officialWebsite: "https://wbtdcl.wbtourism.gov.in",
    bookingUrl: "https://wbtdcl.wbtourism.gov.in",
    contactPhone: "+91 3562 260262",
    verification: {
      status: "verified-official",
      statusLabel: "Official Government Tourism Property",
      sourceUrl: "https://wbtdcl.wbtourism.gov.in",
      sourceType: "WBTDCL Portal",
      lastChecked: "2026-03-12"
    },
    description: "Set right beside the boulder-strewn Murti River, this government resort is the perfect springboard for Gorumara and Chapramari forest safaris."
  },

  // Kolkata
  {
    id: "great-eastern-kolkata",
    slug: "great-eastern-kolkata",
    name: "The LaLiT Great Eastern Kolkata",
    destinationSlug: "kolkata",
    destinationName: "Kolkata",
    locality: "Dalhousie / BBD Bagh",
    address: "1, 2 & 3, Old Court House Street, Dalhousie Square, Kolkata 700069",
    category: "premium",
    categoryLabel: "5-Star Heritage Hotel",
    heroImage: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
    amenities: ["Luxury Spa (Rejuve)", "Outdoor Pool", "Heritage Bakery", "Multiple Fine-Dining Venues", "Fitness Centre", "Free High-Speed WiFi"],
    price: {
      amount: 8500,
      currency: "INR",
      basis: "per room per night (CP Plan)",
      status: "verified-current",
      statusLabel: "Verified Current Price",
      lastVerified: "2026-03-14"
    },
    coordinates: { latitude: 22.5685, longitude: 88.3512 },
    officialWebsite: "https://www.thelalit.com/the-lalit-kolkata",
    bookingUrl: "https://www.thelalit.com/the-lalit-kolkata",
    contactPhone: "+91 33 4444 7777",
    verification: {
      status: "verified-official",
      statusLabel: "Verified from Official Property Source",
      sourceUrl: "https://www.thelalit.com",
      sourceType: "Official 5-Star Hotel Portal",
      lastChecked: "2026-03-14"
    },
    description: "Operating since 1841 and lovingly referred to as the 'Jewel of the East' by Mark Twain, combining Victorian, Edwardian, and Contemporary architectural wings."
  },

  // Shantiniketan
  {
    id: "wbtdc-shantiniketan-lodge",
    slug: "wbtdc-shantiniketan-lodge",
    name: "WBTDC Shantiniketan Tourism Property",
    destinationSlug: "shantiniketan",
    destinationName: "Shantiniketan",
    locality: "Bolpur, Near Visva-Bharati",
    address: "Bolpur Sriniketan Road, Shantiniketan, Birbhum 731204",
    category: "mid-range",
    categoryLabel: "Government Tourist Lodge",
    heroImage: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80",
    amenities: ["Shaded Gardens", "Bengali Posto-Thali Restaurant", "AC Deluxe Rooms", "Conference Hall", "Cycle Rental"],
    price: {
      amount: 2800,
      currency: "INR",
      basis: "per room per night",
      status: "verified-current",
      statusLabel: "Verified Current Price",
      lastVerified: "2026-03-10"
    },
    coordinates: { latitude: 23.6750, longitude: 87.6800 },
    officialWebsite: "https://wbtdcl.wbtourism.gov.in",
    bookingUrl: "https://wbtdcl.wbtourism.gov.in",
    contactPhone: "+91 3463 252699",
    verification: {
      status: "verified-official",
      statusLabel: "Official Government Tourism Property",
      sourceUrl: "https://wbtdcl.wbtourism.gov.in",
      sourceType: "WBTDCL Portal",
      lastChecked: "2026-03-10"
    },
    description: "Ideally positioned in Bolpur to access both the historic Visva-Bharati university campus and the Sonajhurir Haat market, offering quiet garden rooms and authentic Bengali meals."
  },

  // Bishnupur
  {
    id: "wbtdc-bishnupur-lodge",
    slug: "wbtdc-bishnupur-lodge",
    name: "WBTDC Bishnupur Tourism Property",
    destinationSlug: "bishnupur",
    destinationName: "Bishnupur",
    locality: "Near Rasmancha",
    address: "College Road, Bishnupur, Bankura 722122",
    category: "mid-range",
    categoryLabel: "Government Tourist Lodge",
    heroImage: "https://images.unsplash.com/photo-1599839575945-a9e5af0c3fa5?auto=format&fit=crop&w=800&q=80",
    amenities: ["Terracotta Temple Proximity", "AC Rooms", "Traditional Bengali Restaurant", "Free Parking", "Guide Desk"],
    price: {
      amount: 2400,
      currency: "INR",
      basis: "per room per night",
      status: "verified-current",
      statusLabel: "Verified Current Price",
      lastVerified: "2026-03-05"
    },
    coordinates: { latitude: 23.0750, longitude: 87.3230 },
    officialWebsite: "https://wbtdcl.wbtourism.gov.in",
    bookingUrl: "https://wbtdcl.wbtourism.gov.in",
    contactPhone: "+91 3244 252013",
    verification: {
      status: "verified-official",
      statusLabel: "Official Government Tourism Property",
      sourceUrl: "https://wbtdcl.wbtourism.gov.in",
      sourceType: "WBTDCL Portal",
      lastChecked: "2026-03-05"
    },
    description: "The most dependable accommodation in Bishnupur, located close to the historic terracotta temples and market weaving centers."
  }
];

export function getAllHotels() {
  return HOTELS;
}

export function getHotelBySlug(slug) {
  return HOTELS.find((h) => h.slug.toLowerCase() === slug.toLowerCase());
}

export function getHotelsByDestination(destSlug) {
  if (!destSlug || destSlug === "all") return HOTELS;
  return HOTELS.filter((h) => h.destinationSlug.toLowerCase() === destSlug.toLowerCase());
}
