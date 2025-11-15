import type { Metadata } from "next";
import PageStructuredData from "@/components/PageStructuredData";

export const metadata: Metadata = {
  title: "Preparation Guide | How to Prepare for Mobile Spa | Exotic Touch",
  description: "Complete preparation guide for mobile spa treatments. Learn what to wear, how to prepare your space, and what to expect before your appointment in Cape Town.",
  keywords: ["spa preparation guide", "how to prepare for spa", "spa day preparation", "mobile spa prep", "what to wear spa", "spa preparation tips"],
  alternates: {
    canonical: "https://exotictmspa.co.za/preparation-guide",
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
    title: "Preparation Guide | Exotic Touch Mobile Spa",
    description: "Complete preparation guide for mobile spa treatments.",
    url: "https://exotictmspa.co.za/preparation-guide",
    siteName: "Exotic Touch Mobile Spa",
    images: [
      {
        url: "/hero-spa.jpg",
        width: 1200,
        height: 630,
        alt: "Mobile spa preparation guide",
      },
    ],
    locale: "en_ZA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Preparation Guide | Exotic Touch",
    description: "Complete preparation guide for mobile spa treatments.",
    images: ["/hero-spa.jpg"],
  },
};

export default function PreparationGuideLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <PageStructuredData
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Preparation Guide", url: "/preparation-guide" },
        ]}
        pageType="WebPage"
        pageName="Preparation Guide | Exotic Touch Mobile Spa"
        pageDescription="Complete preparation guide for mobile spa treatments. Learn what to wear, how to prepare your space, and what to expect before your appointment."
        pageUrl="/preparation-guide"
      />
      {children}
    </>
  );
}

