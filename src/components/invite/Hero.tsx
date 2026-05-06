import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import { CornerFloral } from "./FloralDivider";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-[oklch(0.92_0.05_350)]/70" />

      <CornerFloral className="absolute top-0 left-0 w-32 md:w-48 -translate-x-4 -translate-y-4 opacity-80" />
      <CornerFloral className="absolute bottom-0 right-0 w-32 md:w-48 translate-x-4 translate-y-4 rotate-180 opacity-80" />

      <div className="relative z-10 text-center px-6 max-w-3xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="text-xs md:text-sm tracking-[0.5em] uppercase text-[var(--muted-foreground)] mb-6"
        >
          ✦ Engagement Ceremony ✦
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1.2 }}
          className="font-script text-7xl md:text-9xl text-gradient-gold leading-none mb-2"
        >
          Chaitali
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="my-3 flex items-center justify-center gap-4"
        >
          <div className="h-px w-16 bg-[var(--gold)]" />
          <span className="font-serif-display italic text-2xl md:text-3xl text-[var(--foreground)]">&</span>
          <div className="h-px w-16 bg-[var(--gold)]" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 1.2 }}
          className="font-script text-7xl md:text-9xl text-gradient-gold leading-none mb-8"
        >
          Janak
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 1 }}
          className="font-body italic text-lg md:text-xl text-[var(--foreground)]/80 max-w-xl mx-auto"
        >
          Together with their families, invite you to celebrate their engagement
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.3, duration: 1 }}
          className="mt-10 inline-block glass rounded-full px-8 py-3 shadow-soft"
        >
          <p className="font-serif-display tracking-[0.3em] text-sm uppercase text-[var(--foreground)]">
            06 · June · 2026
          </p>
        </motion.div>
      </div>
    </section>
  );
}