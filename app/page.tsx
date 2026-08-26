import Hero from "@/components/home/hero";
import LogoCloud from "@/components/home/logo-cloud";
import ServicesOverview from "@/components/home/services-overview";
import OurWorkShowcase from "@/components/home/our-work-showcase";
import ProcessSection from "@/components/home/process-section";
import FAQSection from "@/components/home/faq-section";
import CTABand from "@/components/home/cta-band";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import insightsData from "@/content/insights.json";
import { getProjectsWithExistingImages } from "@/lib/projects-loader";

export default function Home() {
  const projects = getProjectsWithExistingImages();

  return (
    <>
      <Hero />
      <LogoCloud />
      <ServicesOverview />
      <OurWorkShowcase projects={projects} />
      <ProcessSection />
      
      {/* Latest Insights Teaser */}
      <section className="py-24 bg-surface/40 border-t border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-surface-border gap-6">
            <div>
              <span className="text-xs uppercase tracking-widest text-primary font-medium block mb-2">
                • Thought Leadership •
              </span>
              <h2 className="font-display text-4xl sm:text-6xl md:text-7xl uppercase text-foreground">
                LATEST INSIGHTS
              </h2>
            </div>
            <Link
              href="/insights"
              className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors group"
            >
              <span>View All Articles</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </div>

          {/* 3-Column Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {insightsData.map((article) => (
              <article
                key={article.id}
                className="group flex flex-col bg-background rounded-[20px] border border-surface-border overflow-hidden hover:border-primary/40 transition-all duration-300 shadow-2xs"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-surface">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute top-4 right-4 p-2.5 rounded-full bg-foreground text-background group-hover:bg-primary group-hover:text-primary-foreground transition-colors shadow-md">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-xs font-normal text-muted-foreground">
                      <span>{article.date}</span>
                    </div>
                    <h3 className="font-sans font-normal text-xl sm:text-2xl text-foreground uppercase tracking-tight line-clamp-2 group-hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                  </div>
                  <div className="pt-2">
                    <span className="text-xs font-medium text-foreground group-hover:text-primary transition-colors inline-flex items-center gap-1">
                      Read Article <ArrowUpRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <FAQSection />
      <CTABand />
    </>
  );
}
