"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppStrip from "@/components/WhatsAppStrip";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Users, Briefcase, Heart, PartyPopper } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function EventsPage() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventDate: "",
    location: "",
    groupSize: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Enquiry Submitted!",
      description: "We'll contact you within 24 hours to discuss your event."
    });
    setFormData({ name: "", email: "", phone: "", eventDate: "", location: "", groupSize: "", message: "" });
  };

  const eventTypes = [
    {
      icon: Briefcase,
      title: "Corporate Wellness",
      description: "Boost productivity and morale with on-site chair massages and mini treatments",
      features: ["Team building activities", "Stress relief sessions", "On-site setup", "Flexible scheduling"]
    },
    {
      icon: Heart,
      title: "Bridal Parties",
      description: "Make the bride's special day even more memorable with luxury spa treatments",
      features: ["Bridal shower packages", "Hen party specials", "Pre-wedding pampering", "Group discounts"]
    },
    {
      icon: PartyPopper,
      title: "Birthday Celebrations",
      description: "Turn any birthday into a luxurious spa celebration",
      features: ["Customizable packages", "Age-appropriate treatments", "Party setup assistance", "Special birthday treats"]
    },
    {
      icon: Users,
      title: "Group Events",
      description: "Perfect for any gathering - baby showers, reunions, or just because",
      features: ["Flexible group sizes", "Mixed treatment options", "Mobile convenience", "Professional service"]
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
              Events & Groups
            </h1>
            <p className="text-xl text-muted-foreground">
              Transform your special occasion into an unforgettable spa experience
            </p>
          </div>
        </div>
      </section>

      {/* Event Types */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-20">
            {eventTypes.map((event, idx) => (
              <Card key={idx} className="luxury-card border-luxury">
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                    <event.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold mb-3">{event.title}</h3>
                  <p className="text-muted-foreground mb-6">{event.description}</p>
                  <ul className="space-y-2">
                    {event.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Enquiry Form */}
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-heading font-bold mb-4">Request a Quote</h2>
              <p className="text-lg text-muted-foreground">
                Tell us about your event and we&apos;ll create a custom package for you
              </p>
            </div>

            <Card className="luxury-card border-luxury">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your full name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+27 68 498 4179"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="eventDate">Event Date</Label>
                      <Input
                        id="eventDate"
                        type="date"
                        value={formData.eventDate}
                        onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="location">Location *</Label>
                      <Input
                        id="location"
                        required
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        placeholder="Cape Town area"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="groupSize">Group Size</Label>
                      <Input
                        id="groupSize"
                        type="number"
                        min="1"
                        value={formData.groupSize}
                        onChange={(e) => setFormData({ ...formData, groupSize: e.target.value })}
                        placeholder="Number of people"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your event, preferred treatments, and any special requirements..."
                      rows={5}
                    />
                  </div>

                  <Button type="submit" variant="luxury" size="lg" className="w-full">
                    Submit Enquiry
                  </Button>
                </form>
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

