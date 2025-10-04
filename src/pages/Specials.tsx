import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppStrip from "@/components/WhatsAppStrip";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Gift, Clock, Sparkles, Calendar, Users, Star } from "lucide-react";

const Specials = () => {
  const specials = [
    {
      id: 1,
      title: "Massage Special",
      description: "Swedish Massage (60 minutes) + Relaxing Back Scrub",
      regularPrice: "R650",
      specialPrice: "R450",
      savings: "R200",
      validUntil: "Limited Time",
      duration: "90 minutes total",
      features: ["Premium aromatherapy oils", "Heated towels", "Soothing music"],
      badge: "Featured Special",
      featured: true
    },
    {
      id: 2,
      title: "First-Time Client Special",
      description: "Experience luxury at a special introductory rate",
      regularPrice: null,
      specialPrice: "10% OFF",
      savings: null,
      validUntil: "New clients only",
      duration: "Any service",
      features: ["Valid on all treatments", "One-time offer", "No expiry date"],
      badge: "New Clients",
      featured: false
    },
    {
      id: 3,
      title: "Group Booking Discount",
      description: "Perfect for bridal showers, birthdays, or group celebrations",
      regularPrice: null,
      specialPrice: "15% OFF",
      savings: null,
      validUntil: "Ongoing offer",
      duration: "3+ treatments",
      features: ["Save on group bookings", "Flexible scheduling", "Customizable treatments"],
      badge: "Group Special",
      featured: false
    },
    {
      id: 4,
      title: "Midweek Pamper Package",
      description: "Facial + Manicure combo at an unbeatable price",
      regularPrice: "R1,000",
      specialPrice: "R750",
      savings: "R250",
      validUntil: "Monday - Thursday",
      duration: "2.5 hours",
      features: ["Deep cleanse facial", "Gel overlay manicure", "Complimentary hand massage"],
      badge: "Weekday Only",
      featured: false
    },
    {
      id: 5,
      title: "Birthday Month Special",
      description: "Celebrate your special day with a luxurious treat",
      regularPrice: null,
      specialPrice: "20% OFF",
      savings: null,
      validUntil: "During your birthday month",
      duration: "Any treatment",
      features: ["Valid ID required", "One service per birthday", "Cannot combine with other offers"],
      badge: "Birthday Treat",
      featured: false
    },
    {
      id: 6,
      title: "Couples Spa Date",
      description: "Side-by-side massages with champagne for two",
      regularPrice: "R1,500",
      specialPrice: "R1,200",
      savings: "R300",
      validUntil: "Weekend bookings",
      duration: "2 hours",
      features: ["Swedish or deep tissue", "Champagne & chocolates", "Couples robes"],
      badge: "Romance",
      featured: false
    }
  ];

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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {specials.map((special) => (
              <Card key={special.id} className={`luxury-card border-luxury relative overflow-hidden transition-luxury hover:-translate-y-1 ${special.featured ? 'ring-2 ring-primary md:col-span-2 lg:col-span-3' : ''}`}>
                <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
                  {special.badge}
                </Badge>
                
                <CardHeader>
                  <CardTitle className="text-2xl font-heading pr-24">{special.title}</CardTitle>
                  <CardDescription className="text-base">{special.description}</CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <div className="flex items-center gap-4">
                    {special.regularPrice && (
                      <div className="text-lg text-muted-foreground line-through">
                        {special.regularPrice}
                      </div>
                    )}
                    <div className="text-4xl font-bold text-primary">
                      {special.specialPrice}
                    </div>
                    {special.savings && (
                      <Badge variant="secondary" className="text-green-600">
                        Save {special.savings}
                      </Badge>
                    )}
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>{special.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{special.validUntil}</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    {special.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm">
                        <Sparkles className="h-4 w-4 text-primary" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button variant={special.featured ? "luxury" : "elegant"} className="w-full" asChild>
                    <a href="https://wa.me/27684984179?text=Hi! I'd like to book a spa treatment." target="_blank" rel="noopener noreferrer">Book Now</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

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
    </div>
  );
};

export default Specials;
