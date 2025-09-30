import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppStrip from "@/components/WhatsAppStrip";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Clock, MessageCircle } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll respond within 24 hours."
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const whatsappUrl = "https://wa.me/27684984179?text=Hi! I'd like to enquire about your spa services.";
  const phoneNumber = "+27 68 498 4179";

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      content: "+27 68 498 4179",
      action: `tel:${phoneNumber}`
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      content: "Message us instantly",
      action: whatsappUrl
    },
    {
      icon: MapPin,
      title: "Service Area",
      content: "Cape Town & Surrounds",
      action: null
    },
    {
      icon: Clock,
      title: "Hours",
      content: "Mon-Sat: 9am-8pm, Sun: 10am-6pm",
      action: null
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
              Get in Touch
            </h1>
            <p className="text-xl text-muted-foreground">
              We'd love to hear from you. Let's create your perfect spa experience.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 -mt-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {contactInfo.map((info, idx) => (
              <Card key={idx} className="luxury-card border-luxury text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <info.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{info.title}</h3>
                  {info.action ? (
                    <a
                      href={info.action}
                      target={info.action.startsWith('http') ? '_blank' : undefined}
                      rel={info.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-sm text-primary hover:underline"
                    >
                      {info.content}
                    </a>
                  ) : (
                    <p className="text-sm text-muted-foreground">{info.content}</p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-heading font-bold mb-4">Send Us a Message</h2>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </div>

              <Card className="luxury-card border-luxury">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
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

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+27 68 498 4179"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us how we can help you..."
                        rows={5}
                      />
                    </div>

                    <Button type="submit" variant="luxury" size="lg" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Quick Actions & Info */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-heading font-bold mb-4">Quick Contact</h2>
                <p className="text-muted-foreground">
                  Need immediate assistance? Reach us directly through these channels.
                </p>
              </div>

              <div className="space-y-6">
                {/* WhatsApp CTA */}
                <Card className="luxury-card border-luxury bg-gradient-soft">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center">
                        <MessageCircle className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">Chat on WhatsApp</h3>
                        <p className="text-sm text-muted-foreground">Get instant replies</p>
                      </div>
                    </div>
                    <Button variant="whatsapp" size="lg" className="w-full" asChild>
                      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                        Open WhatsApp
                      </a>
                    </Button>
                  </CardContent>
                </Card>

                {/* Call CTA */}
                <Card className="luxury-card border-luxury">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <Phone className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">Call Us Now</h3>
                        <p className="text-sm text-muted-foreground">Speak with our team</p>
                      </div>
                    </div>
                    <Button variant="elegant" size="lg" className="w-full" asChild>
                      <a href={`tel:${phoneNumber}`}>
                        {phoneNumber}
                      </a>
                    </Button>
                  </CardContent>
                </Card>

                {/* FAQ Link */}
                <Card className="luxury-card border-luxury">
                  <CardContent className="p-8">
                    <h3 className="font-semibold text-lg mb-2">Frequently Asked Questions</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Find answers to common questions about our services, pricing, and booking process.
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li>• What areas do you service?</li>
                      <li>• How do I book a treatment?</li>
                      <li>• What is your cancellation policy?</li>
                      <li>• Do you offer gift vouchers?</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WhatsAppStrip />
      <Footer />
    </div>
  );
};

export default Contact;
