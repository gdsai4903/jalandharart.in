import type { Metadata } from "next";
import { GOOGLE_FONTS_URL } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sukhwinder Singh — Oil Painter & Nature Artist, Jalandhar",
  description:
    "Official portfolio of Sukhwinder Singh, award-winning oil painter and nature artist from Jalandhar, Punjab. View gallery, achievements, and contact.",
  keywords:
    "oil painter Jalandhar, Punjab artist, Sukhwinder Singh, nature paintings, portrait artist India",
  metadataBase: new URL("https://jalandharart.in"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Sukhwinder Singh — Oil Painter & Nature Artist, Jalandhar",
    description:
      "Official portfolio of Sukhwinder Singh, award-winning oil painter and nature artist from Jalandhar, Punjab.",
    url: "https://jalandharart.in",
    siteName: "Sukhwinder Singh Art",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sukhwinder Singh — Oil Painter & Nature Artist",
      },
    ],
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sukhwinder Singh — Oil Painter & Nature Artist, Jalandhar",
    description:
      "Official portfolio of Sukhwinder Singh, award-winning oil painter and nature artist from Jalandhar, Punjab.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="stylesheet" href={GOOGLE_FONTS_URL} />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
