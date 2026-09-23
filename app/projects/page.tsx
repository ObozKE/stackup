import type { Metadata } from "next";
import { getProjectsWithExistingImages } from "@/lib/projects-loader";
import ProjectFilter from "@/components/projects/project-filter";
import CTABand from "@/components/home/cta-band";

export const metadata: Metadata = {
  title: "Projects & Portfolio — Web Apps, Brand Design & Software Systems",
  description:
    "Explore Stackup Kenya's proven track record of engineering high-performance Web Applications, Brand Identity Systems, Graphic Design Assets, and Social Media Campaigns for clients across Nairobi, Kenya, and internationally.",
  keywords: [
    "Web Development Portfolio Kenya",
    "React Next.js Projects Nairobi",
    "Brand Design Portfolio Kenya",
    "Graphic Design Showcase Nairobi",
    "Social Media Campaign Case Studies Kenya",
    "Software Development Projects East Africa",
    "Best Web Developer Portfolio Nairobi",
  ],
  alternates: {
    canonical: "https://stackupkenya.studio/projects",
  },
  openGraph: {
    title: "Projects & Portfolio — Stackup Kenya",
    description:
      "Explore Stackup Kenya's featured work across Web Development, Custom Software, Brand Identity, and Digital Design.",
    url: "https://stackupkenya.studio/projects",
    siteName: "Stackup Kenya",
    images: [
      {
        url: "https://stackupkenya.studio/images/projects/brand-design/b1.webp",
        width: 1200,
        height: 630,
        alt: "Stackup Kenya Projects Portfolio",
      },
    ],
  },
};

export default function ProjectsPage() {
  const projects = getProjectsWithExistingImages();

  const portfolioJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Stackup Kenya Portfolio & Projects",
    description:
      "Curated showcase of Web Development, Brand Identity Systems, Graphic Design, and Social Media Management engineered by Stackup Kenya.",
    url: "https://stackupkenya.studio/projects",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: projects.map((p, index) => ({
        "@type": "CreativeWork",
        position: index + 1,
        name: p.title,
        description: p.summary || p.subtitle || p.category,
        url: p.websiteUrl || `https://stackupkenya.studio/projects#${p.slug}`,
        image: p.image.startsWith("http")
          ? p.image
          : `https://stackupkenya.studio${p.image}`,
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioJsonLd) }}
      />

      {/* Header with Greyish Surface Background */}
      <section className="py-20 bg-surface/70 border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-background border border-surface-border text-xs font-semibold uppercase tracking-widest text-foreground">
            <span>• Portfolio •</span>
          </div>
          <h1 className="font-display text-5xl sm:text-7xl md:text-8xl uppercase tracking-tighter text-foreground max-w-4xl">
            OUR PROJECTS.
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProjectFilter projects={projects} />
        </div>
      </section>

      <CTABand />
    </>
  );
}
