import type { Metadata } from "next";
import PageStructuredData from "@/components/PageStructuredData";

export const metadata: Metadata = {
  title: "Mobile Spa in Rondebosch | Exotic Touch",
  description: "Luxury mobile spa services in Rondebosch. Professional massages, facials, manicures, pedicures, waxing & lashes delivered to your location.",
  keywords: ["mobile spa Rondebosch", "spa Rondebosch", "massage Rondebosch", "home spa Rondebosch"],
  alternates: {
    canonical: "https://exotictmspa.co.za/locations/rondebosch",
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
    title: "Mobile Spa in Rondebosch | Exotic Touch",
    description: "Luxury mobile spa services in Rondebosch. Professional treatments delivered to your location.",
    url: "https://exotictmspa.co.za/locations/rondebosch",
    images: [
      {
        url: "/hero-spa.jpg",
        width: 1200,
        height: 630,
        alt: "Mobile spa services in Rondebosch",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mobile Spa in Rondebosch | Exotic Touch",
    description: "Luxury mobile spa services in Rondebosch.",
    images: ["/hero-spa.jpg"],
  },
};

export default function RondeboschLayout({
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
          { name: "Rondebosch", url: "/locations/rondebosch" },
        ]}
        pageType="ItemPage"
        pageName="Mobile Spa in Rondebosch | Exotic Touch"
        pageDescription="Luxury mobile spa services in Rondebosch. Professional massages, facials, manicures, pedicures, waxing & lashes delivered to your location."
        pageUrl="/locations/rondebosch"
      />
      {children}
    </>
  );
}

