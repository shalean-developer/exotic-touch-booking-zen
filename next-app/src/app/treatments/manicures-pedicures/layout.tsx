import type { Metadata } from "next";
import PageStructuredData from "@/components/PageStructuredData";

export const metadata: Metadata = {
  title: "Manicures & Pedicures | Professional Nail Care in Cape Town",
  description: "Pamper your hands and feet with expert nail care services. Gel overlays, deluxe treatments, and nail art available. Mobile service in Cape Town. Book your appointment.",
  keywords: ["manicure Cape Town", "pedicure Cape Town", "gel nails", "nail art", "mobile nail service", "professional manicure", "deluxe pedicure"],
  alternates: {
    canonical: "/treatments/manicures-pedicures",
  },
  openGraph: {
    title: "Manicures & Pedicures | Exotic Touch",
    description: "Professional nail care services delivered to your location in Cape Town. Gel overlays, deluxe treatments, and more.",
    url: "https://exotictmspa.co.za/treatments/manicures-pedicures",
    images: [
      {
        url: "/nails-treatment.jpg",
        width: 1200,
        height: 630,
        alt: "Professional manicure and pedicure services in Cape Town",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Manicures & Pedicures | Exotic Touch",
    description: "Professional nail care services delivered to your location in Cape Town.",
    images: ["/nails-treatment.jpg"],
  },
};

export default function ManicuresPedicuresLayout({
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
          { name: "Manicures & Pedicures", url: "/treatments/manicures-pedicures" },
        ]}
        pageType="ItemPage"
        pageName="Manicures & Pedicures | Professional Nail Care in Cape Town"
        pageDescription="Pamper your hands and feet with expert nail care services. Gel overlays, deluxe treatments, and nail art available. Mobile service in Cape Town. Book your appointment."
        pageUrl="/treatments/manicures-pedicures"
        serviceType="Nail Care Service"
        serviceName="Professional Manicure & Pedicure Services"
        serviceDescription="Gel overlays, deluxe treatments, and nail art delivered to your location in Cape Town"
        servicePrice="350"
        serviceImage="/nails-treatment.jpg"
      />
      {children}
    </>
  );
}

