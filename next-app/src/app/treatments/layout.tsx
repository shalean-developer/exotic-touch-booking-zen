import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Spa Treatments | Massages, Facials, Nails & More",
  description: "Discover our range of professional mobile spa treatments in Cape Town. Massages, facials, manicures, pedicures, waxing, and lash extensions. All delivered to your location.",
  keywords: ["spa treatments Cape Town", "mobile spa treatments", "massage therapy", "facial treatments", "manicure pedicure", "waxing services", "lash extensions"],
  alternates: {
    canonical: "/treatments",
  },
  openGraph: {
    title: "Spa Treatments | Exotic Touch Mobile Spa",
    description: "Discover our range of professional mobile spa treatments in Cape Town. All delivered to your location.",
    url: "https://exotictmspa.co.za/treatments",
    images: [
      {
        url: "/massage-treatment.jpg",
        width: 1200,
        height: 630,
        alt: "Professional mobile spa treatments in Cape Town",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Spa Treatments | Exotic Touch Mobile Spa",
    description: "Discover our range of professional mobile spa treatments in Cape Town.",
    images: ["/massage-treatment.jpg"],
  },
};

export default function TreatmentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

