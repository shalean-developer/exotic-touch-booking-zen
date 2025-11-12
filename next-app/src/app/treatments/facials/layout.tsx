import type { Metadata } from "next";
import PageStructuredData from "@/components/PageStructuredData";

export const metadata: Metadata = {
  title: "Facial Treatments | Professional Skincare in Cape Town",
  description: "Rejuvenate your skin with our professional facial treatments. Superficial, Deep Cleanse, and Anti-Aging facials available. Mobile service in Cape Town. Book now.",
  keywords: ["facial Cape Town", "mobile facial", "deep cleanse facial", "anti-aging facial", "skincare treatment", "professional facial"],
  alternates: {
    canonical: "/treatments/facials",
  },
  openGraph: {
    title: "Facial Treatments | Exotic Touch Mobile Spa",
    description: "Rejuvenate your skin with professional facial treatments delivered to your location in Cape Town.",
    url: "https://exotictmspa.co.za/treatments/facials",
    images: [
      {
        url: "/facial-treatment.jpg",
        width: 1200,
        height: 630,
        alt: "Professional facial treatments in Cape Town",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Facial Treatments | Exotic Touch Mobile Spa",
    description: "Rejuvenate your skin with professional facial treatments in Cape Town.",
    images: ["/facial-treatment.jpg"],
  },
};

export default function FacialsLayout({
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
          { name: "Facials", url: "/treatments/facials" },
        ]}
        pageType="ItemPage"
        pageName="Facial Treatments | Professional Skincare in Cape Town"
        pageDescription="Rejuvenate your skin with our professional facial treatments. Superficial, Deep Cleanse, and Anti-Aging facials available. Mobile service in Cape Town. Book now."
        pageUrl="/treatments/facials"
        serviceType="Facial Treatment"
        serviceName="Professional Facial Treatments"
        serviceDescription="Superficial, Deep Cleanse, and Anti-Aging facials delivered to your location in Cape Town"
        servicePrice="500"
        serviceImage="/facial-treatment.jpg"
      />
      {children}
    </>
  );
}

