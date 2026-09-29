"use client";

import { Cookie } from "lucide-react";

export default function CookieSettingsButton() {
  const handleClick = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new Event("openCookieSettings"));
    }
  };

  return (
    <button
      onClick={handleClick}
      type="button"
      className="inline-flex items-center gap-1.5 font-semibold text-foreground hover:text-primary transition-colors cursor-pointer underline decoration-primary/40 underline-offset-4"
    >
      <Cookie className="w-3.5 h-3.5 text-primary" />
      <span>Cookie Settings</span>
    </button>
  );
}
