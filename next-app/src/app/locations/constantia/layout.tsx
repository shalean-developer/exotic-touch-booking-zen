import type { Metadata } from "next";
import PageStructuredData from "@/components/PageStructuredData";

export const metadata: Metadata = {
  title: "Mobile Spa in Constantia | Exotic Touch",
  description: "Luxury mobile spa services in Constantia. Professional massages, facials, manicures, pedicures, waxing & lashes delivered to your location.",
  keywords: ["mobile spa Constantia", "spa Constantia", "massage Constantia", "home spa Constantia"],
  alternates: {
    canonical: "https://exotictmspa.co.za/locations/constantia",
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
    title: "Mobile Spa in Constantia | Exotic Touch",
    description: "Luxury mobile spa services in Constantia. Professional treatments delivered to your location.",
    url: "https://exotictmspa.co.za/locations/constantia",
    images: [
      {
        url: "/hero-spa.jpg",
        width: 1200,
        height: 630,
        alt: "Mobile spa services in Constantia",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mobile Spa in Constantia | Exotic Touch",
    description: "Luxury mobile spa services in Constantia.",
    images: ["/hero-spa.jpg"],
  },
};

export default function ConstantiaLayout({
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
          { name: "Constantia", url: "/locations/constantia" },
        ]}
        pageType="ItemPage"
        pageName="Mobile Spa in Constantia | Exotic Touch"
        pageDescription="Luxury mobile spa services in Constantia. Professional massages, facials, manicures, pedicures, waxing & lashes delivered to your location."
        pageUrl="/locations/constantia"
      />
      {children}
    </>
  );
}

