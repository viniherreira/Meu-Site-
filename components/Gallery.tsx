'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

const images = [
  { src: '/img/exemplo-3.png', alt: 'Resultado clínico 1' },
  { src: '/img/exemplo-4.png', alt: 'Resultado clínico 2' },
  { src: '/img/antes-e-depois.jpeg', alt: 'Resultado clínico 3' },
  { src: '/img/exemplo-5.png', alt: 'Resultado clínico 4' },
];

export default function Gallery() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="pb-24 bg-white">
      <div className="container-main">
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="font-sans text-xs text-muted tracking-widest uppercase text-center mb-8"
        >
          Mais resultados
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((img, i) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] }}
              className="aspect-square rounded-2xl overflow-hidden group relative"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 45vw, 25vw"
              />
              <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/20 transition-colors duration-300 rounded-2xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
