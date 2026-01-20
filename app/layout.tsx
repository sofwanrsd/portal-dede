import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import { siteConfig } from './config';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.seo.siteUrl),
  title: {
    default: siteConfig.seo.title,
    template: siteConfig.seo.titleTemplate,
  },
  description: siteConfig.seo.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.author }],
  creator: siteConfig.author,
  icons: {
    icon: siteConfig.favicon,
    apple: '/icon.png',
  },
  openGraph: {
    type: 'website',
    locale: siteConfig.seo.openGraph.locale,
    url: siteConfig.seo.openGraph.url,
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    siteName: siteConfig.seo.openGraph.siteName,
    images: siteConfig.seo.openGraph.images,
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    images: siteConfig.seo.openGraph.images, // Use same image as OG
    creator: siteConfig.seo.twitter.creator,
  },
  robots: {
    index: true,
    follow: true,
  },
};

// Generate CSS variables from config
const themeStyles = `
  :root {
    --taveve-orange: ${siteConfig.colors.primary};
    --taveve-orange-light: ${siteConfig.colors.primaryLight || siteConfig.colors.primary};
    --taveve-orange-dark: ${siteConfig.colors.primaryDark || siteConfig.colors.primary};
  }
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/remixicon@4.3.0/fonts/remixicon.css"
          rel="stylesheet"
        />
        <style dangerouslySetInnerHTML={{ __html: themeStyles }} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
