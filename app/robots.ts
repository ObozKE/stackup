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
          "Slurp",
          "DuckDuckBot",
          "Baiduspider",
          "YandexBot",
          "Applebot",
          "GPTBot",
          "ChatGPT-User",
          "PerplexityBot",
          "ClaudeBot",
          "Google-Extended",
          "CCBot",
          "Bytespider",
          "cohere-ai",
          "Diffbot",
        ],
        allow: "/",
      },
    ],
    sitemap: "https://stackupkenya.studio/sitemap.xml",
    host: "https://stackupkenya.studio",
  };
}
