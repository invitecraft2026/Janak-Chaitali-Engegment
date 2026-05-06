export function FloralDivider() {
  return (
    <div className="flex items-center justify-center gap-3 my-10 px-6">
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[var(--gold)]/60 to-[var(--gold)]/60" />
      <svg width="48" height="24" viewBox="0 0 48 24" fill="none" className="text-[var(--gold)]">
        <path d="M24 4c-4 0-7 3-7 7s3 7 7 7 7-3 7-7-3-7-7-7z" stroke="currentColor" strokeWidth="0.8" />
        <circle cx="24" cy="11" r="2.5" fill="currentColor" opacity="0.7" />
        <path d="M2 12h13M33 12h13" stroke="currentColor" strokeWidth="0.6" />
        <circle cx="6" cy="12" r="1.2" fill="currentColor" />
        <circle cx="42" cy="12" r="1.2" fill="currentColor" />
      </svg>
      <div className="h-px flex-1 bg-gradient-to-l from-transparent via-[var(--gold)]/60 to-[var(--gold)]/60" />
    </div>
  );
}

export function CornerFloral({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" className={className} fill="none">
      <g opacity="0.85">
        <circle cx="30" cy="30" r="14" fill="oklch(0.88 0.08 350)" />
        <circle cx="30" cy="30" r="8" fill="oklch(0.78 0.11 350)" opacity="0.6" />
        <circle cx="55" cy="20" r="8" fill="oklch(0.85 0.07 310)" />
        <circle cx="20" cy="55" r="9" fill="oklch(0.85 0.07 310)" opacity="0.8" />
        <circle cx="50" cy="50" r="5" fill="oklch(0.85 0.13 78)" />
        <path d="M40 40 Q60 30 75 50" stroke="oklch(0.78 0.13 78)" strokeWidth="1.2" fill="none" />
        <path d="M30 50 Q45 60 60 75" stroke="oklch(0.78 0.13 78)" strokeWidth="1" fill="none" />
      </g>
    </svg>
  );
}