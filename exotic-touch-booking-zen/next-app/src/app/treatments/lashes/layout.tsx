import type { Metadata } from "next";
import PageStructuredData from "@/components/PageStructuredData";

export const metadata: Metadata = {
  title: "Lash Extensions | Classic, Hybrid & Volume Lashes",
  description: "Enhance your natural beauty with stunning lash extensions. Classic, Hybrid, Volume, and Mega Volume options available. Mobile service in Cape Town. Book your appointment.",
  keywords: ["lash extensions Cape Town", "eyelash extensions", "classic lashes", "volume lashes", "hybrid lashes", "mega volume lashes", "mobile lash service"],
  alternates: {
    canonical: "https://exotictmspa.co.za/treatments/lashes",
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
    title: "Lash Extensions | Exotic Touch",
    description: "Wake up with perfect lashes every day. Professional lash extensions delivered to your location in Cape Town.",
    url: "https://exotictmspa.co.za/treatments/lashes",
    images: [
      {
        url: "/hero-spa.jpg",
        width: 1200,
        height: 630,
        alt: "Professional lash extensions in Cape Town",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lash Extensions | Exotic Touch",
    description: "Wake up with perfect lashes every day. Professional lash extensions in Cape Town.",
    images: ["/hero-spa.jpg"],
  },
};

export default function LashesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <PageStructuredData
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Treatments", url: "/treatments" },
          { name: "Lash Extensions", url: "/treatments/lashes" },
        ]}
        pageType="ItemPage"
        pageName="Lash Extensions | Classic, Hybrid & Volume Lashes"
        pageDescription="Enhance your natural beauty with stunning lash extensions. Classic, Hybrid, Volume, and Mega Volume options available. Mobile service in Cape Town. Book your appointment."
        pageUrl="/treatments/lashes"
        serviceType="Beauty Service"
        serviceName="Lash Extension Services"
        serviceDescription="Classic, Hybrid, Volume, and Mega Volume lash extensions delivered to your location in Cape Town"
        servicePrice="450"
        serviceImage="/hero-spa.jpg"
      />
      {children}
    </>
  );
}

