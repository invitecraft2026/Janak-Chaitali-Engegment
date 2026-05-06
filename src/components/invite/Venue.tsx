import { motion } from "framer-motion";
import { MapPin, Navigation } from "lucide-react";

const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=High+Street+Mall+Kapurbawdi+Junction+Thane+West+400607";

export function Venue() {
  return (
    <section className="py-20 px-6">
      <div className="text-center mb-10">
        <p className="font-script text-4xl md:text-5xl text-gradient-gold">The Venue</p>
        <p className="mt-2 tracking-[0.3em] text-xs uppercase text-[var(--muted-foreground)]">
          Where it all begins
        </p>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-xl mx-auto glass shadow-soft rounded-3xl p-8 md:p-10 text-center"
      >
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-gold mb-5 shadow-gold">
          <MapPin className="w-7 h-7 text-white" />
        </div>
        <h3 className="font-serif-display text-2xl text-[var(--foreground)] mb-3">High Street Mall</h3>
        <p className="font-body text-base text-[var(--muted-foreground)] leading-relaxed mb-6">
          3rd floor, Kapurbawdi Junction,<br />
          Near Star Cinema, Samata Nagar,<br />
          Kapurbawdi, Majiwada,<br />
          Thane West – 400607
        </p>
        <a
          href={MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-gold text-white font-serif-display tracking-wider text-sm shadow-gold hover:scale-105 transition-transform"
        >
          <Navigation className="w-4 h-4" />
          Open in Google Maps
        </a>
      </motion.div>
    </section>
  );
}