'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Baby, Star } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import NumeroContador from './NumeroContador';
import { WA_AGENDAR } from '@/lib/contato';

const numeros = [
  { alvo: 1000, sufixo: '+', milhar: true, rotulo: 'Pacientes' },
  { alvo: 25, sufixo: '+', milhar: false, rotulo: 'Anos de experiência' },
  { alvo: 98, sufixo: '%', milhar: false, rotulo: 'Satisfação' },
];

export default function Hero() {
  const semMovimento = useReducedMotion();

  // Só flutua se a pessoa não pediu para reduzir movimento no sistema.
  const flutuar = (delay: number) =>
    semMovimento
      ? {}
      : {
          animate: { y: [0, -9, 0] },
          transition: { duration: 4.5, repeat: Infinity, ease: 'easeInOut' as const, delay },
        };

  return (
    <section id="inicio" className="relative overflow-hidden bg-cream">
      {/* brilho suave de fundo, bem discreto */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-10%] top-[-10%] h-[520px] w-[520px]
                   rounded-full bg-gold/10 blur-[120px]"
      />

      <div className="container-main relative">
        <div className="grid min-h-[100svh] grid-cols-1 items-center gap-14 pb-20 pt-32 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:pt-28">
          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="section-badge">CRO-SP 71275 &middot; São Paulo</span>

            <h1
              className="section-heading mt-7"
              style={{ fontSize: 'clamp(2.7rem, 5.4vw, 4.6rem)' }}
            >
              Um sorriso saudável em{' '}
              <span className="italic text-gold-dark">cada idade</span>.
            </h1>

            <p className="mt-6 max-w-md text-[17px] leading-relaxed text-muted">
              Implantes e reabilitação oral para adultos, odontopediatria e prevenção
              para as crianças — com planejamento cuidadoso e acompanhamento até o fim.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={WA_AGENDAR}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary group"
              >
                <WhatsAppIcon size={17} />
                Agendar avaliação
                <ArrowRight
                  size={16}
                  className="transition-transform duration-200 group-hover:translate-x-0.5"
                />
              </a>
              <a href="#resultados" className="btn-outline">
                Ver casos clínicos
              </a>
            </div>

            {/* Números com contagem animada */}
            <dl className="mt-12 flex flex-wrap gap-x-10 gap-y-5 border-t border-dark/10 pt-7">
              {numeros.map((n) => (
                <div key={n.rotulo}>
                  <dt className="font-cormorant text-[32px] leading-none text-dark">
                    <NumeroContador
                      alvo={n.alvo}
                      sufixo={n.sufixo}
                      milhar={n.milhar}
                    />
                  </dt>
                  <dd className="mt-1.5 text-xs tracking-wide text-muted">{n.rotulo}</dd>
                </div>
              ))}
            </dl>
          </motion.div>

          {/* Retrato + cards flutuantes */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-[380px] lg:max-w-[420px]"
          >
            {/* anel decorativo que gira devagar */}
            {!semMovimento && (
              <motion.div
                aria-hidden="true"
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
                className="pointer-events-none absolute inset-[-7%] rounded-full border border-dashed border-gold/25"
              />
            )}

            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] bg-dark/5 shadow-xl">
              <Image
                src="/img/img-dra.jpeg"
                alt="Dra. Michele Herreira, cirurgiã-dentista"
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 420px"
                className="object-cover object-top"
              />
            </div>

            {/* Card: registro */}
            <motion.div
              {...flutuar(0)}
              className="absolute -left-4 top-8 rounded-2xl border border-border bg-surface/95
                         px-4 py-3 shadow-lg backdrop-blur-sm lg:-left-8"
            >
              <p className="text-[10px] uppercase tracking-wider text-muted">Registro</p>
              <p className="font-cormorant text-xl leading-none text-dark">CRO-SP</p>
              <p className="text-sm font-medium text-gold-dark">71275</p>
            </motion.div>

            {/* Card: satisfação */}
            <motion.div
              {...flutuar(1.2)}
              className="absolute -right-3 bottom-24 rounded-2xl border border-border bg-surface/95
                         px-4 py-3 shadow-lg backdrop-blur-sm lg:-right-6"
            >
              <div className="mb-1 flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={12} className="fill-gold text-gold" aria-hidden="true" />
                ))}
              </div>
              <p className="font-cormorant text-xl leading-none text-dark">98%</p>
              <p className="text-xs text-muted">Satisfação</p>
            </motion.div>

            {/* Card: odontopediatria */}
            <motion.div
              {...flutuar(0.6)}
              className="absolute -bottom-4 left-2 flex items-center gap-2.5 rounded-2xl border
                         border-border bg-surface/95 px-4 py-3 shadow-lg backdrop-blur-sm lg:left-6"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gold/15">
                <Baby size={16} className="text-gold-dark" aria-hidden="true" />
              </span>
              <div>
                <p className="text-sm font-medium leading-tight text-dark">Odontopediatria</p>
                <p className="text-xs text-muted">Dos 3 meses aos 15 anos</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
