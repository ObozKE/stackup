import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import insightsData from "@/content/insights.json";
import CTABand from "@/components/home/cta-band";

export const metadata: Metadata = {
  title: "Insights & Articles — Stackup Kenya",
  description:
    "Perspectives, design principles, and engineering guides from Stackup Kenya on web development, graphic design, and social media marketing.",
};

export default function InsightsPage() {
  return (
    <>
      {/* Hero with Greyish Surface Background */}
      <section className="py-20 bg-surface/70 border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-background border border-surface-border text-xs font-medium uppercase tracking-widest text-foreground">
            <span>• Thought Leadership •</span>
          </div>
          <h1 className="font-display text-5xl sm:text-7xl md:text-8xl uppercase tracking-tighter text-foreground max-w-4xl">
            INSIGHTS.
          </h1>
        </div>
      </section>

      {/* Grid */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {insightsData.map((article) => (
              <article
                key={article.id}
                className="group flex flex-col bg-background rounded-[24px] border border-surface-border overflow-hidden hover:border-primary/40 transition-all duration-300 shadow-2xs hover:shadow-md"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-surface">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute top-4 right-4 p-3 rounded-full bg-foreground text-background group-hover:bg-primary group-hover:text-primary-foreground transition-colors shadow-md">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                <div className="p-8 flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-xs font-normal text-muted-foreground">
                      <span>{article.readTime}</span>
                      <span>•</span>
                      <span>{article.date}</span>
                    </div>

                    <h2 className="font-sans font-normal text-2xl sm:text-3xl text-foreground uppercase tracking-tight group-hover:text-primary transition-colors">
                      {article.title}
                    </h2>
                  </div>

                  <div className="pt-4 border-t border-surface-border flex items-center justify-between">
                    <span className="text-xs font-medium text-foreground group-hover:text-primary transition-colors inline-flex items-center gap-1">
                      Read Story <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
