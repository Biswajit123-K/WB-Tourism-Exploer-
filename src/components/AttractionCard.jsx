import React, { useState } from 'react';
import { Clock, MapPin, Ticket, ExternalLink, Info, CheckCircle2 } from 'lucide-react';
import { buildGoogleMapsDirectionsUrl } from '../utils/maps.js';

export default function AttractionCard({ attraction }) {
  const [expanded, setExpanded] = useState(false);

  if (!attraction) return null;

  const mapUrl = attraction.coordinates
    ? `https://www.google.com/maps/search/?api=1&query=${attraction.coordinates.latitude},${attraction.coordinates.longitude}`
    : `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(attraction.name + ' ' + attraction.location)}`;

  return (
    <article className="card-base" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      {/* Photo */}
      <div style={{ position: 'relative', height: '220px', overflow: 'hidden' }}>
        <img
          src={attraction.image}
          alt={attraction.name}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          loading="lazy"
        />
        <div
          style={{
            position: 'absolute',
            bottom: '0.75rem',
            left: '0.75rem',
            background: 'rgba(13, 48, 40, 0.85)',
            color: '#FFFFFF',
            fontSize: '0.75rem',
            fontWeight: 600,
            padding: '0.25rem 0.65rem',
            borderRadius: 'var(--radius-full)',
            backdropFilter: 'blur(4px)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.35rem'
          }}
        >
          <Clock size={12} />
          <span>{attraction.suggestedDuration}</span>
        </div>
      </div>

      {/* Body */}
      <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        <h4 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--color-deep-emerald)' }}>
          {attraction.name}
        </h4>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.82rem', color: 'var(--color-charcoal-muted)', marginBottom: '0.85rem' }}>
          <MapPin size={14} style={{ color: 'var(--color-sunset-orange)', flexShrink: 0 }} />
          <span>{attraction.location}</span>
        </div>

        <p style={{ fontSize: '0.92rem', lineHeight: '1.55', color: 'var(--color-charcoal-muted)', marginBottom: '1.25rem' }}>
          {expanded ? attraction.description : `${attraction.description.slice(0, 140)}...`}
          {attraction.description.length > 140 && (
            <button
              type="button"
              onClick={() => setExpanded(!expanded)}
              style={{
                marginLeft: '0.35rem',
                color: 'var(--color-forest-green)',
                fontWeight: 600,
                fontSize: '0.85rem',
                textDecoration: 'underline'
              }}
            >
              {expanded ? 'Show Less' : 'Read More'}
            </button>
          )}
        </p>

        {/* Verified Details Block */}
        <div style={{ marginTop: 'auto', background: 'var(--color-warm-sand-light)', padding: '0.85rem 1rem', borderRadius: 'var(--radius-md)', fontSize: '0.82rem', display: 'flex', flexDirection: 'column', gap: '0.4rem', border: '1px solid var(--color-border)' }}>
          {attraction.openingHours && (
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
              <strong style={{ color: 'var(--color-deep-emerald)', minWidth: '85px' }}>Timings:</strong>
              <span>{attraction.openingHours}</span>
            </div>
          )}
          {attraction.entryFee && (
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
              <strong style={{ color: 'var(--color-deep-emerald)', minWidth: '85px' }}>Entry Fee:</strong>
              <span style={{ color: 'var(--color-forest-green)', fontWeight: 600 }}>{attraction.entryFee}</span>
            </div>
          )}
          {attraction.accessNotes && (
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
              <strong style={{ color: 'var(--color-deep-emerald)', minWidth: '85px' }}>Access:</strong>
              <span style={{ color: 'var(--color-charcoal-muted)' }}>{attraction.accessNotes}</span>
            </div>
          )}
        </div>

        {/* Card Footer Actions */}
        <div style={{ marginTop: '1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <a
            href={mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline btn-sm"
            style={{ width: '100%', gap: '0.4rem', justifyContent: 'center' }}
            title="Open precise location in Google Maps"
          >
            <MapPin size={15} />
            <span>View on Google Maps</span>
            <ExternalLink size={13} />
          </a>
        </div>
      </div>
    </article>
  );
}
