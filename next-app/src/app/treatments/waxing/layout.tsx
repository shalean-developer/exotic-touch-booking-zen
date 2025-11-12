import type { Metadata } from "next";

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
  },
};

export default function WaxingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

