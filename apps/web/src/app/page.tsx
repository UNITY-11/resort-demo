import { Hero } from "@/components/sections/Hero";
import dynamic from "next/dynamic";

const ResortStory = dynamic(
  () => import("@/components/sections/ResortStory").then((mod) => mod.ResortStory),
  { ssr: true }
);

const LuxuryVillas = dynamic(
  () => import("@/components/sections/LuxuryVillas").then((mod) => mod.LuxuryVillas),
  { ssr: true }
);

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

const BookingCTA = dynamic(
  () => import("@/components/sections/BookingCTA").then((mod) => mod.BookingCTA),
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
