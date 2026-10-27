import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, Filter, X, MapPin, Compass } from 'lucide-react';
import { DESTINATIONS, CATEGORIES } from '../data/destinations.js';
import DestinationCard from '../components/DestinationCard.jsx';
import Breadcrumbs from '../components/Breadcrumbs.jsx';
import SEO from '../components/SEO.jsx';

export default function Destinations() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedDuration, setSelectedDuration] = useState('all');

  const filteredDestinations = useMemo(() => {
    return DESTINATIONS.filter((dest) => {
      // Category filter
      if (selectedCategory !== 'all' && dest.category.toLowerCase() !== selectedCategory.toLowerCase()) {
        return false;
      }

      // Duration filter
      if (selectedDuration !== 'all') {
        if (selectedDuration === 'short' && !dest.recommendedDuration.includes('1-2') && !dest.recommendedDuration.includes('2 Days')) {
          return false;
        }
        if (selectedDuration === 'medium' && !dest.recommendedDuration.includes('2-3') && !dest.recommendedDuration.includes('3 Days')) {
          return false;
        }
        if (selectedDuration === 'long' && !dest.recommendedDuration.includes('3-4') && !dest.recommendedDuration.includes('4')) {
          return false;
        }
      }

      // Keyword search
      if (searchQuery.trim().length > 0) {
        const q = searchQuery.toLowerCase();
        const matchesName = dest.name.toLowerCase().includes(q);
        const matchesDesc = dest.shortDescription.toLowerCase().includes(q);
        const matchesCat = dest.categoryLabel.toLowerCase().includes(q);
        if (!matchesName && !matchesDesc && !matchesCat) {
          return false;
        }
      }

      return true;
    });
  }, [selectedCategory, selectedDuration, searchQuery]);

  const handleClearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setSelectedDuration('all');
    setSearchParams({});
  };

  return (
    <>
      <SEO
        title="Destinations in West Bengal — Complete Travel Guides"
        description="Explore 18 verified tourist destinations across West Bengal: Darjeeling, Sundarbans, Digha, Mandarmani, Dooars, Bishnupur, and Shantiniketan with transport, stays, and attractions."
      />

      <div style={{ background: 'var(--color-warm-sand-light)', borderBottom: '1px solid var(--color-border)', padding: '2.5rem 0' }}>
        <div className="container">
          <Breadcrumbs items={[{ label: 'Destinations' }]} />
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--color-deep-emerald)', marginTop: '0.5rem', marginBottom: '0.75rem' }}>
            Explore West Bengal Destinations
          </h1>
          <p style={{ maxWidth: '720px', fontSize: '1.05rem', color: 'var(--color-charcoal-muted)', margin: 0 }}>
            From high Himalayan ridges to coastal casuarina shores and UNESCO mangrove forests — browse verified destinations with practical independent travel intelligence.
          </p>
        </div>
      </div>

      <div className="section" style={{ background: '#FFFFFF' }}>
        <div className="container">
          {/* Filter Bar */}
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
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem', alignItems: 'end' }}>
              {/* Keyword Search */}
              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: 'var(--color-deep-emerald)', marginBottom: '0.4rem', textTransform: 'uppercase' }}>
                  Search by Destination
                </label>
                <div style={{ position: 'relative' }}>
                  <Search size={16} style={{ position: 'absolute', top: '50%', left: '0.85rem', transform: 'translateY(-50%)', color: 'var(--color-charcoal-muted)' }} />
                  <input
                    type="text"
                    className="input-field"
                    style={{ paddingLeft: '2.4rem' }}
                    placeholder="e.g. Darjeeling, Sundarbans..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>

              {/* Category Filter */}
              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: 'var(--color-deep-emerald)', marginBottom: '0.4rem', textTransform: 'uppercase' }}>
                  Category
                </label>
                <select
                  className="select-field"
                  value={selectedCategory}
                  onChange={(e) => {
                    setSelectedCategory(e.target.value);
                    if (e.target.value === 'all') {
                      searchParams.delete('category');
                      setSearchParams(searchParams);
                    } else {
                      setSearchParams({ category: e.target.value });
                    }
                  }}
                >
                  {CATEGORIES.map((cat) => (
                    <option key={cat.id} value={cat.id}>
                      {cat.name} ({cat.count})
                    </option>
                  ))}
                </select>
              </div>

              {/* Duration Filter */}
              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: 'var(--color-deep-emerald)', marginBottom: '0.4rem', textTransform: 'uppercase' }}>
                  Trip Duration
                </label>
                <select
                  className="select-field"
                  value={selectedDuration}
                  onChange={(e) => setSelectedDuration(e.target.value)}
                >
                  <option value="all">Any Duration</option>
                  <option value="short">1 - 2 Days (Weekend Quick Trips)</option>
                  <option value="medium">2 - 3 Days (Standard Holidays)</option>
                  <option value="long">3 - 4+ Days (Extended Circuits)</option>
                </select>
              </div>

              {/* Clear Filters Button */}
              <div>
                <button
                  type="button"
                  onClick={handleClearFilters}
                  className="btn btn-outline"
                  style={{ width: '100%', height: '48px', padding: 0, justifyContent: 'center' }}
                >
                  <X size={16} />
                  <span>Reset Filters</span>
                </button>
              </div>
            </div>

            {/* Active Chips */}
            {(selectedCategory !== 'all' || selectedDuration !== 'all' || searchQuery) && (
              <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid var(--color-border)', display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap', fontSize: '0.85rem' }}>
                <span style={{ color: 'var(--color-charcoal-muted)', fontWeight: 600 }}>Active Filters:</span>
                {selectedCategory !== 'all' && (
                  <span className="badge badge-category">
                    Category: {selectedCategory}
                  </span>
                )}
                {selectedDuration !== 'all' && (
                  <span className="badge badge-category">
                    Duration: {selectedDuration}
                  </span>
                )}
                {searchQuery && (
                  <span className="badge badge-category">
                    Keyword: "{searchQuery}"
                  </span>
                )}
              </div>
            )}
          </div>

          {/* Results Count */}
          <div style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontWeight: 600, color: 'var(--color-deep-emerald)' }}>
              Showing {filteredDestinations.length} of {DESTINATIONS.length} Destinations
            </span>
          </div>

          {/* Destination Grid or Empty State */}
          {filteredDestinations.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '4rem 1rem', background: 'var(--color-warm-sand-light)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border)' }}>
              <Compass size={48} style={{ color: 'var(--color-sunset-orange)', marginBottom: '1rem' }} />
              <h3 style={{ fontSize: '1.4rem', color: 'var(--color-deep-emerald)', marginBottom: '0.5rem' }}>
                No destinations match your search criteria
              </h3>
              <p style={{ color: 'var(--color-charcoal-muted)', maxWidth: '420px', margin: '0 auto 1.5rem', fontSize: '0.92rem' }}>
                Try loosening your filters or resetting the keyword search to discover all available West Bengal destinations.
              </p>
              <button type="button" onClick={handleClearFilters} className="btn btn-primary btn-sm">
                Reset All Filters
              </button>
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '2rem' }}>
              {filteredDestinations.map((dest) => (
                <DestinationCard key={dest.id} destination={dest} />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
