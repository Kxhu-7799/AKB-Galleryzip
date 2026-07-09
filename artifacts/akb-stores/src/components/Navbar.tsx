import { useEffect, useState } from "react";
import { Link } from "wouter";
import { ShoppingCart } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ease-out border-b ${
        scrolled
          ? "bg-background/80 backdrop-blur-md border-border py-4"
          : "bg-transparent border-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link href="/" className="text-3xl font-serif tracking-widest text-foreground hover:text-primary transition-colors">
          AKB
        </Link>
        
        <nav className="hidden md:flex items-center gap-8 text-sm uppercase tracking-[0.15em] font-light text-foreground/80">
          <Link href="#collections" className="hover:text-primary transition-colors">Collections</Link>
          <Link href="#process" className="hover:text-primary transition-colors">Process</Link>
          <Link href="#shop" className="hover:text-primary transition-colors">Shop</Link>
          <Link href="#commission" className="hover:text-primary transition-colors">Commission</Link>
        </nav>

        <div className="flex items-center gap-6">
          <button className="text-foreground/80 hover:text-primary transition-colors group relative">
            <ShoppingCart size={20} strokeWidth={1.5} />
            <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-accent text-[9px] flex items-center justify-center rounded-full text-foreground opacity-0 group-hover:opacity-100 transition-opacity">
              0
            </span>
          </button>
          <Link
            href="#enquire"
            className="hidden md:inline-flex px-6 py-2 border border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground text-sm uppercase tracking-[0.15em] transition-all duration-500 ease-out"
          >
            Enquire
          </Link>
        </div>
      </div>
    </header>
  );
}