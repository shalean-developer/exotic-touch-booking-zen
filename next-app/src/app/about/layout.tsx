import type { Metadata } from "next";
import PageStructuredData from "@/components/PageStructuredData";

export const metadata: Metadata = {
  title: "About Us | Exotic Touch Mobile Spa",
  description: "Learn about Exotic Touch Mobile Spa - Cape Town's premier mobile spa service. Professional therapists bringing luxury spa treatments to your home.",
  keywords: ["about mobile spa", "mobile spa Cape Town", "spa company", "luxury spa services", "professional spa therapists"],
  alternates: {
    canonical: "https://exotictmspa.co.za/about",
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
    title: "About Us | Exotic Touch",
    description: "Learn about Exotic Touch Mobile Spa - Cape Town's premier mobile spa service.",
    url: "https://exotictmspa.co.za/about",
    images: [
      {
        url: "/hero-spa.jpg",
        width: 1200,
        height: 630,
        alt: "About Exotic Touch Mobile Spa",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Exotic Touch",
    description: "Learn about Exotic Touch Mobile Spa - Cape Town's premier mobile spa service.",
    images: ["/hero-spa.jpg"],
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <PageStructuredData
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "About", url: "/about" },
        ]}
        pageType="AboutPage"
        pageName="About Us | Exotic Touch Mobile Spa"
        pageDescription="Learn about Exotic Touch Mobile Spa - Cape Town's premier mobile spa service. Professional therapists bringing luxury spa treatments to your home."
        pageUrl="/about"
      />
      {children}
    </>
  );
}

