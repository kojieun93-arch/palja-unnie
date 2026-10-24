import Link from "next/link";
import { BrandMark } from "@/components/BrandMark";
import { CharacterHero } from "@/components/CharacterHero";

export default function Home() {
  return (
    <div className="page-shell relative mx-auto flex min-h-dvh w-full max-w-md flex-col overflow-hidden">
      <div className="lattice-veil pointer-events-none absolute inset-0" aria-hidden />

      <main className="relative z-10 flex flex-1 flex-col pb-[7.25rem]">
        {/* 1. Top: large character illustration */}
        <CharacterHero />

        {/* 2. Brand + copy */}
        <section className="relative -mt-2 flex flex-col items-center px-6 pt-1 text-center">
          <div
            className="animate-rise-in mb-2.5 flex items-center gap-2.5"
            style={{ animationDelay: "0.05s" }}
          >
            <BrandMark className="h-9 w-9 shrink-0" />
            <h1 className="font-display text-[2.75rem] leading-none tracking-tight text-ink">
              팔자언니
              <span
                className="ml-1 inline-block align-super text-[0.85rem] text-wine"
                aria-hidden
              >
                ✿
              </span>
            </h1>
          </div>

          <p
            className="animate-rise-in max-w-[18rem] text-[0.82rem] font-medium tracking-[0.04em] text-deep-purple-soft"
            style={{ animationDelay: "0.18s" }}
          >
            사주 × 웹툰 × AI × MBTI × 연애
          </p>

          <p
            className="speech-line animate-rise-in mt-5 max-w-[17.5rem] px-4 py-3 font-bubble text-[1.15rem] font-bold leading-snug text-ink"
            style={{ animationDelay: "0.32s" }}
          >
            야, 앉아봐라. 니 팔자 한번 봐줄게.
          </p>
        </section>
      </main>

      {/* Sticky CTA */}
      <div className="pointer-events-none fixed inset-x-0 bottom-0 z-30 mx-auto w-full max-w-md px-5 pb-[max(1.25rem,env(safe-area-inset-bottom))] pt-4">
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-28"
          style={{
            background:
              "linear-gradient(180deg, transparent 0%, rgba(247,240,230,0.9) 40%, #f7f0e6 100%)",
          }}
          aria-hidden
        />
        <Link
          href="/consult"
          className="animate-cta-pulse pointer-events-auto relative flex w-full items-center justify-center gap-2 rounded-2xl bg-wine px-5 py-4 font-display text-[1.3rem] tracking-wide text-ivory transition active:scale-[0.98]"
        >
          <span>내 팔자 보러가기</span>
          <span aria-hidden className="text-gold-bright">
            →
          </span>
        </Link>
      </div>
    </div>
  );
}
