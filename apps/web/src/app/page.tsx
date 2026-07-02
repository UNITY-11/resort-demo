import { Hero } from "@/components/sections/Hero";
import { ResortStory } from "@/components/sections/ResortStory";
import { LuxuryVillas } from "@/components/sections/LuxuryVillas";
import { BookingCTA } from "@/components/sections/BookingCTA";
import dynamic from "next/dynamic";

// Dynamically import heavy sections that appear below the fold
const SignatureExperiences = dynamic(
  () => import("@/components/sections/SignatureExperiences").then((mod) => mod.SignatureExperiences),
  { ssr: true }
);

const Gallery = dynamic(
  () => import("@/components/sections/Gallery").then((mod) => mod.Gallery),
  { ssr: true }
);

const Testimonials = dynamic(
  () => import("@/components/sections/Testimonials").then((mod) => mod.Testimonials),
  { ssr: true }
);



export default function Home() {
  return (
    <main className="relative bg-ivory">
      <Hero />
      <ResortStory />
      <LuxuryVillas />
      <SignatureExperiences />
      <Gallery />
      <Testimonials />
      <BookingCTA />
    </main>
  );
}
