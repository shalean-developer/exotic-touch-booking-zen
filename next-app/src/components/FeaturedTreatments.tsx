"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";
import { Clock, Star, ArrowRight } from "lucide-react";
import massageImage from "@/assets/massage-treatment.jpg";
import facialImage from "@/assets/facial-treatment.jpg";
import nailsImage from "@/assets/nails-treatment.jpg";

const FeaturedTreatments = () => {
  const treatments = [
    {
      id: "massages",
      title: "Massages",
      description: "Swedish, Deep Tissue, Hot Stone, and Pregnancy massages",
      price: "from R650",
      duration: "60-90 mins",
      image: massageImage,
      popular: true,
      features: ["Certified therapists", "Premium oils", "Mobile setup"]
    },
    {
      id: "facials",
      title: "Facials",
      description: "Superficial, Deep Cleanse, and Anti-Aging treatments",
      price: "from R500",
      duration: "60-75 mins",
      image: facialImage,
      popular: false,
      features: ["Professional products", "Skin analysis", "Relaxing experience"]
    },
    {
      id: "nails",
      title: "Nails & Beauty",
      description: "Manicures, Pedicures, Waxing, and Lash treatments",
      price: "from R150",
      duration: "30-120 mins",
      image: nailsImage,
      popular: false,
      features: ["Gel options", "Nail art", "Hygiene protocols"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Featured Treatments
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our most popular spa treatments, designed to rejuvenate and relax
          </p>
        </div>

        {/* Treatments Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {treatments.map((treatment, index) => (
            <div 
              key={treatment.id}
              className="luxury-card p-0 rounded-2xl border-luxury overflow-hidden group animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <Image 
                  src={treatment.image} 
                  alt={treatment.title}
                  width={400}
                  height={192}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {treatment.popular && (
                  <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                    Most Popular
                  </Badge>
                )}
                <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm rounded-lg px-3 py-1">
                  <div className="flex items-center text-sm">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{treatment.duration}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-2xl font-heading font-semibold">
                    {treatment.title}
                  </h3>
                  <div className="text-right">
                    <div className="text-sm text-muted-foreground">Starting</div>
                    <div className="text-xl font-bold text-primary">{treatment.price}</div>
                  </div>
                </div>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {treatment.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {treatment.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm">
                      <Star className="h-3 w-3 text-primary mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="space-y-2">
                  <Button variant="luxury" size="sm" className="w-full" asChild>
                    <a href="https://wa.me/27684984179?text=Hi! I'd like to book a spa treatment." target="_blank" rel="noopener noreferrer">
                      Book Now
                    </a>
                  </Button>
                  <Button variant="elegant" size="sm" className="w-full" asChild>
                    <Link href={`/treatments#${treatment.id}`}>
                      View Details
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <Link href="/treatments">
              View All Treatments
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedTreatments;