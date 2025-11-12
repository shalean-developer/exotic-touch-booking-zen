import type { Metadata } from "next";
import PageStructuredData from "@/components/PageStructuredData";

export const metadata: Metadata = {
  title: "Mobile Spa in Tokai | Exotic Touch",
  description: "Luxury mobile spa services in Tokai. Professional massages, facials, manicures, pedicures, waxing & lashes delivered to your location.",
  keywords: ["mobile spa Tokai", "spa Tokai", "massage Tokai", "home spa Tokai"],
  alternates: {
    canonical: "/locations/tokai",
  },
  openGraph: {
    title: "Mobile Spa in Tokai | Exotic Touch",
    description: "Luxury mobile spa services in Tokai. Professional treatments delivered to your location.",
    url: "https://exotictmspa.co.za/locations/tokai",
    images: [
      {
        url: "/hero-spa.jpg",
        width: 1200,
        height: 630,
        alt: "Mobile spa services in Tokai",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mobile Spa in Tokai | Exotic Touch",
    description: "Luxury mobile spa services in Tokai.",
    images: ["/hero-spa.jpg"],
  },
};

export default function TokaiLayout({
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
          { name: "Tokai", url: "/locations/tokai" },
        ]}
        pageType="ItemPage"
        pageName="Mobile Spa in Tokai | Exotic Touch"
        pageDescription="Luxury mobile spa services in Tokai. Professional massages, facials, manicures, pedicures, waxing & lashes delivered to your location."
        pageUrl="/locations/tokai"
      />
      {children}
    </>
  );
}

