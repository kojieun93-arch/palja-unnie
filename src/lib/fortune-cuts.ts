/**
 * Official vertical-story cut slots for `/fortune`.
 *
 * Design source: homepage 팔자언니 + 검정·흰 복냥이 look.
 * Do NOT crop `public/characters/palja-unnie-hero.jpg` for these cuts.
 *
 * Drop dedicated files under `public/characters/fortune/` and set `enabled: true`.
 */
export type StoryCutMood =
  | "start"
  | "closeup"
  | "lantern"
  | "playful"
  | "ending";

export type FortuneStoryCut = {
  scene: 1 | 2 | 3 | 4 | 5;
  mood: StoryCutMood;
  src: string;
  /** Flip to true only when the file exists in the repo */
  enabled: boolean;
  alt: string;
  label: string;
  width: number;
  height: number;
  note: string;
};

export const fortuneStoryCuts: readonly FortuneStoryCut[] = [
  {
    scene: 1,
    mood: "start",
    src: "/characters/fortune/scene-1-start.webp",
    enabled: false,
    alt: "상담 시작 — 팔자언니",
    label: "달빛 아래 상담 시작",
    width: 780,
    height: 1040,
    note: "밤하늘 · 달빛 · 등불 · 팔자언니 클로즈업",
  },
  {
    scene: 2,
    mood: "closeup",
    src: "/characters/fortune/scene-2-closeup.webp",
    enabled: false,
    alt: "나도 몰랐던 내 모습 — 별빛 창가 미소",
    label: "나도 몰랐던 내 모습",
    width: 780,
    height: 900,
    note: "별빛 창가 · 살짝 미소",
  },
  {
    scene: 3,
    mood: "lantern",
    src: "/characters/fortune/scene-3-lantern.webp",
    enabled: false,
    alt: "마음이 움직이는 순간 — 분홍 달빛",
    label: "마음이 움직이는 순간",
    width: 780,
    height: 980,
    note: "분홍빛 달빛 · 꽃잎 · 부드러운 조명",
  },
  {
    scene: 4,
    mood: "playful",
    src: "/characters/fortune/scene-4-playful.webp",
    enabled: false,
    alt: "사주로 보는 나의 성향 — 장난스러운 미소",
    label: "사주로 보는 나의 성향",
    width: 780,
    height: 900,
    note: "별자리 · 달빛 · 장난스러운 미소",
  },
  {
    scene: 5,
    mood: "ending",
    src: "/characters/fortune/scene-5-ending.webp",
    enabled: false,
    alt: "다음 이야기를 기다리며 — 새벽빛 한옥",
    label: "다음 이야기를 기다리며",
    width: 780,
    height: 980,
    note: "새벽빛 한옥 · 팔자언니와 복냥이",
  },
] as const;

export function getFortuneStoryCut(sceneIndex: number): FortuneStoryCut {
  const cut = fortuneStoryCuts[sceneIndex];
  if (!cut) {
    throw new Error(`No fortune story cut for scene index ${sceneIndex}`);
  }
  return cut;
}

/** Cuts that are still missing files (enabled === false). */
export function listMissingFortuneCuts(): FortuneStoryCut[] {
  return fortuneStoryCuts.filter((c) => !c.enabled);
}
