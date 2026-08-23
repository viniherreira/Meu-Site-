'use client';

import { useCallback, useRef, useState } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';

type Caso = {
  id: string;
  antes: string;
  depois: string;
  titulo: string;
  detalhe: string;
};

/**
 * As imagens em /img/casos foram reenquadradas (scripts/gerar-casos.ps1) para que,
 * dentro de cada par, a boca fique na mesma posicao e na mesma escala. E isso que
 * faz o comparador alinhar ao arrastar: o CSS sozinho nao resolve, porque as fotos
 * originais tem proporcoes e enquadramentos diferentes.
 */
const casos: Caso[] = [
  {
    id: 'caso-1',
    antes: '/img/casos/caso-1-antes.jpg',
    depois: '/img/casos/caso-1-depois.jpg',
    titulo: 'Reabilitação com implantes',
    detalhe: 'Prótese fixa sobre implantes, arcada superior',
  },
  {
    id: 'caso-2',
    antes: '/img/casos/caso-2-antes.jpg',
    depois: '/img/casos/caso-2-depois.jpg',
    titulo: 'Reabilitação estética',
    detalhe: 'Restabelecimento de forma, cor e proporção',
  },
  {
    id: 'caso-3',
    antes: '/img/casos/caso-3-antes.jpg',
    depois: '/img/casos/caso-3-depois.jpg',
    titulo: 'Reconstrução do sorriso',
    detalhe: 'Substituição de dentes ausentes e acabamento estético',
  },
];

function Comparador({ caso }: { caso: Caso }) {
  const [pos, setPos] = useState(50);
  const [arrastando, setArrastando] = useState(false);
  const [interagiu, setInteragiu] = useState(false);
  const quadroRef = useRef<HTMLDivElement>(null);

  const mover = useCallback((clientX: number) => {
    const quadro = quadroRef.current;
    if (!quadro) return;
    const { left, width } = quadro.getBoundingClientRect();
    setPos(Math.min(100, Math.max(0, ((clientX - left) / width) * 100)));
  }, []);

  // Pointer Events cobrem mouse, toque e caneta num caminho so, e o pointer capture
  // mantem o arrasto funcionando mesmo quando o cursor sai do quadro.
  const aoPressionar = (e: React.PointerEvent<HTMLDivElement>) => {
    // Se a captura falhar, o arrasto ainda funciona dentro do quadro — não vale
    // deixar a exceção abortar o handler inteiro.
    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch {
      /* ponteiro já não está ativo */
    }
    setArrastando(true);
    setInteragiu(true);
    mover(e.clientX);
  };

  const aoMover = (e: React.PointerEvent<HTMLDivElement>) => {
    if (arrastando) mover(e.clientX);
  };

  const aoSoltar = (e: React.PointerEvent<HTMLDivElement>) => {
    try {
      if (e.currentTarget.hasPointerCapture(e.pointerId)) {
        e.currentTarget.releasePointerCapture(e.pointerId);
      }
    } catch {
      /* nada a liberar */
    }
    setArrastando(false);
  };

  const aoTeclar = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const passo = e.shiftKey ? 10 : 4;
    const destino =
      e.key === 'ArrowLeft' ? pos - passo
      : e.key === 'ArrowRight' ? pos + passo
      : e.key === 'Home' ? 0
      : e.key === 'End' ? 100
      : null;

    if (destino === null) return;
    e.preventDefault();
    setInteragiu(true);
    setPos(Math.min(100, Math.max(0, destino)));
  };

  return (
    <figure className="group">
      <div
        ref={quadroRef}
        role="slider"
        tabIndex={0}
        aria-label={'Comparar antes e depois: ' + caso.titulo}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(pos)}
        aria-valuetext={Math.round(pos) + '% do resultado final visível'}
        onPointerDown={aoPressionar}
        onPointerMove={aoMover}
        onPointerUp={aoSoltar}
        onPointerCancel={aoSoltar}
        onKeyDown={aoTeclar}
        className="relative aspect-video w-full overflow-hidden rounded-2xl bg-dark/5
                   select-none touch-pan-y cursor-ew-resize
                   ring-1 ring-dark/10 focus-visible:ring-2 focus-visible:ring-gold"
      >
        {/* Antes: camada de base */}
        <Image
          src={caso.antes}
          alt={caso.titulo + ' — antes do tratamento'}
          fill
          draggable={false}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="pointer-events-none object-cover"
        />

        {/* Depois: revelado da esquerda para a direita */}
        <div
          className="absolute inset-0"
          style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
        >
          <Image
            src={caso.depois}
            alt={caso.titulo + ' — depois do tratamento'}
            fill
            draggable={false}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="pointer-events-none object-cover"
          />
        </div>

        {/* Etiquetas: somem quando o divisor chega perto delas */}
        <span
          className="absolute bottom-3 left-3 rounded-md bg-dark/70 px-2.5 py-1
                     text-[11px] font-medium uppercase tracking-wider text-white
                     transition-opacity duration-200"
          style={{ opacity: pos > 22 ? 1 : 0 }}
        >
          Depois
        </span>
        <span
          className="absolute bottom-3 right-3 rounded-md bg-dark/55 px-2.5 py-1
                     text-[11px] font-medium uppercase tracking-wider text-white
                     transition-opacity duration-200"
          style={{ opacity: pos < 78 ? 1 : 0 }}
        >
          Antes
        </span>

        {/* Divisor e manopla */}
        <div
          className="pointer-events-none absolute inset-y-0 z-10 w-px bg-white/90
                     shadow-[0_0_6px_rgba(0,0,0,0.35)]"
          style={{ left: `${pos}%` }}
        >
          <span
            className={`absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2
                        items-center justify-center rounded-full bg-white shadow-lg
                        transition-transform duration-150 ${arrastando ? 'scale-95' : ''}`}
          >
            <svg width="20" height="12" viewBox="0 0 20 12" aria-hidden="true" className="text-dark/70">
              <path
                d="M6 1 1.5 6 6 11M14 1l4.5 5-4.5 5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>

        {/* Dica discreta, some no primeiro toque */}
        <span
          className="pointer-events-none absolute left-1/2 top-3 -translate-x-1/2 rounded-full
                     bg-dark/60 px-3 py-1 text-[11px] text-white transition-opacity duration-300"
          style={{ opacity: interagiu ? 0 : 1 }}
        >
          Arraste para comparar
        </span>
      </div>

      <figcaption className="mt-4">
        <h3 className="font-cormorant text-xl text-dark">{caso.titulo}</h3>
        <p className="mt-0.5 text-sm text-muted">{caso.detalhe}</p>
      </figcaption>
    </figure>
  );
}

export default function Results() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="resultados" ref={ref} className="section-py bg-white">
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <span className="section-badge mb-5">Casos clínicos</span>
          <h2 className="section-heading text-4xl lg:text-5xl">
            Antes e depois, sem retoque
          </h2>
          <p className="mt-5 leading-relaxed text-muted">
            Arraste o divisor de cada foto para ver o mesmo paciente antes e depois
            do tratamento. As duas imagens de cada caso usam o mesmo enquadramento e
            a mesma escala, para que a comparação seja honesta.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
          {casos.map((caso, i) => (
            <motion.div
              key={caso.id}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Comparador caso={caso} />
            </motion.div>
          ))}
        </div>

        <p className="mt-12 max-w-2xl text-xs leading-relaxed text-muted">
          Imagens de pacientes reais, publicadas com autorização. Cada caso é único:
          o resultado depende das condições clínicas iniciais, do plano de tratamento
          escolhido e da resposta de cada organismo.
        </p>
      </div>
    </section>
  );
}
