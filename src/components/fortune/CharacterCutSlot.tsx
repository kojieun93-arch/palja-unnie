import Image from "next/image";
import { BrandMark } from "@/components/BrandMark";
import { fortuneCutSlots, type FortuneCutSlot } from "@/lib/fortune-cuts";

type Role = keyof typeof fortuneCutSlots;

function PlaceholderArt({ role }: { role: Role }) {
  if (role === "boknyang") {
    return (
      <div
        className="relative flex h-full w-full flex-col items-center justify-center bg-gradient-to-b from-[#3b1d52] via-[#5c1428] to-[#1a1210]"
        aria-hidden
      >
        <div className="absolute inset-0 opacity-30"
          style={{
            background:
              "radial-gradient(circle at 50% 35%, rgba(232,168,92,0.45), transparent 55%)",
          }}
        />
        {/* Simple silhouette — not a random character; replace via fortuneCutSlots.boknyang.src */}
        <svg viewBox="0 0 120 120" className="relative z-10 h-28 w-28 text-gold-bright">
          <ellipse cx="60" cy="78" rx="34" ry="26" fill="currentColor" opacity="0.9" />
          <circle cx="60" cy="48" r="28" fill="currentColor" />
          <path d="M32 38 L22 12 L44 30 Z" fill="currentColor" />
          <path d="M88 38 L98 12 L76 30 Z" fill="currentColor" />
          <circle cx="50" cy="48" r="4" fill="#1a1210" />
          <circle cx="70" cy="48" r="4" fill="#1a1210" />
          <path
            d="M52 60 Q60 66 68 60"
            fill="none"
            stroke="#1a1210"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
        <p className="relative z-10 mt-3 font-display text-lg text-ivory">복냥이</p>
        <p className="relative z-10 mt-1 px-4 text-center text-[10px] text-ivory/55">
          컷 이미지 자리 · public/characters/cuts/
        </p>
      </div>
    );
  }

  return (
    <div
      className="relative flex h-full w-full flex-col items-center justify-center bg-gradient-to-b from-[#5c1428] via-[#8b1e3a] to-[#3b1d52]"
      aria-hidden
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 20%, rgba(232,168,92,0.35), transparent 50%)",
        }}
      />
      <BrandMark className="relative z-10 h-16 w-16" />
      <p className="relative z-10 mt-4 font-display text-xl text-ivory">팔자언니</p>
      <p className="relative z-10 mt-1 max-w-[14rem] px-4 text-center text-[10px] leading-relaxed text-ivory/55">
        홈 히어로와 같은 인물 · 컷 아트 준비되면 여기만 교체
      </p>
    </div>
  );
}

export function CharacterCutSlot({
  role,
  active = true,
}: {
  role: Role;
  active?: boolean;
}) {
  const slot: FortuneCutSlot = fortuneCutSlots[role];

  return (
    <div
      className={[
        "relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-gold/30 shadow-[0_18px_40px_rgba(26,18,16,0.18)] transition",
        active ? "opacity-100" : "opacity-55",
      ].join(" ")}
    >
      {slot.src ? (
        <Image
          src={slot.src}
          alt={slot.alt}
          width={slot.width}
          height={slot.height}
          className="h-full w-full object-cover"
          priority
        />
      ) : (
        <PlaceholderArt role={role} />
      )}
      <span className="absolute left-3 top-3 rounded-full border border-gold/40 bg-ink/55 px-2.5 py-1 text-[10px] font-medium tracking-wide text-ivory backdrop-blur-sm">
        {slot.label}
      </span>
    </div>
  );
}
