import { motion } from 'framer-motion';

export function Commission() {
  return (
    <section
      id="commission enquire"
      className="py-32 md:py-56 bg-background border-b border-border relative overflow-hidden"
    >
      {/* Decorative ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 50% 60%, rgba(201,166,107,0.06) 0%, transparent 65%)',
        }}
      />

      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
        <motion.p
          className="text-xs uppercase tracking-[0.3em] text-primary/70 mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Bespoke Work
        </motion.p>

        <motion.h2
          className="text-5xl md:text-7xl lg:text-[90px] font-serif text-foreground leading-[1.05] mb-10 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          Have something in mind?
        </motion.h2>

        <motion.p
          className="text-base md:text-lg font-light text-foreground/60 max-w-xl mx-auto mb-14 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          We accept a limited number of bespoke commissions each year. Each piece is made in our studio
          from start to finish — no sub-contracting, no compromises.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.25 }}
        >
          <a
            href="#enquire"
            className="px-12 py-4 bg-primary text-primary-foreground text-sm uppercase tracking-[0.15em] font-medium hover:bg-foreground transition-colors duration-500"
          >
            Start a Commission
          </a>
          <a
            href="#process"
            className="px-12 py-4 border border-primary/40 text-primary text-sm uppercase tracking-[0.15em] hover:border-primary hover:bg-primary/5 transition-colors duration-500"
          >
            View Our Process
          </a>
        </motion.div>
      </div>
    </section>
  );
}
