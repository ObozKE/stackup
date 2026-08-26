"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { Send, CheckCircle } from "lucide-react";

export default function ContactForm() {
  const searchParams = useSearchParams();
  const initialService = searchParams.get("service") || "Web Development";

  const [service, setService] = useState(initialService);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // {{TODO: Post directly to Google Form action endpoint: https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse}}
    setSubmitted(true);
  };

  return (
    <div className="bg-background rounded-[24px] border border-surface-border p-8 sm:p-12 shadow-md">
      <div className="mb-8">
        <h2 className="font-display text-3xl sm:text-4xl text-foreground uppercase tracking-tight mb-2">
          START A PROJECT
        </h2>
        <p className="text-muted-foreground text-sm font-sans">
          Fill in your project details below to submit directly to Stackup Kenya.
        </p>
      </div>

      {submitted ? (
        <div className="p-8 bg-surface rounded-[20px] border border-primary/20 text-center space-y-4 animate-in fade-in duration-300">
          <div className="p-3 bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center mx-auto">
            <CheckCircle className="w-6 h-6" />
          </div>
          <h3 className="font-display text-2xl uppercase text-foreground">
            THANK YOU FOR REACHING OUT!
          </h3>
          <p className="text-muted-foreground text-sm max-w-md mx-auto">
            Your project details have been recorded. We respond to all inquiries instantly.
          </p>
          <div className="pt-4">
            <button
              onClick={() => setSubmitted(false)}
              className="px-6 py-2.5 bg-surface border border-surface-border text-foreground font-medium text-xs rounded-full hover:bg-surface-border transition-colors"
            >
              Submit Another Response
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Field */}
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
              name="entry.1000001" // {{TODO: Replace entry ID with your Google Form field ID}}
              required
              placeholder="e.g. Alex Mwangi"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3.5 rounded-xl bg-surface border border-surface-border text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary transition-colors text-sm font-medium"
            />
          </div>

          {/* Email Field */}
          <div className="space-y-2">
            <label
              htmlFor="email"
              className="text-xs uppercase tracking-widest font-medium text-foreground block"
            >
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="entry.1000002" // {{TODO: Replace entry ID with your Google Form field ID}}
              required
              placeholder="e.g. alex@company.co.ke"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3.5 rounded-xl bg-surface border border-surface-border text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary transition-colors text-sm font-medium"
            />
          </div>

          {/* Service Selection */}
          <div className="space-y-2">
            <label
              htmlFor="service"
              className="text-xs uppercase tracking-widest font-medium text-foreground block"
            >
              Project Service Type *
            </label>
            <select
              id="service"
              name="entry.1000003" // {{TODO: Replace entry ID with your Google Form field ID}}
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="w-full px-4 py-3.5 rounded-xl bg-surface border border-surface-border text-foreground focus:outline-none focus:border-primary transition-colors text-sm font-medium"
            >
              <option value="Web Development">Web Development</option>
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
              name="entry.1000004" // {{TODO: Replace entry ID with your Google Form field ID}}
              rows={5}
              placeholder="Tell us about your project goals, timelines, and requirements..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3.5 rounded-xl bg-surface border border-surface-border text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary transition-colors text-sm font-medium resize-y"
            />
          </div>

          {/* Note on Google Form destination */}
          <p className="text-xs text-muted-foreground">
            * Submissions are recorded directly in our project Google Form database.
          </p>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-4 bg-primary text-primary-foreground font-medium text-base rounded-full hover:bg-primary/90 transition-all duration-200 flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
          >
            <span>Submit Project Request</span>
            <Send className="w-4 h-4" />
          </button>
        </form>
      )}
    </div>
  );
}
