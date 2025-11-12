import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import StructuredData from "@/components/StructuredData";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Exotic Touch Mobile Spa | Luxury Mobile Spa Treatments in Cape Town",
    template: "%s | Exotic Touch Mobile Spa",
  },
  description: "Experience professional mobile spa services delivered to your home in Cape Town. Massages, facials, manicures, pedicures, waxing & lashes. Same-day bookings available.",
  keywords: ["mobile spa Cape Town", "home spa service", "massage at home", "mobile beauty treatments", "luxury spa Cape Town", "same day spa booking"],
  authors: [{ name: "Exotic Touch Mobile Spa" }],
  creator: "Exotic Touch Mobile Spa",
  publisher: "Exotic Touch Mobile Spa",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://exotictmspa.co.za"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/logo.png", type: "image/png", sizes: "any" },
      { url: "/favicon.png", type: "image/png", sizes: "any" },
    ],
    shortcut: "/logo.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: "https://exotictmspa.co.za",
    siteName: "Exotic Touch Mobile Spa",
    title: "Exotic Touch Mobile Spa | Luxury Mobile Spa Treatments in Cape Town",
    description: "Experience professional mobile spa services delivered to your home in Cape Town.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Exotic Touch Mobile Spa Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Exotic Touch Mobile Spa | Luxury Mobile Spa Treatments in Cape Town",
    description: "Experience professional mobile spa services delivered to your home in Cape Town.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/logo.png" type="image/png" />
        <link rel="shortcut icon" href="/logo.png" type="image/png" />
        <StructuredData />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-body antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
