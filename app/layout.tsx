import type { Metadata } from "next";
import { Poppins } from "next/font/google";
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
  title: {
    default: "Stackup — Creative Agency | Nairobi, Kenya",
    template: "%s | Stackup Creative Agency",
  },
  description:
    "Stackup is a full-service creative agency in Nairobi, Kenya specializing in Web Development, Graphic & UI/UX Design, and Social Media Management.",
  icons: {
    icon: "/stackup%20svg.svg",
    shortcut: "/stackup%20svg.svg",
    apple: "/stackup%20svg.svg",
  },
  keywords: [
    "Creative Agency Nairobi",
    "Web Development Kenya",
    "Graphic Design Nairobi",
    "UI UX Design Kenya",
    "Social Media Management Nairobi",
    "Stackup Creative",
  ],
  authors: [{ name: "Stackup" }],
  openGraph: {
    type: "website",
    locale: "en_KE",
    url: "https://stackup.co.ke",
    title: "Stackup — Creative Agency | Nairobi, Kenya",
    description:
      "Stackup is a full-service creative agency in Nairobi, Kenya specializing in Web Development, Graphic & UI/UX Design, and Social Media Management.",
    siteName: "Stackup",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stackup — Creative Agency | Nairobi, Kenya",
    description:
      "Full-service creative agency in Nairobi, Kenya: Web Development, Design, & Social Media Management.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans relative">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
