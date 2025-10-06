import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppStrip from "@/components/WhatsAppStrip";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import massageImg from "@/assets/massage-treatment.jpg";
import facialImg from "@/assets/facial-treatment.jpg";
import nailsImg from "@/assets/nails-treatment.jpg";

const Treatments = () => {
  const categories = [
    {
      slug: "massages",
      name: "Massages",
      description: "Relieve stress and tension with our professional massage therapies",
      image: massageImg,
      priceFrom: "R650",
      treatments: ["Swedish", "Deep Tissue", "Hot Stone", "Pregnancy"]
    },
    {
      slug: "facials",
      name: "Facials",
      description: "Rejuvenate your skin with luxurious facial treatments",
      image: facialImg,
      priceFrom: "R500",
      treatments: ["Superficial", "Deep Cleanse", "Anti-Aging"]
    },
    {
      slug: "manicures-pedicures",
      name: "Manicures & Pedicures",
      description: "Pamper your hands and feet with our expert nail care",
      image: nailsImg,
      priceFrom: "R500",
      treatments: ["Gel Overlay", "Deluxe Mani/Pedi", "Nail Art"]
    },
    {
      slug: "waxing",
      name: "Waxing",
      description: "Professional hair removal services for smooth, silky skin",
      image: facialImg,
      priceFrom: "R150",
      treatments: ["Bikini", "Brazilian", "Hollywood", "Full/Half Leg"]
    },
    {
      slug: "lashes",
      name: "Lashes",
      description: "Enhance your natural beauty with stunning lash extensions",
      image: nailsImg,
      priceFrom: "R450",
      treatments: ["Classic", "Hybrid", "Volume", "Mega Volume"]
    }
  ];

  return (
    <>
      <SEO
        title="All Spa Treatments & Services Cape Town"
        description="Browse our full range of mobile spa treatments in Cape Town. Massages, facials, nails, waxing & lashes from R150. Professional beauty services delivered to you."
        keywords="spa treatments Cape Town, mobile spa services, beauty treatments at home, spa menu Cape Town, professional spa services"
        canonicalUrl="/treatments"
      />
      <div className="min-h-screen bg-background">
        <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-soft">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 text-gradient-primary">
              Our Treatments
            </h1>
            <p className="text-xl text-muted-foreground">
              Discover our range of professional spa treatments, all delivered to your location
            </p>
          </div>
        </div>
      </section>

      {/* Treatment Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {categories.map((category) => (
              <Link key={category.slug} to={`/treatments/${category.slug}`}>
                <Card className="luxury-card border-luxury overflow-hidden group cursor-pointer transition-luxury hover:-translate-y-2 hover:shadow-luxury h-full">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-2xl font-heading font-bold">{category.name}</h3>
                      <span className="text-sm font-semibold text-primary">From {category.priceFrom}</span>
                    </div>
                    <p className="text-muted-foreground mb-4">{category.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {category.treatments.slice(0, 3).map((treatment, idx) => (
                        <span key={idx} className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full">
                          {treatment}
                        </span>
                      ))}
                      {category.treatments.length > 3 && (
                        <span className="text-xs px-3 py-1 bg-muted text-muted-foreground rounded-full">
                          +{category.treatments.length - 3} more
                        </span>
                      )}
                    </div>
                    <Button variant="elegant" className="w-full">
                      View Details
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-soft">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-heading font-bold mb-12">Why Choose Exotic Touch?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-4xl mb-4">🏡</div>
                <h3 className="text-xl font-semibold mb-2">Mobile Convenience</h3>
                <p className="text-muted-foreground">We bring the spa experience to your home, office, or event</p>
              </div>
              <div>
                <div className="text-4xl mb-4">👩‍⚕️</div>
                <h3 className="text-xl font-semibold mb-2">Expert Therapists</h3>
                <p className="text-muted-foreground">Fully qualified professionals with years of experience</p>
              </div>
              <div>
                <div className="text-4xl mb-4">✨</div>
                <h3 className="text-xl font-semibold mb-2">Premium Products</h3>
                <p className="text-muted-foreground">We use only the finest quality spa products and equipment</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WhatsAppStrip />
      <Footer />
    </div>
    </>
  );
};

export default Treatments;
