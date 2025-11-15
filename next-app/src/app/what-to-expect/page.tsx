"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppStrip from "@/components/WhatsAppStrip";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Clock, MapPin, Sparkles, Heart, Phone } from "lucide-react";
import Link from "next/link";

export default function WhatToExpectPage() {
  const steps = [
    {
      step: "01",
      title: "Booking Your Appointment",
      icon: Phone,
      description: "Contact us via WhatsApp, phone, or our contact form. We&apos;ll discuss your treatment preferences, preferred date and time, and location.",
      details: [
        "We&apos;ll confirm availability for your preferred date",
        "Discuss any special requirements or preferences",
        "Confirm your address and any access instructions",
        "Receive confirmation of your booking",
      ],
    },
    {
      step: "02",
      title: "Preparing Your Space",
      icon: MapPin,
      description: "We bring everything needed, but you&apos;ll want to prepare a clean, quiet space for your treatment.",
      details: [
        "Clear a space approximately 2m x 2m",
        "Ensure the room is clean and comfortable",
        "For massages: access to a bed or we&apos;ll use our table",
        "For facials/nails: a table and chairs work perfectly",
        "Dim lighting and quiet environment preferred",
      ],
    },
    {
      step: "03",
      title: "Therapist Arrival",
      icon: Sparkles,
      description: "Your therapist arrives fully equipped with all professional equipment, products, and supplies.",
      details: [
        "Therapist arrives at scheduled time",
        "Brings massage table, towels, linens, and products",
        "Sets up treatment area in your space",
        "Brief consultation to confirm treatment preferences",
        "Ensures your comfort and answers any questions",
      ],
    },
    {
      step: "04",
      title: "Your Treatment",
      icon: Heart,
      description: "Relax and enjoy your professional spa treatment in the comfort of your own space.",
      details: [
        "Treatment begins at scheduled time",
        "Professional techniques and premium products",
        "Therapist ensures your comfort throughout",
        "You can communicate preferences during treatment",
        "Full duration as booked (60-90+ minutes)",
      ],
    },
    {
      step: "05",
      title: "After Your Treatment",
      icon: Check,
      description: "After your treatment, we&apos;ll provide aftercare advice and clean up everything.",
      details: [
        "Therapist provides aftercare recommendations",
        "Complete cleanup of treatment area",
        "Pack up all equipment and supplies",
        "Payment processing (cash, EFT, or card)",
        "Schedule your next appointment if desired",
      ],
    },
  ];

  const whatWeBring = [
    "Professional massage table (for massages)",
    "Fresh towels and linens",
    "Premium spa products and oils",
    "All treatment tools and equipment",
    "Music and ambiance setup",
    "Water and refreshments (on request)",
  ];

  const whatYouNeed = [
    "Clean, quiet space (2m x 2m minimum)",
    "Access to a bed or clear floor space",
    "Comfortable temperature",
    "Privacy during treatment",
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
              What to Expect
            </h1>
            <p className="text-xl text-muted-foreground">
              Your complete guide to the mobile spa experience from booking to aftercare
            </p>
          </div>
        </div>
      </section>

      {/* Step-by-Step Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-heading font-bold text-center mb-12">
              Your Spa Experience Journey
            </h2>
            <div className="space-y-8">
              {steps.map((step, idx) => {
                const Icon = step.icon;
                return (
                  <Card key={idx} className="luxury-card border-luxury">
                    <CardContent className="p-8">
                      <div className="flex gap-6">
                        <div className="flex-shrink-0">
                          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                            <Icon className="h-8 w-8 text-primary" />
                          </div>
                          <div className="text-4xl font-heading font-bold text-primary/20">
                            {step.step}
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-heading font-bold mb-3">{step.title}</h3>
                          <p className="text-muted-foreground mb-4">{step.description}</p>
                          <ul className="space-y-2">
                            {step.details.map((detail, detailIdx) => (
                              <li key={detailIdx} className="flex items-start gap-2 text-sm">
                                <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                                <span>{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* What We Bring vs What You Need */}
      <section className="py-20 bg-gradient-soft">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-heading font-bold text-center mb-12">
              What We Bring vs What You Need
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="luxury-card border-luxury">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <Sparkles className="h-8 w-8 text-primary" />
                    <h3 className="text-2xl font-heading font-bold">What We Bring</h3>
                  </div>
                  <ul className="space-y-3">
                    {whatWeBring.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="luxury-card border-luxury">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <MapPin className="h-8 w-8 text-primary" />
                    <h3 className="text-2xl font-heading font-bold">What You Need</h3>
                  </div>
                  <ul className="space-y-3">
                    {whatYouNeed.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Tips for Best Experience */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="luxury-card border-luxury">
              <CardContent className="p-8">
                <h2 className="text-3xl font-heading font-bold mb-6">Tips for the Best Experience</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-3 flex items-center gap-2">
                      <Clock className="h-5 w-5 text-primary" />
                      Timing
                    </h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Book when you have 2-3 hours free</li>
                      <li>• Avoid scheduling right after meals</li>
                      <li>• Allow time to relax after treatment</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3 flex items-center gap-2">
                      <Heart className="h-5 w-5 text-primary" />
                      Comfort
                    </h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Wear comfortable, loose clothing</li>
                      <li>• Remove jewelry before treatment</li>
                      <li>• Communicate preferences to therapist</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3 flex items-center gap-2">
                      <Sparkles className="h-5 w-5 text-primary" />
                      Environment
                    </h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Ensure privacy during treatment</li>
                      <li>• Set comfortable room temperature</li>
                      <li>• Minimize distractions (phone, pets)</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3 flex items-center gap-2">
                      <Check className="h-5 w-5 text-primary" />
                      Communication
                    </h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Share any health concerns beforehand</li>
                      <li>• Let therapist know pressure preferences</li>
                      <li>• Ask questions anytime during treatment</li>
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
                  Ready to Experience Mobile Spa?
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Book your appointment today and experience the luxury of professional spa treatments in your own space.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="luxury" size="lg" asChild>
                    <a href="https://wa.me/27684984179?text=Hi! I'd like to book a spa treatment." target="_blank" rel="noopener noreferrer">
                      Book Your Appointment
                    </a>
                  </Button>
                  <Button variant="elegant" size="lg" asChild>
                    <Link href="/faq">View FAQ</Link>
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

