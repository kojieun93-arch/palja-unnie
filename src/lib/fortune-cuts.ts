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
    label: "장면 1 · 상담 시작",
    width: 780,
    height: 1040,
    note: "큰 풀블리드 팔자언니 컷",
  },
  {
    scene: 2,
    mood: "closeup",
    src: "/characters/fortune/scene-2-closeup.webp",
    enabled: false,
    alt: "기본 성향 — 팔자언니 표정 클로즈업",
    label: "장면 2 · 표정 클로즈업",
    width: 780,
    height: 900,
    note: "표정 변화 클로즈업",
  },
  {
    scene: 3,
    mood: "lantern",
    src: "/characters/fortune/scene-3-lantern.webp",
    enabled: false,
    alt: "연애 성향 — 등불 밤 분위기",
    label: "장면 3 · 등불 밤",
    width: 780,
    height: 980,
    note: "따뜻한 등불·밤 분위기 컷",
  },
  {
    scene: 4,
    mood: "playful",
    src: "/characters/fortune/scene-4-playful.webp",
    enabled: false,
    alt: "사주 기반 MBTI — 장난스러운 리액션",
    label: "장면 4 · 장난 리액션",
    width: 780,
    height: 900,
    note: "장난스러운 리액션 컷",
  },
  {
    scene: 5,
    mood: "ending",
    src: "/characters/fortune/scene-5-ending.webp",
    enabled: false,
    alt: "마무리 — 팔자언니와 복냥이",
    label: "장면 5 · 함께",
    width: 780,
    height: 980,
    note: "팔자언니 + 복냥이 함께",
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
