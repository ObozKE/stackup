import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function CTABand() {
  return (
    <section className="py-20 sm:py-32 bg-background border-t border-surface-border relative overflow-hidden">
      {/* Subtle Background Radial Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
        <span className="text-xs uppercase tracking-widest text-primary font-bold inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20">
          • Ready to Elevate Your Brand? •
        </span>

        <h2 className="font-display text-3xl sm:text-7xl md:text-8xl lg:text-9xl uppercase tracking-tighter text-foreground leading-[0.92] sm:leading-[0.88] max-w-5xl mx-auto break-words sm:break-normal">
          LET&apos;S BUILD SOMETHING EXTRAORDINARY.
        </h2>

        <div className="pt-4 flex items-center justify-center">
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-9 py-4 bg-primary text-primary-foreground font-bold text-base rounded-full hover:bg-primary/90 transition-all shadow-md hover:shadow-lg group"
          >
            <span>Start Your Project</span>
            <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
