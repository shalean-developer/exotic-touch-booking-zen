import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppStrip from "@/components/WhatsAppStrip";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Clock, Check, Sparkles, AlertCircle } from "lucide-react";

const Lashes = () => {
  const lashServices = [
    {
      name: "Classic Lashes",
      description: "Natural-looking extensions with one extension per natural lash. Perfect for everyday elegance.",
      price: 450,
      duration: 120,
      includes: ["Individual lash application", "Natural volume", "Customized length", "2-3 week retention"],
      popular: true
    },
    {
      name: "Hybrid Lashes",
      description: "Combination of classic and volume techniques for a textured, fuller look with dimension.",
      price: 550,
      duration: 150,
      includes: ["Mixed technique application", "Enhanced volume", "Textured appearance", "3-4 week retention"],
      popular: false
    },
    {
      name: "Volume Lashes",
      description: "Dramatic look with multiple lightweight extensions per natural lash for maximum fullness.",
      price: 650,
      duration: 180,
      includes: ["Multiple extensions per lash", "Dramatic fullness", "Lightweight feel", "3-4 week retention"],
      popular: false
    },
    {
      name: "Mega Volume Lashes",
      description: "Ultimate glamour with ultra-fine extensions for the most dramatic, full look possible.",
      price: 750,
      duration: 210,
      includes: ["Ultra-fine extensions", "Maximum drama", "Fluffy, full look", "4-5 week retention"],
      popular: false
    },
    {
      name: "Lash Fill (2-3 weeks)",
      description: "Maintenance appointment to replace grown-out lashes and restore fullness.",
      price: 300,
      duration: 60,
      includes: ["Removal of outgrown lashes", "New extension application", "Shape restoration"],
      popular: false
    },
    {
      name: "Lash Removal",
      description: "Safe, professional removal of lash extensions without damage to natural lashes.",
      price: 150,
      duration: 30,
      includes: ["Gentle removal process", "Natural lash conditioning", "No damage guarantee"],
      popular: false
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
              Lash Extensions
            </h1>
            <p className="text-xl text-muted-foreground">
              Wake up with perfect lashes every day
            </p>
          </div>
        </div>
      </section>

      {/* Lash Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-8 max-w-5xl mx-auto">
            {lashServices.map((service, idx) => (
              <Card key={idx} className={`luxury-card border-luxury ${service.popular ? 'ring-2 ring-primary' : ''}`}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <CardTitle className="text-3xl font-heading">{service.name}</CardTitle>
                        {service.popular && (
                          <Badge className="bg-primary text-primary-foreground">Most Popular</Badge>
                        )}
                      </div>
                      <p className="text-muted-foreground">{service.description}</p>
                    </div>
                    <div className="text-right ml-6">
                      <p className="text-3xl font-bold text-primary">R{service.price}</p>
                      <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                        <Clock className="h-3 w-3" />
                        {service.duration} mins
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <Sparkles className="h-4 w-4" />
                      Includes:
                    </h4>
                    <div className="grid md:grid-cols-2 gap-2">
                      {service.includes.map((item, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-primary flex-shrink-0" />
                          <span className="text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button variant="luxury" size="lg" className="w-full" asChild>
                    <Link to="/booking">Book {service.name}</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Comparison Chart */}
          <div className="max-w-5xl mx-auto mt-16">
            <h2 className="text-3xl font-heading font-bold text-center mb-8">Choose Your Lash Style</h2>
            <Card className="luxury-card border-luxury">
              <CardContent className="p-8">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-3 px-4">Style</th>
                        <th className="text-center py-3 px-4">Volume</th>
                        <th className="text-center py-3 px-4">Drama Level</th>
                        <th className="text-center py-3 px-4">Best For</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-border">
                        <td className="py-3 px-4 font-semibold">Classic</td>
                        <td className="text-center py-3 px-4">●○○○</td>
                        <td className="text-center py-3 px-4">Natural</td>
                        <td className="text-center py-3 px-4">Everyday wear</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 px-4 font-semibold">Hybrid</td>
                        <td className="text-center py-3 px-4">●●○○</td>
                        <td className="text-center py-3 px-4">Medium</td>
                        <td className="text-center py-3 px-4">Balanced look</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 px-4 font-semibold">Volume</td>
                        <td className="text-center py-3 px-4">●●●○</td>
                        <td className="text-center py-3 px-4">Dramatic</td>
                        <td className="text-center py-3 px-4">Special occasions</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-semibold">Mega Volume</td>
                        <td className="text-center py-3 px-4">●●●●</td>
                        <td className="text-center py-3 px-4">Maximum</td>
                        <td className="text-center py-3 px-4">Ultimate glam</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Care Instructions */}
          <div className="max-w-5xl mx-auto mt-12 grid md:grid-cols-2 gap-6">
            <Card className="luxury-card border-luxury">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <Sparkles className="h-5 w-5" />
                  Aftercare Tips
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>✓ Keep lashes dry for 24 hours</li>
                  <li>✓ Avoid oil-based products near eyes</li>
                  <li>✓ Brush daily with lash wand</li>
                  <li>✓ Sleep on your back when possible</li>
                  <li>✓ Book fills every 2-3 weeks</li>
                  <li>✓ No mascara needed!</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="luxury-card border-luxury border-amber-500/50">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2 text-amber-600">
                  <AlertCircle className="h-5 w-5" />
                  Important Notes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Patch test recommended for first-time clients</li>
                  <li>• Not suitable during pregnancy</li>
                  <li>• Avoid if you have eye infections</li>
                  <li>• Remove contact lenses before application</li>
                  <li>• Arrive with clean, makeup-free lashes</li>
                  <li>• Allow 2-4 hours for full set</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <WhatsAppStrip />
      <Footer />
    </div>
  );
};

export default Lashes;
