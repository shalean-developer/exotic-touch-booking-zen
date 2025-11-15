"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";
import { Star, MapPin, Clock, MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-spa.jpg";

const HeroSection = () => {
  const whatsappUrl = "https://wa.me/27684984179?text=Hi! I'd like to book a spa treatment.";

  return (
    <section className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image 
          src={heroImage} 
          alt="Luxury mobile spa treatment at home in Cape Town - professional massage, facial, and beauty services" 
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/60 to-background/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center max-w-4xl">
        {/* Badge */}
        <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm font-medium animate-fade-in">
          <MapPin className="h-4 w-4 mr-2" />
          Cape Town & Surrounds
        </Badge>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 leading-tight animate-slide-up">
          Relax <span className="text-gradient-primary">Anywhere</span>
          <br />
          with Our Mobile Spa
        </h1>

        {/* Subheading */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in">
          Professional luxury treatments at your home, office, or event. Experience ultimate relaxation without leaving your space.
        </p>

        {/* Trust Indicators */}
        <div className="flex items-center justify-center space-x-6 mb-10 text-sm text-muted-foreground animate-fade-in">
          <div className="flex items-center">
            <div className="flex text-yellow-400 mr-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <span>5.0 Rating</span>
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-2" />
            <span>Same Day Booking</span>
          </div>
          <div className="flex items-center">
            <span className="text-primary font-medium">500+ Happy Clients</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-12 animate-scale-in">
          <Button variant="luxury" size="xl" asChild>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-5 w-5" />
              Book Your Treatment
            </a>
          </Button>
          <Button variant="elegant" size="xl" asChild>
            <Link href="/treatments">
              View All Treatments
            </Link>
          </Button>
        </div>

        {/* Special Offer Banner */}
        <div className="luxury-card p-6 rounded-2xl border-luxury animate-fade-in inline-block">
          <p className="text-lg font-medium text-primary mb-2">✨ Current Special ✨</p>
          <p className="text-2xl font-heading font-bold mb-1">Swedish Massage + Back Scrub</p>
          <p className="text-3xl font-bold text-primary">Only R450</p>
          <p className="text-sm text-muted-foreground">(60 minutes • Save R200)</p>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full float-animation opacity-60" />
      <div className="absolute bottom-32 right-10 w-16 h-16 bg-secondary/20 rounded-full float-animation opacity-40" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-20 w-12 h-12 bg-accent/15 rounded-full float-animation opacity-50" style={{ animationDelay: '4s' }} />
    </section>
  );
};

export default HeroSection;