import Link from "next/link";
import { BrandMark } from "@/components/BrandMark";

export default function ConsultPage() {
  return (
    <div className="page-shell relative mx-auto flex min-h-dvh w-full max-w-md flex-col overflow-hidden">
      <div className="lattice-veil pointer-events-none absolute inset-0" aria-hidden />

      <main className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 py-10 text-center">
        <span
          className="animate-ember mb-5 inline-block h-10 w-8 rounded-md bg-gradient-to-b from-gold to-wine/70 shadow-[0_0_28px_rgba(232,168,92,0.45)]"
          aria-hidden
        />
        <BrandMark className="mb-4 h-11 w-11" />
        <h1 className="font-display text-3xl text-ink">상담실 준비 중</h1>
        <p className="speech-line mt-5 max-w-[16.5rem] px-4 py-3 font-bubble text-lg font-bold leading-snug text-ink">
          야, 아직 자리 깔고 있다. 조금만 기다려라.
        </p>
        <p className="mt-6 text-sm text-ink-soft/70">
          사주 상담 플로우는 곧 붙일 예정이에요.
        </p>

        <Link
          href="/"
          className="mt-10 inline-flex items-center gap-1 rounded-xl border border-bubble-border bg-bubble px-4 py-2.5 text-sm font-medium text-wine transition active:scale-[0.98]"
        >
          ← 홈으로 돌아가기
        </Link>
      </main>
    </div>
  );
}
