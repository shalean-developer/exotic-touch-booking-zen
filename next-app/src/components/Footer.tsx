import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, MessageCircle, Clock, Mail } from "lucide-react";

const Footer = () => {
  const whatsappUrl = "https://wa.me/27684984179?text=Hi! I'd like to book a spa treatment.";
  const phoneNumber = "+27 68 498 4179";

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Treatments", href: "/treatments" },
    { name: "Packages", href: "/packages" },
    { name: "Specials", href: "/specials" },
    { name: "Events", href: "/events" },
    { name: "Contact", href: "/contact" },
  ];

  const services = [
    { name: "Massages", href: "/treatments#massages" },
    { name: "Facials", href: "/treatments#facials" },
    { name: "Manicures & Pedicures", href: "/treatments#nails" },
    { name: "Waxing", href: "/treatments#waxing" },
    { name: "Lashes", href: "/treatments#lashes" },
    { name: "Corporate Wellness", href: "/events" },
  ];

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & Contact */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <Link href="/" className="inline-block mb-4">
                <Image
                  src="/logo.png"
                  alt="Exotic Touch Mobile Spa"
                  width={180}
                  height={60}
                  className="h-12 w-auto"
                />
              </Link>
              <p className="text-background/80 leading-relaxed">
                Bringing luxury spa treatments directly to your location across Cape Town and surrounds. 
                Professional, convenient, and utterly relaxing.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-3 text-primary flex-shrink-0" />
                <span className="text-background/90">Cape Town & Surrounds</span>
              </div>
              
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-primary flex-shrink-0" />
                <a 
                  href={`tel:${phoneNumber}`}
                  className="text-background/90 hover:text-primary transition-colors"
                >
                  {phoneNumber}
                </a>
              </div>
              
              <div className="flex items-center">
                <MessageCircle className="h-5 w-5 mr-3 text-primary flex-shrink-0" />
                <a 
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-background/90 hover:text-primary transition-colors"
                >
                  WhatsApp Booking
                </a>
              </div>
              
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-3 text-primary flex-shrink-0" />
                <span className="text-background/90">Daily: 8AM - 8PM</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-heading font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-background/80 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-heading font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link 
                    href={service.href}
                    className="text-background/80 hover:text-primary transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-background/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-background/60 mb-4 md:mb-0">
            © 2025 Exotic Touch Mobile Spa. All rights reserved. | Website Design By{" "}
            <a 
              href="https://wa.me/27685886831" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              Chitsweb
            </a>.
          </div>
          
          <div className="flex space-x-6 text-sm">
            <Link href="/privacy" className="text-background/60 hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-background/60 hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;