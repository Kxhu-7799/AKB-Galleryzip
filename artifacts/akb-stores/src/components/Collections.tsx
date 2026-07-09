import { motion } from 'framer-motion';

const collections = [
  {
    id: 1,
    title: "Figurative Works",
    count: "12 Pieces",
    gradient: "radial-gradient(circle at center, #5C4A32 0%, #0F0D0B 100%)",
  },
  {
    id: 2,
    title: "Relief Panels",
    count: "8 Pieces",
    gradient: "radial-gradient(circle at top right, #3A3228 0%, #0F0D0B 100%)",
  },
  {
    id: 3,
    title: "Functional Objects",
    count: "24 Pieces",
    gradient: "radial-gradient(circle at bottom left, #4A3A25 0%, #0F0D0B 100%)",
  }
];

export function Collections() {
  return (
    <section id="collections" className="py-24 md:py-32 bg-background border-b border-border">
      <div className="container mx-auto px-6 mb-16">
        <motion.h2 
          className="text-4xl md:text-5xl font-serif text-foreground"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Selected Collections
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 w-full">
        {collections.map((collection, i) => (
          <motion.div
            key={collection.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.15 }}
            className="group relative aspect-[3/4] overflow-hidden border border-border cursor-pointer"
            style={{ background: collection.gradient }}
          >
            {/* Overlay that darkens on hover to emphasize text */}
            <div className="absolute inset-0 bg-black/20 transition-colors duration-700 group-hover:bg-black/50" />
            
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
              <h3 className="text-3xl lg:text-4xl font-serif text-foreground mb-4 transition-transform duration-700 group-hover:-translate-y-2">
                {collection.title}
              </h3>
              <p className="text-sm uppercase tracking-[0.2em] text-foreground/60 mb-8 transition-transform duration-700 group-hover:-translate-y-2">
                {collection.count}
              </p>
              
              <div className="opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out">
                <span className="text-primary text-sm uppercase tracking-[0.15em] border-b border-primary/30 pb-1">
                  View Collection
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}