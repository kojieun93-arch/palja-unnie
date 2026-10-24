import Image from "next/image";
import type { FortuneStoryCut } from "@/lib/fortune-cuts";

const MOOD_CLASS: Record<FortuneStoryCut["mood"], string> = {
  start: "scene-mood-start",
  closeup: "scene-mood-closeup",
  lantern: "scene-mood-lantern",
  playful: "scene-mood-playful",
  ending: "scene-mood-ending",
};

/**
 * Full-width story cut. Shows official art when enabled; otherwise an
 * atmospheric slot naming the missing file — never chibi / yellow-cat SVG.
 */
export function CharacterScene({ cut }: { cut: FortuneStoryCut }) {
  return (
    <div
      className={[
        "character-scene relative w-full overflow-hidden",
        MOOD_CLASS[cut.mood],
      ].join(" ")}
    >
      <div className="relative mx-auto aspect-[3/4] w-full max-w-md sm:aspect-[4/5]">
        {cut.enabled ? (
          <Image
            src={cut.src}
            alt={cut.alt}
            width={cut.width}
            height={cut.height}
            className="h-full w-full object-contain object-bottom"
            sizes="(max-width: 448px) 100vw, 448px"
            priority={cut.scene === 1}
          />
        ) : (
          <MissingCutPlaceholder cut={cut} />
        )}
      </div>
    </div>
  );
}

function MissingCutPlaceholder({ cut }: { cut: FortuneStoryCut }) {
  return (
    <div
      className="flex h-full w-full flex-col items-center justify-end gap-3 px-6 pb-10 pt-16 text-center"
      role="img"
      aria-label={`${cut.label} — 공식 컷 이미지 필요`}
    >
      <div className="absolute inset-x-6 top-8 bottom-14 rounded-[1.5rem] border border-gold/30 bg-ink/15 shadow-[inset_0_0_48px_rgba(26,18,16,0.2)]" />
      <div className="absolute inset-x-8 top-10 bottom-16 rounded-[1.25rem] border border-ivory/15" />

      <div className="relative z-10 max-w-[16rem]">
        <p className="font-display text-xl text-ivory drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)]">
          {cut.label}
        </p>
        <p className="mt-2 text-xs leading-relaxed text-ivory/85">
          공식 컷 이미지가 필요합니다. 홈 히어로를 자르지 말고 컷 전용 파일을 넣어
          주세요.
        </p>
        <p className="mt-3 rounded-lg border border-dashed border-gold/40 bg-ink/40 px-2.5 py-1.5 font-mono text-[10px] leading-relaxed text-gold-bright/90">
          {cut.src.replace(/^\//, "")}
        </p>
        <p className="mt-2 text-[10px] text-ivory/60">{cut.note}</p>
      </div>
    </div>
  );
}
