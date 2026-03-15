import type { Metadata } from "next";
import PageStructuredData from "@/components/PageStructuredData";

export const metadata: Metadata = {
  title: "Terms of Service | Exotic Touch Mobile Spa",
  description: "Read our terms of service to understand the terms and conditions for using Exotic Touch Mobile Spa services.",
  keywords: ["terms of service", "terms and conditions", "service terms", "booking terms"],
  alternates: {
    canonical: "https://exotictmspa.co.za/terms",
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
    title: "Terms of Service | Exotic Touch",
    description: "Read our terms of service to understand the terms and conditions for using our services.",
    url: "https://exotictmspa.co.za/terms",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Terms of Service | Exotic Touch",
    description: "Read our terms of service to understand the terms and conditions for using our services.",
  },
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <PageStructuredData
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Terms of Service", url: "/terms" },
        ]}
        pageType="WebPage"
        pageName="Terms of Service | Exotic Touch Mobile Spa"
        pageDescription="Read our terms of service to understand the terms and conditions for using Exotic Touch Mobile Spa services."
        pageUrl="/terms"
      />
      {children}
    </>
  );
}

