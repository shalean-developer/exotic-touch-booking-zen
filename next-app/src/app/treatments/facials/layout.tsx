import type { Metadata } from "next";

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
  },
};

export default function FacialsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

