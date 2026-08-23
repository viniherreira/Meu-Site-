'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { waSobreTratamento } from '@/lib/contato';

const tratamentos = [
  {
    nome: 'Implantes dentários',
    texto:
      'Substituição de dentes perdidos por pinos de titânio integrados ao osso. Devolve mastigação, fala e estética sem apoio nos dentes vizinhos.',
  },
  {
    nome: 'Carga imediata',
    texto:
      'Quando as condições ósseas permitem, a prótese provisória é instalada na mesma sessão da cirurgia — sem passar o período de cicatrização sem dentes.',
  },
  {
    nome: 'Lentes de contato dental',
    texto:
      'Lâminas de porcelana de espessura mínima cimentadas sobre o dente. Corrigem cor, formato e pequenos desalinhamentos com desgaste reduzido.',
  },
  {
    nome: 'Estética do sorriso',
    texto:
      'Ajuste de proporção, contorno e cor, planejado digitalmente e testado em modelo antes de qualquer desgaste definitivo.',
  },
  {
    nome: 'Clareamento dental',
    texto:
      'Protocolo de consultório ou supervisionado em casa, com avaliação prévia do esmalte e controle da sensibilidade.',
  },
  {
    nome: 'Cirurgia odontológica',
    texto:
      'Extrações, enxertos ósseos e instalação de implantes com planejamento em tomografia e guia cirúrgico.',
  },
  {
    nome: 'Odontopediatria',
    texto:
      'Acompanhamento e prevenção para crianças dos 3 meses aos 15 anos, em consultas leves e no tempo de cada fase.',
  },
];

export default function Services() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="tratamentos" ref={ref} className="section-py bg-cream">
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <span className="section-badge mb-5">Tratamentos</span>
          <h2 className="section-heading text-4xl lg:text-5xl">
            O que é feito na clínica
          </h2>
          <p className="mt-5 leading-relaxed text-muted">
            A indicação depende sempre da avaliação clínica e do exame de imagem.
            Abaixo, o que cada procedimento resolve — e o que ele não substitui.
          </p>
        </motion.div>

        <div className="mt-14 border-t border-border">
          {tratamentos.map((t, i) => (
            <motion.article
              key={t.nome}
              initial={{ opacity: 0, y: 14 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: Math.min(i, 4) * 0.06 }}
              className="group grid grid-cols-1 items-baseline gap-x-10 gap-y-3 border-b
                         border-border py-8 md:grid-cols-[1.5rem_minmax(0,15rem)_1fr_auto]"
            >
              <span className="font-cormorant text-lg text-gold-dark" aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </span>

              <h3 className="font-cormorant text-2xl leading-snug text-dark">{t.nome}</h3>

              <p className="max-w-xl text-[15px] leading-relaxed text-muted">{t.texto}</p>

              <a
                href={waSobreTratamento(t.nome.toLowerCase())}
                target="_blank"
                rel="noopener noreferrer"
                className="-my-2.5 inline-flex shrink-0 items-center gap-1.5 py-2.5 text-sm
                           font-medium text-gold-dark transition-colors hover:text-gold-deep"
              >
                Tirar dúvidas
                <ArrowUpRight
                  size={15}
                  className="transition-transform duration-200 group-hover:translate-x-0.5
                             group-hover:-translate-y-0.5"
                />
                <span className="sr-only"> sobre {t.nome} pelo WhatsApp</span>
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
