"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";

export default function OurWorkShowcase() {
  const scrollRef = useRef<HTMLDivElement>(null);

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

  const showcaseCards = [
    {
      id: "card-1",
      title: "Boldway Typographic Statement",
      category: "Brand Poster",
      image: "https://images.unsplash.com/photo-1572949645841-094f3a9c4c94?q=80&w=800&auto=format&fit=crop",
      tag: "BRANDING",
    },
    {
      id: "card-2",
      title: "Émeute Luxury Product Packaging",
      category: "Product & Packaging Design",
      image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=800&auto=format&fit=crop",
      tag: "PACKAGING",
    },
    {
      id: "card-3",
      title: "Client Social & Feed Creation",
      category: "Social Media Campaign",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
      tag: "SOCIAL FEED",
    },
    {
      id: "card-4",
      title: "Before & After Wellness Studio Rebrand",
      category: "UI/UX & Brand Identity",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop",
      tag: "REBRAND",
    },
    {
      id: "card-5",
      title: "Nebula Project Open Call Poster",
      category: "Event Artwork & Motion",
      image: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=800&auto=format&fit=crop",
      tag: "PROMO",
    },
    {
      id: "card-6",
      title: "Contemporary Art Exhibition Catalogue",
      category: "Editorial Design",
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=800&auto=format&fit=crop",
      tag: "EDITORIAL",
    },
  ];

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
          {showcaseCards.map((card) => (
            <Link
              key={card.id}
              href="/projects"
              className="snap-center shrink-0 w-[280px] sm:w-[340px] aspect-[4/5] rounded-[24px] overflow-hidden relative group border border-surface-border shadow-2xs bg-surface"
            >
              {/* Background Image */}
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 280px, 340px"
              />

              {/* Permanently Visible Text & Tags (No Hover Effect) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent flex flex-col justify-between p-6 text-white">
                <span className="text-[11px] uppercase tracking-wider font-bold text-primary bg-white/95 px-3 py-1 rounded-full self-start shadow-xs">
                  {card.tag}
                </span>

                <div className="space-y-1.5">
                  <span className="text-xs text-white/80 uppercase tracking-widest block font-semibold">
                    {card.category}
                  </span>
                  <h3 className="font-display text-2xl uppercase tracking-tight text-white flex items-center justify-between gap-2">
                    <span>{card.title}</span>
                    <ArrowUpRight className="w-5 h-5 shrink-0 text-white/90" />
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
