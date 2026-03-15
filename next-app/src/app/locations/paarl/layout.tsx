import type { Metadata } from "next";
import PageStructuredData from "@/components/PageStructuredData";

export const metadata: Metadata = {
  title: "Mobile Spa in Paarl | Exotic Touch",
  description: "Luxury mobile spa services in Paarl. Professional massages, facials, manicures, pedicures, waxing & lashes delivered to your location in the Winelands.",
  keywords: ["mobile spa Paarl", "spa Paarl", "massage Paarl", "home spa Paarl", "mobile beauty Paarl"],
  alternates: {
    canonical: "https://exotictmspa.co.za/locations/paarl",
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
    title: "Mobile Spa in Paarl | Exotic Touch",
    description: "Luxury mobile spa services in Paarl. Professional treatments delivered to your location.",
    url: "https://exotictmspa.co.za/locations/paarl",
    images: [
      {
        url: "/hero-spa.jpg",
        width: 1200,
        height: 630,
        alt: "Mobile spa services in Paarl",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mobile Spa in Paarl | Exotic Touch",
    description: "Luxury mobile spa services in Paarl.",
    images: ["/hero-spa.jpg"],
  },
};

export default function PaarlLayout({
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
          { name: "Paarl", url: "/locations/paarl" },
        ]}
        pageType="ItemPage"
        pageName="Mobile Spa in Paarl | Exotic Touch"
        pageDescription="Luxury mobile spa services in Paarl. Professional massages, facials, manicures, pedicures, waxing & lashes delivered to your location in the Winelands."
        pageUrl="/locations/paarl"
      />
      {children}
    </>
  );
}

