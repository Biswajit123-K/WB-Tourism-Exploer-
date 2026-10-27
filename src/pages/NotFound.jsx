import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, Home, ArrowLeft } from 'lucide-react';
import SEO from '../components/SEO.jsx';

export default function NotFound() {
  return (
    <>
      <SEO title="Page Not Found (404) — Explore Bengal" description="The page you are looking for does not exist on Explore Bengal." />
      <div style={{ padding: '6rem 1.5rem', textAlign: 'center', minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <Compass size={64} style={{ color: 'var(--color-sunset-orange)', marginBottom: '1.5rem', animation: 'spin 12s linear infinite' }} />
        <h1 style={{ fontSize: '3rem', color: 'var(--color-deep-emerald)', marginBottom: '0.75rem' }}>
          404 — Lost on the Trail
        </h1>
        <p style={{ maxWidth: '480px', color: 'var(--color-charcoal-muted)', fontSize: '1.05rem', lineHeight: '1.6', marginBottom: '2rem' }}>
          The page or travel route you are looking for doesn't exist or has moved. Let's get you back on track to exploring West Bengal.
        </p>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Link to="/" className="btn btn-primary">
            <Home size={16} />
            <span>Return to Homepage</span>
          </Link>
          <Link to="/destinations" className="btn btn-outline">
            <span>Explore Destinations</span>
          </Link>
        </div>
      </div>
    </>
  );
}
