import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Target, Zap, ShieldCheck, HeartHandshake } from "lucide-react";
import ProcessSection from "@/components/home/process-section";
import CTABand from "@/components/home/cta-band";

export const metadata: Metadata = {
  title: "About Us — Stackup Creative Agency",
  description:
    "Learn about Stackup, a Nairobi-based creative agency uniting strategy, high-performance web development, graphic design, and social marketing.",
};

export default function AboutPage() {
  const pillars = [
    {
      icon: Target,
      title: "Strategic Clarity",
      description:
        "We reject superficial design. Every line of code and visual asset is engineered around measurable business goals and conversion strategy.",
    },
    {
      icon: Zap,
      title: "Technical Excellence",
      description:
        "Built on modern Next.js and React architecture, our digital products perform at elite speeds with flawless mobile responsiveness and SEO.",
    },
    {
      icon: ShieldCheck,
      title: "Uncompromising Quality",
      description:
        "High-contrast display typography, refined visual hierarchy, and precise execution across digital, social, and print mediums.",
    },
    {
      icon: HeartHandshake,
      title: "Collaborative Partnership",
      description:
        "We operate as an extension of your team — transparent communication, predictable timelines, and dedicated post-launch support.",
    },
  ];

  return (
    <>
      {/* About Hero Header with Greyish Surface Background */}
      <section className="py-20 bg-surface/70 border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-background border border-surface-border text-xs font-semibold uppercase tracking-widest text-foreground">
            <span>• Studio Intro •</span>
          </div>
          <h1 className="font-display text-5xl sm:text-7xl md:text-8xl uppercase tracking-tighter text-foreground max-w-4xl">
            ABOUT STACKUP.
          </h1>
        </div>
      </section>

      {/* Agency Overview Grid */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase tracking-widest text-primary font-bold block">
                • Core Philosophy •
              </span>
              <h2 className="font-display text-4xl sm:text-5xl uppercase text-foreground">
                WHERE CREATIVITY MEETS HIGH PERFORMANCE.
              </h2>
              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                At Stackup, we believe modern brands win at the intersection of striking design and technical performance. A beautiful website that loads slowly fails your business; a fast website with mediocre design fails your brand.
              </p>
              <p className="text-muted-foreground text-base leading-relaxed">
                Our multi-disciplinary discipline combines Web Development, Graphic & Brand Design, and Social Media Management into one seamless agency experience.
              </p>
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground font-bold text-sm rounded-full hover:bg-primary/90 transition-all shadow-md group"
                >
                  <span>Work With Stackup</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Link>
              </div>
            </div>

            {/* Core Pillars Cards */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {pillars.map((pillar) => {
                const IconComponent = pillar.icon;
                return (
                  <div
                    key={pillar.title}
                    className="p-6 rounded-[20px] bg-surface border border-surface-border space-y-3 hover:border-primary/40 transition-colors"
                  >
                    <div className="p-3 bg-background border border-surface-border rounded-xl w-fit text-primary">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="font-display text-xl uppercase text-foreground">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Embedded Process Component */}
      <ProcessSection />

      <CTABand />
    </>
  );
}
