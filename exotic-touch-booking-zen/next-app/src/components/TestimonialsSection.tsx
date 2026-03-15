import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah M.",
      location: "Camps Bay",
      rating: 5,
      text: "The Swedish massage was absolutely divine! The therapist was professional and the whole setup was so relaxing. I felt like I was at a 5-star spa in my own home.",
      service: "Swedish Massage"
    },
    {
      name: "Michelle T.",
      location: "Constantia",
      rating: 5,
      text: "Booked the bridal package for my hen party. All 6 of us were pampered beautifully. The team was amazing and made our special day even more memorable.",
      service: "Bridal Package"
    },
    {
      name: "David K.",
      location: "Sea Point",
      rating: 5,
      text: "Corporate wellness session was exactly what our team needed. Professional service, everyone loved it. Will definitely book again for our next team building.",
      service: "Corporate Wellness"
    }
  ];

  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real experiences from our satisfied customers across Cape Town
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="luxury-card border-luxury animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
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
                  <div className="font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.location}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mt-16 text-center">
          <div>
            <div className="text-4xl font-bold text-primary mb-2">500+</div>
            <div className="text-muted-foreground">Happy Clients</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">5.0</div>
            <div className="text-muted-foreground">Average Rating</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">3+</div>
            <div className="text-muted-foreground">Years Experience</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">50+</div>
            <div className="text-muted-foreground">Treatment Options</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;