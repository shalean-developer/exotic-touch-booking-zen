import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppStrip from "@/components/WhatsAppStrip";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Users, Heart, Briefcase, Sparkles, Check } from "lucide-react";

const Packages = () => {
  const packages = [
    {
      id: 1,
      icon: Heart,
      name: "Couples Retreat",
      description: "Reconnect and unwind together with our couples spa experience",
      price: "R2,500",
      duration: "2 hours",
      includes: [
        "Side-by-side Swedish massage (60 mins)",
        "Couples facial treatment",
        "Champagne and chocolates",
        "Aromatherapy oils",
        "Relaxing music ambiance"
      ],
      popular: false
    },
    {
      id: 2,
      icon: Sparkles,
      name: "Bridal Shower Package",
      description: "Perfect pampering for the bride-to-be and her party",
      price: "From R4,500",
      duration: "3-4 hours",
      includes: [
        "Bride receives deluxe treatment",
        "Mini facials for guests (up to 6)",
        "Manicures for all attendees",
        "Champagne service",
        "Personalized spa robes (rental)",
        "Group photo opportunity"
      ],
      popular: true
    },
    {
      id: 3,
      icon: Briefcase,
      name: "Corporate Wellness",
      description: "Boost team morale with professional spa services at your office",
      price: "Custom Quote",
      duration: "Flexible",
      includes: [
        "Chair massages (15-30 mins each)",
        "Mini manicures or hand treatments",
        "Stress relief sessions",
        "On-site setup and cleanup",
        "Flexible scheduling",
        "Professional therapists"
      ],
      popular: false
    },
    {
      id: 4,
      icon: Users,
      name: "Pamper Party",
      description: "Celebrate birthdays, hen parties, or any special occasion",
      price: "From R3,500",
      duration: "3 hours",
      includes: [
        "Choice of 2 treatments per guest",
        "Mini facials or massages",
        "Manicure or pedicure options",
        "Complimentary refreshments",
        "Party setup assistance",
        "Customizable package options"
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-soft">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 text-gradient-primary">
              Spa Packages
            </h1>
            <p className="text-xl text-muted-foreground">
              Specially curated experiences for couples, groups, and special occasions
            </p>
          </div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg) => (
              <Card key={pkg.id} className={`luxury-card border-luxury relative overflow-hidden ${pkg.popular ? 'ring-2 ring-primary' : ''}`}>
                {pkg.popular && (
                  <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
                    Most Popular
                  </Badge>
                )}
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <pkg.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl font-heading">{pkg.name}</CardTitle>
                      <p className="text-sm text-muted-foreground">{pkg.duration}</p>
                    </div>
                  </div>
                  <CardDescription className="text-base">{pkg.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="text-3xl font-bold text-primary">
                    {pkg.price}
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-sm uppercase tracking-wide">Package Includes:</h4>
                    <ul className="space-y-2">
                      {pkg.includes.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button variant="luxury" className="w-full" asChild>
                    <Link to="/booking">Book This Package</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Custom Package CTA */}
          <div className="max-w-4xl mx-auto mt-16 text-center luxury-card p-12 rounded-3xl border-luxury">
            <Sparkles className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-3xl font-heading font-bold mb-4">
              Need a Custom Package?
            </h3>
            <p className="text-lg text-muted-foreground mb-8">
              We can create a personalized spa experience tailored to your specific needs and budget
            </p>
            <Button variant="elegant" size="lg" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <WhatsAppStrip />
      <Footer />
    </div>
  );
};

export default Packages;
