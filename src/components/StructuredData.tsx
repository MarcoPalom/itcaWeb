export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": "FICSM - Festival Internacional en la Costa del Seno Mexicano",
    "description": "Festival Internacional en la Costa del Seno Mexicano. Evento cultural que reúne artistas nacionales e internacionales en Tamaulipas. Música, danza, teatro y artes visuales.",
    "url": "https://ficsm.com",
    "image": "https://ficsm.com/images/logos/logo.png",
    "startDate": "2025-01-01",
    "endDate": "2025-12-31",
    "eventStatus": "https://schema.org/EventScheduled",
    "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
    "location": {
      "@type": "Place",
      "name": "Tamaulipas, México",
      "address": {
        "@type": "PostalAddress",
        "addressRegion": "Tamaulipas",
        "addressCountry": "MX"
      }
    },
    "organizer": {
      "@type": "Organization",
      "name": "FICSM",
      "url": "https://ficsm.com"
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "MXN",
      "availability": "https://schema.org/InStock"
    },
    "performer": [
      {
        "@type": "Organization",
        "name": "Artistas Nacionales"
      },
      {
        "@type": "Organization", 
        "name": "Artistas Internacionales"
      },
      {
        "@type": "Organization",
        "name": "Artistas Tamaulipecos"
      }
    ],
    "genre": ["Cultura", "Música", "Danza", "Teatro", "Artes Visuales"],
    "inLanguage": "es-MX"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
