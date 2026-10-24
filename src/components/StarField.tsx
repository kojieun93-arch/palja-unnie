const STARS = [
  { top: "6%", left: "8%", size: 3, delay: "0s" },
  { top: "11%", left: "78%", size: 2, delay: "0.6s" },
  { top: "18%", left: "92%", size: 3, delay: "1.2s" },
  { top: "28%", left: "4%", size: 2, delay: "0.3s" },
  { top: "42%", left: "88%", size: 2.5, delay: "1.8s" },
  { top: "58%", left: "6%", size: 2, delay: "0.9s" },
  { top: "72%", left: "94%", size: 3, delay: "1.4s" },
  { top: "8%", left: "48%", size: 2, delay: "2.1s" },
] as const;

export function StarField() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {STARS.map((star) => (
        <span
          key={`${star.top}-${star.left}`}
          className="animate-twinkle absolute rounded-full bg-soft-gold-bright"
          style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
            animationDelay: star.delay,
            boxShadow: "0 0 6px rgba(226, 192, 122, 0.7)",
          }}
        />
      ))}
      <svg
        className="animate-moon-drift absolute right-[7%] top-[5%] h-10 w-10 text-soft-gold opacity-80"
        viewBox="0 0 40 40"
        fill="currentColor"
      >
        <path d="M28.5 8.2a14 14 0 1 0 3.3 22.1A12.2 12.2 0 0 1 18 10.4a12 12 0 0 1 10.5-2.2Z" />
      </svg>
    </div>
  );
}
