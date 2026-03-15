"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppStrip from "@/components/WhatsAppStrip";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Gift, Sparkles, Calendar, Check, Heart } from "lucide-react";
import Link from "next/link";

export default function GiftVouchersPage() {
  const voucherOptions = [
    {
      name: "Treatment-Specific Voucher",
      description: "Perfect for someone who knows exactly what they want",
      price: "From R500",
      features: [
        "Choose specific treatment (Massage, Facial, etc.)",
        "Valid for 12 months",
        "Can be used for any duration option",
        "Personalized message included",
        "Beautiful presentation",
      ],
      popular: false,
    },
    {
      name: "Monetary Value Voucher",
      description: "Let them choose their perfect spa experience",
      price: "R500 - R5,000+",
      features: [
        "Flexible amount (minimum R500)",
        "Can be used for any treatment or package",
        "Can combine with other payments",
        "Valid for 12 months",
        "Perfect for any occasion",
      ],
      popular: true,
    },
    {
      name: "Package Voucher",
      description: "The ultimate spa experience gift",
      price: "From R2,500",
      features: [
        "Complete spa packages",
        "Couples Retreat packages",
        "Bridal packages",
        "Multiple treatments included",
        "Premium experience",
      ],
      popular: false,
    },
  ];

  const occasions = [
    { icon: Heart, title: "Birthdays", description: "Make their special day unforgettable" },
    { icon: Calendar, title: "Anniversaries", description: "Celebrate love and milestones" },
    { icon: Sparkles, title: "Holidays", description: "Christmas, Valentine&apos;s Day, Mother&apos;s Day" },
    { icon: Gift, title: "Just Because", description: "Show someone you care" },
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
              Gift Vouchers
            </h1>
            <p className="text-xl text-muted-foreground">
              Give the gift of relaxation and rejuvenation. Perfect for any special occasion.
            </p>
          </div>
        </div>
      </section>

      {/* Voucher Options */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-heading font-bold text-center mb-12">
              Choose Your Voucher Type
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {voucherOptions.map((option, idx) => (
                <Card
                  key={idx}
                  className={`luxury-card border-luxury flex flex-col ${option.popular ? "ring-2 ring-primary" : ""}`}
                >
                  <CardContent className="p-8 flex flex-col flex-grow">
                    {option.popular && (
                      <Badge className="mb-4 bg-primary text-primary-foreground w-fit">
                        Most Popular
                      </Badge>
                    )}
                    <h3 className="text-2xl font-heading font-bold mb-3">{option.name}</h3>
                    <p className="text-muted-foreground mb-4 flex-grow">{option.description}</p>
                    <div className="text-3xl font-bold text-primary mb-6">{option.price}</div>
                    <ul className="space-y-3 mb-6">
                      {option.features.map((feature, featureIdx) => (
                        <li key={featureIdx} className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button variant="luxury" className="w-full mt-auto" asChild>
                      <a href="https://wa.me/27684984179?text=Hi! I'd like to purchase a gift voucher." target="_blank" rel="noopener noreferrer">
                        Purchase Voucher
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Perfect For Section */}
      <section className="py-20 bg-gradient-soft">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-heading font-bold text-center mb-12">
              Perfect For Every Occasion
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {occasions.map((occasion, idx) => {
                const Icon = occasion.icon;
                return (
                  <Card key={idx} className="luxury-card border-luxury text-center">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-semibold text-lg mb-2">{occasion.title}</h3>
                      <p className="text-sm text-muted-foreground">{occasion.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-heading font-bold text-center mb-12">
              How It Works
            </h2>
            <div className="space-y-8">
              <Card className="luxury-card border-luxury">
                <CardContent className="p-8">
                  <div className="flex gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-2xl font-bold text-primary">1</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-heading font-bold mb-2">Contact Us</h3>
                      <p className="text-muted-foreground">
                        Reach out via WhatsApp, phone, or our contact form to purchase your voucher. Let us know the type and value you&apos;d like.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="luxury-card border-luxury">
                <CardContent className="p-8">
                  <div className="flex gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-2xl font-bold text-primary">2</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-heading font-bold mb-2">Receive Your Voucher</h3>
                      <p className="text-muted-foreground">
                        We&apos;ll send you a beautiful digital voucher via email, or we can arrange for physical delivery. Includes personalized message if desired.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="luxury-card border-luxury">
                <CardContent className="p-8">
                  <div className="flex gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-2xl font-bold text-primary">3</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-heading font-bold mb-2">Redeem & Enjoy</h3>
                      <p className="text-muted-foreground">
                        The recipient books their appointment using the voucher code. They can choose their preferred treatment, date, and time. Valid for 12 months from purchase.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Terms & Info */}
      <section className="py-20 bg-gradient-soft">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="luxury-card border-luxury">
              <CardContent className="p-8">
                <h2 className="text-3xl font-heading font-bold mb-6">Voucher Terms & Information</h2>
                <div className="space-y-4 text-muted-foreground">
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <p>Vouchers are valid for 12 months from the date of purchase</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <p>Vouchers cannot be exchanged for cash</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <p>Monetary vouchers can be used for any treatment or package</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <p>Vouchers can be combined with additional payment if treatment exceeds voucher value</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <p>Lost or stolen vouchers cannot be replaced (please keep your voucher code safe)</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <p>Standard booking terms and cancellation policies apply</p>
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
                <Gift className="h-16 w-16 text-primary mx-auto mb-6" />
                <h2 className="text-3xl font-heading font-bold mb-4">
                  Ready to Give the Gift of Relaxation?
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Contact us today to purchase a gift voucher. We&apos;ll help you choose the perfect gift for your loved one.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="luxury" size="lg" asChild>
                    <a href="https://wa.me/27684984179?text=Hi! I'd like to purchase a gift voucher." target="_blank" rel="noopener noreferrer">
                      Purchase Gift Voucher
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

