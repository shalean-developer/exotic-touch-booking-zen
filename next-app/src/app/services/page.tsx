"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppStrip from "@/components/WhatsAppStrip";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { Sparkles, Award, Clock, MapPin } from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      name: "Massage Therapy",
      description: "Relieve stress and tension with our professional massage treatments",
      link: "/treatments/massages",
      features: ["Swedish Massage", "Deep Tissue", "Hot Stone", "Pregnancy Massage"]
    },
    {
      name: "Facial Treatments",
      description: "Rejuvenate and refresh your skin with luxurious facial therapies",
      link: "/treatments/facials",
      features: ["Superficial Facials", "Deep Cleanse", "Anti-Aging", "Hydrating"]
    },
    {
      name: "Manicures & Pedicures",
      description: "Pamper your hands and feet with expert nail care services",
      link: "/treatments/manicures-pedicures",
      features: ["Gel Overlay", "Deluxe Mani/Pedi", "Nail Art", "Paraffin Treatment"]
    },
    {
      name: "Waxing Services",
      description: "Professional hair removal for smooth, silky skin",
      link: "/treatments/waxing",
      features: ["Bikini Wax", "Brazilian", "Hollywood", "Full/Half Leg"]
    },
    {
      name: "Lash Extensions",
      description: "Enhance your natural beauty with stunning lash extensions",
      link: "/treatments/lashes",
      features: ["Classic Lashes", "Hybrid", "Volume", "Mega Volume"]
    },
    {
      name: "Spa Packages",
      description: "Complete spa experiences combining multiple treatments",
      link: "/packages",
      features: ["Couples Packages", "Bridal Packages", "Wellness Packages"]
    }
  ];

  const benefits = [
    {
      icon: MapPin,
      title: "Mobile Convenience",
      description: "We come to you - home, office, or event venue"
    },
    {
      icon: Clock,
      title: "Flexible Scheduling",
      description: "Book appointments that fit your busy schedule"
    },
    {
      icon: Award,
      title: "Expert Therapists",
      description: "Fully qualified professionals with years of experience"
    },
    {
      icon: Sparkles,
      title: "Premium Products",
      description: "Only the finest quality spa products and equipment"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
    
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-soft">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 text-gradient-primary">
              Our Services
            </h1>
            <p className="text-xl text-muted-foreground">
              Comprehensive mobile spa services delivered to your location in Cape Town
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, idx) => (
              <Card key={idx} className="luxury-card border-luxury flex flex-col hover:shadow-luxury transition-luxury hover:-translate-y-1">
                <CardContent className="p-6 flex flex-col flex-grow">
                  <h2 className="text-2xl font-heading font-bold mb-3">{service.name}</h2>
                  <p className="text-muted-foreground mb-4 flex-grow">{service.description}</p>
                  <div className="mb-4">
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIdx) => (
                        <li key={featureIdx} className="text-sm text-muted-foreground flex items-center gap-2">
                          <Sparkles className="h-4 w-4 text-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button variant="elegant" className="w-full mt-auto" asChild>
                    <Link href={service.link}>Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-20 bg-gradient-soft">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-heading font-bold text-center mb-12">Why Choose Our Services?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, idx) => (
                <Card key={idx} className="luxury-card border-luxury text-center">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <benefit.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="font-semibold text-lg mb-2">{benefit.title}</h4>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="luxury-card border-luxury">
              <CardContent className="p-8 md:p-12">
                <h2 className="text-3xl font-heading font-bold mb-6 text-center">Service Areas</h2>
                <p className="text-muted-foreground mb-6 text-center">
                  We proudly serve Cape Town and surrounding areas, including:
                </p>
                <div className="grid md:grid-cols-3 gap-4 text-center">
                  {["Camps Bay", "Clifton", "Sea Point", "Green Point", "Constantia", "Bishopscourt", 
                    "Claremont", "Newlands", "Rondebosch", "Tokai", "Hout Bay", "Milnerton", 
                    "Durbanville", "Paarl", "Stellenbosch", "Somerset West"].map((area, idx) => (
                    <div key={idx} className="p-3 bg-primary/5 rounded-lg">
                      <span className="text-sm font-medium">{area}</span>
                    </div>
                  ))}
                </div>
                <p className="text-muted-foreground mt-6 text-center text-sm">
                  Don&apos;t see your area? <a href="/contact" className="text-primary hover:underline">Contact us</a> to inquire about service availability.
                </p>
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
                <h2 className="text-3xl font-heading font-bold mb-4">Ready to Book?</h2>
                <p className="text-muted-foreground mb-8">
                  Experience the luxury of professional spa treatments in the comfort of your own space.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="luxury" size="lg" asChild>
                    <a href="https://wa.me/27684984179?text=Hi! I'd like to book a spa treatment." target="_blank" rel="noopener noreferrer">
                      Book via WhatsApp
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

