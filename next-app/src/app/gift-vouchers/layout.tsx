import type { Metadata } from "next";
import PageStructuredData from "@/components/PageStructuredData";

export const metadata: Metadata = {
  title: "Gift Vouchers | Spa Gift Cards Cape Town | Exotic Touch",
  description: "Give the gift of relaxation with Exotic Touch mobile spa gift vouchers. Perfect for birthdays, anniversaries, holidays, or any special occasion. Valid for 12 months.",
  keywords: ["spa gift voucher Cape Town", "mobile spa gift certificate", "spa gift card", "spa voucher", "gift spa treatment", "spa present Cape Town"],
  alternates: {
    canonical: "https://exotictmspa.co.za/gift-vouchers",
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
    title: "Gift Vouchers | Exotic Touch Mobile Spa",
    description: "Give the gift of relaxation with mobile spa gift vouchers. Perfect for any special occasion.",
    url: "https://exotictmspa.co.za/gift-vouchers",
    siteName: "Exotic Touch Mobile Spa",
    images: [
      {
        url: "/hero-spa.jpg",
        width: 1200,
        height: 630,
        alt: "Mobile spa gift vouchers and gift certificates",
      },
    ],
    locale: "en_ZA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gift Vouchers | Exotic Touch",
    description: "Give the gift of relaxation with mobile spa gift vouchers.",
    images: ["/hero-spa.jpg"],
  },
};

export default function GiftVouchersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <PageStructuredData
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Gift Vouchers", url: "/gift-vouchers" },
        ]}
        pageType="WebPage"
        pageName="Gift Vouchers | Exotic Touch Mobile Spa"
        pageDescription="Give the gift of relaxation with mobile spa gift vouchers. Perfect for birthdays, anniversaries, holidays, or any special occasion."
        pageUrl="/gift-vouchers"
      />
      {children}
    </>
  );
}

