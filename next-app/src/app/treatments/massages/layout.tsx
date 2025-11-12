import type { Metadata } from "next";
import PageStructuredData from "@/components/PageStructuredData";

export const metadata: Metadata = {
  title: "Massage Treatments | Swedish, Deep Tissue, Hot Stone & More",
  description: "Professional therapeutic massages delivered to your doorstep in Cape Town. Swedish, Deep Tissue, Hot Stone, and Pregnancy massages available. Book now.",
  keywords: ["massage Cape Town", "mobile massage", "Swedish massage", "deep tissue massage", "hot stone massage", "pregnancy massage", "therapeutic massage"],
  alternates: {
    canonical: "/treatments/massages",
  },
  openGraph: {
    title: "Massage Treatments | Exotic Touch Mobile Spa",
    description: "Professional therapeutic massages delivered to your doorstep in Cape Town. Book your massage today.",
    url: "https://exotictmspa.co.za/treatments/massages",
    images: [
      {
        url: "/massage-treatment.jpg",
        width: 1200,
        height: 630,
        alt: "Professional massage treatments in Cape Town",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Massage Treatments | Exotic Touch Mobile Spa",
    description: "Professional therapeutic massages delivered to your doorstep in Cape Town.",
    images: ["/massage-treatment.jpg"],
  },
};

export default function MassagesLayout({
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
          { name: "Massages", url: "/treatments/massages" },
        ]}
        pageType="ItemPage"
        pageName="Massage Treatments | Swedish, Deep Tissue, Hot Stone & More"
        pageDescription="Professional therapeutic massages delivered to your doorstep in Cape Town. Swedish, Deep Tissue, Hot Stone, and Pregnancy massages available. Book now."
        pageUrl="/treatments/massages"
        serviceType="Massage Therapy"
        serviceName="Professional Massage Treatments"
        serviceDescription="Swedish, Deep Tissue, Hot Stone, and Pregnancy massages delivered to your location in Cape Town"
        servicePrice="650"
        serviceImage="/massage-treatment.jpg"
      />
      {children}
    </>
  );
}

