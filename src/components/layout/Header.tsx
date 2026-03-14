import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, Phone, ShoppingCart, User, Menu, X, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Ana Sayfa", href: "/" },
  { label: "Futbol", href: "/kategori/futbol" },
  { label: "Basketbol", href: "/kategori/basketbol" },
  { label: "Voleybol", href: "/kategori/voleybol" },
  { label: "Forma Tasarla", href: "/forma-tasarla" },
  { label: "Forma Sipariş", href: "/forma-siparis" },
  { label: "SSS", href: "/sss" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 glass-nav">
      {/* Top bar */}
      <div className="container flex h-[72px] items-center justify-between gap-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <div className="flex items-center gap-1">
            <div className="h-8 w-8 rounded-md gradient-brand flex items-center justify-center">
              <span className="text-sm font-black text-brand-foreground">SF</span>
            </div>
            <span className="text-lg font-extrabold tracking-tight text-foreground hidden sm:block">
              super<span className="text-primary">forma</span>
            </span>
          </div>
        </Link>

        {/* Search bar - desktop */}
        <div className="hidden md:flex flex-1 max-w-md mx-4">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Aradığım Ürün..."
              className="w-full h-10 rounded-lg border border-border bg-muted px-4 pr-10 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary transition-all"
            />
            <button className="absolute right-0 top-0 h-10 w-10 flex items-center justify-center rounded-r-lg gradient-brand text-brand-foreground">
              <Search className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-2">
          <a
            href="tel:+905312427762"
            className="hidden lg:flex items-center gap-2 rounded-lg border border-border px-3 py-2 text-sm font-medium text-foreground hover:bg-muted transition-colors"
          >
            <Phone className="h-4 w-4 text-primary" />
            <span>0531 242 7762</span>
          </a>

          <button
            onClick={() => setSearchOpen(!searchOpen)}
            className="md:hidden h-10 w-10 flex items-center justify-center rounded-lg hover:bg-muted transition-colors"
          >
            <Search className="h-5 w-5 text-muted-foreground" />
          </button>

          <Link to="/favoriler" className="h-10 w-10 hidden sm:flex items-center justify-center rounded-lg hover:bg-muted transition-colors">
            <Heart className="h-5 w-5 text-muted-foreground" />
          </Link>

          <Link to="/sepet" className="h-10 w-10 flex items-center justify-center rounded-lg hover:bg-muted transition-colors relative">
            <ShoppingCart className="h-5 w-5 text-muted-foreground" />
            <span className="absolute -top-0.5 -right-0.5 h-4 w-4 rounded-full gradient-brand text-[10px] font-bold text-brand-foreground flex items-center justify-center">
              0
            </span>
          </Link>

          <Link to="/hesabim" className="h-10 w-10 hidden sm:flex items-center justify-center rounded-lg hover:bg-muted transition-colors">
            <User className="h-5 w-5 text-muted-foreground" />
          </Link>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden h-10 w-10 flex items-center justify-center rounded-lg hover:bg-muted transition-colors"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Secondary nav - desktop */}
      <nav className="hidden lg:block border-t border-border bg-muted/50">
        <div className="container flex items-center h-12 gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                location.pathname === link.href
                  ? "text-primary bg-brand-light"
                  : "text-foreground hover:text-primary hover:bg-muted"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>

      {/* Mobile search */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden border-t border-border overflow-hidden"
          >
            <div className="container py-3">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Aradığım Ürün..."
                  className="w-full h-10 rounded-lg border border-border bg-muted px-4 pr-10 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                  autoFocus
                />
                <button className="absolute right-0 top-0 h-10 w-10 flex items-center justify-center rounded-r-lg gradient-brand text-brand-foreground">
                  <Search className="h-4 w-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden border-t border-border overflow-hidden bg-background"
          >
            <nav className="container py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                    location.pathname === link.href
                      ? "text-primary bg-brand-light"
                      : "text-foreground hover:bg-muted"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="tel:+905312427762"
                className="mt-2 flex items-center gap-2 px-4 py-3 rounded-lg gradient-brand text-brand-foreground text-sm font-medium"
              >
                <Phone className="h-4 w-4" />
                0531 242 7762
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
