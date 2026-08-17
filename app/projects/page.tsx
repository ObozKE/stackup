import type { Metadata } from "next";
import projectsData from "@/content/projects.json";
import ProjectFilter from "@/components/projects/project-filter";
import CTABand from "@/components/home/cta-band";

export const metadata: Metadata = {
  title: "Projects & Portfolio — Stackup Creative Agency",
  description:
    "Explore Stackup's featured work across Web Development, Brand Identity, Graphic Design, and Social Media Marketing.",
};

export default function ProjectsPage() {
  return (
    <>
      {/* Header */}
      <section className="py-20 bg-background border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface border border-surface-border text-xs font-semibold uppercase tracking-widest text-foreground">
            <span>• Portfolio •</span>
          </div>
          <h1 className="font-display text-5xl sm:text-7xl md:text-8xl uppercase tracking-tighter text-foreground max-w-4xl">
            SELECTED WORKS & PORTFOLIO.
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl font-sans leading-relaxed">
            A collection of web development products, visual design systems, social campaigns, and print graphics delivered for ambitious brands.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProjectFilter projects={projectsData} />
        </div>
      </section>

      <CTABand />
    </>
  );
}
