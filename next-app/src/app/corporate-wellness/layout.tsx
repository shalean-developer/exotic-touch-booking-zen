import type { Metadata } from "next";
import PageStructuredData from "@/components/PageStructuredData";

export const metadata: Metadata = {
  title: "Corporate Wellness | Office Spa Services Cape Town | Exotic Touch",
  description: "Boost team morale and productivity with professional corporate wellness services. On-site chair massages, stress relief sessions, and team building spa experiences in Cape Town.",
  keywords: ["corporate spa Cape Town", "office massage", "corporate wellness programs", "on-site spa services", "team building spa", "corporate wellness Cape Town"],
  alternates: {
    canonical: "https://exotictmspa.co.za/corporate-wellness",
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
    title: "Corporate Wellness | Exotic Touch Mobile Spa",
    description: "Boost team morale and productivity with professional corporate wellness services.",
    url: "https://exotictmspa.co.za/corporate-wellness",
    siteName: "Exotic Touch Mobile Spa",
    images: [
      {
        url: "/hero-spa.jpg",
        width: 1200,
        height: 630,
        alt: "Corporate wellness and office spa services",
      },
    ],
    locale: "en_ZA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Corporate Wellness | Exotic Touch",
    description: "Boost team morale and productivity with professional corporate wellness services.",
    images: ["/hero-spa.jpg"],
  },
};

export default function CorporateWellnessLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <PageStructuredData
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Corporate Wellness", url: "/corporate-wellness" },
        ]}
        pageType="WebPage"
        pageName="Corporate Wellness | Exotic Touch Mobile Spa"
        pageDescription="Boost team morale and productivity with professional corporate wellness services. On-site chair massages, stress relief sessions, and team building spa experiences."
        pageUrl="/corporate-wellness"
      />
      {children}
    </>
  );
}

