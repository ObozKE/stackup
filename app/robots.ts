import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: [
          "Googlebot",
          "Bingbot",
          "GPTBot",
          "ChatGPT-User",
          "PerplexityBot",
          "ClaudeBot",
          "Google-Extended",
          "CCBot",
        ],
        allow: "/",
      },
    ],
    sitemap: "https://stackupkenya.studio/sitemap.xml",
    host: "https://stackupkenya.studio",
  };
}
