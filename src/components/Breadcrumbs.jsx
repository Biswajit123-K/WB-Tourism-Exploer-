import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export default function Breadcrumbs({ items = [] }) {
  if (!items || items.length === 0) return null;

  return (
    <nav aria-label="Breadcrumb" style={{ padding: '1rem 0', fontSize: '0.86rem', color: 'var(--color-charcoal-muted)' }}>
      <ol style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '0.4rem', listStyle: 'none', margin: 0, padding: 0 }}>
        <li>
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: 'var(--color-forest-green)', fontWeight: 600 }}>
            <Home size={14} />
            <span>Home</span>
          </Link>
        </li>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <ChevronRight size={13} style={{ color: 'var(--color-charcoal-muted)' }} />
              {isLast || !item.url ? (
                <span style={{ color: 'var(--color-deep-emerald)', fontWeight: 600 }} aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link to={item.url} style={{ color: 'var(--color-forest-green)', fontWeight: 500 }}>
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
