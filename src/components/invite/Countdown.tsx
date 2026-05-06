import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TARGET = new Date("2026-06-06T11:00:00+05:30").getTime();

function diff() {
  const d = Math.max(0, TARGET - Date.now());
  return {
    days: Math.floor(d / 86400000),
    hours: Math.floor((d / 3600000) % 24),
    minutes: Math.floor((d / 60000) % 60),
    seconds: Math.floor((d / 1000) % 60),
  };
}

export function Countdown() {
  const [t, setT] = useState(diff());

  useEffect(() => {
    const i = setInterval(() => setT(diff()), 1000);
    return () => clearInterval(i);
  }, []);

  const items: Array<[string, number]> = [
    ["Days", t.days],
    ["Hours", t.hours],
    ["Minutes", t.minutes],
    ["Seconds", t.seconds],
  ];

  return (
    <section className="relative py-20 px-4 md:px-6">
      {/* Heading */}
      <div className="text-center mb-12">
        <p className="font-script text-3xl md:text-5xl text-gradient-gold leading-[1.2]">
          Counting the Moments
        </p>
        <p className="mt-2 tracking-[0.2em] md:tracking-[0.4em] text-[10px] md:text-xs uppercase text-[var(--muted-foreground)]">
          Until our forever begins
        </p>
      </div>

      {/* Timer */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 max-w-3xl mx-auto">
        {items.map(([label, val]) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass shadow-soft rounded-2xl p-4 md:p-6 text-center min-w-0"
          >
            {/* Number */}
            <div className="relative h-16 md:h-24 flex items-center justify-center overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.span
                  key={val}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.35 }}
                  className="font-serif-display text-2xl md:text-5xl leading-[1.2] text-gradient-gold tabular-nums drop-shadow-[0_2px_8px_rgba(212,163,224,0.4)]"
                >
                  {String(val).padStart(2, "0")}
                </motion.span>
              </AnimatePresence>
            </div>

            {/* Label */}
            <p className="mt-2 text-[9px] md:text-xs tracking-[0.15em] md:tracking-[0.3em] uppercase text-[var(--muted-foreground)] break-words">
              {label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}