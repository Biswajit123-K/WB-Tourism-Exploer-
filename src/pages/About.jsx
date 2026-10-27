import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, ShieldCheck, Heart, Award, ArrowRight, Mountain, Trees, Landmark } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs.jsx';
import SEO from '../components/SEO.jsx';

export default function About() {
  return (
    <>
      <SEO
        title="About Explore Bengal — Our Mission, Ethics & Editorial Independence"
        description="Learn about Explore Bengal: an independent digital platform dedicated to empowering travelers with authentic, commission-free guidance across West Bengal."
      />

      {/* Header */}
      <div style={{ background: 'var(--color-warm-sand-light)', borderBottom: '1px solid var(--color-border)', padding: '2.5rem 0' }}>
        <div className="container">
          <Breadcrumbs items={[{ label: 'About Bengal & Mission' }]} />
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--color-deep-emerald)', marginTop: '0.5rem', marginBottom: '0.75rem' }}>
            About Explore Bengal
          </h1>
          <p style={{ maxWidth: '760px', fontSize: '1.05rem', color: 'var(--color-charcoal-muted)', margin: 0 }}>
            Discover Bengal. Experience the Extraordinary. An independent platform created to illuminate the living heritage, wilderness, and coastal splendor of West Bengal.
          </p>
        </div>
      </div>

      <div className="section" style={{ background: '#FFFFFF' }}>
        <div className="container">
          {/* Mission Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3.5rem', alignItems: 'center', marginBottom: '4rem' }}>
            <div>
              <span className="section-eyebrow">Our Core Purpose</span>
              <h2>Why We Built Explore Bengal</h2>
              <p style={{ fontSize: '1.05rem', color: 'var(--color-charcoal)', lineHeight: '1.7', marginBottom: '1.25rem' }}>
                West Bengal possesses one of the richest geographic and cultural tapestries on Earth. Yet for decades, tourists have been constrained by commercial agency packages that overcharge, push rigid itineraries, and overlook extraordinary independent travel possibilities.
              </p>
              <p style={{ fontSize: '0.95rem', color: 'var(--color-charcoal-muted)', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                Explore Bengal was conceived as a completely independent, non-commercial travel resource. We empower you to plan, budget, and embark on your own adventures — whether taking an unhurried toy train ride in Darjeeling, navigating the tidal mangrove labyrinth of the Sundarbans, or marveling at the terracotta bas-reliefs of Bishnupur.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link to="/plan-your-trip" className="btn btn-primary">
                  <span>Try Independent Trip Planner</span>
                  <ArrowRight size={16} />
                </Link>
                <Link to="/destinations" className="btn btn-outline">
                  <span>Browse Destinations</span>
                </Link>
              </div>
            </div>

            <div style={{ position: 'relative' }}>
              <img
                src="https://images.unsplash.com/photo-1544634076-a90160ddf44c?auto=format&fit=crop&w=800&q=80"
                alt="Mountains of Bengal"
                style={{ borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-xl)', width: '100%', height: '380px', objectFit: 'cover' }}
              />
            </div>
          </div>

          {/* UNESCO World Heritage Treasures in Bengal */}
          <div style={{ background: 'var(--color-warm-sand-light)', padding: '3rem 2rem', borderRadius: 'var(--radius-lg)', marginBottom: '4rem', border: '1px solid var(--color-border)' }}>
            <div className="section-title-wrap" style={{ marginBottom: '2.5rem' }}>
              <span className="section-eyebrow">Global Distinctions</span>
              <h2>UNESCO Inscriptions in West Bengal</h2>
              <p className="section-subtitle">
                Bengal is home to four extraordinary UNESCO-recognized treasures of planetary cultural and natural significance.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
              <div style={{ background: '#FFFFFF', padding: '1.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
                <div style={{ fontWeight: 800, color: 'var(--color-sunset-orange)', fontSize: '1.25rem', marginBottom: '0.35rem' }}>1987</div>
                <h4 style={{ fontSize: '1.15rem', color: 'var(--color-deep-emerald)', marginBottom: '0.5rem' }}>Sundarbans National Park</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--color-charcoal-muted)', lineHeight: '1.55', margin: 0 }}>
                  World's largest tidal mangrove delta; home of the Royal Bengal Tiger and estuarine crocodiles.
                </p>
              </div>

              <div style={{ background: '#FFFFFF', padding: '1.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
                <div style={{ fontWeight: 800, color: 'var(--color-sunset-orange)', fontSize: '1.25rem', marginBottom: '0.35rem' }}>1999</div>
                <h4 style={{ fontSize: '1.15rem', color: 'var(--color-deep-emerald)', marginBottom: '0.5rem' }}>Darjeeling Himalayan Railway</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--color-charcoal-muted)', lineHeight: '1.55', margin: 0 }}>
                  Historic 2-foot narrow gauge mountain railway operating since 1881 across Batasia Loop and Ghum.
                </p>
              </div>

              <div style={{ background: '#FFFFFF', padding: '1.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
                <div style={{ fontWeight: 800, color: 'var(--color-sunset-orange)', fontSize: '1.25rem', marginBottom: '0.35rem' }}>2021</div>
                <h4 style={{ fontSize: '1.15rem', color: 'var(--color-deep-emerald)', marginBottom: '0.5rem' }}>Durga Puja in Kolkata</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--color-charcoal-muted)', lineHeight: '1.55', margin: 0 }}>
                  Inscribed as Intangible Cultural Heritage of Humanity; the greatest open-air public art festival on Earth.
                </p>
              </div>

              <div style={{ background: '#FFFFFF', padding: '1.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
                <div style={{ fontWeight: 800, color: 'var(--color-sunset-orange)', fontSize: '1.25rem', marginBottom: '0.35rem' }}>2023</div>
                <h4 style={{ fontSize: '1.15rem', color: 'var(--color-deep-emerald)', marginBottom: '0.5rem' }}>Santiniketan (Visva-Bharati)</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--color-charcoal-muted)', lineHeight: '1.55', margin: 0 }}>
                  Rabindranath Tagore's utopian residential school and art center founded upon open-air humanistic education.
                </p>
              </div>
            </div>
          </div>

          {/* Pillars of Integrity */}
          <div>
            <div className="section-title-wrap">
              <span className="section-eyebrow">Our Editorial Code</span>
              <h2>Pillars of Platform Transparency</h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
              <div style={{ padding: '2rem', background: '#FFFFFF', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border)' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'var(--color-verified-bg)', color: 'var(--color-forest-green)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                  <ShieldCheck size={22} />
                </div>
                <h4 style={{ fontSize: '1.2rem', color: 'var(--color-deep-emerald)', marginBottom: '0.5rem' }}>
                  Transparent Pricing Rules
                </h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--color-charcoal-muted)', lineHeight: '1.6', margin: 0 }}>
                  We never fabricate prices or hide mandatory expenses. All package figures clearly disclose exclusions, tax conditions, and price basis (per person or per room).
                </p>
              </div>

              <div style={{ padding: '2rem', background: '#FFFFFF', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border)' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'var(--color-verified-bg)', color: 'var(--color-forest-green)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                  <Award size={22} />
                </div>
                <h4 style={{ fontSize: '1.2rem', color: 'var(--color-deep-emerald)', marginBottom: '0.5rem' }}>
                  Direct Outbound Links
                </h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--color-charcoal-muted)', lineHeight: '1.6', margin: 0 }}>
                  We provide direct links to official property websites and government reservation portals like WBTDCL and WBFDC so you book at genuine official tariffs without middleman markups.
                </p>
              </div>

              <div style={{ padding: '2rem', background: '#FFFFFF', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border)' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'var(--color-verified-bg)', color: 'var(--color-forest-green)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                  <Heart size={22} />
                </div>
                <h4 style={{ fontSize: '1.2rem', color: 'var(--color-deep-emerald)', marginBottom: '0.5rem' }}>
                  Responsible Conservation
                </h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--color-charcoal-muted)', lineHeight: '1.6', margin: 0 }}>
                  We strictly uphold wildlife protection acts, promote GI-tagged artisans directly, advocate zero beach-driving in Mandarmani, and enforce seasonal breeding closures.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
