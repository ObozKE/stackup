import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  const exploreLinks = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Projects", href: "/projects" },
    { label: "About", href: "/about" },
    { label: "Insights", href: "/insights" },
  ];

  const utilityLinks = [
    { label: "Web Development", href: "/services#web-development" },
    { label: "Design", href: "/services#design" },
    { label: "Social Media Marketing", href: "/services#social-media-marketing" },
    { label: "Contact Us", href: "/contact" },
  ];

  const socialLinks = [
    { label: "Instagram", href: "https://instagram.com" },
    { label: "LinkedIn", href: "https://linkedin.com" },
    { label: "X / Twitter", href: "https://x.com" },
  ];

  return (
    <footer className="bg-background border-t border-surface-border pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Top Header Row with Wordmark */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Giant Wordmark Section */}
          <div className="lg:col-span-6 space-y-4">
            <Link href="/" className="inline-block group">
              <span className="font-display text-7xl sm:text-8xl md:text-9xl tracking-tighter text-primary block leading-none select-none group-hover:opacity-90 transition-opacity">
                STACKUP
              </span>
            </Link>
            <p className="text-muted-foreground text-lg max-w-md font-sans">
              Creative agency based in Nairobi, Kenya. We engineer high-performance web products, craft iconic design systems, and direct high-impact marketing campaigns.
            </p>
          </div>

          {/* Navigation Columns */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">
            {/* Explore Column */}
            <div className="space-y-4">
              <h3 className="font-display text-sm tracking-widest text-muted-foreground uppercase">
                Explore
              </h3>
              <ul className="space-y-2">
                {exploreLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="inline-flex items-center gap-1 px-4 py-2 bg-surface hover:bg-surface-border text-foreground font-medium text-sm rounded-full transition-all duration-200"
                    >
                      <span>{link.label}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Utilities Column */}
            <div className="space-y-4">
              <h3 className="font-display text-sm tracking-widest text-muted-foreground uppercase">
                Services & Contact
              </h3>
              <ul className="space-y-2">
                {utilityLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="inline-flex items-center gap-1 px-4 py-2 bg-surface hover:bg-surface-border text-foreground font-medium text-sm rounded-full transition-all duration-200"
                    >
                      <span>{link.label}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Contact & Social Strip */}
        <div className="pt-8 border-t border-surface-border grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Email Direct */}
          <div className="md:col-span-6 space-y-1">
            <span className="text-xs uppercase tracking-wider text-muted-foreground block font-medium">
              Start a Conversation
            </span>
            <a
              href="mailto:hello@stackup.co.ke"
              className="font-display text-2xl sm:text-3xl text-foreground hover:text-primary transition-colors underline decoration-primary/40 underline-offset-4"
            >
              hello@stackup.co.ke
            </a>
          </div>

          {/* Social Links */}
          <div className="md:col-span-6 flex flex-wrap items-center md:justify-end gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-surface hover:bg-foreground hover:text-background text-foreground text-xs font-semibold uppercase tracking-wider rounded-full transition-all duration-200 border border-surface-border"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 border-t border-surface-border flex flex-col sm:flex-row items-center justify-between text-xs text-muted-foreground gap-4">
          <p>© {new Date().getFullYear()} Stackup Creative Agency. All rights reserved.</p>
          <p className="font-medium text-foreground">
            Nairobi, Kenya — Serving Global Brands
          </p>
        </div>
      </div>
    </footer>
  );
}
