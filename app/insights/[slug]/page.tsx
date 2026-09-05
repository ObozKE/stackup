import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Calendar, Clock, User } from "lucide-react";
import insightsData from "@/content/insights.json";
import CTABand from "@/components/home/cta-band";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate static params for static site generation (SSG)
export async function generateStaticParams() {
  return insightsData.map((article) => ({
    slug: article.slug,
  }));
}

// Dynamic SEO & GEO Metadata Generator
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = insightsData.find((a) => a.slug === slug);

  if (!article) {
    return {
      title: "Article Not Found — Stackup Kenya",
    };
  }

  const siteUrl = "https://stackupkenya.studio";
  const canonicalUrl = `${siteUrl}/insights/${article.slug}`;

  return {
    title: `${article.title} | Stackup Kenya`,
    description: article.summary,
    keywords: [
      "Stackup Kenya",
      article.category,
      "Web Development Nairobi",
      "Graphic Design Kenya",
      "Social Media Marketing Nairobi",
      article.title,
    ],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${article.title} | Stackup Kenya`,
      description: article.summary,
      url: canonicalUrl,
      siteName: "Stackup Kenya",
      images: [
        {
          url: article.image,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
      type: "article",
      publishedTime: article.date,
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.summary,
      images: [article.image],
    },
  };
}

export default async function InsightArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = insightsData.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  // Find related articles (excluding current one)
  const relatedArticles = insightsData
    .filter((a) => a.slug !== slug)
    .slice(0, 2);

  // Structured JSON-LD Schema for Google Search & GEO indexing
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.summary,
    image: article.image,
    datePublished: article.date,
    author: {
      "@type": "Organization",
      name: article.author || "Stackup Kenya",
      url: "https://stackupkenya.studio",
    },
    publisher: {
      "@type": "Organization",
      name: "Stackup Kenya",
      logo: {
        "@type": "ImageObject",
        url: "https://stackupkenya.studio/stackup%20svg.svg",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://stackupkenya.studio/insights/${article.slug}`,
    },
  };

  return (
    <>
      {/* Inject JSON-LD for Search Engine & AI GEO indexing */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Header */}
      <section className="py-16 bg-surface/70 border-b border-surface-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Back to Insights</span>
          </Link>

          <div className="flex flex-wrap items-center gap-3 text-xs font-medium text-muted-foreground pt-2">
            <span className="px-3 py-1 bg-background border border-surface-border rounded-full text-foreground uppercase tracking-wider font-semibold">
              {article.category}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {article.date}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {article.readTime}
            </span>
          </div>

          <h1 className="font-sans font-normal text-3xl sm:text-5xl md:text-6xl text-foreground uppercase tracking-tight leading-tight">
            {article.title}
          </h1>

          <div className="flex items-center gap-2 text-xs text-muted-foreground pt-1">
            <User className="w-3.5 h-3.5 text-primary" />
            <span>Written by <strong className="text-foreground">{article.author || "Stackup Kenya"}</strong></span>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <article className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Featured Image */}
          <div className="relative aspect-[16/9] w-full rounded-[24px] overflow-hidden border border-surface-border shadow-md bg-surface">
            <Image
              src={article.image}
              alt={article.title}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 900px"
            />
          </div>

          {/* Lead Executive Summary Box */}
          <div className="p-8 rounded-[20px] bg-surface border border-primary/20 space-y-3">
            <span className="text-xs uppercase tracking-widest font-bold text-primary block">
              • Article Overview •
            </span>
            <p className="text-foreground font-medium text-lg sm:text-xl leading-relaxed">
              {article.summary}
            </p>
          </div>

          {/* Body Sections */}
          <div className="space-y-10 text-foreground text-base sm:text-lg leading-relaxed font-normal">
            {article.sections.map((sec, idx) => (
              <div key={idx} className="space-y-4 pt-4">
                <h2 className="font-sans font-normal text-2xl sm:text-3xl text-foreground uppercase tracking-tight border-b border-surface-border pb-3">
                  {sec.heading}
                </h2>
                <div className="text-muted-foreground space-y-4">
                  {sec.body.split("\n").map((paragraph, pIdx) => (
                    <p key={pIdx} className="leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* GEO & Local Business Callout Card */}
          <div className="p-8 sm:p-10 rounded-[24px] bg-foreground text-background space-y-6 shadow-lg">
            <span className="text-xs uppercase tracking-widest text-primary font-bold block">
              • Elevate Your Brand •
            </span>
            <h3 className="font-display text-3xl sm:text-4xl uppercase tracking-tight text-white">
              NEED WEB DEVELOPMENT OR DESIGN SERVICES IN NAIROBI, KENYA?
            </h3>
            <p className="text-white/80 text-sm sm:text-base leading-relaxed">
              Stackup Kenya helps brands across Kenya and international markets build high-converting websites, striking visual identities, and targeted social media campaigns.
            </p>
            <div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-primary text-primary-foreground font-medium text-sm rounded-full hover:bg-primary/90 transition-colors shadow-md"
              >
                <span>Book a Consultation</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Related Articles */}
          {relatedArticles.length > 0 && (
            <div className="pt-12 border-t border-surface-border space-y-8">
              <h3 className="font-display text-2xl sm:text-3xl text-foreground uppercase tracking-tight">
                READ MORE INSIGHTS
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {relatedArticles.map((rel) => (
                  <Link
                    key={rel.id}
                    href={`/insights/${rel.slug}`}
                    className="group flex flex-col bg-surface rounded-[20px] border border-surface-border overflow-hidden hover:border-primary/40 transition-all shadow-2xs"
                  >
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-surface">
                      <Image
                        src={rel.image}
                        alt={rel.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 640px) 100vw, 50vw"
                      />
                    </div>
                    <div className="p-6 space-y-2">
                      <span className="text-[11px] uppercase tracking-widest text-primary font-semibold">
                        {rel.category}
                      </span>
                      <h4 className="font-sans font-normal text-lg text-foreground uppercase tracking-tight line-clamp-2 group-hover:text-primary transition-colors">
                        {rel.title}
                      </h4>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>

      <CTABand />
    </>
  );
}
