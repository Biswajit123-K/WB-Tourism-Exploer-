# Explore Bengal (West Bengal Tourism Platform)

> **"Discover Bengal. Experience the Extraordinary."**

Explore Bengal is a comprehensive, production-quality, responsive, interactive, and SEO-friendly tourism web platform designed to empower travelers to discover West Bengal, plan independent trips, compare tour packages with transparent pricing, and research verified hotels and resorts.

---

## 🌟 Key Features

1. **Complete Destination Guides (`/destinations` & `/destinations/:slug`)**
   - In-depth, verified travel intelligence for 18+ West Bengal destinations spanning the Himalayas, Sundarbans mangrove delta, coastal Bay of Bengal, and Rarh terracotta heartland.
   - Comprehensive attraction directories with visiting hours, entry fees, access notes, and Google Maps pins.
   - Multi-modal transit instructions (air, train, highway routes, and local transit).
   - Seasonal climate matrices ("Best Time to Visit") and realistic suggested itineraries (1-day, 2-day, 3-day).
   - Cultural specialties, artisan craft guides, travel advisories, and destination-specific FAQs.

2. **Independent Travel Planner (`/plan-your-trip`)**
   - 4-step interactive wizard empowering travelers to organize journeys without an agency.
   - Supports any origin city or station (Kolkata, Siliguri, Durgapur, Asansol, Howrah, or custom address) with optional waypoints.
   - Generates day-by-day schedules with suggested attractions and travel intervals.
   - Itemized transparent budget calculator (transportation, lodging, food, local transit, entry fees, contingency) with explicit assumptions.
   - Reusable `MapDirections` component generating valid Google Maps Directions URLs.
   - Save itineraries to browser `localStorage`, copy route links, and clean browser print layout.

3. **Transparent Tour Package Comparison (`/tour-packages` & `/tour-packages/:slug`)**
   - Authentic packages with honest pricing rules (verified current tariffs vs indicative sample estimates).
   - Multi-package Comparison Engine: Select up to 3 packages and compare them side by side in a detailed responsive matrix.
   - Full disclosure of accommodations, transport, meals, included activities, and excluded expenses.
   - Package detail pages with day-by-day itineraries, cost breakdowns, cancellation terms, and verified booking inquiry forms.

4. **Verified Hotels and Resorts Directory (`/hotels`)**
   - Curated directory across heritage luxury properties, WBTDC government lodges, beach resorts, jungle eco-lodges, and boutique homestays.
   - Multi-facet filtering by destination, property category, amenities, and price tier.
   - Verification status badges citing official property sources and verified dates.
   - Direct outbound links to official booking portals with transparent redirection notices.

5. **Travel Guides & Practical Advisory (`/travel-guides`)**
   - In-depth editorial articles covering seasons and weather, Bengal's railway network, the five-course Bengali culinary trail, and national park permit protocols.

6. **Global Search & Seamless Navigation**
   - Universal search modal (`⌘K` / `Ctrl+K` or search trigger) searching across destinations, attractions, packages, hotels, and guides with instant filtering and keyboard navigation.
   - Responsive navbar with mobile drawer.
   - Global footer with verified official helplines (WBTDCL, Police 112, Forest Dept) and travel disclaimers.

7. **Design System & Performance**
   - Forest Green (`#174C3C`), Deep Emerald (`#0D3028`), Warm Sand (`#F4EBDD`), Sunset Orange (`#E88B52`), Cream White (`#FFFCF6`), and Charcoal (`#252A27`).
   - Editorial typography pairing Playfair Display and Manrope/Inter.
   - Lenis smooth scrolling with reduced-motion accessibility support.
   - Schema.org JSON-LD structured data via React Helmet Async, `sitemap.xml`, and `robots.txt`.

---

## 🛠️ Technology Stack

- **Framework**: React.js (v19) + Vite
- **Routing**: React Router DOM (v7)
- **Smooth Scroll**: Lenis (`lenis`)
- **Animations**: GSAP (`gsap`)
- **Sliders & Carousels**: Swiper.js (`swiper`)
- **Icons**: Lucide React (`lucide-react`)
- **Maps**: Leaflet (`leaflet`, `react-leaflet`) + Google Maps Directions URLs
- **SEO**: React Helmet Async (`react-helmet-async`)
- **Styling**: Modular CSS design system with CSS custom properties

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18.0.0 or higher)
- npm (v9.0.0 or higher)

