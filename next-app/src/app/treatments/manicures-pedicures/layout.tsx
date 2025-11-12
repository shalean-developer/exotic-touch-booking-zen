import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Manicures & Pedicures | Professional Nail Care in Cape Town",
  description: "Pamper your hands and feet with expert nail care services. Gel overlays, deluxe treatments, and nail art available. Mobile service in Cape Town. Book your appointment.",
  keywords: ["manicure Cape Town", "pedicure Cape Town", "gel nails", "nail art", "mobile nail service", "professional manicure", "deluxe pedicure"],
  alternates: {
    canonical: "/treatments/manicures-pedicures",
  },
  openGraph: {
    title: "Manicures & Pedicures | Exotic Touch Mobile Spa",
    description: "Professional nail care services delivered to your location in Cape Town. Gel overlays, deluxe treatments, and more.",
    url: "https://exotictmspa.co.za/treatments/manicures-pedicures",
  },
};

export default function ManicuresPedicuresLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

