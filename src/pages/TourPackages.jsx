import React, { useState, useMemo } from 'react';
import { Layers, Search, Filter, X, ArrowRight, ShieldCheck, Check } from 'lucide-react';
import { PACKAGES } from '../data/packages.js';
import PackageCard from '../components/PackageCard.jsx';
import Breadcrumbs from '../components/Breadcrumbs.jsx';
import SEO from '../components/SEO.jsx';

export default function TourPackages({
  onOpenComparison,
  onToggleCompare,
  comparedPackages = [],
  onClearComparison
}) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDuration, setSelectedDuration] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredPackages = useMemo(() => {
    return PACKAGES.filter((pkg) => {
      // Category filter
      if (selectedCategory !== 'all' && pkg.category.toLowerCase() !== selectedCategory.toLowerCase()) {
        return false;
      }

      // Duration filter
      if (selectedDuration !== 'all') {
        if (selectedDuration === 'short' && pkg.durationDays > 3) return false;
        if (selectedDuration === 'medium' && (pkg.durationDays <= 3 || pkg.durationDays > 4)) return false;
        if (selectedDuration === 'long' && pkg.durationDays <= 4) return false;
      }

      // Keyword search
      if (searchQuery.trim().length > 0) {
        const q = searchQuery.toLowerCase();
        const matchesName = pkg.name.toLowerCase().includes(q);
        const matchesTag = pkg.tagline.toLowerCase().includes(q);
        const matchesDest = pkg.destinations.some((d) => d.toLowerCase().includes(q));
        if (!matchesName && !matchesTag && !matchesDest) return false;
      }

      return true;
    });
  }, [selectedCategory, selectedDuration, searchQuery]);

  return (
    <>
      <SEO
        title="Compare West Bengal Tour Packages — Transparent Pricing"
        description="Transparent West Bengal tour packages for Darjeeling, Sundarbans, Dooars, Digha, and Bishnupur. Side-by-side comparison matrix of inclusions, exclusions, and verified prices."
      />

      {/* Header */}
      <div style={{ background: 'var(--color-warm-sand-light)', borderBottom: '1px solid var(--color-border)', padding: '2.5rem 0' }}>
        <div className="container">
          <Breadcrumbs items={[{ label: 'Tour Packages' }]} />
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--color-deep-emerald)', marginTop: '0.5rem', marginBottom: '0.75rem' }}>
            Transparent Tour Packages & Comparison
          </h1>
          <p style={{ maxWidth: '760px', fontSize: '1.05rem', color: 'var(--color-charcoal-muted)', margin: 0 }}>
            Every package published here clearly states its hotel standard, vehicle class, included meals, activities, and exclusions. Compare up to 3 packages side by side.
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
              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: 'var(--color-deep-emerald)', marginBottom: '0.4rem', textTransform: 'uppercase' }}>
                  Search Packages
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

              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: 'var(--color-deep-emerald)', marginBottom: '0.4rem', textTransform: 'uppercase' }}>
                  Region / Theme
                </label>
                <select
                  className="select-field"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  <option value="all">All Themes</option>
                  <option value="mountain">Himalayan Mountains</option>
                  <option value="wildlife">Forests & Wildlife</option>
                  <option value="beach">Coastal Escapes</option>
                  <option value="heritage">Heritage & Terracotta</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: 'var(--color-deep-emerald)', marginBottom: '0.4rem', textTransform: 'uppercase' }}>
                  Duration
                </label>
                <select
                  className="select-field"
                  value={selectedDuration}
                  onChange={(e) => setSelectedDuration(e.target.value)}
                >
                  <option value="all">Any Duration</option>
                  <option value="short">2 - 3 Days (Weekend Escapes)</option>
                  <option value="medium">4 - 5 Days (Full Circuits)</option>
                  <option value="long">5+ Days (Extended Tours)</option>
                </select>
              </div>

              <div>
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('all');
                    setSelectedDuration('all');
                  }}
                  className="btn btn-outline"
                  style={{ width: '100%', height: '48px', padding: 0, justifyContent: 'center' }}
                >
                  <X size={16} />
                  <span>Reset Filters</span>
                </button>
              </div>
            </div>
          </div>

          {/* Results Summary and Floating Comparison Prompt */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
            <span style={{ fontWeight: 600, color: 'var(--color-deep-emerald)' }}>
              Showing {filteredPackages.length} of {PACKAGES.length} Tour Packages
            </span>

            {comparedPackages.length > 0 && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span style={{ fontSize: '0.88rem', color: 'var(--color-charcoal-muted)' }}>
                  <strong>{comparedPackages.length}</strong> package(s) ready to compare
                </span>
                <button
                  type="button"
                  onClick={onOpenComparison}
                  className="btn btn-primary btn-sm"
                  style={{ gap: '0.4rem' }}
                >
                  <Layers size={16} />
                  <span>Launch Comparison</span>
                </button>
              </div>
            )}
          </div>

          {/* Package Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '2rem' }}>
            {filteredPackages.map((pkg) => (
              <PackageCard
                key={pkg.id}
                pkg={pkg}
                onToggleCompare={onToggleCompare}
                isCompared={comparedPackages.some((p) => p.id === pkg.id)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Floating Bottom Comparison Tray when packages are selected */}
      {comparedPackages.length > 0 && (
        <aside
          aria-label="Package Comparison Dock"
          style={{
            position: 'fixed',
            bottom: '1.5rem',
            left: '50%',
            transform: 'translateX(-50%)',
            background: 'rgba(13, 48, 40, 0.95)',
            color: '#FFFFFF',
            padding: '0.85rem 1.5rem',
            borderRadius: 'var(--radius-full)',
            boxShadow: 'var(--shadow-xl)',
            backdropFilter: 'blur(10px)',
            zIndex: 900,
            display: 'flex',
            alignItems: 'center',
            gap: '1.25rem'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', fontWeight: 600 }}>
            <Layers size={18} style={{ color: 'var(--color-sunset-orange)' }} />
            <span>{comparedPackages.length} Package(s) Selected</span>
          </div>

          <button
            type="button"
            onClick={onOpenComparison}
            className="btn btn-primary btn-sm"
            style={{ padding: '0.4rem 1rem' }}
          >
            <span>Compare Now</span>
            <ArrowRight size={14} />
          </button>

          <button
            type="button"
            onClick={onClearComparison}
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(255,255,255,0.7)', fontSize: '0.78rem' }}
          >
            Clear
          </button>
        </aside>
      )}
    </>
  );
}
