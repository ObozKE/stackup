"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export interface GraphicDesignItem {
  id: string;
  title: string;
  medium: string;
  summary: string;
  tags: string[];
  image: string;
  aspect?: string;
}

interface GraphicDesignGalleryProps {
  items: GraphicDesignItem[];
}

export default function GraphicDesignGallery({ items }: GraphicDesignGalleryProps) {
  return (
    <section className="py-16 bg-surface/40 rounded-[28px] border border-surface-border p-6 sm:p-10 my-16">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-surface-border pb-6 gap-4">
        <div>
          <span className="text-xs uppercase tracking-widest text-primary font-bold block mb-2">
            • Curated Visual Showcase •
          </span>
          <h2 className="font-display text-4xl sm:text-6xl uppercase text-foreground">
            GRAPHIC DESIGN GALLERY
          </h2>
        </div>
        <p className="text-muted-foreground text-sm max-w-md font-sans">
          A dedicated masonry collection of posters, social artwork, packaging mockups, and print collateral crafted by Stackup.
        </p>
      </div>

      {/* Masonry / Responsive Grid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
        {items.map((item) => (
          <div
            key={item.id}
            className="break-inside-avoid group relative rounded-[20px] overflow-hidden bg-background border border-surface-border hover:border-primary/40 transition-all duration-300 shadow-sm hover:shadow-md"
          >
            <div className="relative w-full overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                width={800}
                height={1000}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
                <span className="text-[11px] uppercase tracking-wider font-semibold text-primary/90 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full self-start mb-2">
                  {item.medium}
                </span>
                <h3 className="font-display text-xl uppercase tracking-tight text-white mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-white/80 line-clamp-2 mb-3">
                  {item.summary}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] bg-white/20 px-2 py-0.5 rounded-full text-white font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Permanent Minimal Label underneath image for accessibility & visibility */}
            <div className="p-4 border-t border-surface-border flex items-center justify-between">
              <div>
                <h4 className="font-display text-base text-foreground uppercase tracking-tight">
                  {item.title}
                </h4>
                <p className="text-xs text-muted-foreground">{item.medium}</p>
              </div>
              <div className="p-2 rounded-full bg-surface text-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-colors shrink-0">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
