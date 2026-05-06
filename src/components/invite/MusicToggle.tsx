import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { motion } from "framer-motion";

const MUSIC_URL = "/inkam.mpeg";

export function MusicToggle({ active }: { active: boolean }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [muted, setMuted] = useState(false);

  useEffect(() => {
    if (!active) return;

    const a = new Audio(MUSIC_URL);
    a.loop = true;
    a.volume = 0; // start silent
    audioRef.current = a;

    a.play().catch(() => {});

    let v = 0;

    // ✅ Reduced max volume (soft background feel)
    const MAX_VOLUME = 0.2;

    const fade = setInterval(() => {
      v = Math.min(MAX_VOLUME, v + 0.01); // slower + smoother
      a.volume = v;

      if (v >= MAX_VOLUME) clearInterval(fade);
    }, 120); // slower fade for premium feel

    return () => {
      clearInterval(fade);
      a.pause();
      audioRef.current = null;
    };
  }, [active]);

  const toggle = () => {
    const a = audioRef.current;
    if (!a) return;

    if (muted) {
      a.muted = false;
      setMuted(false);
    } else {
      a.muted = true;
      setMuted(true);
    }
  };

  if (!active) return null;

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.5, type: "spring" }}
      onClick={toggle}
      aria-label={muted ? "Unmute music" : "Mute music"}
      className="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-gradient-gold shadow-gold flex items-center justify-center text-white hover:scale-110 transition-transform"
    >
      {muted ? (
        <VolumeX className="w-5 h-5" />
      ) : (
        <Volume2 className="w-5 h-5" />
      )}
    </motion.button>
  );
}