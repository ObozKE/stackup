"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight, Phone, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import SocialLinks from "@/components/ui/social-links";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Handle body scroll lock & Escape key
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileMenuOpen]);

  return (
    <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b border-surface-border transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="group flex items-center gap-1.5 focus:outline-none py-2">
          <span className="font-display text-3xl tracking-tight text-foreground group-hover:text-primary transition-colors">
            STACKUP
          </span>
          <span className="h-2.5 w-2.5 rounded-full bg-primary inline-block transition-transform group-hover:scale-125" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-surface p-1.5 rounded-full border border-surface-border">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-full transition-all duration-200",
                  isActive
                    ? "bg-foreground text-background shadow-xs font-semibold"
                    : "text-foreground/80 hover:text-foreground hover:bg-background/60"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Header CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground font-semibold text-sm rounded-full hover:bg-primary/90 transition-all duration-200 shadow-sm hover:shadow group"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Mobile menu trigger with 48px touch target */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden min-w-[48px] min-h-[48px] p-3 rounded-full bg-surface border border-surface-border text-foreground hover:bg-surface-border/50 transition-colors flex items-center justify-center"
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Optimized Mobile Navigation Drawer with Framer Motion */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="md:hidden fixed inset-x-0 top-[81px] bottom-0 bg-background/98 backdrop-blur-xl border-b border-surface-border z-40 overflow-y-auto px-6 py-6 flex flex-col justify-between"
          >
            <div className="space-y-6">
              {/* Navigation Links */}
              <nav className="flex flex-col space-y-2">
                {NAV_ITEMS.map((item, idx) => {
                  const isActive = pathname === item.href;
                  return (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: -15 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.04, duration: 0.2 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={cn(
                          "min-h-[52px] px-5 py-3.5 text-xl font-bold uppercase tracking-tight rounded-2xl flex items-center justify-between transition-all",
                          isActive
                            ? "bg-primary text-primary-foreground shadow-sm"
                            : "bg-surface text-foreground hover:bg-surface-border/60"
                        )}
                      >
                        <span>{item.label}</span>
                        <ArrowUpRight className="w-5 h-5 opacity-70" />
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>
            </div>

            {/* Quick Contact & Social Strip in Mobile Menu */}
            <div className="pt-6 border-t border-surface-border space-y-4">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-4 bg-primary text-primary-foreground font-bold text-base rounded-full text-center hover:bg-primary/90 transition-colors shadow-md"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="w-5 h-5" />
              </Link>

              <div className="flex flex-col gap-2 pt-2 text-xs font-semibold text-muted-foreground">
                <a
                  href="tel:0790870596"
                  className="flex items-center gap-2 text-foreground hover:text-primary py-1"
                >
                  <Phone className="w-4 h-4 text-primary" />
                  <span>0790870596</span>
                </a>
                <a
                  href="mailto:stackupke@gmail.com"
                  className="flex items-center gap-2 text-foreground hover:text-primary py-1"
                >
                  <Mail className="w-4 h-4 text-primary" />
                  <span>stackupke@gmail.com</span>
                </a>
              </div>

              <div className="pt-2">
                <SocialLinks />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
