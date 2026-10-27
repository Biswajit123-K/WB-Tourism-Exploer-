import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Compass, MapPin, Calendar, Users, ArrowRight, Mountain, Waves, 
  Trees, Landmark, Church, Palette, Footprints, ShieldCheck, Check, 
  Star, ExternalLink, Sparkles, Coffee, Heart, Clock
} from 'lucide-react';
import { DESTINATIONS, CATEGORIES } from '../data/destinations.js';
import { PACKAGES } from '../data/packages.js';
import { HOTELS } from '../data/hotels.js';
import { TRAVEL_GUIDES } from '../data/travelGuides.js';
import DestinationCard from '../components/DestinationCard.jsx';
import PackageCard from '../components/PackageCard.jsx';
import HotelCard from '../components/HotelCard.jsx';
import SEO from '../components/SEO.jsx';
import { generateWebSiteSchema } from '../utils/seo.js';

export default function Home({ onOpenComparison, onToggleCompare, comparedPackages }) {
  const navigate = useNavigate();

  // Quick Search Form State inside Hero
  const [searchDest, setSearchDest] = useState('darjeeling');
  const [searchOrigin, setSearchOrigin] = useState('Kolkata');
  const [searchMonth, setSearchMonth] = useState('October');
  const [travelers, setTravelers] = useState('2');

  const handleHeroSearchSubmit = (e) => {
    e.preventDefault();
    navigate(`/plan-your-trip?origin=${encodeURIComponent(searchOrigin)}&destination=${encodeURIComponent(searchDest)}&month=${encodeURIComponent(searchMonth)}&travelers=${encodeURIComponent(travelers)}`);
  };

  const categoryIcons = {
    mountain: Mountain,
    beach: Waves,
    wildlife: Trees,
    heritage: Landmark,
    spiritual: Church,
    culture: Palette,
    nature: Footprints
  };

  const signatureExperiences = [
    {
      title: "Darjeeling Toy Train Steam Joy Ride",
      desc: "Chug past Himalayan pine forests and Batasia Loop aboard the 1881 UNESCO World Heritage narrow gauge steam locomotive.",
      tag: "Heritage Rail",
      img: "https://s7ap1.scene7.com/is/image/incredibleindia/dhr-siliguri1-west-bengal-attr-hero?qlt=82&ts=1726645149850",
      fallback: "https://images.unsplash.com/photo-1544634076-a90160ddf44c?auto=format&fit=crop&w=1200&q=82",
      dest: "Darjeeling"
    },
    {
      title: "Tea Garden Trails & Estate Bungalows",
      desc: "Walk amidst misty green tea slopes, watch orthodox plucking, and sample fragrant First Flush champagne teas.",
      tag: "Tea Heritage",
      img: "https://s7ap1.scene7.com/is/image/incredibleindia/happy-valley-tea-estate-darjeeling-west%20bengal-1-hero?qlt=82&ts=1726643578177",
      fallback: "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=1200&q=82",
      dest: "Darjeeling & Dooars"
    },
    {
      title: "Authorized Sundarbans Mangrove Safaris",
      desc: "Cruise misty tidal creeks past estuarine crocodiles and spotted deer into the realm of the Royal Bengal Tiger.",
      tag: "Wildlife Delta",
      img: "https://images.takeshape.io/86ce9525-f5f2-4e97-81ba-54e8ce933da7/dev/9d6b8d76-958b-4045-98ac-2176d844f211/Sundarban%20Tiger-WikiCommons1.jpg",
      fallback: "https://images.unsplash.com/photo-1534567153574-2b12153a87f0?auto=format&fit=crop&w=1200&q=82",
      dest: "Sundarbans"
    },
    {
      title: "Bishnupur Terracotta Temple Art",
      desc: "Admire 17th-century terracotta bas-reliefs of Malla kings, listen to classical Bishnupur Gharana, and watch Baluchari silk weaving.",
      tag: "Architecture",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKmv7d9aacOHZXgWN9YF3ACHAzQMpP-10_5okR1IHdLw&s=10",
      fallback: "https://images.unsplash.com/photo-1600100397608-f010f44383c0?auto=format&fit=crop&w=1200&q=82",
      dest: "Bishnupur"
    },
    {
      title: "Mandarmani Red Crab Seashore Sunsets",
      desc: "Stroll along wide flat sandy shores as millions of crimson ghost crabs emerge beneath gentle coastal twilight.",
      tag: "Coastline",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT3g7bc3r5CPE3lVzEmEu_PCPPcmKb5_5XwAr6VV2g3dJzdzuz52aWzno&s=10",
      fallback: "https://images.unsplash.com/photo-1519046995808-161b40265275?auto=format&fit=crop&w=1200&q=82",
      dest: "Mandarmani"
    },
    {
      title: "Kolkata Colonial & Culinary Odysseys",
      desc: "Cross Howrah Bridge, ride vintage trams across the Maidan, watch Durga idols molded at Kumartuli, and feast on biryani and mishti.",
      tag: "City of Joy",
      img: "https://s7ap1.scene7.com/is/image/incredibleindia/1-howrah-bridge-kolkata-west-bengal-city-hero?qlt=82&ts=1742154912631",
      fallback: "https://s7ap1.scene7.com/is/image/incredibleindia/1-victoria-memorial-kolkata-west-bengal-state-hero?qlt=82&ts=1726645133729",
      dest: "Kolkata"
    }
  ];

  const hiddenGems = [
    {
      name: "Lepchajagat & Tinchuley",
      location: "Darjeeling Foothills",
      desc: "Quiet pine-clad ridges providing silent sunrise vistas of Mt. Kanchenjunga away from bustling tourist streets.",
      link: "/destinations/darjeeling"
    },
    {
      name: "Chhilapata Sal Forest & Mendabari",
      location: "Alipurduar, Dooars",
      desc: "Ancient Sal forest corridor connecting Jaldapara and Buxa, home to the historic 5th-century ruins of Nalraja Garh.",
      link: "/destinations/dooars"
    },
    {
      name: "Garhbeta Grand Canyon (Gongoni)",
      location: "Paschim Medinipur",
      desc: "Dramatic reddish-ochre laterite gorge carved by the Silabati River, nicknamed the Grand Canyon of Bengal.",
      link: "/destinations/bishnupur"
    },
    {
      name: "Taki on the Ichamati River",
      location: "North 24 Parganas",
      desc: "A peaceful riverside village where boats glide along the Indo-Bangladesh river border amid vintage Zamindar mansions.",
      link: "/destinations/kolkata"
    }
  ];

  return (
    <>
      <SEO
        title="Explore Bengal — Discover Bengal. Experience the Extraordinary."
        description="Plan independent journeys across West Bengal. Discover Darjeeling, Sundarbans, Digha, Bishnupur, compare transparent tour packages, and book verified hotels."
        schema={generateWebSiteSchema()}
      />

      {/* SECTION A: HERO SECTION */}
      <section className="hero-wrapper" aria-label="Welcome Hero">
        <div className="hero-bg-overlay" />
        <img
          src="https://s7ap1.scene7.com/is/image/incredibleindia/happy-valley-tea-estate-darjeeling-west%20bengal-1-hero?qlt=82&ts=1726643578177"
          alt="Himalayan mountains and tea gardens of West Bengal"
          className="hero-bg-image"
          onError={(e) => {
            if (e.currentTarget.src !== 'https://images.unsplash.com/photo-1544634076-a90160ddf44c?auto=format&fit=crop&w=1920&q=85') {
              e.currentTarget.src = 'https://images.unsplash.com/photo-1544634076-a90160ddf44c?auto=format&fit=crop&w=1920&q=85';
            }
          }}
        />

        <div className="container hero-content">
          <div className="hero-badge">
            <Sparkles size={15} style={{ color: 'var(--color-sunset-orange)' }} />
            <span>The Official Independent Guide to West Bengal</span>
          </div>

          <h1 className="hero-title">
            Discover the Incredible Beauty of West Bengal
          </h1>

          <p className="hero-lead">
            From the misty Himalayas and emerald tea gardens to golden beaches, ancient terracotta temples, and mysterious mangrove wilderness — plan your next unforgettable journey through Bengal.
          </p>

          <div className="hero-actions">
            <Link to="/destinations" className="btn btn-primary btn-lg">
              <span>Explore Destinations</span>
              <ArrowRight size={18} />
            </Link>
            <Link to="/plan-your-trip" className="btn btn-outline-white btn-lg">
              <Compass size={18} />
              <span>Plan Your Trip</span>
            </Link>
          </div>

          {/* Quick Search Box */}
          <form className="hero-search-box" onSubmit={handleHeroSearchSubmit}>
            <div className="search-field-group">
              <label className="search-field-label">
                <MapPin size={14} style={{ color: 'var(--color-sunset-orange)' }} />
                <span>Destination</span>
              </label>
              <select
                className="select-field"
                value={searchDest}
                onChange={(e) => setSearchDest(e.target.value)}
                aria-label="Select destination"
              >
                {DESTINATIONS.map((d) => (
                  <option key={d.id} value={d.slug}>
                    {d.name} ({d.categoryLabel.split(' ')[0]})
                  </option>
                ))}
              </select>
            </div>

            <div className="search-field-group">
              <label className="search-field-label">
                <Compass size={14} style={{ color: 'var(--color-forest-green)' }} />
                <span>Starting Location</span>
              </label>
              <input
                type="text"
                className="input-field"
                placeholder="e.g. Kolkata, Siliguri, Durgapur"
                value={searchOrigin}
                onChange={(e) => setSearchOrigin(e.target.value)}
                aria-label="Starting location"
              />
            </div>

            <div className="search-field-group">
              <label className="search-field-label">
                <Calendar size={14} style={{ color: 'var(--color-forest-green)' }} />
                <span>Travel Month</span>
              </label>
              <select
                className="select-field"
                value={searchMonth}
                onChange={(e) => setSearchMonth(e.target.value)}
                aria-label="Select travel month"
              >
                {['October', 'November', 'December', 'January', 'February', 'March', 'April', 'May', 'Monsoon'].map((m) => (
                  <option key={m} value={m}>{m}</option>
                ))}
              </select>
            </div>

            <div className="search-field-group">
              <label className="search-field-label">
                <Users size={14} style={{ color: 'var(--color-forest-green)' }} />
                <span>Travelers</span>
              </label>
              <select
                className="select-field"
                value={travelers}
                onChange={(e) => setTravelers(e.target.value)}
                aria-label="Number of travelers"
              >
                <option value="1">Solo (1 traveler)</option>
                <option value="2">Couple / Pair (2 travelers)</option>
                <option value="4">Family (4 travelers)</option>
                <option value="6">Group (6+ travelers)</option>
              </select>
            </div>

            <button type="submit" className="btn btn-primary" style={{ height: '48px', padding: '0 1.75rem' }}>
              <span>Search Routes</span>
              <ArrowRight size={16} />
            </button>
          </form>
        </div>
      </section>

      {/* SECTION B: DISCOVER WEST BENGAL (GEOGRAPHY & DIVERSITY) */}
      <section className="section" style={{ background: '#FFFFFF' }}>
        <div className="container">
          <div className="section-title-wrap">
            <span className="section-eyebrow">A Tapestry of Terrains</span>
            <h2>Discover West Bengal's Extraordinary Landscape</h2>
            <p className="section-subtitle">
              West Bengal is the only Indian state spanning from the eternal snows of the Eastern Himalayas to the tropical estuaries of the Bay of Bengal, creating an unrivaled mosaic of ecosystems and living cultures.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            <div style={{ padding: '2rem', background: 'var(--color-warm-sand-light)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'var(--color-forest-green)', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                <Mountain size={24} />
              </div>
              <h3 style={{ fontSize: '1.35rem', marginBottom: '0.6rem', color: 'var(--color-deep-emerald)' }}>The Northern Himalayas</h3>
              <p style={{ fontSize: '0.92rem', color: 'var(--color-charcoal-muted)', lineHeight: '1.6' }}>
                Darjeeling, Kalimpong, and the Singalila Ridge tower above 6,000–12,000 feet, boasting vistas of Kanchenjunga, British tea estates, and Tibetan Buddhist monasteries.
              </p>
            </div>

            <div style={{ padding: '2rem', background: 'var(--color-warm-sand-light)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'var(--color-forest-green)', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                <Trees size={24} />
              </div>
              <h3 style={{ fontSize: '1.35rem', marginBottom: '0.6rem', color: 'var(--color-deep-emerald)' }}>The Delta & Mangroves</h3>
              <p style={{ fontSize: '0.92rem', color: 'var(--color-charcoal-muted)', lineHeight: '1.6' }}>
                The Sundarbans forms the world's largest contiguous tidal mangrove biosphere, a labyrinth of river channels sheltering Royal Bengal Tigers, saltwater crocs, and river dolphins.
              </p>
            </div>

            <div style={{ padding: '2rem', background: 'var(--color-warm-sand-light)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'var(--color-forest-green)', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                <Landmark size={24} />
              </div>
              <h3 style={{ fontSize: '1.35rem', marginBottom: '0.6rem', color: 'var(--color-deep-emerald)' }}>Rarh Bengal & Terracotta</h3>
              <p style={{ fontSize: '0.92rem', color: 'var(--color-charcoal-muted)', lineHeight: '1.6' }}>
                The red laterite soil of Bankura and Birbhum nurtures Bishnupur's 17th-century terracotta temples, Baluchari silks, and Tagore's UNESCO-honored university at Shantiniketan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION C: EXPLORE DESTINATIONS BY CATEGORY */}
      <section className="section" style={{ background: 'var(--color-warm-sand-light)' }}>
        <div className="container">
          <div className="section-title-wrap">
            <span className="section-eyebrow">Tailored Exploration</span>
            <h2>Find Destinations by Travel Style</h2>
            <p className="section-subtitle">
              Whether you yearn for serene mountain heights, coastal waves, wildlife safaris, or ancient architecture — Bengal offers a curated escape.
            </p>
          </div>

          <div className="category-grid">
            {CATEGORIES.filter(c => c.id !== 'all').map((cat) => {
              const Icon = categoryIcons[cat.id] || Compass;
              return (
                <Link
                  key={cat.id}
                  to={`/destinations?category=${cat.id}`}
                  className="category-card"
                  aria-label={`Explore ${cat.name}`}
                >
                  <div className="category-icon-wrap">
                    <Icon size={26} />
                  </div>
                  <h4 className="category-card-title">{cat.name}</h4>
                  <span className="category-card-count">{cat.count} Verified Destinations</span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION D: FEATURED DESTINATIONS */}
      <section className="section" style={{ background: '#FFFFFF' }}>
        <div className="container">
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '3rem', gap: '1.5rem' }}>
            <div>
              <span className="section-eyebrow">Signature Highlights</span>
              <h2>Premier Bengal Destinations</h2>
              <p className="section-subtitle" style={{ margin: 0 }}>
                Explore in-depth travel guides, attractions, transit links, and verified stays.
              </p>
            </div>
            <Link to="/destinations" className="btn btn-outline">
              <span>View All 18 Destinations</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '2rem' }}>
            {DESTINATIONS.slice(0, 6).map((dest) => (
              <DestinationCard key={dest.id} destination={dest} />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION E: POPULAR EXPERIENCES */}
      <section className="section" style={{ background: 'var(--color-deep-emerald)', color: '#FFFFFF' }}>
        <div className="container">
          <div className="section-title-wrap">
            <span className="section-eyebrow" style={{ color: 'var(--color-sunset-orange)' }}>Authentic Moments</span>
            <h2 style={{ color: '#FFFFFF' }}>Unforgettable Bengal Experiences</h2>
            <p className="section-subtitle" style={{ color: 'var(--color-warm-sand)' }}>
              Immerse yourself in authentic cultural, wildlife, and heritage journeys verified by seasoned travelers.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {signatureExperiences.map((exp, idx) => (
              <div
                key={idx}
                style={{
                  background: 'rgba(255, 252, 246, 0.06)',
                  border: '1px solid rgba(244, 235, 221, 0.15)',
                  borderRadius: 'var(--radius-lg)',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <div style={{ height: '200px', overflow: 'hidden' }}>
                  <img
                    src={exp.img}
                    alt={exp.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                    loading="lazy"
                    onError={(e) => {
                      if (exp.fallback && e.currentTarget.src !== exp.fallback) {
                        e.currentTarget.src = exp.fallback;
                      }
                    }}
                  />
                </div>
                <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.6rem' }}>
                    <span className="badge badge-category" style={{ background: 'rgba(232, 139, 82, 0.25)', color: 'var(--color-warm-sand)' }}>
                      {exp.tag}
                    </span>
                    <span style={{ fontSize: '0.8rem', color: 'var(--color-warm-sand)' }}>{exp.dest}</span>
                  </div>
                  <h3 style={{ fontSize: '1.25rem', color: '#FFFFFF', marginBottom: '0.5rem' }}>{exp.title}</h3>
                  <p style={{ fontSize: '0.88rem', color: 'rgba(244, 235, 221, 0.8)', lineHeight: '1.55', marginTop: 'auto' }}>
                    {exp.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION F: POPULAR TOUR PACKAGES TEASER */}
      <section className="section" style={{ background: '#FFFFFF' }}>
        <div className="container">
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '3rem', gap: '1.5rem' }}>
            <div>
              <span className="section-eyebrow">Honest Transparency</span>
              <h2>Transparent Tour Packages</h2>
              <p className="section-subtitle" style={{ margin: 0 }}>
                Every package clearly discloses accommodation grade, vehicle type, meals, activities, and exclusions.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '1rem' }}>
              {comparedPackages?.length > 0 && (
                <button
                  type="button"
                  onClick={onOpenComparison}
                  className="btn btn-primary"
                >
                  <span>Compare ({comparedPackages.length})</span>
                </button>
              )}
              <Link to="/tour-packages" className="btn btn-outline">
                <span>View All Packages</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '2rem' }}>
            {PACKAGES.slice(0, 3).map((pkg) => (
              <PackageCard
                key={pkg.id}
                pkg={pkg}
                onToggleCompare={onToggleCompare}
                isCompared={comparedPackages?.some(p => p.id === pkg.id)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION G: PLAN YOUR OWN JOURNEY (INDEPENDENT PLANNER TEASER) */}
      <section className="section" style={{ background: 'var(--color-warm-sand-light)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3.5rem', alignItems: 'center' }}>
            <div>
              <span className="section-eyebrow">Independent Travel Tool</span>
              <h2>Take Control: Plan Your Journey Without an Agency</h2>
              <p style={{ fontSize: '1.05rem', color: 'var(--color-charcoal-muted)', lineHeight: '1.65', marginBottom: '1.5rem' }}>
                Travelers shouldn't need a commercial tour middleman to explore West Bengal. Our interactive Independent Trip Planner gives you customized day-by-day itineraries, exact Google Maps directions, transit recommendations, and transparent itemized budgets.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'var(--color-forest-green)', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Check size={14} />
                  </div>
                  <span style={{ fontWeight: 600, color: 'var(--color-deep-emerald)' }}>
                    Depart from any city (Kolkata, Siliguri, Asansol, Durgapur, etc.)
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'var(--color-forest-green)', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Check size={14} />
                  </div>
                  <span style={{ fontWeight: 600, color: 'var(--color-deep-emerald)' }}>
                    Itemized cost breakdowns for transport, stays, food, and entry fees
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'var(--color-forest-green)', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Check size={14} />
                  </div>
                  <span style={{ fontWeight: 600, color: 'var(--color-deep-emerald)' }}>
                    Save to browser local storage & generate clean printable itineraries
                  </span>
                </div>
              </div>

              <Link to="/plan-your-trip" className="btn btn-primary btn-lg">
                <Compass size={18} />
                <span>Launch Interactive Trip Planner</span>
                <ArrowRight size={18} />
              </Link>
            </div>

            <div style={{ position: 'relative' }}>
              <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-xl)', border: '1px solid var(--color-border)' }}>
                <img
                  src="https://images.unsplash.com/photo-1544634076-a90160ddf44c?auto=format&fit=crop&w=1000&q=80"
                  alt="Scenic Bengal journey"
                  style={{ width: '100%', height: '380px', objectFit: 'cover' }}
                />
              </div>
              <div style={{ position: 'absolute', bottom: '-1.5rem', left: '-1.5rem', background: '#FFFFFF', padding: '1.25rem 1.75rem', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-lg)', border: '1px solid var(--color-border)', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'var(--color-verified-bg)', color: 'var(--color-verified-text)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <div style={{ fontWeight: 700, color: 'var(--color-deep-emerald)' }}>100% Free & Transparent</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--color-charcoal-muted)' }}>Zero commissions, genuine local guidance</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION H: HOTELS AND RESORTS TEASER */}
      <section className="section" style={{ background: '#FFFFFF' }}>
        <div className="container">
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '3rem', gap: '1.5rem' }}>
            <div>
              <span className="section-eyebrow">Verified Accommodations</span>
              <h2>Authentic Hotels, Lodges & Resorts</h2>
              <p className="section-subtitle" style={{ margin: 0 }}>
                Every property listing includes verified amenities, exact localities, and official booking channels.
              </p>
            </div>
            <Link to="/hotels" className="btn btn-outline">
              <span>View Full Directory</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '2rem' }}>
            {HOTELS.slice(0, 3).map((hotel) => (
              <HotelCard key={hotel.id} hotel={hotel} />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION I: TRAVEL GUIDES TEASER */}
      <section className="section" style={{ background: 'var(--color-warm-sand-light)' }}>
        <div className="container">
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '3rem', gap: '1.5rem' }}>
            <div>
              <span className="section-eyebrow">Practical Wisdom</span>
              <h2>Essential Bengal Travel Guides</h2>
              <p className="section-subtitle" style={{ margin: 0 }}>
                Expert advice on seasons, railway bookings, culinary specialties, and national park permits.
              </p>
            </div>
            <Link to="/travel-guides" className="btn btn-outline">
              <span>Read All Guides</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '2rem' }}>
            {TRAVEL_GUIDES.slice(0, 3).map((guide) => (
              <article key={guide.id} className="card-base" style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ height: '200px', overflow: 'hidden' }}>
                  <img
                    src={guide.heroImage}
                    alt={guide.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    loading="lazy"
                  />
                </div>
                <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem', fontSize: '0.78rem', color: 'var(--color-sunset-orange)', fontWeight: 700, textTransform: 'uppercase' }}>
                    <span>{guide.category}</span>
                    <span>•</span>
                    <span style={{ color: 'var(--color-charcoal-muted)' }}>{guide.readTime}</span>
                  </div>
                  <h3 style={{ fontSize: '1.25rem', color: 'var(--color-deep-emerald)', marginBottom: '0.6rem', lineHeight: '1.3' }}>
                    {guide.title}
                  </h3>
                  <p style={{ fontSize: '0.88rem', color: 'var(--color-charcoal-muted)', lineHeight: '1.55', marginBottom: '1.25rem' }}>
                    {guide.summary}
                  </p>
                  <Link
                    to="/travel-guides"
                    className="dest-card-link"
                    style={{ marginTop: 'auto' }}
                  >
                    <span>Read Article</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION J: CULTURE AND FOOD */}
      <section className="section" style={{ background: '#FFFFFF' }}>
        <div className="container">
          <div className="section-title-wrap">
            <span className="section-eyebrow">Gastronomy & Living Arts</span>
            <h2>The Soul of Bengal: Flavors, Crafts & Festivals</h2>
            <p className="section-subtitle">
              Beyond landscapes, Bengal is defined by poetic intellectualism, master artisans, and a deep culinary love affair.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            <div style={{ padding: '2rem', background: 'var(--color-cream-white)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border)' }}>
              <h3 style={{ fontSize: '1.3rem', color: 'var(--color-deep-emerald)', marginBottom: '0.75rem' }}>The Five Course Feast</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-charcoal-muted)', lineHeight: '1.6' }}>
                From bitter Shukto and white poppy seed Alu Posto to mustard Shorshe Ilish, Golda Chingri Malaikari, and delicate Sandesh confectioneries — mealtime in Bengal is an artistic ritual.
              </p>
            </div>

            <div style={{ padding: '2rem', background: 'var(--color-cream-white)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border)' }}>
              <h3 style={{ fontSize: '1.3rem', color: 'var(--color-deep-emerald)', marginBottom: '0.75rem' }}>Textiles & Handicrafts</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-charcoal-muted)', lineHeight: '1.6' }}>
                Bishnupur's Baluchari silk sarees depicting ancient epics, Birbhum's Kantha embroidery, Bankura's terracotta horses, and tribal Dhokra lost-wax metal castings hold official GI status.
              </p>
            </div>

            <div style={{ padding: '2rem', background: 'var(--color-cream-white)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border)' }}>
              <h3 style={{ fontSize: '1.3rem', color: 'var(--color-deep-emerald)', marginBottom: '0.75rem' }}>Festivals of Art & Joy</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-charcoal-muted)', lineHeight: '1.6' }}>
                Kolkata's UNESCO-inscribed Durga Puja transforms the city into an open-air art gallery, while Shantiniketan's Poush Mela and Basanta Utsav celebrate folk Baul melodies and Rabindrasangeet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION K: HIDDEN GEMS */}
      <section className="section" style={{ background: 'var(--color-deep-emerald)', color: '#FFFFFF' }}>
        <div className="container">
          <div className="section-title-wrap">
            <span className="section-eyebrow" style={{ color: 'var(--color-sunset-orange)' }}>Off the Beaten Path</span>
            <h2 style={{ color: '#FFFFFF' }}>Lesser-Known Hidden Treasures</h2>
            <p className="section-subtitle" style={{ color: 'var(--color-warm-sand)' }}>
              Quiet, untouched sanctuaries across Bengal that offer intimate encounters with nature and heritage.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
            {hiddenGems.map((gem, i) => (
              <div
                key={i}
                style={{
                  background: 'rgba(255, 252, 246, 0.08)',
                  padding: '1.75rem',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid rgba(244, 235, 221, 0.15)'
                }}
              >
                <div style={{ fontSize: '0.78rem', color: 'var(--color-sunset-orange)', textTransform: 'uppercase', fontWeight: 700, marginBottom: '0.3rem' }}>
                  {gem.location}
                </div>
                <h4 style={{ fontSize: '1.2rem', color: '#FFFFFF', marginBottom: '0.6rem' }}>
                  {gem.name}
                </h4>
                <p style={{ fontSize: '0.88rem', color: 'rgba(244, 235, 221, 0.8)', lineHeight: '1.55', marginBottom: '1rem' }}>
                  {gem.desc}
                </p>
                <Link to={gem.link} style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--color-warm-sand)', display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                  <span>Explore Region</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
