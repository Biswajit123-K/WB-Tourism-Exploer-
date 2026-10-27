import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, Filter, X, ShieldCheck, MapPin, Building, Sparkles } from 'lucide-react';
import { HOTELS } from '../data/hotels.js';
import { DESTINATIONS } from '../data/destinations.js';
import HotelCard from '../components/HotelCard.jsx';
import Breadcrumbs from '../components/Breadcrumbs.jsx';
import SEO from '../components/SEO.jsx';

export default function Hotels() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialDestination = searchParams.get('destination') || 'all';

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDestination, setSelectedDestination] = useState(initialDestination);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');

  const filteredHotels = useMemo(() => {
    return HOTELS.filter((hotel) => {
      // Destination filter
      if (selectedDestination !== 'all' && hotel.destinationSlug.toLowerCase() !== selectedDestination.toLowerCase()) {
        return false;
      }

      // Category filter
      if (selectedCategory !== 'all' && hotel.category.toLowerCase() !== selectedCategory.toLowerCase()) {
        return false;
      }

      // Price filter
      if (selectedPriceRange !== 'all') {
        const amt = hotel.price.amount;
        if (selectedPriceRange === 'under-3000' && amt >= 3000) return false;
        if (selectedPriceRange === '3000-6000' && (amt < 3000 || amt > 6000)) return false;
        if (selectedPriceRange === 'above-6000' && amt <= 6000) return false;
      }

      // Keyword search
      if (searchQuery.trim().length > 0) {
        const q = searchQuery.toLowerCase();
        const matchesName = hotel.name.toLowerCase().includes(q);
        const matchesLoc = hotel.locality.toLowerCase().includes(q);
        const matchesDest = hotel.destinationName.toLowerCase().includes(q);
        if (!matchesName && !matchesLoc && !matchesDest) return false;
      }

      return true;
    });
  }, [selectedDestination, selectedCategory, selectedPriceRange, searchQuery]);

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedDestination('all');
    setSelectedCategory('all');
    setSelectedPriceRange('all');
    setSearchParams({});
  };

  return (
    <>
      <SEO
        title="Verified Hotels & Resorts in West Bengal — Honest Tariffs & Direct Links"
        description="Discover authentic accommodation in Darjeeling, Digha, Mandarmani, Sundarbans, and Shantiniketan. Verified from official property and trusted booking sources without hidden markups."
      />

      {/* Header */}
      <div style={{ background: 'var(--color-warm-sand-light)', borderBottom: '1px solid var(--color-border)', padding: '2.5rem 0' }}>
        <div className="container">
          <Breadcrumbs items={[{ label: 'Hotels & Resorts' }]} />
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--color-deep-emerald)', marginTop: '0.5rem', marginBottom: '0.75rem' }}>
            Verified Hotels, Resorts & Homestays
          </h1>
          <p style={{ maxWidth: '760px', fontSize: '1.05rem', color: 'var(--color-charcoal-muted)', margin: 0 }}>
            Every accommodation listing on Explore Bengal carries verified sources, transparent price bases, and official property links. No hidden booking markups.
          </p>
        </div>
      </div>

      <div className="section" style={{ background: '#FFFFFF' }}>
        <div className="container">
          {/* Trust Banner */}
          <div style={{ background: 'var(--color-verified-bg)', border: '1px solid var(--color-verified-border)', padding: '1.25rem 1.5rem', borderRadius: 'var(--radius-lg)', marginBottom: '2.5rem', display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <div style={{ width: '42px', height: '42px', borderRadius: '50%', background: 'var(--color-forest-green)', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <ShieldCheck size={22} />
            </div>
            <div style={{ flexGrow: 1 }}>
              <div style={{ fontWeight: 700, color: 'var(--color-verified-text)', fontSize: '0.98rem' }}>
                Zero Commission & Direct Property Booking
              </div>
              <div style={{ fontSize: '0.85rem', color: 'var(--color-verified-text)', opacity: 0.9 }}>
                We connect you directly with official property reservation portals and government tourism lodges (WBTDCL).
              </div>
            </div>
          </div>

          {/* Filters Bar */}
          <div
            style={{
              background: '#FFFFFF',
              border: '1.5px solid var(--color-border)',
              borderRadius: 'var(--radius-lg)',
              padding: '1.5rem',
              marginBottom: '3rem',
              boxShadow: 'var(--shadow-sm)'
            }}
          >
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: '1.25rem', alignItems: 'end' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: 'var(--color-deep-emerald)', marginBottom: '0.4rem', textTransform: 'uppercase' }}>
                  Search Hotel Name / Area
                </label>
                <div style={{ position: 'relative' }}>
                  <Search size={16} style={{ position: 'absolute', top: '50%', left: '0.85rem', transform: 'translateY(-50%)', color: 'var(--color-charcoal-muted)' }} />
                  <input
                    type="text"
                    className="input-field"
                    style={{ paddingLeft: '2.4rem' }}
                    placeholder="e.g. Elgin, WBTDC..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: 'var(--color-deep-emerald)', marginBottom: '0.4rem', textTransform: 'uppercase' }}>
                  Destination
                </label>
                <select
                  className="select-field"
                  value={selectedDestination}
                  onChange={(e) => setSelectedDestination(e.target.value)}
                >
                  <option value="all">All Destinations</option>
                  {DESTINATIONS.map((d) => (
                    <option key={d.id} value={d.slug}>{d.name}</option>
                  ))}
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: 'var(--color-deep-emerald)', marginBottom: '0.4rem', textTransform: 'uppercase' }}>
                  Property Type
                </label>
                <select
                  className="select-field"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  <option value="all">All Types</option>
                  <option value="mid-range">Mid-Range / Government Lodge</option>
                  <option value="premium">Premium / Heritage Luxury</option>
                  <option value="resort">Beach & Jungle Resorts</option>
                  <option value="budget">Homestay / Budget</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: 'var(--color-deep-emerald)', marginBottom: '0.4rem', textTransform: 'uppercase' }}>
                  Price Tier
                </label>
                <select
                  className="select-field"
                  value={selectedPriceRange}
                  onChange={(e) => setSelectedPriceRange(e.target.value)}
                >
                  <option value="all">All Budgets</option>
                  <option value="under-3000">Under ₹3,000 / night</option>
                  <option value="3000-6000">₹3,000 - ₹6,000 / night</option>
                  <option value="above-6000">Above ₹6,000 / night</option>
                </select>
              </div>

              <div>
                <button
                  type="button"
                  onClick={handleResetFilters}
                  className="btn btn-outline"
                  style={{ width: '100%', height: '48px', padding: 0, justifyContent: 'center' }}
                >
                  <X size={16} />
                  <span>Reset Filters</span>
                </button>
              </div>
            </div>
          </div>

          {/* Results Count */}
          <div style={{ marginBottom: '2rem' }}>
            <span style={{ fontWeight: 600, color: 'var(--color-deep-emerald)' }}>
              Showing {filteredHotels.length} of {HOTELS.length} Verified Properties
            </span>
          </div>

          {/* Hotel Grid */}
          {filteredHotels.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '4rem 1rem', background: 'var(--color-warm-sand-light)', borderRadius: 'var(--radius-lg)' }}>
              <Building size={48} style={{ color: 'var(--color-sunset-orange)', marginBottom: '1rem' }} />
              <h3 style={{ fontSize: '1.35rem', color: 'var(--color-deep-emerald)', marginBottom: '0.5rem' }}>
                No properties match your filter preferences
              </h3>
              <p style={{ color: 'var(--color-charcoal-muted)', maxWidth: '420px', margin: '0 auto 1.5rem', fontSize: '0.92rem' }}>
                Try selecting "All Destinations" or clearing price filters to see more verified options.
              </p>
              <button type="button" onClick={handleResetFilters} className="btn btn-primary btn-sm">
                Reset Filters
              </button>
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '2rem' }}>
              {filteredHotels.map((hotel) => (
                <HotelCard key={hotel.id} hotel={hotel} />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
