import type { Metadata } from "next";
import { cormorant, inter } from "@/lib/fonts";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { GrainOverlay } from "@/components/ui/GrainOverlay";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Élara Wilderness Reserve | Luxury Nature Resort",
  description:
    "A hidden sanctuary spanning 50 acres of untouched tropical wilderness. Discover our elevated villas and signature experiences.",
  keywords: [
    "luxury resort",
    "nature retreat",
    "boutique hotel",
    "luxury travel",
    "exclusive villas",
    "eco luxury",
    "wilderness reserve",
  ],
  metadataBase: new URL("https://elara-reserve.example.com"),
  alternates: {
    canonical: "/",
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
    title: "Élara — Luxury Nature Retreats",
    description:
      "An exclusive collection of nature-immersed retreats designed to reconnect you with nature.",
    url: "/",
    siteName: "Élara Wilderness Reserve",
    images: [
      {
        url: "/og-image.jpg", // Placeholder for actual OG image
        width: 1200,
        height: 630,
        alt: "Élara Wilderness Reserve",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Élara Wilderness Reserve",
    description: "An exclusive collection of nature-immersed retreats.",
    creator: "@elarareserve",
    images: ["/og-image.jpg"], // Placeholder
  },
  manifest: "/site.webmanifest",
  appleWebApp: {
    title: "Élara",
    statusBarStyle: "black-translucent",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="bg-ivory text-charcoal antialiased cursor-none" suppressHydrationWarning>
        <CustomCursor />
        <SmoothScrollProvider>
          <GrainOverlay />
          <Navbar />
          {children}
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
