import { CharacterHero } from "@/components/CharacterHero";

export default function Home() {
  return (
    <div className="mx-auto min-h-dvh w-full max-w-md bg-[#1a1020]">
      {/* Brand title is in the illustration — keep one for a11y only */}
      <h1 className="sr-only">팔자언니</h1>
      <CharacterHero />
    </div>
  );
}
