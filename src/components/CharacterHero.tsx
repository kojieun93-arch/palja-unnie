import Image from "next/image";
import Link from "next/link";
import { characterHeroAsset } from "@/lib/character-assets";

/**
 * Full mobile illustration for 팔자언니 + 복냥이.
 * Brand copy / speech bubbles are baked into the art — do not duplicate in HTML.
 * CTA is a real link overlaid on the painted button.
 */
export function CharacterHero() {
  const { enabled, src, width, height } = characterHeroAsset;

  if (!enabled) {
    return (
      <section className="flex min-h-[50vh] items-center justify-center bg-ivory px-6 text-center">
        <p className="text-sm text-ink-soft">캐릭터 이미지를 준비 중이에요.</p>
      </section>
    );
  }

  return (
    <section
      className="relative mx-auto w-full max-w-md overflow-hidden bg-[#1a1020]"
      aria-label="팔자언니와 복냥이"
    >
      <Image
        src={src}
        alt="팔자언니와 복냥이 — 야, 앉아봐라. 니 팔자 한번 봐줄게."
        width={width}
        height={height}
        priority
        sizes="(max-width: 448px) 100vw, 448px"
        className="block h-auto w-full"
      />

      {/* Clickable hit area over the painted “내 팔자 보러가기” button */}
      <Link
        href="/consult"
        aria-label="내 팔자 보러가기"
        className="absolute left-[18%] right-[18%] z-20 rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
        style={{
          /* Painted CTA sits ~50–51.5% down the 1024×1536 art */
          top: "49.2%",
          height: "3.6%",
        }}
      />
    </section>
  );
}
