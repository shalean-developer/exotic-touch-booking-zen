"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppStrip from "@/components/WhatsAppStrip";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Users, TrendingUp, Check, Clock, Sparkles } from "lucide-react";
import Link from "next/link";

export default function CorporateWellnessPage() {
  const services = [
    {
      name: "Chair Massages",
      description: "15-30 minute seated massages perfect for the office",
      duration: "15-30 mins",
      benefits: ["Stress relief", "Improved focus", "Reduced tension", "Quick break"],
      popular: true,
    },
    {
      name: "Mini Manicures",
      description: "Quick nail care services during work hours",
      duration: "20-30 mins",
      benefits: ["Professional appearance", "Self-care", "Team bonding", "Convenient"],
      popular: false,
    },
    {
      name: "Stress Relief Sessions",
      description: "Guided relaxation and wellness workshops",
      duration: "30-60 mins",
      benefits: ["Mental wellness", "Team building", "Education", "Relaxation techniques"],
      popular: false,
    },
    {
      name: "Hand Treatments",
      description: "Therapeutic hand massages and paraffin treatments",
      duration: "15-20 mins",
      benefits: ["Ergonomic relief", "Moisturizing", "Pain relief", "Quick service"],
      popular: false,
    },
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: "Increased Productivity",
      description: "Reduced stress leads to better focus and higher output",
    },
    {
      icon: Users,
      title: "Team Morale",
      description: "Show employees you value their wellbeing and happiness",
    },
    {
      icon: Sparkles,
      title: "Employee Retention",
      description: "Wellness programs improve job satisfaction and loyalty",
    },
    {
      icon: Briefcase,
      title: "Professional Image",
      description: "Demonstrate your company&apos;s commitment to employee wellness",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-soft">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Briefcase className="h-16 w-16 text-primary mx-auto mb-6 animate-float" />
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 text-gradient-primary">
              Corporate Wellness
            </h1>
            <p className="text-xl text-muted-foreground">
              Boost team morale and productivity with professional on-site spa services
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-heading font-bold text-center mb-12">
              Our Corporate Services
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, idx) => (
                <Card key={idx} className={`luxury-card border-luxury ${service.popular ? "ring-2 ring-primary" : ""}`}>
                  <CardContent className="p-8">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-heading font-bold mb-2">{service.name}</h3>
                        <p className="text-muted-foreground mb-3">{service.description}</p>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Clock className="h-4 w-4" />
                          <span>{service.duration}</span>
                        </div>
                      </div>
                      {service.popular && (
                        <Badge className="bg-primary text-primary-foreground">Popular</Badge>
                      )}
                    </div>
                    <div className="mt-6">
                      <h4 className="font-semibold mb-3">Benefits:</h4>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit, benefitIdx) => (
                          <li key={benefitIdx} className="flex items-center gap-2 text-sm">
                            <Check className="h-4 w-4 text-primary flex-shrink-0" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gradient-soft">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-heading font-bold text-center mb-12">
              Why Corporate Wellness?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, idx) => {
                const Icon = benefit.icon;
                return (
                  <Card key={idx} className="luxury-card border-luxury text-center">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                      <p className="text-sm text-muted-foreground">{benefit.description}</p>
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
            <div className="space-y-6">
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
                        Reach out to discuss your team size, preferred services, and scheduling needs. We&apos;ll create a custom package for your company.
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
                      <h3 className="text-xl font-heading font-bold mb-2">We Set Up</h3>
                      <p className="text-muted-foreground">
                        Our team arrives at your office with all equipment. We set up discreetly in a designated area - conference room, break room, or private office space.
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
                      <h3 className="text-xl font-heading font-bold mb-2">Team Enjoys</h3>
                      <p className="text-muted-foreground">
                        Employees book time slots or we provide walk-in service. Everyone enjoys their treatment while maintaining work schedules. We handle everything.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Info */}
      <section className="py-20 bg-gradient-soft">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="luxury-card border-luxury">
              <CardContent className="p-8">
                <h2 className="text-3xl font-heading font-bold mb-6">Pricing & Packages</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Corporate wellness packages are customized based on your team size, services selected, and frequency. We offer:
                  </p>
                  <ul className="space-y-2 ml-6">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Per-person pricing for one-time events</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Volume discounts for larger teams</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Recurring service contracts with special rates</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Flexible scheduling (lunch breaks, after hours, team building days)</span>
                    </li>
                  </ul>
                  <p className="pt-4">
                    Contact us for a custom quote tailored to your company&apos;s needs.
                  </p>
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
                <Briefcase className="h-16 w-16 text-primary mx-auto mb-6" />
                <h2 className="text-3xl font-heading font-bold mb-4">
                  Ready to Boost Your Team&apos;s Wellness?
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Contact us today to discuss your corporate wellness needs and get a custom quote.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="luxury" size="lg" asChild>
                    <a href="https://wa.me/27684984179?text=Hi! I'd like to discuss corporate wellness services for our company." target="_blank" rel="noopener noreferrer">
                      Request Quote
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

