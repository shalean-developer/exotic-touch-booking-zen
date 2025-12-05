"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Sparkles, Clock } from "lucide-react";

interface SpecialModalProps {
  showOnPages?: ("home" | "specials")[];
}

const SpecialModal = ({ showOnPages = ["home", "specials"] }: SpecialModalProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Check if modal has been shown this session
    const hasSeenModal = sessionStorage.getItem("exotic-touch-special-modal-seen");
    
    // Check if we should show on current page
    const shouldShowOnThisPage = 
      (pathname === "/" && showOnPages.includes("home")) ||
      (pathname === "/specials" && showOnPages.includes("specials"));

    if (!hasSeenModal && shouldShowOnThisPage) {
      // Delay modal slightly for better UX
      const timer = setTimeout(() => {
        setIsOpen(true);
        sessionStorage.setItem("exotic-touch-special-modal-seen", "true");
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, [showOnPages, pathname]);

  const handleBookNow = () => {
    window.open("https://wa.me/27684984179?text=Hi! I'd like to book the Swedish Massage + Back Scrub special for R550.", "_blank");
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
              <div className="text-5xl font-bold text-primary">R550</div>
              <div className="text-lg text-muted-foreground">
                <Clock className="inline h-4 w-4 mr-1" />
                60 minutes • Save R100
              </div>
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
                    <strong>1. Offer Details:</strong> Swedish Massage + Back Scrub (60 minutes) for only <strong>R550 per person</strong>.
                  </p>
                  <p>
                    <strong>2. Availability:</strong> Offer valid <strong>while slots last</strong> and subject to therapist availability.
                  </p>
                  <p>
                    <strong>3. Booking Requirement:</strong> Advance booking is required.
                  </p>
                  <p>
                    <strong>4. Duration:</strong> Each session is 60 minutes.
                  </p>
                  <p>
                    <strong>5. Location:</strong> Offer valid for <strong>Cape Town service areas</strong> covered by Exotic Touch Mobile Spa.
                  </p>
                  <p>
                    <strong>6. Cancellations:</strong> Cancellations within <strong>24 hours</strong> of the appointment may result in forfeiting the special rate.
                  </p>
                  <p>
                    <strong>7. Not Combinable:</strong> This promotion cannot be used with any other discounts, vouchers, or loyalty rewards.
                  </p>
                  <p>
                    <strong>8. Changes:</strong> Exotic Touch Mobile Spa reserves the right to amend or withdraw this offer at any time without prior notice.
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
