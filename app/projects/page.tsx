import type { Metadata } from "next";
import { getProjectsWithExistingImages } from "@/lib/projects-loader";
import ProjectFilter from "@/components/projects/project-filter";
import CTABand from "@/components/home/cta-band";

export const metadata: Metadata = {
  title: "Projects & Portfolio — Stackup Creative Agency",
  description:
    "Explore Stackup's featured work across Web Development, Brand Identity, Graphic Design, and Social Media Management.",
};

export default function ProjectsPage() {
  const projects = getProjectsWithExistingImages();

  return (
    <>
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
