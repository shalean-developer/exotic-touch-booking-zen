import type { Metadata } from "next";
import PageStructuredData from "@/components/PageStructuredData";

export const metadata: Metadata = {
  title: "Mobile Spa in Green Point | Exotic Touch",
  description: "Luxury mobile spa services in Green Point. Professional massages, facials, manicures, pedicures, waxing & lashes delivered to your location.",
  keywords: ["mobile spa Green Point", "spa Green Point", "massage Green Point", "home spa Green Point"],
  alternates: {
    canonical: "https://exotictmspa.co.za/locations/green-point",
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
    title: "Mobile Spa in Green Point | Exotic Touch",
    description: "Luxury mobile spa services in Green Point. Professional treatments delivered to your location.",
    url: "https://exotictmspa.co.za/locations/green-point",
    images: [
      {
        url: "/hero-spa.jpg",
        width: 1200,
        height: 630,
        alt: "Mobile spa services in Green Point",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mobile Spa in Green Point | Exotic Touch",
    description: "Luxury mobile spa services in Green Point.",
    images: ["/hero-spa.jpg"],
  },
};

export default function GreenPointLayout({
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
          { name: "Green Point", url: "/locations/green-point" },
        ]}
        pageType="ItemPage"
        pageName="Mobile Spa in Green Point | Exotic Touch"
        pageDescription="Luxury mobile spa services in Green Point. Professional massages, facials, manicures, pedicures, waxing & lashes delivered to your location."
        pageUrl="/locations/green-point"
      />
      {children}
    </>
  );
}

