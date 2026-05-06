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
    <section className="relative py-20 px-6">
      <div className="text-center mb-12">
        <p className="font-script text-4xl md:text-5xl text-gradient-gold">Counting the Moments</p>
        <p className="mt-2 tracking-[0.4em] text-xs uppercase text-[var(--muted-foreground)]">
          Until our forever begins
        </p>
      </div>
      <div className="grid grid-cols-4 gap-3 md:gap-6 max-w-3xl mx-auto">
        {items.map(([label, val]) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass shadow-soft rounded-2xl p-4 md:p-6 text-center"
          >
            <div className="relative h-14 md:h-20 flex items-center justify-center overflow-hidden">
              <AnimatePresence mode="popLayout">
                <motion.span
                  key={val}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -30, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="font-serif-display text-3xl md:text-5xl text-gradient-gold tabular-nums"
                >
                  {String(val).padStart(2, "0")}
                </motion.span>
              </AnimatePresence>
            </div>
            <p className="mt-2 text-[10px] md:text-xs tracking-[0.3em] uppercase text-[var(--muted-foreground)]">
              {label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}