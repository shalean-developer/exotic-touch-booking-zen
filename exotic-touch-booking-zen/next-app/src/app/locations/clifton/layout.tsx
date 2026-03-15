import type { Metadata } from "next";
import PageStructuredData from "@/components/PageStructuredData";

export const metadata: Metadata = {
  title: "Mobile Spa in Clifton | Exotic Touch",
  description: "Luxury mobile spa services in Clifton. Professional massages, facials, manicures, pedicures, waxing & lashes delivered to your location.",
  keywords: ["mobile spa Clifton", "spa Clifton", "massage Clifton", "home spa Clifton"],
  alternates: {
    canonical: "https://exotictmspa.co.za/locations/clifton",
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
    title: "Mobile Spa in Clifton | Exotic Touch",
    description: "Luxury mobile spa services in Clifton. Professional treatments delivered to your location.",
    url: "https://exotictmspa.co.za/locations/clifton",
    images: [
      {
        url: "/hero-spa.jpg",
        width: 1200,
        height: 630,
        alt: "Mobile spa services in Clifton",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mobile Spa in Clifton | Exotic Touch",
    description: "Luxury mobile spa services in Clifton.",
    images: ["/hero-spa.jpg"],
  },
};

export default function CliftonLayout({
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
          { name: "Clifton", url: "/locations/clifton" },
        ]}
        pageType="ItemPage"
        pageName="Mobile Spa in Clifton | Exotic Touch"
        pageDescription="Luxury mobile spa services in Clifton. Professional massages, facials, manicures, pedicures, waxing & lashes delivered to your location."
        pageUrl="/locations/clifton"
      />
      {children}
    </>
  );
}

