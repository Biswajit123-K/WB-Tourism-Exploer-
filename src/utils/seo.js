// Explore Bengal — SEO & Schema.org JSON-LD Utilities

/**
 * Generates Schema.org TouristDestination structured data
 */
export function generateTouristDestinationSchema(destination) {
  if (!destination) return null;

  return {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    "name": destination.name,
    "description": destination.shortDescription,
    "image": destination.heroImage,
    "touristType": destination.categoryLabel,
    "geo": destination.coordinates ? {
      "@type": "GeoCoordinates",
      "latitude": destination.coordinates.latitude,
      "longitude": destination.coordinates.longitude
    } : undefined,
    "publicAccess": true
  };
}

/**
 * Generates Schema.org TourPackage / Trip structured data
 */
export function generateTourPackageSchema(pkg) {
  if (!pkg) return null;

  return {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    "name": pkg.name,
    "description": pkg.tagline,
    "image": pkg.heroImage,
    "touristType": pkg.category,
    "offers": {
      "@type": "Offer",
      "price": pkg.pricing.amount,
      "priceCurrency": pkg.pricing.currency,
      "availability": "https://schema.org/InStock",
      "description": pkg.pricing.basis
    }
  };
}

/**
 * Generates Schema.org Hotel structured data
 */
export function generateHotelSchema(hotel) {
  if (!hotel) return null;

  return {
    "@context": "https://schema.org",
    "@type": "Hotel",
    "name": hotel.name,
    "description": hotel.description,
    "image": hotel.heroImage,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": hotel.address,
      "addressRegion": "West Bengal",
      "addressCountry": "IN"
    },
    "geo": hotel.coordinates ? {
      "@type": "GeoCoordinates",
      "latitude": hotel.coordinates.latitude,
      "longitude": hotel.coordinates.longitude
    } : undefined,
    "telephone": hotel.contactPhone || undefined,
    "priceRange": hotel.price ? `₹${hotel.price.amount} ${hotel.price.basis}` : "Price upon request"
  };
}

/**
 * Generates WebSite Schema with Sitelinks Searchbox
 */
export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Explore Bengal",
    "alternateName": "West Bengal Tourism Guide",
    "url": "https://explorebengal.org",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://explorebengal.org/destinations?search={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };
}
