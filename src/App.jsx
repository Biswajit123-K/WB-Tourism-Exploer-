import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Lenis from 'lenis';

// Styles
import './index.css';

// Components
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import SearchModal from './components/SearchModal.jsx';
import PackageComparisonModal from './components/PackageComparisonModal.jsx';

// Pages
import Home from './pages/Home.jsx';
import Destinations from './pages/Destinations.jsx';
import DestinationDetails from './pages/DestinationDetails.jsx';
import TourPackages from './pages/TourPackages.jsx';
import PackageDetails from './pages/PackageDetails.jsx';
import Hotels from './pages/Hotels.jsx';
import PlanYourTrip from './pages/PlanYourTrip.jsx';
import TravelGuides from './pages/TravelGuides.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import NotFound from './pages/NotFound.jsx';

// Scroll to top automatically on route changes
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  // Global search modal state
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Package comparison state (up to 3 packages)
  const [comparedPackages, setComparedPackages] = useState([]);
  const [isComparisonOpen, setIsComparisonOpen] = useState(false);

  // Lenis smooth scroll setup
  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      smooth: true,
      smoothTouch: false
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const animFrame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animFrame);
      lenis.destroy();
    };
  }, []);

  const handleToggleCompare = (pkg) => {
    setComparedPackages((prev) => {
      const exists = prev.some((p) => p.id === pkg.id);
      if (exists) {
        return prev.filter((p) => p.id !== pkg.id);
      }
      if (prev.length >= 3) {
        alert("You can compare a maximum of 3 packages side by side. Please remove one before adding another.");
        return prev;
      }
      return [...prev, pkg];
    });
  };

  const handleRemoveCompare = (pkgId) => {
    setComparedPackages((prev) => prev.filter((p) => p.id !== pkgId));
  };

  const handleClearCompare = () => {
    setComparedPackages([]);
  };

  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          {/* Main Top Navigation */}
          <Navbar onOpenSearch={() => setIsSearchOpen(true)} />

          {/* Page Routing */}
          <main style={{ flexGrow: 1 }}>
            <Routes>
              <Route
                path="/"
                element={
                  <Home
                    onOpenComparison={() => setIsComparisonOpen(true)}
                    onToggleCompare={handleToggleCompare}
                    comparedPackages={comparedPackages}
                  />
                }
              />
              <Route path="/destinations" element={<Destinations />} />
              <Route
                path="/destinations/:slug"
                element={
                  <DestinationDetails
                    onToggleCompare={handleToggleCompare}
                    comparedPackages={comparedPackages}
                  />
                }
              />
              <Route
                path="/tour-packages"
                element={
                  <TourPackages
                    onOpenComparison={() => setIsComparisonOpen(true)}
                    onToggleCompare={handleToggleCompare}
                    comparedPackages={comparedPackages}
                    onClearComparison={handleClearCompare}
                  />
                }
              />
              <Route path="/tour-packages/:slug" element={<PackageDetails />} />
              <Route path="/hotels" element={<Hotels />} />
              <Route path="/plan-your-trip" element={<PlanYourTrip />} />
              <Route path="/travel-guides" element={<TravelGuides />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>

          {/* Persistent Global Footer */}
          <Footer />

          {/* Universal Global Search Modal (Ctrl/Cmd+K) */}
          <SearchModal
            isOpen={isSearchOpen}
            onClose={() => setIsSearchOpen(false)}
          />

          {/* Side-by-side Package Comparison Modal */}
          <PackageComparisonModal
            isOpen={isComparisonOpen}
            onClose={() => setIsComparisonOpen(false)}
            comparedPackages={comparedPackages}
            onRemovePackage={handleRemoveCompare}
            onClearAll={handleClearCompare}
          />
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
}
