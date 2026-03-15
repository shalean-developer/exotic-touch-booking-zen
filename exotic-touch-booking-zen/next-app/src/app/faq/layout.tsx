import type { Metadata } from "next";
import PageStructuredData from "@/components/PageStructuredData";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Mobile Spa FAQ | Exotic Touch",
  description: "Get answers to common questions about mobile spa services in Cape Town. Learn about booking, preparation, pricing, and what to expect from our professional spa treatments.",
  keywords: ["mobile spa FAQ", "spa questions", "mobile spa booking", "spa preparation", "what to expect mobile spa", "spa services Cape Town", "mobile spa information"],
  alternates: {
    canonical: "https://exotictmspa.co.za/faq",
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
    title: "Frequently Asked Questions | Exotic Touch Mobile Spa",
    description: "Get answers to common questions about mobile spa services in Cape Town.",
    url: "https://exotictmspa.co.za/faq",
    siteName: "Exotic Touch Mobile Spa",
    images: [
      {
        url: "/hero-spa.jpg",
        width: 1200,
        height: 630,
        alt: "Mobile spa FAQ and frequently asked questions",
      },
    ],
    locale: "en_ZA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Frequently Asked Questions | Exotic Touch",
    description: "Get answers to common questions about mobile spa services in Cape Town.",
    images: ["/hero-spa.jpg"],
  },
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <PageStructuredData
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "FAQ", url: "/faq" },
        ]}
        pageType="WebPage"
        pageName="Frequently Asked Questions | Exotic Touch Mobile Spa"
        pageDescription="Get answers to common questions about mobile spa services in Cape Town. Learn about booking, preparation, pricing, and what to expect."
        pageUrl="/faq"
      />
      {children}
    </>
  );
}

