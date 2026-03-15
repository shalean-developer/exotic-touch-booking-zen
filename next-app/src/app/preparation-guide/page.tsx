"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppStrip from "@/components/WhatsAppStrip";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Clock, Home, Shirt, Sparkles } from "lucide-react";
import Link from "next/link";

export default function PreparationGuidePage() {
  const preparationSteps = [
    {
      title: "Space Preparation",
      icon: Home,
      items: [
        "Clear a space approximately 2m x 2m",
        "Ensure the room is clean and tidy",
        "Set comfortable room temperature (20-22°C)",
        "Dim the lights or close curtains for ambiance",
        "Minimize distractions (silence phone, secure pets)",
        "For massages: ensure access to bed or clear floor space",
        "For facials/nails: have a table and chairs ready",
      ],
    },
    {
      title: "What to Wear",
      icon: Shirt,
      items: [
        "Wear comfortable, loose-fitting clothing",
        "Easy to remove items (avoid complicated fastenings)",
        "For massages: you&apos;ll be covered with towels",
        "Remove jewelry before treatment",
        "Remove contact lenses for facials",
        "Wear something comfortable to relax in afterwards",
      ],
    },
    {
      title: "Before Your Appointment",
      icon: Clock,
      items: [
        "Shower before your treatment (especially for massages)",
        "Avoid heavy meals 1-2 hours before",
        "Stay hydrated - drink water",
        "Avoid alcohol before treatment",
        "Arrive home 15 minutes before scheduled time",
        "Have payment method ready (cash, card, or EFT details)",
      ],
    },
    {
      title: "Special Considerations",
      icon: Sparkles,
      items: [
        "Inform us of any allergies or skin sensitivities",
        "Share any health conditions or injuries",
        "Let us know if you&apos;re pregnant (for massage)",
        "Mention any areas to avoid or focus on",
        "Discuss pressure preferences beforehand",
        "Ask questions if unsure about anything",
      ],
    },
  ];

  const treatmentSpecific = [
    {
      treatment: "Massages",
      prep: [
        "Shower before appointment",
        "Don&apos;t apply lotions or oils",
        "Wear loose, comfortable clothing",
        "Have towels ready (we bring our own too)",
        "Ensure privacy during treatment",
      ],
    },
    {
      treatment: "Facials",
      prep: [
        "Remove makeup before treatment",
        "Come with clean, product-free skin",
        "Remove contact lenses",
        "Tie hair back if long",
        "Avoid sun exposure 24 hours before",
      ],
    },
    {
      treatment: "Manicures & Pedicures",
      prep: [
        "Remove old nail polish if possible",
        "Come with clean hands and feet",
        "Don&apos;t cut nails too short beforehand",
        "Wear open-toed shoes for pedicures",
        "Have nail art ideas ready if desired",
      ],
    },
    {
      treatment: "Waxing",
      prep: [
        "Hair should be at least 1/4 inch long",
        "Exfoliate area 24-48 hours before",
        "Avoid sun exposure 24 hours before/after",
        "Don&apos;t apply lotions or oils",
        "Wear loose clothing to appointment",
      ],
    },
    {
      treatment: "Lash Extensions",
      prep: [
        "Remove all eye makeup",
        "Come with clean, product-free lashes",
        "Remove contact lenses",
        "Avoid caffeine before appointment",
        "Plan for 2-3 hours of appointment time",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-soft">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Sparkles className="h-16 w-16 text-primary mx-auto mb-6 animate-float" />
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 text-gradient-primary">
              Preparation Guide
            </h1>
            <p className="text-xl text-muted-foreground">
              Everything you need to know to prepare for your perfect spa experience
            </p>
          </div>
        </div>
      </section>

      {/* General Preparation */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-heading font-bold text-center mb-12">
              General Preparation Steps
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {preparationSteps.map((step, idx) => {
                const Icon = step.icon;
                return (
                  <Card key={idx} className="luxury-card border-luxury">
                    <CardContent className="p-8">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="text-2xl font-heading font-bold">{step.title}</h3>
                      </div>
                      <ul className="space-y-3">
                        {step.items.map((item, itemIdx) => (
                          <li key={itemIdx} className="flex items-start gap-2 text-sm">
                            <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Treatment-Specific Preparation */}
      <section className="py-20 bg-gradient-soft">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-heading font-bold text-center mb-12">
              Treatment-Specific Preparation
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {treatmentSpecific.map((item, idx) => (
                <Card key={idx} className="luxury-card border-luxury">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-heading font-bold mb-4">{item.treatment}</h3>
                    <ul className="space-y-2">
                      {item.prep.map((prepItem, prepIdx) => (
                        <li key={prepIdx} className="flex items-start gap-2 text-sm">
                          <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <span>{prepItem}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Checklist */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="luxury-card border-luxury">
              <CardContent className="p-8">
                <h2 className="text-3xl font-heading font-bold mb-6">Quick Preparation Checklist</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-3">24 Hours Before</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span>Confirm your appointment</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span>Prepare your space</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span>Review treatment details</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3">Day of Appointment</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span>Shower and prepare</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span>Set up your space</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span>Have payment ready</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span>Be ready 15 minutes early</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-soft">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Card className="luxury-card border-luxury">
              <CardContent className="p-12">
                <h2 className="text-3xl font-heading font-bold mb-4">
                  Ready to Book?
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Now that you&apos;re prepared, book your appointment and experience the luxury of mobile spa treatments.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="luxury" size="lg" asChild>
                    <a href="https://wa.me/27684984179?text=Hi! I'd like to book a spa treatment." target="_blank" rel="noopener noreferrer">
                      Book Your Appointment
                    </a>
                  </Button>
                  <Button variant="elegant" size="lg" asChild>
                    <Link href="/what-to-expect">What to Expect</Link>
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

