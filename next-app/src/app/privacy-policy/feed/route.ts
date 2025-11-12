import { NextResponse } from "next/server";

export async function GET() {
  const baseUrl = "https://exotictmspa.co.za";
  const feedUrl = `${baseUrl}/privacy-policy/feed`;
  const privacyPolicyUrl = `${baseUrl}/privacy-policy`;
  const lastModified = new Date().toISOString();

  const rssFeed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Privacy Policy - Exotic Touch Mobile Spa</title>
    <link>${privacyPolicyUrl}</link>
    <description>Privacy Policy updates and information from Exotic Touch Mobile Spa</description>
    <language>en-ZA</language>
    <lastBuildDate>${lastModified}</lastBuildDate>
    <pubDate>${lastModified}</pubDate>
    <ttl>60</ttl>
    <atom:link href="${feedUrl}" rel="self" type="application/rss+xml"/>
    <item>
      <title>Privacy Policy</title>
      <link>${privacyPolicyUrl}</link>
      <guid isPermaLink="true">${privacyPolicyUrl}</guid>
      <description>Read our privacy policy to understand how Exotic Touch Mobile Spa collects, uses, and protects your personal information.</description>
      <pubDate>${lastModified}</pubDate>
    </item>
  </channel>
</rss>`;

  return new NextResponse(rssFeed, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}

