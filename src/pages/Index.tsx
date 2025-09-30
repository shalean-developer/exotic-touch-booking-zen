import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import FeaturedTreatments from "@/components/FeaturedTreatments";
import SpecialsSection from "@/components/SpecialsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import WhatsAppStrip from "@/components/WhatsAppStrip";
import Footer from "@/components/Footer";

const Index = () => {
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
    </div>
  );
};

export default Index;
