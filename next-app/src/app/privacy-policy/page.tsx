"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppStrip from "@/components/WhatsAppStrip";
import { Card, CardContent } from "@/components/ui/card";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
    
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-soft">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 text-gradient-primary">
              Privacy Policy
            </h1>
            <p className="text-xl text-muted-foreground">
              Last updated: {new Date().toLocaleDateString("en-ZA", { year: "numeric", month: "long", day: "numeric" })}
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="luxury-card border-luxury">
              <CardContent className="p-8 md:p-12">
                <div className="prose prose-slate max-w-none">
                  <section className="mb-8">
                    <h2 className="text-2xl font-heading font-bold mb-4">1. Introduction</h2>
                    <p className="text-muted-foreground mb-4">
                      Exotic Touch Mobile Spa (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) is committed to protecting your privacy. 
                      This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
                      when you visit our website or use our services.
                    </p>
                  </section>

                  <section className="mb-8">
                    <h2 className="text-2xl font-heading font-bold mb-4">2. Information We Collect</h2>
                    <h3 className="text-xl font-semibold mb-3">2.1 Personal Information</h3>
                    <p className="text-muted-foreground mb-4">
                      We may collect personal information that you provide to us, including:
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-2">
                      <li>Name and contact information (email address, phone number)</li>
                      <li>Physical address for service delivery</li>
                      <li>Payment information (processed securely through third-party providers)</li>
                      <li>Booking preferences and treatment history</li>
                      <li>Any other information you choose to provide</li>
                    </ul>

                    <h3 className="text-xl font-semibold mb-3">2.2 Automatically Collected Information</h3>
                    <p className="text-muted-foreground mb-4">
                      When you visit our website, we may automatically collect certain information, including:
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-2">
                      <li>IP address and browser type</li>
                      <li>Device information</li>
                      <li>Pages visited and time spent on pages</li>
                      <li>Referring website addresses</li>
                    </ul>
                  </section>

                  <section className="mb-8">
                    <h2 className="text-2xl font-heading font-bold mb-4">3. How We Use Your Information</h2>
                    <p className="text-muted-foreground mb-4">
                      We use the information we collect to:
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-2">
                      <li>Process and manage your bookings</li>
                      <li>Communicate with you about your appointments</li>
                      <li>Provide customer support and respond to inquiries</li>
                      <li>Send you service-related updates and information</li>
                      <li>Improve our website and services</li>
                      <li>Comply with legal obligations</li>
                      <li>Send marketing communications (with your consent)</li>
                    </ul>
                  </section>

                  <section className="mb-8">
                    <h2 className="text-2xl font-heading font-bold mb-4">4. Information Sharing and Disclosure</h2>
                    <p className="text-muted-foreground mb-4">
                      We do not sell your personal information. We may share your information in the following circumstances:
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-2">
                      <li>With service providers who assist us in operating our business (e.g., payment processors, booking systems)</li>
                      <li>When required by law or to protect our rights</li>
                      <li>In connection with a business transfer or merger</li>
                      <li>With your explicit consent</li>
                    </ul>
                  </section>

                  <section className="mb-8">
                    <h2 className="text-2xl font-heading font-bold mb-4">5. Data Security</h2>
                    <p className="text-muted-foreground mb-4">
                      We implement appropriate technical and organizational measures to protect your personal information 
                      against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission 
                      over the internet is 100% secure, and we cannot guarantee absolute security.
                    </p>
                  </section>

                  <section className="mb-8">
                    <h2 className="text-2xl font-heading font-bold mb-4">6. Your Rights</h2>
                    <p className="text-muted-foreground mb-4">
                      Under applicable data protection laws, you have the right to:
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-2">
                      <li>Access your personal information</li>
                      <li>Correct inaccurate or incomplete information</li>
                      <li>Request deletion of your personal information</li>
                      <li>Object to processing of your personal information</li>
                      <li>Request restriction of processing</li>
                      <li>Data portability</li>
                      <li>Withdraw consent at any time</li>
                    </ul>
                  </section>

                  <section className="mb-8">
                    <h2 className="text-2xl font-heading font-bold mb-4">7. Cookies and Tracking Technologies</h2>
                    <p className="text-muted-foreground mb-4">
                      We use cookies and similar tracking technologies to track activity on our website and store 
                      certain information. You can instruct your browser to refuse all cookies or to indicate when 
                      a cookie is being sent.
                    </p>
                  </section>

                  <section className="mb-8">
                    <h2 className="text-2xl font-heading font-bold mb-4">8. Third-Party Links</h2>
                    <p className="text-muted-foreground mb-4">
                      Our website may contain links to third-party websites. We are not responsible for the privacy 
                      practices of these external sites. We encourage you to review their privacy policies.
                    </p>
                  </section>

                  <section className="mb-8">
                    <h2 className="text-2xl font-heading font-bold mb-4">9. Children&apos;s Privacy</h2>
                    <p className="text-muted-foreground mb-4">
                      Our services are not directed to individuals under the age of 18. We do not knowingly collect 
                      personal information from children.
                    </p>
                  </section>

                  <section className="mb-8">
                    <h2 className="text-2xl font-heading font-bold mb-4">10. Changes to This Privacy Policy</h2>
                    <p className="text-muted-foreground mb-4">
                      We may update this Privacy Policy from time to time. We will notify you of any changes by 
                      posting the new Privacy Policy on this page and updating the &ldquo;Last updated&rdquo; date.
                    </p>
                  </section>

                  <section className="mb-8">
                    <h2 className="text-2xl font-heading font-bold mb-4">11. Contact Us</h2>
                    <p className="text-muted-foreground mb-4">
                      If you have any questions about this Privacy Policy or wish to exercise your rights, please contact us:
                    </p>
                    <div className="text-muted-foreground space-y-2">
                      <p><strong>Email:</strong> info@exotictmspa.co.za</p>
                      <p><strong>Phone:</strong> +27 68 498 4179</p>
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

