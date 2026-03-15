import type { Metadata } from "next";
import PageStructuredData from "@/components/PageStructuredData";

export const metadata: Metadata = {
  title: "Pricing | Mobile Spa Prices Cape Town | Exotic Touch",
  description: "Transparent pricing for all mobile spa treatments in Cape Town. View prices for massages, facials, manicures, pedicures, waxing, and lash extensions. Package deals available.",
  keywords: ["mobile spa prices Cape Town", "spa treatment costs", "massage prices", "facial prices", "spa pricing", "mobile spa cost", "spa service prices"],
  alternates: {
    canonical: "https://exotictmspa.co.za/pricing",
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
    title: "Pricing | Exotic Touch Mobile Spa",
    description: "Transparent pricing for all mobile spa treatments in Cape Town.",
    url: "https://exotictmspa.co.za/pricing",
    siteName: "Exotic Touch Mobile Spa",
    images: [
      {
        url: "/hero-spa.jpg",
        width: 1200,
        height: 630,
        alt: "Mobile spa pricing and treatment costs",
      },
    ],
    locale: "en_ZA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pricing | Exotic Touch",
    description: "Transparent pricing for all mobile spa treatments in Cape Town.",
    images: ["/hero-spa.jpg"],
  },
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <PageStructuredData
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Pricing", url: "/pricing" },
        ]}
        pageType="WebPage"
        pageName="Pricing | Exotic Touch Mobile Spa"
        pageDescription="Transparent pricing for all mobile spa treatments in Cape Town. View prices for massages, facials, manicures, pedicures, waxing, and lash extensions."
        pageUrl="/pricing"
      />
      {children}
    </>
  );
}

