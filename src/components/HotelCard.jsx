import React, { useState } from 'react';
import { MapPin, Phone, ExternalLink, ShieldCheck, Wifi, Coffee, Sparkles } from 'lucide-react';

export default function HotelCard({ hotel }) {
  const [showOutboundNotice, setShowOutboundNotice] = useState(false);
  const [targetUrl, setTargetUrl] = useState('');

  if (!hotel) return null;

  const handleBookingClick = (url) => {
    setTargetUrl(url);
    setShowOutboundNotice(true);
  };

  const mapUrl = hotel.coordinates
    ? `https://www.google.com/maps/search/?api=1&query=${hotel.coordinates.latitude},${hotel.coordinates.longitude}`
    : `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(hotel.name + ' ' + hotel.locality)}`;

  return (
    <>
      <article className="card-base" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        {/* Photo and Badges */}
        <div style={{ position: 'relative', height: '220px', overflow: 'hidden' }}>
          <img
            src={hotel.heroImage}
            alt={hotel.name}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            loading="lazy"
          />
          <div style={{ position: 'absolute', top: '1rem', left: '1rem', display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
            <span className="badge badge-category" style={{ background: 'rgba(255,252,246,0.95)' }}>
              {hotel.categoryLabel}
            </span>
            <span className="badge badge-verified">
              <ShieldCheck size={12} />
              {hotel.verification.statusLabel}
            </span>
          </div>
        </div>

        {/* Content */}
        <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.82rem', color: 'var(--color-sunset-orange)', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.35rem' }}>
            <MapPin size={13} />
            <span>{hotel.destinationName} • {hotel.locality}</span>
          </div>

          <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem', color: 'var(--color-deep-emerald)', lineHeight: '1.3' }}>
            {hotel.name}
          </h3>

          <p style={{ fontSize: '0.9rem', color: 'var(--color-charcoal-muted)', marginBottom: '1.25rem', lineHeight: '1.5' }}>
            {hotel.description}
          </p>

          {/* Amenities Chips */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.25rem' }}>
            {hotel.amenities.map((amenity, i) => (
              <span
                key={i}
                style={{
                  background: 'var(--color-warm-sand-light)',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-full)',
                  padding: '0.2rem 0.65rem',
                  fontSize: '0.78rem',
                  color: 'var(--color-deep-emerald)',
                  fontWeight: 500
                }}
              >
                {amenity}
              </span>
            ))}
          </div>

          {/* Verification Source Citation */}
          <div style={{ fontSize: '0.78rem', color: 'var(--color-charcoal-muted)', marginBottom: '1.25rem', padding: '0.5rem 0.75rem', background: '#F8FAF9', borderRadius: 'var(--radius-sm)', borderLeft: '3px solid var(--color-forest-green)' }}>
            <div><strong>Source:</strong> {hotel.verification.sourceType}</div>
            <div><strong>Checked:</strong> {hotel.verification.lastChecked}</div>
          </div>

          {/* Price & Actions */}
          <div style={{ marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid var(--color-border)' }}>
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: '1rem' }}>
              <div>
                <span style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--color-deep-emerald)' }}>
                  ₹{hotel.price.amount.toLocaleString('en-IN')}
                </span>
                <span style={{ fontSize: '0.78rem', color: 'var(--color-charcoal-muted)', marginLeft: '0.35rem', display: 'block' }}>
                  {hotel.price.basis}
                </span>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '0.65rem' }}>
              <button
                type="button"
                onClick={() => handleBookingClick(hotel.bookingUrl || hotel.officialWebsite)}
                className="btn btn-primary btn-sm"
                style={{ flexGrow: 1, gap: '0.4rem' }}
              >
                <span>Book / Check Live Rates</span>
                <ExternalLink size={13} />
              </button>

              <a
                href={mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-sm"
                title="View on Google Maps"
                style={{ padding: '0.55rem 0.75rem' }}
              >
                <MapPin size={16} />
              </a>
            </div>
          </div>
        </div>
      </article>

      {/* Outbound Link Disclaimer Modal */}
      {showOutboundNotice && (
        <div className="search-modal-backdrop" onClick={() => setShowOutboundNotice(false)} role="dialog">
          <div className="search-modal-content" style={{ padding: '2rem', maxWidth: '520px' }} onClick={(e) => e.stopPropagation()}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem', color: 'var(--color-deep-emerald)' }}>
              <ShieldCheck size={24} style={{ color: 'var(--color-forest-green)' }} />
              <h3 style={{ fontSize: '1.3rem' }}>Leaving Explore Bengal</h3>
            </div>
            <p style={{ fontSize: '0.92rem', color: 'var(--color-charcoal-muted)', marginBottom: '1.25rem', lineHeight: '1.6' }}>
              You are being redirected to <strong>{hotel.name}</strong>'s verified official portal or trusted booking channel:
            </p>
            <div style={{ background: 'var(--color-warm-sand-light)', padding: '0.75rem', borderRadius: 'var(--radius-sm)', wordBreak: 'break-all', fontSize: '0.82rem', marginBottom: '1.5rem', border: '1px solid var(--color-border)' }}>
              {targetUrl}
            </div>
            <p style={{ fontSize: '0.82rem', color: 'var(--color-charcoal-muted)', marginBottom: '1.5rem' }}>
              Explore Bengal does not process payments or charge booking markups. Live rates and reservation policies are governed directly by the provider.
            </p>
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem' }}>
              <button
                type="button"
                className="btn btn-outline btn-sm"
                onClick={() => setShowOutboundNotice(false)}
              >
                Cancel
              </button>
              <a
                href={targetUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-sm"
                onClick={() => setShowOutboundNotice(false)}
              >
                <span>Continue to Official Site</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
