import { Users, CheckCircle2, Gauge, ArrowUpRight, Mail, Pill, Calendar, UtensilsCrossed } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

interface Product {
  name: string;
  tagline: string;
  description: string;
  features: string[];
  status: 'live' | 'beta' | 'coming';
  tech: string[];
  url: string | null;
  gradient: string;
  accentColor: string;
  icon: React.ElementType;
}

const products: Product[] = [
  {
    name: 'Dinthialma',
    tagline: 'Gestion de tontines & épargne collective',
    description:
      'Plateforme digitale complète permettant aux groupes d\'épargne de gérer leurs tontines, cotisations et cycles de bénéficiaires en toute transparence — du mobile au web.',
    features: [
      'Gestion des cycles et cotisations',
      'Notifications SMS & in-app en temps réel',
      'Dashboard admin & tableau de bord membres',
      'Sécurité OAuth2 / Keycloak',
    ],
    status: 'live',
    tech: ['Spring Boot', 'React Native', 'PostgreSQL', 'Keycloak'],
    url: 'https://www.dinthialma.com',
    gradient: 'from-emerald-500 to-mint-600',
    accentColor: 'rgba(16, 185, 129, 0.15)',
    icon: Users,
  },
  {
    name: 'TankMetric',
    tagline: 'Jaugeage de citernes industrielles',
    description:
      'Plateforme B2B de calcul de jaugeage pour citernes industrielles. Génère automatiquement les barèmes de volumes, tables de jaugeage et rapports d\'export pour 5 géométries de réservoirs.',
    features: [
      '5 types de citernes (verticale, horizontale, sphérique, conique, rectangulaire)',
      'Génération automatique des barèmes de jaugeage',
      'Export Excel des tables de volumes',
      'Recherche inverse volume → hauteur',
    ],
    status: 'coming',
    tech: ['FastAPI', 'Python', 'Streamlit', 'SQLAlchemy'],
    url: null,
    gradient: 'from-mint-500 to-emerald-600',
    accentColor: 'rgba(34, 197, 94, 0.12)',
    icon: Gauge,
  },
  {
    name: 'PharmaGest',
    tagline: 'Gestion pharmaceutique multi-pharmacies',
    description:
      'Solution complète de gestion pour pharmacies : point de vente intégré, suivi des stocks et péremptions, gestion des ordonnances et prise en charge IPM, avec génération de documents PDF.',
    features: [
      'Point de vente (POS) avec gestion des médicaments',
      'Suivi des stocks, lots et dates de péremption',
      'Module ordonnances & prise en charge IPM',
      'Génération automatique de documents PDF',
    ],
    status: 'coming',
    tech: ['Spring Boot', 'React', 'PostgreSQL', 'MinIO'],
    url: null,
    gradient: 'from-emerald-400 to-teal-600',
    accentColor: 'rgba(20, 184, 166, 0.12)',
    icon: Pill,
  },
  {
    name: 'SenEvent',
    tagline: 'Gestion d\'événements & billetterie',
    description:
      'Plateforme de création et de gestion d\'événements : de la planification à la vente de billets, en passant par le contrôle d\'accès et le suivi en temps réel des participants.',
    features: [
      'Création et publication d\'événements',
      'Billetterie et gestion des participants',
      'Contrôle d\'accès digital',
      'Dashboard organisateur en temps réel',
    ],
    status: 'coming',
    tech: ['React', 'Spring Boot', 'PostgreSQL'],
    url: null,
    gradient: 'from-teal-500 to-mint-600',
    accentColor: 'rgba(20, 184, 166, 0.10)',
    icon: Calendar,
  },
  {
    name: 'SenResto',
    tagline: 'Restaurant digital de bout en bout',
    description:
      'Application complète pour restaurants : menu digital, prise de commandes en salle, suivi en cuisine en temps réel, gestion des réservations et analytics de performance.',
    features: [
      'Menu digital & prise de commandes par table',
      'Tableau de bord cuisine en temps réel',
      'Réservations et gestion des tables',
      'Analytics & gestion des promotions',
    ],
    status: 'coming',
    tech: ['React', 'Spring Boot', 'PostgreSQL'],
    url: null,
    gradient: 'from-mint-400 to-emerald-500',
    accentColor: 'rgba(52, 211, 153, 0.10)',
    icon: UtensilsCrossed,
  },
];

const statusConfig = {
  live: {
    label: 'En production',
    dotClass: 'bg-emerald-500',
    badgeClass: 'bg-emerald-50 text-emerald-700 border border-emerald-200',
  },
  beta: {
    label: 'Bêta',
    dotClass: 'bg-amber-500',
    badgeClass: 'bg-amber-50 text-amber-700 border border-amber-200',
  },
  coming: {
    label: 'Bientôt',
    dotClass: 'bg-sage-400',
    badgeClass: 'bg-sage-50 text-sage-600 border border-sage-200',
  },
};

export default function Products() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="solutions" className="relative py-28 lg:py-36 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-sage-50/20 to-white pointer-events-none" />
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(74,222,128,0.05) 0%, transparent 70%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto section-padding" ref={sectionRef}>
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <span className="inline-block text-sm font-semibold text-mint-600 tracking-wider uppercase mb-4 font-mono">
            Nos Solutions
          </span>
          <h2 className="font-display text-4xl sm:text-5xl text-sage-900 leading-tight mb-6">
            Nos solutions,
            <span className="gradient-text block mt-1">de l'idée à la prod</span>
          </h2>
          <p className="text-lg text-sage-400 leading-relaxed">
            Chaque solution Spirit Tech répond à un besoin réel du marché africain.
            En production ou en cours de développement, nos produits sont conçus pour durer.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {products.map((product, i) => {
            const Icon = product.icon;
            const status = statusConfig[product.status];
            return (
              <div
                key={product.name}
                className={`group relative glass-card glow-card rounded-3xl p-8 lg:p-10 animated-border transition-all duration-500 hover:shadow-2xl hover:-translate-y-1.5 ${
                  visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                {/* Hover glow */}
                <div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at 30% 20%, ${product.accentColor} 0%, transparent 60%)`,
                  }}
                />

                {/* Top Row : icon + status badge */}
                <div className="relative flex items-start justify-between mb-6">
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${product.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}
                    style={{ boxShadow: `0 8px 24px ${product.accentColor}` }}
                  >
                    <Icon className="w-7 h-7 text-white" strokeWidth={1.8} />
                  </div>
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold ${status.badgeClass}`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${status.dotClass} animate-pulse`} />
                    {status.label}
                  </span>
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className="font-display text-3xl text-sage-900 mb-1">{product.name}</h3>
                  <p className="text-mint-600 font-medium text-sm mb-4">{product.tagline}</p>
                  <p className="text-sage-500 leading-relaxed mb-6">{product.description}</p>

                  {/* Features list */}
                  <ul className="space-y-2.5 mb-8">
                    {product.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2.5 text-sm text-sage-600">
                        <CheckCircle2 className="w-4 h-4 text-mint-500 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {product.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 rounded-full bg-mint-50 border border-mint-100 text-mint-700 text-xs font-mono font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  {product.url ? (
                    <a
                      href={product.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-mint-600 hover:text-mint-700 group/link transition-colors"
                    >
                      Accéder à l'application
                      <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform duration-300" />
                    </a>
                  ) : (
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-sage-500 hover:text-mint-600 group/link transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                      En savoir plus — nous contacter
                    </a>
                  )}
                </div>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}
