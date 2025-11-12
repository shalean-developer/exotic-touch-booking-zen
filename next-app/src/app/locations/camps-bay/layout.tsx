import type { Metadata } from "next";
import PageStructuredData from "@/components/PageStructuredData";

export const metadata: Metadata = {
  title: "Mobile Spa in Camps Bay | Exotic Touch",
  description: "Luxury mobile spa services in Camps Bay. Professional massages, facials, manicures, pedicures, waxing & lashes delivered to your location.",
  keywords: ["mobile spa Camps Bay", "spa Camps Bay", "massage Camps Bay", "home spa Camps Bay"],
  alternates: {
    canonical: "/locations/camps-bay",
  },
  openGraph: {
    title: "Mobile Spa in Camps Bay | Exotic Touch",
    description: "Luxury mobile spa services in Camps Bay. Professional treatments delivered to your location.",
    url: "https://exotictmspa.co.za/locations/camps-bay",
    images: [
      {
        url: "/hero-spa.jpg",
        width: 1200,
        height: 630,
        alt: "Mobile spa services in Camps Bay",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mobile Spa in Camps Bay | Exotic Touch",
    description: "Luxury mobile spa services in Camps Bay.",
    images: ["/hero-spa.jpg"],
  },
};

export default function CampsBayLayout({
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
          { name: "Camps Bay", url: "/locations/camps-bay" },
        ]}
        pageType="ItemPage"
        pageName="Mobile Spa in Camps Bay | Exotic Touch"
        pageDescription="Luxury mobile spa services in Camps Bay. Professional massages, facials, manicures, pedicures, waxing & lashes delivered to your location."
        pageUrl="/locations/camps-bay"
      />
      {children}
    </>
  );
}

