export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 md:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-14 md:gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <p className="text-4xl font-serif tracking-widest text-foreground mb-4">AKB</p>
            <p className="text-sm font-light text-foreground/50 leading-relaxed max-w-[200px]">
              Bronze & Stone Atelier. Handcast in small editions since 2009.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-[10px] uppercase tracking-[0.25em] text-foreground/40 mb-6">Navigate</p>
            <ul className="space-y-3">
              {['Collections', 'Current Works', 'The Process', 'Commission', 'About the Studio'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm text-foreground/60 hover:text-primary transition-colors tracking-wide"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Information */}
          <div>
            <p className="text-[10px] uppercase tracking-[0.25em] text-foreground/40 mb-6">Information</p>
            <ul className="space-y-3">
              {['Care & Conservation', 'Shipping & Handling', 'Returns Policy', 'Certificates of Authenticity', 'Press & Enquiries'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm text-foreground/60 hover:text-primary transition-colors tracking-wide"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <p className="text-[10px] uppercase tracking-[0.25em] text-foreground/40 mb-6">Studio Notes</p>
            <p className="text-sm text-foreground/50 mb-6 leading-relaxed">
              New editions, process notes, and occasional availability. No noise.
            </p>
            <form
              id="enquire"
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col gap-3"
            >
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full bg-transparent border border-border px-4 py-3 text-sm text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-primary transition-colors"
              />
              <button
                type="submit"
                className="w-full px-4 py-3 bg-primary text-primary-foreground text-xs uppercase tracking-[0.2em] hover:bg-foreground transition-colors duration-500"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="container mx-auto px-6 md:px-12 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-foreground/30 tracking-wide">
            &copy; {new Date().getFullYear()} AKB Stores Ltd. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Sale', 'Accessibility'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-[11px] text-foreground/30 hover:text-foreground/60 transition-colors tracking-wide"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
