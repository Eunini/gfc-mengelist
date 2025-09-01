import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Layout from "@/components/Layout";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const siteUrl = "https://gfc-mengelist.vercel.app"; // Replace with your actual domain

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Let&apos;s Talk Period with GFC",
    template: "%s | GFC",
  },
  description: "Shattering stigma and empowering women and girls through menstrual health education and support.",
  keywords: ["menstrual health", "period poverty", "women empowerment", "girl child", "GFC", "non-profit"],
  authors: [{ name: "GFC" }],
  creator: "GFC",
  publisher: "GFC",
  manifest: "/manifest.json",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "Let&apos;s Talk Period with GFC",
    description: "Shattering stigma and empowering women and girls through menstrual health education and support.",
    url: siteUrl,
    siteName: "GFC",
    images: [
      {
        url: "/logo.png", // Replace with a proper OG image URL
        width: 1200,
        height: 630,
        alt: "GFC Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Let&apos;s Talk Period with GFC",
    description: "Shattering stigma and empowering women and girls through menstrual health education and support.",
    images: ["/logo.png"], // Replace with a proper Twitter card image URL
  },
};

export const viewport: Viewport = {
  themeColor: "#FADADD", // Light Pink from our theme
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
