import Link from "next/link";
import { ArrowUpRight, Phone, Mail } from "lucide-react";
import SocialLinks from "@/components/ui/social-links";

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
    { label: "Social Media Management", href: "/services#social-media-management" },
    { label: "Contact Us", href: "/contact" },
  ];

  return (
    <footer className="bg-background border-t border-surface-border pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Top Header Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Wordmark + Contact Info & Socials */}
          <div className="lg:col-span-6 space-y-6">
            <Link href="/" className="inline-block group">
              <span className="font-display text-7xl sm:text-8xl md:text-9xl tracking-tighter text-primary block leading-none select-none group-hover:opacity-90 transition-opacity">
                STACKUP
              </span>
            </Link>

            {/* Direct Contact Info (Regular weight, non-bold) & Socials */}
            <div className="space-y-4 pt-2">
              <span className="text-xs uppercase tracking-widest text-muted-foreground block font-semibold">
                Start a Conversation
              </span>

              <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
                <a
                  href="mailto:stackupke@gmail.com"
                  className="font-sans text-base sm:text-lg font-normal text-foreground/90 hover:text-primary transition-colors underline decoration-primary/40 underline-offset-4 flex items-center gap-2"
                >
                  <Mail className="w-4 h-4 text-primary shrink-0" />
                  <span>stackupke@gmail.com</span>
                </a>
                <a
                  href="tel:0790870596"
                  className="font-sans text-base sm:text-lg font-normal text-foreground/90 hover:text-primary transition-colors underline decoration-primary/40 underline-offset-4 flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-primary shrink-0" />
                  <span>0790870596</span>
                </a>
              </div>

              <div className="pt-2">
                <SocialLinks />
              </div>
            </div>
          </div>

          {/* Right Navigation Columns */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">
            {/* Explore Column */}
            <div className="space-y-4">
              <h3 className="font-display text-sm tracking-widest text-muted-foreground uppercase font-bold">
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
              <h3 className="font-display text-sm tracking-widest text-muted-foreground uppercase font-bold">
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

        {/* Bottom Copyright & Legal Link Bar */}
        <div className="pt-8 border-t border-surface-border flex flex-col sm:flex-row items-center justify-between text-xs text-muted-foreground gap-4">
          <p>© {new Date().getFullYear()} StackupKenya. All rights reserved.</p>
          <Link
            href="/privacy"
            className="font-semibold text-foreground hover:text-primary transition-colors underline decoration-primary/40 underline-offset-4"
          >
            Privacy Policy & Legal Terms
          </Link>
        </div>
      </div>
    </footer>
  );
}