### Installation

1. Navigate to the project directory:
   ```bash
   cd explore-bengal
   ```

2. Install dependencies (if not already installed):
   ```bash
   npm install
   ```

3. Launch the development server:
   ```bash
   npm run dev
   ```
   Open your browser at `http://localhost:5173`.

4. Build for production:
   ```bash
   npm run build
   ```

5. Preview the production build:
   ```bash
   npm run preview
   ```

---

## 📂 Project Architecture

```
explore-bengal/
├── index.html                  # HTML entry point with Google Fonts & Leaflet CSS
├── package.json                # Project dependencies and build scripts
├── vite.config.js              # Vite configuration
├── public/
│   ├── favicon.svg             # Explore Bengal brand favicon
│   ├── robots.txt              # Search engine crawling rules
│   └── sitemap.xml             # Complete XML sitemap
└── src/
    ├── main.jsx                # Application entry point
    ├── App.jsx                 # Routes, Lenis smooth scroll, comparison state
    ├── index.css               # Main stylesheet imports
    ├── styles/
    │   ├── variables.css       # Design tokens & color palette
    │   ├── global.css          # Reset, typography & buttons
    │   ├── components.css      # Navigation, cards & modal styles
    │   └── responsive.css      # Breakpoint adaptations
    ├── data/
    │   ├── destinations.js     # 18 Bengal destinations dataset
    │   ├── attractions.js      # Verified attractions directory
    │   ├── packages.js         # Tour packages & pricing breakdowns
    │   ├── hotels.js           # Verified accommodations directory
    │   └── travelGuides.js     # Editorial guides & transit advisories
    ├── utils/
    │   ├── maps.js             # Google Maps directions URL builder
    │   ├── itinerary.js        # Independent itinerary generator algorithm
    │   ├── pricing.js          # Transparent itemized budget calculator
    │   └── seo.js              # Schema.org JSON-LD generators
    ├── components/
    │   ├── Navbar.jsx          # Responsive header & mobile drawer
    │   ├── Footer.jsx          # Helplines, offices & disclaimer
    │   ├── SearchModal.jsx     # Global search modal (Cmd+K)
    │   ├── DestinationCard.jsx # Destination grid cards
    │   ├── AttractionCard.jsx  # Attraction directory cards with map link
    │   ├── PackageCard.jsx     # Tour package cards with compare toggle
    │   ├── PackageComparisonModal.jsx # Multi-package side-by-side comparison
    │   ├── HotelCard.jsx       # Verified hotel cards with outbound notice
    │   ├── MapDirections.jsx   # Interactive route planner component
    │   ├── Breadcrumbs.jsx     # Semantic breadcrumbs navigation
    │   └── SEO.jsx             # Dynamic meta tags & schema injection
    └── pages/
        ├── Home.jsx            # 11 core homepage sections A-K
        ├── Destinations.jsx    # Filterable destination catalog
        ├── DestinationDetails.jsx # Comprehensive 13-section destination guide
        ├── TourPackages.jsx    # Package listing with floating compare dock
        ├── PackageDetails.jsx  # Package detail view & inquiry modal
        ├── Hotels.jsx          # Verified hotel directory with filters
        ├── PlanYourTrip.jsx    # Multi-step independent travel planner
        ├── TravelGuides.jsx    # Editorial travel guide articles
        ├── About.jsx           # Mission, UNESCO heritage & ethics
        ├── Contact.jsx         # Official helplines & inquiry form
        └── NotFound.jsx        # 404 error page
```

---

## 📜 Ethical & Information Disclaimer

Explore Bengal is an independent digital travel platform created to empower travelers with authentic travel intelligence. All package figures, tariffs, and route intervals are indicative estimates or verified historical records intended to facilitate transparent budgeting. Explore Bengal does not operate as an unlicensed travel broker. Please confirm live schedules and permit availability with relevant government authorities and registered operators prior to departure.
