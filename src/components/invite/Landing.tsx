import { motion } from "framer-motion";
import { Petals } from "./Petals";
import floralBg from "@/assets/floral-bg.jpg";

export function Landing({ onOpen }: { onOpen: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1, filter: "blur(20px)" }}
      transition={{ duration: 1 }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center scale-110"
        style={{ backgroundImage: `url(${floralBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.95_0.04_340)]/85 via-[oklch(0.92_0.05_320)]/80 to-[oklch(0.88_0.06_310)]/85 backdrop-blur-sm" />
      <Petals count={22} />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        className="relative z-20 text-center px-6"
      >
        <p className="font-script text-3xl md:text-4xl text-gradient-gold mb-2">With Love & Blessings</p>
        <h1 className="font-serif-display text-5xl md:text-7xl tracking-wide text-[var(--foreground)] mb-3">
          Chaitali <span className="font-script text-gradient-gold text-4xl md:text-6xl">&</span> Janak
        </h1>
        <p className="font-body italic text-base md:text-lg text-[var(--muted-foreground)] mb-12 max-w-md mx-auto">
          A celebration of two souls becoming one
        </p>

        <motion.button
          onClick={onOpen}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
          className="shimmer-btn glow-pulse relative px-12 py-4 rounded-full bg-gradient-gold text-white font-serif-display tracking-[0.3em] text-sm md:text-base uppercase"
        >
          <span className="relative z-10">Tap to Open</span>
        </motion.button>

        <motion.p
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2.5, repeat: Infinity }}
          className="mt-10 text-xs tracking-[0.4em] text-[var(--muted-foreground)] uppercase"
        >
          ✦ Save the Date ✦
        </motion.p>
      </motion.div>
    </motion.div>
  );
}