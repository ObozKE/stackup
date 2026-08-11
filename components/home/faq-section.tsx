"use client";

import { useState } from "react";
import Link from "next/link";
import { Plus, Minus, ArrowUpRight } from "lucide-react";
import faqsData from "@/content/faqs.json";

export default function FAQSection() {
  const [openId, setOpenId] = useState<string | null>(faqsData[0]?.id || null);

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
            <span className="text-xs uppercase tracking-widest text-primary font-bold block">
              • Clarification •
            </span>
            <h2 className="font-display text-5xl sm:text-6xl md:text-7xl uppercase text-foreground leading-none">
              FAQ
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg max-w-md font-sans">
              Have questions about how Stackup collaborates with clients? Here are quick answers to our most frequent inquiries.
            </p>
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background font-bold text-sm rounded-full hover:bg-primary hover:text-primary-foreground transition-all group"
              >
                <span>Have More Questions?</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>

          {/* Right Column Accordion */}
          <div className="lg:col-span-7 space-y-4">
            {faqsData.map((faq, index) => {
              const isOpen = openId === faq.id;
              const formattedNumber = String(index + 1).padStart(2, "0");

              return (
                <div
                  key={faq.id}
                  className="rounded-[20px] bg-surface border border-surface-border overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none group"
                  >
                    <div className="flex items-center gap-4">
                      <span className="font-display text-lg text-primary font-bold">
                        {formattedNumber}
                      </span>
                      <h3 className="font-display text-xl sm:text-2xl text-foreground uppercase tracking-tight group-hover:text-primary transition-colors">
                        {faq.question}
                      </h3>
                    </div>
                    <div className="p-2 rounded-full bg-background border border-surface-border text-foreground group-hover:border-primary shrink-0 transition-colors">
                      {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-2 border-t border-surface-border/60 text-muted-foreground font-sans text-sm sm:text-base leading-relaxed animate-in fade-in duration-200">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
