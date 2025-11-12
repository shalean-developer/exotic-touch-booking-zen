import type { Metadata } from "next";
import PageStructuredData from "@/components/PageStructuredData";

export const metadata: Metadata = {
  title: "Waxing Services | Professional Hair Removal in Cape Town",
  description: "Professional hair removal services for smooth, silky skin. Face, body, and bikini waxing available. Mobile service in Cape Town. Book your appointment today.",
  keywords: ["waxing Cape Town", "mobile waxing", "Brazilian wax", "bikini wax", "leg wax", "eyebrow wax", "professional hair removal"],
  alternates: {
    canonical: "/treatments/waxing",
  },
  openGraph: {
    title: "Waxing Services | Exotic Touch Mobile Spa",
    description: "Professional hair removal services delivered to your location in Cape Town. Smooth, silky skin guaranteed.",
    url: "https://exotictmspa.co.za/treatments/waxing",
    images: [
      {
        url: "/hero-spa.jpg",
        width: 1200,
        height: 630,
        alt: "Professional waxing services in Cape Town",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Waxing Services | Exotic Touch Mobile Spa",
    description: "Professional hair removal services delivered to your location in Cape Town.",
    images: ["/hero-spa.jpg"],
  },
};

export default function WaxingLayout({
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
          { name: "Waxing", url: "/treatments/waxing" },
        ]}
        serviceType="Hair Removal Service"
        serviceName="Professional Waxing Services"
        serviceDescription="Face, body, and bikini waxing services delivered to your location in Cape Town"
        servicePrice="150"
        serviceImage="/hero-spa.jpg"
      />
      {children}
    </>
  );
}

