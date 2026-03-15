import type { Metadata } from "next";
import PageStructuredData from "@/components/PageStructuredData";

export const metadata: Metadata = {
  title: "Mobile Spa in Bishopscourt | Exotic Touch",
  description: "Luxury mobile spa services in Bishopscourt. Professional massages, facials, manicures, pedicures, waxing & lashes delivered to your location.",
  keywords: ["mobile spa Bishopscourt", "spa Bishopscourt", "massage Bishopscourt", "home spa Bishopscourt"],
  alternates: {
    canonical: "https://exotictmspa.co.za/locations/bishopscourt",
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
    title: "Mobile Spa in Bishopscourt | Exotic Touch",
    description: "Luxury mobile spa services in Bishopscourt. Professional treatments delivered to your location.",
    url: "https://exotictmspa.co.za/locations/bishopscourt",
    images: [
      {
        url: "/hero-spa.jpg",
        width: 1200,
        height: 630,
        alt: "Mobile spa services in Bishopscourt",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mobile Spa in Bishopscourt | Exotic Touch",
    description: "Luxury mobile spa services in Bishopscourt.",
    images: ["/hero-spa.jpg"],
  },
};

export default function BishopscourtLayout({
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
          { name: "Bishopscourt", url: "/locations/bishopscourt" },
        ]}
        pageType="ItemPage"
        pageName="Mobile Spa in Bishopscourt | Exotic Touch"
        pageDescription="Luxury mobile spa services in Bishopscourt. Professional massages, facials, manicures, pedicures, waxing & lashes delivered to your location."
        pageUrl="/locations/bishopscourt"
      />
      {children}
    </>
  );
}

