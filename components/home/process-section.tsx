import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function ProcessSection() {
  const steps = [
    {
      number: "01",
      title: "Discovery & Strategy",
      description:
        "We uncover your business objectives, target audience insights, and market position to establish a strategic roadmap for your digital presence.",
    },
    {
      number: "02",
      title: "Creative Direction",
      description:
        "We craft moodboards, visual concepts, architecture blueprints, and design systems that embody your brand identity before pixel-perfect execution.",
    },
    {
      number: "03",
      title: "Design & Development",
      description:
        "We engineer responsive, accessible web applications and produce high-impact graphic design collateral using cutting-edge standards.",
    },
    {
      number: "04",
      title: "Launch & Support",
      description:
        "Rigorous cross-browser testing, SEO optimization, and seamless deployment followed by continuous support and growth marketing.",
    },
  ];

  return (
    <section className="py-24 bg-surface/50 border-y border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Headline + Intro + CTA */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
            <span className="text-xs uppercase tracking-widest text-primary font-medium block">
              • Blueprint •
            </span>
            <h2 className="font-display text-5xl sm:text-6xl md:text-7xl uppercase text-foreground leading-none">
              OUR PROCESS
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg max-w-md font-sans">
              Every project follows a structured creative framework. We bridge strategy and execution to deliver predictable, exceptional results on time.
            </p>
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium text-sm rounded-full hover:bg-primary/90 transition-all shadow-sm group"
              >
                <span>Initiate Your Project</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>

          {/* Right Column: Stacked Cards */}
          <div className="lg:col-span-7 space-y-6">
            {steps.map((step) => (
              <div
                key={step.number}
                className="p-8 rounded-[20px] bg-background border border-surface-border hover:border-primary/40 transition-all duration-300 shadow-2xs group"
              >
                <div className="flex items-start gap-6">
                  <div className="font-display text-xl sm:text-2xl text-primary-foreground bg-primary w-12 h-12 rounded-full flex items-center justify-center shrink-0 shadow-xs">
                    {step.number}
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-display text-2xl text-foreground uppercase tracking-tight group-hover:text-primary transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
