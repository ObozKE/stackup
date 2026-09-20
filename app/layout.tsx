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
    "Web Development Kenya",
    "Custom Software Kenya",
    "POS Systems Nairobi",
    "CRM Development Kenya",
    "AI Integration Nairobi",
    "Website Design Nairobi",
    "Graphic Design Agency Kenya",
    "UI UX Design Nairobi",
    "Software Engineering Agency Kenya",
    "Digital Agency Nairobi",
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
      "Premier software company and web development agency in Nairobi, Kenya. Custom Software, AI Integrations, Web Apps, & Design Systems.",
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
          "POS Systems & CRM Platforms",
          "AI Integration & Automation",
          "Website Design",
          "Graphic Design",
          "Brand Identity Design",
          "Social Media Management",
          "Search Engine Optimization (SEO)",
          "UI/UX Design",
        ],
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
          "Full-service creative and tech agency in Nairobi, Kenya specializing in Web Development, Custom Software (POS, CRM), AI Integration, Graphic & Brand Design, and Social Media Management.",
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
