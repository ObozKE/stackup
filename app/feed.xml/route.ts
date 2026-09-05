import { NextResponse } from "next/server";
import insightsData from "@/content/insights.json";

export async function GET() {
  const baseUrl = "https://stackupkenya.studio";

  const rssItemsXml = insightsData
    .map(
      (item) => `
    <item>
      <title><![CDATA[${item.title}]]></title>
      <link>${baseUrl}/insights/${item.slug}</link>
      <guid isPermaLink="true">${baseUrl}/insights/${item.slug}</guid>
      <description><![CDATA[${item.summary}]]></description>
      <pubDate>${new Date(item.date).toUTCString()}</pubDate>
      <category>${item.category}</category>
    </item>`
    )
    .join("");

  const rssFeedXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Stackup Kenya — Insights &amp; Articles</title>
    <link>${baseUrl}/insights</link>
    <description>Perspectives, design principles, and web engineering guides from Stackup Kenya in Nairobi.</description>
    <language>en-KE</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml"/>
    ${rssItemsXml}
  </channel>
</rss>`;

  return new NextResponse(rssFeedXml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "s-maxage=3600, stale-while-revalidate",
    },
  });
}
