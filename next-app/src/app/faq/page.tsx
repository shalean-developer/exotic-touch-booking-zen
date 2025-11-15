"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppStrip from "@/components/WhatsAppStrip";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function FAQPage() {
  const faqCategories = [
    {
      category: "Booking & Scheduling",
      questions: [
        {
          question: "How far in advance should I book?",
          answer: "We recommend booking at least 24-48 hours in advance to secure your preferred date and time. However, we do offer same-day bookings subject to availability. For special events, group bookings, or weekends, we suggest booking 1-2 weeks in advance.",
        },
        {
          question: "What areas do you serve?",
          answer: "We serve Cape Town and surrounding areas including Camps Bay, Clifton, Sea Point, Green Point, Constantia, Bishopscourt, Claremont, Newlands, Rondebosch, Tokai, Hout Bay, Milnerton, Durbanville, Paarl, Stellenbosch, and Somerset West. Don&apos;t see your area? Contact us to check availability.",
        },
        {
          question: "Can I book online?",
          answer: "Currently, we accept bookings via WhatsApp, phone call, or our contact form. This allows us to provide personalized service and ensure we can accommodate your specific needs. Simply reach out through any of these channels and we&apos;ll confirm your appointment.",
        },
        {
          question: "What are your operating hours?",
          answer: "We offer flexible scheduling including weekdays, evenings, and weekends to fit your busy schedule. Our standard hours are 9 AM to 8 PM, but we can accommodate special requests. Contact us to discuss your preferred time.",
        },
      ],
    },
    {
      category: "Preparation & Setup",
      questions: [
        {
          question: "What do I need to prepare for my appointment?",
          answer: "Very little! We bring everything needed for your spa experience. Just ensure you have a clean, quiet space with enough room for our equipment (approximately 2m x 2m). For massages, we&apos;ll need access to a bed or massage table. For facials and nail treatments, a table and chairs work perfectly. We&apos;ll set up everything else.",
        },
        {
          question: "What should I wear?",
          answer: "Wear comfortable clothing that&apos;s easy to remove. For massages, you&apos;ll be covered with towels and can undress to your comfort level. For facials and nail treatments, comfortable casual wear is fine. We provide towels and robes as needed.",
        },
        {
          question: "Do you bring your own equipment?",
          answer: "Yes! We bring all professional equipment including massage tables, towels, linens, products, and tools. You don&apos;t need to provide anything except a clean space. Our therapists arrive fully equipped for a complete spa experience.",
        },
        {
          question: "How much space do you need?",
          answer: "We need approximately 2 meters by 2 meters of clear floor space. This is enough for our massage table or treatment setup. We can work in bedrooms, living rooms, or even outdoor covered areas. If you&apos;re unsure about space, we&apos;re happy to discuss your setup during booking.",
        },
      ],
    },
    {
      category: "Services & Treatments",
      questions: [
        {
          question: "What treatments do you offer?",
          answer: "We offer a full range of mobile spa services including Swedish, Deep Tissue, Hot Stone, and Pregnancy massages; Superficial, Deep Cleanse, and Anti-Aging facials; Manicures, Pedicures, and Nail Art; Waxing services (Bikini, Brazilian, Hollywood, Full/Half Leg); and Lash Extensions (Classic, Hybrid, Volume, Mega Volume).",
        },
        {
          question: "How long do treatments take?",
          answer: "Treatment duration varies: Massages range from 60-90 minutes, Facials take 60-75 minutes, Manicures/Pedicures are 30-120 minutes depending on the service, Waxing services are 10-45 minutes, and Lash Extensions take 120-210 minutes. We&apos;ll confirm exact timing when you book.",
        },
        {
          question: "Can I combine multiple treatments?",
          answer: "Absolutely! We offer spa packages that combine multiple treatments for a complete spa day experience. Popular combinations include massage + facial, or manicure + pedicure + facial. We can also create custom packages tailored to your preferences.",
        },
        {
          question: "Do you use premium products?",
          answer: "Yes, we use only high-quality, professional-grade spa products. All our products are carefully selected for their effectiveness and suitability for different skin types. We can discuss product preferences or allergies during booking.",
        },
      ],
    },
    {
      category: "Pricing & Payment",
      questions: [
        {
          question: "What are your prices?",
          answer: "Our prices vary by treatment type and duration. Massages start from R650, Facials from R500, Manicures/Pedicures from R500, Waxing from R150, and Lash Extensions from R450. We offer package deals and special promotions. Contact us for detailed pricing or visit our pricing page.",
        },
        {
          question: "What payment methods do you accept?",
          answer: "We accept cash, EFT (electronic bank transfer), and card payments. Payment is typically made on the day of service, after your treatment. For group bookings or events, we can arrange payment terms in advance.",
        },
        {
          question: "Do you offer gift vouchers?",
          answer: "Yes! We offer gift vouchers that make perfect presents for birthdays, anniversaries, or any special occasion. Vouchers can be purchased for specific treatments or monetary amounts. They&apos;re valid for 12 months from purchase date.",
        },
        {
          question: "Are there any additional fees?",
          answer: "Our prices are all-inclusive for standard service areas. For locations outside our standard service area, there may be a small travel fee which we&apos;ll discuss during booking. All prices are transparent with no hidden costs.",
        },
      ],
    },
    {
      category: "Special Events & Groups",
      questions: [
        {
          question: "Do you offer group bookings?",
          answer: "Yes! We specialize in group events including bridal showers, hen parties, birthday celebrations, corporate wellness sessions, and pamper parties. We can accommodate multiple therapists to serve groups simultaneously. Group bookings often qualify for special discounts.",
        },
        {
          question: "Can you come to hotels or accommodations?",
          answer: "Absolutely! We frequently provide services to hotels, guesthouses, and vacation rentals. This is perfect for tourists or visitors to Cape Town who want to enjoy spa treatments without leaving their accommodation.",
        },
        {
          question: "Do you offer corporate wellness services?",
          answer: "Yes! We provide on-site corporate wellness services including chair massages, stress relief sessions, and team building spa experiences. We can set up at your office and provide services during work hours. Contact us for corporate package pricing.",
        },
        {
          question: "What&apos;s included in event packages?",
          answer: "Event packages are customizable but typically include multiple treatments, setup and cleanup, professional therapists, and sometimes refreshments. We can tailor packages for bridal parties, corporate events, or any special occasion. Contact us to discuss your event needs.",
        },
      ],
    },
    {
      category: "Cancellation & Policies",
      questions: [
        {
          question: "What is your cancellation policy?",
          answer: "We require at least 24 hours&apos; notice for cancellations or rescheduling. Cancellations made less than 24 hours before the appointment may be subject to a 50% cancellation fee. We understand emergencies happen and will work with you on a case-by-case basis.",
        },
        {
          question: "What if I need to reschedule?",
          answer: "No problem! Just contact us at least 24 hours in advance and we&apos;ll reschedule your appointment to a time that works for you. We&apos;re flexible and want to ensure you get your spa experience at a convenient time.",
        },
        {
          question: "What happens if I&apos;m running late?",
          answer: "Please contact us as soon as possible if you&apos;re running late. We&apos;ll do our best to accommodate you, though treatment duration may need to be adjusted to stay on schedule. If you&apos;re more than 30 minutes late without notice, we may need to reschedule.",
        },
        {
          question: "Do you have a satisfaction guarantee?",
          answer: "We strive for 100% customer satisfaction. If you&apos;re not completely happy with your treatment, please let us know immediately and we&apos;ll work to make it right. Your comfort and satisfaction are our top priorities.",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-soft">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <HelpCircle className="h-16 w-16 text-primary mx-auto mb-6 animate-float" />
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 text-gradient-primary">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-muted-foreground">
              Everything you need to know about our mobile spa services in Cape Town
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            {faqCategories.map((category, categoryIdx) => (
              <Card key={categoryIdx} className="luxury-card border-luxury">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-heading font-bold mb-6 text-primary">
                    {category.category}
                  </h2>
                  <Accordion type="single" collapsible className="w-full">
                    {category.questions.map((item, itemIdx) => (
                      <AccordionItem
                        key={itemIdx}
                        value={`item-${categoryIdx}-${itemIdx}`}
                        className="border-b border-primary/10"
                      >
                        <AccordionTrigger className="text-left font-semibold hover:text-primary">
                          {item.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                          {item.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions CTA */}
      <section className="py-20 bg-gradient-soft">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Card className="luxury-card border-luxury">
              <CardContent className="p-12">
                <MessageCircle className="h-16 w-16 text-primary mx-auto mb-6" />
                <h2 className="text-3xl font-heading font-bold mb-4">
                  Still Have Questions?
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  We&apos;re here to help! Get in touch with us and we&apos;ll answer any questions you have about our mobile spa services.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="luxury" size="lg" asChild>
                    <a href="https://wa.me/27684984179?text=Hi! I have a question about your spa services." target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="h-5 w-5 mr-2" />
                      WhatsApp Us
                    </a>
                  </Button>
                  <Button variant="elegant" size="lg" asChild>
                    <Link href="/contact">
                      <Phone className="h-5 w-5 mr-2" />
                      Contact Us
                    </Link>
                  </Button>
                </div>
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

