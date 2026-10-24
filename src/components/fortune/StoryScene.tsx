import { getFortuneStoryCut } from "@/lib/fortune-cuts";
import { CharacterScene } from "./CharacterScene";
import { SpeechBubble } from "./SpeechBubble";
import { StoryEnding } from "./StoryEnding";
import { StorySummary } from "./StorySummary";
import type { StorySceneData } from "./sample-story";

export function StoryScene({ data }: { data: StorySceneData }) {
  const cut = getFortuneStoryCut(data.scene - 1);
  const isLast = data.scene === 5;

  return (
    <section
      className="story-scene relative flex w-full flex-col"
      aria-labelledby={`scene-${data.scene}-title`}
      data-scene={data.scene}
    >
      <h2 id={`scene-${data.scene}-title`} className="sr-only">
        {data.title}
      </h2>

      <CharacterScene cut={cut} />

      <div className="relative z-10 -mt-6 flex flex-col gap-3.5 px-4 pb-10 pt-2">
        {data.lines.map((line, i) => (
          <SpeechBubble
            key={`${data.id}-${i}`}
            speaker={line.speaker}
            delayMs={80 + i * 70}
          >
            {line.text}
          </SpeechBubble>
        ))}

        {data.mbtiSample ? (
          <div
            className="story-reveal mx-auto mt-1 w-full max-w-md rounded-2xl border border-deep-purple/20 bg-deep-purple/[0.06] px-4 py-3.5 text-center"
            style={{ animationDelay: "280ms" }}
          >
            <p className="font-display text-2xl text-deep-purple">
              {data.mbtiSample.label}
            </p>
            <p className="mt-1.5 text-[11px] leading-relaxed text-ink-soft/75">
              {data.mbtiSample.note}
            </p>
          </div>
        ) : null}

        {data.summary ? <StorySummary items={data.summary} /> : null}

        {isLast ? (
          <div className="mt-4">
            <StoryEnding />
          </div>
        ) : null}
      </div>

      {/* soft seam into next scene */}
      {!isLast ? (
        <div className="story-seam pointer-events-none h-10 w-full" aria-hidden />
      ) : null}
    </section>
  );
}
