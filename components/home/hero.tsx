"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Eyebrow Label */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface border border-surface-border mb-8 text-xs font-semibold uppercase tracking-widest text-foreground"
        >
          <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
          <span>Studio • Nairobi, Kenya</span>
        </motion.div>

        {/* Display Heading with Inline Photo Chips */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.9] tracking-tighter text-foreground uppercase max-w-5xl mx-auto"
        >
          WE CRAFT{" "}
          <span className="inline-block align-middle mx-1.5 sm:mx-3 relative w-16 h-10 sm:w-28 sm:h-16 md:w-36 md:h-20 rounded-2xl overflow-hidden shadow-lg border-2 border-background transform -rotate-3 hover:rotate-0 transition-transform duration-300">
            <Image
              src="https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=600&auto=format&fit=crop"
              alt="Web engineering showcase"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 112px, 144px"
              priority
            />
          </span>{" "}
          DIGITAL <br className="hidden sm:inline" />
          EXPERIENCES{" "}
          <span className="inline-block align-middle mx-1.5 sm:mx-3 relative w-16 h-10 sm:w-28 sm:h-16 md:w-36 md:h-20 rounded-2xl overflow-hidden shadow-lg border-2 border-background transform rotate-3 hover:rotate-0 transition-transform duration-300">
            <Image
              src="https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=600&auto=format&fit=crop"
              alt="Brand design artwork"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 112px, 144px"
              priority
            />
          </span>{" "}
          THAT SCALE.
        </motion.h1>

        {/* Subtitle / Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 text-lg sm:text-xl md:text-2xl text-muted-foreground font-sans max-w-2xl mx-auto leading-relaxed"
        >
          Stackup is a full-service creative agency in Nairobi. We build high-performance websites, iconic brand design systems, and high-impact social marketing campaigns.
        </motion.p>

        {/* Hero CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-bold text-base rounded-full hover:bg-primary/90 transition-all duration-200 shadow-md hover:shadow-lg group"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
          <Link
            href="/projects"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-surface border border-surface-border text-foreground font-bold text-base rounded-full hover:bg-surface-border/60 transition-all duration-200"
          >
            <span>View Our Work</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
