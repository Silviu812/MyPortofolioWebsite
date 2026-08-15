import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://silviupopa.dev"),
  title: "Silviu Popa — Software Engineering & Quantitative Research",
  description: "Portfolio of Silviu Popa, a Computer Science graduate building software products and conducting independent quantitative market research.",
  keywords: ["Silviu Popa", "software engineering", "quantitative research", "React", "C#", "Unity"],
  authors: [{ name: "Silviu Andrei Popa" }],
  alternates: { canonical: "/" },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Silviu Popa",
    title: "Building systems for uncertain environments.",
    description: "Software engineering and independent quantitative research by Silviu Popa.",
    images: [{ url: "/og.png", width: 1536, height: 1024, alt: "Silviu Popa — Building systems for uncertain environments" }],
  },
  twitter: { card: "summary_large_image", title: "Building systems for uncertain environments.", description: "Software engineering and independent quantitative research by Silviu Popa.", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body></html>;
}
