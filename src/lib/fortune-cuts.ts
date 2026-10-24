/**
 * Official fortune webtoon cut slots.
 *
 * Design source of truth: homepage 팔자언니 + 검정·흰 복냥이
 * (`public/characters/palja-unnie-hero.jpg`). Do NOT crop that hero for cuts.
 *
 * Drop dedicated cut files under `public/characters/fortune/` and set `enabled: true`.
 */
export type FortuneCharacter = "unnie" | "boknyang";

export type FortunePanelCut = {
  panel: 1 | 2 | 3;
  character: FortuneCharacter;
  /** Public URL under /characters/fortune/ */
  src: string;
  /** Flip to true only when the file exists in the repo */
  enabled: boolean;
  alt: string;
  label: string;
  width: number;
  height: number;
  note: string;
};

export const fortunePanelCuts: readonly FortunePanelCut[] = [
  {
    panel: 1,
    character: "unnie",
    src: "/characters/fortune/cut-1-unnie.png",
    enabled: false,
    alt: "팔자언니",
    label: "팔자언니",
    width: 720,
    height: 900,
    note: "1컷 · 홈과 같은 팔자언니 공식 컷",
  },
  {
    panel: 2,
    character: "boknyang",
    src: "/characters/fortune/cut-2-boknyang.png",
    enabled: false,
    alt: "복냥이 (검정·흰색)",
    label: "복냥이",
    width: 720,
    height: 900,
    note: "2컷 · 홈과 같은 검정·흰 복냥이 공식 컷",
  },
  {
    panel: 3,
    character: "unnie",
    src: "/characters/fortune/cut-3-unnie.png",
    enabled: false,
    alt: "팔자언니",
    label: "팔자언니",
    width: 720,
    height: 900,
    note: "3컷 · 홈과 같은 팔자언니 공식 컷",
  },
] as const;

export function getFortunePanelCut(panelIndex: number): FortunePanelCut {
  const cut = fortunePanelCuts[panelIndex];
  if (!cut) {
    throw new Error(`No fortune cut configured for panel index ${panelIndex}`);
  }
  return cut;
}
