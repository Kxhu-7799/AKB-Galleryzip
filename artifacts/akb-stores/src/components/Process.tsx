import { motion } from 'framer-motion';

const steps = [
  {
    num: "01",
    title: "Clay & Wax",
    body: "The original is sculpted by hand in oil-based clay or wax over days or weeks. Every surface decision is made by the artist — no shortcuts, no digital shortcuts.",
  },
  {
    num: "02",
    title: "Lost-Wax Casting",
    body: "A ceramic shell is formed around the wax positive. The wax is burned out in a kiln. Molten bronze — at 1,000°C — is poured into the void left behind.",
  },
  {
    num: "03",
    title: "Patination & Finishing",
    body: "Each cast is chased by hand to remove seams and imperfections, then chemically patinated in the studio for weeks. Sealed with microcrystalline wax. No two pieces are identical.",
  },
];

export function Process() {
  return (
    <section id="process" className="py-24 md:py-40 bg-background border-b border-border overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-xs uppercase tracking-[0.3em] text-primary/70 mb-4">Studio Practice</p>
          <h2 className="text-5xl md:text-7xl font-serif text-foreground">The Making</h2>
        </motion.div>

        <div className="space-y-0 divide-y divide-border">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              className="group py-14 grid grid-cols-1 md:grid-cols-[auto_1fr_2fr] gap-6 md:gap-16 items-start"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
            >
              {/* Giant Number */}
              <div
                className="font-serif leading-none select-none text-[120px] md:text-[160px] text-primary/10 group-hover:text-primary/20 transition-colors duration-700 -mt-8 md:-mt-12"
              >
                {step.num}
              </div>

              {/* Title */}
              <div className="flex items-start pt-2">
                <h3 className="text-3xl md:text-4xl font-serif text-foreground leading-tight">
                  {step.title}
                </h3>
              </div>

              {/* Body */}
              <div className="flex items-start pt-2 md:pt-3">
                <p className="text-base text-foreground/60 leading-relaxed font-light max-w-prose">
                  {step.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
