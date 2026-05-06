import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Landing } from "@/components/invite/Landing";
import { Hero } from "@/components/invite/Hero";
import { Countdown } from "@/components/invite/Countdown";
import { ScratchCard } from "@/components/invite/ScratchCard";
import { Venue } from "@/components/invite/Venue";
import { MusicToggle } from "@/components/invite/MusicToggle";
import { Petals } from "@/components/invite/Petals";
import { FloralDivider } from "@/components/invite/FloralDivider";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const [opened, setOpened] = useState(false);

  return (
    <main className="relative min-h-screen bg-gradient-romantic">
      <AnimatePresence>
        {!opened && <Landing key="landing" onOpen={() => setOpened(true)} />}
      </AnimatePresence>

      {opened && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <Petals count={14} />
          <Hero />
          <FloralDivider />
          <Countdown />
          <FloralDivider />
          <ScratchCard />
          <FloralDivider />
          <Venue />
          <footer className="py-10 text-center">
            <p className="font-script text-3xl text-gradient-gold">Chaitali & Janak</p>
            <p className="mt-1 text-xs tracking-[0.3em] uppercase text-[var(--muted-foreground)]">
              06 · 06 · 2026
            </p>
          </footer>
          <MusicToggle active={opened} />
        </motion.div>
      )}
    </main>
  );
}
