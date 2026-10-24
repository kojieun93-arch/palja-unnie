import type { ReactNode } from "react";
import type { Speaker } from "./sample-story";

export function SpeechBubble({
  speaker,
  children,
  delayMs = 0,
}: {
  speaker: Speaker;
  children: ReactNode;
  delayMs?: number;
}) {
  const isUnnie = speaker === "unnie";

  return (
    <div
      className={[
        "story-reveal flex w-full",
        isUnnie ? "justify-start" : "justify-end",
      ].join(" ")}
      style={{ animationDelay: `${delayMs}ms` }}
    >
      <figure
        className={[
          "speech-bubble relative max-w-[86%] px-4 py-3",
          isUnnie ? "" : "speech-bubble-cat",
        ].join(" ")}
      >
        <figcaption
          className={[
            "mb-1 text-[10px] font-medium tracking-wide",
            isUnnie ? "text-wine" : "text-deep-purple-soft",
          ].join(" ")}
        >
          {isUnnie ? "팔자언니" : "복냥이"}
        </figcaption>
        <blockquote className="font-bubble text-[1.05rem] font-bold leading-snug text-ink not-italic">
          {children}
        </blockquote>
      </figure>
    </div>
  );
}
