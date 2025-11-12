import type { Metadata } from "next";
import PageStructuredData from "@/components/PageStructuredData";

export const metadata: Metadata = {
  title: "Mobile Spa in Durbanville | Exotic Touch",
  description: "Luxury mobile spa services in Durbanville. Professional massages, facials, manicures, pedicures, waxing & lashes delivered to your location.",
  keywords: ["mobile spa Durbanville", "spa Durbanville", "massage Durbanville", "home spa Durbanville"],
  alternates: {
    canonical: "/locations/durbanville",
  },
  openGraph: {
    title: "Mobile Spa in Durbanville | Exotic Touch",
    description: "Luxury mobile spa services in Durbanville. Professional treatments delivered to your location.",
    url: "https://exotictmspa.co.za/locations/durbanville",
    images: [
      {
        url: "/hero-spa.jpg",
        width: 1200,
        height: 630,
        alt: "Mobile spa services in Durbanville",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mobile Spa in Durbanville | Exotic Touch",
    description: "Luxury mobile spa services in Durbanville.",
    images: ["/hero-spa.jpg"],
  },
};

export default function DurbanvilleLayout({
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
          { name: "Durbanville", url: "/locations/durbanville" },
        ]}
        pageType="ItemPage"
        pageName="Mobile Spa in Durbanville | Exotic Touch"
        pageDescription="Luxury mobile spa services in Durbanville. Professional massages, facials, manicures, pedicures, waxing & lashes delivered to your location."
        pageUrl="/locations/durbanville"
      />
      {children}
    </>
  );
}

