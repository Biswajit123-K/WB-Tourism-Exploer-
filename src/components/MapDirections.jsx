import React, { useState } from 'react';
import { MapPin, Navigation, ExternalLink, Car, Train, Footprints, AlertCircle } from 'lucide-react';
import { buildGoogleMapsDirectionsUrl } from '../utils/maps.js';

export default function MapDirections({
  defaultOrigin = "Kolkata, West Bengal",
  defaultDestination = "Darjeeling, West Bengal",
  defaultMode = "driving"
}) {
  const [origin, setOrigin] = useState(defaultOrigin);
  const [destination, setDestination] = useState(defaultDestination);
  const [mode, setMode] = useState(defaultMode);
  const [waypoint, setWaypoint] = useState('');
  const [error, setError] = useState('');

  const handleOpenDirections = () => {
    if (!origin.trim()) {
      setError("Please enter a starting location.");
      return;
    }
    if (!destination.trim()) {
      setError("Please enter a destination.");
      return;
    }

    setError('');
    const waypoints = waypoint.trim() ? [waypoint.trim()] : [];
    const url = buildGoogleMapsDirectionsUrl(origin, destination, mode, waypoints);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="card-base" style={{ padding: '2rem', background: '#FFFFFF' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem', color: 'var(--color-deep-emerald)' }}>
        <Navigation size={22} style={{ color: 'var(--color-sunset-orange)' }} />
        <h3 style={{ fontSize: '1.35rem' }}>Interactive Route & Google Maps Directions</h3>
      </div>

      <p style={{ fontSize: '0.92rem', color: 'var(--color-charcoal-muted)', marginBottom: '1.5rem' }}>
        Calculate real-time highway corridors, railway routes, or walking circuits directly between any West Bengal towns or addresses.
      </p>

      {error && (
        <div style={{ background: '#FEE2E2', color: '#991B1B', padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)', marginBottom: '1.25rem', fontSize: '0.88rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <AlertCircle size={16} />
          <span>{error}</span>
        </div>
      )}

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem', marginBottom: '1.25rem' }}>
        {/* Origin */}
        <div>
          <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: 'var(--color-deep-emerald)', marginBottom: '0.4rem', textTransform: 'uppercase' }}>
            Starting Location / City
          </label>
          <div style={{ position: 'relative' }}>
            <MapPin size={16} style={{ position: 'absolute', top: '50%', left: '0.85rem', transform: 'translateY(-50%)', color: 'var(--color-forest-green)' }} />
            <input
              type="text"
              className="input-field"
              style={{ paddingLeft: '2.4rem' }}
              placeholder="e.g., Kolkata, Siliguri, Durgapur, Asansol..."
              value={origin}
              onChange={(e) => setOrigin(e.target.value)}
            />
          </div>
        </div>

        {/* Destination */}
        <div>
          <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: 'var(--color-deep-emerald)', marginBottom: '0.4rem', textTransform: 'uppercase' }}>
            Destination
          </label>
          <div style={{ position: 'relative' }}>
            <MapPin size={16} style={{ position: 'absolute', top: '50%', left: '0.85rem', transform: 'translateY(-50%)', color: 'var(--color-sunset-orange)' }} />
            <input
              type="text"
              className="input-field"
              style={{ paddingLeft: '2.4rem' }}
              placeholder="e.g., Darjeeling, Digha, Sundarbans..."
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Mode Selector and Waypoint */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem', marginBottom: '1.75rem' }}>
        <div>
          <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: 'var(--color-deep-emerald)', marginBottom: '0.4rem', textTransform: 'uppercase' }}>
            Travel Mode
          </label>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            {[
              { id: 'driving', label: 'Driving / Car', icon: Car },
              { id: 'transit', label: 'Transit (Train/Bus)', icon: Train },
              { id: 'walking', label: 'Walking', icon: Footprints }
            ].map((m) => {
              const Icon = m.icon;
              const isSelected = mode === m.id;
              return (
                <button
                  key={m.id}
                  type="button"
                  onClick={() => setMode(m.id)}
                  style={{
                    flex: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.35rem',
                    padding: '0.65rem 0.5rem',
                    borderRadius: 'var(--radius-md)',
                    border: `1.5px solid ${isSelected ? 'var(--color-forest-green)' : 'var(--color-border)'}`,
                    background: isSelected ? 'var(--color-warm-sand-light)' : '#FFFFFF',
                    color: isSelected ? 'var(--color-deep-emerald)' : 'var(--color-charcoal-muted)',
                    fontWeight: isSelected ? 700 : 500,
                    fontSize: '0.82rem',
                    cursor: 'pointer',
                    transition: 'all var(--transition-fast)'
                  }}
                >
                  <Icon size={15} />
                  <span>{m.label.split(' ')[0]}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div>
          <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: 'var(--color-deep-emerald)', marginBottom: '0.4rem', textTransform: 'uppercase' }}>
            Optional Intermediate Stop / Waypoint
          </label>
          <input
            type="text"
            className="input-field"
            placeholder="e.g., Kurseong, Shantiniketan, Kolaghat..."
            value={waypoint}
            onChange={(e) => setWaypoint(e.target.value)}
          />
        </div>
      </div>

      {/* Button & Note */}
      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', paddingTop: '1rem', borderTop: '1px solid var(--color-border)' }}>
        <span style={{ fontSize: '0.82rem', color: 'var(--color-charcoal-muted)' }}>
          Google Maps may adjust routes based on live traffic, ferry schedules, or hill road alerts.
        </span>

        <button
          type="button"
          onClick={handleOpenDirections}
          className="btn btn-primary"
          style={{ gap: '0.5rem' }}
        >
          <Navigation size={17} />
          <span>Open Directions in Google Maps</span>
          <ExternalLink size={15} />
        </button>
      </div>
    </div>
  );
}
