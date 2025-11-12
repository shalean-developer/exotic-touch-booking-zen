"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppStrip from "@/components/WhatsAppStrip";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { Clock, Check, Sparkles } from "lucide-react";
import facialImg from "@/assets/facial-treatment.jpg";

export default function FacialsPage() {
  const facials = [
    {
      name: "Superficial Facial",
      description: "Gentle cleansing and refreshing facial perfect for maintaining healthy skin. Includes cleanse, exfoliation, mask, and moisturize.",
      price: 500,
      duration: 45,
      includes: ["Deep cleanse", "Light exfoliation", "Hydrating mask", "Face massage", "Moisturizer & SPF"],
      skinTypes: ["All skin types", "Sensitive skin friendly"]
    },
    {
      name: "Deep Cleanse Facial",
      description: "Intensive treatment for congested skin and blackheads. Includes steam, extraction, and purifying mask to leave skin clear and refreshed.",
      price: 600,
      duration: 60,
      includes: ["Steam therapy", "Deep pore cleansing", "Professional extractions", "Purifying mask", "Toner & moisturizer"],
      skinTypes: ["Oily skin", "Acne-prone", "Combination skin"]
    },
    {
      name: "Anti-Aging Facial",
      description: "Luxurious anti-aging treatment targeting fine lines and wrinkles. Includes collagen mask, face massage, and premium serums.",
      price: 750,
      duration: 75,
      includes: ["Collagen boost mask", "Anti-aging serums", "Facial massage", "Eye treatment", "Neck & décolleté care"],
      skinTypes: ["Mature skin", "All skin types"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
    
      {/* Hero Section */}
      <section className="relative pt-24 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-soft" />
        <div className="absolute inset-0">
          <Image src={facialImg} alt="Professional facial skincare treatment in Cape Town" className="w-full h-full object-cover opacity-10" fill />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Link href="/treatments" className="text-sm text-primary hover:underline mb-4 inline-block">
              ← Back to All Treatments
            </Link>
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 text-gradient-primary">
              Facial Treatments
            </h1>
            <p className="text-xl text-muted-foreground">
              Professional skincare treatments for radiant, healthy skin
            </p>
          </div>
        </div>
      </section>

      {/* Facial Options */}
      <section className="py-20 -mt-16">
        <div className="container mx-auto px-4">
          <div className="space-y-8 max-w-5xl mx-auto">
            {facials.map((facial, idx) => (
              <Card key={idx} className="luxury-card border-luxury">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-3xl font-heading mb-3">{facial.name}</CardTitle>
                      <p className="text-muted-foreground mb-4">{facial.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {facial.skinTypes.map((type, i) => (
                          <span key={i} className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full">
                            {type}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="text-right ml-6">
                      <p className="text-3xl font-bold text-primary">R{facial.price}</p>
                      <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                        <Clock className="h-3 w-3" />
                        {facial.duration} mins
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Includes */}
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <Sparkles className="h-4 w-4" />
                      Treatment Includes:
                    </h4>
                    <div className="grid md:grid-cols-2 gap-2">
                      {facial.includes.map((item, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-primary flex-shrink-0" />
                          <span className="text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button variant="luxury" size="lg" className="w-full" asChild>
                    <a href="https://wa.me/27684984179?text=Hi! I'd like to book a facial treatment." target="_blank" rel="noopener noreferrer">Book This Facial</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Info Section */}
          <div className="max-w-5xl mx-auto mt-12 grid md:grid-cols-2 gap-6">
            <Card className="luxury-card border-luxury">
              <CardHeader>
                <CardTitle className="text-xl">Facial Benefits</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>✓ Deep cleansing and exfoliation</li>
                  <li>✓ Improved skin texture and tone</li>
                  <li>✓ Reduced fine lines and wrinkles</li>
                  <li>✓ Enhanced circulation and glow</li>
                  <li>✓ Relaxation and stress relief</li>
                  <li>✓ Professional skincare advice</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="luxury-card border-luxury">
              <CardHeader>
                <CardTitle className="text-xl">What to Expect</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Skin consultation and analysis</li>
                  <li>• Customized treatment for your skin type</li>
                  <li>• Professional-grade products</li>
                  <li>• Relaxing spa ambiance</li>
                  <li>• Post-treatment skincare tips</li>
                  <li>• Visible results after one session</li>
                </ul>
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

