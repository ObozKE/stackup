import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import servicesData from "@/content/services.json";

export default function ServicesOverview() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-surface-border gap-6">
          <div>
            <span className="text-xs uppercase tracking-widest text-primary font-medium block mb-2">
              • Services Spectrum •
            </span>
            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl uppercase text-foreground">
              OUR SERVICES
            </h2>
          </div>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors group"
          >
            <span>Explore All Capabilities</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>

        {/* Numbered Row List */}
        <div className="divide-y divide-surface-border border-b border-surface-border">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="py-12 group hover:bg-surface/60 transition-colors rounded-2xl px-4 sm:px-6 -mx-4 sm:-mx-6"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Numbered Badge & Title */}
                <div className="lg:col-span-4 flex items-start gap-4">
                  <span className="font-display text-3xl sm:text-4xl text-primary bg-primary/10 px-3 py-1 rounded-xl">
                    {service.id}
                  </span>
                  <div>
                    <h3 className="font-display text-2xl sm:text-3xl text-foreground uppercase tracking-tight group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {service.shortDescription}
                    </p>
                  </div>
                </div>

                {/* Thumbnail Image */}
                <div className="lg:col-span-4">
                  <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden shadow-sm border border-surface-border group-hover:shadow-md transition-shadow">
                    <Image
                      src={service.featuredImage}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                  </div>
                </div>

                {/* Categories & Pill Tags */}
                <div className="lg:col-span-4 flex flex-col lg:items-end justify-between space-y-4">
                  <div className="space-y-2 lg:text-right">
                    <span className="text-[11px] font-medium uppercase tracking-widest text-muted-foreground block">
                      CATEGORIES
                    </span>
                    <div className="flex flex-wrap lg:justify-end gap-2">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-surface border border-surface-border text-foreground font-normal text-xs rounded-full shadow-2xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link
                    href={`/services#${service.slug}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-foreground text-background font-medium text-xs rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                  >
                    <span>View Breakdown</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
