import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Current Specials | Exclusive Spa Deals & Offers",
  description: "Exclusive offers and limited-time deals for the ultimate spa experience. Check out our current specials on massages, facials, and spa packages in Cape Town.",
  keywords: ["spa specials Cape Town", "spa deals", "spa offers", "discount spa treatments", "limited time offers", "spa promotions"],
  alternates: {
    canonical: "/specials",
  },
  openGraph: {
    title: "Current Specials | Exotic Touch Mobile Spa",
    description: "Exclusive offers and limited-time deals for the ultimate spa experience. Don't miss out!",
    url: "https://exotictmspa.co.za/specials",
    images: [
      {
        url: "/hero-spa.jpg",
        width: 1200,
        height: 630,
        alt: "Spa specials and deals in Cape Town",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Current Specials | Exotic Touch Mobile Spa",
    description: "Exclusive offers and limited-time deals for the ultimate spa experience.",
    images: ["/hero-spa.jpg"],
  },
};

export default function SpecialsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

