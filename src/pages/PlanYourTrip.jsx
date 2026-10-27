import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { 
  Compass, MapPin, Calendar, Users, Train, Car, Bus, Plane, 
  DollarSign, Check, AlertCircle, Printer, Bookmark, Copy, 
  ExternalLink, ArrowRight, ArrowLeft, RefreshCw, Trash2, Clock, Hotel, ShieldCheck
} from 'lucide-react';
import { DESTINATIONS, getDestinationBySlug } from '../data/destinations.js';
import { generateSuggestedItinerary } from '../utils/itinerary.js';
import { calculateTripBudget } from '../utils/pricing.js';
import { buildGoogleMapsDirectionsUrl } from '../utils/maps.js';
import MapDirections from '../components/MapDirections.jsx';
import Breadcrumbs from '../components/Breadcrumbs.jsx';
import SEO from '../components/SEO.jsx';

export default function PlanYourTrip() {
  const [searchParams] = useSearchParams();

  // Wizard Step (1 to 4)
  const [currentStep, setCurrentStep] = useState(1);

  // Form State
  const [origin, setOrigin] = useState(searchParams.get('origin') || 'Kolkata');
  const [destinationSlug, setDestinationSlug] = useState(searchParams.get('destination') || 'darjeeling');
  const [waypoint, setWaypoint] = useState('');
  
  const [travelMonth, setTravelMonth] = useState(searchParams.get('month') || 'October');
  const [departureDate, setDepartureDate] = useState('');
  const [days, setDays] = useState(parseInt(searchParams.get('days')) || 3);
  const [adults, setAdults] = useState(parseInt(searchParams.get('travelers')) || 2);
  const [children, setChildren] = useState(0);
  const [budgetTier, setBudgetTier] = useState('moderate');
  const [interests, setInterests] = useState(['nature', 'heritage']);

  const [transportMode, setTransportMode] = useState('train');

  // Generated Result State
  const [generatedPlan, setGeneratedPlan] = useState(null);
  const [generatedBudget, setGeneratedBudget] = useState(null);
  const [errorMsg, setErrorMsg] = useState('');
  const [saveSuccessMsg, setSaveSuccessMsg] = useState('');
  const [copySuccessMsg, setCopySuccessMsg] = useState('');

  // Auto-generate if URL params provided
  useEffect(() => {
    if (searchParams.get('destination')) {
      const destParam = searchParams.get('destination');
      setDestinationSlug(destParam);
      generatePlan(origin, destParam, days, adults, children, budgetTier, transportMode, interests);
      setCurrentStep(4);
    }
  }, []);

  const handleNextStep = () => {
    setErrorMsg('');
    if (currentStep === 1) {
      if (!origin.trim()) {
        setErrorMsg('Please enter your starting location.');
        return;
      }
      if (!destinationSlug) {
        setErrorMsg('Please select a destination.');
        return;
      }
      setCurrentStep(2);
    } else if (currentStep === 2) {
      if (days < 1 || days > 10) {
        setErrorMsg('Trip duration must be between 1 and 10 days.');
        return;
      }
      if (adults < 1) {
        setErrorMsg('At least 1 adult traveler is required.');
        return;
      }
      setCurrentStep(3);
    } else if (currentStep === 3) {
      generatePlan(origin, destinationSlug, days, adults, children, budgetTier, transportMode, interests);
      setCurrentStep(4);
    }
  };

  const generatePlan = (orig, destSlug, d, ad, ch, tier, tMode, ints) => {
    const itinerary = generateSuggestedItinerary({
      origin: orig,
      destinationSlug: destSlug,
      days: d,
      interests: ints
    });

    const budget = calculateTripBudget({
      destinationSlug: destSlug,
      days: d,
      adults: ad,
      children: ch,
      budgetTier: tier,
      transportMode: tMode
    });

    setGeneratedPlan(itinerary);
    setGeneratedBudget(budget);
  };

  const toggleInterest = (interestId) => {
    if (interests.includes(interestId)) {
      setInterests(interests.filter(i => i !== interestId));
    } else {
      setInterests([...interests, interestId]);
    }
  };

  const handleSaveToLocalStorage = () => {
    if (!generatedPlan) return;
    const itineraryToSave = {
      id: Date.now(),
      savedAt: new Date().toLocaleDateString('en-IN'),
      origin,
      destinationSlug,
      destinationName: generatedPlan.destination.name,
      days,
      adults,
      children,
      budgetTier,
      transportMode,
      grandTotal: generatedBudget.grandTotal,
      perPersonCost: generatedBudget.perPersonCost
    };

    const existing = JSON.parse(localStorage.getItem('explore_bengal_saved_plans') || '[]');
    existing.unshift(itineraryToSave);
    localStorage.setItem('explore_bengal_saved_plans', JSON.stringify(existing.slice(0, 5)));

    setSaveSuccessMsg('Itinerary successfully saved to your browser local storage!');
    setTimeout(() => setSaveSuccessMsg(''), 4000);
  };

  const handleCopyRouteLink = () => {
    const waypoints = waypoint.trim() ? [waypoint.trim()] : [];
    const url = buildGoogleMapsDirectionsUrl(origin, `${generatedPlan.destination.name}, West Bengal`, transportMode === 'car' ? 'driving' : 'transit', waypoints);
    navigator.clipboard.writeText(url);
    setCopySuccessMsg('Google Maps Route link copied to clipboard!');
    setTimeout(() => setCopySuccessMsg(''), 4000);
  };

  const handlePrint = () => {
    window.print();
  };

  const selectedDestObj = getDestinationBySlug(destinationSlug) || DESTINATIONS[0];

  return (
    <>
      <SEO
        title="Independent Trip Planner — West Bengal Tourism"
        description="Plan your customized West Bengal trip independently without an agency. Day-by-day itineraries, Google Maps directions, and transparent itemized budgets."
      />

      {/* Header */}
      <div style={{ background: 'var(--color-warm-sand-light)', borderBottom: '1px solid var(--color-border)', padding: '2.5rem 0' }}>
        <div className="container">
          <Breadcrumbs items={[{ label: 'Plan Your Trip' }]} />
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--color-deep-emerald)', marginTop: '0.5rem', marginBottom: '0.75rem' }}>
            Independent Trip Planner
          </h1>
          <p style={{ maxWidth: '760px', fontSize: '1.05rem', color: 'var(--color-charcoal-muted)', margin: 0 }}>
            Design your custom West Bengal journey from any starting city. Generate realistic day-by-day itineraries, direct Google Maps routes, and transparent itemized cost estimates.
          </p>

          {/* Progress Indicator */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginTop: '2rem', maxWidth: '640px' }}>
            {[
              { num: 1, label: 'Select Route' },
              { num: 2, label: 'Travel Details' },
              { num: 3, label: 'Transport' },
              { num: 4, label: 'Your Itinerary' }
            ].map((step) => {
              const isActive = currentStep === step.num;
              const isPassed = currentStep > step.num;
              return (
                <div
                  key={step.num}
                  style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.35rem', cursor: isPassed ? 'pointer' : 'default' }}
                  onClick={() => isPassed && setCurrentStep(step.num)}
                >
                  <div
                    style={{
                      height: '6px',
                      borderRadius: 'var(--radius-full)',
                      background: isActive ? 'var(--color-sunset-orange)' : isPassed ? 'var(--color-forest-green)' : 'var(--color-border)',
                      transition: 'background var(--transition-fast)'
                    }}
                  />
                  <span style={{ fontSize: '0.78rem', fontWeight: isActive ? 700 : 500, color: isActive ? 'var(--color-deep-emerald)' : 'var(--color-charcoal-muted)' }}>
                    Step {step.num}: {step.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="section" style={{ background: '#FFFFFF' }}>
        <div className="container" style={{ maxWidth: currentStep === 4 ? '1140px' : '760px' }}>
          {errorMsg && (
            <div style={{ background: '#FEE2E2', color: '#991B1B', padding: '1rem', borderRadius: 'var(--radius-md)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <AlertCircle size={18} />
              <span>{errorMsg}</span>
            </div>
          )}

          {saveSuccessMsg && (
            <div style={{ background: 'var(--color-verified-bg)', color: 'var(--color-verified-text)', padding: '1rem', borderRadius: 'var(--radius-md)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <Check size={18} />
              <span>{saveSuccessMsg}</span>
            </div>
          )}

          {copySuccessMsg && (
            <div style={{ background: 'var(--color-verified-bg)', color: 'var(--color-verified-text)', padding: '1rem', borderRadius: 'var(--radius-md)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <Check size={18} />
              <span>{copySuccessMsg}</span>
            </div>
          )}

          {/* STEP 1: ROUTE SELECTION */}
          {currentStep === 1 && (
            <div className="card-base" style={{ padding: '2.5rem' }}>
              <h2 style={{ fontSize: '1.6rem', color: 'var(--color-deep-emerald)', marginBottom: '0.5rem' }}>
                Step 1: Choose Your Origin and Destination
              </h2>
              <p style={{ color: 'var(--color-charcoal-muted)', fontSize: '0.92rem', marginBottom: '2rem' }}>
                You can start from any city or township in West Bengal (or beyond). Do not assume your journey starts in Kolkata.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-deep-emerald)', marginBottom: '0.4rem', textTransform: 'uppercase' }}>
                    Starting Town, City or Station (Origin)
                  </label>
                  <input
                    type="text"
                    className="input-field"
                    placeholder="e.g. Kolkata, Howrah, Siliguri, Durgapur, Asansol..."
                    value={origin}
                    onChange={(e) => setOrigin(e.target.value)}
                  />
                  <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem', flexWrap: 'wrap' }}>
                    {['Kolkata', 'Siliguri', 'Durgapur', 'Asansol', 'Howrah'].map((city) => (
                      <button
                        key={city}
                        type="button"
                        onClick={() => setOrigin(city)}
                        style={{ fontSize: '0.78rem', background: 'var(--color-warm-sand)', border: 'none', borderRadius: 'var(--radius-sm)', padding: '0.25rem 0.6rem', cursor: 'pointer', color: 'var(--color-deep-emerald)' }}
                      >
                        {city}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-deep-emerald)', marginBottom: '0.4rem', textTransform: 'uppercase' }}>
                    Bengal Destination
                  </label>
                  <select
                    className="select-field"
                    value={destinationSlug}
                    onChange={(e) => setDestinationSlug(e.target.value)}
                  >
                    {DESTINATIONS.map((d) => (
                      <option key={d.id} value={d.slug}>
                        {d.name} — {d.categoryLabel} ({d.recommendedDuration})
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-deep-emerald)', marginBottom: '0.4rem', textTransform: 'uppercase' }}>
                    Optional Intermediate Stop / Waypoint
                  </label>
                  <input
                    type="text"
                    className="input-field"
                    placeholder="e.g. Kurseong, Shantiniketan, Kolaghat..."
                    value={waypoint}
                    onChange={(e) => setWaypoint(e.target.value)}
                  />
                  <span style={{ fontSize: '0.78rem', color: 'var(--color-charcoal-muted)', marginTop: '0.25rem', display: 'block' }}>
                    Leave blank for direct route.
                  </span>
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <button type="button" onClick={handleNextStep} className="btn btn-primary">
                  <span>Continue to Travel Details</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: TRAVEL DETAILS */}
          {currentStep === 2 && (
            <div className="card-base" style={{ padding: '2.5rem' }}>
              <h2 style={{ fontSize: '1.6rem', color: 'var(--color-deep-emerald)', marginBottom: '0.5rem' }}>
                Step 2: Enter Travel Dates & Preferences
              </h2>
              <p style={{ color: 'var(--color-charcoal-muted)', fontSize: '0.92rem', marginBottom: '2rem' }}>
                Specify party size, duration, and travel interests to calibrate your day schedule and budget.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem', marginBottom: '1.75rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: 'var(--color-deep-emerald)', marginBottom: '0.4rem', textTransform: 'uppercase' }}>
                    Travel Month or Date
                  </label>
                  <select
                    className="select-field"
                    value={travelMonth}
                    onChange={(e) => setTravelMonth(e.target.value)}
                  >
                    {['October (Autumn Peak)', 'November (Festivals)', 'December (Winter)', 'January (Winter Peak)', 'February (Pleasant)', 'March (Spring)', 'April (Spring)', 'May (Pre-Monsoon)', 'Monsoon Season'].map((m) => (
                      <option key={m} value={m}>{m}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: 'var(--color-deep-emerald)', marginBottom: '0.4rem', textTransform: 'uppercase' }}>
                    Trip Duration (Days)
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="10"
                    className="input-field"
                    value={days}
                    onChange={(e) => setDays(e.target.value)}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem', marginBottom: '1.75rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: 'var(--color-deep-emerald)', marginBottom: '0.4rem', textTransform: 'uppercase' }}>
                    Adult Travelers
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="15"
                    className="input-field"
                    value={adults}
                    onChange={(e) => setAdults(e.target.value)}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: 'var(--color-deep-emerald)', marginBottom: '0.4rem', textTransform: 'uppercase' }}>
                    Children (Under 12)
                  </label>
                  <input
                    type="number"
                    min="0"
                    max="10"
                    className="input-field"
                    value={children}
                    onChange={(e) => setChildren(e.target.value)}
                  />
                </div>
              </div>

              {/* Budget Tier */}
              <div style={{ marginBottom: '1.75rem' }}>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: 'var(--color-deep-emerald)', marginBottom: '0.6rem', textTransform: 'uppercase' }}>
                  Budget Tier
                </label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
                  {[
                    { id: 'budget', title: 'Budget', desc: 'Homestays, public transit, local eateries' },
                    { id: 'moderate', title: 'Moderate', desc: 'WBTDC lodges / 3-star, AC cabs, comfort' },
                    { id: 'luxury', title: 'Luxury', desc: 'Heritage resorts, dedicated SUV, fine dining' }
                  ].map((tier) => {
                    const isSelected = budgetTier === tier.id;
                    return (
                      <div
                        key={tier.id}
                        onClick={() => setBudgetTier(tier.id)}
                        style={{
                          padding: '1rem',
                          borderRadius: 'var(--radius-md)',
                          border: `1.5px solid ${isSelected ? 'var(--color-forest-green)' : 'var(--color-border)'}`,
                          background: isSelected ? 'var(--color-warm-sand-light)' : '#FFFFFF',
                          cursor: 'pointer',
                          textAlign: 'center'
                        }}
                      >
                        <div style={{ fontWeight: 700, color: 'var(--color-deep-emerald)', marginBottom: '0.2rem' }}>{tier.title}</div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--color-charcoal-muted)' }}>{tier.desc}</div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Travel Interests */}
              <div style={{ marginBottom: '2rem' }}>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: 'var(--color-deep-emerald)', marginBottom: '0.6rem', textTransform: 'uppercase' }}>
                  Travel Interests (Select all that apply)
                </label>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                  {[
                    { id: 'nature', label: 'Nature & Scenery' },
                    { id: 'heritage', label: 'Heritage & History' },
                    { id: 'wildlife', label: 'Wildlife & Safaris' },
                    { id: 'food', label: 'Food & Sweets' },
                    { id: 'beaches', label: 'Beaches & Relaxation' },
                    { id: 'crafts', label: 'Artisans & Handicrafts' },
                    { id: 'spirituality', label: 'Spirituality & Temples' }
                  ].map((int) => {
                    const isChecked = interests.includes(int.id);
                    return (
                      <button
                        key={int.id}
                        type="button"
                        onClick={() => toggleInterest(int.id)}
                        className={`badge ${isChecked ? 'badge-verified' : 'badge-sample'}`}
                        style={{ cursor: 'pointer', padding: '0.5rem 0.85rem', fontSize: '0.82rem' }}
                      >
                        {int.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <button type="button" onClick={() => setCurrentStep(1)} className="btn btn-outline">
                  <ArrowLeft size={16} />
                  <span>Back</span>
                </button>
                <button type="button" onClick={handleNextStep} className="btn btn-primary">
                  <span>Continue to Transport</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: CHOOSE TRANSPORT */}
          {currentStep === 3 && (
            <div className="card-base" style={{ padding: '2.5rem' }}>
              <h2 style={{ fontSize: '1.6rem', color: 'var(--color-deep-emerald)', marginBottom: '0.5rem' }}>
                Step 3: Choose Your Primary Transport Mode
              </h2>
              <p style={{ color: 'var(--color-charcoal-muted)', fontSize: '0.92rem', marginBottom: '2rem' }}>
                This preference determines your travel interval estimates, route navigation links, and budget calculations.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem', marginBottom: '2.5rem' }}>
                {[
                  {
                    id: 'train',
                    title: 'Train / Railway',
                    icon: Train,
                    desc: 'Express & Vande Bharat trains to nearest railhead (NJP, Rampurhat, Digha, Bolpur, etc.)'
                  },
                  {
                    id: 'car',
                    title: 'Private Car / Self-Drive',
                    icon: Car,
                    desc: 'Road highway journey with flexibility for scenic tea garden or coastal stopovers.'
                  },
                  {
                    id: 'bus',
                    title: 'Interstate / State Bus',
                    icon: Bus,
                    desc: 'Economical AC Volvo and express services operated by SBSTC / NBSTC.'
                  },
                  {
                    id: 'flight',
                    title: 'Flight + Connecting Cab',
                    icon: Plane,
                    desc: 'Fastest flight to Bagdogra / Kolkata, connecting to destination via pre-paid taxi.'
                  }
                ].map((m) => {
                  const Icon = m.icon;
                  const isSelected = transportMode === m.id;
                  return (
                    <div
                      key={m.id}
                      onClick={() => setTransportMode(m.id)}
                      style={{
                        padding: '1.5rem',
                        borderRadius: 'var(--radius-lg)',
                        border: `2px solid ${isSelected ? 'var(--color-sunset-orange)' : 'var(--color-border)'}`,
                        background: isSelected ? 'var(--color-warm-sand-light)' : '#FFFFFF',
                        cursor: 'pointer',
                        transition: 'all var(--transition-fast)'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem' }}>
                        <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: isSelected ? 'var(--color-sunset-orange)' : 'var(--color-warm-sand)', color: isSelected ? '#FFFFFF' : 'var(--color-deep-emerald)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <Icon size={18} />
                        </div>
                        <h4 style={{ fontSize: '1.1rem', color: 'var(--color-deep-emerald)', margin: 0 }}>
                          {m.title}
                        </h4>
                      </div>
                      <p style={{ fontSize: '0.84rem', color: 'var(--color-charcoal-muted)', lineHeight: '1.5', margin: 0 }}>
                        {m.desc}
                      </p>
                    </div>
                  );
                })}
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <button type="button" onClick={() => setCurrentStep(2)} className="btn btn-outline">
                  <ArrowLeft size={16} />
                  <span>Back</span>
                </button>
                <button type="button" onClick={handleNextStep} className="btn btn-primary btn-lg">
                  <Compass size={18} />
                  <span>Generate Custom Itinerary</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          )}

          {/* STEP 4: GENERATED ITINERARY & BUDGET BREAKDOWN */}
          {currentStep === 4 && generatedPlan && generatedBudget && (
            <div>
              {/* Itinerary Header & Action Toolbar */}
              <div style={{ background: 'var(--color-deep-emerald)', color: '#FFFFFF', padding: '2rem', borderRadius: 'var(--radius-lg)', marginBottom: '2.5rem', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1.5rem' }}>
                <div>
                  <span className="badge" style={{ background: 'rgba(232, 139, 82, 0.3)', color: 'var(--color-warm-sand)', marginBottom: '0.5rem' }}>
                    Custom Generated Plan
                  </span>
                  <h2 style={{ color: '#FFFFFF', fontSize: '1.85rem', marginBottom: '0.4rem' }}>
                    {origin} to {generatedPlan.destination.name} — {days} Days Journey
                  </h2>
                  <div style={{ fontSize: '0.88rem', color: 'var(--color-warm-sand)', display: 'flex', gap: '1.25rem', flexWrap: 'wrap' }}>
                    <span>Travelers: {adults} Adult(s){children > 0 ? `, ${children} Child(ren)` : ''}</span>
                    <span>•</span>
                    <span>Transit: {transportMode.toUpperCase()}</span>
                    <span>•</span>
                    <span>Tier: {budgetTier.toUpperCase()}</span>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
                  <button
                    type="button"
                    onClick={handleSaveToLocalStorage}
                    className="btn btn-outline-white btn-sm"
                    title="Save itinerary to browser local storage"
                  >
                    <Bookmark size={15} />
                    <span>Save</span>
                  </button>
                  <button
                    type="button"
                    onClick={handleCopyRouteLink}
                    className="btn btn-outline-white btn-sm"
                    title="Copy Google Maps directions link"
                  >
                    <Copy size={15} />
                    <span>Copy Route</span>
                  </button>
                  <button
                    type="button"
                    onClick={handlePrint}
                    className="btn btn-outline-white btn-sm"
                    title="Print or export as PDF"
                  >
                    <Printer size={15} />
                    <span>Print</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setCurrentStep(1)}
                    className="btn btn-primary btn-sm"
                  >
                    <RefreshCw size={15} />
                    <span>Edit Plan</span>
                  </button>
                </div>
              </div>

              {/* Day-by-Day Schedule */}
              <div style={{ marginBottom: '3rem' }}>
                <h3 style={{ fontSize: '1.5rem', color: 'var(--color-deep-emerald)', marginBottom: '1.5rem' }}>
                  Day-by-Day Itinerary Schedule
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  {generatedPlan.dailySchedule.map((dayPlan) => (
                    <div
                      key={dayPlan.day}
                      className="card-base"
                      style={{ padding: '2rem', borderLeft: '5px solid var(--color-forest-green)' }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.75rem' }}>
                        <span className="badge badge-category" style={{ background: 'var(--color-warm-sand)', color: 'var(--color-deep-emerald)', fontWeight: 700 }}>
                          Day {dayPlan.day}
                        </span>
                        <span style={{ fontSize: '0.82rem', color: 'var(--color-charcoal-muted)' }}>
                          {dayPlan.theme}
                        </span>
                      </div>

                      <h4 style={{ fontSize: '1.3rem', color: 'var(--color-deep-emerald)', marginBottom: '1.25rem' }}>
                        {dayPlan.title}
                      </h4>

                      {/* Timetable intervals */}
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '1.5rem' }}>
                        {dayPlan.schedule.map((slot, i) => (
                          <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', fontSize: '0.9rem' }}>
                            <div style={{ minWidth: '135px', fontWeight: 700, color: 'var(--color-forest-green)', fontSize: '0.82rem' }}>
                              {slot.time}
                            </div>
                            <div style={{ color: 'var(--color-charcoal)' }}>
                              {slot.activity}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Attractions allocated */}
                      {dayPlan.attractions.length > 0 && (
                        <div style={{ background: 'var(--color-warm-sand-light)', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
                          <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-deep-emerald)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                            Featured Sightseeing Stops:
                          </div>
                          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                            {dayPlan.attractions.map((att) => (
                              <span key={att.id} className="badge badge-category" style={{ background: '#FFFFFF' }}>
                                <MapPin size={12} style={{ color: 'var(--color-sunset-orange)' }} />
                                <span>{att.name} ({att.suggestedDuration})</span>
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Itemized Budget Breakdown */}
              <div className="card-base" style={{ padding: '2.5rem', marginBottom: '3rem', background: 'var(--color-warm-sand-light)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px solid var(--color-border)' }}>
                  <div>
                    <span className="section-eyebrow">Cost Transparency</span>
                    <h3 style={{ fontSize: '1.5rem', color: 'var(--color-deep-emerald)', margin: 0 }}>
                      Itemized Estimated Travel Budget
                    </h3>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: '1.85rem', fontWeight: 800, color: 'var(--color-deep-emerald)' }}>
                      ₹{generatedBudget.grandTotal.toLocaleString('en-IN')}
                    </div>
                    <span style={{ fontSize: '0.82rem', color: 'var(--color-charcoal-muted)' }}>
                      approx. ₹{generatedBudget.perPersonCost.toLocaleString('en-IN')} per person
                    </span>
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '2rem' }}>
                  {generatedBudget.breakdown.map((item, idx) => (
                    <div
                      key={idx}
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        background: '#FFFFFF',
                        padding: '1rem 1.25rem',
                        borderRadius: 'var(--radius-md)',
                        border: '1px solid var(--color-border)'
                      }}
                    >
                      <div>
                        <div style={{ fontWeight: 600, color: 'var(--color-deep-emerald)', fontSize: '0.95rem' }}>
                          {item.category}
                        </div>
                        <div style={{ fontSize: '0.82rem', color: 'var(--color-charcoal-muted)' }}>
                          {item.description}
                        </div>
                      </div>
                      <div style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--color-forest-green)' }}>
                        ₹{item.amount.toLocaleString('en-IN')}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Assumptions List */}
                <div style={{ background: '#FFFFFF', padding: '1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
                  <div style={{ fontWeight: 700, color: 'var(--color-deep-emerald)', fontSize: '0.85rem', marginBottom: '0.5rem', textTransform: 'uppercase' }}>
                    Explicit Cost Assumptions:
                  </div>
                  <ul style={{ paddingLeft: '1.25rem', margin: 0, fontSize: '0.82rem', color: 'var(--color-charcoal-muted)', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                    {generatedBudget.assumptions.map((assump, i) => (
                      <li key={i}>{assump}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Map Directions Component */}
              <div style={{ marginBottom: '3rem' }}>
                <MapDirections
                  defaultOrigin={origin}
                  defaultDestination={`${generatedPlan.destination.name}, West Bengal`}
                  defaultMode={transportMode === 'car' ? 'driving' : 'transit'}
                />
              </div>

              {/* Suggested Accommodations */}
              {generatedPlan.suggestedAccommodations.length > 0 && (
                <div style={{ marginBottom: '3rem' }}>
                  <h3 style={{ fontSize: '1.4rem', color: 'var(--color-deep-emerald)', marginBottom: '1.5rem' }}>
                    Recommended Verified Accommodations
                  </h3>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', alignItems:"stretch"  }}>
                    {generatedPlan.suggestedAccommodations.map((hotel) => (
                      <div key={hotel.id} className="card-base" style={{ padding: '1.5rem' }}>
                        <span className="badge badge-verified" style={{ marginBottom: '0.6rem' }}>
                          {hotel.categoryLabel}
                        </span>
                        <h4 style={{ fontSize: '1.2rem', color: 'var(--color-deep-emerald)', marginBottom: '0.4rem' }}>{hotel.name}</h4>
                        <div style={{ fontSize: '0.82rem', color: 'var(--color-charcoal-muted)', marginBottom: '0.75rem' }}>
                          <MapPin size={13} style={{ display: 'inline', marginRight: '3px' }} />
                          {hotel.locality}
                        </div>
                        <div style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--color-forest-green)', marginBottom: '1rem' }}>
                          ₹{hotel.price.amount.toLocaleString('en-IN')} {hotel.price.basis}
                        </div>
                        <a 
                          href={hotel.bookingUrl || hotel.officialWebsite}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-outline btn-sm"
                          style={{ width: '100%', justifyContent:'center', marginTop:"auto" }}
                        >
                          <span>Check Official Portal</span>
                          <ExternalLink size={14} />
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
