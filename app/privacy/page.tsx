import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, ArrowLeft, Mail, Phone } from "lucide-react";
import CTABand from "@/components/home/cta-band";

export const metadata: Metadata = {
  title: "Privacy Policy & Legal Terms — Stackup Creative Agency",
  description:
    "Legal policies, terms of service, intellectual property guidelines, and privacy practices protecting Stackup Creative Agency and our clients.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Header with Greyish Surface Background */}
      <section className="py-20 bg-surface/70 border-b border-surface-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground font-semibold hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-background border border-surface-border text-xs font-semibold uppercase tracking-widest text-foreground">
            <ShieldCheck className="w-4 h-4 text-primary" />
            <span>• Legal & Privacy •</span>
          </div>
          <h1 className="font-display text-4xl sm:text-6xl uppercase tracking-tight text-foreground">
            LEGAL & PRIVACY.
          </h1>
          <p className="text-sm text-muted-foreground font-sans">
            Last Updated: August 2026 • Governed by the Laws of Kenya
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 text-foreground font-sans leading-relaxed">
          {/* Section 1: Overview */}
          <div className="space-y-4">
            <h2 className="font-display text-2xl uppercase tracking-tight text-foreground">
              1. Overview & Acceptance
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base">
              Welcome to Stackup (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). By engaging with our website, commissioning creative services (Web Development, Graphic Design, Brand Design, Product Design, or Social Media Management), or submitting project briefs, you agree to comply with and be bound by the following legal policies and terms.
            </p>
          </div>

          {/* Section 2: Intellectual Property */}
          <div className="space-y-4 pt-6 border-t border-surface-border">
            <h2 className="font-display text-2xl uppercase tracking-tight text-foreground">
              2. Intellectual Property Rights
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base">
              All proprietary agency frameworks, original design concepts, source code repositories, and brand materials created by Stackup remain the intellectual property of Stackup until all agreed project invoices are settled in full. Upon final payment, ownership of customized client deliverables is transferred as defined in the client project agreement.
            </p>
          </div>

          {/* Section 3: Data Protection & Privacy */}
          <div className="space-y-4 pt-6 border-t border-surface-border">
            <h2 className="font-display text-2xl uppercase tracking-tight text-foreground">
              3. Data Protection & Privacy (Kenya DPA 2019)
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base">
              Stackup respects your privacy and adheres to the Kenya Data Protection Act (2019). Information collected through our contact form (such as your name, email address, phone number, and project details) is strictly used to evaluate and fulfill your creative requests. We do not sell, trade, or distribute your personal data to third parties.
            </p>
          </div>

          {/* Section 4: Limitation of Liability */}
          <div className="space-y-4 pt-6 border-t border-surface-border">
            <h2 className="font-display text-2xl uppercase tracking-tight text-foreground">
              4. Limitation of Liability
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base">
              While Stackup engineers all web applications and visual designs to elite professional standards, Stackup shall not be held liable for indirect, incidental, or consequential damages resulting from third-party hosting outages, external API modifications, or unauthorized client access post-handover.
            </p>
          </div>

          {/* Section 5: Timelines & Client Responsibilities */}
          <div className="space-y-4 pt-6 border-t border-surface-border">
            <h2 className="font-display text-2xl uppercase tracking-tight text-foreground">
              5. Project Timelines & Client Assets
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base">
              Our standard project completion window is 1 to 4 weeks. Turnaround schedules rely on timely delivery of client brand assets, copy, feedback, and approval sign-offs.
            </p>
          </div>

          {/* Contact Details */}
          <div className="p-8 rounded-[24px] bg-surface border border-surface-border space-y-4 mt-8">
            <h3 className="font-display text-xl uppercase text-foreground">
              Legal & Privacy Inquiries
            </h3>
            <p className="text-xs text-muted-foreground">
              If you have questions regarding these terms, contact our team directly:
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-sm font-semibold text-foreground">
              <a href="mailto:stackupke@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Mail className="w-4 h-4 text-primary" />
                <span>stackupke@gmail.com</span>
              </a>
              <a href="tel:0790870596" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Phone className="w-4 h-4 text-primary" />
                <span>0790870596</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
