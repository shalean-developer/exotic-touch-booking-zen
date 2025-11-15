"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppStrip from "@/components/WhatsAppStrip";
import { Card, CardContent } from "@/components/ui/card";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
    
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-soft">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 text-gradient-primary">
              Terms of Service
            </h1>
            <p className="text-xl text-muted-foreground">
              Last updated: {new Date().toLocaleDateString("en-ZA", { year: "numeric", month: "long", day: "numeric" })}
            </p>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="luxury-card border-luxury">
              <CardContent className="p-8 md:p-12">
                <div className="prose prose-slate max-w-none">
                  <section className="mb-8">
                    <h2 className="text-2xl font-heading font-bold mb-4">1. Acceptance of Terms</h2>
                    <p className="text-muted-foreground mb-4">
                      By accessing and using the services of Exotic Touch Mobile Spa (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;), 
                      you accept and agree to be bound by these Terms of Service. If you do not agree to these 
                      terms, please do not use our services.
                    </p>
                  </section>

                  <section className="mb-8">
                    <h2 className="text-2xl font-heading font-bold mb-4">2. Services</h2>
                    <p className="text-muted-foreground mb-4">
                      Exotic Touch Mobile Spa provides mobile spa and beauty treatment services delivered to 
                      your specified location within our service area. We offer various treatments including 
                      massages, facials, manicures, pedicures, waxing, and lash services.
                    </p>
                  </section>

                  <section className="mb-8">
                    <h2 className="text-2xl font-heading font-bold mb-4">3. Booking and Appointments</h2>
                    <h3 className="text-xl font-semibold mb-3">3.1 Booking Process</h3>
                    <p className="text-muted-foreground mb-4">
                      Appointments can be made via phone, WhatsApp, or our website. All bookings are subject 
                      to availability and confirmation.
                    </p>

                    <h3 className="text-xl font-semibold mb-3">3.2 Cancellation Policy</h3>
                    <p className="text-muted-foreground mb-4">
                      We require at least 24 hours&apos; notice for cancellations or rescheduling. Cancellations 
                      made less than 24 hours before the appointment may be subject to a cancellation fee 
                      of up to 50% of the service cost.
                    </p>

                    <h3 className="text-xl font-semibold mb-3">3.3 No-Shows</h3>
                    <p className="text-muted-foreground mb-4">
                      If you fail to appear for your scheduled appointment without prior notice, you may be 
                      charged the full service fee.
                    </p>
                  </section>

                  <section className="mb-8">
                    <h2 className="text-2xl font-heading font-bold mb-4">4. Payment Terms</h2>
                    <h3 className="text-xl font-semibold mb-3">4.1 Payment Methods</h3>
                    <p className="text-muted-foreground mb-4">
                      We accept cash, bank transfers, and other payment methods as specified at the time of booking.
                    </p>

                    <h3 className="text-xl font-semibold mb-3">4.2 Pricing</h3>
                    <p className="text-muted-foreground mb-4">
                      All prices are quoted in South African Rand (ZAR) and are subject to change without notice. 
                      Prices displayed on our website are indicative and may vary based on location, time, 
                      and specific requirements.
                    </p>

                    <h3 className="text-xl font-semibold mb-3">4.3 Deposits</h3>
                    <p className="text-muted-foreground mb-4">
                      We may require a deposit to secure your booking, which will be deducted from the final 
                      service cost.
                    </p>
                  </section>

                  <section className="mb-8">
                    <h2 className="text-2xl font-heading font-bold mb-4">5. Service Area</h2>
                    <p className="text-muted-foreground mb-4">
                      We provide services within Cape Town and surrounding areas. Additional travel charges 
                      may apply for locations outside our standard service area. Please confirm your location 
                      at the time of booking.
                    </p>
                  </section>

                  <section className="mb-8">
                    <h2 className="text-2xl font-heading font-bold mb-4">6. Client Responsibilities</h2>
                    <p className="text-muted-foreground mb-4">
                      Clients are responsible for:
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-2">
                      <li>Providing accurate contact and location information</li>
                      <li>Ensuring a safe and appropriate environment for treatment</li>
                      <li>Informing us of any medical conditions, allergies, or contraindications</li>
                      <li>Being present and available at the scheduled appointment time</li>
                      <li>Treating our staff with respect and courtesy</li>
                    </ul>
                  </section>

                  <section className="mb-8">
                    <h2 className="text-2xl font-heading font-bold mb-4">7. Health and Safety</h2>
                    <p className="text-muted-foreground mb-4">
                      You must inform us of any medical conditions, allergies, skin sensitivities, or other 
                      health concerns that may affect your treatment. We reserve the right to refuse service 
                      if we believe a treatment may be harmful to your health.
                    </p>
                  </section>

                  <section className="mb-8">
                    <h2 className="text-2xl font-heading font-bold mb-4">8. Gift Vouchers</h2>
                    <p className="text-muted-foreground mb-4">
                      Gift vouchers are valid for the period specified at purchase. Vouchers cannot be 
                      exchanged for cash and are non-refundable unless required by law.
                    </p>
                  </section>

                  <section className="mb-8">
                    <h2 className="text-2xl font-heading font-bold mb-4">9. Limitation of Liability</h2>
                    <p className="text-muted-foreground mb-4">
                      To the maximum extent permitted by law, Exotic Touch Mobile Spa shall not be liable 
                      for any indirect, incidental, special, or consequential damages arising from the use 
                      of our services. Our total liability shall not exceed the amount paid for the specific 
                      service in question.
                    </p>
                  </section>

                  <section className="mb-8">
                    <h2 className="text-2xl font-heading font-bold mb-4">10. Intellectual Property</h2>
                    <p className="text-muted-foreground mb-4">
                      All content on our website, including text, graphics, logos, and images, is the property 
                      of Exotic Touch Mobile Spa and is protected by copyright and other intellectual property laws.
                    </p>
                  </section>

                  <section className="mb-8">
                    <h2 className="text-2xl font-heading font-bold mb-4">11. Changes to Terms</h2>
                    <p className="text-muted-foreground mb-4">
                      We reserve the right to modify these Terms of Service at any time. Changes will be 
                      effective immediately upon posting on our website. Your continued use of our services 
                      constitutes acceptance of any modified terms.
                    </p>
                  </section>

                  <section className="mb-8">
                    <h2 className="text-2xl font-heading font-bold mb-4">12. Governing Law</h2>
                    <p className="text-muted-foreground mb-4">
                      These Terms of Service are governed by the laws of South Africa. Any disputes arising 
                      from these terms or our services shall be subject to the exclusive jurisdiction of 
                      the courts of South Africa.
                    </p>
                  </section>

                  <section className="mb-8">
                    <h2 className="text-2xl font-heading font-bold mb-4">13. Contact Information</h2>
                    <p className="text-muted-foreground mb-4">
                      If you have any questions about these Terms of Service, please contact us:
                    </p>
                    <div className="text-muted-foreground space-y-2">
                      <p><strong>Phone:</strong> +27 68 498 4179</p>
                      <p><strong>Email:</strong> info@exotictmspa.co.za</p>
                      <p><strong>Address:</strong> Cape Town, South Africa</p>
                    </div>
                  </section>
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

