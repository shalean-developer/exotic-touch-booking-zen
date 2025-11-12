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
}

const PageStructuredData = ({
  breadcrumbs,
  serviceType,
  serviceName,
  serviceDescription,
  servicePrice,
  serviceImage,
}: PageStructuredDataProps) => {
  const structuredDataArray: object[] = [];

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
    const serviceData: any = {
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

