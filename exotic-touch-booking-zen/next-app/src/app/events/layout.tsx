import type { Metadata } from "next";
import PageStructuredData from "@/components/PageStructuredData";

export const metadata: Metadata = {
  title: "Events & Groups | Corporate Wellness, Bridal Parties & More",
  description: "Transform your special occasion into an unforgettable spa experience. Corporate wellness, bridal parties, birthday celebrations, and group events in Cape Town.",
  keywords: ["corporate wellness Cape Town", "bridal party spa", "group spa events", "birthday spa party", "mobile spa events", "corporate massage"],
  alternates: {
    canonical: "https://exotictmspa.co.za/events",
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
    title: "Events & Groups | Exotic Touch",
    description: "Transform your special occasion into an unforgettable spa experience. Book your event today.",
    url: "https://exotictmspa.co.za/events",
    images: [
      {
        url: "/hero-spa.jpg",
        width: 1200,
        height: 630,
        alt: "Spa events and group packages in Cape Town",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Events & Groups | Exotic Touch",
    description: "Transform your special occasion into an unforgettable spa experience.",
    images: ["/hero-spa.jpg"],
  },
};

export default function EventsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <PageStructuredData
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Events", url: "/events" },
        ]}
        pageType="CollectionPage"
        pageName="Events & Groups | Corporate Wellness, Bridal Parties & More"
        pageDescription="Transform your special occasion into an unforgettable spa experience. Corporate wellness, bridal parties, birthday celebrations, and group events in Cape Town."
        pageUrl="/events"
      />
      {children}
    </>
  );
}

