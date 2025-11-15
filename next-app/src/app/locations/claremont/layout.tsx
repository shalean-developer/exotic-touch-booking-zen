import type { Metadata } from "next";
import PageStructuredData from "@/components/PageStructuredData";

export const metadata: Metadata = {
  title: "Mobile Spa in Claremont | Exotic Touch",
  description: "Luxury mobile spa services in Claremont. Professional massages, facials, manicures, pedicures, waxing & lashes delivered to your location.",
  keywords: ["mobile spa Claremont", "spa Claremont", "massage Claremont", "home spa Claremont"],
  alternates: {
    canonical: "https://exotictmspa.co.za/locations/claremont",
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
    title: "Mobile Spa in Claremont | Exotic Touch",
    description: "Luxury mobile spa services in Claremont. Professional treatments delivered to your location.",
    url: "https://exotictmspa.co.za/locations/claremont",
    images: [
      {
        url: "/hero-spa.jpg",
        width: 1200,
        height: 630,
        alt: "Mobile spa services in Claremont",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mobile Spa in Claremont | Exotic Touch",
    description: "Luxury mobile spa services in Claremont.",
    images: ["/hero-spa.jpg"],
  },
};

export default function ClaremontLayout({
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
          { name: "Claremont", url: "/locations/claremont" },
        ]}
        pageType="ItemPage"
        pageName="Mobile Spa in Claremont | Exotic Touch"
        pageDescription="Luxury mobile spa services in Claremont. Professional massages, facials, manicures, pedicures, waxing & lashes delivered to your location."
        pageUrl="/locations/claremont"
      />
      {children}
    </>
  );
}

