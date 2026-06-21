import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import clsx from 'clsx';

const navLinks = [
  { href: '#accueil', label: 'Accueil' },
  { href: '#services', label: 'Services' },
  { href: '#solutions', label: 'Nos Solutions' },
  { href: '#apropos', label: 'À Propos' },
  { href: '#contact', label: 'Contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={clsx(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        scrolled
          ? 'bg-sage-50/80 backdrop-blur-xl border-b border-sage-200/50'
          : 'bg-transparent'
      )}
    >
      <nav className="max-w-6xl mx-auto section-padding flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#accueil" className="flex items-center gap-2.5 group">
          {/* Monogramme STR */}
          <div className="relative w-9 h-9 rounded-lg bg-sage-900 flex items-center justify-center group-hover:bg-sage-800 transition-colors duration-300 overflow-hidden">
            <span className="font-display text-[15px] text-mint-400 leading-none tracking-tight">STR</span>
            <div className="absolute inset-0 bg-gradient-to-br from-mint-400/10 to-transparent" />
          </div>
          <div className="flex flex-col">
            <span className="font-display text-lg tracking-tight text-sage-900 leading-none">
              Spirit Tech
            </span>
            <span className="text-[8px] font-medium text-sage-400 tracking-[0.2em] uppercase leading-none mt-0.5">
              Revolution
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative px-5 py-2.5 text-sm font-medium text-sage-600 hover:text-mint-700 transition-all duration-300 rounded-full hover:bg-white/60 hover:backdrop-blur-md"
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" className="btn-primary ml-4 !px-6 !py-2.5 text-sm">
            Parlons ensemble
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden w-11 h-11 rounded-xl flex items-center justify-center hover:bg-white/60 hover:backdrop-blur-md transition-all duration-300"
          aria-label="Menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={clsx(
          'md:hidden overflow-hidden transition-all duration-400',
          mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <div className="px-6 pb-6 pt-2 bg-white/80 backdrop-blur-2xl border-t border-white/50 shadow-xl">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-sage-600 hover:text-mint-700 font-medium transition-colors border-b border-mint-50 last:border-0"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="btn-primary w-full mt-4 text-sm"
          >
            Parlons ensemble
          </a>
        </div>
      </div>
    </header>
  );
}
