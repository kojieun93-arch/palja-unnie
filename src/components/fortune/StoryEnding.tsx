import Link from "next/link";

export function StoryEnding() {
  return (
    <nav
      className="story-reveal mx-auto flex w-full max-w-md flex-col gap-3 px-5 pb-4"
      aria-label="상담 이후 이동"
    >
      <Link
        href="/consult"
        className="flex w-full items-center justify-center rounded-2xl bg-wine px-5 py-4 font-display text-[1.15rem] tracking-wide text-ivory transition active:scale-[0.98]"
      >
        다시 상담하기
      </Link>
      <Link
        href="/"
        className="flex w-full items-center justify-center rounded-2xl border border-bubble-border bg-bubble px-5 py-3.5 text-sm font-medium text-wine transition active:scale-[0.98]"
      >
        홈으로 돌아가기
      </Link>
    </nav>
  );
}
