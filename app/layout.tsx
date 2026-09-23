import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import WhatsAppButton from "@/components/ui/whatsapp-button";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://stackupkenya.studio"),
  title: {
    default: "Stackup Kenya — Software Company & Web Development Agency Nairobi",
    template: "%s | Stackup Kenya",
  },
  description:
    "Stackup Kenya is a premier software company and web development agency in Nairobi, Kenya. We engineer custom enterprise software (POS, CRM, ERP), AI solutions, high-performance web applications, and modern brand systems.",
  icons: {
    icon: "/stackup%20svg.svg",
    shortcut: "/stackup%20svg.svg",
    apple: "/stackup%20svg.svg",
  },
  keywords: [
    "Stackup Kenya",
    "Software Company Nairobi",
    "Custom Software Development Kenya",
    "Software Engineering Agency Nairobi",
    "POS Systems Kenya",
    "Point of Sale Software Nairobi",
    "Custom CRM Development Kenya",
    "AI Integration Nairobi",
    "AI Automation Agency Kenya",
    "AI Chatbots Kenya",
    "Web Development Kenya",
    "Web Development Company Nairobi",
    "Next.js Web Developer Kenya",
    "E-commerce Website Development Nairobi",
    "M-Pesa Payment Integration Developer",
    "Website Design Nairobi",
    "Graphic Design Agency Kenya",
    "Brand Identity Design Nairobi",
    "UI UX Design Nairobi",
    "Social Media Marketing Agency Nairobi",
    "Digital Marketing Agency Kenya",
    "SEO Services Nairobi Kenya",
    "Enterprise Software East Africa",
  ],
  authors: [{ name: "Stackup Kenya", url: "https://stackupkenya.studio" }],
  creator: "Stackup Kenya",
  publisher: "Stackup Kenya",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://stackupkenya.studio",
    types: {
      "application/rss+xml": "https://stackupkenya.studio/feed.xml",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_KE",
    url: "https://stackupkenya.studio",
    title: "Stackup Kenya — Software Company & Web Development Agency Nairobi",
    description:
      "Premier software company and web development agency in Nairobi, Kenya. We engineer custom enterprise software (POS, CRM, ERP), AI solutions, high-performance web applications, and modern brand systems.",
    siteName: "Stackup Kenya",
    images: [
      {
        url: "https://stackupkenya.studio/images/projects/brand-design/b1.webp",
        width: 1200,
        height: 630,
        alt: "Stackup Kenya Software and Web Development Showcase",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stackup Kenya — Software Company & Web Agency | Nairobi, Kenya",
    description:
      "Premier software company and web development agency in Nairobi, Kenya: Custom Software, AI Solutions, Web Development, & Design.",
    creator: "@stackupkenya",
    images: ["https://stackupkenya.studio/images/projects/brand-design/b1.webp"],
  },
  other: {
    "geo.region": "KE-30",
    "geo.placename": "Nairobi, Kenya",
    "geo.position": "-1.286389;36.817223",
    ICBM: "-1.286389, 36.817223",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Global Structured Schema (JSON-LD) for Search Engines & AI LLM indexing
  const globalSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "LocalBusiness", "ProfessionalService"],
        "@id": "https://stackupkenya.studio/#organization",
        name: "Stackup Kenya",
        legalName: "Stackup Kenya",
        url: "https://stackupkenya.studio",
        logo: "https://stackupkenya.studio/stackup%20svg.svg",
        image: "https://stackupkenya.studio/images/projects/brand-design/b1.webp",
        telephone: "+254790870596",
        email: "stackupke@gmail.com",
        priceRange: "$$",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Nairobi",
          addressRegion: "Nairobi County",
          addressCountry: "KE",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: -1.286389,
          longitude: 36.817223,
        },
        areaServed: [
          {
            "@type": "Country",
            name: "Kenya",
          },
          {
            "@type": "Place",
            name: "East Africa",
          },
          {
            "@type": "Place",
            name: "Worldwide",
          },
        ],
        knowsAbout: [
          "Web Development",
          "Custom Software Development",
          "POS Systems & Inventory Management",
          "CRM Development & Customer Portals",
          "AI Integration & Automation",
          "M-Pesa STK Push API Integration",
          "Next.js and React Engineering",
          "Graphic Design & Visual Identity",
          "Brand Identity Guidelines",
          "Social Media Management",
          "Search Engine Optimization (SEO)",
          "UI/UX Design Systems",
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Stackup Kenya Engineering & Creative Services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Web Development",
                description: "Custom Next.js & React web applications, headless CMS, e-commerce, and Core Web Vitals optimization.",
                url: "https://stackupkenya.studio/services#web-development",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Custom Software Development",
                description: "Bespoke POS systems, CRM platforms, ERP software, client portals, and secure database architecture.",
                url: "https://stackupkenya.studio/services#custom-software-development",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "AI Integration",
                description: "Custom AI chatbots, LLM API integration (OpenAI, Claude, Gemini), automated workflows, and RAG knowledge systems.",
                url: "https://stackupkenya.studio/services#ai-integration",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Design & Brand Identity",
                description: "Complete visual identity systems, typography guidelines, UI/UX design, and marketing collateral.",
                url: "https://stackupkenya.studio/services#design",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Social Media Management",
                description: "High-ROI campaign strategies, visual asset creation, and community growth for businesses in Kenya and globally.",
                url: "https://stackupkenya.studio/services#social-media-management",
              },
            },
          ],
        },
        sameAs: [
          "https://instagram.com/stackupkenya",
          "https://twitter.com/stackupkenya",
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://stackupkenya.studio/#website",
        url: "https://stackupkenya.studio",
        name: "Stackup Kenya",
        description:
          "Premier software company and web development agency in Nairobi, Kenya specializing in Custom Software (POS, CRM), AI Integration, Web Development, Brand Design, and Social Media Marketing.",
        publisher: {
          "@id": "https://stackupkenya.studio/#organization",
        },
      },
    ],
  };

  return (
    <html lang="en" className={`${poppins.variable} h-full antialiased`}>
      <head>
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-1Z0G49PPWE"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-1Z0G49PPWE');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(globalSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans relative">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
