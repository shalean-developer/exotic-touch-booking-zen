import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import FeaturedTreatments from "@/components/FeaturedTreatments";
import SpecialsSection from "@/components/SpecialsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import WhatsAppStrip from "@/components/WhatsAppStrip";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const Index = () => {
  return (
    <>
      <SEO
        title="Luxury Mobile Spa Treatments in Cape Town"
        description="Experience professional mobile spa services delivered to your home in Cape Town. Massages, facials, manicures, pedicures, waxing & lashes. Same-day bookings available. Call +27 68 498 4179"
        keywords="mobile spa Cape Town, home spa service, massage at home, mobile beauty treatments, luxury spa Cape Town, same day spa booking"
        canonicalUrl="/"
      />
      <div className="min-h-screen">
        <Navigation />
        <HeroSection />
        <HowItWorksSection />
        <FeaturedTreatments />
        <SpecialsSection />
        <TestimonialsSection />
        <WhatsAppStrip />
        <Footer />
      </div>
    </>
  );
};

export default Index;
