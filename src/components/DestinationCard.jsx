import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, MapPin } from 'lucide-react';

export default function DestinationCard({ destination }) {
  if (!destination) return null;

  return (
    <article className="dest-card" aria-label={destination.name}>
      <div className="dest-card-img-wrap">
        <img
          src={destination.heroImage}
          alt={`Scenic landscape of ${destination.name}, West Bengal`}
          className="dest-card-img"
          loading="lazy"
        />
        <span className="dest-card-category-badge">
          {destination.categoryLabel || destination.category}
        </span>
        {destination.recommendedDuration && (
          <span className="dest-card-duration-badge">
            <Clock size={12} style={{ display: 'inline', marginRight: '3px', verticalAlign: '-1px' }} />
            {destination.recommendedDuration}
          </span>
        )}
      </div>

      <div className="dest-card-body">
        <h3 className="dest-card-title">{destination.name}</h3>
        <p className="dest-card-desc">{destination.shortDescription}</p>

        <div className="dest-card-footer">
          <span style={{ fontSize: '0.82rem', color: 'var(--color-charcoal-muted)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
            <MapPin size={14} style={{ color: 'var(--color-sunset-orange)' }} />
            West Bengal
          </span>
          <Link
            to={`/destinations/${destination.slug}`}
            className="dest-card-link"
            aria-label={`Explore comprehensive travel guide for ${destination.name}`}
          >
            <span>Explore Guide</span>
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </article>
  );
}
