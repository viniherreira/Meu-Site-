'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Cpu, Sliders, CheckCircle2, Heart, ShieldCheck, Zap } from 'lucide-react';

const differentials = [
  {
    icon: Cpu,
    title: 'Tecnologia Digital',
    description:
      'Planejamento 3D, scanners intraorais e guias cirúrgicos para máxima precisão em cada procedimento.',
  },
  {
    icon: Sliders,
    title: 'Planejamento Personalizado',
    description:
      'Cada tratamento é único. Análise detalhada do seu caso para resultados sob medida e previsíveis.',
  },
  {
    icon: CheckCircle2,
    title: 'Resultados Previsíveis',
    description:
      'Simulação digital antes do tratamento. Você visualiza o resultado esperado antes de começar.',
  },
  {
    icon: Heart,
    title: 'Atendimento Humanizado',
    description:
      'Cuidado que vai além da técnica. Ambiente acolhedor e atenção completamente individualizada.',
  },
  {
    icon: ShieldCheck,
    title: 'Segurança Clínica',
    description:
      'Protocolos rigorosos de biossegurança e esterilização para sua completa tranquilidade.',
  },
  {
    icon: Zap,
    title: 'Carga Imediata',
    description:
      'Implantes e dentes fixos no mesmo dia da cirurgia. Recupere seu sorriso em horas.',
  },
];

export default function Differentials() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="section-py bg-white">
      <div className="container-main">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-20 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8"
        >
          <div>
            <span className="section-badge mb-5 block">Por que escolher</span>
            <h2 className="section-heading text-5xl lg:text-6xl">
              Nossos{' '}
              <span className="italic text-gold">Diferenciais</span>
            </h2>
          </div>
          <p className="font-sans text-muted max-w-sm leading-relaxed lg:text-right">
            Tecnologia avançada e atendimento humanizado para
            resultados que superam expectativas.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentials.map((d, i) => {
            const Icon = d.icon;
            return (
              <motion.div
                key={d.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="group relative p-8 rounded-3xl border border-border bg-cream
                           hover:border-gold/30 hover:shadow-lg hover:shadow-gold/5
                           transition-all duration-500 cursor-default"
              >
                {/* Number */}
                <span className="absolute top-6 right-8 font-cormorant text-6xl font-light text-dark/5 group-hover:text-gold/10 transition-colors duration-500 select-none">
                  0{i + 1}
                </span>

                {/* Icon */}
                <div className="mb-6 w-12 h-12 rounded-2xl bg-gold/10 flex items-center justify-center
                                group-hover:bg-gold/15 transition-colors duration-300">
                  <Icon size={22} className="text-gold" />
                </div>

                <h3 className="font-cormorant text-2xl font-medium text-dark mb-3">
                  {d.title}
                </h3>
                <p className="font-sans text-sm text-muted leading-relaxed">
                  {d.description}
                </p>

                {/* Hover line */}
                <div className="absolute bottom-0 left-8 right-8 h-px bg-gold/0 group-hover:bg-gold/30 transition-all duration-500" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
