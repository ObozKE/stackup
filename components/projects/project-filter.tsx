"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import GraphicDesignGallery, { GraphicDesignItem } from "./graphic-design-gallery";

interface ProjectItem {
  id: string;
  title: string;
  slug: string;
  category: string;
  subtitle?: string;
  summary: string;
  tags: string[];
  image: string;
  year?: string;
  medium?: string;
  isGraphicDesignShowcase: boolean;
}

interface ProjectFilterProps {
  projects: ProjectItem[];
}

const CATEGORIES = [
  "All",
  "Web Development",
  "Design",
  "Social Media Marketing",
];

export default function ProjectFilter({ projects }: ProjectFilterProps) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const caseStudies = projects.filter((p) => !p.isGraphicDesignShowcase);
  const graphicDesignItems = projects.filter(
    (p) => p.isGraphicDesignShowcase
  ) as unknown as GraphicDesignItem[];

  const filteredCaseStudies =
    selectedCategory === "All"
      ? caseStudies
      : caseStudies.filter((p) => p.category === selectedCategory);

  return (
    <div className="space-y-16">
      {/* Category Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 p-2 bg-surface rounded-full border border-surface-border max-w-fit mx-auto">
        {CATEGORIES.map((cat) => {
          const isActive = selectedCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                isActive
                  ? "bg-foreground text-background shadow-xs"
                  : "text-muted-foreground hover:text-foreground hover:bg-background/50"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Case Studies Grid */}
      <div className="space-y-8">
        <div className="flex items-center justify-between border-b border-surface-border pb-4">
          <h2 className="font-display text-2xl uppercase tracking-tight text-foreground">
            Case Studies ({filteredCaseStudies.length})
          </h2>
          <span className="text-xs text-muted-foreground uppercase font-semibold tracking-wider">
            Category: {selectedCategory}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {filteredCaseStudies.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col bg-background rounded-[24px] border border-surface-border overflow-hidden hover:border-primary/40 transition-all duration-300 shadow-2xs hover:shadow-md"
            >
              {/* Image Container */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-surface">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute top-4 right-4 p-3 rounded-full bg-foreground text-background group-hover:bg-primary group-hover:text-primary-foreground transition-colors shadow-md">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
                {project.year && (
                  <span className="absolute bottom-4 left-4 bg-background/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-foreground border border-surface-border">
                    {project.year}
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-8 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 bg-surface border border-surface-border text-foreground font-semibold text-xs rounded-full">
                      {project.category}
                    </span>
                    {project.subtitle && (
                      <span className="text-xs text-muted-foreground">
                        {project.subtitle}
                      </span>
                    )}
                  </div>

                  <h3 className="font-display text-2xl sm:text-3xl text-foreground uppercase tracking-tight group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.summary}
                  </p>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-surface-border">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] bg-surface text-muted-foreground px-2.5 py-0.5 rounded-full font-medium"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <span className="text-xs font-bold text-foreground group-hover:text-primary transition-colors inline-flex items-center gap-1">
                    View Project <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dedicated Graphic Design Showcase Section */}
      {(selectedCategory === "All" || selectedCategory === "Design") && (
        <GraphicDesignGallery items={graphicDesignItems} />
      )}
    </div>
  );
}
