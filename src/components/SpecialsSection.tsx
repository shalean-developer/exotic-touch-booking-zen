import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Clock, Sparkles, Gift } from "lucide-react";

const SpecialsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Current Specials
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Limited-time offers for the ultimate relaxation experience
          </p>
        </div>

        {/* Featured Special */}
        <div className="max-w-4xl mx-auto">
          <div className="luxury-card p-8 md:p-12 rounded-3xl border-luxury relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-secondary/10 rounded-full -ml-12 -mb-12" />
            
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1 text-center md:text-left">
                  <Badge className="mb-4 bg-primary text-primary-foreground text-sm px-4 py-2">
                    <Gift className="h-4 w-4 mr-2" />
                    Limited Time Offer
                  </Badge>
                  
                  <h3 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                    Massage Special
                  </h3>
                  
                  <p className="text-xl text-muted-foreground mb-6">
                    Swedish Massage (60 minutes) + Relaxing Back Scrub
                  </p>
                  
                  <div className="flex items-center justify-center md:justify-start space-x-4 mb-6">
                    <div className="text-center">
                      <div className="text-sm text-muted-foreground line-through">
                        Regular R650
                      </div>
                      <div className="text-4xl font-bold text-primary">
                        R450
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-green-600">
                      Save R200!
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-center md:justify-start space-x-6 text-sm text-muted-foreground mb-8">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2" />
                      <span>90 minutes total</span>
                    </div>
                    <div className="flex items-center">
                      <Sparkles className="h-4 w-4 mr-2" />
                      <span>Premium oils included</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button variant="luxury" size="lg" asChild>
                      <Link to="/booking">
                        Book This Special
                      </Link>
                    </Button>
                    <Button variant="elegant" size="lg" asChild>
                      <Link to="/specials">
                        View All Specials
                      </Link>
                    </Button>
                  </div>
                </div>
                
                {/* Special Visual Element */}
                <div className="flex-shrink-0">
                  <div className="relative">
                    <div className="w-48 h-48 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground animate-glow">
                      <div className="text-center">
                        <div className="text-4xl font-bold">R450</div>
                        <div className="text-sm">Special Price</div>
                      </div>
                    </div>
                    <div className="absolute -top-4 -right-4 w-16 h-16 bg-secondary rounded-full flex items-center justify-center float-animation">
                      <Sparkles className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Offers */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mt-12">
          <div className="luxury-card p-6 rounded-2xl border-luxury text-center">
            <h4 className="text-xl font-heading font-semibold mb-2">First-Time Client</h4>
            <p className="text-muted-foreground mb-4">10% off your first booking</p>
            <Badge variant="secondary">New clients only</Badge>
          </div>
          
          <div className="luxury-card p-6 rounded-2xl border-luxury text-center">
            <h4 className="text-xl font-heading font-semibold mb-2">Group Bookings</h4>
            <p className="text-muted-foreground mb-4">15% off for 3+ treatments</p>
            <Badge variant="secondary">Perfect for events</Badge>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialsSection;