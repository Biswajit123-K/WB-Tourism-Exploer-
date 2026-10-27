import  { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Compass, Search, Menu, X, ArrowRight, MapPin, Calendar, Heart } from 'lucide-react';

export default function Navbar({ onOpenSearch }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on page navigation
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header className="navbar-header" role="banner">
        <div className="container-wide navbar-container">
          {/* Brand Logo */}
          <Link to="/" className="brand-logo" aria-label="Explore Bengal Home">
            <div className="brand-symbol">
              <Compass size={24} strokeWidth={2.2} />
            </div>
            <div>
              <span className="brand-title">Explore Bengal</span>
              <span className="brand-tagline">Discover Bengal</span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="desktop-nav" aria-label="Main Navigation">
            <ul className="nav-links">
              <li>
                <NavLink to="/" end className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/destinations" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                  Destinations
                </NavLink>
              </li>
              <li>
                <NavLink to="/tour-packages" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                  Tour Packages
                </NavLink>
              </li>
              <li>
                <NavLink to="/hotels" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                  Hotels & Resorts
                </NavLink>
              </li>
              <li>
                <NavLink to="/plan-your-trip" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                  Plan Your Trip
                </NavLink>
              </li>
              <li>
                <NavLink to="/travel-guides" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                  Travel Guides
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>

          {/* Action Buttons */}
          <div className="nav-actions">
            {/* Search Trigger */}
            <button
              type="button"
              className="search-trigger-btn"
              onClick={onOpenSearch}
              aria-label="Search destinations, packages, hotels, guides"
              title="Search (Ctrl + K)"
            >
              <Search size={16} />
              <span>Search...</span>
              <kbd className="search-kbd">⌘K</kbd>
            </button>

            {/* Plan Your Journey CTA */}
            <Link to="/plan-your-trip" className="btn btn-primary btn-sm">
              <span>Plan Your Journey</span>
              <ArrowRight size={15} />
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              className="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              <Menu size={26} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Backdrop */}
      <div
        className={`mobile-drawer-overlay ${mobileMenuOpen ? 'open' : ''}`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Drawer Panel */}
      <div
        className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}
        role="dialog"
        aria-label="Mobile Navigation"
      >
        <div>
          <div className="mobile-drawer-header">
            <Link to="/" className="brand-logo" onClick={() => setMobileMenuOpen(false)}>
              <div className="brand-symbol">
                <Compass size={22} />
              </div>
              <div>
                <span className="brand-title">Explore Bengal</span>
              </div>
            </Link>
            <button
              type="button"
              className="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close navigation menu"
            >
              <X size={26} />
            </button>
          </div>

          {/* Search Button in Mobile Drawer */}
          <button
            type="button"
            className="search-trigger-btn"
            style={{ width: '100%', justifyContent: 'space-between', marginBottom: '1.5rem', padding: '0.8rem 1rem' }}
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenSearch();
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Search size={18} />
              <span>Search destinations, hotels...</span>
            </div>
            <kbd className="search-kbd">⌘K</kbd>
          </button>

          {/* Mobile Links */}
          <nav>
            <ul className="mobile-nav-links">
              <li>
                <NavLink to="/" end className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
                  <span>Home</span>
                  <ArrowRight size={16} />
                </NavLink>
              </li>
              <li>
                <NavLink to="/destinations" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
                  <span>Destinations</span>
                  <ArrowRight size={16} />
                </NavLink>
              </li>
              <li>
                <NavLink to="/tour-packages" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
                  <span>Tour Packages</span>
                  <ArrowRight size={16} />
                </NavLink>
              </li>
              <li>
                <NavLink to="/hotels" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
                  <span>Hotels & Resorts</span>
                  <ArrowRight size={16} />
                </NavLink>
              </li>
              <li>
                <NavLink to="/plan-your-trip" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
                  <span>Plan Your Trip</span>
                  <ArrowRight size={16} />
                </NavLink>
              </li>
              <li>
                <NavLink to="/travel-guides" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
                  <span>Travel Guides</span>
                  <ArrowRight size={16} />
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
                  <span>About Bengal</span>
                  <ArrowRight size={16} />
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
                  <span>Contact & Helplines</span>
                  <ArrowRight size={16} />
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>

        {/* Drawer Footer CTA */}
        <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid var(--color-border)' }}>
          <Link
            to="/plan-your-trip"
            className="btn btn-primary"
            style={{ width: '100%' }}
            onClick={() => setMobileMenuOpen(false)}
          >
            <span>Plan Your Journey</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </>
  );
}
