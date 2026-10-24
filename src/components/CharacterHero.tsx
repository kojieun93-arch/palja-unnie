import Image from "next/image";
import { characterHeroAsset } from "@/lib/character-assets";

/**
 * Large top illustration slot for 팔자언니 + 복냥이.
 * Swap art via `characterHeroAsset` — do not paste the brand reference sheet here.
 */
export function CharacterHero() {
  const { enabled, src, width, height } = characterHeroAsset;

  return (
    <section
      className="character-hero relative w-full overflow-hidden"
      aria-label="팔자언니와 복냥이"
    >
      <div className="hanok-glow pointer-events-none absolute inset-0" aria-hidden />
      <div className="lattice-veil pointer-events-none absolute inset-0 opacity-40" aria-hidden />

      {/* lantern orbs */}
      <span className="lantern lantern-l pointer-events-none absolute" aria-hidden />
      <span className="lantern lantern-r pointer-events-none absolute" aria-hidden />

      <div className="relative z-10 mx-auto aspect-[12/14] w-full max-w-[26rem] min-h-[22rem]">
        {enabled ? (
          <Image
            src={src}
            alt="팔자언니와 복냥이"
            width={width}
            height={height}
            priority
            className="h-full w-full object-contain object-bottom"
          />
        ) : (
          <HeroPlaceholder />
        )}
      </div>

      {/* soft fade into page body */}
      <div className="hero-fade pointer-events-none absolute inset-x-0 bottom-0 h-24" aria-hidden />
    </section>
  );
}

function HeroPlaceholder() {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-end px-4 pb-2 pt-8">
      {/* gold frame suggestion */}
      <div className="absolute inset-x-5 top-6 bottom-10 rounded-[1.75rem] border border-gold/35 bg-ink/20 shadow-[inset_0_0_60px_rgba(90,20,40,0.25)]" />
      <div className="absolute inset-x-7 top-8 bottom-12 rounded-[1.4rem] border border-gold/15" />

      <div className="relative z-10 flex w-full items-end justify-center gap-1">
        {/* 팔자언니 silhouette — adult proportion, not chibi */}
        <svg
          viewBox="0 0 200 280"
          className="h-auto w-[68%] max-w-[220px] drop-shadow-[0_12px_28px_rgba(26,18,16,0.35)]"
          aria-hidden
        >
          <defs>
            <linearGradient id="unnieSil" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#3a1a28" />
              <stop offset="45%" stopColor="#5c1830" />
              <stop offset="100%" stopColor="#1a1210" />
            </linearGradient>
            <linearGradient id="unnieHair" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#2a1c18" />
              <stop offset="100%" stopColor="#141010" />
            </linearGradient>
          </defs>
          {/* seated robe mass */}
          <path
            d="M28 268c8-72 28-118 72-118s64 46 72 118c-20 8-44 12-72 12s-52-4-72-12Z"
            fill="url(#unnieSil)"
            opacity="0.92"
          />
          <path
            d="M48 210c20 14 44 22 52 22s32-8 52-22"
            fill="none"
            stroke="#c9a35a"
            strokeWidth="1.4"
            opacity="0.45"
          />
          {/* torso */}
          <path
            d="M78 150c6-28 22-44 22-44s16 16 22 44c4 22 6 48-4 62H82c-10-14-8-40-4-62Z"
            fill="url(#unnieSil)"
          />
          {/* wine inner collar hint */}
          <path d="M92 158c8 10 16 10 24 0" fill="none" stroke="#8b1e3a" strokeWidth="6" opacity="0.7" />
          {/* head */}
          <ellipse cx="100" cy="108" rx="28" ry="32" fill="#4a342c" opacity="0.85" />
          {/* half-up hair mass */}
          <path
            d="M68 112c2-36 18-58 32-58s30 22 32 58c-8-14-20-22-32-22s-24 8-32 22Z"
            fill="url(#unnieHair)"
          />
          <path
            d="M72 100c-8 28-6 58 4 78M128 100c8 28 6 58-4 78"
            fill="none"
            stroke="#1a1210"
            strokeWidth="10"
            strokeLinecap="round"
            opacity="0.55"
          />
          {/* binyeo hint */}
          <circle cx="118" cy="78" r="4" fill="#c9a35a" opacity="0.85" />
          <path d="M118 74v-8M112 78h-7" stroke="#c9a35a" strokeWidth="1.5" strokeLinecap="round" opacity="0.8" />
          {/* face soft plane */}
          <ellipse cx="100" cy="114" rx="18" ry="20" fill="#c4a090" opacity="0.35" />
        </svg>

        {/* 복냥이 tuxedo silhouette — small, beside her */}
        <svg
          viewBox="0 0 90 100"
          className="mb-6 h-auto w-[26%] max-w-[88px] drop-shadow-[0_8px_16px_rgba(26,18,16,0.3)]"
          aria-hidden
        >
          <ellipse cx="45" cy="78" rx="28" ry="18" fill="#1a1210" />
          <ellipse cx="45" cy="48" rx="26" ry="24" fill="#1a1210" />
          {/* white tuxedo chest */}
          <ellipse cx="45" cy="58" rx="12" ry="16" fill="#f6efe3" opacity="0.9" />
          <ellipse cx="45" cy="52" rx="14" ry="12" fill="#f6efe3" opacity="0.85" />
          {/* ears */}
          <path d="M22 40 L30 14 L40 38Z" fill="#1a1210" />
          <path d="M50 38 L60 14 L68 40Z" fill="#1a1210" />
          {/* red collar + gold bell */}
          <path d="M28 62h34" stroke="#8b1e3a" strokeWidth="4" strokeLinecap="round" />
          <circle cx="45" cy="68" r="5" fill="#c9a35a" />
          <circle cx="45" cy="68" r="2" fill="#f6efe3" opacity="0.7" />
          {/* sleepy eyes hint */}
          <path d="M32 48h10M48 48h10" stroke="#f6efe3" strokeWidth="1.8" strokeLinecap="round" opacity="0.55" />
        </svg>
      </div>

      <p className="relative z-10 mt-3 mb-4 max-w-[14rem] text-center font-bubble text-[0.95rem] font-bold leading-snug text-ivory/90">
        일러스트 준비 중
        <span className="mt-1 block font-body text-[0.7rem] font-medium tracking-wide text-gold/80">
          public/characters 에 교체
        </span>
      </p>
    </div>
  );
}
