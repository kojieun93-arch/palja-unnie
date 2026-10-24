export function Boknyangi() {
  return (
    <svg
      viewBox="0 0 120 100"
      className="h-auto w-[88px]"
      role="img"
      aria-label="복냥이 캐릭터"
    >
      <defs>
        <linearGradient id="catFur" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#6b4a36" />
          <stop offset="100%" stopColor="#4a3224" />
        </linearGradient>
      </defs>

      {/* ears */}
      <path d="M28 38 L38 8 L52 36 Z" fill="url(#catFur)" />
      <path d="M68 36 L82 8 L92 38 Z" fill="url(#catFur)" />
      <path d="M34 34 L40 16 L48 32 Z" fill="#e8a090" opacity="0.7" />
      <path d="M72 32 L80 16 L86 34 Z" fill="#e8a090" opacity="0.7" />

      {/* body */}
      <ellipse cx="60" cy="72" rx="34" ry="22" fill="url(#catFur)" />

      {/* head */}
      <ellipse cx="60" cy="46" rx="32" ry="28" fill="url(#catFur)" />

      {/* eyes — cynical half-lidded */}
      <path d="M42 44c4-1 10-1 14 1" fill="none" stroke="#1a1210" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M64 45c4-1 10-1 14 1" fill="none" stroke="#1a1210" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="49" cy="48" r="3.2" fill="#1a1210" />
      <circle cx="71" cy="48" r="3.2" fill="#1a1210" />
      <circle cx="50" cy="47" r="1" fill="#f6efe3" />
      <circle cx="72" cy="47" r="1" fill="#f6efe3" />

      {/* nose / mouth */}
      <path d="M57 54 L60 57 L63 54 Z" fill="#e8a090" />
      <path d="M60 57v6M60 63c-4 4-8 2-10 0M60 63c4 4 8 2 10 0" fill="none" stroke="#1a1210" strokeWidth="1.6" strokeLinecap="round" />

      {/* whiskers */}
      <path d="M28 52h16M26 58h18M76 52h16M76 58h18" stroke="#1a1210" strokeWidth="1.2" opacity="0.45" />

      {/* gold charm on collar */}
      <path d="M40 66h40" stroke="#c9a35a" strokeWidth="3" strokeLinecap="round" />
      <circle cx="60" cy="70" r="5" fill="#c9a35a" />
      <circle cx="60" cy="70" r="2.2" fill="#f6efe3" />

      {/* sleepy eyebrow tilt */}
      <path d="M40 38c5 2 12 2 16-1" fill="none" stroke="#1a1210" strokeWidth="1.8" strokeLinecap="round" opacity="0.5" />
    </svg>
  );
}
