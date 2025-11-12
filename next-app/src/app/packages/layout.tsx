import type { Metadata } from "next";

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
  },
};

export default function PackagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

