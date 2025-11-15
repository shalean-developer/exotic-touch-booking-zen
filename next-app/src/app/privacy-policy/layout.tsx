import type { Metadata } from "next";
import PageStructuredData from "@/components/PageStructuredData";

export const metadata: Metadata = {
  title: "Privacy Policy | Exotic Touch Mobile Spa",
  description: "Read our privacy policy to understand how Exotic Touch Mobile Spa collects, uses, and protects your personal information.",
  keywords: ["privacy policy", "data protection", "privacy", "personal information"],
  alternates: {
    canonical: "https://exotictmspa.co.za/privacy-policy",
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
    title: "Privacy Policy | Exotic Touch",
    description: "Read our privacy policy to understand how we collect, use, and protect your personal information.",
    url: "https://exotictmspa.co.za/privacy-policy",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Privacy Policy | Exotic Touch",
    description: "Read our privacy policy to understand how we collect, use, and protect your personal information.",
  },
};

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <PageStructuredData
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Privacy Policy", url: "/privacy-policy" },
        ]}
        pageType="WebPage"
        pageName="Privacy Policy | Exotic Touch Mobile Spa"
        pageDescription="Read our privacy policy to understand how Exotic Touch Mobile Spa collects, uses, and protects your personal information."
        pageUrl="/privacy-policy"
      />
      {children}
    </>
  );
}

