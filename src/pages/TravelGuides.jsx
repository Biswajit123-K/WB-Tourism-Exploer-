import React, { useState } from 'react';
import { BookOpen, Clock, Calendar, User, ArrowRight, X, ShieldCheck } from 'lucide-react';
import { TRAVEL_GUIDES } from '../data/travelGuides.js';
import Breadcrumbs from '../components/Breadcrumbs.jsx';
import SEO from '../components/SEO.jsx';

export default function TravelGuides() {
  const [selectedGuide, setSelectedGuide] = useState(null);

  return (
    <>
      <SEO
        title="West Bengal Travel Guides — Seasons, Transit, Food & Permits"
        description="Comprehensive travel intelligence for independent travelers in West Bengal: seasonal weather matrices, train booking secrets, culinary trails, and forest permit protocols."
      />

      {/* Header */}
      <div style={{ background: 'var(--color-warm-sand-light)', borderBottom: '1px solid var(--color-border)', padding: '2.5rem 0' }}>
        <div className="container">
          <Breadcrumbs items={[{ label: 'Travel Guides' }]} />
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--color-deep-emerald)', marginTop: '0.5rem', marginBottom: '0.75rem' }}>
            Travel Guides & Practical Advisory
          </h1>
          <p style={{ maxWidth: '760px', fontSize: '1.05rem', color: 'var(--color-charcoal-muted)', margin: 0 }}>
            Authoritative, in-depth advice written for independent travelers navigating West Bengal's seasons, railway network, wildlife reserves, and culinary culture.
          </p>
        </div>
      </div>

      <div className="section" style={{ background: '#FFFFFF' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '2.5rem' }}>
            {TRAVEL_GUIDES.map((guide) => (
              <article key={guide.id} className="card-base" style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ height: '220px', overflow: 'hidden' }}>
                  <img
                    src={guide.heroImage}
                    alt={guide.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    loading="lazy"
                  />
                </div>
                <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem', color: 'var(--color-sunset-orange)', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                    <span>{guide.category}</span>
                    <span>•</span>
                    <span style={{ color: 'var(--color-charcoal-muted)' }}>{guide.readTime}</span>
                  </div>

                  <h3 style={{ fontSize: '1.3rem', color: 'var(--color-deep-emerald)', marginBottom: '0.75rem', lineHeight: '1.3' }}>
                    {guide.title}
                  </h3>

                  <p style={{ fontSize: '0.9rem', color: 'var(--color-charcoal-muted)', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                    {guide.summary}
                  </p>

                  <div style={{ marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid var(--color-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.78rem', color: 'var(--color-charcoal-muted)' }}>
                      Published {guide.publishDate}
                    </span>
                    <button
                      type="button"
                      onClick={() => setSelectedGuide(guide)}
                      className="dest-card-link"
                      style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
                    >
                      <span>Read Full Article</span>
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* Guide Article Reading Modal */}
      {selectedGuide && (
        <div className="search-modal-backdrop" onClick={() => setSelectedGuide(null)} role="dialog">
          <div
            className="search-modal-content"
            style={{ maxWidth: '840px', width: '95%', maxHeight: '88vh', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div style={{ padding: '1.5rem 2rem', borderBottom: '1px solid var(--color-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div>
                <span className="badge badge-category" style={{ marginBottom: '0.4rem' }}>{selectedGuide.category}</span>
                <h2 style={{ fontSize: '1.5rem', color: 'var(--color-deep-emerald)', margin: 0 }}>
                  {selectedGuide.title}
                </h2>
                <div style={{ fontSize: '0.8rem', color: 'var(--color-charcoal-muted)', marginTop: '0.35rem' }}>
                  By {selectedGuide.author} • {selectedGuide.readTime}
                </div>
              </div>
              <button
                type="button"
                onClick={() => setSelectedGuide(null)}
                style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-charcoal-muted)', padding: '0.5rem' }}
              >
                <X size={24} />
              </button>
            </div>

            {/* Modal Content */}
            <div style={{ padding: '2rem', overflowY: 'auto', flexGrow: 1, fontSize: '0.96rem', lineHeight: '1.75', color: 'var(--color-charcoal)' }}>
              <div style={{ height: '240px', borderRadius: 'var(--radius-md)', overflow: 'hidden', marginBottom: '1.5rem' }}>
                <img src={selectedGuide.heroImage} alt={selectedGuide.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>

              <div style={{ background: 'var(--color-warm-sand-light)', padding: '1rem 1.25rem', borderRadius: 'var(--radius-md)', borderLeft: '4px solid var(--color-forest-green)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
                {selectedGuide.summary}
              </div>

              <div style={{ whiteSpace: 'pre-line' }}>
                {selectedGuide.content}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
