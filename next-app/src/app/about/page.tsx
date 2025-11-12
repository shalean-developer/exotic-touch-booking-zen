"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppStrip from "@/components/WhatsAppStrip";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Sparkles, Award, Users, MapPin, Clock } from "lucide-react";

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: "Passion for Wellness",
      description: "We're dedicated to bringing relaxation and rejuvenation to your doorstep"
    },
    {
      icon: Sparkles,
      title: "Luxury Experience",
      description: "Premium products and professional service for an unforgettable spa day"
    },
    {
      icon: Award,
      title: "Expert Therapists",
      description: "Fully qualified professionals with years of experience in spa treatments"
    },
    {
      icon: Users,
      title: "Personalized Care",
      description: "Tailored treatments designed to meet your unique needs and preferences"
    }
  ];

  const stats = [
    { number: "500+", label: "Happy Clients" },
    { number: "1000+", label: "Treatments Delivered" },
    { number: "5+", label: "Years Experience" },
    { number: "15+", label: "Service Areas" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
    
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-soft">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 text-gradient-primary">
              About Exotic Touch
            </h1>
            <p className="text-xl text-muted-foreground">
              Bringing luxury spa experiences directly to your home in Cape Town
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="luxury-card border-luxury">
              <CardContent className="p-8 md:p-12">
                <h2 className="text-3xl font-heading font-bold mb-6">Our Story</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Exotic Touch Mobile Spa was founded with a simple mission: to make luxury spa treatments 
                    accessible and convenient for everyone in Cape Town. We recognized that busy schedules and 
                    the demands of modern life often prevent people from taking time for self-care.
                  </p>
                  <p>
                    Our solution? Bring the spa experience directly to you. Whether you're at home, in your 
                    office, or hosting a special event, our team of professional therapists arrives fully equipped 
                    to deliver world-class spa treatments in the comfort of your chosen location.
                  </p>
                  <p>
                    Since our inception, we've been committed to using only the finest products, maintaining 
                    the highest standards of hygiene and professionalism, and ensuring every client receives 
                    personalized attention and care.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gradient-soft">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-heading font-bold text-center mb-12">Our Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, idx) => (
                <Card key={idx} className="luxury-card border-luxury text-center">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <value.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              {stats.map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-4xl md:text-5xl font-heading font-bold text-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-soft">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-heading font-bold text-center mb-12">Why Choose Exotic Touch?</h2>
            <div className="space-y-6">
              <Card className="luxury-card border-luxury">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Wide Service Area</h3>
                      <p className="text-muted-foreground">
                        We serve Cape Town and surrounding areas, bringing our services to your doorstep 
                        wherever you are.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="luxury-card border-luxury">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Clock className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Flexible Scheduling</h3>
                      <p className="text-muted-foreground">
                        We offer flexible booking options including same-day appointments, evenings, 
                        and weekends to fit your schedule.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="luxury-card border-luxury">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Award className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Professional Excellence</h3>
                      <p className="text-muted-foreground">
                        All our therapists are fully qualified, insured, and committed to providing 
                        the highest standard of service.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Card className="luxury-card border-luxury bg-gradient-soft">
              <CardContent className="p-12">
                <h2 className="text-3xl font-heading font-bold mb-4">Ready to Experience the Difference?</h2>
                <p className="text-muted-foreground mb-8">
                  Book your first treatment today and discover why so many Cape Town residents choose 
                  Exotic Touch for their spa needs.
                </p>
                <Button variant="luxury" size="lg" asChild>
                  <a href="https://wa.me/27684984179?text=Hi! I'd like to book a spa treatment." target="_blank" rel="noopener noreferrer">
                    Book Your Treatment
                  </a>
                </Button>
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

