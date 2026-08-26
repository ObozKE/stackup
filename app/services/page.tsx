import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import servicesData from "@/content/services.json";
import CTABand from "@/components/home/cta-band";

export const metadata: Metadata = {
  title: "Services — Web Development, Design & SMM",
  description:
    "Explore Stackup's core capabilities in Web Development, Graphic & Brand Design, and Social Media Management tailored for Nairobi and global brands.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Services Hero Header with Greyish Surface Background */}
      <section className="py-20 bg-surface/70 border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-background border border-surface-border text-xs font-semibold uppercase tracking-widest text-foreground">
            <span>• Capabilities •</span>
          </div>
          <h1 className="font-display text-5xl sm:text-7xl md:text-8xl uppercase tracking-tighter text-foreground max-w-4xl">
            OUR SERVICES.
          </h1>
        </div>
      </section>

      {/* Services Breakdown List */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
          {servicesData.map((service, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={service.id}
                id={service.slug}
                className="scroll-mt-28 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
              >
                {/* Visual Image */}
                <div
                  className={`lg:col-span-6 ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div className="relative aspect-[4/3] w-full rounded-[24px] overflow-hidden shadow-md border border-surface-border group">
                    <Image
                      src={service.featuredImage}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute top-6 left-6 font-display text-4xl text-primary-foreground bg-primary px-4 py-2 rounded-2xl shadow-lg">
                      {service.id}
                    </div>
                  </div>
                </div>

                {/* Service Details */}
                <div
                  className={`lg:col-span-6 space-y-6 ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3.5 py-1.5 bg-surface border border-surface-border text-foreground font-semibold text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-foreground uppercase tracking-tight">
                    {service.title}
                  </h2>

                  <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                    {service.fullDescription}
                  </p>

                  {/* Deliverables List */}
                  <div className="pt-4 space-y-3 border-t border-surface-border">
                    <h3 className="text-xs uppercase tracking-widest font-bold text-foreground">
                      What&apos;s Included & Deliverables:
                    </h3>
                    <ul className="space-y-2.5">
                      {service.deliverables.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-3 text-sm sm:text-base text-foreground font-medium"
                        >
                          <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4">
                    <Link
                      href={`/contact?service=${encodeURIComponent(service.title)}`}
                      className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground font-bold text-sm rounded-full hover:bg-primary/90 transition-all shadow-md group"
                    >
                      <span>Request {service.title} Proposal</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <CTABand />
    </>
  );
}
