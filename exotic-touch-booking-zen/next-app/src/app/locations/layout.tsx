import type { Metadata } from "next";
import PageStructuredData from "@/components/PageStructuredData";

export const metadata: Metadata = {
  title: "Service Areas | Mobile Spa Locations",
  description: "We bring luxury mobile spa treatments to locations across Cape Town and surrounds. Serving Stellenbosch, Paarl, Somerset West, Constantia, Camps Bay, Sea Point, and more.",
  keywords: ["mobile spa locations", "spa service areas", "Cape Town spa", "Stellenbosch spa", "Paarl spa", "mobile spa near me"],
  alternates: {
    canonical: "https://exotictmspa.co.za/locations",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: "Service Areas | Exotic Touch",
    description: "We bring luxury mobile spa treatments to locations across Cape Town and surrounds.",
    url: "https://exotictmspa.co.za/locations",
    images: [
      {
        url: "/hero-spa.jpg",
        width: 1200,
        height: 630,
        alt: "Mobile spa service areas in Cape Town",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Service Areas | Exotic Touch",
    description: "We bring luxury mobile spa treatments to locations across Cape Town.",
    images: ["/hero-spa.jpg"],
  },
};

export default function LocationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <PageStructuredData
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Locations", url: "/locations" },
        ]}
        pageType="CollectionPage"
        pageName="Service Areas | Mobile Spa Locations"
        pageDescription="We bring luxury mobile spa treatments to locations across Cape Town and surrounds. Serving Stellenbosch, Paarl, Somerset West, Constantia, Camps Bay, Sea Point, and more."
        pageUrl="/locations"
      />
      {children}
    </>
  );
}

