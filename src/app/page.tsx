import Link from "next/link";
import { Boknyangi } from "@/components/Boknyangi";
import { BrandMark } from "@/components/BrandMark";
import { PaljaUnnie } from "@/components/PaljaUnnie";
import { StarField } from "@/components/StarField";

const BUBBLES = [
  { text: "야, 니 왔나?", delay: "0.15s", align: "left" as const },
  { text: "일단 앉아봐라.", delay: "0.45s", align: "right" as const },
  { text: "내가 니 팔자 한번 볼게.", delay: "0.75s", align: "left" as const },
];

export default function Home() {
  return (
    <div className="home-sky relative mx-auto flex min-h-dvh w-full max-w-md flex-col overflow-hidden">
      <div className="home-pattern pointer-events-none absolute inset-0 opacity-70" aria-hidden />
      <StarField />

      <main className="relative z-10 flex flex-1 flex-col px-5 pb-[7.5rem] pt-6">
        {/* Brand — hero-level signal */}
        <header className="flex flex-col items-center text-center">
          <div className="mb-3 flex items-center gap-2.5">
            <BrandMark className="h-9 w-9 shrink-0" />
            <h1 className="font-display text-[2.65rem] leading-none tracking-tight text-deep-purple">
              팔자언니
            </h1>
          </div>
          <p className="max-w-[16rem] text-[0.95rem] font-medium leading-snug text-brown-soft">
            대구 MZ 무당언니가 봐주는 내 팔자
          </p>
        </header>

        {/* Character stage */}
        <section
          className="relative mt-5 flex flex-1 flex-col items-center justify-center"
          aria-label="팔자언니와 복냥이"
        >
          <div className="relative w-full">
            <div className="pointer-events-none absolute inset-x-0 top-2 z-20 flex flex-col gap-2.5 px-1">
              {BUBBLES.map((bubble) => (
                <div
                  key={bubble.text}
                  className={`flex ${bubble.align === "right" ? "justify-end" : "justify-start"}`}
                >
                  <p
                    className={`speech-bubble animate-bubble-in max-w-[78%] px-3.5 py-2.5 font-bubble text-[1.05rem] font-bold leading-snug text-ink ${
                      bubble.align === "right" ? "speech-bubble-right" : ""
                    }`}
                    style={{ animationDelay: bubble.delay }}
                  >
                    {bubble.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="animate-float-soft relative mx-auto mt-28 flex justify-center">
              <div
                className="absolute -inset-x-8 top-10 -z-10 h-48 rounded-full opacity-40"
                style={{
                  background:
                    "radial-gradient(ellipse at center, rgba(201,163,90,0.35) 0%, transparent 70%)",
                }}
                aria-hidden
              />
              <PaljaUnnie />
            </div>
          </div>

          {/* Sidekick */}
          <div className="mt-1 flex w-full items-end justify-end gap-2 pr-1">
            <p
              className="speech-bubble cat-bubble animate-bubble-in max-w-[11.5rem] px-3 py-2 font-bubble text-[0.95rem] font-bold leading-snug text-brown"
              style={{ animationDelay: "1.05s" }}
            >
              언니 오늘 손님 많다.
            </p>
            <Boknyangi />
          </div>
        </section>
      </main>

      {/* Sticky CTA */}
      <div className="pointer-events-none fixed inset-x-0 bottom-0 z-30 mx-auto w-full max-w-md px-5 pb-[max(1.25rem,env(safe-area-inset-bottom))] pt-4">
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-28"
          style={{
            background:
              "linear-gradient(180deg, transparent 0%, rgba(246,239,227,0.92) 45%, #f6efe3 100%)",
          }}
          aria-hidden
        />
        <Link
          href="/consult"
          className="animate-cta-glow pointer-events-auto relative flex w-full items-center justify-center gap-2 rounded-2xl bg-deep-purple px-5 py-4 font-display text-[1.35rem] tracking-wide text-ivory transition active:scale-[0.98]"
        >
          <span>내 팔자 보러가기</span>
          <span aria-hidden className="text-soft-gold-bright">
            →
          </span>
        </Link>
      </div>
    </div>
  );
}
