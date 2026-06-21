import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center overflow-hidden pt-16"
    >
      {/* Atmospheric Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 grid-bg opacity-30" />

        <div
          className="absolute top-24 right-[10%] w-[400px] h-[400px] rounded-full animate-pulse-glow"
          style={{
            background: 'radial-gradient(circle, rgba(111,179,126,0.07) 0%, transparent 70%)',
          }}
        />
        <div
          className="absolute bottom-12 left-[5%] w-[350px] h-[350px] rounded-full animate-pulse-glow"
          style={{
            background: 'radial-gradient(circle, rgba(60,122,77,0.05) 0%, transparent 70%)',
            animationDelay: '2s',
          }}
        />

        {/* Subtle vertical lines */}
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-sage-200/25 to-transparent" />
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-sage-200/15 to-transparent" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto section-padding w-full py-24 lg:py-0">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Content — 7 columns */}
          <div className="lg:col-span-7 space-y-7">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 backdrop-blur-md border border-sage-200/50 text-sage-600 text-[13px] font-medium animate-fade-up"
            >
              <span className="flex h-1.5 w-1.5 rounded-full bg-mint-500 animate-pulse" />
              Solutions digitales innovantes
            </div>

            <h1
              className="font-display text-[2.5rem] sm:text-6xl lg:text-[3.75rem] leading-[1.1] text-balance animate-fade-up"
              style={{ animationDelay: '0.08s' }}
            >
              <span className="text-sage-800">Nous construisons</span>
              <span className="block mt-1">
                <span className="gradient-text">le numérique</span>
              </span>
              <span className="block text-sage-800">de demain</span>
            </h1>

            <p
              className="text-base sm:text-lg text-sage-400 leading-relaxed max-w-lg animate-fade-up"
              style={{ animationDelay: '0.16s' }}
            >
              Solutions digitales sur mesure, conseil stratégique et transformation
              numérique — nous transformons vos idées en résultats concrets, performants
              et pérennes.
            </p>

            <div
              className="flex flex-wrap gap-3 animate-fade-up"
              style={{ animationDelay: '0.24s' }}
            >
              <a href="#contact" className="btn-primary">
                Démarrer un projet
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#services" className="btn-secondary">
                Découvrir nos services
              </a>
            </div>

            {/* Trust Stats */}
            <div
              className="flex items-center gap-6 pt-4 animate-fade-up"
              style={{ animationDelay: '0.32s' }}
            >
              <div>
                <div className="text-xl font-bold text-sage-900 font-mono tabular-nums">2</div>
                <div className="text-[12px] text-sage-400 mt-0.5">Solutions</div>
              </div>
              <div className="w-px h-8 bg-sage-200/50" />
              <div>
                <div className="text-xl font-bold text-sage-900 font-mono tabular-nums">24/7</div>
                <div className="text-[12px] text-sage-400 mt-0.5">Monitoring</div>
              </div>
              <div className="w-px h-8 bg-sage-200/50" />
              <div>
                <div className="text-xl font-bold text-sage-900 font-mono tabular-nums">Afrique</div>
                <div className="text-[12px] text-sage-400 mt-0.5">de l'Ouest</div>
              </div>
            </div>
          </div>

          {/* Right Visual — Nos Produits */}
          <div className="relative hidden lg:flex items-center justify-center lg:col-span-5">
            <div className="relative w-full max-w-sm">

              {/* Main Card */}
              <div className="glass-card rounded-2xl border border-sage-100/50 overflow-hidden">
                {/* Top Bar */}
                <div className="flex items-center justify-between px-5 py-3 border-b border-sage-100/40">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-mint-500" />
                    <span className="text-[11px] font-mono text-sage-500 tracking-wide uppercase">Nos Produits</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-sage-200" />
                    <div className="w-1.5 h-1.5 rounded-full bg-sage-200" />
                    <div className="w-1.5 h-1.5 rounded-full bg-sage-300" />
                  </div>
                </div>

                {/* Product rows */}
                <div className="px-5 py-4 space-y-4">

                  {/* Dinthialma */}
                  <a href="#solutions" className="group/row flex items-center gap-4 p-3 rounded-xl hover:bg-mint-50/60 transition-colors duration-200">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-mint-600 flex items-center justify-center shrink-0 shadow-md shadow-emerald-200/40">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0" />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-semibold text-sage-900">Dinthialma</div>
                      <div className="text-[11px] text-sage-400 mt-0.5">Tontines & épargne collective</div>
                    </div>
                    <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-[10px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200 shrink-0">
                      <span className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
                      Live
                    </span>
                  </a>

                  <div className="h-px bg-sage-100/60 mx-1" />

                  {/* Citerne */}
                  <a href="#solutions" className="group/row flex items-center gap-4 p-3 rounded-xl hover:bg-mint-50/60 transition-colors duration-200">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-mint-500 to-emerald-600 flex items-center justify-center shrink-0 shadow-md shadow-mint-200/40">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-semibold text-sage-900">Citerne</div>
                      <div className="text-[11px] text-sage-400 mt-0.5">Jaugeage de citernes industrielles</div>
                    </div>
                    <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-[10px] font-semibold bg-sage-50 text-sage-600 border border-sage-200 shrink-0">
                      <span className="w-1 h-1 rounded-full bg-sage-400" />
                      En dev
                    </span>
                  </a>
                </div>

                {/* Status Bar */}
                <div className="px-5 py-3 border-t border-sage-100/40 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[10px] text-sage-500 font-mono">Systèmes opérationnels</span>
                  </div>
                  <span className="text-[10px] text-sage-400 font-mono">spirittechrevolution.com</span>
                </div>
              </div>

              {/* Subtle accent card behind */}
              <div className="absolute -inset-1 rounded-2xl -rotate-1 border border-sage-100/20 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
