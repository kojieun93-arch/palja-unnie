import type { Gender } from "@/components/consult/types";
import { addressForGender } from "@/lib/consult-session";

export type Speaker = "unnie" | "boknyang";

export type DialogueLine = {
  speaker: Speaker;
  text: string;
};

export type FortunePanel = {
  id: string;
  title: string;
  topic: string;
  lines: DialogueLine[];
  /** Who is visually emphasized in the cut slot */
  focus: Speaker;
};

export function buildSamplePanels(gender: Gender | null): FortunePanel[] {
  const who = addressForGender(gender) || "니";

  return [
    {
      id: "trait",
      title: "1컷 · 기본 성향",
      topic: "기본 성향",
      focus: "unnie",
      lines: [
        {
          speaker: "unnie",
          text: `야 ${who}, 일단 기본 성향부터 말해줄게.`,
        },
        {
          speaker: "boknyang",
          text: "냐앙~ 겉은 여유롭고, 속은 좀 단단하다 카이.",
        },
        {
          speaker: "unnie",
          text: "맞다. 사람 보는 눈은 빠른 편이다.",
        },
      ],
    },
    {
      id: "love",
      title: "2컷 · 연애 성향",
      topic: "연애 성향",
      focus: "boknyang",
      lines: [
        {
          speaker: "unnie",
          text: `연애는 천천히, 깊게 가는 스타일이다 ${who}.`,
        },
        {
          speaker: "boknyang",
          text: "밀당보다 진심이 먹힌다, 냐앙!",
        },
        {
          speaker: "unnie",
          text: "상대가 솔직하면 더 잘 맞는 편이다.",
        },
      ],
    },
    {
      id: "mbti",
      title: "3컷 · 사주 × MBTI",
      topic: "사주 기반 MBTI 소개",
      focus: "unnie",
      lines: [
        {
          speaker: "unnie",
          text: "샘플로 보면 MBTI 기운은 ENFP 쪽에 가깝다.",
        },
        {
          speaker: "boknyang",
          text: "근데 이건 가상 샘플이다! 진짜 계산 아니다 냐앙.",
        },
        {
          speaker: "unnie",
          text: `${who}, 지금은 맛보기만. 만세력·AI는 아직이다.`,
        },
      ],
    },
  ];
}
