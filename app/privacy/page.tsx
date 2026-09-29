import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, ArrowLeft, Mail, Phone, Cookie } from "lucide-react";
import CTABand from "@/components/home/cta-band";
import CookieSettingsButton from "@/components/ui/cookie-settings-button";

export const metadata: Metadata = {
  title: "Privacy Policy & Cookie Terms — Stackup Kenya",
  description:
    "Legal policies, terms of service, cookie practices, and data protection guidelines protecting Stackup Kenya and our clients.",
  alternates: {
    canonical: "https://stackupkenya.studio/privacy",
  },
  openGraph: {
    title: "Privacy Policy & Cookie Terms — Stackup Kenya",
    description:
      "Legal policies, terms of service, and cookie privacy practices for Stackup Kenya.",
    url: "https://stackupkenya.studio/privacy",
    siteName: "Stackup Kenya",
  },
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
            <span>• Legal &amp; Privacy •</span>
          </div>
          <h1 className="font-display text-4xl sm:text-6xl uppercase tracking-tight text-foreground">
            LEGAL &amp; PRIVACY.
          </h1>
          <p className="text-sm text-muted-foreground font-sans">
            Last Updated: September 2026 • Governed by the Laws of Kenya
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 text-foreground font-sans leading-relaxed">
          {/* Section 1: Overview */}
          <div className="space-y-4">
            <h2 className="font-display text-2xl uppercase tracking-tight text-foreground">
              1. Overview &amp; Acceptance
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base">
              Welcome to Stackup Kenya (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). By engaging with our website (https://stackupkenya.studio), commissioning engineering services (Custom Software Development, POS/CRM Systems, AI Integration, Web Development, Brand Design, or Social Media Management), or submitting inquiries, you agree to comply with and be bound by the following legal policies and terms.
            </p>
          </div>

          {/* Section 2: Intellectual Property */}
          <div className="space-y-4 pt-6 border-t border-surface-border">
            <h2 className="font-display text-2xl uppercase tracking-tight text-foreground">
              2. Intellectual Property Rights
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base">
              All proprietary agency frameworks, original software code, visual artwork, and design assets developed by Stackup Kenya remain the intellectual property of Stackup Kenya until all agreed project milestones and invoices are settled in full. Upon final payment, ownership of custom software deliverables and brand assets is transferred as defined in the client contract.
            </p>
          </div>

          {/* Section 3: Data Protection & Privacy */}
          <div className="space-y-4 pt-6 border-t border-surface-border">
            <h2 className="font-display text-2xl uppercase tracking-tight text-foreground">
              3. Data Protection &amp; Privacy (Kenya DPA 2019)
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base">
              Stackup Kenya respects your privacy and strictly adheres to the Kenya Data Protection Act (2019). Personal information submitted through our contact forms (such as your name, business email, phone number, and project requirements) is used exclusively to evaluate, respond to, and deliver your project requests. We do not sell, lease, or monetize client personal data to third parties.
            </p>
          </div>

          {/* Section 4: Cookie Policy */}
          <div className="space-y-4 pt-6 border-t border-surface-border">
            <div className="flex items-center gap-2">
              <Cookie className="w-5 h-5 text-primary" />
              <h2 className="font-display text-2xl uppercase tracking-tight text-foreground">
                4. Cookie Policy &amp; Tracking Technologies
              </h2>
            </div>
            <p className="text-muted-foreground text-sm sm:text-base">
              Cookies are small text files placed on your device to enhance site navigation, protect security, and analyze digital performance. We categorize cookies into three groups:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-surface border border-surface-border space-y-2">
                <span className="text-xs uppercase tracking-wider font-bold text-foreground block">
                  • Strictly Necessary
                </span>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Essential for website security, routing, session integrity, and remembering your consent preferences. These cannot be disabled.
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-surface border border-surface-border space-y-2">
                <span className="text-xs uppercase tracking-wider font-bold text-foreground block">
                  • Analytics &amp; Performance
                </span>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Anonymized metrics (via Google Analytics gtag.js) measuring page engagement, Core Web Vitals, and browser response times to help us optimize user speed.
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-surface border border-surface-border space-y-2">
                <span className="text-xs uppercase tracking-wider font-bold text-foreground block">
                  • Functional &amp; Marketing
                </span>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Preserves interactive preferences, consultation modal states, and referral attribution across visits.
                </p>
              </div>
            </div>
            <div className="pt-2 flex items-center gap-3">
              <span className="text-xs text-muted-foreground">
                Want to adjust your cookie preferences?
              </span>
              <CookieSettingsButton />
            </div>
          </div>

          {/* Section 5: Limitation of Liability */}
          <div className="space-y-4 pt-6 border-t border-surface-border">
            <h2 className="font-display text-2xl uppercase tracking-tight text-foreground">
              5. Limitation of Liability
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base">
              While Stackup Kenya engineers software architectures and web applications to world-class security and performance standards, Stackup Kenya shall not be held liable for indirect, incidental, or consequential damages resulting from third-party cloud infrastructure outages, external payment gateway API changes, or unauthorized client access post-handover.
            </p>
          </div>

          {/* Section 6: Timelines & Client Responsibilities */}
          <div className="space-y-4 pt-6 border-t border-surface-border">
            <h2 className="font-display text-2xl uppercase tracking-tight text-foreground">
              6. Project Timelines &amp; Delivery Schedules
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base">
              Standard turnaround schedules range between 1 to 6 weeks depending on product scope. Milestones depend on prompt client provision of content, design feedback, and staging environment review sign-offs.
            </p>
          </div>

          {/* Contact Details */}
          <div className="p-8 rounded-[24px] bg-surface border border-surface-border space-y-4 mt-8">
            <h3 className="font-display text-xl uppercase text-foreground">
              Legal, Privacy &amp; Cookie Inquiries
            </h3>
            <p className="text-xs text-muted-foreground">
              If you have questions regarding our legal terms or cookie policies, contact our data compliance team:
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
