import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  Clock, MapPin, Check, X, ShieldCheck, Hotel, Car, Utensils, 
  HelpCircle, Calendar, Users, ArrowRight, ArrowLeft, Send, CheckCircle2 
} from 'lucide-react';
import { getPackageBySlug, PACKAGES } from '../data/packages.js';
import Breadcrumbs from '../components/Breadcrumbs.jsx';
import SEO from '../components/SEO.jsx';
import { generateTourPackageSchema } from '../utils/seo.js';

export default function PackageDetails() {
  const { slug } = useParams();
  const pkg = getPackageBySlug(slug);

  const [activeDay, setActiveDay] = useState(1);
  const [showEnquiryModal, setShowEnquiryModal] = useState(false);
  const [enquirySubmitted, setEnquirySubmitted] = useState(false);
  const [enquiryForm, setEnquiryForm] = useState({
    name: '',
    email: '',
    phone: '',
    travelDate: '',
    partySize: '2',
    notes: ''
  });

  if (!pkg) {
    return <Navigate to="/tour-packages" replace />;
  }

  const handleEnquirySubmit = (e) => {
    e.preventDefault();
    setEnquirySubmitted(true);
    setTimeout(() => {
      setShowEnquiryModal(false);
      setEnquirySubmitted(false);
      setEnquiryForm({ name: '', email: '', phone: '', travelDate: '', partySize: '2', notes: '' });
    }, 3000);
  };

  const relatedPackages = PACKAGES.filter(p => p.id !== pkg.id && p.category === pkg.category).slice(0, 2);

  return (
    <>
      <SEO
        title={`${pkg.name} (${pkg.duration}) — Package Details & Transparent Pricing`}
        description={pkg.tagline}
        schema={generateTourPackageSchema(pkg)}
      />

      {/* Package Hero */}
      <section style={{ position: 'relative', minHeight: '50vh', display: 'flex', alignItems: 'flex-end', color: '#FFFFFF', overflow: 'hidden' }}>
        <img
          src={pkg.heroImage}
          alt={pkg.name}
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to top, rgba(13, 48, 40, 0.95) 0%, rgba(13, 48, 40, 0.4) 60%, rgba(0,0,0,0.2) 100%)' }} />

        <div className="container" style={{ position: 'relative', zIndex: 2, paddingBottom: '3rem', paddingTop: '6rem' }}>
          <Breadcrumbs
            items={[
              { label: 'Tour Packages', url: '/tour-packages' },
              { label: pkg.name }
            ]}
          />

          <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap', marginBottom: '1rem', marginTop: '1rem' }}>
            <span className="badge badge-category" style={{ background: 'var(--color-sunset-orange)', color: '#FFFFFF' }}>
              {pkg.duration}
            </span>
            <span className={`badge ${pkg.pricing.status === 'verified-current' ? 'badge-verified' : 'badge-estimate'}`}>
              <ShieldCheck size={12} />
              {pkg.pricing.statusLabel}
            </span>
          </div>

          <h1 style={{ color: '#FFFFFF', fontSize: 'clamp(2.2rem, 4vw, 3.25rem)', marginBottom: '0.5rem' }}>
            {pkg.name}
          </h1>

          <p style={{ maxWidth: '780px', color: 'var(--color-warm-sand)', fontSize: '1.15rem', lineHeight: '1.6', margin: 0 }}>
            {pkg.tagline}
          </p>
        </div>
      </section>

      <div className="section" style={{ background: '#FFFFFF' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3.5rem', alignItems: 'start' }}>
            {/* Left Column: Itinerary and Inclusions */}
            <div style={{ gridColumn: 'span 2' }}>
              {/* Overview & Quick Specs */}
              <div style={{ background: 'var(--color-warm-sand-light)', padding: '2rem', borderRadius: 'var(--radius-lg)', marginBottom: '3rem', border: '1px solid var(--color-border)' }}>
                <h3 style={{ fontSize: '1.35rem', color: 'var(--color-deep-emerald)', marginBottom: '1.25rem' }}>
                  Tour Overview & Logistics
                </h3>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem', fontSize: '0.9rem' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                    <Hotel size={18} style={{ color: 'var(--color-forest-green)', flexShrink: 0, marginTop: '2px' }} />
                    <div>
                      <strong style={{ display: 'block', color: 'var(--color-deep-emerald)' }}>Accommodation:</strong>
                      <span style={{ color: 'var(--color-charcoal-muted)' }}>{pkg.accommodationCategory}</span>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                    <Car size={18} style={{ color: 'var(--color-forest-green)', flexShrink: 0, marginTop: '2px' }} />
                    <div>
                      <strong style={{ display: 'block', color: 'var(--color-deep-emerald)' }}>Transportation:</strong>
                      <span style={{ color: 'var(--color-charcoal-muted)' }}>{pkg.transportation}</span>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                    <Utensils size={18} style={{ color: 'var(--color-forest-green)', flexShrink: 0, marginTop: '2px' }} />
                    <div>
                      <strong style={{ display: 'block', color: 'var(--color-deep-emerald)' }}>Meal Plan:</strong>
                      <span style={{ color: 'var(--color-charcoal-muted)' }}>{pkg.mealsIncluded}</span>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                    <ShieldCheck size={18} style={{ color: 'var(--color-forest-green)', flexShrink: 0, marginTop: '2px' }} />
                    <div>
                      <strong style={{ display: 'block', color: 'var(--color-deep-emerald)' }}>Flexibility:</strong>
                      <span style={{ color: 'var(--color-charcoal-muted)' }}>{pkg.flexibility}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Day-by-Day Itinerary Accordion / Tabs */}
              <div style={{ marginBottom: '3rem' }}>
                <h3 style={{ fontSize: '1.5rem', color: 'var(--color-deep-emerald)', marginBottom: '1.5rem' }}>
                  Detailed Day-by-Day Itinerary
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  {pkg.itinerary.map((day) => (
                    <div
                      key={day.day}
                      className="card-base"
                      style={{ padding: '1.75rem', borderLeft: '4px solid var(--color-sunset-orange)' }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                        <span className="badge badge-category" style={{ background: 'var(--color-deep-emerald)', color: '#FFFFFF' }}>
                          Day {day.day}
                        </span>
                        <h4 style={{ fontSize: '1.2rem', color: 'var(--color-deep-emerald)', margin: 0 }}>
                          {day.title}
                        </h4>
                      </div>
                      <p style={{ fontSize: '0.92rem', color: 'var(--color-charcoal)', lineHeight: '1.65', margin: 0 }}>
                        {day.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Inclusions vs Exclusions */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
                <div className="card-base" style={{ padding: '2rem', borderTop: '4px solid var(--color-forest-green)' }}>
                  <h4 style={{ fontSize: '1.25rem', color: 'var(--color-forest-green)', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Check size={20} />
                    <span>Included In Package</span>
                  </h4>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                    {pkg.activitiesIncluded.map((inc, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.88rem', color: 'var(--color-charcoal)' }}>
                        <Check size={15} style={{ color: 'var(--color-forest-green)', flexShrink: 0, marginTop: '3px' }} />
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="card-base" style={{ padding: '2rem', borderTop: '4px solid #DC2626' }}>
                  <h4 style={{ fontSize: '1.25rem', color: '#DC2626', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <X size={20} />
                    <span>Excluded Expenses</span>
                  </h4>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                    {pkg.exclusions.map((exc, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.88rem', color: 'var(--color-charcoal)' }}>
                        <X size={15} style={{ color: '#DC2626', flexShrink: 0, marginTop: '3px' }} />
                        <span>{exc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Cancellation & Booking Terms */}
              <div style={{ background: '#F8FAF9', padding: '1.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', marginBottom: '3rem' }}>
                <h4 style={{ fontSize: '1.1rem', color: 'var(--color-deep-emerald)', marginBottom: '0.5rem' }}>
                  Cancellation & Refund Policy
                </h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--color-charcoal-muted)', lineHeight: '1.6', margin: 0 }}>
                  {pkg.cancellationPolicy}
                </p>
              </div>
            </div>

            {/* Right Column: Transparent Price Breakdown & Booking Card */}
            <div style={{ position: 'sticky', top: '100px' }}>
              <div className="card-base" style={{ padding: '2rem', background: 'var(--color-cream-white)', boxShadow: 'var(--shadow-lg)' }}>
                <div style={{ marginBottom: '1.25rem' }}>
                  <span style={{ fontSize: '0.82rem', color: 'var(--color-charcoal-muted)', textTransform: 'uppercase', fontWeight: 700 }}>
                    Transparent Package Cost
                  </span>
                  <div style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--color-deep-emerald)', lineHeight: '1.1', marginTop: '0.25rem' }}>
                    ₹{pkg.pricing.amount.toLocaleString('en-IN')}
                  </div>
                  <span style={{ fontSize: '0.82rem', color: 'var(--color-charcoal-muted)' }}>
                    {pkg.pricing.basis}
                  </span>
                </div>

                {/* Price Breakdown Matrix */}
                {pkg.pricing.breakdown && (
                  <div style={{ background: '#FFFFFF', padding: '1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', marginBottom: '1.5rem', fontSize: '0.82rem' }}>
                    <div style={{ fontWeight: 700, color: 'var(--color-deep-emerald)', marginBottom: '0.6rem', textTransform: 'uppercase' }}>
                      Itemized Cost Breakdown:
                    </div>
                    {Object.entries(pkg.pricing.breakdown).map(([k, v]) => (
                      <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '0.25rem 0', color: 'var(--color-charcoal)' }}>
                        <span style={{ textTransform: 'capitalize' }}>{k.replace(/([A-Z])/g, ' $1')}:</span>
                        <strong>₹{v.toLocaleString('en-IN')}</strong>
                      </div>
                    ))}
                  </div>
                )}

                <div style={{ fontSize: '0.78rem', color: 'var(--color-charcoal-muted)', marginBottom: '1.5rem', padding: '0.6rem 0.8rem', background: 'var(--color-warm-sand-light)', borderRadius: 'var(--radius-sm)' }}>
                  <div><strong>Provider:</strong> {pkg.bookingSource.providerName}</div>
                  <div><strong>Type:</strong> {pkg.bookingSource.note}</div>
                </div>

                <button
                  type="button"
                  onClick={() => setShowEnquiryModal(true)}
                  className="btn btn-primary"
                  style={{ width: '100%', justifyContent: 'center', marginBottom: '0.75rem' }}
                >
                  <Send size={16} />
                  <span>Enquire for Verified Availability</span>
                </button>

                <Link
                  to={`/plan-your-trip?destination=${pkg.destinationSlugs[0]}&days=${pkg.durationDays}`}
                  className="btn btn-outline"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  <span>Or Plan This Independently</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Enquiry Modal */}
      {showEnquiryModal && (
        <div className="search-modal-backdrop" onClick={() => setShowEnquiryModal(false)} role="dialog">
          <div className="search-modal-content" style={{ padding: '2rem', maxWidth: '540px' }} onClick={(e) => e.stopPropagation()}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
              <div>
                <h3 style={{ fontSize: '1.35rem', color: 'var(--color-deep-emerald)' }}>Enquire: {pkg.name}</h3>
                <span style={{ fontSize: '0.82rem', color: 'var(--color-charcoal-muted)' }}>Direct enquiry to verified local tour operator</span>
              </div>
              <button type="button" onClick={() => setShowEnquiryModal(false)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                <X size={20} />
              </button>
            </div>

            {enquirySubmitted ? (
              <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                <CheckCircle2 size={48} style={{ color: 'var(--color-forest-green)', marginBottom: '1rem' }} />
                <h4 style={{ fontSize: '1.25rem', color: 'var(--color-deep-emerald)', marginBottom: '0.5rem' }}>
                  Enquiry Successfully Sent!
                </h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-charcoal-muted)' }}>
                  Your travel inquiry has been recorded. The verified provider will respond to your contact email with authentic slot availability and confirmed tariff details.
                </p>
              </div>
            ) : (
              <form onSubmit={handleEnquirySubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-deep-emerald)', marginBottom: '0.3rem' }}>Your Full Name</label>
                  <input
                    type="text"
                    required
                    className="input-field"
                    placeholder="e.g. Sourav Sen"
                    value={enquiryForm.name}
                    onChange={(e) => setEnquiryForm({ ...enquiryForm, name: e.target.value })}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-deep-emerald)', marginBottom: '0.3rem' }}>Email Address</label>
                    <input
                      type="email"
                      required
                      className="input-field"
                      placeholder="name@example.com"
                      value={enquiryForm.email}
                      onChange={(e) => setEnquiryForm({ ...enquiryForm, email: e.target.value })}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-deep-emerald)', marginBottom: '0.3rem' }}>Phone Number</label>
                    <input
                      type="tel"
                      required
                      className="input-field"
                      placeholder="+91 98300 00000"
                      value={enquiryForm.phone}
                      onChange={(e) => setEnquiryForm({ ...enquiryForm, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-deep-emerald)', marginBottom: '0.3rem' }}>Preferred Travel Month / Date</label>
                    <input
                      type="text"
                      className="input-field"
                      placeholder="e.g. Mid October"
                      value={enquiryForm.travelDate}
                      onChange={(e) => setEnquiryForm({ ...enquiryForm, travelDate: e.target.value })}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-deep-emerald)', marginBottom: '0.3rem' }}>Travelers Count</label>
                    <select
                      className="select-field"
                      value={enquiryForm.partySize}
                      onChange={(e) => setEnquiryForm({ ...enquiryForm, partySize: e.target.value })}
                    >
                      <option value="1">1 Person</option>
                      <option value="2">2 Persons (1 Room)</option>
                      <option value="4">4 Persons (2 Rooms)</option>
                      <option value="6+">6+ Persons Group</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-deep-emerald)', marginBottom: '0.3rem' }}>Custom Requests or Dietary Needs</label>
                  <textarea
                    rows={2}
                    className="input-field"
                    placeholder="e.g. Vegetarian meals only, room on ground floor..."
                    value={enquiryForm.notes}
                    onChange={(e) => setEnquiryForm({ ...enquiryForm, notes: e.target.value })}
                  />
                </div>

                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem', marginTop: '0.5rem' }}>
                  <button type="button" onClick={() => setShowEnquiryModal(false)} className="btn btn-outline btn-sm">
                    Cancel
                  </button>
                  <button type="submit" className="btn btn-primary btn-sm">
                    <span>Submit Enquiry</span>
                    <Send size={14} />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}
