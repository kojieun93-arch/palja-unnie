import type { Gender } from "@/components/consult/types";
import { addressForGender } from "@/lib/consult-session";

export type Speaker = "unnie" | "boknyang";

export type BubbleSize = "sm" | "md" | "lg";
export type BubbleDrift = "start" | "mid" | "end" | "wide";

export type StoryLine = {
  speaker: Speaker;
  text: string;
  size?: BubbleSize;
  drift?: BubbleDrift;
};

export type StorySceneData = {
  id: string;
  scene: 1 | 2 | 3 | 4 | 5;
  title: string;
  moodHint: string;
  lines: StoryLine[];
  summary?: string[];
  mbtiSample?: {
    label: string;
    note: string;
  };
};

/** Prefix with 언니/오빠 only when gender is known. Never leaves `{호칭}` literal. */
function addressLine(gender: Gender | null, body: string): string {
  const who = addressForGender(gender);
  if (!who) return body;
  return `${who}, ${body}`;
}

export function buildSampleStory(gender: Gender | null): StorySceneData[] {
  return [
    {
      id: "moonlit-start",
      scene: 1,
      title: "달빛 아래 상담 시작",
      moodHint: "밤하늘 · 은은한 달빛 · 따뜻한 등불",
      lines: [
        {
          speaker: "unnie",
          text: "왔나? 일단 여기 앉아봐라.",
          size: "lg",
          drift: "start",
        },
        {
          speaker: "unnie",
          text: "니 팔자에 어떤 이야기가 숨어 있는지 한번 볼까?",
          size: "md",
          drift: "mid",
        },
        {
          speaker: "unnie",
          text: "근데 말이다… 생각보다 재밌는 이야기가 많을지도 모르겠네.",
          size: "md",
          drift: "end",
        },
        {
          speaker: "boknyang",
          text: "언니, 시작부터 분위기 잡는 거 보소.",
          size: "sm",
          drift: "end",
        },
        {
          speaker: "unnie",
          text: "야, 니는 조용히 좀 해라. 이제 시작이다.",
          size: "md",
          drift: "start",
        },
      ],
    },
    {
      id: "hidden-self",
      scene: 2,
      title: "나도 몰랐던 내 모습",
      moodHint: "별빛 창가 · 살짝 미소",
      lines: [
        {
          speaker: "unnie",
          text: addressLine(gender, "사람들 앞에서는 괜찮은 척할 때가 있제?"),
          size: "md",
          drift: "start",
        },
        {
          speaker: "unnie",
          text: "근데 혼자 있을 땐 생각이 많아지는 모습도 있을 것 같네.",
          size: "lg",
          drift: "mid",
        },
        {
          speaker: "unnie",
          text: "마음은 생각보다 섬세한 편일지도 모르겠다.",
          size: "md",
          drift: "wide",
        },
        {
          speaker: "boknyang",
          text: "언니, 그거 언니 이야기 아니가?",
          size: "sm",
          drift: "end",
        },
        {
          speaker: "unnie",
          text: "아이고, 니는 꼭 한마디를 보태야 되나.",
          size: "sm",
          drift: "start",
        },
      ],
    },
    {
      id: "heart-moment",
      scene: 3,
      title: "마음이 움직이는 순간",
      moodHint: "분홍빛 달빛 · 꽃잎 · 부드러운 조명",
      lines: [
        {
          speaker: "unnie",
          text: addressLine(gender, "연애 이야기도 한번 해볼까?"),
          size: "md",
          drift: "start",
        },
        {
          speaker: "unnie",
          text: "누군가 마음에 들어오면 쉽게 잊기 어려운 타입일 수도 있겠네.",
          size: "lg",
          drift: "mid",
        },
        {
          speaker: "unnie",
          text: "근데 니 마음도 소중한 거 알제?",
          size: "md",
          drift: "wide",
        },
        {
          speaker: "boknyang",
          text: "상대 마음만 보지 말고 니 행복도 챙기라.",
          size: "md",
          drift: "end",
        },
        {
          speaker: "unnie",
          text: "오, 오늘은 니가 맞는 말 하네.",
          size: "sm",
          drift: "start",
        },
      ],
      summary: [
        "마음이 열릴 땐 천천히",
        "한번 들어오면 잘 잊지 못한다",
        "니 행복도 같이 챙긴다",
      ],
    },
    {
      id: "saju-flavor",
      scene: 4,
      title: "사주로 보는 나의 성향",
      moodHint: "별자리 · 달빛 · 장난스러운 미소",
      lines: [
        {
          speaker: "unnie",
          text: "니 성향을 MBTI 느낌으로 풀어보면 어떨까?",
          size: "md",
          drift: "start",
        },
        {
          speaker: "unnie",
          text: "오늘의 샘플은 ENFP 느낌이다.",
          size: "lg",
          drift: "mid",
        },
        {
          speaker: "unnie",
          text: "근데 이건 진짜 MBTI 검사랑 다른 재미로 보는 해석이다.",
          size: "md",
          drift: "wide",
        },
        {
          speaker: "boknyang",
          text: "재미는 재미고, 진짜 성격은 본인이 제일 잘 알지.",
          size: "md",
          drift: "end",
        },
      ],
      mbtiSample: {
        label: "ENFP 느낌",
        note: "고정 샘플 · 사주 기반 엔터테인먼트 표현 · 공식 검사·만세력 계산 아님",
      },
    },
    {
      id: "dawn-goodbye",
      scene: 5,
      title: "다음 이야기를 기다리며",
      moodHint: "새벽빛 한옥 · 둘의 나란한 자리",
      lines: [
        {
          speaker: "unnie",
          text: "어때, 니 이야기를 조금은 새롭게 본 것 같나?",
          size: "md",
          drift: "start",
        },
        {
          speaker: "unnie",
          text: "오늘은 여기까지지만, 앞으로 들려줄 이야기는 더 많다.",
          size: "lg",
          drift: "mid",
        },
        {
          speaker: "unnie",
          text: "언제든 또 놀러 온나. 내가 기다리고 있을게.",
          size: "md",
          drift: "wide",
        },
        {
          speaker: "boknyang",
          text: "올 때 간식도 좀 챙겨오고.",
          size: "sm",
          drift: "end",
        },
        {
          speaker: "unnie",
          text: "야, 니는 진짜 먹을 생각뿐이가.",
          size: "sm",
          drift: "start",
        },
      ],
    },
  ];
}
