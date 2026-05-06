import { motion } from "framer-motion";
import storyBg from "@/assets/newhero (3).jpeg";

export function StorySection() {
  return (
    <section className="relative py-20 px-6 overflow-hidden">
      
      {/* ✅ IMAGE (FIXED — NO HEAD CUT) */}
      <img
        src={storyBg}
        alt="Couple"
        className="absolute inset-0 w-full h-full object-cover object-[center_30%] md:object-[center_25%] scale-105"
      />

      {/* ✅ DARK OVERLAY (better readability) */}
      <div className="absolute inset-0 bg-white/70 md:bg-white/65 backdrop-blur-[2px]" />

      {/* ✅ SOFT GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-b from-pink-50/60 via-purple-50/50 to-white/80" />

      {/* 🌸 Floating blur elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-pink-200 rounded-full blur-3xl opacity-30" />
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-purple-200 rounded-full blur-3xl opacity-30" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-script text-4xl md:text-5xl leading-[1.2] text-gradient-gold mb-6 pt-2"
        >
          Our Story
        </motion.h2>

        {/* Divider */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "80px" }}
          transition={{ duration: 0.6 }}
          className="h-px bg-[var(--gold)] mx-auto mb-8"
        />

        {/* Story */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="font-serif-display text-lg md:text-xl leading-relaxed text-[var(--foreground)]"
        >
          Two hearts, two souls, and one beautiful journey began with a simple
          hello. What started as a moment turned into memories, and those
          memories blossomed into love.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-6 text-base md:text-lg text-[var(--foreground)] leading-relaxed font-medium"
        >
          With the blessings of our families and the love we share, we are
          stepping into a new chapter of our lives together.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-8 font-medium text-lg md:text-xl text-[var(--foreground)]"
        >
          We warmly invite you to join us as we celebrate our engagement and
          begin forever together 💖
        </motion.p>

        {/* Names */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10"
        >
          <p className="font-script text-3xl md:text-4xl leading-[1.2] text-gradient-gold pt-2 pb-1">
            Chaitali & Janak
          </p>
        </motion.div>
      </div>
    </section>
  );
}