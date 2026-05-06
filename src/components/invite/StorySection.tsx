import { motion } from "framer-motion";

export function StorySection() {
  return (
    <section className="py-20 px-6 relative overflow-visible">
      {/* 🌸 Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-pink-50 via-purple-50 to-white opacity-70" />

      {/* ✨ Floating blur elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-pink-200 rounded-full blur-3xl opacity-30" />
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-purple-200 rounded-full blur-3xl opacity-30" />

      <div className="relative max-w-3xl mx-auto text-center">
        {/* 💌 Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-script text-4xl md:text-5xl leading-[1.2] md:leading-[1.1] text-gradient-gold mb-6 pt-2"
        >
          Our Story
        </motion.h2>

        {/* ✨ Divider */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "80px" }}
          transition={{ duration: 0.6 }}
          className="h-px bg-[var(--gold)] mx-auto mb-8"
        />

        {/* 📖 Story Text */}
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
          className="mt-6 text-base md:text-lg text-[var(--muted-foreground)] leading-relaxed"
        >
          With the blessings of our families and the love we share, we are
          stepping into a new chapter of our lives together.
        </motion.p>

        {/* 💍 Invitation Line */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-8 font-medium text-lg md:text-xl text-[var(--foreground)]"
        >
          We warmly invite you to join us as we celebrate our engagement and
          begin forever together 💖
        </motion.p>

        {/* ✨ Names */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10"
        >
          <p className="font-script text-3xl md:text-4xl leading-[1.2] md:leading-[1.1] text-gradient-gold pt-2 pb-1">
            Chaitali & Janak
          </p>
        </motion.div>
      </div>
    </section>
  );
}