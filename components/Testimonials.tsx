'use client';

import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Carla Menezes',
    treatment: 'Implante com Carga Imediata',
    initials: 'CM',
    color: '#E8D5B0',
    text: 'A Dra. Michele foi extremamente atenciosa e profissional. Explicou todo o processo com clareza e me deixou completamente tranquila. O resultado superou todas as minhas expectativas!',
    rating: 5,
  },
  {
    name: 'Juliana Prado',
    treatment: 'Reabilitação Oral Completa',
    initials: 'JP',
    color: '#D4E8D0',
    text: 'Profissional cuidadosa, consultório moderno e atendimento humanizado. Me senti segura durante todo o tratamento. Recomendo sem hesitação! Meu sorriso ficou incrível.',
    rating: 5,
  },
  {
    name: 'Renato Silva',
    treatment: 'Carga Imediata',
    initials: 'RS',
    color: '#D0D8E8',
    text: 'Ótimo atendimento! Fiz implante com carga imediata e fiquei impressionado com o resultado. Saí com dentes fixos no mesmo dia. Profissionalismo e tecnologia de primeira!',
    rating: 5,
  },
  {
    name: 'Ana Luiza Costa',
    treatment: 'Lentes de Contato Dental',
    initials: 'AL',
    color: '#E8D8D0',
    text: 'Sempre sonhei com um sorriso perfeito e a Dra. Michele realizou esse sonho. O resultado é completamente natural. Toda a equipe é maravilhosa e o ambiente é muito acolhedor.',
    rating: 5,
  },
  {
    name: 'Marcos Fernandes',
    treatment: 'Estética Odontológica',
    initials: 'MF',
    color: '#DDE8D0',
    text: 'Excelente profissional! O planejamento digital foi incrível, já vi o resultado antes de iniciar o tratamento. A precisão e o cuidado em cada detalhe são impressionantes.',
    rating: 5,
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={14}
          className={i < rating ? 'text-gold fill-gold' : 'text-border'}
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  const visible = [
    testimonials[current],
    testimonials[(current + 1) % testimonials.length],
    testimonials[(current + 2) % testimonials.length],
  ];

  return (
    <section id="depoimentos" ref={ref} className="section-py bg-cream overflow-hidden">
      <div className="container-main">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8"
        >
          <div>
            <span className="section-badge mb-5 block">Depoimentos</span>
            <h2 className="section-heading text-5xl lg:text-6xl">
              O que dizem nossos{' '}
              <span className="italic text-gold">pacientes</span>
            </h2>
          </div>

          {/* Navigation */}
          <div className="flex gap-3">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full border border-border hover:border-gold hover:bg-gold/5
                         flex items-center justify-center transition-all duration-300 group"
              aria-label="Anterior"
            >
              <ChevronLeft size={20} className="text-muted group-hover:text-gold transition-colors" />
            </button>
            <button
              onClick={next}
              className="w-12 h-12 rounded-full border border-border hover:border-gold hover:bg-gold/5
                         flex items-center justify-center transition-all duration-300 group"
              aria-label="Próximo"
            >
              <ChevronRight size={20} className="text-muted group-hover:text-gold transition-colors" />
            </button>
          </div>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visible.map((t, i) => (
            <motion.div
              key={`${t.name}-${current}`}
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className={`bg-white rounded-3xl p-8 border border-border flex flex-col gap-6
                         ${i === 0 ? 'lg:shadow-lg lg:shadow-gold/5 lg:border-gold/20' : ''}`}
            >
              {/* Quote icon */}
              <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                <Quote size={18} className="text-gold" />
              </div>

              {/* Stars */}
              <StarRating rating={t.rating} />

              {/* Text */}
              <p className="font-sans text-dark/70 text-sm leading-relaxed flex-1">
                "{t.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-4 border-t border-border">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-dark font-cormorant font-medium text-lg"
                  style={{ backgroundColor: t.color }}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="font-sans font-medium text-dark text-sm">{t.name}</p>
                  <p className="font-sans text-xs text-muted">{t.treatment}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pagination dots */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="flex justify-center gap-2 mt-10"
        >
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`rounded-full transition-all duration-300 ${
                i === current ? 'w-6 h-2 bg-gold' : 'w-2 h-2 bg-border hover:bg-gold/40'
              }`}
              aria-label={`Ir para depoimento ${i + 1}`}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
