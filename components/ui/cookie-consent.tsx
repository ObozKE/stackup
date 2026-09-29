"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Cookie, ShieldCheck, Check, X, SlidersHorizontal } from "lucide-react";

interface CookiePreferences {
  essential: boolean;
  analytics: boolean;
  functional: boolean;
  timestamp: string;
}

const STORAGE_KEY = "stackup_cookie_consent";

export default function CookieConsent() {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);

  const [preferences, setPreferences] = useState<CookiePreferences>({
    essential: true,
    analytics: true,
    functional: true,
    timestamp: "",
  });

  // Apply Google Analytics consent status
  const updateGoogleConsent = (analyticsGranted: boolean) => {
    if (typeof window !== "undefined" && typeof (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag === "function") {
      (window as unknown as { gtag: (...args: unknown[]) => void }).gtag("consent", "update", {
        analytics_storage: analyticsGranted ? "granted" : "denied",
        ad_storage: analyticsGranted ? "granted" : "denied",
      });
    }
  };

  useEffect(() => {
    setMounted(true);
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed: CookiePreferences = JSON.parse(saved);
        setPreferences(parsed);
        updateGoogleConsent(parsed.analytics);
      } else {
        // Show banner after brief delay for smooth user experience
        const timer = setTimeout(() => setVisible(true), 800);
        return () => clearTimeout(timer);
      }
    } catch {
      setVisible(true);
    }

    // Global listener so users can re-open settings from Footer anytime
    const handleOpenSettings = () => {
      setVisible(true);
      setShowPreferences(true);
    };

    window.addEventListener("openCookieSettings", handleOpenSettings);
    return () => window.removeEventListener("openCookieSettings", handleOpenSettings);
  }, []);

  const savePreferences = (prefs: CookiePreferences) => {
    const data: CookiePreferences = {
      ...prefs,
      essential: true,
      timestamp: new Date().toISOString(),
    };
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
      document.cookie = `cookie_consent_status=${data.analytics ? "accepted" : "declined"}; path=/; max-age=31536000; SameSite=Lax; Secure`;
    } catch {
      // Ignore storage errors
    }
    setPreferences(data);
    updateGoogleConsent(data.analytics);
    setVisible(false);
    setShowPreferences(false);
  };

  const handleAcceptAll = () => {
    savePreferences({
      essential: true,
      analytics: true,
      functional: true,
      timestamp: "",
    });
  };

  const handleDeclineNonEssential = () => {
    savePreferences({
      essential: true,
      analytics: false,
      functional: false,
      timestamp: "",
    });
  };

  const handleSaveCustom = () => {
    savePreferences(preferences);
  };

  if (!mounted || !visible) return null;

  return (
    <>
      {/* Main Cookie Banner (Fixed Bottom Float) */}
      {!showPreferences && (
        <aside
          role="region"
          aria-label="Cookie Consent Banner"
          className="fixed bottom-4 sm:bottom-6 inset-x-4 sm:inset-x-auto sm:right-6 sm:max-w-md z-50 animate-in fade-in slide-in-from-bottom-5 duration-300"
        >
          <div className="bg-background/95 backdrop-blur-md border border-surface-border p-6 rounded-[24px] shadow-2xl space-y-4 text-foreground">
            {/* Header Badge */}
            <div className="flex items-center justify-between">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-surface-border text-xs font-semibold uppercase tracking-wider text-foreground">
                <Cookie className="w-3.5 h-3.5 text-primary" />
                <span>Cookie Preferences</span>
              </div>
              <button
                onClick={handleDeclineNonEssential}
                aria-label="Dismiss and accept necessary cookies only"
                className="text-muted-foreground hover:text-foreground transition-colors p-1 rounded-full hover:bg-surface"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Description */}
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              We use cookies to improve website functionality, analyze traffic performance, and tailor user experience. You can choose your preferences or accept all cookies.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col gap-2 pt-1">
              <button
                onClick={handleAcceptAll}
                className="w-full py-2.5 px-4 bg-primary text-primary-foreground font-semibold text-xs rounded-full hover:bg-primary/90 transition-colors shadow-xs"
              >
                Accept All Cookies
              </button>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleDeclineNonEssential}
                  className="flex-1 py-2 px-3 bg-surface hover:bg-surface-border text-foreground font-medium text-xs rounded-full border border-surface-border transition-colors text-center"
                >
                  Necessary Only
                </button>
                <button
                  onClick={() => setShowPreferences(true)}
                  className="flex-1 py-2 px-3 bg-surface hover:bg-surface-border text-foreground font-medium text-xs rounded-full border border-surface-border transition-colors flex items-center justify-center gap-1.5"
                >
                  <SlidersHorizontal className="w-3.5 h-3.5" />
                  <span>Customize</span>
                </button>
              </div>
            </div>

            {/* Legal Link */}
            <div className="text-[11px] text-muted-foreground text-center pt-1 border-t border-surface-border">
              Read our{" "}
              <Link
                href="/privacy"
                className="text-foreground underline underline-offset-2 hover:text-primary transition-colors font-medium"
              >
                Privacy &amp; Cookie Policy
              </Link>
            </div>
          </div>
        </aside>
      )}

      {/* Preferences Modal */}
      {showPreferences && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="cookie-modal-title"
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200"
        >
          <div className="bg-background border border-surface-border max-w-lg w-full rounded-[24px] shadow-2xl p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex items-start justify-between pb-4 border-b border-surface-border">
              <div className="space-y-1">
                <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-primary font-bold">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Privacy Center</span>
                </div>
                <h2 id="cookie-modal-title" className="font-display text-2xl uppercase tracking-tight text-foreground">
                  Cookie Settings
                </h2>
              </div>
              <button
                onClick={() => setShowPreferences(false)}
                aria-label="Close modal"
                className="p-2 rounded-full hover:bg-surface text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Customize your cookie preferences below. Essential cookies cannot be turned off as they are required for security and core site functionality.
            </p>

            {/* Cookie Categories */}
            <div className="space-y-4">
              {/* Essential */}
              <div className="p-4 rounded-2xl bg-surface border border-surface-border space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-sm text-foreground">
                    Strictly Necessary Cookies
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-primary px-2.5 py-0.5 rounded-full bg-primary/10 border border-primary/20">
                    Always Active
                  </span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Required for site navigation, security verification, session integrity, and remembering privacy choices.
                </p>
              </div>

              {/* Analytics */}
              <div className="p-4 rounded-2xl bg-surface border border-surface-border space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-sm text-foreground">
                    Analytics &amp; Performance Cookies
                  </span>
                  <button
                    type="button"
                    role="switch"
                    aria-checked={preferences.analytics}
                    onClick={() =>
                      setPreferences((prev) => ({ ...prev, analytics: !prev.analytics }))
                    }
                    className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-hidden ${
                      preferences.analytics ? "bg-primary" : "bg-muted-foreground/30"
                    }`}
                  >
                    <span
                      className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-md ring-0 transition duration-200 ease-in-out ${
                        preferences.analytics ? "translate-x-5" : "translate-x-0"
                      }`}
                    />
                  </button>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Helps us analyze user interactions anonymously to improve website speed, navigation flow, and user experience (e.g. Google Analytics).
                </p>
              </div>

              {/* Functional */}
              <div className="p-4 rounded-2xl bg-surface border border-surface-border space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-sm text-foreground">
                    Functional &amp; Experience Cookies
                  </span>
                  <button
                    type="button"
                    role="switch"
                    aria-checked={preferences.functional}
                    onClick={() =>
                      setPreferences((prev) => ({ ...prev, functional: !prev.functional }))
                    }
                    className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-hidden ${
                      preferences.functional ? "bg-primary" : "bg-muted-foreground/30"
                    }`}
                  >
                    <span
                      className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-md ring-0 transition duration-200 ease-in-out ${
                        preferences.functional ? "translate-x-5" : "translate-x-0"
                      }`}
                    />
                  </button>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Enables advanced interactive features and remembers user selections across visits.
                </p>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 border-t border-surface-border">
              <button
                onClick={handleSaveCustom}
                className="w-full sm:flex-1 py-3 px-5 bg-foreground text-background font-semibold text-xs uppercase tracking-wider rounded-full hover:bg-primary hover:text-primary-foreground transition-colors text-center"
              >
                Save Preferences
              </button>
              <button
                onClick={handleAcceptAll}
                className="w-full sm:flex-1 py-3 px-5 bg-primary text-primary-foreground font-semibold text-xs uppercase tracking-wider rounded-full hover:bg-primary/90 transition-colors text-center shadow-xs flex items-center justify-center gap-1.5"
              >
                <Check className="w-4 h-4" />
                <span>Accept All</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
