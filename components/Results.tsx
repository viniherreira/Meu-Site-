'use client';

import { useRef, useState, useCallback, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CaseItem {
  before: string;
  after: string;
  title: string;
  subtitle: string;
}

const cases: CaseItem[] = [
  {
    before: '/img/1antes-semdente.jpeg',
    after: '/img/1depois-comdente.jpeg',
    title: 'Reabilitação Completa',
    subtitle: 'Implantes com carga imediata',
  },
  {
    before: '/img/antes-f.jpeg',
    after: '/img/depois-f.jpeg',
    title: 'Estética Dental',
    subtitle: 'Lentes de contato e clareamento',
  },
  {
    before: '/img/mulher-antes.jpeg',
    after: '/img/mulher-depos.jpeg',
    title: 'Harmonização Oral',
    subtitle: 'Alinhamento e reabilitação estética',
  },
];

function ComparisonSlider({ before, after, title, subtitle }: CaseItem) {
  const [position, setPosition] = useState(50);
  const [dragging, setDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    setPosition(Math.min(Math.max((x / rect.width) * 100, 2), 98));
  }, []);

  useEffect(() => {
    if (!dragging) return;
    const onMove = (e: MouseEvent) => updatePosition(e.clientX);
    const onTouchMove = (e: TouchEvent) => updatePosition(e.touches[0].clientX);
    const onUp = () => setDragging(false);
    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseup', onUp);
    document.addEventListener('touchmove', onTouchMove, { passive: true });
    document.addEventListener('touchend', onUp);
    return () => {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseup', onUp);
      document.removeEventListener('touchmove', onTouchMove);
      document.removeEventListener('touchend', onUp);
    };
  }, [dragging, updatePosition]);

  return (
    <div className="flex flex-col gap-5">
      {/* Slider */}
      <div
        ref={containerRef}
        onMouseDown={(e) => { setDragging(true); updatePosition(e.clientX); }}
        onTouchStart={(e) => { setDragging(true); updatePosition(e.touches[0].clientX); }}
        className="relative aspect-[4/3] rounded-3xl overflow-hidden cursor-ew-resize select-none group shadow-xl"
      >
        {/* BEFORE */}
        <div className="absolute inset-0">
          <Image src={before} alt="Antes do tratamento" fill className="object-cover" sizes="(max-width: 768px) 90vw, 400px" />
          <div className="absolute bottom-4 left-4 z-10 bg-black/60 backdrop-blur-sm text-white text-xs font-sans font-medium px-3 py-1.5 rounded-full tracking-wide">
            Antes
          </div>
        </div>

        {/* AFTER – revealed by position */}
        <div
          className="absolute inset-0"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        >
          <Image src={after} alt="Depois do tratamento" fill className="object-cover" sizes="(max-width: 768px) 90vw, 400px" />
          <div className="absolute bottom-4 right-4 z-10 bg-gold/90 backdrop-blur-sm text-white text-xs font-sans font-medium px-3 py-1.5 rounded-full tracking-wide">
            Depois
          </div>
        </div>

        {/* Divider line */}
        <div
          className="absolute top-0 bottom-0 z-20 flex items-center justify-center pointer-events-none"
          style={{ left: `${position}%`, transform: 'translateX(-50%)' }}
        >
          <div className="absolute inset-y-0 w-0.5 bg-white/90 shadow-sm" />
          <div className="relative w-10 h-10 bg-white rounded-full shadow-xl flex items-center justify-center pointer-events-none">
            <ChevronLeft size={14} className="text-dark -mr-0.5" />
            <ChevronRight size={14} className="text-dark -ml-0.5" />
          </div>
        </div>

        {/* Hint overlay */}
        <div className="absolute inset-0 flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="bg-black/30 backdrop-blur-sm text-white text-xs font-sans px-4 py-2 rounded-full">
            Arraste para comparar
          </div>
        </div>
      </div>

      {/* Info */}
      <div className="text-center">
        <h3 className="font-cormorant text-2xl font-medium text-dark">{title}</h3>
        <p className="font-sans text-sm text-muted mt-1">{subtitle}</p>
      </div>
    </div>
  );
}

export default function Results() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="resultados" ref={ref} className="section-py bg-white">
      <div className="container-main">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="section-badge justify-center mb-5">Transformações Reais</span>
          <h2 className="section-heading text-5xl lg:text-6xl mb-6">
            Resultados que <span className="italic text-gold">falam</span> por si
          </h2>
          <p className="font-sans text-muted max-w-xl mx-auto leading-relaxed">
            Arraste o comparador e veja a transformação real de cada paciente.
            Casos realizados com planejamento digital e atenção ao detalhe.
          </p>
        </motion.div>

        {/* Sliders grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {cases.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              <ComparisonSlider {...c} />
            </motion.div>
          ))}
        </div>

        {/* Gallery strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-20"
        >
          <p className="font-sans text-xs text-muted tracking-widest uppercase text-center mb-8">
            Mais resultados
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              '/img/exemplo-3.png',
              '/img/exemplo-4.png',
              '/img/antes-e-depois.jpeg',
              '/img/exemplo-5.png',
            ].map((src, i) => (
              <motion.div
                key={src}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + i * 0.08 }}
                className="aspect-square rounded-2xl overflow-hidden group relative"
              >
                <Image
                  src={src}
                  alt={`Resultado clínico ${i + 1}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 45vw, 25vw"
                />
                <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/20 transition-colors duration-300 rounded-2xl" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
