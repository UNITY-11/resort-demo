export interface HeroData {
  volume: string;
  location: string;
  heading: string;
  subheading: string;
  image: string;
}

export interface StoryData {
  heading: string;
  quote: string;
  body: string;
  image: string;
}

export interface VillaData {
  name: string;
  description: string;
  area: string;
  guests: number;
  bedrooms: number;
  pool: boolean;
  price: number;
  image: string;
  imageAlt: string;
}

export interface ExperienceData {
  title: string;
  description: string;
  image: string;
}

export interface GalleryImageData {
  src: string;
  alt: string;
  caption: string;
}

export interface TestimonialData {
  quote: string;
  author: string;
  location: string;
  image: string;
  rotation: number;
}

export interface BookingData {
  heading: string;
  subheading: string;
  image: string;
}

export interface ResortData {
  hero: HeroData;
  story: StoryData;
  villas: VillaData[];
  experiences: ExperienceData[];
  gallery: GalleryImageData[];
  testimonials: TestimonialData[];
  booking: BookingData;
}
