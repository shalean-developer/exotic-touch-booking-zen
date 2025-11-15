import type { Metadata } from "next";
import PageStructuredData from "@/components/PageStructuredData";

export const metadata: Metadata = {
  title: "Mobile Spa in Newlands | Exotic Touch",
  description: "Luxury mobile spa services in Newlands. Professional massages, facials, manicures, pedicures, waxing & lashes delivered to your location.",
  keywords: ["mobile spa Newlands", "spa Newlands", "massage Newlands", "home spa Newlands"],
  alternates: {
    canonical: "https://exotictmspa.co.za/locations/newlands",
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
    title: "Mobile Spa in Newlands | Exotic Touch",
    description: "Luxury mobile spa services in Newlands. Professional treatments delivered to your location.",
    url: "https://exotictmspa.co.za/locations/newlands",
    images: [
      {
        url: "/hero-spa.jpg",
        width: 1200,
        height: 630,
        alt: "Mobile spa services in Newlands",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mobile Spa in Newlands | Exotic Touch",
    description: "Luxury mobile spa services in Newlands.",
    images: ["/hero-spa.jpg"],
  },
};

export default function NewlandsLayout({
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
          { name: "Newlands", url: "/locations/newlands" },
        ]}
        pageType="ItemPage"
        pageName="Mobile Spa in Newlands | Exotic Touch"
        pageDescription="Luxury mobile spa services in Newlands. Professional massages, facials, manicures, pedicures, waxing & lashes delivered to your location."
        pageUrl="/locations/newlands"
      />
      {children}
    </>
  );
}

