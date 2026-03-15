"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppStrip from "@/components/WhatsAppStrip";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, Award, Heart, Sparkles, Check } from "lucide-react";
import Link from "next/link";

export default function TeamPage() {
  const teamValues = [
    {
      icon: Award,
      title: "Certified Professionals",
      description: "All therapists are fully qualified and certified in their specialties",
    },
    {
      icon: Heart,
      title: "Passionate About Wellness",
      description: "Dedicated to providing exceptional care and relaxation",
    },
    {
      icon: Sparkles,
      title: "Continuous Training",
      description: "Regular training to stay updated with latest techniques and products",
    },
    {
      icon: Users,
      title: "Experienced Team",
      description: "Years of combined experience in spa and wellness treatments",
    },
  ];

  const specialties = [
    "Swedish & Deep Tissue Massage",
    "Hot Stone & Pregnancy Massage",
    "Facial Treatments & Skin Care",
    "Manicures & Pedicures",
    "Waxing Services",
    "Lash Extensions",
    "Corporate Wellness",
    "Group Event Services",
  ];

  const qualifications = [
    "Certified Massage Therapy",
    "Professional Beauty Therapy",
    "Nail Technology Certification",
    "Lash Extension Specialist Training",
    "First Aid Certified",
    "CPR Certified",
    "Ongoing Professional Development",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-soft">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Users className="h-16 w-16 text-primary mx-auto mb-6 animate-float" />
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 text-gradient-primary">
              Our Team
            </h1>
            <p className="text-xl text-muted-foreground">
              Meet our certified, professional therapists dedicated to your wellness
            </p>
          </div>
        </div>
      </section>

      {/* Team Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-heading font-bold text-center mb-12">
              Why Choose Our Team
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {teamValues.map((value, idx) => {
                const Icon = value.icon;
                return (
                  <Card key={idx} className="luxury-card border-luxury text-center">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                      <p className="text-sm text-muted-foreground">{value.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Specialties */}
      <section className="py-20 bg-gradient-soft">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="luxury-card border-luxury">
              <CardContent className="p-8">
                <h2 className="text-3xl font-heading font-bold mb-6 text-center">
                  Our Specialties
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {specialties.map((specialty, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0" />
                      <span>{specialty}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Qualifications */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="luxury-card border-luxury">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Award className="h-8 w-8 text-primary" />
                  <h2 className="text-3xl font-heading font-bold">Qualifications & Training</h2>
                </div>
                <p className="text-muted-foreground mb-6">
                  Our team members hold professional certifications and undergo continuous training to ensure the highest standards of service:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {qualifications.map((qual, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <Badge variant="secondary" className="w-fit">
                        <Check className="h-3 w-3 mr-1" />
                        Certified
                      </Badge>
                      <span className="text-sm">{qual}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Commitment */}
      <section className="py-20 bg-gradient-soft">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="luxury-card border-luxury">
              <CardContent className="p-8">
                <h2 className="text-3xl font-heading font-bold mb-6 text-center">
                  Our Commitment to You
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Every member of our team is committed to providing you with an exceptional spa experience. We believe in:
                  </p>
                  <ul className="space-y-3 ml-6">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span><strong>Professionalism:</strong> Maintaining the highest standards in every treatment</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span><strong>Hygiene:</strong> Strict hygiene protocols and sanitization practices</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span><strong>Personalization:</strong> Tailoring treatments to your individual needs and preferences</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span><strong>Comfort:</strong> Ensuring your complete comfort and relaxation throughout</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span><strong>Excellence:</strong> Continuous improvement and staying current with industry best practices</span>
                    </li>
                  </ul>
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
                <Users className="h-16 w-16 text-primary mx-auto mb-6" />
                <h2 className="text-3xl font-heading font-bold mb-4">
                  Experience Our Professional Service
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Book your appointment with our certified therapists and experience the difference professional care makes.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="luxury" size="lg" asChild>
                    <a href="https://wa.me/27684984179?text=Hi! I'd like to book a spa treatment." target="_blank" rel="noopener noreferrer">
                      Book Your Treatment
                    </a>
                  </Button>
                  <Button variant="elegant" size="lg" asChild>
                    <Link href="/treatments">View Treatments</Link>
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

