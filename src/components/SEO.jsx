import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function SEO({
  title = "Explore Bengal — Discover Bengal. Experience the Extraordinary.",
  description = "A complete, trustworthy digital travel guide for West Bengal: explore destinations, plan independent trips, compare packages transparently, and find verified hotels.",
  canonical,
  schema,
  ogImage = "https://images.unsplash.com/photo-1544634076-a90160ddf44c?auto=format&fit=crop&w=1200&q=80"
}) {
  const fullTitle = title.includes("Explore Bengal") ? title : `${title} | Explore Bengal`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {canonical && <link rel="canonical" href={canonical} />}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* JSON-LD Schema */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
}
