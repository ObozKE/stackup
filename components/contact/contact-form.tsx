"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { Send, CheckCircle, Loader2, AlertCircle } from "lucide-react";

export default function ContactForm() {
  const searchParams = useSearchParams();
  const initialService = searchParams.get("service") || "Web Development";

  const [service, setService] = useState(initialService);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          service: service,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitted(true);
      } else {
        // Direct fallback: submit via no-cors URL-encoded fetch
        const GOOGLE_FORM_URL =
          "https://docs.google.com/forms/d/e/1FAIpQLSdfKWbT7wMOLjmjNI4OAx6A4_3ub9zqAXcppGYHgZjU371bTA/formResponse";
        const formParams = new URLSearchParams();
        formParams.append("entry.47284777", formData.name.trim());
        formParams.append("entry.1630308019", formData.phone.trim());
        formParams.append("entry.1438439933", formData.email.trim());
        formParams.append("entry.448324612", service);
        formParams.append("entry.387243583", formData.message.trim());

        await fetch(GOOGLE_FORM_URL, {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: formParams.toString(),
        });

        setSubmitted(true);
      }
    } catch {
      // Direct client fallback in case network throws
      try {
        const GOOGLE_FORM_URL =
          "https://docs.google.com/forms/d/e/1FAIpQLSdfKWbT7wMOLjmjNI4OAx6A4_3ub9zqAXcppGYHgZjU371bTA/formResponse";
        const formParams = new URLSearchParams();
        formParams.append("entry.47284777", formData.name.trim());
        formParams.append("entry.1630308019", formData.phone.trim());
        formParams.append("entry.1438439933", formData.email.trim());
        formParams.append("entry.448324612", service);
        formParams.append("entry.387243583", formData.message.trim());

        await fetch(GOOGLE_FORM_URL, {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: formParams.toString(),
        });

        setSubmitted(true);
      } catch {
        setErrorMessage(
          "Could not submit automatically. Please reach us directly on WhatsApp or call 0790870596."
        );
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-background rounded-[24px] border border-surface-border p-8 sm:p-12 shadow-md">
      <div className="mb-8">
        <h2 className="font-display text-3xl sm:text-4xl text-foreground uppercase tracking-tight mb-2">
          START A PROJECT
        </h2>
        <p className="text-muted-foreground text-sm font-sans">
          Tell us about your software, AI automation, web development, or design project to receive an instant proposal.
        </p>
      </div>

      {submitted ? (
        <div className="p-8 bg-surface rounded-[20px] border border-primary/20 text-center space-y-4 animate-in fade-in duration-300">
          <div className="p-3 bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center mx-auto shadow-md">
            <CheckCircle className="w-6 h-6" />
          </div>
          <h3 className="font-display text-2xl uppercase text-foreground">
            THANK YOU FOR REACHING OUT!
          </h3>
          <p className="text-muted-foreground text-sm max-w-md mx-auto">
            Your project details have been recorded in our system. Our engineering team will review your brief and contact you shortly.
          </p>
          <div className="pt-4">
            <button
              onClick={() => {
                setSubmitted(false);
                setFormData({ name: "", phone: "", email: "", message: "" });
              }}
              className="px-6 py-2.5 bg-surface border border-surface-border text-foreground font-medium text-xs rounded-full hover:bg-surface-border transition-colors cursor-pointer"
            >
              Submit Another Response
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {errorMessage && (
            <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-600 flex items-start gap-3 text-sm">
              <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Name Field (Mandatory) */}
          <div className="space-y-2">
            <label
              htmlFor="name"
              className="text-xs uppercase tracking-widest font-medium text-foreground block"
            >
              Your Name *
            </label>
            <input
              type="text"
              id="name"
              required
              placeholder="e.g. Alex Mwangi"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3.5 rounded-xl bg-surface border border-surface-border text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary transition-colors text-sm font-medium"
            />
          </div>

          {/* Phone Field (Mandatory) */}
          <div className="space-y-2">
            <label
              htmlFor="phone"
              className="text-xs uppercase tracking-widest font-medium text-foreground block"
            >
              Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              required
              placeholder="e.g. 0712 345 678"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-4 py-3.5 rounded-xl bg-surface border border-surface-border text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary transition-colors text-sm font-medium"
            />
          </div>

          {/* Email Field (Optional) */}
          <div className="space-y-2">
            <label
              htmlFor="email"
              className="text-xs uppercase tracking-widest font-medium text-foreground block"
            >
              Email Address (Optional)
            </label>
            <input
              type="email"
              id="email"
              placeholder="e.g. alex@company.co.ke"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3.5 rounded-xl bg-surface border border-surface-border text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary transition-colors text-sm font-medium"
            />
          </div>

          {/* Service Selection (Mandatory) */}
          <div className="space-y-2">
            <label
              htmlFor="service"
              className="text-xs uppercase tracking-widest font-medium text-foreground block"
            >
              Project Service Type *
            </label>
            <select
              id="service"
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="w-full px-4 py-3.5 rounded-xl bg-surface border border-surface-border text-foreground focus:outline-none focus:border-primary transition-colors text-sm font-medium cursor-pointer"
            >
              <option value="Web Development">Web Development</option>
              <option value="Custom Software Development">Custom Software Development (POS, CRM, ERP)</option>
              <option value="AI Integration">AI Integration & Automation</option>
              <option value="Graphic Design">Graphic Design</option>
              <option value="Brand Design">Brand Design</option>
              <option value="Product Design">Product Design</option>
              <option value="Social Media Management">Social Media Management</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Project Details Message (Optional) */}
          <div className="space-y-2">
            <label
              htmlFor="message"
              className="text-xs uppercase tracking-widest font-medium text-foreground block"
            >
              Project Brief / Details (Optional)
            </label>
            <textarea
              id="message"
              rows={5}
              placeholder="Tell us about your software specifications, AI requirements, web features, design goals, or timeline..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3.5 rounded-xl bg-surface border border-surface-border text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary transition-colors text-sm font-medium resize-y"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 bg-primary text-primary-foreground font-medium text-base rounded-full hover:bg-primary/90 transition-all duration-200 flex items-center justify-center gap-2 shadow-md hover:shadow-lg disabled:opacity-70 cursor-pointer"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Submitting Project Brief...</span>
              </>
            ) : (
              <>
                <span>Submit Project Request</span>
                <Send className="w-4 h-4" />
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
