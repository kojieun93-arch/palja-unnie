import { getFortuneStoryCut } from "@/lib/fortune-cuts";
import { CharacterScene } from "./CharacterScene";
import { SpeechBubble } from "./SpeechBubble";
import { StoryEnding } from "./StoryEnding";
import { StorySummary } from "./StorySummary";
import type { StorySceneData } from "./sample-story";

/** Extra vertical rhythm between bubbles by scene mood */
const SCENE_GAP: Record<StorySceneData["scene"], string> = {
  1: "gap-4",
  2: "gap-5",
  3: "gap-5",
  4: "gap-4",
  5: "gap-4",
};

const SCENE_PAD: Record<StorySceneData["scene"], string> = {
  1: "pb-12 pt-3",
  2: "pb-14 pt-4",
  3: "pb-14 pt-4",
  4: "pb-12 pt-3",
  5: "pb-10 pt-3",
};

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

      <div
        className={[
          "relative z-10 -mt-6 flex flex-col px-4",
          SCENE_GAP[data.scene],
          SCENE_PAD[data.scene],
        ].join(" ")}
      >
        <p className="story-reveal px-1 text-[11px] font-medium tracking-wide text-deep-purple-soft/80">
          {data.title}
          <span className="mt-0.5 block font-normal text-ink-soft/55">
            {data.moodHint}
          </span>
        </p>

        {data.lines.map((line, i) => (
          <SpeechBubble
            key={`${data.id}-${i}`}
            speaker={line.speaker}
            size={line.size}
            drift={line.drift}
            delayMs={90 + i * 90}
          >
            {line.text}
          </SpeechBubble>
        ))}

        {data.mbtiSample ? (
          <div
            className="story-reveal mx-auto mt-2 w-full max-w-md rounded-2xl border border-deep-purple/20 bg-deep-purple/[0.06] px-4 py-3.5 text-center"
            style={{ animationDelay: "360ms" }}
          >
            <p className="font-display text-2xl text-deep-purple">
              {data.mbtiSample.label}
            </p>
            <p className="mt-1.5 text-[11px] leading-relaxed text-ink-soft/75">
              {data.mbtiSample.note}
            </p>
          </div>
        ) : null}

        {data.summary ? (
          <div className="mt-1">
            <StorySummary items={data.summary} />
          </div>
        ) : null}

        {isLast ? (
          <div className="mt-5">
            <StoryEnding />
          </div>
        ) : null}
      </div>

      {!isLast ? (
        <div className="story-seam pointer-events-none h-14 w-full" aria-hidden />
      ) : null}
    </section>
  );
}
