import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { inventory, CATEGORIES, type Category, type Product } from '@/data/inventoryData';

const STATUS_LABEL: Record<Product['status'], string> = {
  available: 'Available',
  reserved: 'Reserved',
  sold: 'Sold',
};

const STATUS_COLOUR: Record<Product['status'], string> = {
  available: 'text-primary',
  reserved: 'text-foreground/40',
  sold: 'text-foreground/25',
};

function ProductCard({ product, index }: { product: Product; index: number }) {
  const isSold = product.status === 'sold';
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.45, delay: (index % 4) * 0.07 }}
      className={`group flex flex-col ${isSold ? 'opacity-40' : ''}`}
    >
      {/* Image */}
      <div
        className="relative w-full aspect-[3/4] overflow-hidden mb-5"
        style={{ background: product.gradient }}
      >
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-500" />

        {/* Status badge */}
        {product.status !== 'available' && (
          <span className="absolute top-3 right-3 text-[9px] uppercase tracking-[0.2em] bg-background/90 backdrop-blur-sm px-2.5 py-1 text-foreground/50">
            {STATUS_LABEL[product.status]}
          </span>
        )}

        {/* Edition badge */}
        <span className="absolute top-3 left-3 text-[9px] uppercase tracking-[0.2em] bg-background/80 backdrop-blur-sm px-2.5 py-1 text-foreground/50">
          {product.edition}
        </span>

        {/* Quick Add */}
        {!isSold && (
          <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-400 ease-out">
            <button className="w-full bg-primary text-primary-foreground py-3.5 text-[10px] uppercase tracking-[0.2em] font-medium flex items-center justify-center gap-2 hover:bg-white hover:text-background transition-colors duration-300">
              <ShoppingCart size={12} strokeWidth={1.5} />
              {product.status === 'reserved' ? 'Join Waitlist' : 'Quick Add'}
            </button>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="px-0.5">
        <div className="flex items-start justify-between gap-2 mb-1">
          <h3 className="font-serif text-lg text-foreground leading-snug group-hover:text-primary transition-colors duration-300">
            {product.name}
          </h3>
          <span className={`font-serif text-base shrink-0 ${isSold ? 'line-through text-foreground/30' : 'text-foreground'}`}>
            {product.price}
          </span>
        </div>
        <p className="text-[11px] uppercase tracking-[0.18em] text-foreground/40 mb-1">{product.material}</p>
        <div className="flex items-center justify-between mt-2">
          <span className="text-[10px] uppercase tracking-[0.15em] text-foreground/30">{product.year}</span>
          <span className={`text-[10px] uppercase tracking-[0.15em] ${STATUS_COLOUR[product.status]}`}>
            {STATUS_LABEL[product.status]}
          </span>
        </div>
      </div>
    </motion.article>
  );
}

export default function InventoryPage() {
  const [active, setActive] = useState<Category>('All');

  const filtered = active === 'All'
    ? inventory
    : inventory.filter((p) => p.category === active);

  const available = filtered.filter((p) => p.status === 'available').length;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <header className="pt-40 pb-16 px-6 border-b border-border">
        <div className="container mx-auto">
          {/* Breadcrumb */}
          <motion.div
            className="flex items-center gap-3 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <a href="/" className="text-xs uppercase tracking-[0.2em] text-foreground/40 hover:text-foreground/70 transition-colors">
              Home
            </a>
            <span className="text-foreground/20">/</span>
            <span className="text-xs uppercase tracking-[0.2em] text-foreground/60">Current Works</span>
          </motion.div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <motion.h1
                className="text-5xl md:text-7xl font-serif text-foreground leading-none mb-4"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              >
                Current Works
              </motion.h1>
              <motion.p
                className="text-sm font-light text-foreground/50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                {available} works available · {filtered.length} total
              </motion.p>
            </div>

            {/* Category filter */}
            <motion.div
              className="flex gap-1 flex-wrap"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
            >
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`px-5 py-2 text-xs uppercase tracking-[0.18em] border transition-all duration-300 ${
                    active === cat
                      ? 'border-primary bg-primary/10 text-primary'
                      : 'border-border text-foreground/50 hover:border-primary/40 hover:text-foreground/80'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </motion.div>
          </div>
        </div>
      </header>

      {/* Grid */}
      <main className="container mx-auto px-6 py-20">
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <div className="py-32 text-center">
            <p className="font-serif text-2xl text-foreground/30">No works in this category.</p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
