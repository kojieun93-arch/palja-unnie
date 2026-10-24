export function StorySummary({ items }: { items: string[] }) {
  return (
    <aside
      className="story-reveal mx-auto w-full max-w-md px-5"
      aria-label="성향 요약"
    >
      <ul className="flex flex-col gap-2 border-y border-gold/25 py-4">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-2.5 text-sm font-medium leading-snug text-ink"
          >
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-wine" aria-hidden />
            {item}
          </li>
        ))}
      </ul>
    </aside>
  );
}
