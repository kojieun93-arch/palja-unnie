export function BrandMark({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} role="img" aria-hidden>
      <circle cx="24" cy="24" r="22" fill="#1a1210" />
      <circle cx="24" cy="24" r="17" fill="none" stroke="#c9a35a" strokeWidth="1.25" opacity="0.75" />
      {/* plum blossom */}
      <g transform="translate(24 24)">
        {[0, 72, 144, 216, 288].map((deg) => (
          <ellipse
            key={deg}
            cx="0"
            cy="-7.5"
            rx="4.2"
            ry="6.2"
            fill="#8b1e3a"
            transform={`rotate(${deg})`}
          />
        ))}
        <circle r="3.2" fill="#c9a35a" />
        <circle r="1.4" fill="#f6efe3" opacity="0.85" />
      </g>
    </svg>
  );
}
