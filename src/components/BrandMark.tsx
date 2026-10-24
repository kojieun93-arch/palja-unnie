export function BrandMark({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      role="img"
      aria-hidden
    >
      <circle cx="24" cy="24" r="22" fill="#3b1d52" />
      <circle cx="24" cy="24" r="16" fill="none" stroke="#c9a35a" strokeWidth="1.5" opacity="0.85" />
      <path
        d="M24 10c.4 6 2.2 10 6 14-4.2.6-6.8 2.8-8 8-1.2-5.2-3.8-7.4-8-8 3.8-4 5.6-8 6-14Z"
        fill="#f6efe3"
      />
      <circle cx="33" cy="15" r="1.6" fill="#c9a35a" />
      <circle cx="14" cy="18" r="1.2" fill="#c9a35a" opacity="0.8" />
    </svg>
  );
}
