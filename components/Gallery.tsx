'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';

/**
 * Estas fotos já vêm montadas como antes/depois pela clínica, e todas têm
 * proporção quadrada — por isso a grade usa aspect-square sem cortar nada.
 * A antiga `antes-e-depois.jpeg` saiu daqui: é o mesmo caso do comparador
 * acima e, sendo retrato 4:5, era cortada em cima e embaixo nesta grade.
 */
const casos = [
  {
    src: '/img/exemplo-3.png',
    alt: 'Paciente antes e depois da reabilitação estética — à esquerda, antes; à direita, depois',
  },
  {
    src: '/img/exemplo-4.png',
    alt: 'Paciente antes e depois da reabilitação com prótese — à esquerda, antes; à direita, depois',
  },
  {
    src: '/img/exemplo-5.png',
    alt: 'Arcada dentária antes e depois do tratamento, em vista aproximada',
  },
];

export default function Gallery() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="bg-white pb-20 lg:pb-28">
      <div className="container-main">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="text-xs uppercase tracking-[0.18em] text-muted"
        >
          Outros casos
        </motion.h2>

        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {casos.map((caso, i) => (
            <motion.div
              key={caso.src}
              initial={{ opacity: 0, y: 14 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              className="relative aspect-square overflow-hidden rounded-xl bg-dark/5
                         ring-1 ring-dark/10"
            >
              <Image
                src={caso.src}
                alt={caso.alt}
                fill
                sizes="(max-width: 640px) 100vw, 33vw"
                className="object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
