import { useParams, Link } from 'wouter';
import { motion } from 'framer-motion';
import { getCollectionBySlug } from '@/data/collectionData';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

function PieceCard({ piece, index }: { piece: ReturnType<typeof getCollectionBySlug>['pieces'][0]; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: (index % 4) * 0.1 }}
      className="group flex flex-col"
    >
      {/* Image placeholder */}
      <div
        className="relative w-full aspect-[3/4] overflow-hidden mb-5 cursor-pointer"
        style={{ background: piece.gradient }}
      >
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-500" />
        {/* Edition badge */}
        <span className="absolute top-4 left-4 text-[10px] uppercase tracking-[0.2em] text-foreground/60 bg-background/80 backdrop-blur-sm px-3 py-1.5">
          {piece.edition}
        </span>
        {/* Enquire overlay */}
        <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out bg-background/95 backdrop-blur-sm py-4 text-center">
          <span className="text-xs uppercase tracking-[0.2em] text-primary font-medium">Enquire</span>
        </div>
      </div>

      {/* Details */}
      <div className="flex flex-col gap-1 px-1">
        <h3 className="font-serif text-xl text-foreground group-hover:text-primary transition-colors duration-300">
          {piece.title}
        </h3>
        <p className="text-xs uppercase tracking-[0.18em] text-foreground/50">{piece.material}</p>
        <div className="flex items-center justify-between mt-2">
          <span className="text-xs text-foreground/40 tracking-wide">{piece.dimensions}</span>
          <span className="font-serif text-lg text-foreground">{piece.price}</span>
        </div>
      </div>
    </motion.article>
  );
}

export default function CollectionPage() {
  const params = useParams<{ slug: string }>();
  const collection = getCollectionBySlug(params.slug);

  if (!collection) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center">
        <Navbar />
        <p className="text-foreground/50 font-serif text-2xl mt-32">Collection not found.</p>
        <Link href="/" className="mt-6 text-sm uppercase tracking-[0.2em] text-primary border-b border-primary/30 pb-1">
          Return Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <header className="pt-40 pb-16 px-6 border-b border-border">
        <div className="container mx-auto">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-8"
          >
            <Link href="/#collections" className="text-xs uppercase tracking-[0.2em] text-foreground/40 hover:text-foreground/70 transition-colors">
              Collections
            </Link>
            <span className="text-foreground/20">/</span>
            <span className="text-xs uppercase tracking-[0.2em] text-foreground/60">{collection.title}</span>
          </motion.div>

          <div className="max-w-3xl">
            <motion.h1
              className="text-5xl md:text-7xl font-serif text-foreground mb-4 leading-none"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              {collection.title}
            </motion.h1>
            <motion.p
              className="text-sm uppercase tracking-[0.22em] text-primary mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.15 }}
            >
              {collection.subtitle}
            </motion.p>
            <motion.p
              className="text-base md:text-lg text-foreground/60 font-light leading-relaxed max-w-xl"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
            >
              {collection.description}
            </motion.p>
          </div>
        </div>
      </header>

      {/* Grid */}
      <main className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16">
          {collection.pieces.map((piece, i) => (
            <PieceCard key={piece.id} piece={piece} index={i} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
