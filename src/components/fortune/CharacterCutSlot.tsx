import Image from "next/image";
import type { FortunePanelCut } from "@/lib/fortune-cuts";

/**
 * Renders the official cut image when `cut.enabled`, otherwise a neutral
 * “공식 이미지 필요” slot — no SVG stand-ins, no home-hero crop.
 */
export function CharacterCutSlot({ cut }: { cut: FortunePanelCut }) {
  return (
    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-gold/30 bg-ivory-deep/40 shadow-[0_18px_40px_rgba(26,18,16,0.12)]">
      {cut.enabled ? (
        <Image
          src={cut.src}
          alt={cut.alt}
          width={cut.width}
          height={cut.height}
          className="h-full w-full object-cover object-top"
          priority
        />
      ) : (
        <div
          className="flex h-full w-full flex-col items-center justify-center gap-2 bg-bubble px-5 text-center"
          role="img"
          aria-label={`${cut.label} 공식 컷 이미지 필요`}
        >
          <p className="font-display text-lg text-ink">{cut.label}</p>
          <p className="max-w-[16rem] text-xs leading-relaxed text-wine">
            공식 컷 이미지가 필요합니다. 홈 히어로와 같은 팔자언니·복냥이 디자인으로
            컷 전용 파일을 넣어 주세요.
          </p>
          <p className="mt-1 rounded-lg border border-dashed border-bubble-border bg-ivory/80 px-2.5 py-1.5 font-mono text-[10px] leading-relaxed text-ink-soft/75">
            {cut.src.replace(/^\//, "")}
          </p>
          <p className="text-[10px] text-ink-soft/55">{cut.note}</p>
        </div>
      )}
      <span className="absolute left-3 top-3 rounded-full border border-gold/40 bg-ink/55 px-2.5 py-1 text-[10px] font-medium tracking-wide text-ivory backdrop-blur-sm">
        {cut.label}
      </span>
    </div>
  );
}
