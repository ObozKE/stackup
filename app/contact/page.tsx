import type { Metadata } from "next";
import { Suspense } from "react";
import ContactForm from "@/components/contact/contact-form";
import SocialLinks from "@/components/ui/social-links";
import { Mail, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us — Stackup Creative Agency",
  description:
    "Get in touch with Stackup, a creative agency in Nairobi, Kenya. Send your project brief for Web Development, Design, or Social Media Management.",
};

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="py-20 bg-background border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface border border-surface-border text-xs font-semibold uppercase tracking-widest text-foreground">
            <span>• Get In Touch •</span>
          </div>
          <h1 className="font-display text-5xl sm:text-7xl md:text-8xl uppercase tracking-tighter text-foreground max-w-4xl">
            LET&apos;S TALK ABOUT YOUR NEXT PROJECT.
          </h1>
        </div>
      </section>

      {/* Main Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            {/* Left Info Column */}
            <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-28">
              <div className="space-y-4">
                <span className="text-xs uppercase tracking-widest text-primary font-bold block">
                  • Direct Reach •
                </span>
                <h2 className="font-display text-3xl sm:text-4xl text-foreground uppercase tracking-tight">
                  CONNECT DIRECTLY WITH OUR TEAM
                </h2>
                <p className="text-muted-foreground text-base leading-relaxed">
                  We respond to all project inquiries within 24 business hours.
                </p>
              </div>

              {/* Email Card */}
              <div className="p-8 rounded-[20px] bg-surface border border-surface-border space-y-4">
                <div className="flex items-center gap-3 text-primary">
                  <Mail className="w-6 h-6" />
                  <span className="text-xs uppercase tracking-widest font-bold text-foreground">
                    Email Inquiries
                  </span>
                </div>
                <a
                  href="mailto:stackupke@gmail.com"
                  className="font-display text-2xl sm:text-3xl text-foreground hover:text-primary transition-colors underline decoration-primary/40 block break-words"
                >
                  stackupke@gmail.com
                </a>
              </div>

              {/* Phone Card */}
              <div className="p-8 rounded-[20px] bg-surface border border-surface-border space-y-4">
                <div className="flex items-center gap-3 text-primary">
                  <Phone className="w-6 h-6" />
                  <span className="text-xs uppercase tracking-widest font-bold text-foreground">
                    Call / WhatsApp Us
                  </span>
                </div>
                <a
                  href="tel:0790870596"
                  className="font-display text-2xl sm:text-3xl text-foreground hover:text-primary transition-colors underline decoration-primary/40 block"
                >
                  0790870596
                </a>
              </div>

              {/* Social Channels with SVG Icons */}
              <div className="space-y-3 pt-2">
                <span className="text-xs uppercase tracking-widest font-bold text-muted-foreground block">
                  Follow Stackup
                </span>
                <SocialLinks />
              </div>
            </div>

            {/* Right Contact Form Column with Suspense Boundary */}
            <div className="lg:col-span-7">
              <Suspense
                fallback={
                  <div className="bg-background rounded-[24px] border border-surface-border p-12 text-center text-muted-foreground">
                    Loading contact form...
                  </div>
                }
              >
                <ContactForm />
              </Suspense>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
