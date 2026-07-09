import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: "The Watcher arrived wrapped in linen and wax paper, as if it had been waiting in a vault. It now sits on a plinth in my study and I still stop to look at it every morning.",
    author: "M. Ashford",
    title: "Collector, London",
  },
  {
    quote: "We commissioned a series of relief panels for a private residence in Edinburgh. The level of craft — the way the patina shifts from copper to near-black at the edges — is something I have not seen elsewhere.",
    author: "R. Calloway",
    title: "Interior Architect, Edinburgh",
  },
  {
    quote: "Not many studios still work in lost-wax. Fewer still understand that the imperfections are the point. AKB understands this completely.",
    author: "Dr. I. Brant",
    title: "Art Historian & Collector",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 md:py-40 bg-card border-b border-border">
      <div className="container mx-auto px-6 md:px-12">
        <motion.p
          className="text-xs uppercase tracking-[0.3em] text-primary/70 mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Collector Notes
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
            >
              {/* Opening quote mark */}
              <span
                className="font-serif text-[80px] leading-none text-primary/30 mb-4 select-none"
                aria-hidden="true"
              >
                &ldquo;
              </span>

              <blockquote className="font-serif italic text-xl md:text-2xl text-foreground/80 leading-relaxed flex-grow mb-8">
                {t.quote}
              </blockquote>

              <footer>
                <p className="text-sm uppercase tracking-[0.2em] text-foreground font-medium">
                  {t.author}
                </p>
                <p className="text-xs uppercase tracking-[0.15em] text-foreground/40 mt-1">
                  {t.title}
                </p>
              </footer>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
