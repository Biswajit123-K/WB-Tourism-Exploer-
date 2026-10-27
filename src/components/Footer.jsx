import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, Phone, Mail, MapPin, ShieldCheck, Heart, ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container">
        {/* Main Grid */}
        <div className="footer-grid">
          {/* Brand & Mission Column */}
          <div>
            <div className="brand-logo" style={{ marginBottom: '1.25rem' }}>
              <div className="brand-symbol" style={{ background: '#FFFFFF', color: 'var(--color-deep-emerald)' }}>
                <Compass size={24} />
              </div>
              <div>
                <span className="footer-brand-title">Explore Bengal</span>
                <span className="brand-tagline" style={{ color: 'var(--color-sunset-orange)' }}>
                  Discover Bengal. Experience the Extraordinary.
                </span>
              </div>
            </div>
            <p className="footer-desc">
              Your independent, transparent digital gateway to the incredible geographical, cultural, and spiritual diversity of West Bengal — from the snow-peaked Himalayas of Darjeeling to the mangrove wilderness of the Sundarbans.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.88rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                <MapPin size={17} style={{ flexShrink: 0, marginTop: '3px', color: 'var(--color-sunset-orange)' }} />
                <span>Kolkata Tourism Hub: Udayachal Lodge, Salt Lake Sector II, Kolkata 700091</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <Phone size={17} style={{ flexShrink: 0, color: 'var(--color-sunset-orange)' }} />
                <span>Toll-Free Tourist Helpline: 1800 212 1655 / 112</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <Mail size={17} style={{ flexShrink: 0, color: 'var(--color-sunset-orange)' }} />
                <span>Editorial Desk: contact@explorebengal.org</span>
              </div>
            </div>
          </div>

          {/* Featured Destinations Column */}
          <div>
            <h4 className="footer-heading">Top Destinations</h4>
            <ul className="footer-links">
              <li><Link to="/destinations/darjeeling" className="footer-link">Darjeeling Hills</Link></li>
              <li><Link to="/destinations/kalimpong" className="footer-link">Kalimpong</Link></li>
              <li><Link to="/destinations/digha" className="footer-link">Digha Sea Beach</Link></li>
              <li><Link to="/destinations/mandarmani" className="footer-link">Mandarmani Coast</Link></li>
              <li><Link to="/destinations/sundarbans" className="footer-link">Sundarbans Mangroves</Link></li>
              <li><Link to="/destinations/dooars" className="footer-link">Dooars & Jaldapara</Link></li>
              <li><Link to="/destinations/kolkata" className="footer-link">City of Joy: Kolkata</Link></li>
              <li><Link to="/destinations/bishnupur" className="footer-link">Bishnupur Terracotta</Link></li>
              <li><Link to="/destinations/shantiniketan" className="footer-link">Tagore's Shantiniketan</Link></li>
            </ul>
          </div>

          {/* Planning & Directory Column */}
          <div>
            <h4 className="footer-heading">Travel Toolkit</h4>
            <ul className="footer-links">
              <li><Link to="/plan-your-trip" className="footer-link">Independent Trip Planner</Link></li>
              <li><Link to="/tour-packages" className="footer-link">Compare Tour Packages</Link></li>
              <li><Link to="/hotels" className="footer-link">Verified Hotels Directory</Link></li>
              <li><Link to="/travel-guides" className="footer-link">Seasons & Weather Guide</Link></li>
              <li><Link to="/travel-guides" className="footer-link">Bengal Transit Network</Link></li>
              <li><Link to="/travel-guides" className="footer-link">National Park Permit Rules</Link></li>
              <li><Link to="/about" className="footer-link">About Our Mission</Link></li>
              <li><Link to="/contact" className="footer-link">Contact & Emergency Hubs</Link></li>
            </ul>
          </div>

          {/* Official Emergency Helplines Column */}
          <div>
            <h4 className="footer-heading">Emergency & Official</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.88rem' }}>
              <div style={{ background: 'rgba(255,255,255,0.06)', padding: '0.85rem', borderRadius: 'var(--radius-sm)' }}>
                <strong style={{ color: '#FFFFFF', display: 'block', marginBottom: '0.2rem' }}>
                  WBTDCL Central Reservation
                </strong>
                <span>+91 33 2358 5189 / 5190</span>
                <span style={{ display: 'block', fontSize: '0.78rem', color: 'rgba(244,235,221,0.6)' }}>10:00 AM - 06:00 PM (Mon-Sat)</span>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.06)', padding: '0.85rem', borderRadius: 'var(--radius-sm)' }}>
                <strong style={{ color: '#FFFFFF', display: 'block', marginBottom: '0.2rem' }}>
                  Forest Dept Wildlife Helpline
                </strong>
                <span>1800 345 3863 (Toll-Free)</span>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.06)', padding: '0.85rem', borderRadius: 'var(--radius-sm)' }}>
                <strong style={{ color: '#FFFFFF', display: 'block', marginBottom: '0.2rem' }}>
                  Integrated Emergency Helpline
                </strong>
                <span>Dial 112 (Police, Ambulance, Fire)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Responsible Tourism & Information Disclaimer */}
        <div className="footer-disclaimer">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem', fontWeight: 700, color: '#FFFFFF' }}>
            <ShieldCheck size={18} style={{ color: 'var(--color-sunset-orange)' }} />
            <span>Travel Information & Transparency Disclaimer</span>
          </div>
          <p style={{ margin: 0, fontSize: '0.82rem', color: 'rgba(244,235,221,0.85)' }}>
            Explore Bengal is an independent digital travel resource created to empower travelers with authentic, practical travel intelligence. Package figures, accommodation tariffs, and route intervals are indicative estimates or verified historical records designed to assist transparent trip budgeting. We do not act as an unlicensed tour broker. Please confirm live schedule details and permit availability with relevant government authorities and registered operators prior to departure.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div>
            © {new Date().getFullYear()} Explore Bengal. Discover Bengal. Experience the Extraordinary.
          </div>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <Link to="/about" className="footer-link">Editorial Integrity</Link>
            <Link to="/contact" className="footer-link">Verify a Property</Link>
            <Link to="/travel-guides" className="footer-link">Responsible Tourism</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
