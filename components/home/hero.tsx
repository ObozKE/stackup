"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-8 pb-16 md:pt-12 md:pb-24 overflow-hidden bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Eyebrow Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface border border-surface-border mb-6 text-xs font-semibold uppercase tracking-widest text-foreground"
        >
          <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
          <span>Creative Studio</span>
        </motion.div>

        {/* Display Heading with Bold Typography */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display font-bold text-5xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.9] tracking-tighter text-foreground uppercase max-w-5xl mx-auto"
        >
          WE{" "}
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
          CRAFT DIGITAL <br className="hidden sm:inline" />
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
          EXPERIENCES THAT SCALE.
        </motion.h1>

        {/* Hero CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 md:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
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
