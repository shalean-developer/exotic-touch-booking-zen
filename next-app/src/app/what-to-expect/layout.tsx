import type { Metadata } from "next";
import PageStructuredData from "@/components/PageStructuredData";

export const metadata: Metadata = {
  title: "What to Expect | Mobile Spa Experience Guide | Exotic Touch",
  description: "Learn what to expect from your mobile spa experience. Step-by-step guide to booking, preparation, treatment process, and aftercare for mobile spa services in Cape Town.",
  keywords: ["what to expect mobile spa", "mobile spa experience", "spa appointment guide", "mobile spa preparation", "spa treatment process", "first time spa"],
  alternates: {
    canonical: "https://exotictmspa.co.za/what-to-expect",
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
    title: "What to Expect | Exotic Touch Mobile Spa",
    description: "Learn what to expect from your mobile spa experience in Cape Town.",
    url: "https://exotictmspa.co.za/what-to-expect",
    siteName: "Exotic Touch Mobile Spa",
    images: [
      {
        url: "/hero-spa.jpg",
        width: 1200,
        height: 630,
        alt: "What to expect from mobile spa experience",
      },
    ],
    locale: "en_ZA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "What to Expect | Exotic Touch",
    description: "Learn what to expect from your mobile spa experience.",
    images: ["/hero-spa.jpg"],
  },
};

export default function WhatToExpectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <PageStructuredData
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "What to Expect", url: "/what-to-expect" },
        ]}
        pageType="WebPage"
        pageName="What to Expect | Exotic Touch Mobile Spa"
        pageDescription="Learn what to expect from your mobile spa experience. Step-by-step guide to booking, preparation, treatment process, and aftercare."
        pageUrl="/what-to-expect"
      />
      {children}
    </>
  );
}

