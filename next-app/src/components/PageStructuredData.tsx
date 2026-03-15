import Script from "next/script";

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface PageStructuredDataProps {
  breadcrumbs?: BreadcrumbItem[];
  serviceType?: string;
  serviceName?: string;
  serviceDescription?: string;
  servicePrice?: string;
  serviceImage?: string;
  pageType?: "WebPage" | "AboutPage" | "ContactPage" | "CollectionPage" | "ItemPage";
  pageName?: string;
  pageDescription?: string;
  pageUrl?: string;
}

const PageStructuredData = ({
  breadcrumbs,
  serviceType,
  serviceName,
  serviceDescription,
  servicePrice,
  serviceImage,
  pageType = "WebPage",
  pageName,
  pageDescription,
  pageUrl,
}: PageStructuredDataProps) => {
  const structuredDataArray: object[] = [];

  // Add WebPage schema for all pages
  const webPageData: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": pageType,
    "@id": pageUrl ? `https://exotictmspa.co.za${pageUrl}#webpage` : undefined,
    url: pageUrl ? `https://exotictmspa.co.za${pageUrl}` : "https://exotictmspa.co.za",
    name: pageName,
    description: pageDescription,
    inLanguage: "en-ZA",
    isPartOf: {
      "@id": "https://exotictmspa.co.za/#website",
    },
    about: {
      "@id": "https://exotictmspa.co.za/#organization",
    },
  };

  // Remove undefined fields
  Object.keys(webPageData).forEach((key) => {
    if (webPageData[key] === undefined) {
      delete webPageData[key];
    }
  });

  structuredDataArray.push(webPageData);

  // Add BreadcrumbList if breadcrumbs are provided
  if (breadcrumbs && breadcrumbs.length > 0) {
    structuredDataArray.push({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbs.map((crumb, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: crumb.name,
        item: `https://exotictmspa.co.za${crumb.url}`,
      })),
    });
  }

  // Add Service schema if service information is provided
  if (serviceType && serviceName) {
    const serviceData: Record<string, unknown> = {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: serviceType,
      name: serviceName,
      provider: {
        "@id": "https://exotictmspa.co.za/#organization",
      },
      areaServed: {
        "@type": "City",
        name: "Cape Town",
      },
    };

    if (serviceDescription) {
      serviceData.description = serviceDescription;
    }

    if (servicePrice) {
      serviceData.offers = {
        "@type": "Offer",
        price: servicePrice,
        priceCurrency: "ZAR",
      };
    }

    if (serviceImage) {
      serviceData.image = `https://exotictmspa.co.za${serviceImage}`;
    }

    structuredDataArray.push(serviceData);
  }

  if (structuredDataArray.length === 0) {
    return null;
  }

  return (
    <Script
      id="page-structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredDataArray.length === 1 ? structuredDataArray[0] : structuredDataArray),
      }}
    />
  );
};

export default PageStructuredData;

