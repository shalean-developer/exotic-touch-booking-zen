import type { Metadata } from "next";
import PageStructuredData from "@/components/PageStructuredData";

export const metadata: Metadata = {
  title: "Mobile Spa in Hout Bay | Exotic Touch",
  description: "Luxury mobile spa services in Hout Bay. Professional massages, facials, manicures, pedicures, waxing & lashes delivered to your location.",
  keywords: ["mobile spa Hout Bay", "spa Hout Bay", "massage Hout Bay", "home spa Hout Bay"],
  alternates: {
    canonical: "/locations/hout-bay",
  },
  openGraph: {
    title: "Mobile Spa in Hout Bay | Exotic Touch",
    description: "Luxury mobile spa services in Hout Bay. Professional treatments delivered to your location.",
    url: "https://exotictmspa.co.za/locations/hout-bay",
    images: [
      {
        url: "/hero-spa.jpg",
        width: 1200,
        height: 630,
        alt: "Mobile spa services in Hout Bay",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mobile Spa in Hout Bay | Exotic Touch",
    description: "Luxury mobile spa services in Hout Bay.",
    images: ["/hero-spa.jpg"],
  },
};

export default function HoutBayLayout({
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
          { name: "Hout Bay", url: "/locations/hout-bay" },
        ]}
        pageType="ItemPage"
        pageName="Mobile Spa in Hout Bay | Exotic Touch"
        pageDescription="Luxury mobile spa services in Hout Bay. Professional massages, facials, manicures, pedicures, waxing & lashes delivered to your location."
        pageUrl="/locations/hout-bay"
      />
      {children}
    </>
  );
}

