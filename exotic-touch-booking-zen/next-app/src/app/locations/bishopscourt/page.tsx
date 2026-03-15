"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppStrip from "@/components/WhatsAppStrip";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { MapPin, Phone, MessageCircle, Clock, Check } from "lucide-react";

export default function BishopscourtPage() {
  const whatsappUrl = "https://wa.me/27684984179?text=Hi! I'd like to book a spa treatment in Bishopscourt.";
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
    
      <section className="pt-24 pb-16 bg-gradient-soft">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Link href="/locations" className="text-sm text-primary hover:underline mb-4 inline-block">
              ← Back to All Locations
            </Link>
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 text-gradient-primary">
              Mobile Spa in Bishopscourt
            </h1>
            <p className="text-xl text-muted-foreground">
              Premium mobile spa treatments delivered to your location
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-heading font-bold mb-6">Spa Services in Bishopscourt</h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Experience premium mobile spa services in Bishopscourt. Our professional therapists bring 
                  luxury spa treatments directly to your home or accommodation in this exclusive area.
                </p>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Enjoy our full range of spa treatments in the comfort of your space, with convenient 
                  service to Bishopscourt and surrounding areas.
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

              <div className="space-y-6">
                <Card className="luxury-card border-luxury">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <MapPin className="h-6 w-6 text-primary" />
                      <h3 className="text-xl font-heading font-semibold">Service Area</h3>
                    </div>
                    <p className="text-muted-foreground">
                      We service Bishopscourt and surrounding areas.
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
                      Approximately 12 minutes from Cape Town CBD
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

