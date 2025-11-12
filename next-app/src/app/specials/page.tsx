"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppStrip from "@/components/WhatsAppStrip";
import SpecialModal from "@/components/SpecialModal";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Gift, Clock, Sparkles, Calendar } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export default function SpecialsPage() {
  const { data: specialsData, isLoading } = useQuery({
    queryKey: ["specials"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("specials")
        .select("*")
        .eq("active", true)
        .order("created_at", { ascending: false });

      if (error) throw error;
      return data;
    },
  });

  const formatPrice = (cents: number) => `R${(cents / 100).toLocaleString()}`;
  
  const formatValidUntil = (validUntil: string | null) => {
    if (!validUntil) return "Ongoing offer";
    const date = new Date(validUntil);
    return date.toLocaleDateString("en-ZA", { year: "numeric", month: "long", day: "numeric" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
    
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-soft">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Gift className="h-16 w-16 text-primary mx-auto mb-6 animate-float" />
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 text-gradient-primary">
              Current Specials
            </h1>
            <p className="text-xl text-muted-foreground">
              Exclusive offers and limited-time deals for the ultimate spa experience
            </p>
          </div>
        </div>
      </section>

      {/* Specials Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {isLoading ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">Loading specials...</p>
            </div>
          ) : !specialsData || specialsData.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No specials available at the moment. Check back soon!</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {specialsData.map((special, index) => (
                <Card 
                  key={special.id} 
                  className={`luxury-card border-luxury relative overflow-hidden transition-luxury hover:-translate-y-1 ${index === 0 ? 'ring-2 ring-primary md:col-span-2 lg:col-span-3' : ''}`}
                >
                  <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
                    {index === 0 ? "Featured Special" : "Special Offer"}
                  </Badge>
                  
                  <CardHeader>
                    <CardTitle className="text-2xl font-heading pr-24">{special.title}</CardTitle>
                    <CardDescription className="text-base">{special.description}</CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    <div className="flex items-center gap-4">
                      {special.price_cents && special.discount_cents && special.discount_cents > 0 && (
                        <div className="text-lg text-muted-foreground line-through">
                          {formatPrice(special.price_cents + special.discount_cents)}
                        </div>
                      )}
                      {special.price_cents && (
                        <div className="text-4xl font-bold text-primary">
                          {formatPrice(special.price_cents)}
                        </div>
                      )}
                      {special.discount_cents && special.discount_cents > 0 && (
                        <Badge variant="secondary" className="text-green-600">
                          Save {formatPrice(special.discount_cents)}
                        </Badge>
                      )}
                    </div>

                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>Valid until: {formatValidUntil(special.valid_until)}</span>
                    </div>

                    <Button variant={index === 0 ? "luxury" : "elegant"} className="w-full" asChild>
                      <a href="https://wa.me/27684984179?text=Hi! I'd like to book a spa treatment." target="_blank" rel="noopener noreferrer">Book Now</a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {/* Terms & Conditions */}
          <div className="max-w-3xl mx-auto mt-16 luxury-card p-8 rounded-2xl border-luxury">
            <h3 className="text-xl font-heading font-semibold mb-4">Terms & Conditions</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• All specials are subject to availability</li>
              <li>• Advance booking required for all treatments</li>
              <li>• Specials cannot be combined unless otherwise stated</li>
              <li>• 24-hour cancellation policy applies</li>
              <li>• Valid for Cape Town & surrounding areas</li>
              <li>• Gift vouchers available for all specials</li>
            </ul>
          </div>
        </div>
      </section>

      <WhatsAppStrip />
      <Footer />
      <SpecialModal showOnPages={["specials"]} />
    </div>
  );
}

