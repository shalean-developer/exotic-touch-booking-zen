import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lash Extensions | Classic, Hybrid, Volume & Mega Volume Lashes",
  description: "Enhance your natural beauty with stunning lash extensions. Classic, Hybrid, Volume, and Mega Volume options available. Mobile service in Cape Town. Book your appointment.",
  keywords: ["lash extensions Cape Town", "eyelash extensions", "classic lashes", "volume lashes", "hybrid lashes", "mega volume lashes", "mobile lash service"],
  alternates: {
    canonical: "/treatments/lashes",
  },
  openGraph: {
    title: "Lash Extensions | Exotic Touch Mobile Spa",
    description: "Wake up with perfect lashes every day. Professional lash extensions delivered to your location in Cape Town.",
    url: "https://exotictmspa.co.za/treatments/lashes",
  },
};

export default function LashesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

