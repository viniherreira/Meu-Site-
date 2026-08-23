'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView, useReducedMotion } from 'framer-motion';

type Props = {
  alvo: number;
  sufixo?: string;
  prefixo?: string;
  /** Formata com separador de milhar (1.000). */
  milhar?: boolean;
  duracao?: number;
  className?: string;
};

/**
 * Conta de 0 até `alvo` quando entra na tela. Quem tem "reduzir movimento"
 * ligado no sistema vê o número final direto, sem a animação.
 */
export default function NumeroContador({
  alvo,
  sufixo = '',
  prefixo = '',
  milhar = false,
  duracao = 1600,
  className,
}: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const emVista = useInView(ref, { once: true, margin: '-40px' });
  const semMovimento = useReducedMotion();
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!emVista) return;
    if (semMovimento) {
      setN(alvo);
      return;
    }
    let raf = 0;
    const inicio = performance.now();
    const passo = (agora: number) => {
      const t = Math.min((agora - inicio) / duracao, 1);
      const eased = 1 - Math.pow(1 - t, 3); // easeOutCubic
      setN(Math.round(eased * alvo));
      if (t < 1) raf = requestAnimationFrame(passo);
    };
    raf = requestAnimationFrame(passo);
    return () => cancelAnimationFrame(raf);
  }, [emVista, alvo, duracao, semMovimento]);

  const numero = milhar ? n.toLocaleString('pt-BR') : String(n);

  return (
    <span ref={ref} className={className}>
      {prefixo}
      {numero}
      {sufixo}
    </span>
  );
}
