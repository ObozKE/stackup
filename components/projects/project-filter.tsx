"use client";

import { useState } from "react";
import Image from "next/image";
import BrandCarouselCard from "./brand-carousel-card";

interface ProjectItem {
  id: string;
  title: string;
  slug: string;
  category: string;
  subtitle?: string;
  summary?: string;
  tags?: string[];
  image: string;
  fallbackImage?: string;
  images?: string[];
  fallbackImages?: string[];
  websiteUrl?: string;
  medium?: string;
}

interface ProjectFilterProps {
  projects: ProjectItem[];
}

const CATEGORIES = [
  "Web Development",
  "Brand Design",
  "Social Media Management",
  "Graphic Design",
];

export default function ProjectFilter({ projects }: ProjectFilterProps) {
  const [selectedCategory, setSelectedCategory] = useState("Web Development");
  const [imgErrors, setImgErrors] = useState<Record<string, boolean>>({});

  const filteredProjects = projects.filter(
    (p) => p.category === selectedCategory
  );

  const handleImageError = (id: string) => {
    setImgErrors((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <div className="space-y-12">
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

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => {
          const isBrandDesign = project.category === "Brand Design";
          const isWebDev = project.category === "Web Development";
          const targetUrl = project.websiteUrl || `/contact?service=${encodeURIComponent(project.category)}`;

          if (isBrandDesign) {
            return <BrandCarouselCard key={project.id} project={project} />;
          }

          const imageSrc =
            imgErrors[project.id] && project.fallbackImage
              ? project.fallbackImage
              : project.image;

          return (
            <a
              key={project.id}
              href={targetUrl}
              target={isWebDev && project.websiteUrl ? "_blank" : "_self"}
              rel="noopener noreferrer"
              className="w-full aspect-[16/10] sm:aspect-[4/3] rounded-[24px] overflow-hidden relative group border border-surface-border shadow-2xs bg-surface"
            >
              {/* Background Image */}
              <Image
                src={imageSrc}
                alt={project.title || project.category}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                onError={() => handleImageError(project.id)}
              />

              {/* Category Label Overlay ONLY for Web Development */}
              {isWebDev && (
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6">
                  <span className="text-xs text-white/80 uppercase tracking-widest block font-medium">
                    {project.category}
                  </span>
                </div>
              )}
            </a>
          );
        })}
      </div>
    </div>
  );
}
