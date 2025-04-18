import "./global.css";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Navbar } from "./components/nav";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import ConditionalFooter from "./components/conditional-footer";
import { baseUrl } from "./config";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "ben wang",
    template: "%s | ben wang",
  },
  description: "my personal site",
  icons: {
    icon: "/starfav.ico",
  },
  openGraph: {
    title: "ben wang",
    description: "my personal site",
    url: baseUrl,
    siteName: "ben wang",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ben wang",
    description: "my personal site",
    images: [`${baseUrl}/opengraph-image?eff63b9634125950`],
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
};

const cx = (...classes) => classes.filter(Boolean).join(" ");

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cx(
        "text-black bg-white dark:text-white dark:bg-black/94",
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <body className="antialiased max-w-xl mx-4 mt-8 lg:mx-auto">
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          <Navbar />
          {children}
          <ConditionalFooter />
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  );
}
