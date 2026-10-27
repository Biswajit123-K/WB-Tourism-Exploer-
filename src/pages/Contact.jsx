import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle2, ShieldCheck, HelpCircle } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs.jsx';
import SEO from '../components/SEO.jsx';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    topic: 'Independent Trip Planning',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <SEO
        title="Contact Explore Bengal — Official Helplines & Tourism Support"
        description="Official tourist helpline directory and contact details for West Bengal Tourism (WBTDCL), regional offices in Kolkata and Siliguri, and forest assistance."
      />

      {/* Header */}
      <div style={{ background: 'var(--color-warm-sand-light)', borderBottom: '1px solid var(--color-border)', padding: '2.5rem 0' }}>
        <div className="container">
          <Breadcrumbs items={[{ label: 'Contact & Helplines' }]} />
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--color-deep-emerald)', marginTop: '0.5rem', marginBottom: '0.75rem' }}>
            Contact & Official Tourist Helplines
          </h1>
          <p style={{ maxWidth: '760px', fontSize: '1.05rem', color: 'var(--color-charcoal-muted)', margin: 0 }}>
            Official directory of government tourism offices, registered helplines, emergency assistance, and our independent editorial desk.
          </p>
        </div>
      </div>

      <div className="section" style={{ background: '#FFFFFF' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3.5rem', alignItems: 'start' }}>
            {/* Left: Official Tourism Centers Directory */}
            <div>
              <span className="section-eyebrow">Government & Official Hubs</span>
              <h2 style={{ fontSize: '1.75rem', marginBottom: '1.5rem' }}>Official Tourism Offices</h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2.5rem' }}>
                {/* Kolkata Central Office */}
                <div className="card-base" style={{ padding: '1.5rem', borderLeft: '4px solid var(--color-forest-green)' }}>
                  <h4 style={{ fontSize: '1.15rem', color: 'var(--color-deep-emerald)', marginBottom: '0.5rem' }}>
                    WBTDCL Central Reservation Counter (Kolkata)
                  </h4>
                  <p style={{ fontSize: '0.88rem', color: 'var(--color-charcoal-muted)', lineHeight: '1.6', marginBottom: '0.75rem' }}>
                    Udayachal Tourist Lodge, DG Block, Sector II, Salt Lake City, Kolkata 700091
                  </p>
                  <div style={{ fontSize: '0.85rem', color: 'var(--color-charcoal)', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                    <div><strong>Toll-Free Helpline:</strong> 1800 212 1655</div>
                    <div><strong>Telephone:</strong> +91 33 2358 5189 / 5190</div>
                    <div><strong>Hours:</strong> 10:00 AM - 06:00 PM (Monday to Saturday)</div>
                  </div>
                </div>

                {/* North Bengal Siliguri Office */}
                <div className="card-base" style={{ padding: '1.5rem', borderLeft: '4px solid var(--color-sunset-orange)' }}>
                  <h4 style={{ fontSize: '1.15rem', color: 'var(--color-deep-emerald)', marginBottom: '0.5rem' }}>
                    North Bengal Tourism Hub (Siliguri)
                  </h4>
                  <p style={{ fontSize: '0.88rem', color: 'var(--color-charcoal-muted)', lineHeight: '1.6', marginBottom: '0.75rem' }}>
                    Mainak Tourist Lodge Complex, Hill Cart Road / M.R. Compound, Siliguri 734001
                  </p>
                  <div style={{ fontSize: '0.85rem', color: 'var(--color-charcoal)', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                    <div><strong>Telephone:</strong> +91 353 251 1974 / 251 1979</div>
                    <div><strong>Gateway for:</strong> Darjeeling, Dooars, Kalimpong, Sikkim, Bhutan</div>
                  </div>
                </div>

                {/* Emergency Services */}
                <div style={{ background: '#F8FAF9', padding: '1.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
                  <h4 style={{ fontSize: '1.1rem', color: 'var(--color-deep-emerald)', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <ShieldCheck size={18} style={{ color: 'var(--color-forest-green)' }} />
                    <span>Emergency Assistance Numbers</span>
                  </h4>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '0.88rem', display: 'flex', flexDirection: 'column', gap: '0.4rem', color: 'var(--color-charcoal)' }}>
                    <li><strong>Integrated Police / Emergency:</strong> Dial 112 or 100</li>
                    <li><strong>State Forest Dept Wildlife Helpline:</strong> 1800 345 3863 (Toll Free)</li>
                    <li><strong>Railway Enquiry (IRCTC / NTES):</strong> Dial 139</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Right: Working Editorial Contact Form */}
            <div className="card-base" style={{ padding: '2.5rem', background: 'var(--color-cream-white)' }}>
              <span className="section-eyebrow">Direct Assistance</span>
              <h2 style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>Get in Touch</h2>
              <p style={{ fontSize: '0.92rem', color: 'var(--color-charcoal-muted)', marginBottom: '1.75rem' }}>
                Need advice on an independent route, want to suggest an off-beat destination, or verify an accommodation listing? Send a note to our team.
              </p>

              {submitted ? (
                <div style={{ textAlign: 'center', padding: '2.5rem 1rem' }}>
                  <CheckCircle2 size={54} style={{ color: 'var(--color-forest-green)', marginBottom: '1rem' }} />
                  <h3 style={{ fontSize: '1.4rem', color: 'var(--color-deep-emerald)', marginBottom: '0.5rem' }}>
                    Message Received!
                  </h3>
                  <p style={{ fontSize: '0.92rem', color: 'var(--color-charcoal-muted)', lineHeight: '1.6' }}>
                    Thank you for reaching out, <strong>{formData.name}</strong>. Our editorial desk will review your query regarding "{formData.topic}" and reply to <strong>{formData.email}</strong> within 1-2 business days.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', phone: '', topic: 'Independent Trip Planning', message: '' });
                    }}
                    className="btn btn-outline btn-sm"
                    style={{ marginTop: '1.5rem' }}
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: 'var(--color-deep-emerald)', marginBottom: '0.35rem', textTransform: 'uppercase' }}>
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      required
                      className="input-field"
                      placeholder="e.g. Ananya Ghosh"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: 'var(--color-deep-emerald)', marginBottom: '0.35rem', textTransform: 'uppercase' }}>
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        className="input-field"
                        placeholder="name@domain.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: 'var(--color-deep-emerald)', marginBottom: '0.35rem', textTransform: 'uppercase' }}>
                        Phone (Optional)
                      </label>
                      <input
                        type="tel"
                        className="input-field"
                        placeholder="+91..."
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: 'var(--color-deep-emerald)', marginBottom: '0.35rem', textTransform: 'uppercase' }}>
                      Topic
                    </label>
                    <select
                      className="select-field"
                      value={formData.topic}
                      onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                    >
                      <option value="Independent Trip Planning">Independent Trip Planning Support</option>
                      <option value="Verify an Accommodation">Verify or Update Hotel Listing</option>
                      <option value="Route or Transit Question">Route / Railway / Highway Query</option>
                      <option value="General Feedback">Feedback or Suggestion</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: 'var(--color-deep-emerald)', marginBottom: '0.35rem', textTransform: 'uppercase' }}>
                      Your Message
                    </label>
                    <textarea
                      required
                      rows={4}
                      className="textarea-field"
                      placeholder="Please describe how we can assist your travel planning..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <button type="submit" className="btn btn-primary" style={{ marginTop: '0.5rem', width: '100%', justifyContent: 'center' }}>
                    <Send size={16} />
                    <span>Send Message to Editorial Team</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
