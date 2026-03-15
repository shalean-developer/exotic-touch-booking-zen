"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppStrip from "@/components/WhatsAppStrip";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { Clock, Check, Sparkles } from "lucide-react";
import nailsImg from "@/assets/nails-treatment.jpg";

export default function ManicuresPedicuresPage() {
  const services = [
    {
      name: "Gel Overlay Manicure",
      description: "Long-lasting gel polish application over natural nails with shaping and cuticle care.",
      price: 350,
      duration: 60,
      includes: ["Nail shaping & filing", "Cuticle treatment", "Hand massage", "Gel polish application", "Quick-dry finish"]
    },
    {
      name: "Deluxe Manicure",
      description: "Comprehensive hand and nail treatment with exfoliation, mask, and polish.",
      price: 550,
      duration: 75,
      includes: ["Soak & nail prep", "Exfoliation scrub", "Hydrating mask", "Massage", "Polish or gel"]
    },
    {
      name: "Deluxe Pedicure",
      description: "Complete foot pampering with callus removal, scrub, mask, and polish.",
      price: 600,
      duration: 90,
      includes: ["Foot soak", "Callus removal", "Nail shaping", "Scrub & mask", "Foot massage", "Polish or gel"]
    },
    {
      name: "Medi Heel Pedi",
      description: "Therapeutic pedicure focusing on cracked heels and dry skin with medical-grade products.",
      price: 650,
      duration: 90,
      includes: ["Deep callus treatment", "Heel repair balm", "Intensive moisturizing", "Foot massage", "Polish optional"]
    },
    {
      name: "Nail Enhancement",
      description: "Gel extensions or acrylic nails for length and strength.",
      price: 700,
      duration: 120,
      includes: ["Nail preparation", "Extension application", "Shaping & filing", "Gel polish", "Cuticle care"]
    },
    {
      name: "Nail Art",
      description: "Creative nail designs and decorations (add-on to any service).",
      price: 100,
      duration: 30,
      includes: ["Custom designs", "Artistic patterns", "Embellishments", "Rhinestones & decals"]
    }
  ];

  const combos = [
    {
      name: "Mani + Pedi Combo",
      description: "Deluxe manicure and pedicure package",
      regularPrice: 1150,
      comboPrice: 1000,
      savings: 150
    },
    {
      name: "Gel Mani + Pedi",
      description: "Gel overlay on hands and feet",
      regularPrice: 1100,
      comboPrice: 950,
      savings: 150
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
    
      {/* Hero Section */}
      <section className="relative pt-24 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-soft" />
        <div className="absolute inset-0">
          <Image src={nailsImg} alt="Professional manicure and pedicure nail care services in Cape Town" className="w-full h-full object-cover opacity-10" fill />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Link href="/treatments" className="text-sm text-primary hover:underline mb-4 inline-block">
              ← Back to All Treatments
            </Link>
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 text-gradient-primary">
              Manicures & Pedicures
            </h1>
            <p className="text-xl text-muted-foreground">
              Professional nail care for perfectly polished hands and feet
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 -mt-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-heading font-bold text-center mb-12">Nail Care Services</h2>
          <div className="space-y-8 max-w-5xl mx-auto">
            {services.map((service, idx) => (
              <Card key={idx} className="luxury-card border-luxury">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-3xl font-heading mb-3">{service.name}</CardTitle>
                      <p className="text-muted-foreground">{service.description}</p>
                    </div>
                    <div className="text-right ml-6">
                      <p className="text-3xl font-bold text-primary">R{service.price}</p>
                      <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                        <Clock className="h-3 w-3" />
                        {service.duration} mins
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="font-semibold mb-3 flex items-center gap-2">
                      <Sparkles className="h-4 w-4" />
                      Includes:
                    </h3>
                    <div className="grid md:grid-cols-2 gap-2">
                      {service.includes.map((item, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-primary flex-shrink-0" />
                          <span className="text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button variant="luxury" size="lg" className="w-full" asChild>
                    <a href="https://wa.me/27684984179?text=Hi! I'd like to book nail services." target="_blank" rel="noopener noreferrer">Book Now</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Combo Packages */}
          <div className="max-w-5xl mx-auto mt-12">
            <h2 className="text-3xl font-heading font-bold text-center mb-8">Combo Packages</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {combos.map((combo, idx) => (
                <Card key={idx} className="luxury-card border-luxury ring-2 ring-primary">
                  <CardHeader>
                    <CardTitle className="text-2xl font-heading">{combo.name}</CardTitle>
                    <p className="text-muted-foreground">{combo.description}</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-4">
                      <span className="text-lg text-muted-foreground line-through">R{combo.regularPrice}</span>
                      <span className="text-3xl font-bold text-primary">R{combo.comboPrice}</span>
                      <span className="text-sm font-semibold text-green-600">Save R{combo.savings}</span>
                    </div>
                    <Button variant="luxury" size="lg" className="w-full" asChild>
                      <a href="https://wa.me/27684984179?text=Hi! I'd like to book nail services." target="_blank" rel="noopener noreferrer">Book Combo</a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Color Selection Info */}
          <div className="max-w-5xl mx-auto mt-12 luxury-card p-8 rounded-2xl border-luxury text-center">
            <Sparkles className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-heading font-bold mb-3">Endless Color Options</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose from our extensive range of premium polish colors and gel shades. 
              From classic nudes to bold statements, we bring the salon color wheel to you.
            </p>
          </div>
        </div>
      </section>

      <WhatsAppStrip />
      <Footer />
    </div>
  );
}

