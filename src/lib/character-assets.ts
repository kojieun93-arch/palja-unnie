/**
 * Drop final webtoon art into `public/characters/` and flip `enabled` to true.
 * Keep filenames stable so Home only needs this config change.
 */
export const characterHeroAsset = {
  /** Full-bleed hero: 팔자언니 + 복냥이 together preferred */
  src: "/characters/palja-unnie-hero.webp",
  width: 780,
  height: 960,
  enabled: false,
} as const;
