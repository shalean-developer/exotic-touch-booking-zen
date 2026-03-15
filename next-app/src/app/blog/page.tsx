"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppStrip from "@/components/WhatsAppStrip";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight } from "lucide-react";

export default function BlogPage() {
  // Placeholder blog posts - in a real app, these would come from a CMS or database
  const blogPosts = [
    {
      id: 1,
      title: "5 Benefits of Regular Massage Therapy",
      excerpt: "Discover how regular massage therapy can improve your physical and mental well-being, reduce stress, and enhance your quality of life.",
      date: "2025-01-10",
      readTime: "5 min read",
      category: "Wellness"
    },
    {
      id: 2,
      title: "Preparing Your Home for a Mobile Spa Visit",
      excerpt: "Learn how to create the perfect spa environment in your home to maximize relaxation and ensure the best treatment experience.",
      date: "2025-01-05",
      readTime: "4 min read",
      category: "Tips"
    },
    {
      id: 3,
      title: "The Ultimate Guide to Facial Treatments",
      excerpt: "Everything you need to know about different types of facial treatments and which one is right for your skin type.",
      date: "2024-12-28",
      readTime: "7 min read",
      category: "Treatments"
    },
    {
      id: 4,
      title: "Self-Care Tips for Busy Professionals",
      excerpt: "Simple ways to incorporate self-care into your busy schedule, even when time is limited.",
      date: "2024-12-20",
      readTime: "6 min read",
      category: "Wellness"
    },
    {
      id: 5,
      title: "Why Choose Mobile Spa Services?",
      excerpt: "Explore the advantages of mobile spa services and why they're becoming the preferred choice for many Cape Town residents.",
      date: "2024-12-15",
      readTime: "5 min read",
      category: "Services"
    },
    {
      id: 6,
      title: "Gift Ideas: Spa Treatments for Loved Ones",
      excerpt: "Looking for the perfect gift? Discover why spa treatments make excellent presents for birthdays, holidays, and special occasions.",
      date: "2024-12-10",
      readTime: "4 min read",
      category: "Gifts"
    }
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-ZA", { year: "numeric", month: "long", day: "numeric" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
    
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-soft">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 text-gradient-primary">
              Our Blog
            </h1>
            <p className="text-xl text-muted-foreground">
              Tips, advice, and insights to help you on your wellness journey
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {blogPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No blog posts available at the moment. Check back soon!</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {blogPosts.map((post) => (
                <Card key={post.id} className="luxury-card border-luxury flex flex-col hover:shadow-luxury transition-luxury">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{formatDate(post.date)}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <div className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full inline-block mb-2">
                      {post.category}
                    </div>
                    <CardTitle className="text-2xl font-heading mb-2">{post.title}</CardTitle>
                    <CardDescription className="text-base">{post.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent className="mt-auto">
                    <Button variant="elegant" className="w-full group">
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-gradient-soft">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Card className="luxury-card border-luxury">
              <CardContent className="p-12">
                <h2 className="text-3xl font-heading font-bold mb-4">Stay Updated</h2>
                <p className="text-muted-foreground mb-8">
                  Subscribe to our newsletter for the latest spa tips, special offers, and wellness advice.
                </p>
                <Button variant="luxury" size="lg" asChild>
                  <a href="https://wa.me/27684984179?text=Hi! I'd like to subscribe to your newsletter." target="_blank" rel="noopener noreferrer">
                    Subscribe via WhatsApp
                  </a>
                </Button>
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

