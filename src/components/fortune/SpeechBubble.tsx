import type { ReactNode } from "react";
import type { BubbleDrift, BubbleSize, Speaker } from "./sample-story";

const SIZE_CLASS: Record<BubbleSize, string> = {
  sm: "max-w-[72%] px-3.5 py-2.5 text-[0.95rem]",
  md: "max-w-[82%] px-4 py-3 text-[1.05rem]",
  lg: "max-w-[90%] px-[1.15rem] py-3.5 text-[1.12rem]",
};

const DRIFT_CLASS: Record<BubbleDrift, string> = {
  start: "justify-start pl-0 pr-6",
  mid: "justify-center px-3",
  end: "justify-end pl-6 pr-0",
  wide: "justify-start px-1",
};

export function SpeechBubble({
  speaker,
  children,
  delayMs = 0,
  size = "md",
  drift,
}: {
  speaker: Speaker;
  children: ReactNode;
  delayMs?: number;
  size?: BubbleSize;
  drift?: BubbleDrift;
}) {
  const isUnnie = speaker === "unnie";
  const resolvedDrift = drift ?? (isUnnie ? "start" : "end");

  return (
    <div
      className={["story-reveal flex w-full", DRIFT_CLASS[resolvedDrift]].join(
        " ",
      )}
      style={{ animationDelay: `${delayMs}ms` }}
    >
      <figure
        className={[
          "speech-bubble relative",
          SIZE_CLASS[size],
          isUnnie ? "" : "speech-bubble-cat",
          size === "lg" ? "shadow-[0_10px_28px_rgba(26,18,16,0.1)]" : "",
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
        <blockquote className="font-bubble font-bold leading-snug text-ink not-italic">
          {children}
        </blockquote>
      </figure>
    </div>
  );
}
