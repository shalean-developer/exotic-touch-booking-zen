import type { Metadata } from "next";
import PageStructuredData from "@/components/PageStructuredData";

export const metadata: Metadata = {
  title: "Mobile Spa in Milnerton | Exotic Touch",
  description: "Luxury mobile spa services in Milnerton. Professional massages, facials, manicures, pedicures, waxing & lashes delivered to your location.",
  keywords: ["mobile spa Milnerton", "spa Milnerton", "massage Milnerton", "home spa Milnerton"],
  alternates: {
    canonical: "https://exotictmspa.co.za/locations/milnerton",
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
    title: "Mobile Spa in Milnerton | Exotic Touch",
    description: "Luxury mobile spa services in Milnerton. Professional treatments delivered to your location.",
    url: "https://exotictmspa.co.za/locations/milnerton",
    images: [
      {
        url: "/hero-spa.jpg",
        width: 1200,
        height: 630,
        alt: "Mobile spa services in Milnerton",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mobile Spa in Milnerton | Exotic Touch",
    description: "Luxury mobile spa services in Milnerton.",
    images: ["/hero-spa.jpg"],
  },
};

export default function MilnertonLayout({
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
          { name: "Milnerton", url: "/locations/milnerton" },
        ]}
        pageType="ItemPage"
        pageName="Mobile Spa in Milnerton | Exotic Touch"
        pageDescription="Luxury mobile spa services in Milnerton. Professional massages, facials, manicures, pedicures, waxing & lashes delivered to your location."
        pageUrl="/locations/milnerton"
      />
      {children}
    </>
  );
}

