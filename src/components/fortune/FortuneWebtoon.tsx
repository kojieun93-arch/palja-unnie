"use client";

import Link from "next/link";
import { useMemo, useState, useSyncExternalStore } from "react";
import { BrandMark } from "@/components/BrandMark";
import { addressForGender, readConsultGender } from "@/lib/consult-session";
import { getFortunePanelCut } from "@/lib/fortune-cuts";
import { CharacterCutSlot } from "./CharacterCutSlot";
import { buildSamplePanels } from "./sample-panels";

const emptySubscribe = () => () => {};

function useClientGender() {
  return useSyncExternalStore(emptySubscribe, readConsultGender, () => null);
}

export function FortuneWebtoon() {
  const gender = useClientGender();
  const [index, setIndex] = useState(0);

  const panels = useMemo(() => buildSamplePanels(gender), [gender]);
  const panel = panels[index];
  const cut = getFortunePanelCut(index);
  const total = panels.length;
  const address = addressForGender(gender);

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
            className="mt-8 w-full max-w-xs rounded-2xl bg-gradient-to-r from-wine-deep via-wine to-deep-purple px-4 py-3.5 text-center text-sm font-bold text-ivory shadow-[0_14px_32px_rgba(92,20,40,0.35)]"
          >
            상담 입력하러 가기
          </Link>
        </main>
      </div>
    );
  }

  return (
    <div className="page-shell relative mx-auto flex min-h-dvh w-full max-w-md flex-col overflow-hidden">
      <div className="lattice-veil pointer-events-none absolute inset-0" aria-hidden />

      <main className="relative z-10 flex flex-1 flex-col px-4 pb-6 pt-5">
        <header className="mb-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <BrandMark className="h-8 w-8 shrink-0" />
            <div>
              <p className="font-display text-lg leading-none text-ink">팔자 결과</p>
              <p className="mt-0.5 text-[11px] text-ink-soft/65">샘플 웹툰 · {address}</p>
            </div>
          </div>
          <Link
            href="/consult"
            className="rounded-lg border border-bubble-border bg-bubble/70 px-2.5 py-1.5 text-xs font-medium text-wine"
          >
            입력
          </Link>
        </header>

        <div
          className="mb-3 rounded-xl border border-dashed border-wine/35 bg-blush-soft/60 px-3 py-2 text-[11px] leading-relaxed text-wine-deep"
          role="note"
        >
          고정된 <strong>가상 샘플</strong>이다. 생년월일로 실제 만세력·사주 분석한 결과가
          아니다.
        </div>

        {/* Progress */}
        <div className="mb-3 flex items-center gap-2" aria-label={`진행 ${index + 1} / ${total}`}>
          {panels.map((p, i) => (
            <button
              key={p.id}
              type="button"
              onClick={() => setIndex(i)}
              className={[
                "h-1.5 flex-1 rounded-full transition",
                i <= index ? "bg-wine" : "bg-bubble-border",
              ].join(" ")}
              aria-label={`${i + 1}컷으로 이동`}
              aria-current={i === index}
            />
          ))}
          <span className="ml-1 shrink-0 text-[11px] font-medium tabular-nums text-ink-soft/70">
            {index + 1}/{total}
          </span>
        </div>

        <article
          key={panel.id}
          className="animate-rise-in flex flex-1 flex-col gap-3"
          aria-labelledby="panel-title"
        >
          <div className="flex items-end justify-between gap-2 px-0.5">
            <h1 id="panel-title" className="font-display text-xl text-ink">
              {panel.title}
            </h1>
            <span className="rounded-full border border-deep-purple/20 bg-deep-purple/[0.06] px-2 py-0.5 text-[10px] font-medium text-deep-purple-soft">
              {panel.topic}
            </span>
          </div>

          <CharacterCutSlot cut={cut} />

          <div className="flex flex-col gap-2.5">
            {panel.lines.map((line, i) => {
              const isUnnie = line.speaker === "unnie";
              return (
                <div
                  key={`${panel.id}-${i}`}
                  className={["flex", isUnnie ? "justify-start" : "justify-end"].join(" ")}
                >
                  <div
                    className={[
                      "max-w-[88%] px-3.5 py-2.5 font-bubble text-[0.98rem] font-bold leading-snug",
                      isUnnie
                        ? "speech-line text-ink"
                        : "rounded-2xl rounded-br-md border border-deep-purple/25 bg-deep-purple text-ivory shadow-[0_8px_20px_rgba(59,29,82,0.2)]",
                    ].join(" ")}
                  >
                    <span
                      className={[
                        "mb-1 block text-[10px] font-medium tracking-wide",
                        isUnnie ? "text-wine" : "text-gold-bright",
                      ].join(" ")}
                    >
                      {isUnnie ? "팔자언니" : "복냥이"}
                    </span>
                    {line.text}
                  </div>
                </div>
              );
            })}
          </div>
        </article>

        <div className="mt-4 flex gap-2">
          <button
            type="button"
            disabled={index === 0}
            onClick={() => setIndex((v) => Math.max(0, v - 1))}
            className="flex-1 rounded-2xl border border-bubble-border bg-bubble px-3 py-3.5 text-sm font-medium text-wine transition enabled:active:scale-[0.98] disabled:opacity-35"
          >
            ← 이전 컷
          </button>
          {index < total - 1 ? (
            <button
              type="button"
              onClick={() => setIndex((v) => Math.min(total - 1, v + 1))}
              className="animate-cta-pulse flex-[1.35] rounded-2xl bg-gradient-to-r from-wine-deep via-wine to-deep-purple px-3 py-3.5 text-sm font-bold text-ivory shadow-[0_12px_28px_rgba(92,20,40,0.32)] transition active:scale-[0.98]"
            >
              다음 컷 →
            </button>
          ) : (
            <Link
              href="/consult"
              className="flex-[1.35] rounded-2xl bg-gradient-to-r from-wine-deep via-wine to-deep-purple px-3 py-3.5 text-center text-sm font-bold text-ivory shadow-[0_12px_28px_rgba(92,20,40,0.32)]"
            >
              다시 상담하기
            </Link>
          )}
        </div>

        <p className="mt-3 text-center text-[10px] leading-relaxed text-ink-soft/50">
          결제·구독·만세력·AI 연동 없음 · 개인정보 URL/서버 저장 없음
        </p>
      </main>
    </div>
  );
}
