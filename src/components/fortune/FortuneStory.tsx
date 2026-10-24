"use client";

import Link from "next/link";
import { useEffect, useMemo, useSyncExternalStore } from "react";
import { BrandMark } from "@/components/BrandMark";
import { addressForGender, readConsultGender } from "@/lib/consult-session";
import { listMissingFortuneCuts } from "@/lib/fortune-cuts";
import { StoryScene } from "./StoryScene";
import { buildSampleStory } from "./sample-story";

const emptySubscribe = () => () => {};

function useClientGender() {
  return useSyncExternalStore(emptySubscribe, readConsultGender, () => null);
}

export function FortuneStory() {
  const gender = useClientGender();
  const scenes = useMemo(() => buildSampleStory(gender), [gender]);
  const address = addressForGender(gender);
  const missing = listMissingFortuneCuts();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  if (!gender) {
    return (
      <div className="page-shell relative mx-auto flex min-h-dvh w-full max-w-md flex-col overflow-hidden">
        <div className="lattice-veil pointer-events-none absolute inset-0" aria-hidden />
        <main className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 py-10 text-center">
          <BrandMark className="mb-4 h-11 w-11" />
          <h1 className="font-display text-2xl text-ink">먼저 생일부터</h1>
          <p className="speech-line mt-5 max-w-[17rem] px-4 py-3 font-bubble text-lg font-bold leading-snug text-ink">
            야, 입력도 안 하고 결과부터 보겠다고? 상담부터 와라.
          </p>
          <Link
            href="/consult"
            className="mt-8 w-full max-w-xs rounded-2xl bg-wine px-4 py-3.5 text-center text-sm font-bold text-ivory shadow-[0_14px_32px_rgba(92,20,40,0.35)]"
          >
            상담 입력하러 가기
          </Link>
        </main>
      </div>
    );
  }

  return (
    <div className="story-shell relative mx-auto w-full max-w-md">
      <header className="sticky top-0 z-30 border-b border-gold/20 bg-ivory/92 px-4 py-3 backdrop-blur-md">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <BrandMark className="h-8 w-8 shrink-0" />
            <div>
              <p className="font-display text-lg leading-none text-ink">팔자 이야기</p>
              <p className="mt-0.5 text-[11px] text-ink-soft/65">
                샘플 체험 · 실제 사주 분석 전
                {address ? ` · ${address}` : ""}
              </p>
            </div>
          </div>
          <Link
            href="/consult"
            className="rounded-lg border border-bubble-border bg-bubble/80 px-2.5 py-1.5 text-xs font-medium text-wine"
          >
            입력
          </Link>
        </div>
        <p
          className="mt-2 rounded-lg border border-dashed border-wine/30 bg-blush-soft/70 px-2.5 py-1.5 text-[10px] leading-relaxed text-wine-deep"
          role="note"
        >
          고정된 <strong>가상 샘플</strong>이다. 생년월일로 실제 만세력·사주를 푼 결과가
          아니다.
        </p>
      </header>

      <main className="relative">
        {scenes.map((scene) => (
          <StoryScene key={scene.id} data={scene} />
        ))}
      </main>

      {missing.length > 0 ? (
        <aside className="border-t border-gold/20 bg-ivory-deep/50 px-4 py-5 text-[11px] leading-relaxed text-ink-soft/80">
          <p className="font-medium text-wine">공식 컷 이미지 누락 ({missing.length})</p>
          <ul className="mt-2 list-inside list-disc space-y-1 font-mono text-[10px]">
            {missing.map((c) => (
              <li key={c.src}>{c.src.replace(/^\//, "")}</li>
            ))}
          </ul>
        </aside>
      ) : null}
    </div>
  );
}
