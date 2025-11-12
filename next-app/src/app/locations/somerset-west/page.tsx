"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppStrip from "@/components/WhatsAppStrip";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { MapPin, Phone, MessageCircle, Clock, Check } from "lucide-react";

export default function SomersetWestPage() {
  const whatsappUrl = "https://wa.me/27684984179?text=Hi! I'd like to book a spa treatment in Somerset West.";
  const phoneNumber = "+27 68 498 4179";

  const services = [
    "Swedish & Deep Tissue Massages",
    "Hot Stone & Pregnancy Massages",
    "Professional Facial Treatments",
    "Manicures & Pedicures",
    "Waxing Services",
    "Lash Extensions",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
    
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-soft">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Link href="/locations" className="text-sm text-primary hover:underline mb-4 inline-block">
              ← Back to All Locations
            </Link>
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 text-gradient-primary">
              Mobile Spa in Somerset West
            </h1>
            <p className="text-xl text-muted-foreground">
              Luxury mobile spa treatments delivered to your location
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Main Content */}
              <div>
                <h2 className="text-3xl font-heading font-bold mb-6">Spa Services in Somerset West</h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Enjoy luxury mobile spa services in Somerset West. Our professional therapists bring 
                  relaxation and rejuvenation directly to your home or accommodation.
                </p>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  We provide a full range of spa treatments delivered to your location, ensuring you 
                  can relax and unwind without leaving your comfort zone.
                </p>

                <div className="mb-8">
                  <h3 className="text-2xl font-heading font-semibold mb-4">Available Services</h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {services.map((service, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <Check className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{service}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="luxury" size="lg" asChild>
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="h-5 w-5 mr-2" />
                      Book Now
                    </a>
                  </Button>
                  <Button variant="elegant" size="lg" asChild>
                    <a href={`tel:${phoneNumber}`}>
                      <Phone className="h-5 w-5 mr-2" />
                      Call Us
                    </a>
                  </Button>
                </div>
              </div>

              {/* Info Cards */}
              <div className="space-y-6">
                <Card className="luxury-card border-luxury">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <MapPin className="h-6 w-6 text-primary" />
                      <h3 className="text-xl font-heading font-semibold">Service Area</h3>
                    </div>
                    <p className="text-muted-foreground">
                      We service Somerset West and surrounding areas.
                    </p>
                  </CardContent>
                </Card>

                <Card className="luxury-card border-luxury">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Clock className="h-6 w-6 text-primary" />
                      <h3 className="text-xl font-heading font-semibold">Travel Time</h3>
                    </div>
                    <p className="text-muted-foreground mb-2">
                      Approximately 50 minutes from Cape Town CBD
                    </p>
                  </CardContent>
                </Card>

                <Card className="luxury-card border-luxury bg-gradient-soft">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-heading font-semibold mb-3">Perfect For</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>✓ Local residents</li>
                      <li>✓ Hotel guests</li>
                      <li>✓ Special occasions</li>
                      <li>✓ Corporate events</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WhatsAppStrip />
      <Footer />
    </div>
  );
}

