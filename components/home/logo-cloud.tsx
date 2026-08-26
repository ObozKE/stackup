"use client";

import { motion } from "framer-motion";

interface LogoCloudProps {
  showPlaceholders?: boolean;
}

const TOOLS = [
  {
    name: "Behance",
    icon: (
      <svg className="h-6 w-auto fill-current" viewBox="0 0 24 24">
        <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-4.813 3-3.104 0-5.184-2.072-5.184-5.42 0-3.418 2.062-5.58 5.093-5.58 3.125 0 4.887 2.115 4.887 5.253 0 .408-.042.87-.076 1.147h-7.142c.117 1.488 1.135 2.128 2.373 2.128.983 0 1.777-.417 2.14-1.228h2.722zm-4.945-4.444c1.196 0 1.942-.647 2.012-1.748h-4.084c.148 1.127.876 1.748 2.072 1.748zm-11.233-7.556h-7.548v14h7.456c3.435 0 5.498-1.637 5.498-4.407 0-1.892-.992-3.167-2.454-3.76 1.194-.582 1.956-1.71 1.956-3.352 0-2.383-1.808-2.481-4.908-2.481zm-4.708 2.645h4.103c1.378 0 2.183.504 2.183 1.547 0 1.054-.836 1.597-2.234 1.597h-4.052v-3.144zm0 5.679h4.341c1.554 0 2.454.582 2.454 1.83 0 1.218-.941 1.879-2.505 1.879h-4.29v-3.709z" />
      </svg>
    ),
  },
  {
    name: "Canva",
    icon: (
      <svg className="h-6 w-auto fill-current" viewBox="0 0 24 24">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-1.25 17.5c-2.48 0-4.5-2.02-4.5-4.5s2.02-4.5 4.5-4.5 4.5 2.02 4.5 4.5-2.02 4.5-4.5-4.5zm0-7c-1.38 0-2.5 1.12-2.5 2.5s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5-1.12-2.5-2.5-2.5z" />
      </svg>
    ),
  },
  {
    name: "Cosmos",
    icon: (
      <svg className="h-6 w-auto fill-current" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2.5" fill="none" />
        <circle cx="12" cy="12" r="4" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "Adobe",
    icon: (
      <svg className="h-6 w-auto fill-current" viewBox="0 0 24 24">
        <path d="M13.966 22h6.034l-8.034-19.5h-5.966l8.034 19.5zm-8.034 0h-5.932l8.034-19.5h5.932l-8.034 19.5zm6.068-8.529l-3.327 7.794h6.654l-3.327-7.794z" />
      </svg>
    ),
  },
  {
    name: "CapCut",
    icon: (
      <svg className="h-6 w-auto stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 8l8 5 8-5M4 16l8-5 8 5" />
      </svg>
    ),
  },
  {
    name: "Excalidraw",
    icon: (
      <svg className="h-6 w-auto fill-current" viewBox="0 0 24 24">
        <path d="M21.71 3.29a1 1 0 0 0-1.42 0l-14 14a1 1 0 0 0-.21.33l-2 6a1 1 0 0 0 1.25 1.25l6-2a1 1 0 0 0 .33-.21l14-14a1 1 0 0 0 0-1.42l-4-4zM6.5 20.5l-2.8-2.8 1.4-4.2 5.6 5.6-4.2 1.4zm11-11l-7 7-2.8-2.8 7-7 2.8 2.8z" />
      </svg>
    ),
  },
];

export default function LogoCloud({ showPlaceholders = false }: LogoCloudProps) {
  // Multiply tools array for infinite continuous seamless scrolling loop
  const marqueeItems = [...TOOLS, ...TOOLS, ...TOOLS, ...TOOLS];

  return (
    <section className="py-8 bg-background overflow-hidden relative select-none">
      {/* Side Fade Overlays */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      {/* Clean Carousel with Non-Bold Text */}
      <div className="flex overflow-hidden">
        <motion.div
          className="flex items-center gap-12 sm:gap-16 shrink-0"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 25,
            repeat: Infinity,
          }}
        >
          {marqueeItems.map((tool, idx) => (
            <div
              key={`${tool.name}-${idx}`}
              className="flex items-center gap-2.5 text-foreground/80 hover:text-primary transition-colors group shrink-0"
            >
              <div className="w-6 h-6 flex items-center justify-center">
                {tool.icon}
              </div>
              <span className="font-sans text-base sm:text-lg font-normal uppercase tracking-wider">
                {tool.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
