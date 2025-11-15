"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppStrip from "@/components/WhatsAppStrip";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function TestimonialsPage() {
  const testimonials = [
    {
      name: "Sarah M.",
      location: "Camps Bay",
      rating: 5,
      text: "The Swedish massage was absolutely divine! The therapist was professional and the whole setup was so relaxing. I felt like I was at a 5-star spa in my own home.",
      service: "Swedish Massage",
      date: "December 2024",
    },
    {
      name: "Michelle T.",
      location: "Constantia",
      rating: 5,
      text: "Booked the bridal package for my hen party. All 6 of us were pampered beautifully. The team was amazing and made our special day even more memorable.",
      service: "Bridal Package",
      date: "November 2024",
    },
    {
      name: "David K.",
      location: "Sea Point",
      rating: 5,
      text: "Corporate wellness session was exactly what our team needed. Professional service, everyone loved it. Will definitely book again for our next team building.",
      service: "Corporate Wellness",
      date: "October 2024",
    },
    {
      name: "Jennifer L.",
      location: "Clifton",
      rating: 5,
      text: "First time trying mobile spa and I&apos;m hooked! The facial treatment was incredible - my skin has never looked better. So convenient having it at home.",
      service: "Deep Cleanse Facial",
      date: "January 2025",
    },
    {
      name: "Amanda R.",
      location: "Green Point",
      rating: 5,
      text: "The lash extensions are stunning! The therapist was so skilled and patient. They look completely natural and lasted perfectly. Highly recommend!",
      service: "Volume Lash Extensions",
      date: "December 2024",
    },
    {
      name: "Robert P.",
      location: "Constantia",
      rating: 5,
      text: "Booked a couples massage for our anniversary. What a wonderful experience! Professional, romantic, and so relaxing. Best anniversary gift we&apos;ve given ourselves.",
      service: "Couples Retreat",
      date: "November 2024",
    },
    {
      name: "Lisa W.",
      location: "Newlands",
      rating: 5,
      text: "The hot stone massage was incredible. The therapist brought everything and set up beautifully. I fell asleep it was so relaxing. Will definitely book again!",
      service: "Hot Stone Massage",
      date: "January 2025",
    },
    {
      name: "Emma S.",
      location: "Tokai",
      rating: 5,
      text: "Had a gel manicure and pedicure done. The nail art was beautiful and the therapist was so professional. My nails still look perfect weeks later!",
      service: "Gel Manicure & Pedicure",
      date: "December 2024",
    },
    {
      name: "Michael B.",
      location: "Milnerton",
      rating: 5,
      text: "Deep tissue massage was exactly what I needed after a long week. The therapist was knowledgeable and targeted all my problem areas. Felt amazing afterwards!",
      service: "Deep Tissue Massage",
      date: "October 2024",
    },
  ];

  const stats = [
    { number: "500+", label: "Happy Clients" },
    { number: "5.0", label: "Average Rating" },
    { number: "1000+", label: "Treatments Delivered" },
    { number: "98%", label: "Would Recommend" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-soft">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Quote className="h-16 w-16 text-primary mx-auto mb-6 animate-float" />
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 text-gradient-primary">
              Client Testimonials
            </h1>
            <p className="text-xl text-muted-foreground">
              Real experiences from our satisfied customers across Cape Town
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto text-center">
            {stats.map((stat, idx) => (
              <div key={idx}>
                <div className="text-4xl md:text-5xl font-heading font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-heading font-bold text-center mb-12">
              What Our Clients Say
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card
                  key={index}
                  className="luxury-card border-luxury animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-8">
                    {/* Quote Icon */}
                    <div className="mb-6">
                      <Quote className="h-8 w-8 text-primary/30" />
                    </div>

                    {/* Rating */}
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <blockquote className="text-foreground leading-relaxed mb-6 italic">
                      &ldquo;{testimonial.text}&rdquo;
                    </blockquote>

                    {/* Service Badge */}
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                        {testimonial.service}
                      </span>
                    </div>

                    {/* Client Info */}
                    <div className="border-t border-primary/10 pt-4">
                      <div className="font-semibold text-foreground">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.location} • {testimonial.date}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-soft">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Card className="luxury-card border-luxury">
              <CardContent className="p-12">
                <MessageCircle className="h-16 w-16 text-primary mx-auto mb-6" />
                <h2 className="text-3xl font-heading font-bold mb-4">
                  Join Our Happy Clients
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Experience the luxury and convenience of mobile spa treatments. Book your appointment today and see why our clients love us!
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

