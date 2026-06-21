import { ArrowUp } from 'lucide-react';

const footerLinks = {
  Services: [
    { label: 'Solutions Sur Mesure', href: '#services' },
    { label: 'Expériences Numériques', href: '#services' },
    { label: 'Intégration & Infrastructure', href: '#services' },
    { label: 'Innovation & Transformation', href: '#services' },
  ],
  'Nos Solutions': [
    { label: 'Dinthialma', href: '#solutions' },
    { label: 'Citerne', href: '#solutions' },
  ],
  Entreprise: [
    { label: 'À Propos', href: '#apropos' },
    { label: 'Carrières', href: '#contact' },
  ],
  Légal: [
    { label: 'Mentions Légales', href: '#' },
    { label: 'Politique de Confidentialité', href: '#' },
    { label: 'CGV', href: '#' },
  ],
};

export default function Footer() {
  return (
    <footer className="relative bg-sage-950 text-white overflow-hidden">
      {/* Top Gradient Line */}
      <div className="h-px bg-gradient-to-r from-transparent via-sage-700/30 to-transparent" />

      <div className="relative max-w-6xl mx-auto section-padding py-14 lg:py-18">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <a href="#accueil" className="flex items-center gap-2.5 mb-4 group">
              {/* Monogramme STR */}
              <div className="relative w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-white/15 transition-colors duration-300 overflow-hidden">
                <span className="font-display text-[13px] text-mint-400 leading-none tracking-tight">STR</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display text-base leading-none text-white/90">
                  Spirit Tech
                </span>
                <span className="text-[7px] font-medium text-sage-500 tracking-[0.2em] uppercase leading-none mt-0.5">
                  Revolution
                </span>
              </div>
            </a>
            <p className="text-sage-300 text-sm leading-relaxed mb-6">
              Solutions digitales sur mesure. Spirit Tech Revolution transforme vos idées en
              produits technologiques performants.
            </p>
            <a
              href="mailto:contact@spirittechrevolution.com"
              className="text-mint-400 text-sm font-medium hover:text-mint-300 transition-colors"
            >
              contact@spirittechrevolution.com
            </a>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold text-sm text-white mb-4 tracking-wide">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sage-300 text-sm hover:text-mint-400 transition-colors duration-200 hover:translate-x-1 inline-block"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-sage-700/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sage-400 text-sm">
            © 2026 Spirit Tech Revolution. Tous droits réservés.
          </p>
          <a
            href="#accueil"
            className="w-10 h-10 rounded-full bg-sage-800 hover:bg-mint-600 flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:shadow-mint-500/30 hover:-translate-y-0.5"
            aria-label="Retour en haut"
          >
            <ArrowUp className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
