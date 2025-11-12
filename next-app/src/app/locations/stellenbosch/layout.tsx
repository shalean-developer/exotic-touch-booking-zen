import type { Metadata } from "next";
import PageStructuredData from "@/components/PageStructuredData";

export const metadata: Metadata = {
  title: "Mobile Spa in Stellenbosch | Exotic Touch",
  description: "Luxury mobile spa services in Stellenbosch. Professional massages, facials, manicures, pedicures, waxing & lashes delivered to your location in the Winelands.",
  keywords: ["mobile spa Stellenbosch", "spa Stellenbosch", "massage Stellenbosch", "home spa Stellenbosch", "mobile beauty Stellenbosch"],
  alternates: {
    canonical: "/locations/stellenbosch",
  },
  openGraph: {
    title: "Mobile Spa in Stellenbosch | Exotic Touch",
    description: "Luxury mobile spa services in Stellenbosch. Professional treatments delivered to your location.",
    url: "https://exotictmspa.co.za/locations/stellenbosch",
    images: [
      {
        url: "/hero-spa.jpg",
        width: 1200,
        height: 630,
        alt: "Mobile spa services in Stellenbosch",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mobile Spa in Stellenbosch | Exotic Touch",
    description: "Luxury mobile spa services in Stellenbosch.",
    images: ["/hero-spa.jpg"],
  },
};

export default function StellenboschLayout({
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
          { name: "Stellenbosch", url: "/locations/stellenbosch" },
        ]}
        pageType="ItemPage"
        pageName="Mobile Spa in Stellenbosch | Exotic Touch"
        pageDescription="Luxury mobile spa services in Stellenbosch. Professional massages, facials, manicures, pedicures, waxing & lashes delivered to your location in the Winelands."
        pageUrl="/locations/stellenbosch"
      />
      {children}
    </>
  );
}

