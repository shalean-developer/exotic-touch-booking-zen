import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Sparkles, Clock, Users } from "lucide-react";

interface SpecialModalProps {
  showOnPages?: ("home" | "specials")[];
}

const SpecialModal = ({ showOnPages = ["home", "specials"] }: SpecialModalProps) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if modal has been shown this session
    const hasSeenModal = sessionStorage.getItem("exotic-touch-special-modal-seen");
    
    // Check if we should show on current page
    const currentPath = window.location.pathname;
    const shouldShowOnThisPage = 
      (currentPath === "/" && showOnPages.includes("home")) ||
      (currentPath === "/specials" && showOnPages.includes("specials"));

    if (!hasSeenModal && shouldShowOnThisPage) {
      // Delay modal slightly for better UX
      const timer = setTimeout(() => {
        setIsOpen(true);
        sessionStorage.setItem("exotic-touch-special-modal-seen", "true");
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, [showOnPages]);

  const handleBookNow = () => {
    window.open("https://wa.me/27684984179?text=Hi! I'd like to book the Swedish Massage + Back Scrub special for R450.", "_blank");
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-3xl font-heading text-center mb-2">
            ✨ Current Special ✨
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Main Offer */}
          <div className="text-center space-y-4 p-6 bg-gradient-soft rounded-xl border-luxury">
            <div className="flex justify-center gap-2 items-center">
              <Sparkles className="h-6 w-6 text-primary animate-pulse" />
              <h3 className="text-2xl font-heading font-bold">
                Swedish Massage + Back Scrub
              </h3>
              <Sparkles className="h-6 w-6 text-primary animate-pulse" />
            </div>
            
            <div className="space-y-2">
              <div className="text-5xl font-bold text-primary">R450</div>
              <div className="text-lg text-muted-foreground">
                <Clock className="inline h-4 w-4 mr-1" />
                60 minutes • Save R200
              </div>
            </div>

            <div className="flex items-center justify-center gap-2 text-lg font-semibold text-primary bg-primary/10 py-3 px-6 rounded-full">
              <Users className="h-5 w-5" />
              <span>Available for 2 people and above</span>
            </div>
          </div>

          {/* CTA Button */}
          <Button 
            variant="luxury" 
            size="lg" 
            className="w-full text-lg"
            onClick={handleBookNow}
          >
            Book This Special
          </Button>

          {/* Terms & Conditions */}
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="terms" className="border-luxury">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                ✨ Terms & Conditions
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-3 text-sm text-muted-foreground pt-2">
                  <p>
                    <strong>1. Offer Details:</strong> Swedish Massage + Back Scrub (60 minutes) for only <strong>R450 per person</strong>.
                  </p>
                  <p>
                    <strong>2. Minimum Booking:</strong> This special is valid for <strong>two (2) people or more per booking</strong>.
                  </p>
                  <p>
                    <strong>3. Availability:</strong> Offer valid <strong>while slots last</strong> and subject to therapist availability.
                  </p>
                  <p>
                    <strong>4. Booking Requirement:</strong> Advance booking is required. Walk-ins are subject to availability.
                  </p>
                  <p>
                    <strong>5. Duration:</strong> Each session is 60 minutes.
                  </p>
                  <p>
                    <strong>6. Location:</strong> Offer valid for <strong>Cape Town service areas</strong> covered by Exotic Touch Mobile Spa.
                  </p>
                  <p>
                    <strong>7. Cancellations:</strong> Cancellations within <strong>24 hours</strong> of the appointment may result in forfeiting the special rate.
                  </p>
                  <p>
                    <strong>8. Not Combinable:</strong> This promotion cannot be used with any other discounts, vouchers, or loyalty rewards.
                  </p>
                  <p>
                    <strong>9. Changes:</strong> Exotic Touch Mobile Spa reserves the right to amend or withdraw this offer at any time without prior notice.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SpecialModal;
