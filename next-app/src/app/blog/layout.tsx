import type { Metadata } from "next";
import PageStructuredData from "@/components/PageStructuredData";

export const metadata: Metadata = {
  title: "Blog | Exotic Touch Mobile Spa",
  description: "Read our blog for spa tips, wellness advice, treatment guides, and updates from Exotic Touch Mobile Spa.",
  keywords: ["spa blog", "wellness tips", "spa advice", "beauty tips", "self-care", "spa treatments"],
  alternates: {
    canonical: "https://exotictmspa.co.za/blog",
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
    title: "Blog | Exotic Touch",
    description: "Read our blog for spa tips, wellness advice, and treatment guides.",
    url: "https://exotictmspa.co.za/blog",
    images: [
      {
        url: "/hero-spa.jpg",
        width: 1200,
        height: 630,
        alt: "Exotic Touch Mobile Spa Blog",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Exotic Touch",
    description: "Read our blog for spa tips, wellness advice, and treatment guides.",
    images: ["/hero-spa.jpg"],
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <PageStructuredData
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Blog", url: "/blog" },
        ]}
        pageType="CollectionPage"
        pageName="Blog | Exotic Touch Mobile Spa"
        pageDescription="Read our blog for spa tips, wellness advice, treatment guides, and updates from Exotic Touch Mobile Spa."
        pageUrl="/blog"
      />
      {children}
    </>
  );
}

