import type { Gender } from "@/components/consult/types";
import { addressForGender } from "@/lib/consult-session";

export type Speaker = "unnie" | "boknyang";

export type StoryLine = {
  speaker: Speaker;
  text: string;
};

export type StorySceneData = {
  id: string;
  scene: 1 | 2 | 3 | 4 | 5;
  title: string;
  lines: StoryLine[];
  /** Optional short summary under dialogue (scene 3) */
  summary?: string[];
  /** Optional MBTI sample note (scene 4) */
  mbtiSample?: {
    label: string;
    note: string;
  };
};

export function buildSampleStory(gender: Gender | null): StorySceneData[] {
  const who = addressForGender(gender) || "니";

  return [
    {
      id: "start",
      scene: 1,
      title: "상담 시작",
      lines: [
        {
          speaker: "unnie",
          text: "오케이, 이제 니 팔자 한번 풀어보자.",
        },
        {
          speaker: "unnie",
          text: "근데 말이다… 좀 재밌는 게 보이네?",
        },
      ],
    },
    {
      id: "trait",
      scene: 2,
      title: "기본 성향",
      lines: [
        {
          speaker: "unnie",
          text: `${who}, 겉으로는 아무렇지 않은 척해도 생각이 꽤 많은 스타일 같네.`,
        },
        {
          speaker: "boknyang",
          text: "그거 그냥 언니 얘기 아니가?",
        },
        {
          speaker: "unnie",
          text: "야, 니는 좀 가만있어라.",
        },
      ],
    },
    {
      id: "love",
      scene: 3,
      title: "연애 성향",
      lines: [
        {
          speaker: "unnie",
          text: "연애할 때는 또 이야기가 달라진다.",
        },
        {
          speaker: "unnie",
          text: "마음 열기까지는 신중한데, 한번 좋아하면 진심인 편이라 카이.",
        },
        {
          speaker: "boknyang",
          text: "근데 상대도 진심인지는 확인해야지.",
        },
      ],
      summary: [
        "천천히 마음을 연다",
        "한번 빠지면 진심이다",
        "솔직한 상대와 잘 맞는다",
      ],
    },
    {
      id: "mbti",
      scene: 4,
      title: "사주 기반 MBTI",
      lines: [
        {
          speaker: "unnie",
          text: "니 성향을 MBTI 느낌으로 풀어보면 이런 재미도 있다.",
        },
        {
          speaker: "boknyang",
          text: "진짜 MBTI 검사 결과는 아니니까 참고만 해라.",
        },
      ],
      mbtiSample: {
        label: "ENFP 느낌",
        note: "사주 기반 엔터테인먼트 성향 표현 · 공식 검사·만세력 계산 아님",
      },
    },
    {
      id: "ending",
      scene: 5,
      title: "마무리",
      lines: [
        {
          speaker: "unnie",
          text: "자, 오늘은 여기까지다. 니 이야기는 아직 많이 남았다.",
        },
        {
          speaker: "boknyang",
          text: "다음에는 연애 쪽 제대로 한번 파보자.",
        },
      ],
    },
  ];
}
