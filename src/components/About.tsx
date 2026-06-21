import { Shield, Zap, HeartHandshake, TrendingUp } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const reasons = [
  {
    icon: Zap,
    title: 'Agilité & Rapidité',
    description: 'Méthodologie Agile, sprints courts et livraisons continues pour un time-to-market optimal.',
    color: '#22c55e',
  },
  {
    icon: Shield,
    title: 'Qualité Garantie',
    description: 'Tests automatisés, revues de code et CI/CD pour une fiabilité sans compromis.',
    color: '#16a34a',
  },
  {
    icon: HeartHandshake,
    title: 'Partenariat Humain',
    description: 'Communication transparente, accompagnement personnalisé et relation de confiance à long terme.',
    color: '#4ade80',
  },
  {
    icon: TrendingUp,
    title: 'Scalabilité',
    description: 'Architectures pensées pour grandir avec votre business, sans refonte majeure.',
    color: '#15803d',
  },
];

export default function About() {
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
    <section id="apropos" className="relative py-28 lg:py-36 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-mint-50/30 to-white pointer-events-none" />

      {/* Large Decorative Text */}
      <div className="absolute top-1/2 -translate-y-1/2 -left-20 pointer-events-none select-none opacity-[0.03]">
        <span className="font-display text-[200px] lg:text-[300px] text-sage-900 leading-none whitespace-nowrap">
          STR
        </span>
      </div>

      <div className="relative max-w-7xl mx-auto section-padding" ref={sectionRef}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Text */}
          <div className={`space-y-6 transition-all duration-700 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <span className="inline-block text-sm font-semibold text-mint-600 tracking-wider uppercase font-mono">
              Pourquoi Nous
            </span>
            <h2 className="font-display text-4xl sm:text-5xl text-sage-900 leading-tight">
              L'excellence au service
              <span className="gradient-text block mt-1">de votre ambition</span>
            </h2>
            <p className="text-lg text-sage-400 leading-relaxed">
              Nous ne sommes pas simplement des développeurs — nous sommes vos partenaires
              technologiques. Chaque ligne de code que nous écrivons est pensée pour
              créer de la valeur durable pour votre entreprise.
            </p>
            <p className="text-sage-500 leading-relaxed">
              Notre équipe combine expertise technique de pointe et compréhension
              métier approfondie pour livrer des solutions qui dépassent les attentes
              et génèrent un impact réel.
            </p>

            {/* Decorative Line */}
            <div className="pt-4">
              <div className="h-1 w-20 rounded-full bg-gradient-to-r from-mint-400 to-emerald-500" />
            </div>
          </div>

          {/* Right - Grid of Reasons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {reasons.map((reason, i) => {
              const Icon = reason.icon;
              return (
                <div
                  key={reason.title}
                  className={`group glass-card glow-card rounded-2xl p-6 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 ${
                    visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                  }`}
                  style={{ transitionDelay: `${i * 100 + 200}ms` }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300"
                    style={{
                      background: `linear-gradient(135deg, ${reason.color}20, ${reason.color}40)`,
                      boxShadow: `0 4px 16px ${reason.color}20`,
                    }}
                  >
                    <Icon className="w-6 h-6" style={{ color: reason.color }} />
                  </div>
                  <h4 className="font-display text-lg text-sage-900 mb-2">{reason.title}</h4>
                  <p className="text-sm text-sage-400 leading-relaxed">{reason.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
