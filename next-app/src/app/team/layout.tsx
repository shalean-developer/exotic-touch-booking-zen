import type { Metadata } from "next";
import PageStructuredData from "@/components/PageStructuredData";

export const metadata: Metadata = {
  title: "Our Team | Professional Spa Therapists Cape Town | Exotic Touch",
  description: "Meet our team of certified, professional spa therapists in Cape Town. Fully qualified experts specializing in massages, facials, nail care, waxing, and lash extensions.",
  keywords: ["spa therapists Cape Town", "certified massage therapists", "professional spa team", "qualified therapists", "spa professionals", "mobile spa therapists"],
  alternates: {
    canonical: "https://exotictmspa.co.za/team",
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
    title: "Our Team | Exotic Touch Mobile Spa",
    description: "Meet our team of certified, professional spa therapists in Cape Town.",
    url: "https://exotictmspa.co.za/team",
    siteName: "Exotic Touch Mobile Spa",
    images: [
      {
        url: "/hero-spa.jpg",
        width: 1200,
        height: 630,
        alt: "Professional spa therapists team",
      },
    ],
    locale: "en_ZA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Team | Exotic Touch",
    description: "Meet our team of certified, professional spa therapists.",
    images: ["/hero-spa.jpg"],
  },
};

export default function TeamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <PageStructuredData
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Our Team", url: "/team" },
        ]}
        pageType="WebPage"
        pageName="Our Team | Exotic Touch Mobile Spa"
        pageDescription="Meet our team of certified, professional spa therapists in Cape Town. Fully qualified experts specializing in various spa treatments."
        pageUrl="/team"
      />
      {children}
    </>
  );
}

