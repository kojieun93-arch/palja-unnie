import Link from "next/link";
import { BrandMark } from "@/components/BrandMark";

export default function ConsultPage() {
  return (
    <div className="home-sky relative mx-auto flex min-h-dvh w-full max-w-md flex-col overflow-hidden">
      <div className="home-pattern pointer-events-none absolute inset-0 opacity-70" aria-hidden />

      <main className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 py-10 text-center">
        <BrandMark className="mb-5 h-12 w-12" />
        <h1 className="font-display text-3xl text-deep-purple">상담 준비 중</h1>
        <p className="mt-3 max-w-[16rem] font-bubble text-lg font-bold leading-snug text-brown-soft">
          야, 아직 자리 깔고 있다. 조금만 기다려라.
        </p>
        <p className="mt-6 text-sm text-brown-soft/80">
          사주 상담 플로우는 곧 붙일 예정이에요.
        </p>

        <Link
          href="/"
          className="mt-10 inline-flex items-center gap-1 rounded-xl border border-bubble-border bg-bubble px-4 py-2.5 text-sm font-medium text-deep-purple transition active:scale-[0.98]"
        >
          ← 홈으로 돌아가기
        </Link>
      </main>
    </div>
  );
}
