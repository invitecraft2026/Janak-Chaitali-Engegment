import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { CornerFloral } from "./FloralDivider";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{ backgroundImage: `url(${heroBg})` }}
      />

      {/* Soft Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/65 via-white/45 to-[oklch(0.92_0.05_350)]/80" />

      {/* Extra Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.35),transparent_60%)]" />

      {/* Floral Decorations */}
      <CornerFloral className="absolute top-0 left-0 w-32 md:w-48 -translate-x-4 -translate-y-4 opacity-80 z-10" />
      <CornerFloral className="absolute bottom-0 right-0 w-32 md:w-48 translate-x-4 translate-y-4 rotate-180 opacity-80 z-10" />

      {/* Floating Blur */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-pink-200/40 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-200/40 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-3xl">
        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="text-xs md:text-sm tracking-[0.45em] uppercase text-[var(--foreground)]/70 mb-6"
        >
          ✦ Engagement Ceremony ✦
        </motion.p>

        {/* Bride Name */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1.2 }}
          className="font-script text-7xl sm:text-8xl md:text-9xl leading-[1.2] md:leading-[1.05] tracking-wide text-[var(--foreground)] drop-shadow-[0_4px_18px_rgba(255,255,255,0.5)] pt-3"
        >
          Chaitali
        </motion.h1>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="my-4 flex items-center justify-center gap-4"
        >
          <div className="h-px w-16 bg-[var(--gold)]" />

          <span className="font-serif-display italic text-2xl md:text-3xl text-[var(--foreground)]">
            &
          </span>

          <div className="h-px w-16 bg-[var(--gold)]" />
        </motion.div>

        {/* Groom Name */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 1.2 }}
          className="font-script text-7xl sm:text-8xl md:text-9xl leading-[1.2] md:leading-[1.05] tracking-wide text-[var(--foreground)] drop-shadow-[0_4px_18px_rgba(255,255,255,0.5)] pb-3"
        >
          Janak
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 1 }}
          className="font-body italic text-lg md:text-xl text-[var(--foreground)]/85 max-w-xl mx-auto leading-relaxed"
        >
          Together with their families, invite you to celebrate their
          engagement
        </motion.p>

        {/* Date Badge */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2, duration: 1 }}
          className="mt-10 inline-block glass rounded-full px-8 py-3 shadow-soft"
        >
          <p className="font-serif-display tracking-[0.3em] text-xs md:text-sm uppercase text-[var(--foreground)]">
            06 · June · 2026
          </p>
        </motion.div> */}
      </div>

      {/* ✨ BEAUTIFUL SCROLL HINT */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.8, duration: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center"
      >
        {/* Text */}
        <motion.p
          animate={{ y: [0, 6, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="text-[10px] md:text-xs tracking-[0.35em] uppercase text-[var(--foreground)]/70 mb-3"
        >
          Scroll Down
        </motion.p>

        {/* Mouse Scroll Animation */}
        <div className="relative w-7 h-12 rounded-full border border-[var(--gold)]/70 flex justify-center glass">
          <motion.div
            animate={{
              y: [2, 18, 2],
              opacity: [1, 0.4, 1],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
            }}
            className="w-1.5 h-3 rounded-full bg-[var(--gold)] mt-2"
          />
        </div>

        {/* Chevron */}
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
          }}
          className="mt-2"
        >
          <ChevronDown className="w-5 h-5 text-[var(--gold)]" />
        </motion.div>
      </motion.div>
    </section>
  );
}