import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Massage Treatments | Swedish, Deep Tissue, Hot Stone & More",
  description: "Professional therapeutic massages delivered to your doorstep in Cape Town. Swedish, Deep Tissue, Hot Stone, and Pregnancy massages available. Book online or call +27 68 498 4179.",
  keywords: ["massage Cape Town", "mobile massage", "Swedish massage", "deep tissue massage", "hot stone massage", "pregnancy massage", "therapeutic massage"],
  alternates: {
    canonical: "/treatments/massages",
  },
  openGraph: {
    title: "Massage Treatments | Exotic Touch Mobile Spa",
    description: "Professional therapeutic massages delivered to your doorstep in Cape Town. Book your massage today.",
    url: "https://exotictmspa.co.za/treatments/massages",
  },
};

export default function MassagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

