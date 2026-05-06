import { useMemo } from "react";

export function Petals({ count = 18 }: { count?: number }) {
  const petals = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 12,
        duration: 10 + Math.random() * 14,
        size: 10 + Math.random() * 18,
        hue: Math.random() > 0.5 ? "oklch(0.85 0.1 350)" : "oklch(0.82 0.08 310)",
        rot: Math.random() * 360,
      })),
    [count]
  );
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-10">
      {petals.map((p) => (
        <svg
          key={p.id}
          className="petal absolute"
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            transform: `rotate(${p.rot}deg)`,
          }}
          viewBox="0 0 24 24"
          fill={p.hue}
        >
          <path d="M12 2 C16 6 18 10 12 22 C6 10 8 6 12 2 Z" opacity="0.85" />
        </svg>
      ))}
    </div>
  );
}