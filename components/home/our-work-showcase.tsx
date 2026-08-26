"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import type { LoadedProjectItem } from "@/lib/projects-loader";
import BrandCarouselCard from "@/components/projects/brand-carousel-card";

interface OurWorkShowcaseProps {
  projects: LoadedProjectItem[];
}

const CATEGORIES = [
  "Web Development",
  "Graphic Design",
  "Social Media Management",
  "Brand Design",
];

export default function OurWorkShowcase({ projects }: OurWorkShowcaseProps) {
  const [selectedCategory, setSelectedCategory] = useState("Web Development");
  const scrollRef = useRef<HTMLDivElement>(null);

  // Filter projects by category and limit to max 5 projects per category
  const filteredProjects = projects
    .filter((p) => p.category === selectedCategory)
    .slice(0, 5);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.75;
      scrollRef.current.scrollTo({
        left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-24 bg-background border-t border-surface-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-6 border-b border-surface-border gap-6">
          <div>
            <span className="text-xs uppercase tracking-widest text-primary font-medium block mb-2">
              • Portfolio Showcase •
            </span>
            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl uppercase text-foreground">
              FEATURED WORK
            </h2>
          </div>

          <div className="flex items-center gap-4">
            {/* Scroll Controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => scroll("left")}
                className="p-2.5 rounded-full bg-surface border border-surface-border text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => scroll("right")}
                className="p-2.5 rounded-full bg-surface border border-surface-border text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors group"
            >
              <span>View All Projects</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 p-2 bg-surface rounded-full border border-surface-border max-w-fit mx-auto">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs font-medium uppercase tracking-wider transition-all duration-200 ${
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

        {/* Horizontal Scroll Track */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-12 bg-surface/50 border border-surface-border rounded-[24px] max-w-md mx-auto p-8 space-y-2">
            <p className="text-sm font-medium text-foreground uppercase tracking-wider">
              No Images Uploaded Yet
            </p>
            <p className="text-xs text-muted-foreground">
              Save your project images into the project folder to display them here.
            </p>
          </div>
        ) : (
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-none py-2 snap-x snap-mandatory scroll-smooth -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 items-center"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {filteredProjects.map((item) => {
              const isWebDev = item.category === "Web Development";
              const isBrandDesign = item.category === "Brand Design";

              if (isBrandDesign) {
                return (
                  <div key={item.id} className="snap-center shrink-0 w-[280px] sm:w-[320px]">
                    <BrandCarouselCard project={item} />
                  </div>
                );
              }

              if (isWebDev) {
                const targetUrl = item.websiteUrl || "/projects";
                return (
                  <a
                    key={item.id}
                    href={targetUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="snap-center shrink-0 w-[280px] sm:w-[340px] aspect-[4/3] rounded-[24px] overflow-hidden relative group border border-surface-border shadow-2xs bg-surface flex items-center justify-center cursor-pointer"
                  >
                    <Image
                      src={item.image}
                      alt={item.title || item.category}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 280px, 340px"
                    />
                  </a>
                );
              }

              // Graphic Design & Social Media Management: Uncropped fit
              return (
                <div
                  key={item.id}
                  className="snap-center shrink-0 w-[280px] sm:w-[320px] aspect-[3/4] rounded-[24px] overflow-hidden relative border border-surface-border shadow-2xs bg-surface/90 flex items-center justify-center"
                >
                  <Image
                    src={item.image}
                    alt={item.title || item.category}
                    fill
                    className="object-contain p-2 sm:p-3"
                    sizes="(max-width: 640px) 280px, 320px"
                  />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
