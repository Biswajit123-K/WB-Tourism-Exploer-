import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, MapPin, Package, Hotel, BookOpen, Compass, ArrowRight } from 'lucide-react';
import { DESTINATIONS } from '../data/destinations.js';
import { ATTRACTIONS } from '../data/attractions.js';
import { PACKAGES } from '../data/packages.js';
import { HOTELS } from '../data/hotels.js';
import { TRAVEL_GUIDES } from '../data/travelGuides.js';

export default function SearchModal({ isOpen, onClose }) {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  // Focus input when modal opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setQuery('');
      setSelectedIndex(0);
    }
  }, [isOpen]);

  // Global keydown listener for Esc and Ctrl/Cmd+K
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) {
          onClose();
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const trimmed = query.trim().toLowerCase();

  // Aggregate results across entities
  let results = [];

  if (trimmed.length > 0) {
    // 1. Destinations
    DESTINATIONS.filter(
      (d) =>
        d.name.toLowerCase().includes(trimmed) ||
        d.categoryLabel.toLowerCase().includes(trimmed) ||
        d.shortDescription.toLowerCase().includes(trimmed)
    ).forEach((d) => {
      results.push({
        type: 'destination',
        title: d.name,
        subtitle: `${d.categoryLabel} • ${d.recommendedDuration}`,
        url: `/destinations/${d.slug}`,
        icon: MapPin,
        badgeClass: 'type-destination'
      });
    });

    // 2. Attractions
    ATTRACTIONS.filter(
      (a) =>
        a.name.toLowerCase().includes(trimmed) ||
        a.description.toLowerCase().includes(trimmed) ||
        a.location.toLowerCase().includes(trimmed)
    ).slice(0, 4).forEach((a) => {
      results.push({
        type: 'attraction',
        title: a.name,
        subtitle: `Attraction in ${a.destinationSlug.toUpperCase()} • ${a.suggestedDuration}`,
        url: `/destinations/${a.destinationSlug}`,
        icon: Compass,
        badgeClass: 'type-destination'
      });
    });

    // 3. Tour Packages
    PACKAGES.filter(
      (p) =>
        p.name.toLowerCase().includes(trimmed) ||
        p.destinations.some((dest) => dest.toLowerCase().includes(trimmed)) ||
        p.tagline.toLowerCase().includes(trimmed)
    ).forEach((p) => {
      results.push({
        type: 'package',
        title: p.name,
        subtitle: `${p.duration} • ₹${p.pricing.amount} ${p.pricing.basis}`,
        url: `/tour-packages/${p.slug}`,
        icon: Package,
        badgeClass: 'type-package'
      });
    });

    // 4. Hotels & Resorts
    HOTELS.filter(
      (h) =>
        h.name.toLowerCase().includes(trimmed) ||
        h.destinationName.toLowerCase().includes(trimmed) ||
        h.categoryLabel.toLowerCase().includes(trimmed)
    ).forEach((h) => {
      results.push({
        type: 'hotel',
        title: h.name,
        subtitle: `${h.destinationName} • ${h.categoryLabel} • ₹${h.price.amount}/night`,
        url: `/hotels`,
        icon: Hotel,
        badgeClass: 'type-hotel'
      });
    });

    // 5. Travel Guides
    TRAVEL_GUIDES.filter(
      (g) =>
        g.title.toLowerCase().includes(trimmed) ||
        g.category.toLowerCase().includes(trimmed) ||
        g.summary.toLowerCase().includes(trimmed)
    ).forEach((g) => {
      results.push({
        type: 'guide',
        title: g.title,
        subtitle: `${g.category} • ${g.readTime}`,
        url: `/travel-guides`,
        icon: BookOpen,
        badgeClass: 'type-guide'
      });
    });
  }

  const handleSelectResult = (item) => {
    onClose();
    navigate(item.url);
  };

  const handleInputKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (results.length > 0 ? (prev + 1) % results.length : 0));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (results.length > 0 ? (prev - 1 + results.length) % results.length : 0));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (results[selectedIndex]) {
        handleSelectResult(results[selectedIndex]);
      }
    }
  };

  return (
    <div className="search-modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="search-modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Input Bar */}
        <div className="search-modal-input-wrap">
          <Search size={22} style={{ color: 'var(--color-forest-green)', flexShrink: 0 }} />
          <input
            ref={inputRef}
            type="text"
            className="search-modal-input"
            placeholder="Search destinations, packages, hotels, guides..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            onKeyDown={handleInputKeyDown}
            aria-label="Search site content"
          />
          {query ? (
            <button
              type="button"
              onClick={() => setQuery('')}
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-charcoal-muted)' }}
              aria-label="Clear search"
            >
              <X size={18} />
            </button>
          ) : (
            <kbd className="search-kbd">ESC</kbd>
          )}
        </div>

        {/* Results List */}
        <div className="search-modal-results">
          {trimmed.length === 0 ? (
            <div style={{ padding: '1.5rem', color: 'var(--color-charcoal-muted)' }}>
              <div style={{ fontSize: '0.82rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.75rem', letterSpacing: '0.05em' }}>
                Popular Searches
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {['Darjeeling', 'Sundarbans', 'Digha', 'Toy Train', 'Bishnupur', 'Mandarmani', 'Kalimpong', 'Dooars Safari'].map((term) => (
                  <button
                    key={term}
                    type="button"
                    onClick={() => setQuery(term)}
                    className="badge badge-category"
                    style={{ cursor: 'pointer', padding: '0.45rem 0.85rem' }}
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          ) : results.length === 0 ? (
            <div style={{ padding: '2.5rem 1.5rem', textAlign: 'center', color: 'var(--color-charcoal-muted)' }}>
              <p style={{ fontWeight: 600, color: 'var(--color-deep-emerald)', marginBottom: '0.4rem' }}>
                No results found for "{query}"
              </p>
              <p style={{ fontSize: '0.9rem' }}>
                Try searching for a destination like "Darjeeling", a transport mode, or "Tour Packages".
              </p>
            </div>
          ) : (
            results.map((item, index) => {
              const Icon = item.icon;
              const isSelected = index === selectedIndex;
              return (
                <div
                  key={`${item.type}-${item.title}-${index}`}
                  className={`search-result-item ${isSelected ? 'selected' : ''}`}
                  onClick={() => handleSelectResult(item)}
                  onMouseEnter={() => setSelectedIndex(index)}
                  role="button"
                  tabIndex={0}
                >
                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '8px',
                      background: 'var(--color-warm-sand)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      color: 'var(--color-deep-emerald)'
                    }}
                  >
                    <Icon size={18} />
                  </div>
                  <div style={{ flexGrow: 1, minWidth: 0 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.2rem' }}>
                      <span style={{ fontWeight: 600, color: 'var(--color-deep-emerald)', fontSize: '0.98rem' }}>
                        {item.title}
                      </span>
                      <span className={`search-result-type ${item.badgeClass}`}>
                        {item.type}
                      </span>
                    </div>
                    <div style={{ fontSize: '0.82rem', color: 'var(--color-charcoal-muted)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      {item.subtitle}
                    </div>
                  </div>
                  <ArrowRight size={16} style={{ color: 'var(--color-forest-green)', opacity: isSelected ? 1 : 0.4 }} />
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}
