import { Lightbulb, Layout, Network, Sparkles, ArrowUpRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const services = [
  {
    icon: Lightbulb,
    title: 'Solutions Digitales Sur Mesure',
    description:
      'Conception et développement de solutions logicielles adaptées à vos enjeux métier. Chaque projet est pensé pour créer de la valeur durable et répondre à vos objectifs business.',
    gradient: 'from-emerald-500 to-mint-600',
    glowColor: 'rgba(16, 185, 129, 0.15)',
    delay: '0s',
  },
  {
    icon: Layout,
    title: "Conception d'Expériences Numériques",
    description:
      "Interfaces intuitives, applications mobiles et plateformes digitales centrées sur l'utilisateur. Nous créons des expériences engageantes qui fidélisent vos clients.",
    gradient: 'from-mint-500 to-emerald-600',
    glowColor: 'rgba(34, 197, 94, 0.15)',
    delay: '0.1s',
  },
  {
    icon: Network,
    title: 'Intégration & Infrastructure',
    description:
      "Mise en place d'infrastructures robustes, interconnexion de vos systèmes et migration vers le cloud. Nous assurons la performance et la fiabilité de votre écosystème.",
    gradient: 'from-emerald-400 to-mint-500',
    glowColor: 'rgba(52, 211, 153, 0.15)',
    delay: '0.2s',
  },
  {
    icon: Sparkles,
    title: 'Innovation & Transformation Numérique',
    description:
      "Intelligence artificielle, automatisation des processus et conseil stratégique digital. Nous vous accompagnons dans votre transformation pour rester compétitif.",
    gradient: 'from-mint-400 to-emerald-500',
    glowColor: 'rgba(74, 222, 128, 0.15)',
    delay: '0.3s',
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const Icon = service.icon;

  return (
    <div
      ref={ref}
      className={`group relative glass-card rounded-3xl p-8 glow-card animated-border transition-all duration-500 hover:shadow-2xl hover:-translate-y-1.5 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Background Glow */}
      <div
        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 50% 0%, ${service.glowColor} 0%, transparent 60%)`,
        }}
      />

      {/* Icon */}
      <div
        className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}
        style={{
          boxShadow: `0 8px 24px ${service.glowColor}`,
        }}
      >
        <Icon className="w-7 h-7 text-white" strokeWidth={1.8} />
      </div>

      {/* Content */}
      <h3 className="relative font-display text-2xl text-sage-900 mb-3">{service.title}</h3>
      <p className="relative text-sage-500 leading-relaxed mb-6">{service.description}</p>

      {/* Link */}
      <a
        href="#contact"
        className="relative inline-flex items-center gap-2 text-sm font-semibold text-mint-600 group-hover:text-mint-700 transition-colors"
      >
        En savoir plus
        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
      </a>

      {/* Decorative Corner Glow */}
      <div
        className="absolute top-0 right-0 w-40 h-40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 100% 0%, ${service.glowColor} 0%, transparent 70%)`,
        }}
      />
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" className="relative py-28 lg:py-36 section-mesh">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto section-padding mb-16">
        <div className="max-w-2xl">
          <span className="inline-block text-sm font-semibold text-mint-600 tracking-wider uppercase mb-4 font-mono">
            Nos Expertises
          </span>
          <h2 className="font-display text-4xl sm:text-5xl text-sage-900 leading-tight mb-6">
            Des solutions complètes pour
            <span className="gradient-text block mt-1">chaque défi numérique</span>
          </h2>
          <p className="text-lg text-sage-400 leading-relaxed">
            De la stratégie à la mise en production, nous couvrons l'ensemble
            de votre transformation digitale avec excellence et agilité.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto section-padding">
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>

      {/* Background Decoration */}
      <div
        className="absolute top-1/2 -translate-y-1/2 right-0 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(74,222,128,0.06) 0%, transparent 70%)',
        }}
      />
    </section>
  );
}
