import type { Metadata } from "next";
import PageStructuredData from "@/components/PageStructuredData";

export const metadata: Metadata = {
  title: "Mobile Spa in Somerset West | Exotic Touch",
  description: "Luxury mobile spa services in Somerset West. Professional massages, facials, manicures, pedicures, waxing & lashes delivered to your location.",
  keywords: ["mobile spa Somerset West", "spa Somerset West", "massage Somerset West", "home spa Somerset West"],
  alternates: {
    canonical: "https://exotictmspa.co.za/locations/somerset-west",
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
    title: "Mobile Spa in Somerset West | Exotic Touch",
    description: "Luxury mobile spa services in Somerset West. Professional treatments delivered to your location.",
    url: "https://exotictmspa.co.za/locations/somerset-west",
    images: [
      {
        url: "/hero-spa.jpg",
        width: 1200,
        height: 630,
        alt: "Mobile spa services in Somerset West",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mobile Spa in Somerset West | Exotic Touch",
    description: "Luxury mobile spa services in Somerset West.",
    images: ["/hero-spa.jpg"],
  },
};

export default function SomersetWestLayout({
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
          { name: "Somerset West", url: "/locations/somerset-west" },
        ]}
        pageType="ItemPage"
        pageName="Mobile Spa in Somerset West | Exotic Touch"
        pageDescription="Luxury mobile spa services in Somerset West. Professional massages, facials, manicures, pedicures, waxing & lashes delivered to your location."
        pageUrl="/locations/somerset-west"
      />
      {children}
    </>
  );
}

