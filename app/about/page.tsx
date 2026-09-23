import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Cpu, Zap, ShieldCheck, HeartHandshake } from "lucide-react";
import ProcessSection from "@/components/home/process-section";
import CTABand from "@/components/home/cta-band";

export const metadata: Metadata = {
  title: "About Us — Software Engineering, AI & Web Agency | Nairobi, Kenya",
  description:
    "Learn about Stackup Kenya: a premier Nairobi software company and web engineering agency. We build bespoke enterprise software (POS, CRM, ERP), AI integrations, high-performance web applications, and brand identity systems.",
  keywords: [
    "About Stackup Kenya",
    "Software Company Nairobi",
    "Software Engineering Agency Kenya",
    "Web Development Firm Nairobi",
    "Tech Agency Nairobi Kenya",
    "POS and CRM Software Developers Kenya",
    "AI Integration Experts Nairobi",
  ],
  alternates: {
    canonical: "https://stackupkenya.studio/about",
  },
  openGraph: {
    title: "About Us — Stackup Kenya | Software & Web Engineering",
    description:
      "Premier Nairobi-based software company and web development agency building custom enterprise software, AI solutions, web apps, and design systems.",
    url: "https://stackupkenya.studio/about",
    siteName: "Stackup Kenya",
    images: [
      {
        url: "https://stackupkenya.studio/images/projects/brand-design/b1.webp",
        width: 1200,
        height: 630,
        alt: "About Stackup Kenya Engineering Team",
      },
    ],
  },
};

export default function AboutPage() {
  const pillars = [
    {
      icon: Cpu,
      title: "Software Engineering",
      description:
        "We engineer robust, scalable software architectures — from custom POS & CRM platforms to mission-critical business portals and API backends.",
    },
    {
      icon: Zap,
      title: "High Performance Web",
      description:
        "Built on modern Next.js and React technology, our web applications load instantaneously with perfect Core Web Vitals, mobile responsiveness, and SEO.",
    },
    {
      icon: ShieldCheck,
      title: "Reliability & Security",
      description:
        "Enterprise-grade code quality, secure payment integrations, role-based access control, and seamless cloud deployments.",
    },
    {
      icon: HeartHandshake,
      title: "Long-term Partnership",
      description:
        "We operate as your dedicated technical arm — transparent communication, agile milestones, and continuous post-launch maintenance.",
    },
  ];

  const aboutJsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Stackup Kenya",
    description:
      "Stackup Kenya is a premier software company and web engineering agency in Nairobi, Kenya specializing in Custom Software (POS, CRM), AI Integration, Web Development, and Brand Design.",
    url: "https://stackupkenya.studio/about",
    mainEntity: {
      "@type": "Organization",
      name: "Stackup Kenya",
      url: "https://stackupkenya.studio",
      logo: "https://stackupkenya.studio/stackup%20svg.svg",
      telephone: "+254790870596",
      email: "stackupke@gmail.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Nairobi",
        addressRegion: "Nairobi County",
        addressCountry: "KE",
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }}
      />

      {/* About Hero Header with Greyish Surface Background */}
      <section className="py-20 bg-surface/70 border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-background border border-surface-border text-xs font-semibold uppercase tracking-widest text-foreground">
            <span>• Engineering &amp; Innovation •</span>
          </div>
          <h1 className="font-display text-5xl sm:text-7xl md:text-8xl uppercase tracking-tighter text-foreground max-w-4xl">
            ABOUT STACKUP KENYA.
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
                ENGINEERING INTELLIGENT SOFTWARE &amp; DIGITAL PRODUCTS.
              </h2>
              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                At Stackup Kenya, we help ambitious businesses scale through modern software engineering, AI-driven automation, and high-performance web development.
              </p>
              <p className="text-muted-foreground text-base leading-relaxed">
                From bespoke POS and CRM platforms to enterprise web applications, brand identities, and social media campaigns, we bridge technical engineering with strategic product design.
              </p>
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground font-bold text-sm rounded-full hover:bg-primary/90 transition-all shadow-md group"
                >
                  <span>Build With Stackup Kenya</span>
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
