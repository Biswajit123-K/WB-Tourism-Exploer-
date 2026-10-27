import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, MapPin, Check, X, ShieldCheck, ArrowRight, Layers, Car, Hotel } from 'lucide-react';

export default function PackageCard({ pkg, onToggleCompare, isCompared }) {
  if (!pkg) return null;

  return (
    <article className="card-base" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      {/* Photo and Badges */}
      <div style={{ position: 'relative', height: '220px', overflow: 'hidden' }}>
        <img
          src={pkg.heroImage}
          alt={pkg.name}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          loading="lazy"
        />
        <div style={{ position: 'absolute', top: '1rem', left: '1rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          <span className="badge" style={{ background: 'rgba(13, 48, 40, 0.85)', color: '#FFFFFF', backdropFilter: 'blur(4px)' }}>
            <Clock size={12} />
            {pkg.duration}
          </span>
          <span className={`badge ${pkg.pricing.status === 'verified-current' ? 'badge-verified' : 'badge-estimate'}`}>
            {pkg.pricing.statusLabel}
          </span>
        </div>
      </div>

      {/* Body */}
      <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.82rem', color: 'var(--color-sunset-orange)', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.3rem', letterSpacing: '0.04em' }}>
          <MapPin size={13} />
          <span>{pkg.destinations.join(' • ')}</span>
        </div>

        <h3 style={{ fontSize: '1.35rem', marginBottom: '0.5rem', color: 'var(--color-deep-emerald)', lineHeight: '1.3' }}>
          {pkg.name}
        </h3>
        <p style={{ fontSize: '0.9rem', color: 'var(--color-charcoal-muted)', marginBottom: '1.25rem', lineHeight: '1.5' }}>
          {pkg.tagline}
        </p>

        {/* Feature Highlights */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.84rem', color: 'var(--color-charcoal)', marginBottom: '1.25rem', paddingBottom: '1.25rem', borderBottom: '1px solid var(--color-border)' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
            <Hotel size={15} style={{ color: 'var(--color-forest-green)', flexShrink: 0, marginTop: '2px' }} />
            <span><strong>Stay:</strong> {pkg.accommodationCategory}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
            <Car size={15} style={{ color: 'var(--color-forest-green)', flexShrink: 0, marginTop: '2px' }} />
            <span><strong>Transit:</strong> {pkg.transportation}</span>
          </div>
        </div>

        {/* Inclusions Teaser */}
        <div style={{ marginBottom: '1.25rem', fontSize: '0.82rem' }}>
          <div style={{ fontWeight: 700, color: 'var(--color-deep-emerald)', marginBottom: '0.4rem' }}>
            Signature Inclusions:
          </div>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
            {pkg.activitiesIncluded.slice(0, 2).map((act, idx) => (
              <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.4rem', color: 'var(--color-charcoal-muted)' }}>
                <Check size={14} style={{ color: 'var(--color-forest-green)', flexShrink: 0, marginTop: '2px' }} />
                <span>{act}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Price and CTA */}
        <div style={{ marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid var(--color-border)' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: '1rem' }}>
            <div>
              <span style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-deep-emerald)', fontFamily: 'var(--font-sans)' }}>
                ₹{pkg.pricing.amount.toLocaleString('en-IN')}
              </span>
              <span style={{ fontSize: '0.78rem', color: 'var(--color-charcoal-muted)', marginLeft: '0.35rem', display: 'block' }}>
                {pkg.pricing.basis}
              </span>
            </div>
            {pkg.pricing.lastVerified && (
              <span style={{ fontSize: '0.72rem', color: 'var(--color-charcoal-muted)' }}>
                Verified: {pkg.pricing.lastVerified}
              </span>
            )}
          </div>

          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
            <Link
              to={`/tour-packages/${pkg.slug}`}
              className="btn btn-secondary btn-sm"
              style={{ flexGrow: 1, justifyContent: 'center' }}
            >
              <span>View Itinerary</span>
              <ArrowRight size={15} />
            </Link>

            {onToggleCompare && (
              <button
                type="button"
                onClick={() => onToggleCompare(pkg)}
                className={`btn btn-sm ${isCompared ? 'btn-primary' : 'btn-outline'}`}
                title="Add to package comparison matrix"
                style={{ padding: '0.55rem 0.85rem' }}
              >
                <Layers size={15} />
                <span>{isCompared ? 'Added' : 'Compare'}</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
