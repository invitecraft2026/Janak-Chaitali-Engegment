import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { motion } from "framer-motion";

const MUSIC_URL =
  "https://cdn.pixabay.com/download/audio/2022/10/18/audio_31c4b2adcb.mp3?filename=relaxing-mountains-rivers-streams-running-water-18178.mp3";

export function MusicToggle({ active }: { active: boolean }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [muted, setMuted] = useState(false);

  useEffect(() => {
    if (!active) return;
    const a = new Audio(MUSIC_URL);
    a.loop = true;
    a.volume = 0;
    audioRef.current = a;
    a.play().catch(() => {});
    let v = 0;
    const fade = setInterval(() => {
      v = Math.min(0.45, v + 0.03);
      a.volume = v;
      if (v >= 0.45) clearInterval(fade);
    }, 80);
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
      {muted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
    </motion.button>
  );
}