import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },
  compress: true,
  poweredByHeader: false,
  async redirects() {
    return [
      // Redirect old product URLs to treatments page (specific products first)
      {
        source: "/product/body-scrubs",
        destination: "/treatments/facials",
        permanent: true,
      },
      {
        source: "/product/facials",
        destination: "/treatments/facials",
        permanent: true,
      },
      // Catch-all for any other product URLs with query parameters
      {
        source: "/product/:path*",
        destination: "/treatments",
        permanent: true,
      },
      // Redirect old WooCommerce product category URLs
      {
        source: "/product-category/:path*",
        destination: "/treatments",
        permanent: true,
      },
      // Redirect old services sub-pages to treatment pages
      {
        source: "/services/nail-care",
        destination: "/treatments/manicures-pedicures",
        permanent: true,
      },
      {
        source: "/services/waxing",
        destination: "/treatments/waxing",
        permanent: true,
      },
      // Catch-all for other services sub-pages (but not /services itself)
      {
        source: "/services/:path+",
        destination: "/services",
        permanent: true,
      },
      // Redirect old WooCommerce e-commerce URLs
      {
        source: "/cart",
        destination: "/",
        permanent: true,
      },
      {
        source: "/checkout",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/my-account/lost-password",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/my-account/:path*",
        destination: "/contact",
        permanent: true,
      },
      // Redirect old WordPress media URLs
      {
        source: "/wp-content/:path*",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
