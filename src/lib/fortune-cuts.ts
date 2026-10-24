/**
 * Fortune webtoon cut image slots.
 * Drop files under `public/characters/cuts/` and set `src` — do not crop the home hero.
 */
export type FortuneCutSlot = {
  /** Public path when art is ready; null = branded placeholder */
  src: string | null;
  alt: string;
  label: string;
  width: number;
  height: number;
};

export const fortuneCutSlots = {
  unnie: {
    src: null,
    alt: "팔자언니",
    label: "팔자언니",
    width: 720,
    height: 720,
  },
  boknyang: {
    src: null,
    alt: "복냥이",
    label: "복냥이",
    width: 720,
    height: 720,
  },
} as const satisfies Record<"unnie" | "boknyang", FortuneCutSlot>;
