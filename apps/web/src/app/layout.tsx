import type { Metadata } from "next";
import { cormorant, inter } from "@/lib/fonts";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { GrainOverlay } from "@/components/ui/GrainOverlay";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { Footer } from "@/components/layout/Footer";
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
  ],
  openGraph: {
    title: "Élara — Luxury Nature Retreats",
    description:
      "An exclusive collection of nature-immersed retreats designed to reconnect you with nature.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="bg-ivory text-charcoal antialiased cursor-none">
        <CustomCursor />
        <SmoothScrollProvider>
          <GrainOverlay />
          {children}
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
