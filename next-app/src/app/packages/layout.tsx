import type { Metadata } from "next";
import PageStructuredData from "@/components/PageStructuredData";

export const metadata: Metadata = {
  title: "Spa Packages | Couples Retreat, Bridal Packages & More",
  description: "Specially curated spa experiences for couples, groups, and special occasions. Couples Retreat, Bridal Shower, Corporate Wellness, and Pamper Party packages available in Cape Town.",
  keywords: ["spa packages Cape Town", "couples spa", "bridal shower package", "corporate wellness", "pamper party", "group spa packages"],
  alternates: {
    canonical: "/packages",
  },
  openGraph: {
    title: "Spa Packages | Exotic Touch Mobile Spa",
    description: "Specially curated spa experiences for couples, groups, and special occasions. Book your package today.",
    url: "https://exotictmspa.co.za/packages",
    images: [
      {
        url: "/hero-spa.jpg",
        width: 1200,
        height: 630,
        alt: "Spa packages for couples and groups in Cape Town",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Spa Packages | Exotic Touch Mobile Spa",
    description: "Specially curated spa experiences for couples, groups, and special occasions.",
    images: ["/hero-spa.jpg"],
  },
};

export default function PackagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <PageStructuredData
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Packages", url: "/packages" },
        ]}
      />
      {children}
    </>
  );
}

