import type { Metadata } from "next";
import PageStructuredData from "@/components/PageStructuredData";

export const metadata: Metadata = {
  title: "Mobile Spa in Sea Point | Exotic Touch",
  description: "Luxury mobile spa services in Sea Point. Professional massages, facials, manicures, pedicures, waxing & lashes delivered to your location.",
  keywords: ["mobile spa Sea Point", "spa Sea Point", "massage Sea Point", "home spa Sea Point"],
  alternates: {
    canonical: "https://exotictmspa.co.za/locations/sea-point",
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
    title: "Mobile Spa in Sea Point | Exotic Touch",
    description: "Luxury mobile spa services in Sea Point. Professional treatments delivered to your location.",
    url: "https://exotictmspa.co.za/locations/sea-point",
    images: [
      {
        url: "/hero-spa.jpg",
        width: 1200,
        height: 630,
        alt: "Mobile spa services in Sea Point",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mobile Spa in Sea Point | Exotic Touch",
    description: "Luxury mobile spa services in Sea Point.",
    images: ["/hero-spa.jpg"],
  },
};

export default function SeaPointLayout({
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
          { name: "Sea Point", url: "/locations/sea-point" },
        ]}
        pageType="ItemPage"
        pageName="Mobile Spa in Sea Point | Exotic Touch"
        pageDescription="Luxury mobile spa services in Sea Point. Professional massages, facials, manicures, pedicures, waxing & lashes delivered to your location."
        pageUrl="/locations/sea-point"
      />
      {children}
    </>
  );
}

