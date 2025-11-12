import Script from "next/script";

const StructuredData = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    "@id": "https://exotictmspa.co.za/#organization",
    "name": "Exotic Touch Mobile Spa",
    "description": "Luxury mobile spa treatments in Cape Town. Professional massages, facials, manicures, pedicures, waxing, and lash services delivered to your doorstep.",
    "url": "https://exotictmspa.co.za",
    "telephone": "+27684984179",
    "priceRange": "R350-R1500",
    "image": [
      "https://exotictmspa.co.za/hero-spa.jpg",
      "https://exotictmspa.co.za/massage-treatment.jpg",
      "https://exotictmspa.co.za/facial-treatment.jpg"
    ],
    "logo": "https://exotictmspa.co.za/favicon.png",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Cape Town",
      "addressRegion": "Western Cape",
      "addressCountry": "ZA",
      "addressArea": "Cape Town and Surrounds"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "-33.9249",
      "longitude": "18.4241"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Cape Town"
      },
      {
        "@type": "City",
        "name": "Stellenbosch"
      },
      {
        "@type": "City",
        "name": "Paarl"
      }
    ],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ],
        "opens": "09:00",
        "closes": "20:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Sunday",
        "opens": "10:00",
        "closes": "18:00"
      }
    ],
    "serviceType": "Mobile Spa Services",
    "currenciesAccepted": "ZAR",
    "makesOffer": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Swedish Massage",
          "description": "Relaxing full-body massage"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Deep Tissue Massage",
          "description": "Therapeutic deep muscle massage"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Facials",
          "description": "Professional facial treatments"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Manicures & Pedicures",
          "description": "Nail care and beautification services"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Waxing",
          "description": "Professional hair removal services"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Lash Extensions",
          "description": "Eyelash extension services"
        }
      }
    ],
    "sameAs": [
      "https://wa.me/27684984179"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "50",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};

export default StructuredData;
