import type { Metadata } from "next";
import { Anton, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Stackup — Creative Agency | Nairobi, Kenya",
    template: "%s | Stackup Creative Agency",
  },
  description:
    "Stackup is a full-service creative agency in Nairobi, Kenya specializing in Web Development, Graphic & UI/UX Design, and Social Media Marketing.",
  keywords: [
    "Creative Agency Nairobi",
    "Web Development Kenya",
    "Graphic Design Nairobi",
    "UI UX Design Kenya",
    "Social Media Marketing Nairobi",
    "Stackup Creative",
  ],
  authors: [{ name: "Stackup" }],
  openGraph: {
    type: "website",
    locale: "en_KE",
    url: "https://stackup.co.ke",
    title: "Stackup — Creative Agency | Nairobi, Kenya",
    description:
      "Stackup is a full-service creative agency in Nairobi, Kenya specializing in Web Development, Graphic & UI/UX Design, and Social Media Marketing.",
    siteName: "Stackup",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stackup — Creative Agency | Nairobi, Kenya",
    description:
      "Full-service creative agency in Nairobi, Kenya: Web Development, Design, & Social Media Marketing.",
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
      className={`${anton.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
