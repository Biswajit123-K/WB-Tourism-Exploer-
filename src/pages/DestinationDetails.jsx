import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  MapPin, Clock, Calendar, Compass, Train, Plane, Bus, Navigation, 
  Hotel, Package, Check, AlertCircle, HelpCircle, Utensils, ShoppingBag, 
  ArrowRight, ShieldCheck, ExternalLink 
} from 'lucide-react';
import { getDestinationBySlug, DESTINATIONS } from '../data/destinations.js';
import { getAttractionsByDestination } from '../data/attractions.js';
import { getHotelsByDestination } from '../data/hotels.js';
import { getPackagesByDestination } from '../data/packages.js';
import AttractionCard from '../components/AttractionCard.jsx';
import HotelCard from '../components/HotelCard.jsx';
import PackageCard from '../components/PackageCard.jsx';
import Breadcrumbs from '../components/Breadcrumbs.jsx';
import MapDirections from '../components/MapDirections.jsx';
import SEO from '../components/SEO.jsx';
import { generateTouristDestinationSchema } from '../utils/seo.js';

export default function DestinationDetails({ onToggleCompare, comparedPackages }) {
  const { slug } = useParams();
  const dest = getDestinationBySlug(slug);

  if (!dest) {
    return <Navigate to="/destinations" replace />;
  }

  const attractions = getAttractionsByDestination(dest.slug);
  const hotels = getHotelsByDestination(dest.slug);
  const packages = getPackagesByDestination(dest.slug);
  const nearbyDests = dest.nearbyDestinations
    ? dest.nearbyDestinations.map(s => getDestinationBySlug(s)).filter(Boolean)
    : [];

  return (
    <>
      <SEO
        title={`${dest.name} Travel Guide — Places to Visit, How to Reach, Hotels`}
        description={dest.shortDescription}
        schema={generateTouristDestinationSchema(dest)}
      />

      {/* 1. DESTINATION HERO */}
      <section
        style={{
          position: 'relative',
          minHeight: '65vh',
          display: 'flex',
          alignItems: 'flex-end',
          color: '#FFFFFF',
          overflow: 'hidden'
        }}
      >
        <img
          src={dest.heroImage}
          alt={`Scenic view of ${dest.name}, West Bengal`}
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(to top, rgba(13, 48, 40, 0.95) 0%, rgba(13, 48, 40, 0.4) 60%, rgba(0,0,0,0.2) 100%)'
          }}
        />

        <div className="container" style={{ position: 'relative', zIndex: 2, paddingBottom: '3.5rem', paddingTop: '6rem' }}>
          <Breadcrumbs
            items={[
              { label: 'Destinations', url: '/destinations' },
              { label: dest.name }
            ]}
          />

          <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap', marginBottom: '1rem', marginTop: '1rem' }}>
            <span className="badge badge-category" style={{ background: 'var(--color-sunset-orange)', color: '#FFFFFF' }}>
              {dest.categoryLabel}
            </span>
            {dest.recommendedDuration && (
              <span className="badge" style={{ background: 'rgba(255,252,246,0.95)', color: 'var(--color-deep-emerald)' }}>
                <Clock size={12} />
                <span>Recommended: {dest.recommendedDuration}</span>
              </span>
            )}
          </div>

          <h1 style={{ color: '#FFFFFF', fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '0.75rem', textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>
            {dest.name}
          </h1>

          <p style={{ maxWidth: '780px', color: 'var(--color-warm-sand)', fontSize: 'clamp(1.05rem, 1.8vw, 1.25rem)', lineHeight: '1.6', marginBottom: '2rem' }}>
            {dest.tagline || dest.shortDescription}
          </p>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="#attractions" className="btn btn-primary">
              <span>Famous Attractions</span>
              <ArrowRight size={16} />
            </a>
            <a href="#hotels" className="btn btn-outline-white">
              <Hotel size={16} />
              <span>Verified Stays</span>
            </a>
            <Link to={`/plan-your-trip?destination=${dest.slug}`} className="btn btn-outline-white">
              <Compass size={16} />
              <span>Plan Independent Trip</span>
            </Link>
          </div>
        </div>
      </section>

      {/* QUICK JUMP NAVIGATION BAR */}
      <nav
        aria-label="Page Sections"
        style={{
          position: 'sticky',
          top: '80px',
          zIndex: 400,
          background: '#FFFFFF',
          borderBottom: '1px solid var(--color-border)',
          overflowX: 'auto',
          whiteSpace: 'nowrap'
        }}
      >
        <div className="container" style={{ display: 'flex', gap: '1.5rem', padding: '0.85rem 1.5rem', fontSize: '0.9rem', fontWeight: 600 }}>
          <a href="#about" style={{ color: 'var(--color-deep-emerald)' }}>About</a>
          <a href="#attractions" style={{ color: 'var(--color-deep-emerald)' }}>Attractions ({attractions.length})</a>
          <a href="#best-time" style={{ color: 'var(--color-deep-emerald)' }}>Best Time</a>
          <a href="#how-to-reach" style={{ color: 'var(--color-deep-emerald)' }}>How to Reach</a>
          <a href="#hotels" style={{ color: 'var(--color-deep-emerald)' }}>Hotels ({hotels.length})</a>
          <a href="#itineraries" style={{ color: 'var(--color-deep-emerald)' }}>Suggested Itineraries</a>
          <a href="#food" style={{ color: 'var(--color-deep-emerald)' }}>Food & Crafts</a>
          <a href="#tips" style={{ color: 'var(--color-deep-emerald)' }}>Travel Tips & FAQs</a>
        </div>
      </nav>

      {/* 2. ABOUT THE DESTINATION */}
      <section id="about" className="section" style={{ background: '#FFFFFF' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3.5rem', alignItems: 'start' }}>
            <div>
              <span className="section-eyebrow">Geography, History & Heritage</span>
              <h2>About {dest.name}</h2>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.75', color: 'var(--color-charcoal)', marginBottom: '1.5rem' }}>
                {dest.fullDescription}
              </p>
              <div style={{ background: 'var(--color-warm-sand-light)', padding: '1.25rem 1.5rem', borderRadius: 'var(--radius-md)', borderLeft: '4px solid var(--color-sunset-orange)' }}>
                <div style={{ fontWeight: 700, color: 'var(--color-deep-emerald)', marginBottom: '0.25rem' }}>
                  Trip Planner Perspective:
                </div>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-charcoal-muted)', margin: 0 }}>
                  Can be visited comfortably as an independent {dest.recommendedDuration} journey without commercial agency markup. Connects easily with nearby {nearbyDests.map(d => d.name).join(' & ')}.
                </p>
              </div>
            </div>

            {/* Quick Facts Card */}
            <div className="card-base" style={{ padding: '2rem', background: 'var(--color-cream-white)' }}>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--color-deep-emerald)', marginBottom: '1.25rem', borderBottom: '1px solid var(--color-border)', paddingBottom: '0.75rem' }}>
                Destination Summary
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.9rem' }}>
                <div>
                  <span style={{ color: 'var(--color-charcoal-muted)', display: 'block', fontSize: '0.78rem', textTransform: 'uppercase', fontWeight: 700 }}>
                    Category
                  </span>
                  <span style={{ fontWeight: 600, color: 'var(--color-deep-emerald)' }}>{dest.categoryLabel}</span>
                </div>

                <div>
                  <span style={{ color: 'var(--color-charcoal-muted)', display: 'block', fontSize: '0.78rem', textTransform: 'uppercase', fontWeight: 700 }}>
                    Ideal Pacing
                  </span>
                  <span style={{ fontWeight: 600, color: 'var(--color-deep-emerald)' }}>{dest.recommendedDuration}</span>
                </div>

                <div>
                  <span style={{ color: 'var(--color-charcoal-muted)', display: 'block', fontSize: '0.78rem', textTransform: 'uppercase', fontWeight: 700 }}>
                    Primary Transport Gateway
                  </span>
                  <span style={{ fontWeight: 600, color: 'var(--color-deep-emerald)' }}>
                    {dest.transportInformation?.byTrain?.nearestMajorStation || dest.transportInformation?.byRoad?.primaryHighways}
                  </span>
                </div>

                {dest.coordinates && (
                  <div>
                    <span style={{ color: 'var(--color-charcoal-muted)', display: 'block', fontSize: '0.78rem', textTransform: 'uppercase', fontWeight: 700 }}>
                      Coordinates
                    </span>
                    <span style={{ fontFamily: 'monospace', color: 'var(--color-forest-green)' }}>
                      {dest.coordinates.latitude.toFixed(4)}° N, {dest.coordinates.longitude.toFixed(4)}° E
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FAMOUS ATTRACTIONS DIRECTORY */}
      <section id="attractions" className="section" style={{ background: 'var(--color-warm-sand-light)' }}>
        <div className="container">
          <div className="section-title-wrap">
            <span className="section-eyebrow">Directory of Attractions</span>
            <h2>Places to Visit in {dest.name}</h2>
            <p className="section-subtitle">
              Verified sightseeing landmarks with confirmed visiting hours, entry tariffs, access notes, and direct Google Maps pins.
            </p>
          </div>

          {attractions.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '3rem', background: '#FFFFFF', borderRadius: 'var(--radius-lg)' }}>
              <p style={{ color: 'var(--color-charcoal-muted)' }}>
                Attraction entries for {dest.name} are currently undergoing official field re-verification.
              </p>
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '2rem' }}>
              {attractions.map((attraction) => (
                <AttractionCard key={attraction.id} attraction={attraction} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 4. BEST TIME TO VISIT */}
      <section id="best-time" className="section" style={{ background: '#FFFFFF' }}>
        <div className="container">
          <div className="section-title-wrap">
            <span className="section-eyebrow">Climatic Matrix</span>
            <h2>Best Time to Visit {dest.name}</h2>
            <p className="section-subtitle">
              {dest.bestTimeToVisit.summary}
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
            {dest.bestTimeToVisit.seasons.map((season, idx) => (
              <div
                key={idx}
                style={{
                  background: 'var(--color-warm-sand-light)',
                  padding: '1.75rem',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--color-border)',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                  <h3 style={{ fontSize: '1.15rem', color: 'var(--color-deep-emerald)', margin: 0 }}>
                    {season.name}
                  </h3>
                  <span
                    className={`badge ${
                      season.rating === 'Peak' || season.rating.includes('Peak')
                        ? 'badge-verified'
                        : season.rating === 'Caution' || season.rating === 'Closed'
                        ? 'badge-estimate'
                        : 'badge-sample'
                    }`}
                  >
                    {season.rating}
                  </span>
                </div>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-charcoal-muted)', lineHeight: '1.55', margin: 0 }}>
                  {season.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. HOW TO REACH & MAP DIRECTIONS */}
      <section id="how-to-reach" className="section" style={{ background: 'var(--color-warm-sand-light)' }}>
        <div className="container">
          <div className="section-title-wrap">
            <span className="section-eyebrow">Transit & Connectivity</span>
            <h2>How to Reach {dest.name}</h2>
            <p className="section-subtitle">
              Verified train terminals, nearest flight hubs, highway links, and local transport options.
            </p>
          </div>

          {/* Transport Modes Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
            {/* By Train */}
            {dest.transportInformation.byTrain && (
              <div className="card-base" style={{ padding: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', color: 'var(--color-deep-emerald)' }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: '50%', background: 'var(--color-warm-sand)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Train size={22} />
                  </div>
                  <h3 style={{ fontSize: '1.25rem', margin: 0 }}>By Railway</h3>
                </div>
                <div style={{ fontSize: '0.92rem', color: 'var(--color-charcoal)', lineHeight: '1.6' }}>
                  <p><strong>Nearest Station:</strong> {dest.transportInformation.byTrain.nearestMajorStation}</p>
                  {dest.transportInformation.byTrain.travelTime && (
                    <p><strong>Travel Interval:</strong> {dest.transportInformation.byTrain.travelTime}</p>
                  )}
                  <p style={{ color: 'var(--color-charcoal-muted)', marginTop: '0.5rem', fontSize: '0.85rem' }}>
                    {dest.transportInformation.byTrain.details}
                  </p>
                </div>
              </div>
            )}

            {/* By Air */}
            {dest.transportInformation.byAir && (
              <div className="card-base" style={{ padding: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', color: 'var(--color-deep-emerald)' }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: '50%', background: 'var(--color-warm-sand)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Plane size={22} />
                  </div>
                  <h3 style={{ fontSize: '1.25rem', margin: 0 }}>By Air</h3>
                </div>
                <div style={{ fontSize: '0.92rem', color: 'var(--color-charcoal)', lineHeight: '1.6' }}>
                  <p><strong>Nearest Airport:</strong> {dest.transportInformation.byAir.nearestAirport}</p>
                  {dest.transportInformation.byAir.distanceKm && (
                    <p><strong>Distance to Town:</strong> {dest.transportInformation.byAir.distanceKm} km</p>
                  )}
                  <p style={{ color: 'var(--color-charcoal-muted)', marginTop: '0.5rem', fontSize: '0.85rem' }}>
                    {dest.transportInformation.byAir.details || dest.transportInformation.byAir.travelTime}
                  </p>
                </div>
              </div>
            )}

            {/* By Road & Bus */}
            {dest.transportInformation.byRoad && (
              <div className="card-base" style={{ padding: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', color: 'var(--color-deep-emerald)' }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: '50%', background: 'var(--color-warm-sand)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Bus size={22} />
                  </div>
                  <h3 style={{ fontSize: '1.25rem', margin: 0 }}>By Road & Highway</h3>
                </div>
                <div style={{ fontSize: '0.92rem', color: 'var(--color-charcoal)', lineHeight: '1.6' }}>
                  <p><strong>Corridors:</strong> {dest.transportInformation.byRoad.primaryHighways}</p>
                  {dest.transportInformation.byRoad.routeFromKolkata && (
                    <p><strong>From Kolkata:</strong> {dest.transportInformation.byRoad.routeFromKolkata}</p>
                  )}
                  <p style={{ color: 'var(--color-charcoal-muted)', marginTop: '0.5rem', fontSize: '0.85rem' }}>
                    {dest.transportInformation.byRoad.connectivity}
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Interactive Google Maps Component */}
          <MapDirections
            defaultOrigin="Kolkata, West Bengal"
            defaultDestination={`${dest.name}, West Bengal`}
          />
        </div>
      </section>

      {/* 6. ACCOMMODATION SUGGESTIONS */}
      <section id="hotels" className="section" style={{ background: '#FFFFFF' }}>
        <div className="container">
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '3rem', gap: '1.5rem' }}>
            <div>
              <span className="section-eyebrow">Verified Hospitality</span>
              <h2>Where to Stay in {dest.name}</h2>
              <p className="section-subtitle" style={{ margin: 0 }}>
                Authentic heritage hotels, WBTDC government tourist lodges, and eco-resorts.
              </p>
            </div>
            <Link to="/hotels" className="btn btn-outline">
              <span>View All Bengal Hotels</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          {hotels.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '3rem', background: 'var(--color-warm-sand-light)', borderRadius: 'var(--radius-lg)' }}>
              <p style={{ color: 'var(--color-charcoal-muted)' }}>
                Hotels for {dest.name} are currently being audited for direct verification compliance.
              </p>
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '2rem' }}>
              {hotels.map((hotel) => (
                <HotelCard key={hotel.id} hotel={hotel} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 7. TOUR PACKAGES TEASER */}
      {packages.length > 0 && (
        <section className="section" style={{ background: 'var(--color-warm-sand-light)' }}>
          <div className="container">
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '3rem', gap: '1.5rem' }}>
              <div>
                <span className="section-eyebrow">Transparent Comparisons</span>
                <h2>Tour Packages Covering {dest.name}</h2>
                <p className="section-subtitle" style={{ margin: 0 }}>
                  Compare inclusions, exclusions, and verified tariffs with complete transparency.
                </p>
              </div>
              <Link to="/tour-packages" className="btn btn-outline">
                <span>Compare All Packages</span>
                <ArrowRight size={16} />
              </Link>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '2rem' }}>
              {packages.map((pkg) => (
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
      )}

      {/* 8. SUGGESTED ITINERARIES */}
      <section id="itineraries" className="section" style={{ background: '#FFFFFF' }}>
        <div className="container">
          <div className="section-title-wrap">
            <span className="section-eyebrow">Independent Pacing</span>
            <h2>Suggested Itineraries for {dest.name}</h2>
            <p className="section-subtitle">
              Realistic, unhurried day-by-day plans accounting for mountain winding roads, tidal transfers, and cultural opening hours.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <div className="card-base" style={{ padding: '2rem', borderTop: '4px solid var(--color-forest-green)' }}>
              <span className="badge badge-category" style={{ marginBottom: '1rem' }}>2 Days / 1 Night</span>
              <h3 style={{ fontSize: '1.3rem', color: 'var(--color-deep-emerald)', marginBottom: '0.75rem' }}>
                The Essential Weekend Highlights
              </h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--color-charcoal-muted)', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                Ideal for travelers with limited weekend time. Covers iconic signature sights, local gastronomic highlights, and an unhurried sunset.
              </p>
              <Link to={`/plan-your-trip?destination=${dest.slug}&days=2`} className="btn btn-outline btn-sm">
                <span>Customize in Trip Planner</span>
                <ArrowRight size={14} />
              </Link>
            </div>

            <div className="card-base" style={{ padding: '2rem', borderTop: '4px solid var(--color-sunset-orange)' }}>
              <span className="badge badge-category" style={{ marginBottom: '1rem' }}>3 Days / 2 Nights</span>
              <h3 style={{ fontSize: '1.3rem', color: 'var(--color-deep-emerald)', marginBottom: '0.75rem' }}>
                The Complete Immersion
              </h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--color-charcoal-muted)', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                Our recommended duration. Allows sunrise viewing, leisurely visits to historic monasteries or coastal bars, artisan workshops, and authentic regional dining.
              </p>
              <Link to={`/plan-your-trip?destination=${dest.slug}&days=3`} className="btn btn-primary btn-sm">
                <span>Customize in Trip Planner</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 9. LOCAL FOOD & SHOPPING */}
      {dest.foodAndShopping && (
        <section id="food" className="section" style={{ background: 'var(--color-warm-sand-light)' }}>
          <div className="container">
            <div className="section-title-wrap">
              <span className="section-eyebrow">Gastronomy & Bazaars</span>
              <h2>Local Specialties & Artisan Shopping</h2>
              <p className="section-subtitle">
                Do not leave {dest.name} without tasting these authentic delicacies and browsing local cooperatives.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
              <div className="card-base" style={{ padding: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.25rem', color: 'var(--color-deep-emerald)' }}>
                  <Utensils size={22} style={{ color: 'var(--color-sunset-orange)' }} />
                  <h3 style={{ fontSize: '1.3rem', margin: 0 }}>What to Eat & Drink</h3>
                </div>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', padding: 0 }}>
                  {dest.foodAndShopping.specialties.map((item, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.92rem', color: 'var(--color-charcoal)' }}>
                      <Check size={16} style={{ color: 'var(--color-forest-green)', flexShrink: 0, marginTop: '3px' }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="card-base" style={{ padding: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.25rem', color: 'var(--color-deep-emerald)' }}>
                  <ShoppingBag size={22} style={{ color: 'var(--color-forest-green)' }} />
                  <h3 style={{ fontSize: '1.3rem', margin: 0 }}>Where to Shop for Souvenirs</h3>
                </div>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', padding: 0 }}>
                  {dest.foodAndShopping.shoppingSpots.map((item, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.92rem', color: 'var(--color-charcoal)' }}>
                      <Check size={16} style={{ color: 'var(--color-sunset-orange)', flexShrink: 0, marginTop: '3px' }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 10 & 11. TRAVEL TIPS & FAQS */}
      <section id="tips" className="section" style={{ background: '#FFFFFF' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3.5rem' }}>
            {/* Travel Tips */}
            <div>
              <span className="section-eyebrow">Practical Wisdom</span>
              <h2>Travel Tips & Advisory</h2>
              <p style={{ color: 'var(--color-charcoal-muted)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
                Practical advice regarding local customs, environmental regulations, and seasonal preparations.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {dest.travelTips?.map((tip, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', background: 'var(--color-warm-sand-light)', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
                    <ShieldCheck size={18} style={{ color: 'var(--color-forest-green)', flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ fontSize: '0.9rem', color: 'var(--color-charcoal)', lineHeight: '1.5' }}>{tip}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQs */}
            <div>
              <span className="section-eyebrow">Frequently Asked Questions</span>
              <h2>Common Traveler Questions</h2>
              <p style={{ color: 'var(--color-charcoal-muted)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
                Clear answers to actual questions asked by independent visitors.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {dest.faqs?.map((faq, i) => (
                  <div key={i} style={{ borderBottom: '1px solid var(--color-border)', paddingBottom: '1rem' }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', marginBottom: '0.4rem', color: 'var(--color-deep-emerald)', fontWeight: 700, fontSize: '1rem' }}>
                      <HelpCircle size={17} style={{ color: 'var(--color-sunset-orange)', flexShrink: 0, marginTop: '3px' }} />
                      <span>{faq.question}</span>
                    </div>
                    <p style={{ fontSize: '0.9rem', color: 'var(--color-charcoal-muted)', lineHeight: '1.6', paddingLeft: '1.65rem', margin: 0 }}>
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 12. NEARBY DESTINATIONS */}
      {nearbyDests.length > 0 && (
        <section className="section" style={{ background: 'var(--color-warm-sand-light)' }}>
          <div className="container">
            <div className="section-title-wrap">
              <span className="section-eyebrow">Circuit Extensions</span>
              <h2>Nearby Connected Destinations</h2>
              <p className="section-subtitle">
                Easily combine {dest.name} with these geographically proximate destinations.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
              {nearbyDests.map((nd) => (
                <div key={nd.id} className="card-base" style={{ display: 'flex', flexDirection: 'column' }}>
                  <div style={{ height: '180px', overflow: 'hidden' }}>
                    <img src={nd.heroImage} alt={nd.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                    <span className="badge badge-category" style={{ alignSelf: 'flex-start', marginBottom: '0.5rem' }}>
                      {nd.categoryLabel}
                    </span>
                    <h3 style={{ fontSize: '1.25rem', color: 'var(--color-deep-emerald)', marginBottom: '0.5rem' }}>{nd.name}</h3>
                    <p style={{ fontSize: '0.88rem', color: 'var(--color-charcoal-muted)', lineHeight: '1.55', marginBottom: '1.25rem' }}>
                      {nd.shortDescription}
                    </p>
                    <Link to={`/destinations/${nd.slug}`} className="dest-card-link" style={{ marginTop: 'auto' }}>
                      <span>View Destination Guide</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
