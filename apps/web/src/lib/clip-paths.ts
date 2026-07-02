/* ─────────────────────────────────────────
   ÉLARA RESORT — Scrapbook Clip-Path Library
   Organic, torn, and deckled masks for the earthy aesthetic.
   ───────────────────────────────────────── */

export const POLY_TORN_A = "polygon(2% 0%, 98% 3%, 100% 8%, 97% 25%, 100% 42%, 98% 58%, 100% 75%, 97% 92%, 100% 100%, 3% 97%, 0% 92%, 2% 78%, 0% 62%, 3% 45%, 0% 28%, 2% 12%)";
export const POLY_DECKLED = "polygon(3% 2%, 12% 0%, 22% 3%, 35% 1%, 48% 4%, 60% 0%, 72% 3%, 85% 1%, 95% 3%, 98% 12%, 100% 25%, 97% 38%, 100% 52%, 98% 65%, 100% 78%, 97% 88%, 100% 95%, 88% 98%, 75% 100%, 62% 97%, 50% 100%, 38% 97%, 25% 100%, 12% 98%, 5% 100%, 2% 90%, 0% 78%, 3% 65%, 0% 50%, 2% 38%, 0% 25%, 3% 12%)";
export const POLY_HAND_CUT = "polygon(0% 4%, 15% 0%, 40% 2%, 65% 0%, 85% 3%, 100% 0%, 98% 18%, 100% 40%, 97% 65%, 100% 85%, 98% 100%, 80% 97%, 55% 100%, 30% 96%, 10% 100%, 0% 98%, 3% 75%, 0% 50%, 2% 25%)";
export const POLY_BLOB = "polygon(10% 0%, 30% 2%, 50% 0%, 70% 3%, 90% 0%, 100% 15%, 97% 35%, 100% 55%, 98% 75%, 100% 90%, 85% 100%, 65% 97%, 45% 100%, 25% 98%, 8% 100%, 0% 85%, 3% 65%, 0% 45%, 2% 25%, 0% 10%)";
export const POLY_RIPPED_LEFT = "polygon(5% 0%, 100% 0%, 100% 100%, 3% 100%, 0% 92%, 4% 82%, 1% 72%, 5% 62%, 2% 52%, 6% 42%, 1% 32%, 4% 22%, 0% 12%, 3% 5%)";
export const POLY_RIPPED_RIGHT = "polygon(0% 0%, 97% 0%, 100% 8%, 96% 18%, 100% 28%, 97% 38%, 100% 48%, 95% 58%, 99% 68%, 96% 78%, 100% 88%, 97% 95%, 100% 100%, 0% 100%)";
export const POLY_TORN_BOTTOM = "polygon(0% 0%, 100% 0%, 100% 85%, 95% 90%, 90% 86%, 85% 92%, 78% 88%, 72% 95%, 65% 88%, 58% 93%, 52% 87%, 45% 94%, 38% 88%, 30% 96%, 22% 89%, 15% 95%, 8% 88%, 3% 93%, 0% 87%)";
export const POLY_IRREGULAR_RECT = "polygon(1% 3%, 98% 0%, 100% 2%, 97% 98%, 99% 100%, 2% 97%, 0% 99%, 3% 2%)";
export const POLY_ROUGH_DIAMOND = "polygon(15% 0%, 50% 3%, 85% 0%, 100% 18%, 97% 50%, 100% 82%, 85% 100%, 50% 96%, 15% 100%, 0% 82%, 3% 50%, 0% 18%)";
export const POLY_VINTAGE = "polygon(5% 0%, 20% 2%, 35% 0%, 50% 3%, 65% 0%, 80% 2%, 95% 0%, 100% 8%, 98% 25%, 100% 42%, 98% 58%, 100% 75%, 100% 92%, 92% 100%, 75% 98%, 58% 100%, 42% 98%, 25% 100%, 8% 98%, 0% 92%, 2% 75%, 0% 58%, 2% 42%, 0% 25%, 0% 8%)";
export const POLY_LEAF = "polygon(50% 0%, 65% 5%, 80% 15%, 92% 30%, 98% 48%, 100% 60%, 95% 75%, 85% 88%, 70% 96%, 50% 100%, 30% 96%, 15% 88%, 5% 75%, 0% 60%, 2% 48%, 8% 30%, 20% 15%, 35% 5%)";
export const POLY_POSTCARD = "polygon(2% 1%, 99% 0%, 100% 3%, 98% 97%, 100% 100%, 1% 99%, 0% 97%, 2% 3%)";

export const ALL_CLIP_PATHS = [
  POLY_TORN_A,
  POLY_DECKLED,
  POLY_HAND_CUT,
  POLY_BLOB,
  POLY_RIPPED_LEFT,
  POLY_RIPPED_RIGHT,
  POLY_TORN_BOTTOM,
  POLY_IRREGULAR_RECT,
  POLY_ROUGH_DIAMOND,
  POLY_VINTAGE,
  POLY_LEAF,
  POLY_POSTCARD
] as const;

export function getClipPath(index: number): string {
  return ALL_CLIP_PATHS[index % ALL_CLIP_PATHS.length];
}
