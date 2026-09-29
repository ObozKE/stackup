"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Cookie, X } from "lucide-react";

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

  const updateGoogleConsent = (analyticsGranted: boolean) => {
    if (
      typeof window !== "undefined" &&
      typeof (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag === "function"
    ) {
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
        const timer = setTimeout(() => setVisible(true), 1000);
        return () => clearTimeout(timer);
      }
    } catch {
      setVisible(true);
    }

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

  const handleDecline = () => {
    savePreferences({
      essential: true,
      analytics: false,
      functional: false,
      timestamp: "",
    });
  };

  if (!mounted || !visible) return null;

  return (
    <>
      {/* Minimalist Floating Pill Banner */}
      {!showPreferences && (
        <aside
          role="region"
          aria-label="Cookie consent banner"
          className="fixed bottom-4 sm:bottom-6 left-4 right-4 sm:left-auto sm:right-6 z-50 animate-in fade-in slide-in-from-bottom-3 duration-300 pointer-events-auto"
        >
          <div className="bg-background/95 backdrop-blur-md border border-surface-border py-3 px-4 sm:px-5 rounded-2xl shadow-xl flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5 max-w-lg text-foreground">
            <div className="flex items-center gap-2.5 flex-1 min-w-0">
              <Cookie className="w-4 h-4 text-primary shrink-0" />
              <p className="text-xs text-muted-foreground leading-snug">
                We use cookies to improve your browsing experience.{" "}
                <Link
                  href="/privacy"
                  className="underline underline-offset-2 hover:text-foreground transition-colors font-medium"
                >
                  Privacy
                </Link>
              </p>
            </div>

            <div className="flex items-center gap-2 shrink-0 self-end sm:self-auto">
              <button
                onClick={() => setShowPreferences(true)}
                className="text-[11px] font-medium text-muted-foreground hover:text-foreground px-2 py-1 transition-colors cursor-pointer"
              >
                Settings
              </button>
              <button
                onClick={handleDecline}
                className="text-xs font-medium px-3 py-1.5 rounded-full border border-surface-border hover:bg-surface text-foreground transition-colors cursor-pointer"
              >
                Decline
              </button>
              <button
                onClick={handleAcceptAll}
                className="text-xs font-semibold px-4 py-1.5 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors shadow-2xs cursor-pointer"
              >
                Accept
              </button>
            </div>
          </div>
        </aside>
      )}

      {/* Minimalist Settings Modal */}
      {showPreferences && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-150"
        >
          <div className="bg-background border border-surface-border max-w-md w-full rounded-2xl shadow-2xl p-6 space-y-5 text-foreground">
            {/* Header */}
            <div className="flex items-center justify-between pb-3 border-b border-surface-border">
              <div className="flex items-center gap-2">
                <Cookie className="w-4 h-4 text-primary" />
                <h2 className="font-display text-lg uppercase tracking-tight text-foreground">
                  Cookie Preferences
                </h2>
              </div>
              <button
                onClick={() => setShowPreferences(false)}
                aria-label="Close"
                className="p-1 rounded-full text-muted-foreground hover:text-foreground hover:bg-surface transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs text-muted-foreground leading-relaxed">
              Manage your cookie choices. Essential cookies are required for security and core navigation.
            </p>

            {/* Toggle Rows */}
            <div className="space-y-3">
              {/* Essential */}
              <div className="flex items-center justify-between py-2 border-b border-surface-border/60">
                <div>
                  <div className="text-xs font-semibold text-foreground">Essential Cookies</div>
                  <div className="text-[11px] text-muted-foreground">Required for security &amp; basic functions</div>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-primary px-2 py-0.5 rounded-full bg-primary/10">
                  Active
                </span>
              </div>

              {/* Analytics */}
              <div className="flex items-center justify-between py-2 border-b border-surface-border/60">
                <div>
                  <div className="text-xs font-semibold text-foreground">Analytics Cookies</div>
                  <div className="text-[11px] text-muted-foreground">Anonymous usage to improve site speed</div>
                </div>
                <button
                  type="button"
                  role="switch"
                  aria-checked={preferences.analytics}
                  onClick={() =>
                    setPreferences((prev) => ({ ...prev, analytics: !prev.analytics }))
                  }
                  className={`relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full border border-transparent transition-colors duration-200 ease-in-out ${
                    preferences.analytics ? "bg-primary" : "bg-muted-foreground/30"
                  }`}
                >
                  <span
                    className={`pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow-xs transition duration-200 ease-in-out ${
                      preferences.analytics ? "translate-x-4" : "translate-x-0"
                    }`}
                  />
                </button>
              </div>

              {/* Functional */}
              <div className="flex items-center justify-between py-2">
                <div>
                  <div className="text-xs font-semibold text-foreground">Functional Cookies</div>
                  <div className="text-[11px] text-muted-foreground">Remembers user settings &amp; preferences</div>
                </div>
                <button
                  type="button"
                  role="switch"
                  aria-checked={preferences.functional}
                  onClick={() =>
                    setPreferences((prev) => ({ ...prev, functional: !prev.functional }))
                  }
                  className={`relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full border border-transparent transition-colors duration-200 ease-in-out ${
                    preferences.functional ? "bg-primary" : "bg-muted-foreground/30"
                  }`}
                >
                  <span
                    className={`pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow-xs transition duration-200 ease-in-out ${
                      preferences.functional ? "translate-x-4" : "translate-x-0"
                    }`}
                  />
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2 pt-2">
              <button
                onClick={() => savePreferences(preferences)}
                className="flex-1 py-2 px-3 text-xs font-medium rounded-full border border-surface-border hover:bg-surface text-foreground transition-colors cursor-pointer text-center"
              >
                Save
              </button>
              <button
                onClick={handleAcceptAll}
                className="flex-1 py-2 px-3 text-xs font-semibold rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors shadow-2xs cursor-pointer text-center"
              >
                Accept All
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
