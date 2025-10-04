import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppStrip from "@/components/WhatsAppStrip";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Clock } from "lucide-react";

const Waxing = () => {
  const waxingServices = [
    {
      category: "Face",
      services: [
        { name: "Eyebrow Wax", price: 150, duration: 15 },
        { name: "Lip Wax", price: 150, duration: 10 },
        { name: "Chin Wax", price: 150, duration: 10 },
        { name: "Full Face Wax", price: 400, duration: 30 },
        { name: "Nose Wax", price: 100, duration: 10 },
        { name: "Ear Wax", price: 100, duration: 10 }
      ]
    },
    {
      category: "Body",
      services: [
        { name: "Underarm Wax", price: 200, duration: 15 },
        { name: "Half Arm Wax", price: 250, duration: 20 },
        { name: "Full Arm Wax", price: 400, duration: 30 },
        { name: "Half Leg Wax", price: 350, duration: 30 },
        { name: "Full Leg Wax", price: 550, duration: 45 }
      ]
    },
    {
      category: "Bikini Area",
      services: [
        { name: "Bikini Wax", price: 300, duration: 20 },
        { name: "Brazilian Wax", price: 450, duration: 30 },
        { name: "Hollywood Wax", price: 500, duration: 35 }
      ]
    },
    {
      category: "Tinting",
      services: [
        { name: "Eyelash Tint", price: 200, duration: 20 },
        { name: "Eyebrow Tint", price: 200, duration: 20 },
        { name: "Lash & Brow Tint Combo", price: 350, duration: 35 }
      ]
    }
  ];

  const packages = [
    {
      name: "Full Leg + Bikini",
      regularPrice: 850,
      packagePrice: 750,
      savings: 100
    },
    {
      name: "Full Arm + Underarm",
      regularPrice: 600,
      packagePrice: 550,
      savings: 50
    },
    {
      name: "Face Wax Bundle (Brow + Lip + Chin)",
      regularPrice: 450,
      packagePrice: 400,
      savings: 50
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-soft">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Link to="/treatments" className="text-sm text-primary hover:underline mb-4 inline-block">
              ← Back to All Treatments
            </Link>
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 text-gradient-primary">
              Waxing Services
            </h1>
            <p className="text-xl text-muted-foreground">
              Professional hair removal for smooth, silky skin
            </p>
          </div>
        </div>
      </section>

      {/* Services by Category */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-12">
            {waxingServices.map((category, idx) => (
              <div key={idx}>
                <h2 className="text-3xl font-heading font-bold mb-6">{category.category}</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {category.services.map((service, i) => (
                    <Card key={i} className="luxury-card border-luxury">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-3">
                          <h3 className="font-semibold text-lg">{service.name}</h3>
                          <span className="text-xl font-bold text-primary">R{service.price}</span>
                        </div>
                        <p className="text-sm text-muted-foreground flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {service.duration} mins
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Package Deals */}
          <div className="max-w-6xl mx-auto mt-16">
            <h2 className="text-3xl font-heading font-bold text-center mb-8">Package Deals</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {packages.map((pkg, idx) => (
                <Card key={idx} className="luxury-card border-luxury ring-2 ring-primary">
                  <CardContent className="p-6 text-center">
                    <h3 className="font-semibold text-lg mb-4">{pkg.name}</h3>
                    <div className="space-y-2 mb-6">
                      <p className="text-sm text-muted-foreground line-through">R{pkg.regularPrice}</p>
                      <p className="text-3xl font-bold text-primary">R{pkg.packagePrice}</p>
                      <p className="text-sm font-semibold text-green-600">Save R{pkg.savings}</p>
                    </div>
                    <Button variant="luxury" className="w-full" asChild>
                      <a href="https://wa.me/27684984179?text=Hi! I'd like to book waxing services." target="_blank" rel="noopener noreferrer">Book Package</a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Info Cards */}
          <div className="max-w-6xl mx-auto mt-16 grid md:grid-cols-2 gap-6">
            <Card className="luxury-card border-luxury">
              <CardContent className="p-8">
                <h3 className="text-xl font-heading font-bold mb-4">Before Your Waxing Appointment</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>✓ Hair should be at least 5mm long</li>
                  <li>✓ Exfoliate 24 hours before</li>
                  <li>✓ Avoid sun exposure day before</li>
                  <li>✓ Wear comfortable clothing</li>
                  <li>✓ Inform us of any skin conditions</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="luxury-card border-luxury">
              <CardContent className="p-8">
                <h3 className="text-xl font-heading font-bold mb-4">Aftercare Tips</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>✓ Avoid hot baths for 24 hours</li>
                  <li>✓ No sun exposure for 48 hours</li>
                  <li>✓ Moisturize daily</li>
                  <li>✓ Wear loose clothing initially</li>
                  <li>✓ Exfoliate after 48 hours</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mx-auto mt-12 text-center luxury-card p-12 rounded-3xl border-luxury">
            <h3 className="text-3xl font-heading font-bold mb-4">Ready to Get Smooth Skin?</h3>
            <p className="text-lg text-muted-foreground mb-8">
              Book your waxing appointment today and enjoy professional service in the comfort of your home
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="luxury" size="lg" asChild>
                <a href="https://wa.me/27684984179?text=Hi! I'd like to book waxing services." target="_blank" rel="noopener noreferrer">Book Now</a>
              </Button>
              <Button variant="elegant" size="lg" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <WhatsAppStrip />
      <Footer />
    </div>
  );
};

export default Waxing;
