import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Book Your Mobile Spa Treatment",
  description: "Get in touch with Exotic Touch Mobile Spa. Book your treatment via WhatsApp, phone, or contact form. Serving Cape Town & surrounds. Call +27 68 498 4179.",
  keywords: ["contact mobile spa", "book spa treatment", "spa booking Cape Town", "WhatsApp booking", "spa contact"],
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Us | Exotic Touch Mobile Spa",
    description: "Get in touch to book your mobile spa treatment. We'd love to create your perfect spa experience.",
    url: "https://exotictmspa.co.za/contact",
    images: [
      {
        url: "/hero-spa.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Exotic Touch Mobile Spa",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Exotic Touch Mobile Spa",
    description: "Get in touch to book your mobile spa treatment.",
    images: ["/hero-spa.jpg"],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

