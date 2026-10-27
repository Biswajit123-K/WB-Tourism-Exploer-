import React from 'react';
import { X, Layers, Check, Minus, ShieldCheck, ArrowRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PackageComparisonModal({
  isOpen,
  onClose,
  comparedPackages = [],
  onRemovePackage,
  onClearAll
}) {
  if (!isOpen) return null;

  return (
    <div className="search-modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div
        className="search-modal-content"
        style={{ maxWidth: '1080px', width: '95%', maxHeight: '90vh', display: 'flex', flexDirection: 'column' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1.5rem', borderBottom: '1px solid var(--color-border)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <div className="brand-symbol" style={{ width: '36px', height: '36px' }}>
              <Layers size={20} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.35rem', color: 'var(--color-deep-emerald)' }}>Tour Package Comparison</h3>
              <p style={{ fontSize: '0.82rem', color: 'var(--color-charcoal-muted)' }}>
                Comparing {comparedPackages.length} package(s) side-by-side with transparent terms
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            {comparedPackages.length > 0 && (
              <button
                type="button"
                onClick={onClearAll}
                className="btn btn-outline btn-sm"
                style={{ fontSize: '0.8rem', padding: '0.4rem 0.75rem' }}
              >
                Clear All
              </button>
            )}
            <button
              type="button"
              onClick={onClose}
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-charcoal-muted)' }}
              aria-label="Close comparison modal"
            >
              <X size={24} />
            </button>
          </div>
        </div>

        {/* Comparison Content */}
        <div style={{ overflowY: 'auto', padding: '1.5rem', flexGrow: 1 }}>
          {comparedPackages.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '3rem 1rem', color: 'var(--color-charcoal-muted)' }}>
              <Layers size={48} style={{ color: 'var(--color-sunset-orange)', marginBottom: '1rem', opacity: 0.6 }} />
              <h4 style={{ fontSize: '1.25rem', color: 'var(--color-deep-emerald)', marginBottom: '0.5rem' }}>
                No packages selected for comparison
              </h4>
              <p style={{ maxWidth: '420px', margin: '0 auto 1.5rem', fontSize: '0.92rem' }}>
                Browse our curated tour packages and click "Compare" on 2 or 3 packages to evaluate itineraries, inclusions, and prices side by side.
              </p>
              <button type="button" className="btn btn-primary btn-sm" onClick={onClose}>
                Browse Packages
              </button>
            </div>
          ) : (
            <div className="comparison-table-wrapper">
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '650px' }}>
                <thead>
                  <tr>
                    <th style={{ padding: '1rem', borderBottom: '2px solid var(--color-border)', width: '22%', color: 'var(--color-charcoal-muted)', fontSize: '0.85rem', textTransform: 'uppercase' }}>
                      Comparison Feature
                    </th>
                    {comparedPackages.map((pkg) => (
                      <th
                        key={pkg.id}
                        style={{
                          padding: '1rem',
                          borderBottom: '2px solid var(--color-border)',
                          width: `${78 / comparedPackages.length}%`,
                          verticalAlign: 'top'
                        }}
                      >
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '0.5rem', marginBottom: '0.5rem' }}>
                          <span style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--color-deep-emerald)' }}>
                            {pkg.name}
                          </span>
                          <button
                            type="button"
                            onClick={() => onRemovePackage(pkg.id)}
                            style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#EF4444', padding: '2px' }}
                            title="Remove from comparison"
                          >
                            <X size={18} />
                          </button>
                        </div>
                        <div style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--color-sunset-orange)' }}>
                          ₹{pkg.pricing.amount.toLocaleString('en-IN')}
                        </div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--color-charcoal-muted)' }}>
                          {pkg.pricing.basis}
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {/* Duration */}
                  <tr>
                    <td style={{ padding: '0.85rem 1rem', borderBottom: '1px solid var(--color-border)', fontWeight: 700, color: 'var(--color-deep-emerald)', fontSize: '0.88rem' }}>
                      Duration
                    </td>
                    {comparedPackages.map((pkg) => (
                      <td key={pkg.id} style={{ padding: '0.85rem 1rem', borderBottom: '1px solid var(--color-border)', fontSize: '0.9rem' }}>
                        {pkg.duration}
                      </td>
                    ))}
                  </tr>

                  {/* Destinations Covered */}
                  <tr>
                    <td style={{ padding: '0.85rem 1rem', borderBottom: '1px solid var(--color-border)', fontWeight: 700, color: 'var(--color-deep-emerald)', fontSize: '0.88rem' }}>
                      Destinations Covered
                    </td>
                    {comparedPackages.map((pkg) => (
                      <td key={pkg.id} style={{ padding: '0.85rem 1rem', borderBottom: '1px solid var(--color-border)', fontSize: '0.9rem' }}>
                        {pkg.destinations.join(', ')}
                      </td>
                    ))}
                  </tr>

                  {/* Accommodation Category */}
                  <tr>
                    <td style={{ padding: '0.85rem 1rem', borderBottom: '1px solid var(--color-border)', fontWeight: 700, color: 'var(--color-deep-emerald)', fontSize: '0.88rem' }}>
                      Accommodation
                    </td>
                    {comparedPackages.map((pkg) => (
                      <td key={pkg.id} style={{ padding: '0.85rem 1rem', borderBottom: '1px solid var(--color-border)', fontSize: '0.88rem' }}>
                        {pkg.accommodationCategory}
                      </td>
                    ))}
                  </tr>

                  {/* Transportation */}
                  <tr>
                    <td style={{ padding: '0.85rem 1rem', borderBottom: '1px solid var(--color-border)', fontWeight: 700, color: 'var(--color-deep-emerald)', fontSize: '0.88rem' }}>
                      Transportation
                    </td>
                    {comparedPackages.map((pkg) => (
                      <td key={pkg.id} style={{ padding: '0.85rem 1rem', borderBottom: '1px solid var(--color-border)', fontSize: '0.88rem' }}>
                        {pkg.transportation}
                      </td>
                    ))}
                  </tr>

                  {/* Meals Included */}
                  <tr>
                    <td style={{ padding: '0.85rem 1rem', borderBottom: '1px solid var(--color-border)', fontWeight: 700, color: 'var(--color-deep-emerald)', fontSize: '0.88rem' }}>
                      Meals Included
                    </td>
                    {comparedPackages.map((pkg) => (
                      <td key={pkg.id} style={{ padding: '0.85rem 1rem', borderBottom: '1px solid var(--color-border)', fontSize: '0.88rem' }}>
                        {pkg.mealsIncluded}
                      </td>
                    ))}
                  </tr>

                  {/* Included Activities */}
                  <tr>
                    <td style={{ padding: '0.85rem 1rem', borderBottom: '1px solid var(--color-border)', fontWeight: 700, color: 'var(--color-deep-emerald)', fontSize: '0.88rem' }}>
                      Signature Inclusions
                    </td>
                    {comparedPackages.map((pkg) => (
                      <td key={pkg.id} style={{ padding: '0.85rem 1rem', borderBottom: '1px solid var(--color-border)', fontSize: '0.84rem' }}>
                        <ul style={{ paddingLeft: '1.2rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                          {pkg.activitiesIncluded.map((act, i) => (
                            <li key={i}>{act}</li>
                          ))}
                        </ul>
                      </td>
                    ))}
                  </tr>

                  {/* Exclusions */}
                  <tr>
                    <td style={{ padding: '0.85rem 1rem', borderBottom: '1px solid var(--color-border)', fontWeight: 700, color: 'var(--color-deep-emerald)', fontSize: '0.88rem' }}>
                      Exclusions
                    </td>
                    {comparedPackages.map((pkg) => (
                      <td key={pkg.id} style={{ padding: '0.85rem 1rem', borderBottom: '1px solid var(--color-border)', fontSize: '0.84rem', color: '#B91C1C' }}>
                        <ul style={{ paddingLeft: '1.2rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                          {pkg.exclusions.map((exc, i) => (
                            <li key={i}>{exc}</li>
                          ))}
                        </ul>
                      </td>
                    ))}
                  </tr>

                  {/* Flexibility */}
                  <tr>
                    <td style={{ padding: '0.85rem 1rem', borderBottom: '1px solid var(--color-border)', fontWeight: 700, color: 'var(--color-deep-emerald)', fontSize: '0.88rem' }}>
                      Itinerary Flexibility
                    </td>
                    {comparedPackages.map((pkg) => (
                      <td key={pkg.id} style={{ padding: '0.85rem 1rem', borderBottom: '1px solid var(--color-border)', fontSize: '0.88rem' }}>
                        {pkg.flexibility}
                      </td>
                    ))}
                  </tr>

                  {/* Verification Status */}
                  <tr>
                    <td style={{ padding: '0.85rem 1rem', borderBottom: '1px solid var(--color-border)', fontWeight: 700, color: 'var(--color-deep-emerald)', fontSize: '0.88rem' }}>
                      Price Status & Provider
                    </td>
                    {comparedPackages.map((pkg) => (
                      <td key={pkg.id} style={{ padding: '0.85rem 1rem', borderBottom: '1px solid var(--color-border)', fontSize: '0.82rem' }}>
                        <span className={`badge ${pkg.pricing.status === 'verified-current' ? 'badge-verified' : 'badge-estimate'}`} style={{ marginBottom: '0.35rem' }}>
                          {pkg.pricing.statusLabel}
                        </span>
                        <div style={{ color: 'var(--color-charcoal-muted)' }}>{pkg.bookingSource.providerName}</div>
                      </td>
                    ))}
                  </tr>

                  {/* Action Link */}
                  <tr>
                    <td style={{ padding: '1rem', fontWeight: 700 }}>
                      Full Details
                    </td>
                    {comparedPackages.map((pkg) => (
                      <td key={pkg.id} style={{ padding: '1rem' }}>
                        <Link
                          to={`/tour-packages/${pkg.slug}`}
                          className="btn btn-primary btn-sm"
                          onClick={onClose}
                          style={{ width: '100%', justifyContent: 'center' }}
                        >
                          <span>View Full Itinerary</span>
                          <ArrowRight size={14} />
                        </Link>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
