import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";

export function ScratchCard() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [revealed, setRevealed] = useState(false);
  const drawing = useRef(false);

  // ✅ Google Calendar लिंक generator
  const getGoogleCalendarLink = () => {
    const title = "Chaitali & Janak Engagement Ceremony";

    const details = `
You are invited to celebrate the engagement of Chaitali & Janak 💍

Venue:
3rd floor, High Street Mall,
Kapurbawdi Junction, Near Star Cinema,
Samata Nagar, Kapurbawdi,
Majiwada, Thane West - 400607
    `;

    const location =
      "3rd floor, High Street Mall, Kapurbawdi Junction, Thane West 400607";

    const startDate = "20260606T100000"; // adjust time if needed
    const endDate = "20260606T130000";

    return `https://www.google.com/calendar/render?action=TEMPLATE
&text=${encodeURIComponent(title)}
&dates=${startDate}/${endDate}
&details=${encodeURIComponent(details)}
&location=${encodeURIComponent(location)}`;
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();

    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);

    // 🎨 Gradient scratch layer
    const grad = ctx.createLinearGradient(0, 0, rect.width, rect.height);
    grad.addColorStop(0, "#e8b4d4");
    grad.addColorStop(0.5, "#d4a3e0");
    grad.addColorStop(1, "#f5d3b8");

    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, rect.width, rect.height);

    // ✍️ Instruction text
    ctx.fillStyle = "rgba(255,255,255,0.85)";
    ctx.font = "italic 18px 'Playfair Display', serif";
    ctx.textAlign = "center";
    ctx.fillText("✦ Scratch to Reveal ✦", rect.width / 2, rect.height / 2 - 10);

    ctx.font = "12px sans-serif";
    ctx.fillText("Drag your finger across", rect.width / 2, rect.height / 2 + 18);

    ctx.globalCompositeOperation = "destination-out";

    const getPos = (e: MouseEvent | TouchEvent) => {
      const r = canvas.getBoundingClientRect();
      const point = "touches" in e ? e.touches[0] : (e as MouseEvent);
      return { x: point.clientX - r.left, y: point.clientY - r.top };
    };

    const scratch = (e: MouseEvent | TouchEvent) => {
      if (!drawing.current) return;
      e.preventDefault();

      const { x, y } = getPos(e);

      ctx.beginPath();
      ctx.arc(x, y, 28, 0, Math.PI * 2);
      ctx.fill();

      checkReveal();
    };

    const checkReveal = () => {
      const img = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
      let cleared = 0;

      for (let i = 3; i < img.length; i += 80) {
        if (img[i] === 0) cleared++;
      }

      if (cleared / (img.length / 80) > 0.45 && !revealed) {
        setRevealed(true);

        // 🎉 Confetti blast
        confetti({
          particleCount: 140,
          spread: 90,
          origin: { y: 0.6 },
          colors: ["#e8b4d4", "#d4a3e0", "#f5d3b8", "#ffffff"],
        });

        // 🔊 Optional sound (uncomment if you add file)
        // new Audio("/reveal.mp3").play();
      }
    };

    const start = () => (drawing.current = true);
    const end = () => (drawing.current = false);

    canvas.addEventListener("mousedown", start);
    canvas.addEventListener("mousemove", scratch);
    window.addEventListener("mouseup", end);

    canvas.addEventListener("touchstart", start, { passive: false });
    canvas.addEventListener("touchmove", scratch, { passive: false });
    window.addEventListener("touchend", end);

    return () => {
      canvas.removeEventListener("mousedown", start);
      canvas.removeEventListener("mousemove", scratch);
      window.removeEventListener("mouseup", end);

      canvas.removeEventListener("touchstart", start);
      canvas.removeEventListener("touchmove", scratch);
      window.removeEventListener("touchend", end);
    };
  }, [revealed]);

  return (
    <section className="py-16 px-6">
      {/* Heading */}
      <div className="text-center mb-8">
        <p className="font-script text-4xl md:text-5xl text-gradient-gold">
          A Little Surprise
        </p>
        <p className="mt-2 tracking-[0.3em] text-xs uppercase text-[var(--muted-foreground)]">
          Scratch the card below
        </p>
      </div>

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative max-w-md mx-auto rounded-3xl overflow-hidden shadow-soft glass p-1"
      >
        <div className="relative rounded-3xl overflow-hidden bg-white/80">
          <div className="p-8 text-center min-h-[300px] flex flex-col justify-center">
            <p className="font-script text-3xl text-gradient-gold mb-2">
              Engagement Ceremony
            </p>

            <div className="h-px w-20 bg-[var(--gold)] mx-auto my-3" />

            <p className="font-serif-display text-lg tracking-wider">
              06 June 2026
            </p>

            <p className="italic text-sm mt-4 leading-relaxed">
              3rd floor, High Street Mall,<br />
              Kapurbawdi Junction, Near Star Cinema,<br />
              Samata Nagar, Kapurbawdi,<br />
              Majiwada, Thane West – 400607
            </p>

            {/* ✅ Add to Calendar Button */}
            {revealed && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mt-6"
              >
                <a
                  href={getGoogleCalendarLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-pink-300 via-purple-300 to-pink-200 text-sm font-semibold tracking-wide shadow-md hover:scale-105 transition"
                >
                  ✦ Add to Calendar ✦
                </a>
              </motion.div>
            )}
          </div>

          {/* Scratch Canvas */}
          <canvas
            ref={canvasRef}
            className={`absolute inset-0 w-full h-full cursor-grab transition-opacity duration-700 ${
              revealed ? "opacity-0 pointer-events-none" : "opacity-100"
            }`}
          />
        </div>
      </motion.div>
    </section>
  );
}