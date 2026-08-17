"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import featuredData from "@/content/featured-work.json";

export default function OurWorkShowcase() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [imgErrors, setImgErrors] = useState<Record<string, boolean>>({});

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

  const handleImageError = (id: string) => {
    setImgErrors((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section className="py-24 bg-background border-t border-surface-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Standard Section Header matching all other homepage sections */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-surface-border gap-6">
          <div>
            <span className="text-xs uppercase tracking-widest text-primary font-bold block mb-2">
              • Portfolio Showcase •
            </span>
            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl uppercase text-foreground">
              FEATURED WORK
            </h2>
          </div>
          
          <div className="flex items-center gap-4">
            {/* Scroll Navigation Buttons */}
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
              className="inline-flex items-center gap-2 text-sm font-bold text-foreground hover:text-primary transition-colors group"
            >
              <span>View All Projects</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </div>
        </div>

        {/* Horizontal Scroll Track */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-none py-2 snap-x snap-mandatory scroll-smooth -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {featuredData.map((card) => {
            const imageSrc = imgErrors[card.id] ? card.fallbackImage : card.image;

            return (
              <Link
                key={card.id}
                href="/projects"
                className="snap-center shrink-0 w-[280px] sm:w-[340px] aspect-[4/5] rounded-[24px] overflow-hidden relative group border border-surface-border shadow-2xs bg-surface"
              >
                {/* Background Image */}
                <Image
                  src={imageSrc}
                  alt={card.category}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 280px, 340px"
                  onError={() => handleImageError(card.id)}
                />

                {/* Only Category Label Remaining */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6">
                  <span className="text-xs text-white/80 uppercase tracking-widest block font-semibold">
                    {card.category}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
