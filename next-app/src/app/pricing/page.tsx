"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppStrip from "@/components/WhatsAppStrip";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { DollarSign, Sparkles, Gift, Check } from "lucide-react";
import Link from "next/link";

export default function PricingPage() {
  const treatmentCategories = [
    {
      name: "Massages",
      link: "/treatments/massages",
      treatments: [
        { name: "Swedish Massage", price: "R650", duration: "60 mins", popular: true },
        { name: "Swedish Massage", price: "R900", duration: "90 mins", popular: false },
        { name: "Deep Tissue Massage", price: "R750", duration: "60 mins", popular: false },
        { name: "Deep Tissue Massage", price: "R1,050", duration: "90 mins", popular: false },
        { name: "Hot Stone Massage", price: "R700", duration: "75 mins", popular: false },
        { name: "Hot Stone Massage", price: "R950", duration: "90 mins", popular: false },
        { name: "Pregnancy Massage", price: "R650", duration: "60 mins", popular: false },
        { name: "Pregnancy Massage", price: "R800", duration: "75 mins", popular: false },
      ],
    },
    {
      name: "Facials",
      link: "/treatments/facials",
      treatments: [
        { name: "Superficial Facial", price: "R500", duration: "45 mins", popular: true },
        { name: "Deep Cleanse Facial", price: "R600", duration: "60 mins", popular: false },
        { name: "Anti-Aging Facial", price: "R750", duration: "75 mins", popular: false },
      ],
    },
    {
      name: "Manicures & Pedicures",
      link: "/treatments/manicures-pedicures",
      treatments: [
        { name: "Classic Manicure", price: "R300", duration: "45 mins", popular: false },
        { name: "Gel Manicure", price: "R450", duration: "60 mins", popular: true },
        { name: "Classic Pedicure", price: "R350", duration: "60 mins", popular: false },
        { name: "Gel Pedicure", price: "R500", duration: "75 mins", popular: false },
        { name: "Deluxe Mani/Pedi", price: "R750", duration: "120 mins", popular: false },
      ],
    },
    {
      name: "Waxing",
      link: "/treatments/waxing",
      treatments: [
        { name: "Eyebrow Wax", price: "R150", duration: "15 mins", popular: false },
        { name: "Bikini Wax", price: "R300", duration: "20 mins", popular: false },
        { name: "Brazilian Wax", price: "R450", duration: "30 mins", popular: true },
        { name: "Full Leg Wax", price: "R550", duration: "45 mins", popular: false },
        { name: "Full Face Wax", price: "R400", duration: "30 mins", popular: false },
      ],
    },
    {
      name: "Lash Extensions",
      link: "/treatments/lashes",
      treatments: [
        { name: "Classic Lashes", price: "R450", duration: "120 mins", popular: true },
        { name: "Hybrid Lashes", price: "R550", duration: "150 mins", popular: false },
        { name: "Volume Lashes", price: "R650", duration: "180 mins", popular: false },
        { name: "Mega Volume Lashes", price: "R750", duration: "210 mins", popular: false },
        { name: "Lash Fill (2-3 weeks)", price: "R300", duration: "60 mins", popular: false },
      ],
    },
  ];

  const packages = [
    {
      name: "Couples Retreat",
      price: "R2,500",
      duration: "2 hours",
      includes: ["Side-by-side Swedish massage", "Couples facial", "Champagne & chocolates"],
    },
    {
      name: "Bridal Shower Package",
      price: "From R4,500",
      duration: "3-4 hours",
      includes: ["Bride deluxe treatment", "Mini facials for guests", "Manicures for all"],
    },
    {
      name: "Corporate Wellness",
      price: "Custom Quote",
      duration: "Flexible",
      includes: ["Chair massages", "Mini treatments", "On-site setup"],
    },
    {
      name: "Pamper Party",
      price: "From R3,500",
      duration: "3 hours",
      includes: ["Choice of 2 treatments", "Mini facials or massages", "Manicure options"],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-soft">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <DollarSign className="h-16 w-16 text-primary mx-auto mb-6 animate-float" />
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 text-gradient-primary">
              Pricing
            </h1>
            <p className="text-xl text-muted-foreground">
              Transparent pricing for all our mobile spa treatments. All prices include travel within our service areas.
            </p>
          </div>
        </div>
      </section>

      {/* Treatment Pricing */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-heading font-bold text-center mb-12">
              Treatment Pricing
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {treatmentCategories.map((category, categoryIdx) => (
                <Card key={categoryIdx} className="luxury-card border-luxury">
                  <CardHeader>
                    <CardTitle className="text-2xl font-heading font-bold mb-4">
                      {category.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-6">
                      {category.treatments.map((treatment, treatmentIdx) => (
                        <div
                          key={treatmentIdx}
                          className={`flex items-center justify-between p-3 rounded-lg ${
                            treatment.popular ? "bg-primary/10 border border-primary/20" : "bg-muted/50"
                          }`}
                        >
                          <div className="flex-1">
                            <div className="font-semibold text-sm">{treatment.name}</div>
                            <div className="text-xs text-muted-foreground">{treatment.duration}</div>
                          </div>
                          <div className="text-right">
                            <div className="font-bold text-primary">{treatment.price}</div>
                            {treatment.popular && (
                              <Badge variant="secondary" className="text-xs mt-1">
                                Popular
                              </Badge>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                    <Button variant="elegant" className="w-full" asChild>
                      <Link href={category.link}>View Details</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Package Pricing */}
      <section className="py-20 bg-gradient-soft">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Gift className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="text-4xl font-heading font-bold mb-4">Spa Packages</h2>
              <p className="text-lg text-muted-foreground">
                Save with our curated spa packages combining multiple treatments
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {packages.map((pkg, idx) => (
                <Card key={idx} className="luxury-card border-luxury">
                  <CardContent className="p-8">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-heading font-bold mb-2">{pkg.name}</h3>
                        <p className="text-sm text-muted-foreground">{pkg.duration}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-bold text-primary">{pkg.price}</div>
                      </div>
                    </div>
                    <ul className="space-y-2 mb-6">
                      {pkg.includes.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex items-center gap-2 text-sm">
                          <Check className="h-4 w-4 text-primary flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <Button variant="luxury" className="w-full" asChild>
                      <Link href="/packages">View Package Details</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Add-ons & Extras */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="luxury-card border-luxury">
              <CardContent className="p-8">
                <h2 className="text-3xl font-heading font-bold mb-6">Add-ons & Extras</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-3">Massage Add-ons</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex justify-between">
                        <span>Relaxing Back Scrub</span>
                        <span className="font-semibold text-foreground">R100</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Hot Stone Upgrade</span>
                        <span className="font-semibold text-foreground">R50</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Extended Time (30 mins)</span>
                        <span className="font-semibold text-foreground">R250</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3">Nail Services</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex justify-between">
                        <span>Nail Art</span>
                        <span className="font-semibold text-foreground">R50-150</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Paraffin Treatment</span>
                        <span className="font-semibold text-foreground">R100</span>
                      </li>
                      <li className="flex justify-between">
                        <span>French Manicure</span>
                        <span className="font-semibold text-foreground">R50</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Notes */}
      <section className="py-20 bg-gradient-soft">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="luxury-card border-luxury">
              <CardContent className="p-8">
                <h2 className="text-3xl font-heading font-bold mb-6">Pricing Information</h2>
                <div className="space-y-4 text-muted-foreground">
                  <div className="flex items-start gap-3">
                    <Sparkles className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <p>All prices include travel within our standard service areas (Cape Town and surrounds)</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Sparkles className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <p>Prices are subject to change. Current pricing confirmed at time of booking</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Sparkles className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <p>Group bookings and packages may qualify for special discounts</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Sparkles className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <p>Payment accepted via cash, EFT, or card on the day of service</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Sparkles className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <p>Gift vouchers available - see our <Link href="/gift-vouchers" className="text-primary hover:underline">Gift Vouchers</Link> page</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Card className="luxury-card border-luxury bg-gradient-soft">
              <CardContent className="p-12">
                <h2 className="text-3xl font-heading font-bold mb-4">
                  Ready to Book Your Treatment?
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Contact us today to book your appointment or ask about custom packages.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="luxury" size="lg" asChild>
                    <a href="https://wa.me/27684984179?text=Hi! I'd like to book a spa treatment." target="_blank" rel="noopener noreferrer">
                      Book Now
                    </a>
                  </Button>
                  <Button variant="elegant" size="lg" asChild>
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <WhatsAppStrip />
      <Footer />
    </div>
  );
}

