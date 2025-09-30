import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppStrip from "@/components/WhatsAppStrip";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Clock, Check, Sparkles } from "lucide-react";
import massageImg from "@/assets/massage-treatment.jpg";

const Massages = () => {
  const massages = [
    {
      name: "Swedish Massage",
      description: "Classic relaxation massage using long, flowing strokes to ease tension and promote deep relaxation. Perfect for stress relief and improved circulation.",
      basePrice: 650,
      durations: [
        { time: 60, price: 650 },
        { time: 90, price: 900 }
      ],
      includes: ["Premium aromatherapy oils", "Heated towels", "Soothing music", "Full body massage"],
      popular: true
    },
    {
      name: "Deep Tissue Massage",
      description: "Therapeutic massage targeting deeper layers of muscle tissue. Ideal for chronic aches, muscle tension, and sports injuries.",
      basePrice: 750,
      durations: [
        { time: 60, price: 750 },
        { time: 90, price: 1050 }
      ],
      includes: ["Targeted pressure techniques", "Muscle tension relief", "Sports recovery", "Hot/cold therapy"],
      popular: false
    },
    {
      name: "Hot Stone Massage",
      description: "Luxurious massage using heated volcanic stones to melt away tension. The warmth penetrates deep into muscles for ultimate relaxation.",
      basePrice: 700,
      durations: [
        { time: 75, price: 700 },
        { time: 90, price: 950 }
      ],
      includes: ["Heated volcanic stones", "Deep muscle relaxation", "Enhanced circulation", "Aromatherapy"],
      popular: false
    },
    {
      name: "Pregnancy Massage",
      description: "Specially designed for expecting mothers to relieve pregnancy-related discomfort. Safe and soothing for all trimesters (with doctor approval).",
      basePrice: 650,
      durations: [
        { time: 60, price: 650 },
        { time: 75, price: 800 }
      ],
      includes: ["Specialized positioning", "Gentle techniques", "Swelling reduction", "Back & hip relief"],
      popular: false
    }
  ];

  const addOns = [
    { name: "Relaxing Back Scrub", price: 100 },
    { name: "Foot Reflexology (30 min)", price: 200 },
    { name: "Scalp Massage (15 min)", price: 150 },
    { name: "Extended Time (+30 min)", price: 250 }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-soft" />
        <div className="absolute inset-0">
          <img src={massageImg} alt="Massage" className="w-full h-full object-cover opacity-10" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Link to="/treatments" className="text-sm text-primary hover:underline mb-4 inline-block">
              ← Back to All Treatments
            </Link>
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 text-gradient-primary">
              Massage Treatments
            </h1>
            <p className="text-xl text-muted-foreground">
              Professional therapeutic massages delivered to your doorstep
            </p>
          </div>
        </div>
      </section>

      {/* Massage Options */}
      <section className="py-20 -mt-16">
        <div className="container mx-auto px-4">
          <div className="space-y-8 max-w-5xl mx-auto">
            {massages.map((massage, idx) => (
              <Card key={idx} className={`luxury-card border-luxury ${massage.popular ? 'ring-2 ring-primary' : ''}`}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-3xl font-heading mb-2">{massage.name}</CardTitle>
                      {massage.popular && (
                        <Badge className="bg-primary text-primary-foreground mb-3">
                          Most Popular
                        </Badge>
                      )}
                      <p className="text-muted-foreground">{massage.description}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">From</p>
                      <p className="text-3xl font-bold text-primary">R{massage.basePrice}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Duration Options */}
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      Duration Options:
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {massage.durations.map((duration, i) => (
                        <div key={i} className="px-4 py-2 bg-muted rounded-lg">
                          <span className="font-semibold">{duration.time} mins</span>
                          <span className="text-muted-foreground mx-2">•</span>
                          <span className="text-primary font-semibold">R{duration.price}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Includes */}
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <Sparkles className="h-4 w-4" />
                      Includes:
                    </h4>
                    <div className="grid md:grid-cols-2 gap-2">
                      {massage.includes.map((item, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-primary flex-shrink-0" />
                          <span className="text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button variant="luxury" size="lg" className="w-full" asChild>
                    <Link to="/booking">Book This Massage</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Add-ons Section */}
          <div className="max-w-5xl mx-auto mt-12">
            <Card className="luxury-card border-luxury">
              <CardHeader>
                <CardTitle className="text-2xl font-heading">Enhance Your Experience</CardTitle>
                <p className="text-muted-foreground">Add these extras to any massage</p>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {addOns.map((addon, idx) => (
                    <div key={idx} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                      <span className="font-medium">{addon.name}</span>
                      <span className="text-primary font-semibold">+R{addon.price}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Special Offer */}
          <div className="max-w-5xl mx-auto mt-8 luxury-card p-8 rounded-2xl border-luxury bg-gradient-soft text-center">
            <Badge className="mb-4 bg-primary text-primary-foreground">Limited Time Offer</Badge>
            <h3 className="text-2xl font-heading font-bold mb-2">Massage Special</h3>
            <p className="text-lg mb-4">Swedish Massage (60 mins) + Back Scrub</p>
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="text-lg text-muted-foreground line-through">R650</span>
              <span className="text-4xl font-bold text-primary">R450</span>
              <Badge variant="secondary" className="text-green-600">Save R200</Badge>
            </div>
            <Button variant="luxury" size="lg" asChild>
              <Link to="/booking">Book Special Now</Link>
            </Button>
          </div>
        </div>
      </section>

      <WhatsAppStrip />
      <Footer />
    </div>
  );
};

export default Massages;
