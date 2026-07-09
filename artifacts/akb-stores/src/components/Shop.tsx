import { motion } from 'framer-motion';
import { ShoppingCart } from 'lucide-react';

const products = [
  { id: 1, name: "The Watcher", spec: "Cast Bronze, Ed. 5/12", price: "£2,400" },
  { id: 2, name: "Meridian Vase", spec: "Patinated Copper, Ed. 3/8", price: "£1,850" },
  { id: 3, name: "Fragment I", spec: "Marble Dust Composite", price: "£680" },
  { id: 4, name: "Torso Study No. 4", spec: "Cast Iron, Unique", price: "£4,200" },
  { id: 5, name: "Helix Candlestand", spec: "Blackened Steel, Ed. 8/20", price: "£920" },
  { id: 6, name: "Ancestral Mask", spec: "Bronze with Verdigris, Ed. 2/6", price: "£3,600" },
  { id: 7, name: "Slab Relief — Fauna", spec: "Stone Composite Panel", price: "£1,100" },
  { id: 8, name: "The Plinth Series", spec: "Cast Brass, Ed. 12/24", price: "£760" },
];

export function Shop() {
  return (
    <section id="shop" className="py-24 md:py-32 bg-background border-b border-border">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-7xl font-serif text-foreground tracking-wide">
            Current Works
          </h2>
          <button className="text-sm uppercase tracking-[0.15em] text-foreground/70 hover:text-primary transition-colors pb-2 border-b border-transparent hover:border-primary/30 self-start md:self-end">
            View All Inventory →
          </button>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (i % 4) * 0.1 }}
              className="group cursor-pointer flex flex-col"
            >
              {/* Image Placeholder area */}
              <div 
                className="aspect-square w-full mb-6 relative overflow-hidden bg-card border border-border/50 hover-lift"
                style={{
                  background: 'radial-gradient(circle at center 40%, rgba(201, 166, 107, 0.08) 0%, rgba(15, 13, 11, 1) 70%)'
                }}
              >
                {/* Simulated spotlight cast from above */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] h-[150%] opacity-20"
                     style={{ background: 'radial-gradient(ellipse at top, #C9A66B 0%, transparent 50%)' }}
                />
                
                {/* Quick Add button */}
                <div className="absolute bottom-0 left-0 w-full p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-10">
                  <button className="w-full bg-primary text-primary-foreground py-3 text-xs uppercase tracking-[0.15em] font-medium flex items-center justify-center gap-2 hover:bg-white transition-colors">
                    <ShoppingCart size={14} /> Quick Add
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="flex flex-col flex-grow">
                <h3 className="text-2xl font-serif text-foreground mb-1 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <p className="text-xs uppercase tracking-[0.1em] text-foreground/50 mb-3">
                  {product.spec}
                </p>
                <p className="text-primary mt-auto text-sm tracking-widest">
                  {product.price}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}