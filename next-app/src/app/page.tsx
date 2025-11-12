import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import FeaturedTreatments from "@/components/FeaturedTreatments";
import SpecialsSection from "@/components/SpecialsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import WhatsAppStrip from "@/components/WhatsAppStrip";
import Footer from "@/components/Footer";
import SpecialModal from "@/components/SpecialModal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Luxury Mobile Spa Treatments in Cape Town",
  description: "Experience professional mobile spa services delivered to your home in Cape Town. Massages, facials, manicures, pedicures, waxing & lashes. Same-day bookings available. Call +27 68 498 4179",
  keywords: ["mobile spa Cape Town", "home spa service", "massage at home", "mobile beauty treatments", "luxury spa Cape Town", "same day spa booking", "mobile spa treatments", "spa at home Cape Town"],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Exotic Touch Mobile Spa | Luxury Mobile Spa Treatments in Cape Town",
    description: "Experience professional mobile spa services delivered to your home in Cape Town. Massages, facials, manicures, pedicures, waxing & lashes. Same-day bookings available.",
    url: "https://exotictmspa.co.za",
    siteName: "Exotic Touch Mobile Spa",
    images: [
      {
        url: "/hero-spa.jpg",
        width: 1200,
        height: 630,
        alt: "Luxury mobile spa treatment in Cape Town",
      },
    ],
    locale: "en_ZA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Exotic Touch Mobile Spa | Luxury Mobile Spa Treatments in Cape Town",
    description: "Experience professional mobile spa services delivered to your home in Cape Town. Same-day bookings available.",
    images: ["/hero-spa.jpg"],
  },
};

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <HowItWorksSection />
      <FeaturedTreatments />
      <SpecialsSection />
      <TestimonialsSection />
      <WhatsAppStrip />
      <Footer />
      <SpecialModal showOnPages={["home"]} />
    </div>
  );
}
