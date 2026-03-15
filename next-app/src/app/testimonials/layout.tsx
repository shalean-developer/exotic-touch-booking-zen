import type { Metadata } from "next";
import PageStructuredData from "@/components/PageStructuredData";

export const metadata: Metadata = {
  title: "Testimonials & Reviews | Mobile Spa Reviews Cape Town | Exotic Touch",
  description: "Read real customer reviews and testimonials from satisfied clients who experienced our mobile spa services in Cape Town. See why people choose Exotic Touch for luxury spa treatments.",
  keywords: ["mobile spa reviews Cape Town", "spa testimonials", "customer reviews", "spa feedback", "mobile spa ratings", "spa customer stories"],
  alternates: {
    canonical: "https://exotictmspa.co.za/testimonials",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: "Testimonials & Reviews | Exotic Touch Mobile Spa",
    description: "Read real customer reviews and testimonials from satisfied clients.",
    url: "https://exotictmspa.co.za/testimonials",
    siteName: "Exotic Touch Mobile Spa",
    images: [
      {
        url: "/hero-spa.jpg",
        width: 1200,
        height: 630,
        alt: "Mobile spa testimonials and customer reviews",
      },
    ],
    locale: "en_ZA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Testimonials & Reviews | Exotic Touch",
    description: "Read real customer reviews and testimonials from satisfied clients.",
    images: ["/hero-spa.jpg"],
  },
};

export default function TestimonialsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <PageStructuredData
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Testimonials", url: "/testimonials" },
        ]}
        pageType="WebPage"
        pageName="Testimonials & Reviews | Exotic Touch Mobile Spa"
        pageDescription="Read real customer reviews and testimonials from satisfied clients who experienced our mobile spa services in Cape Town."
        pageUrl="/testimonials"
      />
      {children}
    </>
  );
}

