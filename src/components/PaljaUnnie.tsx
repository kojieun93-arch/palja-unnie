export function PaljaUnnie() {
  return (
    <svg
      viewBox="0 0 280 320"
      className="h-auto w-full max-w-[280px]"
      role="img"
      aria-label="팔자언니 캐릭터"
    >
      <defs>
        <linearGradient id="hairGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2a1520" />
          <stop offset="100%" stopColor="#1a1210" />
        </linearGradient>
        <linearGradient id="skinGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f5d8c4" />
          <stop offset="100%" stopColor="#e8c4ab" />
        </linearGradient>
        <linearGradient id="hanbokGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#4a2568" />
          <stop offset="100%" stopColor="#2f163f" />
        </linearGradient>
      </defs>

      {/* soft ground glow */}
      <ellipse cx="140" cy="300" rx="86" ry="14" fill="#c9a35a" opacity="0.18" />

      {/* body / modern hanbok vibe */}
      <path
        d="M78 198c8-28 28-46 62-46s54 18 62 46c10 34 18 78-8 92H86c-26-14-18-58-8-92Z"
        fill="url(#hanbokGrad)"
      />
      <path
        d="M92 220c16 8 36 12 48 12s32-4 48-12"
        fill="none"
        stroke="#c9a35a"
        strokeWidth="2"
        opacity="0.7"
      />
      <circle cx="140" cy="236" r="5" fill="#c9a35a" opacity="0.85" />

      {/* arms */}
      <path
        d="M78 210c-18 18-22 42-10 52 8 6 16-2 20-14 4-14 6-28-10-38Z"
        fill="url(#skinGrad)"
      />
      <path
        d="M202 210c18 18 22 42 10 52-8 6-16-2-20-14-4-14-6-28 10-38Z"
        fill="url(#skinGrad)"
      />

      {/* hair back */}
      <path
        d="M70 132c4-58 42-92 70-92s66 34 70 92c2 28-6 56-18 72-8-34-28-52-52-52s-44 18-52 52c-12-16-20-44-18-72Z"
        fill="url(#hairGrad)"
      />

      {/* face */}
      <ellipse cx="140" cy="138" rx="52" ry="58" fill="url(#skinGrad)" />

      {/* bangs */}
      <path
        d="M90 118c8-34 30-52 50-52s42 18 50 52c-14-10-30-16-50-16s-36 6-50 16Z"
        fill="url(#hairGrad)"
      />
      <path
        d="M108 78c8 18 6 34-2 46M140 72c0 20 2 36 0 50M172 78c-8 18-6 34 2 46"
        fill="none"
        stroke="#1a1210"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.35"
      />

      {/* hair ornament */}
      <circle cx="168" cy="86" r="7" fill="#c9a35a" />
      <circle cx="168" cy="86" r="3.5" fill="#f6efe3" />
      <path d="M168 78v-8M162 82l-6-5M174 82l6-5" stroke="#c9a35a" strokeWidth="2" strokeLinecap="round" />

      {/* eyes */}
      <ellipse cx="120" cy="138" rx="7" ry="8" fill="#1a1210" />
      <ellipse cx="160" cy="138" rx="7" ry="8" fill="#1a1210" />
      <circle cx="122" cy="135" r="2.2" fill="#fff" />
      <circle cx="162" cy="135" r="2.2" fill="#fff" />

      {/* brows */}
      <path d="M108 122c6-5 16-6 22-2" fill="none" stroke="#1a1210" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M150 120c6-5 16-6 22-2" fill="none" stroke="#1a1210" strokeWidth="2.5" strokeLinecap="round" />

      {/* blush */}
      <ellipse cx="108" cy="152" rx="9" ry="5" fill="#e8a090" opacity="0.45" />
      <ellipse cx="172" cy="152" rx="9" ry="5" fill="#e8a090" opacity="0.45" />

      {/* smile */}
      <path
        d="M128 162c6 8 18 8 24 0"
        fill="none"
        stroke="#5c3a28"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      {/* phone / talisman vibe in hand */}
      <rect x="48" y="236" width="22" height="34" rx="5" fill="#1a1210" />
      <rect x="51" y="240" width="16" height="22" rx="2" fill="#f6efe3" />
      <circle cx="59" cy="265" r="2" fill="#c9a35a" />
    </svg>
  );
}
