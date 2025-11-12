"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppStrip from "@/components/WhatsAppStrip";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { MapPin, Phone, MessageCircle, Clock } from "lucide-react";

export default function LocationsPage() {
  const locations = [
    {
      slug: "clifton",
      name: "Clifton",
      description: "Exclusive mobile spa services in Clifton. Luxury spa treatments delivered to your prestigious beachside location.",
      distance: "8 km from Cape Town",
      popular: true,
    },
    {
      slug: "green-point",
      name: "Green Point",
      description: "Luxury mobile spa services in Green Point. Professional treatments delivered to your vibrant Atlantic Seaboard location.",
      distance: "5 km from Cape Town",
      popular: true,
    },
    {
      slug: "sea-point",
      name: "Sea Point",
      description: "Mobile spa treatments in Sea Point. Convenient spa services delivered to your doorstep.",
      distance: "8 km from Cape Town",
      popular: false,
    },
    {
      slug: "camps-bay",
      name: "Camps Bay",
      description: "Luxury mobile spa services in Camps Bay. Beachside relaxation with professional spa treatments.",
      distance: "10 km from Cape Town",
      popular: true,
    },
    {
      slug: "rondebosch",
      name: "Rondebosch",
      description: "Luxury mobile spa services in Rondebosch. Professional treatments delivered to your Southern Suburbs location.",
      distance: "10 km from Cape Town",
      popular: false,
    },
    {
      slug: "newlands",
      name: "Newlands",
      description: "Luxury mobile spa services in Newlands. Professional treatments delivered to your location near the mountain.",
      distance: "8 km from Cape Town",
      popular: false,
    },
    {
      slug: "claremont",
      name: "Claremont",
      description: "Luxury mobile spa services in Claremont. Professional treatments delivered to your vibrant Southern Suburbs location.",
      distance: "12 km from Cape Town",
      popular: false,
    },
    {
      slug: "constantia",
      name: "Constantia",
      description: "Premium mobile spa treatments in Constantia. Enjoy our services in the comfort of your home or hotel.",
      distance: "15 km from Cape Town",
      popular: true,
    },
    {
      slug: "tokai",
      name: "Tokai",
      description: "Luxury mobile spa services in Tokai. Professional treatments delivered to your location near the forest.",
      distance: "18 km from Cape Town",
      popular: false,
    },
    {
      slug: "bishopscourt",
      name: "Bishopscourt",
      description: "Premium mobile spa services in Bishopscourt. Exclusive treatments delivered to your location.",
      distance: "12 km from Cape Town",
      popular: false,
    },
    {
      slug: "hout-bay",
      name: "Hout Bay",
      description: "Professional mobile spa services in Hout Bay. Relax and unwind with our luxury treatments.",
      distance: "20 km from Cape Town",
      popular: false,
    },
    {
      slug: "milnerton",
      name: "Milnerton",
      description: "Luxury mobile spa services in Milnerton. Professional treatments delivered to your beautiful coastal location.",
      distance: "15 km from Cape Town",
      popular: false,
    },
    {
      slug: "durbanville",
      name: "Durbanville",
      description: "Luxury mobile spa services in Durbanville. Professional treatments delivered to your Northern Suburbs location.",
      distance: "25 km from Cape Town",
      popular: false,
    },
    {
      slug: "stellenbosch",
      name: "Stellenbosch",
      description: "Luxury mobile spa services in the heart of the Winelands. Perfect for a relaxing spa day in Stellenbosch.",
      distance: "45 km from Cape Town",
      popular: true,
    },
    {
      slug: "paarl",
      name: "Paarl",
      description: "Professional mobile spa treatments delivered to your home or accommodation in Paarl. Experience luxury in the Winelands.",
      distance: "60 km from Cape Town",
      popular: true,
    },
    {
      slug: "somerset-west",
      name: "Somerset West",
      description: "Mobile spa services in Somerset West. We bring relaxation and luxury directly to your location.",
      distance: "50 km from Cape Town",
      popular: false,
    },
  ];

  const whatsappUrl = "https://wa.me/27684984179?text=Hi! I'd like to book a spa treatment.";
  const phoneNumber = "+27 68 498 4179";

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
    
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-soft">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <MapPin className="h-16 w-16 text-primary mx-auto mb-6 animate-float" />
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 text-gradient-primary">
              Our Service Areas
            </h1>
            <p className="text-xl text-muted-foreground">
              We bring luxury mobile spa treatments to locations across Cape Town and surrounds
            </p>
          </div>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {locations.map((location) => (
              <Card key={location.slug} className={`luxury-card border-luxury overflow-hidden group cursor-pointer transition-luxury hover:-translate-y-2 hover:shadow-luxury h-full ${location.popular ? 'ring-2 ring-primary' : ''}`}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-heading font-bold mb-2">{location.name}</h3>
                      {location.popular && (
                        <span className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full">
                          Popular Area
                        </span>
                      )}
                    </div>
                    <MapPin className="h-6 w-6 text-primary flex-shrink-0" />
                  </div>
                  <p className="text-muted-foreground mb-4">{location.description}</p>
                  <p className="text-sm text-muted-foreground mb-6 flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    {location.distance}
                  </p>
                  <div className="flex gap-3">
                    <Button variant="elegant" className="flex-1" asChild>
                      <Link href={`/locations/${location.slug}`}>
                        View Details
                      </Link>
                    </Button>
                    <Button variant="luxury" className="flex-1" asChild>
                      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                        Book Now
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-soft">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center luxury-card p-12 rounded-3xl border-luxury">
            <h2 className="text-3xl font-heading font-bold mb-4">
              Don't See Your Area?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We serve many areas across Cape Town and the Western Cape. Contact us to check if we service your location.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="luxury" size="lg" asChild>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-5 w-5 mr-2" />
                  WhatsApp Us
                </a>
              </Button>
              <Button variant="elegant" size="lg" asChild>
                <a href={`tel:${phoneNumber}`}>
                  <Phone className="h-5 w-5 mr-2" />
                  Call Us
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <WhatsAppStrip />
      <Footer />
    </div>
  );
}

