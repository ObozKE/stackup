"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface BrandCarouselCardProps {
  project: {
    id: string;
    title: string;
    category: string;
    image: string;
    fallbackImage?: string;
    images?: string[];
    fallbackImages?: string[];
  };
}

export default function BrandCarouselCard({ project }: BrandCarouselCardProps) {
  const primaryImages = project.images && project.images.length > 0 ? project.images : [project.image];
  const fallbacks = project.fallbackImages && project.fallbackImages.length > 0 ? project.fallbackImages : [project.fallbackImage || project.image];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [failedIndices, setFailedIndices] = useState<Record<number, boolean>>({});

  const totalSlides = primaryImages.length;

  const prevSlide = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const nextSlide = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const handleImageError = (index: number) => {
    setFailedIndices((prev) => ({ ...prev, [index]: true }));
  };

  const currentSrc = failedIndices[currentIndex]
    ? fallbacks[currentIndex] || fallbacks[0] || project.fallbackImage || project.image
    : primaryImages[currentIndex];

  return (
    <div className="w-full aspect-[16/10] sm:aspect-[4/3] rounded-[24px] overflow-hidden relative group border border-surface-border shadow-2xs bg-surface select-none">
      {/* Background Image Carousel Slide */}
      <Image
        key={currentIndex}
        src={currentSrc}
        alt={`${project.title} slide ${currentIndex + 1}`}
        fill
        className="object-cover transition-opacity duration-300"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        onError={() => handleImageError(currentIndex)}
      />

      {/* Slide Count Badge (e.g. 1 / 3) */}
      {totalSlides > 1 && (
        <div className="absolute top-4 right-4 z-10 bg-black/60 backdrop-blur-md text-white text-[11px] font-bold px-2.5 py-1 rounded-full border border-white/20">
          {currentIndex + 1} / {totalSlides}
        </div>
      )}

      {/* Left / Right Arrow Controls */}
      {totalSlides > 1 && (
        <>
          <button
            onClick={prevSlide}
            aria-label="Previous Brand Image"
            className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-black/60 hover:bg-primary text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-all opacity-80 hover:opacity-100 hover:scale-110 active:scale-95"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={nextSlide}
            aria-label="Next Brand Image"
            className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-black/60 hover:bg-primary text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-all opacity-80 hover:opacity-100 hover:scale-110 active:scale-95"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </>
      )}

      {/* Slide Pagination Dots */}
      {totalSlides > 1 && (
        <div className="absolute bottom-4 inset-x-0 z-10 flex items-center justify-center gap-1.5">
          {primaryImages.map((_, idx) => (
            <button
              key={idx}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setCurrentIndex(idx);
              }}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                idx === currentIndex
                  ? "w-6 bg-primary"
                  : "w-1.5 bg-white/50 hover:bg-white/80"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
