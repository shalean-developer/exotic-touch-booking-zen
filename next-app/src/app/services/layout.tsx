import type { Metadata } from "next";
import PageStructuredData from "@/components/PageStructuredData";

export const metadata: Metadata = {
  title: "Our Services | Exotic Touch Mobile Spa",
  description: "Explore our comprehensive range of mobile spa services in Cape Town. Massages, facials, manicures, pedicures, waxing, lashes, and more delivered to your location.",
  keywords: ["mobile spa services", "spa treatments Cape Town", "home spa services", "beauty treatments", "wellness services"],
  alternates: {
    canonical: "https://exotictmspa.co.za/services",
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
    title: "Our Services | Exotic Touch",
    description: "Explore our comprehensive range of mobile spa services delivered to your location in Cape Town.",
    url: "https://exotictmspa.co.za/services",
    images: [
      {
        url: "/hero-spa.jpg",
        width: 1200,
        height: 630,
        alt: "Exotic Touch Mobile Spa Services",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Services | Exotic Touch",
    description: "Explore our comprehensive range of mobile spa services delivered to your location.",
    images: ["/hero-spa.jpg"],
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <PageStructuredData
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
        ]}
        pageType="WebPage"
        pageName="Our Services | Exotic Touch Mobile Spa"
        pageDescription="Explore our comprehensive range of mobile spa services in Cape Town. Massages, facials, manicures, pedicures, waxing, lashes, and more delivered to your location."
        pageUrl="/services"
      />
      {children}
    </>
  );
}

