import { Button } from "@/components/ui/button";
import { MessageCircle, Phone } from "lucide-react";

const WhatsAppStrip = () => {
  const whatsappUrl = "https://wa.me/27684984179?text=Hi! I'd like to book a spa treatment.";
  const phoneNumber = "+27 68 498 4179";

  return (
    <section className="bg-primary py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left">
          <div className="mb-4 md:mb-0">
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-primary-foreground mb-2">
              Ready to Book?
            </h3>
            <p className="text-primary-foreground/90">
              Quick WhatsApp booking or call us directly for instant confirmation
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              variant="hero" 
              size="lg" 
              asChild
              className="bg-green-500 hover:bg-green-600 border-green-400/30"
            >
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-5 w-5" />
                WhatsApp: {phoneNumber}
              </a>
            </Button>
            
            <Button 
              variant="elegant" 
              size="lg" 
              asChild
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
            >
              <a href={`tel:${phoneNumber}`}>
                <Phone className="h-5 w-5" />
                Call Now
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatsAppStrip;