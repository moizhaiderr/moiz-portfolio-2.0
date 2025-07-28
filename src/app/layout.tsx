import type { Metadata } from "next";
import "./globals.css";
import AnimatedBackground from "@/components/ParticlesBackground";

export const metadata: Metadata = {
  title: "Moiz Haider - Software Engineer Portfolio",
  description: "Portfolio showcasing web development, mobile app development, and programming skills.",
  keywords: "Software Engineer, Web Developer, React, Next.js, Mobile App Development",
  authors: [{ name: "Moiz Haider" }],
  creator: "Moiz Haider",
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.jpg', type: 'image/jpeg' }
    ],
    shortcut: '/favicon.ico',
    apple: '/favicon.jpg',
  },
  openGraph: {
    title: "Moiz Haider - Software Engineer Portfolio",
    description: "Portfolio showcasing web development, mobile app development, and programming skills.",
    url: "https://moizhaiderr.github.io",
    siteName: "Moiz Haider Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Moiz Haider - Software Engineer Portfolio",
    description: "Portfolio showcasing web development, mobile app development, and programming skills.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased relative">
        <AnimatedBackground />
        {children}
      </body>
    </html>
  );
}
